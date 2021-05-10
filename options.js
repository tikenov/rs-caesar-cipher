import { Command } from 'commander/esm.mjs';

const program = new Command();

program
  .option('-i, --input <type>', 'an input file')
  .option('-o, --output <type>', 'an output file')
  .requiredOption('-s, --shift <number>', 'a shift')
  .requiredOption('-a, --action <type>', 'an action encode/decode');

program.parse(process.argv);

const options = program.opts();

if (!["encode", "decode"].includes(options.action)) {
  console.error("error: option '-a, --action' should be 'encode' or 'decode'");
  process.exit(1)
}


export { options }