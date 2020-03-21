/**
 * Generator Verilog codes for module blocks.
 */

/**
 * `timescale [time_unit]/[time_precision]
 * @param block
 * @returns {string}
 */
Blockly.Verilog['timescale'] = function(block) {
  const time_unit = block.getFieldValue('time_unit');
  const unit1 = block.getFieldValue('unit1');
  const time_precision = block.getFieldValue('time_precision');
  const unit2 = block.getFieldValue('unit2');
  const code = `\t\`timescale ${time_unit}${unit1}/${time_precision}${unit2};\n`
  return code;
};

/**
 * endmodule
 * @param block
 * @returns {string}
 */
Blockly.Verilog['end_module'] = function(block) {
  const code = 'endmodule\n';
  return code;
};
