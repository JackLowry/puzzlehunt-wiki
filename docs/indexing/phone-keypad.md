# Phone Keypad

**Tags:** `T9` `multitap` `telephone` `digits`  
**Identify by:** Sequences of digits 2–9, sometimes with repeated digits (multitap) or just one digit per letter (T9-style).

## Keypad Layout

```
2: A B C      3: D E F
4: G H I      5: J K L      6: M N O
7: P Q R S    8: T U V      9: W X Y Z
```

## Multitap encoding

Each letter requires pressing the key multiple times:
```
A=2, B=22, C=222
D=3, E=33, F=333
G=4, H=44, I=444
...
```

## Digit → letter (1 digit per letter, T9-style)

When given one digit per letter, each digit maps to a key. You'll need to determine *which* letter on that key from context (often a dictionary lookup / T9 disambiguation).

## Tools

- [dcode.fr Phone Keypad](https://www.dcode.fr/phone-keypad-cipher)
- [T9 Solver](https://www.t9abc.com/)
