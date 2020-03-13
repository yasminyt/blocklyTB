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
  const code = `
    task ${variable};
      ${content}
    endtask\n  
  `;
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
  const code = `${variable}(${elements.join(', ')});\n`;
  return code;
};

/**
 * input [bits] [varName];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['input_new'] = function(block) {
  const variable_name = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const bits = block.getFieldValue('bits');
  let code = '';
  if (bits === 1)
    code = `input ${variable_name};\n`;
  else
    code = `input [${bits - 1}:0] ${variable_name};\n`;
  return code;
};

/**
 * [input variable]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['variables_get_input'] = function(block) {
  const code = Blockly.Verilog.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return code;
};

