# Puzzlehunt Wiki

Fast reference and toolkit for competitive puzzlehunts (MIT Mystery Hunt, BAPHL, GALACTIC, etc.).

**During a hunt:** use the search bar above, or the quick-ID table below.  
**Decoding data in bulk:** open the [Google Sheets Toolkit](tools.md#sheets-toolkit) and make a copy.

---

## Quick Identification

*"I have something weird — what is it?"*

| What it looks like | Likely encoding |
|--------------------|-----------------|
| Letters shifted by a fixed amount | [Caesar / ROT](encodings/substitution.md#caesar) |
| Dots and dashes | [Morse](symbol-languages/morse.md) |
| Raised-dot patterns (6-dot grid) | [Braille](symbol-languages/braille.md) |
| Numbers 1–26 (or space-separated) | [A1Z26](indexing/a1z26.md) |
| Letters don't decode to English; key required | [Vigenère](encodings/substitution.md#vigenere) |
| Symbols in a tic-tac-toe / X grid | [Pigpen](encodings/symbol-ciphers.md#pigpen) |
| Flag positions, stick figures | [Semaphore](symbol-languages/semaphore.md) |
| Military/aviation words (ALPHA, BRAVO…) | [NATO Phonetic](symbol-languages/nato-phonetic.md) |
| Numbers > 26, possibly hex-looking | [ASCII / Hex](encodings/modern.md#ascii-hex) |
| Ends in `=` or `==` | [Base64](encodings/modern.md#base64) |
| Only 0s and 1s in groups of 8 | [Binary → ASCII](encodings/modern.md#binary) |
| Grid of black/white squares | [QR code](encodings/modern.md#qr) or [Braille](symbol-languages/braille.md) |
| Letters from hand shapes | [ASL Fingerspelling](symbol-languages/asl-fingerspelling.md) |

---

## Most-Used References

=== "Morse"
    ```
    A .-    B -...  C -.-.  D -..   E .
    F ..-.  G --.   H ....  I ..    J .---
    K -.-   L .-..  M --    N -.    O ---
    P .--.  Q --.-  R .-.   S ...   T -
    U ..-   V ...-  W .--   X -..-  Y -.--
    Z --..
    1 .----  2 ..---  3 ...--  4 ....-  5 .....
    6 -....  7 --...  8 ---..  9 ----.  0 -----
    ```

=== "A1Z26"
    ```
    A=1   B=2   C=3   D=4   E=5   F=6   G=7
    H=8   I=9   J=10  K=11  L=12  M=13  N=14
    O=15  P=16  Q=17  R=18  S=19  T=20  U=21
    V=22  W=23  X=24  Y=25  Z=26
    ```

=== "NATO Phonetic"
    ```
    A Alpha    B Bravo    C Charlie  D Delta    E Echo
    F Foxtrot  G Golf     H Hotel    I India    J Juliet
    K Kilo     L Lima     M Mike     N November O Oscar
    P Papa     Q Quebec   R Romeo    S Sierra   T Tango
    U Uniform  V Victor   W Whiskey  X X-ray    Y Yankee
    Z Zulu
    ```

=== "Phone Keypad"
    ```
    2: ABC   3: DEF   4: GHI
    5: JKL   6: MNO   7: PQRS
    8: TUV   9: WXYZ
    ```

---

## Top Tools

| Tool | Best for |
|------|----------|
| [dcode.fr](https://www.dcode.fr) | Cipher identification + decoding, 500+ tools |
| [CyberChef](https://gchq.github.io/CyberChef/) | Chaining multiple transforms |
| [quipqiup](https://quipqiup.com) | Cracking substitution ciphers |
| [nutrimatic](https://nutrimatic.org) | Pattern-based word lookup |
| [Qat](https://www.quinapalus.com/qat.html) | Constraint-based word search |
| [Aperi'Solve](https://www.aperisolve.com) | Image steganography (all-in-one) |
| [Sonic Visualiser](https://www.sonicvisualiser.org) | Audio spectrograms |
| [Google Sheets Toolkit](tools.md#sheets-toolkit) | Bulk decoding in a spreadsheet |
