/**
 * Generator Verilog codes for assignment blocks.
 */

/**
 * variable <= value;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['none_block_assign'] = function(block) {
  const variable = Blockly.Verilog.valueToCode(block, 'var', Blockly.Verilog.ORDER_NONE);
  const value = Blockly.Verilog.valueToCode(block, 'value', Blockly.Verilog.ORDER_ASSIGNMENT);

  const code = `\t${variable || 'null'} <= ${value || 'null'};\n`;
  return code;
};

/**
 * variable = value;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['block_assign'] = function(block) {
  const variable = Blockly.Verilog.valueToCode(block, 'var', Blockly.Verilog.ORDER_NONE);
  const value = Blockly.Verilog.valueToCode(block, 'value', Blockly.Verilog.ORDER_ASSIGNMENT);
  const code = `\t${variable || 'null'} = ${value || 'null'};\n`;
  return code;
};

/**
 * assign statement;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['assign'] = function(block) {
  const statement = Blockly.Verilog.valueToCode(block, 'statement', Blockly.Verilog.ORDER_ASSIGNMENT);
  const code = `\tassign ${statement || '[statement]'};\n`;
  return code;
};

/**
 * (return) variable <= value
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['none_block_assign_output'] = function(block) {
  const variable = Blockly.Verilog.valueToCode(block, 'var', Blockly.Verilog.ORDER_NONE);
  const value = Blockly.Verilog.valueToCode(block, 'value', Blockly.Verilog.ORDER_ASSIGNMENT);
  const code = `${variable || 'null'} <= ${value || 'null'}`;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * (return) variable = value
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['block_assign_output'] = function(block) {
  const variable = Blockly.Verilog.valueToCode(block, 'var', Blockly.Verilog.ORDER_NONE);
  const value = Blockly.Verilog.valueToCode(block, 'value', Blockly.Verilog.ORDER_ASSIGNMENT);
  const code = `${variable || 'null'} = ${value || 'null'}`;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};
