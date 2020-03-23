/**
 * Generator Verilog codes for loops blocks.
 */

/**
 * forever [statement]
 * @param block
 * @returns {string}
 */
Blockly.Verilog['forever_loop'] = function(block) {
  const statements_body = Blockly.Verilog.statementToCode(block, 'body');
  const code = '\tforever\n' + statements_body;
  return code;
};

/**
 * repeat(times) begin-end
 * @param block
 * @returns {string}
 */
Blockly.Verilog['controls_repeat_ext'] = function(block) {
  const value_number = Blockly.Verilog.valueToCode(block, 'TIMES', Blockly.Verilog.ORDER_ATOMIC);
  const statements_code = Blockly.Verilog.statementToCode(block, 'DO');
  const code = '\trepeat (' + value_number + ') begin\n' + statements_code + '\tend\n';
  return code;
};

/**
 * while(conditions) begin-end
 * @param block
 * @returns {string}
 */
Blockly.Verilog['while_loop'] = function(block) {
  const condition = Blockly.Verilog.valueToCode(block, 'condition', Blockly.Verilog.ORDER_ATOMIC);
  const statements_code = Blockly.Verilog.statementToCode(block, 'code');
  const code = '\twhile (' + condition + ') begin\n' + statements_code + '\tend\n';
  return code;
};

/**
 * for () begin-end
 * @param block
 * @returns {string}
 */
Blockly.Verilog['for_loop'] = function(block) {
  let value_var = Blockly.Verilog.valueToCode(block, 'VAR', Blockly.Verilog.ORDER_ATOMIC);
  const value_from = Blockly.Verilog.valueToCode(block, 'FROM', Blockly.Verilog.ORDER_ATOMIC);
  const value_to = Blockly.Verilog.valueToCode(block, 'TO', Blockly.Verilog.ORDER_ATOMIC);
  const value_by = Blockly.Verilog.valueToCode(block, 'BY', Blockly.Verilog.ORDER_ATOMIC);
  const statements_do = Blockly.Verilog.statementToCode(block, 'DO');

  if (value_var === '')
    value_var = 'null';
  const initialAssignment = `${value_var} = ${value_from}`;
  let logic_operator = '', math_operator = '';
  if (value_from < value_to) {
    logic_operator = '<=';
    math_operator = '+';
  } else {
    logic_operator = '>=';
    math_operator = '-';
  }
  const endCondition = `${value_var} ${logic_operator} ${value_to}`;
  const step_assignment = `${value_var} = ${value_var} ${math_operator} ${value_by}`;
  const code = `\tfor (${initialAssignment}; ${endCondition}; ${step_assignment}) begin\n${statements_do}\n\tend\n`;
  return code;
};
