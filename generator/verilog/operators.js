/**
 * Generator Verilog codes for operators blocks.
 */

/**
 * a[n]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['bit_select'] = function(block) {
  const value_number = Blockly.Verilog.valueToCode(block, 'number', Blockly.Verilog.ORDER_ATOMIC);
  const value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_BIT_SELECT);
  const code = value_name + '[' + value_number + ']';
  return [code, Blockly.Verilog.ORDER_BIT_SELECT];
};

/**
 * posedge [valueName]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['pos_edge'] = function(block) {
  const value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
  const code = 'posedge ' + value_name;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * negedge [valueName]
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['neg_edge'] = function(block) {
  const value_name = Blockly.Verilog.valueToCode(block, 'NAME', Blockly.Verilog.ORDER_ATOMIC);
  const code = 'negedge ' + value_name;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * {a, b}
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['concatenation'] = function(block) {
  const expressions = Blockly.Verilog.valueToCode(block, 'expressions', Blockly.Verilog.ORDER_ATOMIC);
  let code;
  if (/^{.+}$/.test(expressions))
    code = expressions;
  else
    code = `{${expressions}}`;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};
