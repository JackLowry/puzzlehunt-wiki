# Tools

## Online Tools

### General / Multi-purpose

| Tool | Best for |
|------|----------|
| [dcode.fr](https://www.dcode.fr) | The single best bookmark — 500+ ciphers, cipher identifier, frequency analysis |
| [CyberChef](https://gchq.github.io/CyberChef/) | Chaining transforms (e.g. Base64 → hex → XOR → UTF-8) |
| [Boxentriq](https://www.boxentriq.com/code-breaking) | Cipher analysis tools, index of coincidence, frequency charts |

### Word & Pattern Matching

| Tool | Best for |
|------|----------|
| [nutrimatic](https://nutrimatic.org) | Pattern search with wildcards over common English; great for extraction |
| [Qat](https://www.quinapalus.com/qat.html) | Highly expressive constraint-based word search |
| [OneLook](https://www.onelook.com) | Dictionary + reverse dictionary, wildcard search |
| [quipqiup](https://quipqiup.com) | Automatic substitution cipher cracker |
| [Anagram Solver (dcode)](https://www.dcode.fr/anagram-solver) | Multi-word anagrams |

### Image & Visual

| Tool | Best for |
|------|----------|
| [Aperi'Solve](https://www.aperisolve.com) | All-in-one stego: LSB, zsteg, binwalk, strings |
| [StegOnline](https://stylesuxx.github.io/steganography/) | LSB encode/decode |
| [Forensically](https://29a.ch/photo-forensics/) | ELA, clone detection, noise analysis |

### Audio

| Tool | Best for |
|------|----------|
| [Sonic Visualiser](https://www.sonicvisualiser.org) | Spectrogram view, pitch analysis |
| [Audacity](https://www.audacityteam.org) | General audio editing, reverse, speed change |
| [DTMF Decoder](https://www.dialabc.com/sound/detect/) | Phone tone decoding |

### Cryptography

| Tool | Best for |
|------|----------|
| [dcode.fr Cipher ID](https://www.dcode.fr/cipher-identifier) | Paste ciphertext, get ranked list of likely ciphers |
| [CrypTool Online](https://www.cryptool.org/en/cto/) | Classical and modern ciphers with visualization |

---

## Google Sheets Toolkit { #sheets-toolkit }

A Google Sheet with custom `=FUNCTION()` formulas for in-hunt decoding.

**→ [Make a copy of the Toolkit](#)** *(link coming — see setup below)*

### Setup (one-time, ~2 minutes)

1. Open a new Google Sheet
2. Click **Extensions → Apps Script**
3. Delete the placeholder code, paste the contents of [`sheets/Code.gs`](https://github.com/JackLowry/puzzlehunt-wiki/blob/main/sheets/Code.gs)
4. Hit **Save** (floppy disk icon), then close the Apps Script tab
5. All `=FUNCTION_NAME()` formulas are now available in your sheet

### Available Functions

| Function | Example | Output |
|----------|---------|--------|
| `=CAESAR(text, shift)` | `=CAESAR("KHOOR", -3)` | `HELLO` |
| `=ROT13(text)` | `=ROT13("URYYB")` | `HELLO` |
| `=ATBASH(text)` | `=ATBASH("SVOOL")` | `HELLO` |
| `=VIGENERE_DECODE(text, key)` | `=VIGENERE_DECODE("RIJVS", "KEY")` | `HELLO` |
| `=VIGENERE_ENCODE(text, key)` | — | — |
| `=A1Z26_ENCODE(text)` | `=A1Z26_ENCODE("CAB")` | `3 1 2` |
| `=A1Z26_DECODE(nums)` | `=A1Z26_DECODE("8 5 12 12 15")` | `HELLO` |
| `=MORSE_ENCODE(text)` | `=MORSE_ENCODE("HI")` | `.... ..` |
| `=MORSE_DECODE(code)` | `=MORSE_DECODE(".... ..")` | `HI` |
| `=NATO_DECODE(words)` | `=NATO_DECODE("HOTEL INDIA")` | `HI` |
| `=FROM_BINARY(text)` | `=FROM_BINARY("01001000")` | `H` |
| `=TO_BINARY(text)` | `=TO_BINARY("H")` | `01001000` |
| `=FROM_HEX(text)` | `=FROM_HEX("48")` | `H` |
| `=TO_HEX(text)` | `=TO_HEX("H")` | `48` |
| `=FROM_BASE64(text)` | `=FROM_BASE64("SGVsbG8=")` | `Hello` |
| `=INDEX_LETTERS(text, indices)` | `=INDEX_LETTERS("HELLO", "1,3,5")` | `HLO` |
| `=EVERY_NTH(text, n, start)` | `=EVERY_NTH("ABCDEF", 2, 1)` | `ACE` |
| `=FIRST_LETTERS(text)` | `=FIRST_LETTERS("Hunt Every Note To Erase Resolve")` | `HENTER` |
| `=POLYBIUS_DECODE(text)` | `=POLYBIUS_DECODE("23 15 12 12 34")` | `HELLO` |

### Pre-built Tabs

- **Caesar Brute Force** — paste ciphertext, see all 26 shifts at once
- **Vigenère** — key in one cell, decoded text updates live
- **Morse** — one column in, one column decoded
- **Index Extraction** — paste a word list, extract nth letters per row
- **A1Z26** — bulk letter ↔ number conversion
- **Scratch** — blank workspace with all functions available

### Tips

- Wrap any function in `ARRAYFORMULA` to apply it to a whole column at once: `=ARRAYFORMULA(CAESAR(A2:A, 13))`
- Chain decodes with nested calls: `=A1Z26_DECODE(FROM_BINARY(A1))`
- Native `=CHAR(n)` and `=CODE(c)` cover basic ASCII without needing custom functions
