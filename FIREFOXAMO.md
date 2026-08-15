# Firefox Add-ons (AMO) Listing — Blank New Tab Page

> Last Updated: 2026-08-15

Submit at [addons.mozilla.org/developers](https://addons.mozilla.org/developers/). Package with `pnpm zip:firefox`.

## Store Listing

**Add-on Name** [REQUIRED]
Blank New Tab Page

**Add-on URL (slug)** [REQUIRED]
`cteerakit-blank-new-tab`

`blank-new-tab` and `blank-new-tab-page` are already taken. This slug is unique and matches the GitHub publisher.

**Summary** [REQUIRED]
Replaces the new tab page with a completely blank page. No shortcuts, widgets, or clutter. Follows light and dark theme.

Max 250 characters. Shown in search and category lists.

**Description** [REQUIRED]

AMO allows limited HTML. Paste this, or convert the lists to `<ul>` / `<li>` for easier scanning:

```
Replaces Firefox’s default new tab page with a completely blank page.

FEATURES
• Empty new tab — no shortcuts, most-visited sites, search box, or widgets
• No visible tab title — the tab stays untitled
• Follows your browser theme — white in light mode, dark gray in dark mode
• High-contrast support — uses system colors when Windows high contrast is on
• Lightweight — no accounts, and no extra UI

HOW TO USE
1. Install the add-on.
2. Open a new tab.
3. You should see a blank page that matches your current theme.

Firefox may ask you to confirm that this add-on can replace the new tab page. That is the only change it makes.

PRIVACY
This add-on does not collect, store, or transmit any personal data. It does not use analytics, ads, or remote servers. It does not request access to your browsing history or to websites you visit.

PERMISSIONS
• Replace the page you see when opening a new tab — this is how the blank page is shown. The add-on does nothing else.

SUPPORT
Found a bug or have a suggestion? Open an issue at https://github.com/cteerakit/blank-new-tab

Version 1.0.1 — Blank new tab with light, dark, and high-contrast theme support.
```

**This add-on is experimental**
No

**This add-on requires payment, non-free services or software, or additional hardware**
No

**Firefox categories** [REQUIRED] (up to 2)
Tabs; Appearance

**Firefox for Android categories**
Leave empty. This listing is desktop Firefox only (`gecko_android` is not declared).

**Primary Language** [REQUIRED]
English

**License** [REQUIRED]
MIT License (`LICENSE`)

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Listing icon [REQUIRED] | 32×32 and 64×64 PNG or JPEG | 🟡 Use existing | `public/icon/32.png` (32×32). Create a 64×64 from `public/icon/128.png` if AMO asks for 64. |
| Store / manifest icon | 128×128 PNG | ✅ Ready | `public/icon/128.png` |
| Screenshot 1 [REQUIRED] | 1280×800 recommended (1.6:1) | ⬜ Not created | |
| Screenshot 2 [RECOMMENDED] | 1280×800 | ⬜ Not created | |
| Screenshot 3 [RECOMMENDED] | 1280×800 | ⬜ Not created | |

### Screenshot Notes
Show a Firefox window with a new tab open: empty page matching light theme, then a second shot in dark theme. Do not imply widgets, shortcuts, or a dashboard. Do not put explanatory text on the image; put captions in the screenshot description fields.

## Package & Identity

| Field | Value |
|-------|--------|
| Extension ZIP | `.output/blank-new-tab-1.0.1-firefox.zip` |
| Sources ZIP | `.output/blank-new-tab-1.0.1-sources.zip` |
| Gecko ID | `blank-new-tab@cteerakit` |
| Manifest version | 3 |
| Compatible platforms | Firefox for Desktop |

**Need to provide source code?** Yes. WXT/Vite emits a hashed chunk. Upload the sources ZIP and tell reviewers how to rebuild (below).

## Permissions Justification

No `permissions` or `host_permissions` are declared. Firefox still shows the new-tab override:

| Permission | Type | Justification |
|------------|------|---------------|
| Replace the page you see when opening a new tab | chrome_url_overrides.newtab | Used only to show the blank new tab page. The add-on does not read browsing history, inject scripts, or access websites. |

Mozilla’s “No Surprises” policy: changing the new tab page is disclosed in the name, summary, and description. Firefox’s own install prompt after install is enough; do not add a second custom opt-in UI.

## Privacy & Data Use

### Data Collection

**Does the add-on collect user data?** No

Manifest declaration (already in the Firefox build):

```json
"browser_specific_settings": {
  "gecko": {
    "id": "blank-new-tab@cteerakit",
    "data_collection_permissions": {
      "required": ["none"]
    }
  }
}
```

On AMO, do **not** check “This add-on has a privacy policy” unless you later start transmitting data.

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the add-on’s core functionality
- [x] Data is NOT used for creditworthiness or lending purposes
- [x] No data is transmitted off the device

## Privacy Policy

**Privacy Policy URL** Not required (no user data collected or transmitted). Optional: GitHub README or a dedicated privacy page.

## Distribution

**Visibility**: Listed on AMO (public)
**Regions**: All regions
**Pricing**: Free

## Developer Info

**Support website**: https://github.com/cteerakit/blank-new-tab
**Homepage**: https://github.com/cteerakit/blank-new-tab
**Support email**: Account-level only. Do not put an email in the public description unless you want it public.

## Notes for Reviewers

Paste into the AMO “Notes for Reviewers” field:

```
Purpose: replace the Firefox new tab page with a blank page that follows light, dark, and high-contrast themes.

How to test:
1. Install the add-on.
2. Open a new tab (Ctrl+T / Cmd+T).
3. The page should be empty, untitled, and match the browser theme.

No accounts, no network, no optional settings.

Source rebuild (from the sources ZIP):
pnpm install
pnpm zip:firefox

The hashed JS chunk in the packaged HTML is Vite’s modulepreload helper from the WXT build. There is no extension logic in it.
```

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.1 | 2026-08-15 | Firefox AMO package: gecko ID, data-collection none, listing copy, and zip | Draft |
| 1.0.0 | 2026-08-15 | Initial release: blank new tab with light, dark, and high-contrast theme support | Draft |

## Review Notes

### Known Issues / Limitations
- At least one screenshot (1280×800 recommended) is required before a complete listing.
- After the first signed upload, the gecko ID `blank-new-tab@cteerakit` cannot change.
- Do not enable Firefox for Android unless `gecko_android` is added to the manifest.
- AMO may still human-review after auto-publish; keep the listing accurate if that happens.

### Rejection History
None.
