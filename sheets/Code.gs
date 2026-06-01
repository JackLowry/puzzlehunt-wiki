// ============================================================
// PUZZLEHUNT TOOLKIT — Google Apps Script
// ============================================================
// Setup: Extensions → Apps Script → paste into Code.gs → Save
// All functions become available as =FUNCTION_NAME() in cells.
// ============================================================


// ================================================================
// INTERNAL HELPERS (not callable from sheets)
// ================================================================

function _shiftChar_(c, shift) {
  if (!/[A-Za-z]/.test(c)) return c;
  var base = (c === c.toUpperCase()) ? 65 : 97;
  return String.fromCharCode(((c.charCodeAt(0) - base + shift % 26 + 26) % 26) + base);
}


// ================================================================
// SUBSTITUTION CIPHERS
// ================================================================

/**
 * Caesar cipher. Use a negative shift to decode (e.g. shift=-3 to undo shift=3).
 * @param {string} text Input text
 * @param {number} shift Shift amount (positive = encode, negative = decode)
 * @return {string} Shifted text
 * @customfunction
 */
function CAESAR(text, shift) {
  shift = ((parseInt(shift, 10) % 26) + 26) % 26;
  return String(text).split('').map(function(c) { return _shiftChar_(c, shift); }).join('');
}

/**
 * ROT13 (Caesar shift 13). Encoding and decoding are the same operation.
 * @param {string} text Input text
 * @return {string} ROT13 result
 * @customfunction
 */
function ROT13(text) {
  return CAESAR(text, 13);
}

/**
 * Atbash cipher — mirrors the alphabet (A↔Z, B↔Y, …). Self-inverse.
 * @param {string} text Input text
 * @return {string} Atbash result
 * @customfunction
 */
function ATBASH(text) {
  return String(text).split('').map(function(c) {
    if (!/[A-Za-z]/.test(c)) return c;
    var base = (c === c.toUpperCase()) ? 65 : 97;
    return String.fromCharCode(base + 25 - (c.charCodeAt(0) - base));
  }).join('');
}

/**
 * Vigenère cipher encode. Key letters rotate, non-letters in text are passed through.
 * @param {string} text Plaintext
 * @param {string} key Keyword (only letters are used)
 * @return {string} Ciphertext
 * @customfunction
 */
function VIGENERE_ENCODE(text, key) {
  key = String(key).toUpperCase().replace(/[^A-Z]/g, '');
  if (!key.length) return 'ERROR: key needs letters';
  var ki = 0;
  return String(text).split('').map(function(c) {
    if (!/[A-Za-z]/.test(c)) return c;
    var shift = key.charCodeAt(ki++ % key.length) - 65;
    return _shiftChar_(c, shift);
  }).join('');
}

/**
 * Vigenère cipher decode.
 * @param {string} text Ciphertext
 * @param {string} key Keyword (only letters are used)
 * @return {string} Plaintext
 * @customfunction
 */
function VIGENERE_DECODE(text, key) {
  key = String(key).toUpperCase().replace(/[^A-Z]/g, '');
  if (!key.length) return 'ERROR: key needs letters';
  var ki = 0;
  return String(text).split('').map(function(c) {
    if (!/[A-Za-z]/.test(c)) return c;
    var shift = -(key.charCodeAt(ki++ % key.length) - 65);
    return _shiftChar_(c, shift);
  }).join('');
}

/**
 * Try all 26 Caesar shifts and return them as a 2-column table [shift, decoded].
 * Paste =CAESAR_ALL(A1) into a cell — it will spill 26 rows downward.
 * @param {string} text Ciphertext to brute-force
 * @return {Array} 26×2 array of [shift, result]
 * @customfunction
 */
function CAESAR_ALL(text) {
  var results = [['Shift', 'Decoded']];
  for (var i = 0; i < 26; i++) {
    results.push([i, CAESAR(text, -i)]);
  }
  return results;
}


// ================================================================
// A1Z26
// ================================================================

/**
 * Convert letters to A1Z26 numbers (A=1 … Z=26). Non-letters are ignored.
 * @param {string} text Input text
 * @return {string} Space-separated numbers
 * @customfunction
 */
function A1Z26_ENCODE(text) {
  return String(text).toUpperCase().replace(/[^A-Z]/g, '').split('').map(function(c) {
    return c.charCodeAt(0) - 64;
  }).join(' ');
}

/**
 * Convert A1Z26 numbers back to letters (1=A … 26=Z).
 * Accepts a string of space/comma-separated numbers, or a range of cells.
 * @param {string|Array} nums Numbers to decode
 * @return {string} Decoded letters
 * @customfunction
 */
