
  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
export default defineConfig({
  plugins: [
    {
      name: 'figma-asset-stub',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) return id
      },
      load(id) {
        if (id.startsWith('figma:asset/')) {
          return `export default "/placeholder.png"`
        }
      }
    }
  ]
})