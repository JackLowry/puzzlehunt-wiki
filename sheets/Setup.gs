// ============================================================
// PUZZLEHUNT TOOLKIT — Sheet Setup (onOpen)
// ============================================================
// Runs once on first open to build all template tabs.
// Subsequent opens are a no-op (guard check at top).
// ============================================================

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Guard: if tabs already exist, do nothing
  if (ss.getSheetByName('Caesar Brute Force')) return;

  _setupCaesarBruteForce_(ss);
  _setupVigenere_(ss);
  _setupMorse_(ss);
  _setupIndexExtraction_(ss);
  _setupA1Z26_(ss);
  _setupScratch_(ss);

  // Remove the default blank Sheet1 if it's still there
  var blank = ss.getSheetByName('Sheet1');
  if (blank) ss.deleteSheet(blank);

  // Land on the scratch tab
  ss.setActiveSheet(ss.getSheetByName('Scratch'));

  SpreadsheetApp.getUi().alert('Puzzlehunt Toolkit ready! See the Tools tab on the wiki for function reference.');
}


// ================================================================
// TAB: Caesar Brute Force
// ================================================================
function _setupCaesarBruteForce_(ss) {
  var sh = ss.insertSheet('Caesar Brute Force');
  sh.setTabColor('#4a86e8');

  // Instructions
  sh.getRange('A1').setValue('Paste ciphertext in B1 — all 26 shifts appear below automatically.');
  sh.getRange('A1').setFontStyle('italic').setFontColor('#666666');

  // Input label + cell
  sh.getRange('A3').setValue('Ciphertext:').setFontWeight('bold');
  sh.getRange('B3').setValue('KHOOR ZRUOG');

  // Header row
  sh.getRange('A5').setValue('Shift').setFontWeight('bold');
  sh.getRange('B5').setValue('Decoded').setFontWeight('bold');
  sh.getRange('C5').setValue('(negative shift = decode)').setFontStyle('italic').setFontColor('#666666');

  // CAESAR_ALL spills the 26 rows — reference B3 as the input
  sh.getRange('A6').setFormula('=CAESAR_ALL(B3)');

  sh.setColumnWidth(1, 60);
  sh.setColumnWidth(2, 400);
  sh.setColumnWidth(3, 220);
  sh.setFrozenRows(5);
}


// ================================================================
// TAB: Vigenère
// ================================================================
function _setupVigenere_(ss) {
  var sh = ss.insertSheet('Vigenère');
  sh.setTabColor('#6aa84f');

  sh.getRange('A1').setValue('Enter ciphertext and key — decoded text updates live.');
  sh.getRange('A1').setFontStyle('italic').setFontColor('#666666');

  sh.getRange('A3').setValue('Ciphertext:').setFontWeight('bold');
  sh.getRange('B3').setValue('RIJVS');

  sh.getRange('A4').setValue('Key:').setFontWeight('bold');
  sh.getRange('B4').setValue('KEY');

  sh.getRange('A6').setValue('Decoded:').setFontWeight('bold');
  sh.getRange('B6').setFormula('=VIGENERE_DECODE(B3, B4)');
  sh.getRange('B6').setFontWeight('bold').setFontSize(13);

  sh.getRange('A8').setValue('Encoded:').setFontWeight('bold');
  sh.getRange('B8').setFormula('=VIGENERE_ENCODE(B3, B4)');

  sh.setColumnWidth(1, 100);
  sh.setColumnWidth(2, 400);
}


// ================================================================
// TAB: Morse
// ================================================================
function _setupMorse_(ss) {
  var sh = ss.insertSheet('Morse');
  sh.setTabColor('#e69138');

  sh.getRange('A1').setValue('One message per row. Separate letters with spaces; words with " / ".');
  sh.getRange('A1').setFontStyle('italic').setFontColor('#666666');

  // Headers
  sh.getRange('A3').setValue('Input').setFontWeight('bold');
  sh.getRange('B3').setValue('Decoded').setFontWeight('bold');
  sh.getRange('C3').setValue('Encoded').setFontWeight('bold');
  sh.setFrozenRows(3);

  // Example rows
  var examples = [
    ['.... . .-.. .-.. ---', '', ''],
    ['... --- ...', '', ''],
    ['', 'HELLO', ''],
    ['', 'SOS', ''],
  ];
  sh.getRange(4, 1, examples.length, 3).setValues(examples);

  // Decode column B from A; encode column C from B
  for (var r = 4; r <= 20; r++) {
    sh.getRange(r, 2).setFormula('=IF(A' + r + '<>"", MORSE_DECODE(A' + r + '), "")');
    sh.getRange(r, 3).setFormula('=IF(B' + r + '<>"", MORSE_ENCODE(B' + r + '), "")');
  }

  sh.setColumnWidth(1, 350);
  sh.setColumnWidth(2, 200);
  sh.setColumnWidth(3, 350);
}


