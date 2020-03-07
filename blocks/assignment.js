// todo: 下拉变量

Blockly.Blocks['assign'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("assign")
        .appendField(new Blockly.FieldVariable("default"), "var");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl("https://stackoverflow.com/questions/28751979/difference-between-behavioral-and-dataflow-in-verilog");
  }
};

Blockly.Blocks['assign_parallel'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("parallel assign")
        .appendField(new Blockly.FieldVariable("default"), "var");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl("https://stackoverflow.com/questions/28751979/difference-between-behavioral-and-dataflow-in-verilog");
  }
};





