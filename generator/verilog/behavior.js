/**
 * Generator Verilog codes for behavior blocks.
 */

/**
 * initial-begin-end
 * @param block
 * @returns {string}
 */
Blockly.Verilog['initial'] = function(block) {
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  const code = 'initial begin\n' + statements_body + 'end\n';
  return code;
};

/**
 * initial-fork-join
 * @param block
 * @returns {string}
 */
Blockly.Verilog['initial_par'] = function(block) {
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  const code = 'initial fork\n' + statements_body + 'join\n';
  return code;
};

/**
 * always @
 * @param block
 * @returns {string}
 */
Blockly.Verilog['always_at'] = function(block) {
  const value_condition = Blockly.Verilog.valueToCode(block, 'condition', Blockly.Verilog.ORDER_ATOMIC);
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  const code = 'always @ (' + value_condition + ')\n' + 'begin\n' + statements_body + '\n' + 'end\n';
  return code;
};

/**
 * always #
 * @param block
 * @returns {string}
 */
Blockly.Verilog['always_delay'] = function(block) {
  const value_delay = Blockly.Verilog.valueToCode(block, 'delay', Blockly.Verilog.ORDER_ATOMIC);
  const statements_code = Blockly.Verilog.statementToCode(block, 'code');
  const code = 'always #' + value_delay + ' ' + statements_code + '\n';
  return code;
};

/**
 * #time
 * @param block
 * @returns {string}
 */
Blockly.Verilog['delay'] = function(block) {
  let value_time = Blockly.Verilog.valueToCode(block, 'time', Blockly.Verilog.ORDER_ATOMIC);
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  if (value_time === '')
    value_time = '1';
  const code = `#${value_time}\n ${statements_body}\n`;
  return code;
};
