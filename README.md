
# Node.js with typescipt

This project is built using Node.js and TypeScript. All the commands are written below to create and run. You can follow the steps or simply clone the repository and then run the commands.

## Create on local
```bash
    1.npm init -y

    2.npm install --save-dev @types/express@ @types/node ts-node typescript

    3.npx tsc --init

    4.write server code server.ts/index.ts file

    5.Add below code in tsconfig.json
     "paths": {
      "@controllers": ["controllers/user.ts"],
      "@router": ["route/index.ts"]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true    

```

## Clone
```bash
    git clone https://github.com/abhishek22331/Node-typescipt.git
    npm install
    npm start
```