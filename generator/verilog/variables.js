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
  const variable = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const bits_range = Blockly.Verilog.valueToCode(block, 'bits_range', Blockly.Verilog.ORDER_NONE) || '1';
  const isAdd = block.isAdd_;
  let code = '';
  const numberBit = Number(bits_range);
  if (!isNaN(numberBit))
    if (numberBit <= 1)
      code = `\treg ${variable}`;
    else
      code = `\treg [${numberBit - 1}:0] ${variable}`;
  else
    code = `\treg ${bits_range} ${variable}`;
  if (isAdd) {
    const numbers = Blockly.Verilog.valueToCode(block, 'numbers', Blockly.Verilog.ORDER_NONE);
    const numberReg = Number(numbers);
    if (!isNaN(numberReg)) {
      if (numberReg > 1)
        code += `[0:${numbers - 1}]`;
    } else
      code += numbers;
  }
  code += ';\n';
  return code;
};

/**
 * wire [bits] [varName];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['wire_new'] = function(block) {
  const variable = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const bits_range = Blockly.Verilog.valueToCode(block, 'bits_range', Blockly.Verilog.ORDER_ATOMIC) || '1';
  let code = '';
  const numberBit = Number(bits_range);
  if (!isNaN(numberBit))
    if (numberBit <= 1)
      code = `\twire ${variable};\n`;
    else
      code = `\twire [${numberBit - 1}:0] ${variable};\n`;
  else
    code = `\twire [${bits_range}] ${variable};\n`;
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
  const isAdd = block.isAdd_;
  let code = '';
  if (isAdd) {
    const value = Blockly.Verilog.valueToCode(block, 'value', Blockly.Verilog.ORDER_ATOMIC) || '0';
    code = `\tinteger ${variable_name}=${value};\n`;
  } else
    code = `\tinteger ${variable_name};\n`;
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
