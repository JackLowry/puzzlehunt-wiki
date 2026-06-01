# Extraction Methods

Extraction is the step where you take answers from individual puzzles (or parts of a puzzle) and pull out a final answer. This is one of the most important skills in puzzlehunts.

---

## Nth Letter Indexing { #nth-letter }

**Identify by:** Each answer comes with a number. Index into the answer with that number.

```
HELLO  → 2 → E
WORLD  → 3 → R
PUZZLE → 1 → P
```

Reading the extracted letters in order: `ERP`

### Tools
- `=INDEX_LETTERS(text, n)` in the [Sheets Toolkit](../tools.md#sheets-toolkit)
- `=MID(A1, B1, 1)` — native Sheets formula for single letter extraction

---

## Acrostic / First Letters { #acrostic }

**Identify by:** Take the first (or last) letter of each answer or word.

```
CREAM → C
APPLE → A
TIGER → T
```
→ `CAT`

---

## Enumeration Matching { #enumeration }

**Identify by:** A number in parentheses at the end of a clue tells you the letter count of the answer. Use this to verify extractions.

---

## Answer Ordering { #ordering }

Answers may need to be sorted before extraction:
- **Alphabetically** by answer
- **By length** of answer
- **By clue number** (follow the numbers)
- **By grid position** (reading order: left-to-right, top-to-bottom)
- **By a hidden ordering** clued in the puzzle (dates, values, etc.)

---

## Enumeration / Length as the Key

If each answer has length N and you need one letter, the lengths themselves might tell you which letter to extract. Or the answer lengths ordered give a sequence of indices.

---

## Reading Diagonals / Spirals

In a grid of letters or answers, the answer might be:
- On a diagonal
- Spelled in a spiral
- Reading every other row/column
- Formed by the corners or edges

---

## Common AHA Moments

See [Common AHAs](common-ahas.md) for patterns that appear repeatedly in hunts.
