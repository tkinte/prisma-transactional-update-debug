# prisma-transactional-update-debug
Repository created to help reproduce the issue
https://github.com/prisma/prisma/issues/3244

> When transaction API used for update => Error: In order to use the .transaction() api, please enable 'experimentalFeatures = "transactionApi" in your schema. #3244

## Nota : 
> Prepopulated sqliteDB. Do not run migrate

## How to:
> 1. Clone the repo
> 2. Run npm install @prisma/cli --save-dev
> 3. Run npm install @prisma/client
> 4. Run npx prisma generate
> 5. Run node  --trace-warnings src/transactionalUpdateDebug.js
