# Morse Code

**Tags:** `dots` `dashes` `audio` `light`  
**Identify by:** Sequences of dots (`.`) and dashes (`-`), separated by spaces. May also appear as short/long beeps, flashes, or visual patterns.

## Full Alphabet

```
A .-      B -...    C -.-.    D -..     E .
F ..-.    G --.     H ....    I ..      J .---
K -.-     L .-..    M --      N -.      O ---
P .--.    Q --.-    R .-.     S ...     T -
U ..-     V ...-    W .--     X -..-    Y -.--
Z --..

1 .----   2 ..---   3 ...--   4 ....-   5 .....
6 -....   7 --...   8 ---..   9 ----.   0 -----

. .-.-.-    , --..--    ? ..--..    / -..-.
```

## Separators

| Separator | Meaning |
|-----------|---------|
| Space | Between letters |
| ` / ` (or longer gap) | Between words |

## Common patterns to recognize

- `... --- ...` = SOS
- `.-` = A, `-...` = B — dashes are 3× the length of dots in audio

## Tools

- `=MORSE_DECODE(text)` in the [Sheets Toolkit](../tools.md#sheets-toolkit)
- [dcode.fr Morse](https://www.dcode.fr/morse-code)
- [morsecode.world](https://morsecode.world/international/translator.html) — also plays audio
