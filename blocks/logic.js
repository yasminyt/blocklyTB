Blockly.Blocks['bitwise_negate'] = {
  init: function() {
    this.appendValueInput("result")
        .setCheck("Boolean")
        .appendField("bitwise not");
    this.setOutput(true, null);
    this.setColour(215);
    this.setTooltip("");
    this.setHelpUrl("https://www.eg.bucknell.edu/~csci320/2016-fall/wp-content/uploads/2015/08/verilog-std-1364-2005.pdf");
  }
};

Blockly.Blocks['bitwise'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["&","and"], ["|","or"], ["^","xor"], ["~^","xnor"]]), "OP");
    this.appendValueInput("B")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(215);
    this.setTooltip("The bitwise operators perform bitwise manipulations on the operands");
    this.setHelpUrl("https://www.eg.bucknell.edu/~csci320/2016-fall/wp-content/uploads/2015/08/verilog-std-1364-2005.pdf");
  }
};
