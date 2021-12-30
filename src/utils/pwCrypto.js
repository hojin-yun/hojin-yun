const crypto = require('crypto');
function passCrypto(pwCrypto) {
	return new Promise(function (resolve) {
		crypto.pbkdf2(pwCrypto, 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
			if (err) throw err;
			resolve(derivedKey.toString('hex'));
		});
	});
}
export { passCrypto };
