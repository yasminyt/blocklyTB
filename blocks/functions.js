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

Blockly.Blocks['readmemb'] = {
  init: function() {
    this.appendValueInput("readmemb")
      .setCheck(null)
      .appendField("Read binary file")
      .appendField(new Blockly.FieldTextInput("fileName"), "fileName")
      .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("The system task reads binary data from file, and saves to the memory.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['readmemh'] = {
  init: function() {
    this.appendValueInput("readmemh")
      .setCheck(null)
      .appendField("Read hexadecimal file")
      .appendField(new Blockly.FieldTextInput("fileName"), "fileName")
      .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("The system task reads hexadecimal data from file, and saves to the memory.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['monitor_sys'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Monitor variables");
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
