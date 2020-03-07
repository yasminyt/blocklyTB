Blockly.Blocks['display_sys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print ")
        .appendField(new Blockly.FieldTextInput("text"), "text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('Used to display some text');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['monitor_sys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Monitor variables ")    // todo: 修改为下拉框选择变量
        .appendField(new Blockly.FieldTextInput("variables"), "names");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['finish_sys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Finish simulation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('Finish the simulation by appending this block');
    this.setHelpUrl('');
  }
};