function A1Z26_DECODE(nums) {
  var flat = Array.isArray(nums)
    ? nums.flat().map(String).join(' ')
    : String(nums);
  return flat.split(/[\s,]+/).filter(Boolean).map(function(n) {
    var v = parseInt(n, 10);
    return (isNaN(v) || v < 1 || v > 26) ? '?' : String.fromCharCode(v + 64);
  }).join('');
}


// ================================================================
// MORSE CODE
// ================================================================

var MORSE_ENC_ = {
  A:'.-',  B:'-...',C:'-.-.',D:'-..',E:'.',   F:'..-.',G:'--.',H:'....',
  I:'..',  J:'.---',K:'-.-', L:'.-..',M:'--', N:'-.',  O:'---',P:'.--.',
  Q:'--.-',R:'.-.',S:'...',  T:'-',   U:'..-',V:'...-',W:'.--',X:'-..-',
  Y:'-.--',Z:'--..',
  '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-',
  '5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',
  '.':'.-.-.-',',':'--..--','?':'..--..','/':'-..-.','=':'-...-'
};

var MORSE_DEC_ = (function() {
  var m = {};
  for (var k in MORSE_ENC_) m[MORSE_ENC_[k]] = k;
  return m;
})();

/**
 * Encode text to Morse code. Letters are space-separated; words are separated by " / ".
 * @param {string} text Input text
 * @return {string} Morse code
 * @customfunction
 */
function MORSE_ENCODE(text) {
  return String(text).toUpperCase().split(' ').map(function(word) {
    return word.split('').map(function(c) { return MORSE_ENC_[c] || ''; }).filter(Boolean).join(' ');
  }).join(' / ');
}

/**
 * Decode Morse code to text. Separate letters with spaces, words with " / " or "|".
 * @param {string} code Morse code string
 * @return {string} Decoded text
 * @customfunction
 */
function MORSE_DECODE(code) {
  return String(code).split(/\s*[\/|]\s*/).map(function(word) {
    return word.trim().split(/\s+/).map(function(sym) {
      return MORSE_DEC_[sym] || '?';
    }).join('');
  }).join(' ');
}


// ================================================================
// NATO PHONETIC ALPHABET
// ================================================================

var NATO_MAP_ = {
  ALPHA:'A',ALFA:'A',BRAVO:'B',CHARLIE:'C',DELTA:'D',ECHO:'E',
  FOXTROT:'F',GOLF:'G',HOTEL:'H',INDIA:'I',JULIET:'J',JULIETT:'J',
  KILO:'K',LIMA:'L',MIKE:'M',NOVEMBER:'N',OSCAR:'O',PAPA:'P',
  QUEBEC:'Q',ROMEO:'R',SIERRA:'S',TANGO:'T',UNIFORM:'U',VICTOR:'V',
  WHISKEY:'W',XRAY:'X','X-RAY':'X',YANKEE:'Y',ZULU:'Z'
};

/**
 * Decode NATO phonetic words to letters ("HOTEL INDIA" → "HI").
 * Accepts space or comma-separated words.
 * @param {string} words NATO phonetic words
 * @return {string} Decoded letters
 * @customfunction
 */
function NATO_DECODE(words) {
  return String(words).toUpperCase().split(/[\s,]+/).map(function(w) {
    return NATO_MAP_[w] || '?';
  }).join('');
}


// ================================================================
// BINARY
// ================================================================

/**
 * Convert a binary string to ASCII text. Accepts space-separated 7- or 8-bit groups.
 * @param {string} text Binary string (e.g. "01001000 01101001")
 * @return {string} Decoded text
 * @customfunction
 */
function FROM_BINARY(text) {
  return String(text).trim().split(/\s+/).map(function(b) {
    var n = parseInt(b, 2);
    return isNaN(n) ? '?' : String.fromCharCode(n);
  }).join('');
}

/**
 * Convert text to binary (8-bit groups, space-separated).
 * @param {string} text Input text
 * @return {string} Binary string
 * @customfunction
 */
