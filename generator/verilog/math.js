/**
 * Generator Verilog codes for math blocks.
 */

/**
 * + - * / %
 * @param block
 * @returns {[*, *]}
 */
Blockly.Verilog['arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  const OPERATORS = {
    'PLUS': [' + ', Blockly.Verilog.ORDER_BINARY_PLUS],
    'MINUS': [' - ', Blockly.Verilog.ORDER_BINARY_MINUS],
    'MULTIPLY': [' * ', Blockly.Verilog.ORDER_MULTIPLY],
    'DIVIDE': [' / ', Blockly.Verilog.ORDER_DIVIDE],
    'MODULUS': [' % ', Blockly.Verilog.ORDER_MODULUS]
  };
  const tuple = OPERATORS[block.getFieldValue('OP')];
  const operator = tuple[0].trim();
  const order = tuple[1];
  let argument0 = Blockly.Verilog.valueToCode(block, 'A', order) || '0';
  let argument1 = Blockly.Verilog.valueToCode(block, 'B', order);
  ((argument1 === '') && (operator === '+' || operator === '-')) && (argument1 = '0');
  ((argument1 === '') && (operator === '*' || operator === '/' || operator === '%')) && (argument1 = '1');
  const code = argument0 + operator + argument1;
  return [code, order];
};

/**
 * $random
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['random'] = function(block) {
  const code = `$random`;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};
