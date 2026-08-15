# Microsoft Edge Add-ons Listing — Blank New Tab Page

> Last Updated: 2026-08-15

Submit at [Partner Center](https://partner.microsoft.com/dashboard/microsoftedge/public/login). Package with `pnpm zip:edge`. Upload `.output/blank-new-tab-1.0.1-edge.zip`.

Do not mention Chrome or other browsers in the listing name, icon, or description. Edge policy requires that.

## Store Listing

**Extension Name** [REQUIRED]
Blank New Tab Page

Read-only in Partner Center; comes from `manifest.json` `name`. To change it, edit the manifest and re-upload the zip.

**Short Description** [REQUIRED]
Replaces the new tab page with a completely blank page. No shortcuts, widgets, or clutter. Follows light and dark theme.

Read-only in Partner Center; comes from `manifest.json` `description`. Re-upload the zip to change it.

**Description** [REQUIRED]

Minimum 250 characters, maximum 10,000. Required for each listing language (start with en-US):

```
Replaces Microsoft Edge’s default new tab page with a completely blank page.

FEATURES
• Empty new tab — no shortcuts, most-visited sites, search box, or widgets
• No visible tab title — the tab stays untitled
• Follows your browser theme — white in light mode, dark gray in dark mode
• High-contrast support — uses system colors when Windows high contrast is on
• Lightweight — no scripts that collect data, no accounts, and no extra UI

HOW TO USE
1. Install the extension.
2. Open a new tab.
3. You should see a blank page that matches your current theme.

Edge may ask you to confirm that this extension can replace the new tab page. That is the only change it makes.

PRIVACY
This extension does not collect, store, or transmit any personal data. It does not use analytics, ads, or remote servers. It does not request access to your browsing history or to websites you visit.

PERMISSIONS
• Replace the page you see when opening a new tab — this is how the blank page is shown. The extension does nothing else.

SUPPORT
Found a bug or have a suggestion? Open an issue at https://github.com/cteerakit/blank-new-tab

Version 1.0.1 — Blank new tab with light, dark, and high-contrast theme support.
```

**Category** [REQUIRED]
Productivity

**Single Purpose** [REQUIRED]
Replaces the Microsoft Edge new tab page with a completely blank page.

**Mature content**
No

**Primary Language** [REQUIRED]
English (United States) / en-US

**Search terms** [RECOMMENDED]
Max 7 terms, 30 characters each, 21 words total. Suggested:

- blank new tab
- empty new tab
- new tab page
- minimal new tab
- dark mode new tab
- high contrast tab
- no clutter tab

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Extension logo [REQUIRED] | 1:1 PNG, min 128×128, recommended 300×300 | 🟡 Partial | `public/icon/128.png` meets the minimum. Create a 300×300 PNG for Partner Center. |
| Screenshot 1 [RECOMMENDED] | 1280×800 or 640×480 | ⬜ Not created | |
| Screenshot 2 [RECOMMENDED] | 1280×800 or 640×480 | ⬜ Not created | |
| Screenshot 3 [RECOMMENDED] | 1280×800 or 640×480 | ⬜ Not created | |
| Small promotional tile [RECOMMENDED] | 440×280 | ⬜ Not created | |
| Large promotional tile | 1400×560 PNG | ⬜ Not created | |
| YouTube video URL | — | ⬜ None | |

Max 6 screenshots. Logo is required per language; name and short description are required for at least one language.

### Screenshot Notes
Show an Edge window with a new tab open: empty page matching light theme, then a second shot in dark theme. Do not imply widgets, shortcuts, or a dashboard. Screenshots must be sharp (not stretched or blurry).

## Permissions Justification

No `permissions` or `host_permissions` are declared. Edge will still show the new-tab override capability:

| Permission | Type | Justification |
|------------|------|---------------|
| Replace the page you see when opening a new tab | chrome_url_overrides.newtab | Used only to show the blank new tab page. The extension does not read browsing history, inject scripts, or access websites. |

## Privacy & Data Use

Partner Center **Privacy** page (or older **Properties** privacy fields):

### Single Purpose
Replaces the Microsoft Edge new tab page with a completely blank page.

### Are you using remote code?
No. Manifest V3; all files are in the extension package.

### Data Collection

**Does the extension collect user data?** No

**Does the extension access, collect, or transmit any personal information?** No

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

## Privacy Policy

**Privacy Policy URL** Not required (no user data collected). If Partner Center still requires a URL, host a short “no data collected” page (GitHub README is acceptable) and paste that URL.

## Distribution

**Visibility**: Public
**Markets**: All markets
**Pricing**: Free

## Developer Info

**Website**: https://github.com/cteerakit/blank-new-tab
**Support contact detail**: https://github.com/cteerakit/blank-new-tab
**Homepage URL**: https://github.com/cteerakit/blank-new-tab

Partner Center registration uses a Microsoft account (MSA). Do not put a personal email in the public description unless you want it public.

## Certification Notes

Paste into Partner Center certification / testing notes:

```
Purpose: replace the Edge new tab page with a blank page that follows light, dark, and high-contrast themes.

How to test:
1. Install the extension.
2. Open a new tab (Ctrl+T).
3. The page should be empty, untitled, and match the browser theme.

No accounts, no network calls, no optional settings. No remote code.
```

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.1 | 2026-08-15 | Edge Add-ons listing copy and Chromium zip | Draft |
| 1.0.0 | 2026-08-15 | Initial release: blank new tab with light, dark, and high-contrast theme support | Draft |

## Review Notes

### Known Issues / Limitations
- Partner Center requires a 1:1 extension logo (300×300 recommended). `public/icon/128.png` is the minimum size only.
- Description must be at least 250 characters for each listing language.
- Do not mention Chrome or other browsers in listing text or graphics.
- Screenshots are optional in Partner Center but strongly recommended; 1280×800 or 640×480 only.
- Registration country/region is read-only after Edge program enrollment.

### Rejection History
None.
