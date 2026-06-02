# Puzzlehunt Wiki

Reference site and Google Sheets toolkit for competitive puzzlehunts (MIT Mystery Hunt style).

## Environment

Always use the `puzzlehunt-wiki` conda environment:
```bash
conda activate puzzlehunt-wiki
```

## Common Commands

```bash
# Local preview with live reload
mkdocs serve

# Build static site to site/
mkdocs build

# Deploy to GitHub Pages (jacklowry.github.io/puzzlehunt-wiki)
mkdocs gh-deploy
```

## Repo Structure

```
docs/               # All site content (Markdown)
  index.md          # Homepage — quick-ID table + most-used references
  encodings/        # Caesar, Vigenère, Atbash, Playfair, Bacon, Pigpen, Base64, etc.
  symbol-languages/ # Morse, Braille, Semaphore, NATO, ASL, Tap Code, etc.
  indexing/         # A1Z26, phone keypad, periodic table, colors, Roman numerals, etc.
  puzzle-types/     # Cryptics, word puzzles, logic, visual/stego, audio
  meta-techniques/  # Extraction methods, common AHA moments
  tools.md          # Online tools + Google Sheets Toolkit reference
sheets/             # Google Apps Script source (version-controlled here)
  Code.gs           # 20 custom =FUNCTION() formulas for Sheets
  Setup.gs          # onOpen() — builds all template tabs on first open
mkdocs.yml          # Site config: theme, nav, plugins
requirements.txt    # mkdocs + mkdocs-material
```

## Adding Content

Each docs page follows this structure:
- `## Section Name { #anchor }` for linkable headings
- `**Tags:**` line for categorization
- `**Identify by:**` line describing how to recognize the encoding
- `### How to decode` with the key insight first
- `### Tools` section linking to online tools and Sheets functions

## Google Sheets Toolkit

`sheets/Code.gs` and `sheets/Setup.gs` are pasted into a Google Sheet via Extensions → Apps Script.

- `Code.gs` — pure custom functions, no UI interaction
- `Setup.gs` — `onOpen()` that builds template tabs on first open; guard check at top prevents re-running

After editing either file, update the shareable template sheet and update the link in `docs/tools.md`.

## Deployment

The site deploys to the `gh-pages` branch via `mkdocs gh-deploy`. Source lives on `main`.
GitHub Pages must be set to serve from the `gh-pages` branch (repo Settings → Pages).
