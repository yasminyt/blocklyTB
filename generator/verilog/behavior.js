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
  const code = '\tinitial begin\n' + statements_body + '\tend\n';
  return code;
};

/**
 * fork-join
 * @param block
 * @returns {string}
 */
Blockly.Verilog['fork-join'] = function(block) {
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  const code = '\tfork\n' + statements_body + '\tjoin\n';
  return code;
};

/**
 * always @ todo: always at
 * @param block
 * @returns {string}
 */
Blockly.Verilog['always_at'] = function(block) {
  const value_condition = Blockly.Verilog.valueToCode(block, 'condition', Blockly.Verilog.ORDER_ATOMIC);
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  const code = '\talways @ (' + value_condition + ') begin\n' + statements_body + '\n' + '\tend\n';
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
  const code = `\t#${value_time} ${statements_body};\n`;
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
  return [code, Blockly.Verilog.ORDER_NONE];
};
