/**
 * Generator Verilog codes for task blocks.
 */

/**
 * task-endtask
 * @param block
 * @returns {string}
 */
Blockly.Verilog['task_content'] = function(block) {
  const variable = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const content = Blockly.Verilog.statementToCode(block, 'CONTENT');
  const code = `\ttask ${variable};\n${content}\tendtask\n`;
  return code;
};

/**
 * [taskName] [variables];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['task_call'] = function(block) {
  const variable = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const itemCount = block.itemCount_;
  const elements = new Array(itemCount);
  for (let i = 0; i < itemCount; i++) {
    const value = Blockly.Verilog.valueToCode(block, 'ADD' + i,
      Blockly.Verilog.ORDER_ATOMIC);
    elements[i] = (value === '') ? 0 : value;
  }
  const code = `\t${variable}(${elements.join(', ')});\n`;
  return code;
};

/**
 * input [bits] [varName];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['input_new'] = function(block) {
  const variable = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const bits_range = Blockly.Verilog.valueToCode(block, 'bits_range', Blockly.Verilog.ORDER_ATOMIC) || '1';
  let code = '';
  const numberBit = Number(bits_range);
  if (!isNaN(numberBit))
    if (numberBit <= 1)
      code = `\tinput ${variable};\n`;
    else
      code = `\tinput [${numberBit - 1}:0] ${variable};\n`;
  else
    code = `\tinput [${bits_range}] ${variable};\n`;
  return code;
};

/**
 * [input variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_input'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * output [bits] [varName];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['output_new'] = function(block) {
  const variable = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const bits_range = Blockly.Verilog.valueToCode(block, 'bits_range', Blockly.Verilog.ORDER_ATOMIC) || '1';
  let code = '';
  const numberBit = Number(bits_range);
  if (!isNaN(numberBit))
    if (numberBit <= 1)
      code = `\toutput ${variable};\n`;
    else
      code = `\toutput [${numberBit - 1}:0] ${variable};\n`;
  else
    code = `\toutput [${bits_range}] ${variable};\n`;
  return code;
};

/**
 * [output variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_output'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};
