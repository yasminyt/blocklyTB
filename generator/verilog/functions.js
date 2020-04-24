/**
 * Generator Verilog codes for functions blocks.
 */

/**
 * $time
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['time_sys'] = function(block) {
  const code = '$time';
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

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

/**
 * File I/O
 */

/**
 * $fopen(fileName)
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['fopen'] = function(block) {
  const filename = Blockly.Verilog.valueToCode(block, 'fileName', Blockly.Verilog.ORDER_ATOMIC) || 'null';
  const code = `$fopen(${filename})`;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * $fclose[(fileName)];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['fclose'] = function(block) {
  const filename = Blockly.Verilog.valueToCode(block, 'fileName', Blockly.Verilog.ORDER_ATOMIC);
  let code = `\t$fclose`;
  filename && (code += `(${filename})`);
  code += ';\n';
  return code;
};

/**
 * $readmemb([fileName], [memory]);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['readmemb'] = function(block) {
  const filename = Blockly.Verilog.valueToCode(block, 'fileName', Blockly.Verilog.ORDER_ATOMIC) || null;
  const memory = Blockly.Verilog.valueToCode(block, 'memory', Blockly.Verilog.ORDER_ATOMIC) || null;
  const code = `\t$readmemb(${filename}, ${memory});\n`;
  return code;
};

/**
 * $readmemh([fileName], [memory]);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['readmemh'] = function(block) {
  const filename = Blockly.Verilog.valueToCode(block, 'fileName', Blockly.Verilog.ORDER_ATOMIC) || null;
  const memory = Blockly.Verilog.valueToCode(block, 'memory', Blockly.Verilog.ORDER_ATOMIC) || null;
  const code = `\t$readmemh(${filename}, ${memory});\n`;
  return code;
};

/**
 * $fdisplay([fileName], [message], [variables]);
 * @param block
 * @returns {*}
 */
Blockly.Verilog['fdisplay'] = function(block) {
  const message = block.getFieldValue('message');
  const variables = Blockly.Verilog.valueToCode(block, 'variables', Blockly.Verilog.ORDER_ATOMIC);
  const filename = Blockly.Verilog.valueToCode(block, 'fileName', Blockly.Verilog.ORDER_ATOMIC) || null;
  let code;
  if (variables)
    code = `\t$fdisplay(${filename}, "${message}", ${variables});\n`;
  else
    code = `\t$fdisplay(${filename}, "${message}");\n`;
  return code;
};

/**
 * $fmonitor([fileName], [message], [variables]);
 * @param block
 * @returns {*}
 */
Blockly.Verilog['fmonitor'] = function(block) {
  const variables = Blockly.Verilog.valueToCode(block, 'variables', Blockly.Verilog.ORDER_ATOMIC);
  const filename = Blockly.Verilog.valueToCode(block, 'fileName', Blockly.Verilog.ORDER_ATOMIC) || null;
  const message = block.getFieldValue('message');
  let code;
  if (variables)
    code = `\t$fmonitor(${filename}, "${message}", ${variables});\n`;
  else
    code = `\t$fmonitor(${filename}, "${message}");\n`;
  return code;
};
