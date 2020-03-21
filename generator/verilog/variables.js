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
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * [wire variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_wire'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * [parameter variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_parameter'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * [localparam variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_localparam'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * [integer variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_integer'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Verilog.ORDER_ATOMIC];
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
    code = `\treg ${variable_name};\n`;
  else
    code = `\treg [${bits - 1}:0] ${variable_name};\n`;
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
    code = `\twire ${variable_name};\n`;
  else
    code = `\twire [${bits - 1}:0] ${variable_name};\n`;
  return code;
};

/**
 * parameter var = value;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['parameter_new'] = function(block) {
  const variable_name = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = Blockly.Verilog.valueToCode(block, 'VALUE', Blockly.Verilog.ORDER_ATOMIC) || '0';
  const code = `\tparameter ${variable_name} = ${value};\n`;
  return code;
};

/**
 * localparam var = value;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['localparam_new'] = function(block) {
  const variable_name = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = Blockly.Verilog.valueToCode(block, 'VALUE', Blockly.Verilog.ORDER_ATOMIC) || '0';
  const code = `\tlocalparam ${variable_name} = ${value};\n`;
  return code;
};

/**
 * integer var;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['integer_new'] = function(block) {
  const variable_name = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const code = `\tinteger ${variable_name};\n`;
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
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * [wire variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['wire_dut'] = function(block) {
  const dropdown_variable = block.getFieldValue('variable');
  const code = `${dropdown_variable}`;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};
