# Transposition Ciphers

Letters are rearranged rather than substituted. Letter frequency looks normal (like English).

---

## Rail Fence Cipher { #rail-fence }

**Tags:** `zigzag` `rails`  
**Identify by:** Letter frequency is English-normal. Often clued by "fence", "rails", or a zig-zag visual.

### How to decode
Write plaintext in a zigzag across N rails, then read off each rail in order.

```
3 rails, plaintext = WEAREDISCOVEREDRUNATONCE

Rail 1: W . . . E . . . I . . . V . . . D . . . T . . .
Rail 2: . E . R . D . S . O . E . E . R . N . A . O . C .
Rail 3: . . A . . . I . . . C . . . D . . . U . . . N . E

Ciphertext: WEIVEDTERDSOEERNAOCAICEDUNE
```

### Tools
- [dcode.fr Rail Fence](https://www.dcode.fr/rail-fence-cipher)

---

## Columnar Transposition { #columnar }

**Tags:** `columns` `key` `grid`  
**Identify by:** Often clued by a keyword; text is written in rows, columns are read out in keyword-alphabetical order.

### How to decode
1. Determine the number of columns from the key length
2. Write ciphertext into columns in keyword-sorted order
3. Read off rows

### Tools
- [dcode.fr Columnar Transposition](https://www.dcode.fr/columnar-transposition-cipher)

---

## Anagram / Word-level Transposition { #anagram }

**Tags:** `anagram` `word-order`  
**Identify by:** Words seem scrambled rather than letters. Sometimes individual words are anagrammed.

### Tools
- [dcode.fr Anagram Solver](https://www.dcode.fr/anagram-solver)
- [Internet Anagram Server](https://wordsmith.org/anagram/)
