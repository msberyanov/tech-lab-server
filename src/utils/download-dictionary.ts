const fs = require('fs');
const https = require('https');

export const downloadDictionary = (
  url: string,
  filename: string,
  callback: (message?: string) => void,
) => {
  const stream = fs.createWriteStream(filename);

  https
    .get(url, res => {
      res.pipe(stream);
      stream.on('finish', () => stream.close(callback));
    }).on('error', err => {
      fs.unlink(filename);
      if (callback) {
        callback(err.message);
      }
    });
};
