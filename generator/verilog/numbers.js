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
    Blockly.Verilog.ORDER_UNARY_MINUS;
  return [code, order];
};

/**
 *
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['constants'] = function(block) {
  const number = block.getFieldValue('number');
  let bits = block.getFieldValue('bits');
  const base = block.getFieldValue('base');
  let unsignedNumber = number;
  let code = '';
  if (/^-/.test(number)) {  // signed number
    code = '-';
    unsignedNumber = number.substring(1);
  }
  if (bits === 'default')
    bits = '';
  code += `${bits}'${base} ${unsignedNumber}`;
  return [code, Blockly.Verilog.ORDER_ATOMIC];
};

/**
 * decimal to binary/hex/octal
 * @param block
 * @returns {[string, number]}
 */
Blockly.Verilog['decimal_change'] = function(block) {
  const number = block.getFieldValue('number');
  const base = block.getFieldValue('base');
  let code;
  switch (base) {
    case 'b': code = convertBase(number, 'b', 2); break;
    case 'o': code = convertBase(number, 'o', 8); break;
    case 'h': code = convertBase(number, 'h', 16);
  }
  return [code, Blockly.Verilog.ORDER_ATOMIC];
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
