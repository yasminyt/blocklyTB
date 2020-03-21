/**
 * Generator Verilog codes for behavior blocks.
 */

/**
 * begin-end
 * @param block
 * @returns {string}
 */
Blockly.Verilog['begin_end'] = function(block) {
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  const code = '\tbegin\n' + statements_body + '\tend\n';
  return code;
};

/**
 * fork-join
 * @param block
 * @returns {string}
 */
Blockly.Verilog['fork_join'] = function(block) {
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  const code = '\tfork\n' + statements_body + '\tjoin\n';
  return code;
};

/**
 * initial
 * @param block
 * @returns {string}
 */
Blockly.Verilog['initial_blocks'] = function(block) {
  const code = '\tinitial\n';
  return code;
};

/**
 * always @
 * @param block
 * @returns {string}
 */
Blockly.Verilog['always_at'] = function(block) {
  const condition = Blockly.Verilog.valueToCode(block, 'condition', Blockly.Verilog.ORDER_ATOMIC);
  const code = `\talways @ (${condition})\n`;
  return code;
};

/**
 * always @(*)
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['asterisk'] = function(block) {
  const code = '*';
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};
