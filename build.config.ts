import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [],
  rollup: {
    // replace: {
    //   delimiters: ['', ''],
    //   values: {
    //     // Used in development to import directly from theme
    //     'const isUiDev = true': 'const isUiDev = false'
    //   }
    // }
  },
  hooks: {
    'mkdist:entry:options'(ctx, entry, options) {
      options.addRelativeDeclarationExtensions = false
    }
  }
  // externals: ['#build/b24ui', 'vite']
})
