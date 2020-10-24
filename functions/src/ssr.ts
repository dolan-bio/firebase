import * as functions from 'firebase-functions';

const universal = require(`${process.cwd()}/dist/server`).app;

export const ssr = functions.region('europe-west2').https.onRequest(universal);
