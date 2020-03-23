/**
 * Generator Verilog codes for functions blocks.
 */

/**
 * $write(messages[ ,variables]);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['write_sys'] = function(block) {
  const message = block.getFieldValue('message');
  const variables = Blockly.Verilog.valueToCode(block, 'variables', Blockly.Verilog.ORDER_ATOMIC);
  let code;
  if (variables === '')
    code = `\t$write("${message}");\n`;
  else
    code = `\t$write("${message}", ${variables});\n`;
  return code;
};

/**
 * $display(messages[ ,variables]);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['display_sys'] = function(block) {
  const message = block.getFieldValue('message');
  const variables = Blockly.Verilog.valueToCode(block, 'variables', Blockly.Verilog.ORDER_ATOMIC);
  let code;
  if (variables === '')
    code = `\t$display("${message}");\n`;
  else
    code = `\t$display("${message}", ${variables});\n`;
  return code;
};

/**
 * $monitor(messages[ ,variables]);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['monitor_sys'] = function(block) {
  const message = block.getFieldValue('message');
  const variables = Blockly.Verilog.valueToCode(block, 'variables', Blockly.Verilog.ORDER_ATOMIC);
  const code = `\t$monitor("${message}", ${variables});\n`;
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
 * $finish;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['finish_sys'] = function(block) {
  const code = '\t$finish;\n';
  return code;
};

/**
 * $stop
 * @param block
 * @returns {string}
 */
Blockly.Verilog['stop_sys'] = function(block) {
  const code = '\t$stop;\n';
  return code;
};
