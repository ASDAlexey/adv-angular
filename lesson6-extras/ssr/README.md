# SSR
 - npm i @angular/platform-server @nguniversal/module-map-ngfactory-loader @nguniversal/express-engine -s
 - npm install -g typescript 
 
## Steps:
- ng build --prod // build browser part
- ng run ssr:server:production // build server part
- tsc -p server.tsconfig.json // build server.ts to dist/server.js

or
готовая команда вместо 3 выше
- ng g universal ngu-app-shell --client-project ssr
