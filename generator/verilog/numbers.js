/**
 * Generator Verilog codes for numbers blocks.
 */

/**
 * numbers
 * @param block
 * @returns {[*, *]}
 */
Blockly.Verilog['math_number'] = function(block) {
  const code = parseFloat(block.getFieldValue('NUM'));
  const order = code >= 0 ? Blockly.Verilog.ORDER_ATOMIC :
    Blockly.Verilog.ORDER_NEG;
  return [code, order];
};

/**
 * decimal to binary
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['decimal_binary_return'] = function(block) {
  const value = Blockly.Verilog.valueToCode(block, 'number', Blockly.Verilog.ORDER_NONE);
  const code = convertBase(value, 'b', 2);
  return [code, Blockly.Verilog.ORDER_NONE];
};

/**
 * decimal to hex
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['decimal_hex_return'] = function(block) {
  const value = Blockly.Verilog.valueToCode(block, 'number', Blockly.Verilog.ORDER_NONE);
  const code = convertBase(value, 'h', 16);
  return [code, Blockly.Verilog.ORDER_NONE];
};

/**
 * decimal to octal
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['decimal_octal_return'] = function(block) {
  const value = Blockly.Verilog.valueToCode(block, 'number', Blockly.Verilog.ORDER_NONE);
  const code = convertBase(value, 'o', 8);
  return [code, Blockly.Verilog.ORDER_NONE];
};

Blockly.Verilog['decimal_binary'] = function(block) {
  const value = Blockly.Verilog.valueToCode(block, 'val', Blockly.Verilog.ORDER_ATOMIC);
  const code = convertBase(value, 'b', 2) +';\n';
  return code;
};

Blockly.Verilog['decimal_hex'] = function(block) {
  const value = Blockly.Verilog.valueToCode(block, 'val', Blockly.Verilog.ORDER_ATOMIC);
  const code = convertBase(value, 'h', 16) +';\n';
  return code;
};

Blockly.Verilog['decimal_octal'] = function(block) {
  const value = Blockly.Verilog.valueToCode(block, 'val', Blockly.Verilog.ORDER_ATOMIC);
  const code = convertBase(value, 'o', 8) +';\n';
  return code;
};

function convertBase(value, type, base) {
  const number = parseFloat(value);
  let code = '';
  if (isNaN(number))
    code = `1'${type}x`;
  else {
    const bits = number.toString(2).length;
    code = `${bits}'${type}${number.toString(base)}`;
  }
  return code;
}
