/**
 * Generator Verilog codes for data flow blocks.
 */

// todo: 下拉变量

/**
 * Assign values = X;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['assign'] = function(block) {
  const variable_var = Blockly.Verilog.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  const value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
  return generateAssign(variable_var, value_name, '=');
};

/**
 * Assign values <= X;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['assign_parallel'] = function(block) {
  const variable_var = Blockly.Verilog.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  const value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
  return generateAssign(variable_var, value_name, '<=');
};

function generateAssign(variable, value, assignOperate) {
  if(value === '')
    return  `assign ${variable} ${assignOperate} X;\n`;
  return  `assign ${variable} ${assignOperate} ${value};\n`;
}
