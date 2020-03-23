Blockly.defineBlocksWithJsonArray([
  // Block for basic arithmetic operator.
  {
    "type": "arithmetic",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["%{BKY_MATH_ADDITION_SYMBOL}", "PLUS"],
          ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
          ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
          ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
          ["%", "MODULUS"]
        ]
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 75,
    "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
    "extensions": ["custom_math_op_tooltip"]
  },
]);

/**
 * Mapping of math block OP value to tooltip message for blocks math_arithmetic.
 * @see {Blockly.Extensions#buildTooltipForDropdown}
 * @package
 * @readonly
 */
Blockly.Constants.Math.CUSTOM_TOOLTIPS_BY_OP = {
  // math_arithmetic
  'PLUS': '%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}',
  'MINUS': '%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}',
  'MULTIPLY': '%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}',
  'DIVIDE': '%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}',
  'MODULUS': '%{BKY_MATH_ARITHMETIC_TOOLTIP_MODULUS}',
};

Blockly.Extensions.register('custom_math_op_tooltip',
  Blockly.Extensions.buildTooltipForDropdown(
    'OP', Blockly.Constants.Math.CUSTOM_TOOLTIPS_BY_OP));

Blockly.Blocks['random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random number");
    this.setOutput(true, null);
    this.setColour(75);
    this.setTooltip("The system task returns a 32-bit signed integer.");
    this.setHelpUrl("");
  }
};
