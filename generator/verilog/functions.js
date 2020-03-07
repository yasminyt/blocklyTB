/**
 * Generator Verilog codes for functions blocks.
 */

/**
 * $display
 * @param block
 * @returns {string}
 */
Blockly.Verilog['display_sys'] = function(block) {
  const text_text = block.getFieldValue('text');
  const code = '$display (' + '"' + text_text + '")' + ';\n';
  return code;
};

/**
 * $monitor
 * @param block
 * @returns {string}
 */
Blockly.Verilog['monitor_sys'] = function(block) {
  const text_names = block.getFieldValue('names');    // todo: monitor
  const code = '$monitor ( ' + text_names + ' );\n';
  return code;
};

/**
 * $finish
 * @param block
 * @returns {string}
 */
Blockly.Verilog['finish_sys'] = function(block) {
  const code = '$finish;\n';
  return code;
};
