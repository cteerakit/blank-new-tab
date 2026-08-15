import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifestVersion: 3,
    manifest: ({ browser }) => ({
        name: 'Blank New Tab Page',
        description:
            'Replaces the new tab page with a completely blank page. No shortcuts, widgets, or clutter. Follows light and dark theme.',
        ...(browser === 'firefox'
            ? {
                  browser_specific_settings: {
                      gecko: {
                          id: 'blank-new-tab@cteerakit',
                          data_collection_permissions: {
                              required: ['none'],
                          },
                      },
                  },
              }
            : {}),
    }),
});
