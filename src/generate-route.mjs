import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, '../rules/smart-split.route.json');

export function buildSmartSplitRoute({ directRuleSetTag = 'geoip-local', proxyOutbound = 'proxy', directOutbound = 'direct' } = {}) {
  return {
    final: proxyOutbound,
    auto_detect_interface: true,
    default_domain_resolver: 'dns-direct',
    rules: [
      { action: 'sniff' },
      { protocol: 'dns', action: 'hijack-dns' },
      { ip_is_private: true, outbound: directOutbound },
      { domain_suffix: ['.local', '.lan', '.internal', '.home.arpa'], outbound: directOutbound },
      { rule_set: [directRuleSetTag], outbound: directOutbound }
    ]
  };
}

const generated = JSON.stringify(buildSmartSplitRoute(), null, 2) + '\n';
if (process.argv.includes('--check')) {
  const existing = fs.readFileSync(outPath, 'utf8');
  assert.equal(existing, generated, 'smart-split.route.json is out of date');
  console.log('Smart Split route configuration verified.');
} else {
  fs.writeFileSync(outPath, generated, 'utf8');
  console.log('Generated', outPath);
}
