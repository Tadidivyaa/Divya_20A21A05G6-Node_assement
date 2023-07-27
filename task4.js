const fs = require('fs');
const path = require('path');

function listFiles(directory, fileExtension, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter((file) => path.extname(file) === `.${fileExtension}`);

    callback(null, filteredFiles);
  });
}

module.exports = listFiles;
const listFiles = require('./fileLister');

const directoryName = './Node-lists';
const fileExtensionToFilterBy = 'txt';

listFiles(directoryName, fileExtensionToFilterBy, (err, data) => {
  if (err) {
    console.error('Error occurred:', err);
  } else {
    console.log('Filtered files:', data);
  }
});