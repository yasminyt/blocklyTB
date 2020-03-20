Blockly.Blocks['timescale'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("timescale")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["10","10"], ["100","100"]]), "time_unit")
        .appendField(new Blockly.FieldDropdown([["s","s"], ["ms","ms"], ["us","us"], ["ns","ns"], ["ps","ps"]]), "unit1")
        .appendField("/")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["10","10"], ["100","100"]]), "time_precision")
        .appendField(new Blockly.FieldDropdown([["s","s"], ["ms","ms"], ["us","us"], ["ns","ns"], ["ps","ps"]]), "unit2");
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['end_module'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("endmodule");
    this.setPreviousStatement(true, null);
    this.setColour(345);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
