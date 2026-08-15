# Chrome Web Store Listing — Blank New Tab Page

> Last Updated: 2026-08-15

## Store Listing

**Extension Name** [REQUIRED]
Blank New Tab Page

**Short Description** [REQUIRED]
Replaces the new tab page with a completely blank page. No shortcuts, widgets, or clutter. Follows light and dark theme.

**Detailed Description** [REQUIRED]

```
Replaces Chrome’s default new tab page with a completely blank page.

FEATURES
• Empty new tab — no shortcuts, most-visited sites, search box, or widgets
• No visible tab title — the tab stays untitled
• Follows your browser theme — white in light mode, dark gray in dark mode
• High-contrast support — uses system colors when Windows high contrast is on
• Lightweight — no scripts, no accounts, and no extra UI

HOW TO USE
1. Install the extension.
2. Open a new tab.
3. You should see a blank page that matches your current theme.

Chrome may ask you to confirm that this extension can replace the new tab page. That is the only change it makes.

PRIVACY
This extension does not collect, store, or transmit any personal data. It does not use analytics, ads, or remote servers. It does not request access to your browsing history or to websites you visit.

PERMISSIONS
• Replace the page you see when opening a new tab — this is how the blank page is shown. The extension does nothing else.

SUPPORT
Found a bug or have a suggestion? Open an issue at https://github.com/cteerakit/blank-new-tab

Version 1.0.0 — Initial release: blank new tab with light, dark, and high-contrast theme support.
```

**Category** [REQUIRED]
Productivity

**Single Purpose** [REQUIRED]
Replaces the Chrome new tab page with a completely blank page.

**Primary Language** [REQUIRED]
English

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Store Icon [REQUIRED] | 128×128 PNG | ✅ Ready | `public/icon/128.png` |
| Screenshot 1 [REQUIRED] | 1280×800 or 640×400 | ⬜ Not created | |
| Screenshot 2 [RECOMMENDED] | 1280×800 or 640×400 | ⬜ Not created | |
| Screenshot 3 [RECOMMENDED] | 1280×800 or 640×400 | ⬜ Not created | |
| Small Promo Tile [RECOMMENDED] | 440×280 | ⬜ Not created | |
| Marquee Promo Tile | 1400×560 | ⬜ Not created | |

### Screenshot Notes
Show a Chrome window with a new tab open: empty page matching light theme, then a second shot in dark theme. Do not imply widgets, shortcuts, or a dashboard.

## Permissions Justification

No `permissions` or `host_permissions` are declared. Chrome will still show the new-tab override capability:

| Permission | Type | Justification |
|------------|------|---------------|
| Replace the page you see when opening a new tab | chrome_url_overrides.newtab | Used only to show the blank new tab page. The extension does not read browsing history, inject scripts, or access websites. |

## Privacy & Data Use

### Data Collection

**Does the extension collect user data?** No

Chrome Web Store listing Google Analytics (Developer Dashboard opt-in) tracks **store listing visits**, not extension usage. Do not declare it as extension data collection.

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

## Privacy Policy

**Privacy Policy URL** Not required (no user data collected). Optional: GitHub README or a dedicated privacy page.

## Distribution

**Visibility**: Public
**Regions**: All regions
**Pricing**: Free

## Developer Info

**Support URL**: https://github.com/cteerakit/blank-new-tab
**Homepage URL**: https://github.com/cteerakit/blank-new-tab

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.0 | 2026-08-15 | Initial release: blank new tab with light, dark, and high-contrast theme support | Draft |

## Review Notes

### Known Issues / Limitations
- Dashboard Google Analytics opt-in is storefront-only; do not check analytics on the extension data-use form.
- At least one 1280×800 or 640×400 screenshot is required before submission.
- CWS requires a developer contact email in the dashboard (account-level). Do not put an email in the public listing description.

### Rejection History
None.