// ================================================================
// TAB: Index Extraction
// ================================================================
function _setupIndexExtraction_(ss) {
  var sh = ss.insertSheet('Index Extraction');
  sh.setTabColor('#cc0000');

  sh.getRange('A1').setValue('Put words/answers in col A, index number in col B → extracted letter in col C.');
  sh.getRange('A1').setFontStyle('italic').setFontColor('#666666');

  sh.getRange('A3').setValue('Word / Answer').setFontWeight('bold');
  sh.getRange('B3').setValue('Index (1-based)').setFontWeight('bold');
  sh.getRange('C3').setValue('Letter').setFontWeight('bold');
  sh.getRange('D3').setValue('Running extract →').setFontWeight('bold').setFontColor('#666666');
  sh.setFrozenRows(3);

  // Example data
  var data = [
    ['CREAM', 3], ['APPLE', 1], ['TIGER', 4], ['SNAKE', 2], ['HELLO', 5],
  ];
  sh.getRange(4, 1, data.length, 2).setValues(data);

  // Extraction formula for each row
  for (var r = 4; r <= 30; r++) {
    sh.getRange(r, 3).setFormula('=IF(AND(A' + r + '<>"",B' + r + '<>""), INDEX_LETTERS(A' + r + ',B' + r + '), "")');
  }

  // Running concat of all extracted letters
  sh.getRange('D4').setFormula('=JOIN("", C4:C30)');

  sh.setColumnWidth(1, 180);
  sh.setColumnWidth(2, 130);
  sh.setColumnWidth(3, 80);
  sh.setColumnWidth(4, 180);
}


// ================================================================
// TAB: A1Z26
// ================================================================
function _setupA1Z26_(ss) {
  var sh = ss.insertSheet('A1Z26');
  sh.setTabColor('#9900ff');

  sh.getRange('A1').setValue('Letters → numbers (left) and numbers → letters (right).');
  sh.getRange('A1').setFontStyle('italic').setFontColor('#666666');

  // Encode side
  sh.getRange('A3').setValue('Text → Numbers').setFontWeight('bold');
  sh.getRange('A4').setValue('Input text:').setFontWeight('bold');
  sh.getRange('B4').setValue('HELLO');
  sh.getRange('A5').setValue('Numbers:').setFontWeight('bold');
  sh.getRange('B5').setFormula('=A1Z26_ENCODE(B4)');

  // Decode side
  sh.getRange('D3').setValue('Numbers → Text').setFontWeight('bold');
  sh.getRange('D4').setValue('Input numbers:').setFontWeight('bold');
  sh.getRange('E4').setValue('8 5 12 12 15');
  sh.getRange('D5').setValue('Text:').setFontWeight('bold');
  sh.getRange('E5').setFormula('=A1Z26_DECODE(E4)');

  // Bulk section
  sh.getRange('A8').setValue('Bulk: one letter/number per row').setFontWeight('bold');
  sh.getRange('A9').setValue('Letter').setFontWeight('bold');
  sh.getRange('B9').setValue('Number').setFontWeight('bold');
  sh.getRange('D9').setValue('Number').setFontWeight('bold');
  sh.getRange('E9').setValue('Letter').setFontWeight('bold');
  sh.setFrozenRows(9);

  for (var r = 10; r <= 40; r++) {
    sh.getRange(r, 2).setFormula('=IF(A' + r + '<>"", CODE(UPPER(LEFT(A' + r + ',1)))-64, "")');
    sh.getRange(r, 5).setFormula('=IF(D' + r + '<>"", CHAR(D' + r + '+64), "")');
  }

  sh.setColumnWidth(1, 100);
  sh.setColumnWidth(2, 100);
  sh.setColumnWidth(3, 40);
  sh.setColumnWidth(4, 100);
  sh.setColumnWidth(5, 100);
}


// ================================================================
// TAB: Scratch
// ================================================================
function _setupScratch_(ss) {
  var sh = ss.insertSheet('Scratch');
  sh.setTabColor('#999999');

  sh.getRange('A1').setValue('Scratch — all custom functions available here.');
  sh.getRange('A1').setFontStyle('italic').setFontColor('#666666');

  var examples = [
    ['Function', 'Example formula', 'Result'],
    ['CAESAR', '=CAESAR("KHOOR",-3)', ''],
    ['ROT13', '=ROT13("URYYB")', ''],
    ['ATBASH', '=ATBASH("SVOOL")', ''],
    ['MORSE_DECODE', '=MORSE_DECODE(".... . .-.. .-.. ---")', ''],
    ['NATO_DECODE', '=NATO_DECODE("HOTEL ECHO LIMA LIMA OSCAR")', ''],
    ['FROM_BINARY', '=FROM_BINARY("01001000 01100101 01101100 01101100 01101111")', ''],
    ['FROM_HEX', '=FROM_HEX("48 65 6C 6C 6F")', ''],
    ['FROM_BASE64', '=FROM_BASE64("SGVsbG8=")', ''],
    ['A1Z26_DECODE', '=A1Z26_DECODE("8 5 12 12 15")', ''],
    ['INDEX_LETTERS', '=INDEX_LETTERS("HELLO WORLD", "1,7")', ''],
    ['EVERY_NTH', '=EVERY_NTH("ABCDEFGHIJ", 3, 1)', ''],
    ['FIRST_LETTERS', '=FIRST_LETTERS("Hunt Every Note Tool")', ''],
    ['BRAILLE_DECODE', '=BRAILLE_DECODE("1-2-5 1-5")', ''],
    ['POLYBIUS_DECODE', '=POLYBIUS_DECODE("23 15 12 12 34")', ''],
  ];
  sh.getRange(3, 1, examples.length, 3).setValues(examples);

  // Apply all the example formulas so results show live
  for (var r = 4; r < 3 + examples.length; r++) {
    var formula = sh.getRange(r, 2).getValue();
    if (formula.startsWith('=')) sh.getRange(r, 3).setFormula(formula);
  }

  sh.getRange(3, 1, 1, 3).setFontWeight('bold');
  sh.setColumnWidth(1, 150);
  sh.setColumnWidth(2, 380);
  sh.setColumnWidth(3, 250);
  sh.setFrozenRows(3);
}
