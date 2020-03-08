/**
 * Generator Verilog codes for variables blocks.
 */

/**
 * reg/wire [bits] [varName];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['reg_wire'] = function(block) {
  const dropdown_type = block.getFieldValue('type');
  const text_variable = block.getFieldValue('variable');  // todo: 变量的分类
  const number_bits = block.getFieldValue('bits');
  let code = '';
  if (number_bits === 1)
    code = `${dropdown_type} ${text_variable};\n`;
  else    // todo: set [high bit]-[low bit]
    code = `${dropdown_type} [${number_bits - 1}:0] ${text_variable};\n`;
  return code;
};

/**
 * Parameter variable = value;
 * @param block
 * @returns {string}
 */
Blockly.Verilog['parameter'] = function(block) {
  const text_name = block.getFieldValue('name');
  const value = Blockly.Verilog.valueToCode(block, 'VALUE', Blockly.Verilog.ORDER_ATOMIC);
  const code = `parameter ${text_name} = ${value};\n`;
  return code;
};
