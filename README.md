# HOW TO

Guide consultate
- https://kinsta.com/blog/express-typescript/
- https://blog.logrocket.com/how-to-set-up-node-typescript-express/

## Preparazione

```shell
npm i express
npm i -D typescript nodemon tsconfig-paths tsc-alias ts-node @types/express @types/node
npx tsc --init
```

## Compilazione sorgenti

Considerando i sorgenti in `./src`

Assicurarsi che il file [tsconfig.json](./tsconfig.json) contenga anche queste voci
```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "allowJs": true,              // permette di importare i file JavaScript
    "checkJs": true,              // abilita check errori anche nei file JavaScript 
    "baseUrl": "./",
    "paths": {                    // definisce degli alias per i percorsi 
                                  // (attenzione, necessita tsconfig-paths)
      "@utils/*": ["src/utils/*"] // ad es. è possibile usare 
                                  // import x from '@utils/miomodulo'
    },
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Assicurarsi che il file [package.json](./package.json) contenga questi script
```json
"scripts": {
  "build": "tsc --project tsconfig.json && tsc-alias -p tsconfig.json",
  "start": "node dist/index.js",
  "dev": "nodemon -r tsconfig-paths/register src/index.ts"
}
```
