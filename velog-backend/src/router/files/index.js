// @flow
import Router from 'koa-router';
import needsAuth from 'lib/middlewares/needsAuth';
import { checkUUID } from 'lib/common';
import * as filesCtrl from './files.ctrl';

const files: Router = new Router();

files.post(
  '/create-url/post-image',
  needsAuth,
  filesCtrl.createPostImageSignedUrl,
);
files.post(
  '/create-url/thumbnail',
  needsAuth,
  filesCtrl.createThumbnailSignedUrl,
);
files.post('/upload', needsAuth, filesCtrl.upload);
files.post('/retrieve-size/:id', checkUUID, filesCtrl.retrieveSize);

export default files;
