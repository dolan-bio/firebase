import * as functions from 'firebase-functions';

const universal = require(`./dist/front-end/server/main.js`).app;

export const ssr = functions.region('europe-west2').https.onRequest(universal);
