import fs from "fs";

const inputStream = (path) => {
  let stream = process.stdin;
  if (path) {
    try {
      stream = fs.createReadStream(path);
      fs.accessSync(path, fs.constants.R_OK);
    } catch (err) {
      console.error(`Unable input from file "${path}".\nFile does not exists or you do not have an access.`)
      process.exit(1)
    }
  }
  return stream;
}
const outputStream = (path) => {
  let stream = process.stdout;
  if (path) {
    try {
      stream = fs.createWriteStream(path, { flags: 'a' });
    } catch (err) {
      console.error(`Unable output to file "${path}".`)
      process.exit(1)
    }
  }
  return stream;
}


export { inputStream, outputStream }