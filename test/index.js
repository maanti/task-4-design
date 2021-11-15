const validator = require('html-validator');
const fs = require('fs');
const assert = require('assert');

const flexboxHtml = fs.readFileSync(`${__dirname}/../flexbox/index.html`).toString();
const gridHtml = fs.readFileSync(`${__dirname}/../grid/index.html`).toString();

(async () => {
	await validate(flexboxHtml);
	await validate(gridHtml);
})();

async function validate(data) {
	const options = {
		validator: 'WHATWG',
		data
	};
	const result = await validator(options);
	assert.strictEqual(result.isValid, true);
}