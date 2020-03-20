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
  const code = '\t$display (' + '"' + text_text + '")' + ';\n';
  return code;
};

/**
 * $readmemb([fileName], [memory]);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['readmemb'] = function(block) {
  const fileName = block.getFieldValue('fileName');
  const memory = Blockly.Verilog.valueToCode(block, 'readmemb', Blockly.Verilog.ORDER_ATOMIC);
  const code = `\t$readmemb("${fileName}", ${memory || 'null'});\n`;
  return code;
};

/**
 * $readmemh([fileName], [memory]);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['readmemh'] = function(block) {
  const fileName = block.getFieldValue('fileName');
  const memory = Blockly.Verilog.valueToCode(block, 'readmemh', Blockly.Verilog.ORDER_ATOMIC);
  const code = `\t$readmemh("${fileName}", ${memory || 'null'});\n`;
  return code;
};

/**
 * $monitor
 * @param block
 * @returns {string}
 */
Blockly.Verilog['monitor_sys'] = function(block) {
  const text_names = block.getFieldValue('names');    // todo: monitor
  const code = '\t$monitor ( ' + text_names + ' );\n';
  return code;
};

/**
 * $finish
 * @param block
 * @returns {string}
 */
Blockly.Verilog['finish_sys'] = function(block) {
  const code = '\t$finish;\n';
  return code;
};
