# Substitution Ciphers

Each letter (or symbol) is replaced by another according to some rule or key.

---

## Caesar Cipher { #caesar }

**Tags:** `rotation` `shift` `classical`  
**Identify by:** Text looks almost like English but every letter is wrong by the same amount. ROT13 is the most common variant (used online constantly).

### How to decode
Shift every letter back by the key amount. If you don't know the key, try all 26 — use the **Caesar Brute Force** tab in the [Sheets Toolkit](../tools.md#sheets-toolkit).

```
Key = 3 (classic "Julius Caesar"):
Plaintext:  A B C D E F ... X Y Z
Ciphertext: D E F G H I ... A B C

KHOOR → HELLO  (shift -3)
```

### Quick reference
| Plain | A | B | C | D | E | F | G | H | I | J | K | L | M |
|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ROT13 | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |

### Tools
- [dcode.fr Caesar](https://www.dcode.fr/caesar-cipher) — try all 26 shifts instantly
- `=CAESAR(text, shift)` in the Sheets Toolkit
- `=ROT13(text)` for the specific ROT13 variant

---

## Atbash { #atbash }

**Tags:** `mirror` `reflection` `classical`  
**Identify by:** Often appears with Hebrew context; in English, A↔Z, B↔Y, etc.

### How to decode
Mirror the alphabet: `A=Z, B=Y, C=X …`

```
SVOOL → HELLO
```

### Tools
- `=ATBASH(text)` in the Sheets Toolkit
- [dcode.fr Atbash](https://www.dcode.fr/atbash-cipher)

---

## Vigenère Cipher { #vigenere }

**Tags:** `polyalphabetic` `key` `keyword`  
**Identify by:** Letter frequency is flattened (unlike Caesar, which preserves frequency). Requires a keyword. Index of coincidence near 0.065 = single-shift; near 0.038 = polyalphabetic.

### How to decode
Each letter is shifted by the corresponding letter of the repeating keyword (A=0, B=1, …).

```
Key:        K  E  Y  K  E  Y
Ciphertext: R  I  J  V  S  →  HELLO  (wait, let me redo)
Key:        H  E  L  L  O  (key = "HELLO")
Plaintext:  ...
```

!!! tip
    If you have a crib (known plaintext), XOR the crib against the ciphertext to recover part of the key.

### Tools
- `=VIGENERE_DECODE(text, key)` in the Sheets Toolkit
- [dcode.fr Vigenère](https://www.dcode.fr/vigenere-cipher) — includes key-length analysis

---

## Playfair Cipher { #playfair }

**Tags:** `digraph` `5x5` `key`  
**Identify by:** Ciphertext has even length; no letter appears alone (always pairs). `J` is typically merged with `I`.

### How to decode
Construct the 5×5 key square from the keyword (removing duplicates, merging I/J, filling remaining letters). Apply the rules to each digraph (same row → shift right, same col → shift down, rectangle → swap corners).

### Tools
- [dcode.fr Playfair](https://www.dcode.fr/playfair-cipher)

---

## Bacon's Cipher { #bacon }

**Tags:** `binary` `two-symbols` `font`  
**Identify by:** Text or symbols that use exactly two variants (bold/italic, A/B, 0/1) in groups of 5.

### How to decode
Convert each group of 5 to a number (A=0 or A=1 depending on variant), then A=0, B=1, … Z=25.

```
AABBA AABBB → 01100 01101 → G H (0-indexed: A=00000)
```

### Tools
- [dcode.fr Bacon](https://www.dcode.fr/bacon-cipher)
