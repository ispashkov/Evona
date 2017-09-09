import express from 'express';
import path from 'path';
import { readFileSync } from 'jsonfile';

const manifestPath = `${process.cwd()}/build/build-manifest.json`;
const manifest = readFileSync(manifestPath);

const cssApp = manifest['/app.css'];
const cssBtb = manifest['/btb.css'];

const jsApp = manifest['/app.js'];
const jsCommon = manifest['/commons.js'];
const jsBtb = manifest['/btb.js'];

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {
		jsApp,
		cssApp,
		jsCommon
	});
});

router.get('/btb', (req, res) => {
	res.render('btb', {
		jsBtb,
		cssBtb,
		jsCommon
	});
});

router.get('/auth', (req, res) => {
	res.render('btb', {
		jsBtb,
		cssBtb,
		jsCommon
	});
});

router.get('/catalog', (req, res) => {
	res.render('btb', {
		jsBtb,
		cssBtb,
		jsCommon
	});
});

router.get('/product/:id', (req, res) => {
	res.render('btb', {
		jsBtb,
		cssBtb,
		jsCommon
	});
});

export default router;
