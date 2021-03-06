module.exports = {
   "env": {
      "development": {
         presets: ['next/babel', '@zeit/next-typescript/babel']
      },
      "production": {
         presets: ['next/babel', '@zeit/next-typescript/babel']
      },
      "test": {
         presets: ['next/babel', 
            '@zeit/next-typescript/babel',
            { "preset-env": {
                "modules": "commonjs"
            }, 
         }]
      }
   },

}
