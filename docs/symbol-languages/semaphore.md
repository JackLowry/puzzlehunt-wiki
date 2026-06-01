# Semaphore (Flag Semaphore)

**Tags:** `flags` `arms` `angles` `visual`  
**Identify by:** Stick figures or flag positions with arms at 8 possible angles (45° increments). Two "flags" (arms) per letter.

## Alphabet

Each letter is defined by the positions of the two arms (or flags). Positions are clock directions:

```
Position codes: 1=down-left, 2=left, 3=up-left, 4=up,
                5=up-right, 6=right, 7=down-right, (body=at side)

A: 1,6   B: 1,7   C: 1,5   D: 1,4   E: 1,3   F: 1,2   G: 2,7
H: 2,6   I: 2,5   J: 4,6   K: 1,6*  L: 2,3*  M: 2,4   N: 2,3
O: 2,5*  P: 3,7   Q: 3,6   R: 3,5   S: 3,4   T: 4,7   U: 4,6*
V: 5,7   W: 2,6*  X: 5,6   Y: 4,5   Z: 4,6**
```

!!! note
    Semaphore is tricky to memorize — use the chart reference. [Wikipedia's semaphore table](https://en.wikipedia.org/wiki/Flag_semaphore) has a visual diagram.

## Tools

- [dcode.fr Semaphore](https://www.dcode.fr/semaphore-flag)
- `=SEMAPHORE_DECODE(angles)` in the [Sheets Toolkit](../tools.md#sheets-toolkit)
