/**
 * Generator Verilog codes for operators blocks.
 */

/**
 * 四则运算、求余
 * @param block
 * @returns {[*, *]}
 */
Blockly.Verilog['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  const OPERATORS = {
    'ADD': [' + ', Blockly.Verilog.ORDER_UNARY_PLUS],
    'MINUS': [' - ', Blockly.Verilog.ORDER_UNARY_MINUS],
    'MULTIPLY': [' * ', Blockly.Verilog.ORDER_MULT],
    'DIVIDE': [' / ', Blockly.Verilog.ORDER_DIV],
    'REMAINDER': [' % ', Blockly.Verilog.ORDER_MOD]
  };
  const tuple = OPERATORS[block.getFieldValue('OP')];
  const operator = tuple[0];
  const order = tuple[1];
  const argument0 = Blockly.Verilog.valueToCode(block, 'A', order) || '0';
  const argument1 = Blockly.Verilog.valueToCode(block, 'B', order) || '0';
  const code = argument0 + operator + argument1;
  return [code, order];
};

/**
 * a[n]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['bit_select'] = function(block) {
  const value_number = Blockly.Verilog.valueToCode(block, 'number', Blockly.Verilog.ORDER_ATOMIC);
  const value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
  const code = value_name + '[' + value_number + ']';
  return [code, Blockly.Verilog.ORDER_NONE];
};

/**
 * posedge value
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['pos_edge'] = function(block) {
  const value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
  const code = 'posedge ' + value_name;
  return [code, Blockly.Verilog.ORDER_NONE];
};

/**
 * negedge value
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['neg_edge'] = function(block) {
  const value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
  const code = 'negedge ' + value_name;
  return [code, Blockly.Verilog.ORDER_NONE];
};

/**
 * {a, b}
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['concat'] = function(block) {
  const value_arg1 = Blockly.Verilog.valueToCode(block, 'arg1', Blockly.Verilog.ORDER_ATOMIC);
  const value_arg2 = Blockly.Verilog.valueToCode(block, 'arg2', Blockly.Verilog.ORDER_ATOMIC);
  const code = '{' + value_arg1 + ' , ' + value_arg2 + '}';
  return [code, Blockly.Verilog.ORDER_NONE];
};