function TO_BINARY(text) {
  return String(text).split('').map(function(c) {
    return c.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}


// ================================================================
// HEX
// ================================================================

/**
 * Convert a hex string to ASCII text. Accepts space-separated or continuous hex pairs.
 * @param {string} text Hex string (e.g. "48 65 6C 6C 6F" or "48656C6C6F")
 * @return {string} Decoded text
 * @customfunction
 */
function FROM_HEX(text) {
  var clean = String(text).replace(/\s+/g, '');
  if (clean.length % 2 !== 0) return 'ERROR: odd number of hex digits';
  var result = '';
  for (var i = 0; i < clean.length; i += 2) {
    var n = parseInt(clean.slice(i, i + 2), 16);
    if (isNaN(n)) return 'ERROR: invalid hex at position ' + i;
    result += String.fromCharCode(n);
  }
  return result;
}

/**
 * Convert text to uppercase hex pairs (space-separated).
 * @param {string} text Input text
 * @return {string} Hex string
 * @customfunction
 */
function TO_HEX(text) {
  return String(text).split('').map(function(c) {
    return c.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
  }).join(' ');
}


// ================================================================
// BASE64
// ================================================================

/**
 * Decode a Base64 string to UTF-8 text.
 * @param {string} text Base64 encoded string
 * @return {string} Decoded text
 * @customfunction
 */
function FROM_BASE64(text) {
  try {
    var bytes = Utilities.base64Decode(String(text).trim());
    return Utilities.newBlob(bytes).getDataAsString('UTF-8');
  } catch(e) {
    return 'ERROR: ' + e.message;
  }
}

/**
 * Encode text to Base64 (UTF-8).
 * @param {string} text Input text
 * @return {string} Base64 encoded string
 * @customfunction
 */
function TO_BASE64(text) {
  return Utilities.base64Encode(String(text), Utilities.Charset.UTF_8);
}


// ================================================================
// EXTRACTION
// ================================================================

/**
 * Extract letters from text at given 1-based indices.
 * Only letters are counted when indexing (spaces and punctuation are skipped).
 * @param {string} text Source text
 * @param {string|number} indices Comma or space-separated 1-based indices
 * @return {string} Extracted letters concatenated
 * @customfunction
 */
function INDEX_LETTERS(text, indices) {
  var letters = String(text).replace(/[^A-Za-z]/g, '');
  return String(indices).split(/[\s,]+/).map(function(n) {
    var i = parseInt(n, 10);
    return (isNaN(i) || i < 1 || i > letters.length) ? '?' : letters[i - 1];
  }).join('');
}

/**
 * Extract every nth character from text, starting at a 1-based position.
 * Useful for acrostics, rail-fence-style extraction, and nth-letter patterns.
 * @param {string} text Source text
 * @param {number} n Step size
 * @param {number} [start=1] 1-based starting position
 * @return {string} Extracted characters
 * @customfunction
 */
function EVERY_NTH(text, n, start) {
  text = String(text);
  var s = (start ? parseInt(start, 10) : 1) - 1;
  var step = parseInt(n, 10);
  var result = '';
  for (var i = s; i < text.length; i += step) result += text[i];
  return result;
}

/**
 * Extract the first letter of each word. Useful for acrostic/hidden-word checks.
 * @param {string} text Input text
 * @return {string} First letters concatenated
 * @customfunction
 */
function FIRST_LETTERS(text) {
  return String(text).trim().split(/\s+/).map(function(w) {
    var m = w.match(/[A-Za-z]/);
    return m ? m[0] : '';
  }).join('');
}


// ================================================================
// BRAILLE
// ================================================================

var BRAILLE_MAP_ = {
  '1':'A','12':'B','14':'C','145':'D','15':'E','124':'F','1245':'G',
  '125':'H','24':'I','245':'J','13':'K','123':'L','134':'M','1345':'N',
  '135':'O','1234':'P','12345':'Q','1235':'R','234':'S','2345':'T',
  '136':'U','1236':'V','2456':'W','1346':'X','13456':'Y','1356':'Z'
};

/**
 * Decode Braille dot notation to letters.
 * Represent each cell as its raised dot numbers (1–6) joined by hyphens.
 * Separate cells with spaces. Example: "1 1-2 1-4" → "ABC"
 * @param {string} dots Dot notation (e.g. "1-2-5 1-5")
 * @return {string} Decoded letters
 * @customfunction
 */
function BRAILLE_DECODE(dots) {
  return String(dots).trim().split(/\s+/).map(function(cell) {
    var key = cell.split('-').map(Number).filter(function(n) {
      return n >= 1 && n <= 6;
    }).sort().join('');
    return BRAILLE_MAP_[key] || '?';
  }).join('');
}


// ================================================================
// POLYBIUS SQUARE
// ================================================================

/**
 * Decode a Polybius square cipher. Pairs of digits (1-5), I and J share cell 2-4.
 * @param {string} text Pairs of digits, space-separated or continuous
 * @return {string} Decoded text
 * @customfunction
 */
function POLYBIUS_DECODE(text) {
  var grid = [
    ['A','B','C','D','E'],
    ['F','G','H','IJ','K'],
    ['L','M','N','O','P'],
    ['Q','R','S','T','U'],
    ['V','W','X','Y','Z']
  ];
  var clean = String(text).replace(/\s+/g, '');
  if (clean.length % 2 !== 0) return 'ERROR: need even number of digits';
  var result = '';
  for (var i = 0; i < clean.length; i += 2) {
    var row = parseInt(clean[i], 10) - 1;
    var col = parseInt(clean[i+1], 10) - 1;
    if (row < 0 || row > 4 || col < 0 || col > 4) { result += '?'; continue; }
    result += grid[row][col];
  }
  return result;
}
