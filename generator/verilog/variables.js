/**
 * Generator Verilog codes for variables blocks.
 */

/**
 * [register variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_reg'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return code;
};

/**
 * [wire variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_wire'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Verilog.ORDER_NONE];
};

/**
 * [parameter variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_parameter'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Verilog.ORDER_NONE];
};

/**
 * reg [bits] [varName];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['reg_new'] = function(block) {
  const variable_name = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const bits = block.getFieldValue('bits');
  let code = '';
  if (bits === 1)
    code = `reg ${variable_name};\n`;
  else
    code = `reg [${bits - 1}:0] ${variable_name};\n`;
  return code;
};

/**
 * wire [bits] [varName];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['wire_new'] = function(block) {
  const variable_name = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const bits = block.getFieldValue('bits');
  let code = '';
  if (bits === 1)
    code = `wire ${variable_name};\n`;
  else
    code = `wire [${bits - 1}:0] ${variable_name};\n`;
  return code;
};

/**
 *
 * @param block
 * @returns {string}
 */
Blockly.Verilog['parameter_new'] = function(block) {
  const variable_name = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = Blockly.Verilog.valueToCode(block, 'VALUE', Blockly.Verilog.ORDER_ATOMIC);
  let code = '';
  if (value === '')
    code = `parameter ${variable_name} = 0;\n`;
  else
    code = `parameter ${variable_name} = ${value};\n`;
  return code;
};

/**
 * [reg variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['reg_dut'] = function(block) {
  const dropdown_variable = block.getFieldValue('variable');
  const code = `${dropdown_variable}`;
  return [code, Blockly.Verilog.ORDER_NONE];
};

/**
 * [wire variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['wire_dut'] = function(block) {
  const dropdown_variable = block.getFieldValue('variable');
  const code = `${dropdown_variable}`;
  return [code, Blockly.Verilog.ORDER_NONE];
};
