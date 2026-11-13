# singbox-smart-split

Lightweight, zero-dependency **Smart Split-Tunneling** route configuration generator for `sing-box 1.12+` (compatible with `sing-box 1.14.x` action-based routing syntax), maintained by [YIVPN](https://yivpn.net/en/).

## Why Smart Split Tunneling?

Routing 100% of traffic through an encrypted tunnel often breaks local network printers/NAS (`.local` / RFC1918), triggers false-positive security challenges on domestic online banking, and adds unnecessary latency to regional services.

`singbox-smart-split` generates clean, modern `sing-box` route blocks using native `action: "sniff"` and `action: "hijack-dns"` syntax (replacing deprecated legacy outbound actions removed in `sing-box 1.13+`).

## Quick Start

```bash
node src/generate-route.mjs
npm test
```

## Official Pre-Built VPN Client

Want one-tap zero-logs Smart Split protection on **Windows, macOS, and Android** without writing JSON configs?
Download **[YIVPN](https://yivpn.net/en/download/)** (90 minutes free every day, no sign-up required) or grab verified installers from **[yivpn-official/yivpn Releases](https://github.com/yivpn-official/yivpn/releases)**.

## License

MIT © [YIVPN](https://yivpn.net)
