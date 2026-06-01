# Cryptic Crosswords

Cryptic clues have two parts: a **definition** (like a normal crossword) and **wordplay**. Both parts independently lead to the same answer. The trick is figuring out which part is which.

---

## Clue Structure

```
[Definition] + [Wordplay]   or   [Wordplay] + [Definition]
```

The definition is always at the start or end. The wordplay indicators are in the middle.

---

## Wordplay Types

### Anagram
**Indicators:** *mixed, confused, broken, scrambled, wild, drunk, revised, in a muddle, badly, strangely, oddly...*

> "Scrambled eggs in container" (7) → NEGATES? — no, clue would be: anagram of EGGS + container = something

> "Confused senator" (6) → ANTRES? No: SENATOR* = SENATOR anagrammed

### Hidden Word
**Indicators:** *in, within, partly, some, contains, hidden in, a bit of...*
The answer is hidden inside the consecutive letters of the clue.

> "Some of the **cat**alog" → CAT

### Double Definition
Two separate definitions of the same word, no indicator.

> "Rock band" → STONE (rock = stone; band = ring/stone)

### Charades (Concatenation)
**Indicators:** *before, after, following, with, then, and, first...*
Parts are concatenated.

> "Boy before girl" → LASSIE? No. HE + R = HER

### Container / Insertion
**Indicators (outside):** *holding, around, containing, keeping...*
**Indicators (inside):** *in, inside, entering, swallowed by...*

> "Cat in the hat" → CAT inside HAT = H(CAT) — nope, more like: T around CAT

### Reversal
**Indicators (across):** *back, returned, reversed...*
**Indicators (down):** *up, rising, climbing...*

> "Returned nap" → PAN

### Homophone
**Indicators:** *sounds like, we hear, reportedly, said to be, in speech...*

> "Sounds like a knight's title" → SIR sounds like "sir"

### Initial Letters / Acrostic
**Indicators:** *initially, first, leaders of, heads of, originally...*

> "Initially every answer makes something" → TEAMS (first letters: T E A M S)

### Deletion
**Indicators:** *losing, dropping, without, headless (remove first), endless (remove last), heartless (remove middle)...*

---

## Solving Tips

1. Count the letters first — check the enumeration (the number in parentheses)
2. Find the definition — it's at the start or end
3. Look for indicator words to identify the wordplay type
4. Verify both halves lead to the same answer

## Tools

- [Crossword Solver](https://www.crosswordsolver.org) — pattern matching
- [Nutrimatic](https://nutrimatic.org) — powerful pattern search
- [Qat](https://www.quinapalus.com/qat.html) — constrained word search
- [The Crossword Centre](http://www.crossword.org.uk) — cryptic clue practice
