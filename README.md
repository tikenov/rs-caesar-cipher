This is a CLI tool for text encryption using caesar cipher.


CLI tool can accept 4 options (short alias or full name):
1. -s, --shift: a shift (**required**)
2. -a, --action: an action encode/decode (**required**)
3. -i, --input: an input file (**stdin** if not selected)
4. -o, --output: an output file (**stdout** if not selected)

**To install**:
```
$ npm i
```

**Usage**:
1. -a (--action) is **encode**, from **file** to **file**
```
$ node my_caesar_cli -s 50 -a encode -i "./input.txt" -o "./output.txt"

input.txt -> "There is no spoon!"
output.txt -> "Rfcpc gq lm qnmml!"

```


2. -a (--action) is **decode**, from **file** to **file**
```
$ node my_caesar_cli -s 50 -a decode -i "./input.txt" -o "./output.txt"

input.txt -> "Rfcpc gq lm qnmml!"
output.txt -> "There is no spoon!"

```


3. -a (--action) is **encode**, from **stdin** to **file**
```
$ node my_caesar_cli -a encode -s 15 --output "./output.txt"

stdin      -> "Is there any spoon?"
output.txt -> "Xh iwtgt pcn heddc?"
```

4. -a (--action) is **decode**, from **stdin** to **stdout**
```
$ node my_caesar_cli -a decode -s 15

stdin  -> "Xh iwtgt pcn heddc?"
stdout -> "Is there any spoon?"

```

