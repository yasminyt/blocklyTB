/**
 * Generator Verilog codes for logic blocks.
 */

/**
 * if-else
 * @param block
 * @returns {string}
 */
Blockly.Verilog['controls_if'] = function(block) {
  let n = 0;
  let code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Verilog.valueToCode(block, 'IF' + n,
      Blockly.Verilog.ORDER_NONE) || '0';
    branchCode = Blockly.Verilog.statementToCode(block, 'DO' + n);
    code += (n > 0 ? '\n\telse' : '') +
      '\tif (' + conditionCode + ') ' + '\tbegin\n' + branchCode+ '\tend';
    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Verilog.statementToCode(block, 'ELSE');
    code += '\n\telse ' + '\tbegin\n' + branchCode + '\tend';
  }
  return code + '\n';
};

/**
 * true/false -- 1/0
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['logic_boolean'] = function(block) {
  // Boolean values true and false.
  const code = (block.getFieldValue('BOOL') === 'TRUE') ? '1' : '0';
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * !value
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['logic_negate'] = function(block) {
  // Negation.
  const order = Blockly.Verilog.ORDER_LOGICAL_NEGATION;
  const argument0 = Blockly.Verilog.valueToCode(block, 'BOOL', order) || '1';
  const code = '!' + argument0;
  return [code, order];
};

/**
 * && / ||
 * @param block
 * @returns {[string, *]}
 */
Blockly.Verilog['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  const operator = (block.getFieldValue('OP') === 'AND') ? '&&' : '||';
  const order = (operator === '&&') ? Blockly.Verilog.ORDER_LOGICAL_AND :
    Blockly.Verilog.ORDER_LOGICAL_OR;
  let argument0 = Blockly.Verilog.valueToCode(block, 'A', order);
  let argument1 = Blockly.Verilog.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = '0';
    argument1 = '0';
  } else {
    // Single missing arguments have no effect on the return value.
    const defaultArgument = (operator === '&&') ? '1' : '0';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  const code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

/**
 * ==/!=/</<=/>/>=
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['logic_compare'] = function(block) {
  // Comparison operator.
  const OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  const operator = OPERATORS[block.getFieldValue('OP')];
  const order = (operator === '==' || operator === '!=') ?
    Blockly.Verilog.ORDER_LOGICAL_EQUALITY : Blockly.Verilog.ORDER_RELATIONAL;
  const argument0 = Blockly.Verilog.valueToCode(block, 'A', order) || '0';
  const argument1 = Blockly.Verilog.valueToCode(block, 'B', order) || '0';
  const code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

/**
 * 三元运算符：operation ? true : false
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['logic_ternary'] = function(block) {
  // Ternary operator.
  const value_if = Blockly.Verilog.valueToCode(block, 'IF',
    Blockly.Verilog.ORDER_CONDITIONAL) || '0';
  const value_then = Blockly.Verilog.valueToCode(block, 'THEN',
    Blockly.Verilog.ORDER_CONDITIONAL) || 'X';
  const value_else = Blockly.Verilog.valueToCode(block, 'ELSE',
    Blockly.Verilog.ORDER_CONDITIONAL) || 'X';
  const code = '(' + value_if + ')' + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.Verilog.ORDER_CONDITIONAL];
};

/**
 * bitwise operators
 */

/**
 * ~
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['bitwise_negate'] = function(block) {
  const order = Blockly.Verilog.ORDER_BITWISE_XOR;
  const result = Blockly.Verilog.valueToCode(block, 'result', order) || '1';
  const code = `~${result}`;
  return [code, order];
};

/**
 * &, |, ^, ~^
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['bitwise'] = function(block) {
  const OPERATORS = {
    "and": [' & ', Blockly.Verilog.ORDER_BITWISE_AND],
    "or": [' | ', Blockly.Verilog.ORDER_BITWISE_OR],
    "xor": [' ^ ', Blockly.Verilog.ORDER_BITWISE_XOR],
    "xnor": [' ~^ ', Blockly.Verilog.ORDER_BITWISE_XNOR],
  };
  const tuple = OPERATORS[block.getFieldValue('OP')];
  const [operator, order] = tuple;
  const argument0 = Blockly.Verilog.valueToCode(block, 'A', order) || '0';
  const argument1 = Blockly.Verilog.valueToCode(block, 'B', order) || '0';
  const code = argument0 + operator + argument1
  return [code, order];
};
