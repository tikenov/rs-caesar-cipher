import { pipeline } from "stream";
import { transformStream } from "./transform.js"
import { inputStream, outputStream } from "./io.js";
import { options } from "./options.js";


pipeline(
  inputStream(options.input),
  transformStream(options.action, options.shift),
  outputStream(options.output),
  (err) => {
    if (err) {
      console.error('Program Failed.', err);
    } else {
      console.log('Program Succeeded.');
    }
  }
);