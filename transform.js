import { Transform } from "stream";
import { encode, decode } from "./cipher.js";

const transformStream = (action, shift) => new Transform({
  transform(chunk, encoding, callback) {
    if (action == "encode") this.push(encode(chunk.toString(), parseInt(shift)));
    else this.push(decode(chunk.toString(), parseInt(shift)));
    callback();
  }
})

export { transformStream }