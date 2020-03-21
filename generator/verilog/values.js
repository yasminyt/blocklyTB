/**
 * Generator Verilog codes for values blocks.
 */

/**
 * value: 0
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['zero'] = function(block) {
  const code = '0';
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * value: 1
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['one'] = function(block) {
  const code = '1';
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * value: Z
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['high_impedance'] = function(block) {
  const code = 'Z';
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * value: X
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['uncertainty'] = function(block) {
  const code = 'X';
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * string value
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['text'] = function(block) {
  // Text value.
  const code = Blockly.Verilog.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * return a custom variables list
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['lists_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  const elements = new Array(block.itemCount_);
  for (let i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Verilog.valueToCode(block, 'ADD' + i,
      Blockly.Verilog.ORDER_COMMA) || 'null';
  }
  const code = elements.join(', ');
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};
