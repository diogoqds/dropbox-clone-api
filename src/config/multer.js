const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const destinationPath = path.resolve(__dirname, '..', '..', 'tmp');
module.exports = {
  dest: destinationPath,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);

        file.key = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, file.key);
      });
    }
  })
}