const shift = (l, k) => {
  if (l.toLowerCase() == l.toUpperCase()) return l;
  let chr = l.charCodeAt(0);
  let a = 65;
  if (l.toLowerCase() == l)
    a = 97;
  chr = ((chr - a + k) % 26 + 26) % 26 + a
  return String.fromCharCode(chr);
}

const decode = (text, k) => encode(text, k * -1)

const encode = (text, k) => {
  let result = "";
  for (let l of text)
    result += shift(l, k);
  return result;
}

export { encode, decode };