/**
 * Generator Verilog codes for timing blocks.
 */

/**
 * #time;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['delay_single'] = function(block) {
  const time = Blockly.Verilog.valueToCode(block, 'time', Blockly.Verilog.ORDER_ATOMIC);
  const code = `\t#${time};\n`;
  return code;
};

/**
 * #time [do something];  // Single delay statement
 * @param block
 * @returns {string}
 */
Blockly.Verilog['delay'] = function(block) {
  let value_time = Blockly.Verilog.valueToCode(block, 'time', Blockly.Verilog.ORDER_ATOMIC);
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  if (value_time === '')
    value_time = '1';
  const code = `\t#${value_time} ${statements_body.trim()}\n`;
  return code;
};

/**
 * #time [do something]  // as the statement
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['delay_output'] = function(block) {
  const time = Blockly.Verilog.valueToCode(block, 'time', Blockly.Verilog.ORDER_ATOMIC);
  const statement = Blockly.Verilog.valueToCode(block, 'statement', Blockly.Verilog.ORDER_ATOMIC);
  const code = `#${time} ${statement}`;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * @([events list]);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['timing_at'] = function(block) {
  const events = Blockly.Verilog.valueToCode(block, 'events', Blockly.Verilog.ORDER_NONE);
  const code = `\t@(${events});\n`;
  return code;
};

/**
 * wait(true);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['timing_wait'] = function(block) {
  const condition = Blockly.Verilog.valueToCode(block, 'condition', Blockly.Verilog.ORDER_NONE);
  const code = `\twait (${condition});\n`;
  return code;
};
