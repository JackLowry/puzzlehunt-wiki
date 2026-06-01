# Modern Encodings

---

## ASCII / Decimal & Hex { #ascii-hex }

**Tags:** `ascii` `decimal` `hex` `numbers`  
**Identify by:** Numbers in the range 32–126 (decimal) or 20–7E (hex). Hex strings often have pairs of characters.

### Quick reference
```
32=Space  33=!  65=A  66=B  ...  90=Z
97=a  98=b  ... 122=z  48=0  49=1  ...  57=9
```

### Tools
- `=CHAR(n)` — native Google Sheets function, no toolkit needed
- `=FROM_HEX(text)` in the Sheets Toolkit for hex → ASCII
- [CyberChef](https://gchq.github.io/CyberChef/) — "From Charcode" or "From Hex"

---

## Binary { #binary }

**Tags:** `binary` `0s and 1s`  
**Identify by:** Only 0s and 1s, typically in groups of 7 or 8. Groups of 8 = ASCII bytes.

### How to decode
Convert each 8-bit group to decimal, then use `=CHAR()`.

```
01001000 01101001 → 72 105 → Hi
```

### Tools
- `=FROM_BINARY(text)` in the Sheets Toolkit
- [CyberChef](https://gchq.github.io/CyberChef/) — "From Binary"

---

## Base64 { #base64 }

**Tags:** `base64` `padding` `=`  
**Identify by:** String ends in `=` or `==`. Uses A–Z, a–z, 0–9, `+`, `/`. Length is a multiple of 4.

### How to decode
```
SGVsbG8= → Hello
```

### Tools
- `=FROM_BASE64(text)` in the Sheets Toolkit
- [CyberChef](https://gchq.github.io/CyberChef/) — "From Base64"

---

## URL Encoding { #url }

**Tags:** `percent-encoding` `%20`  
**Identify by:** `%` followed by two hex digits. Spaces become `%20`.

### Tools
- [CyberChef](https://gchq.github.io/CyberChef/) — "URL Decode"
- [dcode.fr URL](https://www.dcode.fr/url-encoding)

---

## QR Codes { #qr }

**Tags:** `qr` `2d barcode`  
**Identify by:** Square grid with three corner squares (finder patterns). Black/white pixel grid.

### Tools
- Any phone camera app
- [ZXing Decoder](https://zxing.org/w/decode.jspx) — upload an image

---

## Base32 / Base58 / Other Bases

**Identify by:** Base32 uses A–Z and 2–7, no padding issues as severe; Base58 avoids 0, O, I, l.

### Tools
- [CyberChef](https://gchq.github.io/CyberChef/) covers all common bases
- [dcode.fr Base Converter](https://www.dcode.fr/base-converter)
