# Visual Puzzles & Steganography

---

## Image Steganography { #stego }

**Identify by:** An image that seems unremarkable but may hide data in pixel values.

### LSB (Least Significant Bit)
Data hidden in the least significant bits of R, G, or B channels. Invisible to the eye.

### Color channel separation
View only the R, G, or B channel — hidden patterns may appear.

### Tools
- [Aperi'Solve](https://www.aperisolve.com) — runs zsteg, steghide, strings, binwalk, all channels at once. **Start here.**
- [StegOnline](https://stylesuxx.github.io/steganography/) — LSB encode/decode
- [Forensically](https://29a.ch/photo-forensics/) — ELA, noise analysis
- GIMP / Photoshop — manual channel inspection

---

## Hidden Text in Images { #hidden-text }

**Try:**
- `strings image.png` — extract ASCII strings
- `binwalk image.png` — check for embedded files
- `exiftool image.png` — metadata (GPS, comments, software)
- Open in a hex editor — look for non-image data appended after EOF marker

---

## QR Codes & 2D Barcodes { #qr }

| Type | Looks like |
|------|------------|
| QR Code | Square, three corner squares |
| Data Matrix | Square, L-shaped solid border |
| Aztec | Square target/bullseye in center |
| PDF417 | Rectangular stacked bars |

### Tools
- Phone camera (most QR types)
- [ZXing Decoder](https://zxing.org/w/decode.jspx)

---

## Spectrograms { #spectrogram }

Audio files can have images hidden in the frequency domain.

### Tools
- [Sonic Visualiser](https://www.sonicvisualiser.org) — add a spectrogram layer, set window to 2048+
- Audacity → View → Spectrogram

---

## Color-based Encoding { #color-encoding }

- **Resistor bands:** colors encode digits (see [Resistor Color Codes](../indexing/colors.md))
- **Hex colors:** `#48454C4C4F` → decode hex pairs as ASCII → `HELLO`
- **Color names:** first letters of color names spell something
