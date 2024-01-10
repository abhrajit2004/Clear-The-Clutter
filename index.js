const fs = require('fs');
const path = require('path');

const organizeFiles = (sourceFolder) => {
  fs.readdir(sourceFolder, (err, files) => {
    if (err) {
      console.error('Error reading Folder:', err);
      return;
    }

    files.forEach((file) => {
      const sourcePath = path.join(sourceFolder, file);
      const extension = path.extname(file).slice(1); 

      if (extension) {
        const targetPath = path.join(sourceFolder, extension);

        fs.mkdir(targetPath, () => {
          fs.rename(sourcePath, path.join(targetPath, file), (renameErr) => {
            // if (renameErr) {
            //   console.error('Error moving file:', renameErr);
            // } else {
            //   console.log(`Moved ${file} to ${path.join(targetPath, file)}`);
            // }
          });
        });
      }
    });
  });
};

const sourceDirectory = __dirname;

organizeFiles(sourceDirectory);