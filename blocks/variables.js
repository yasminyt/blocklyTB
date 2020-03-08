Blockly.Blocks['reg_wire'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new")
        .appendField(new Blockly.FieldDropdown([["register","reg"], ["wire","wire"]]), "type")
        .appendField(new Blockly.FieldTextInput("VarName"), "variable")
        .appendField("with")
        .appendField(new Blockly.FieldNumber(1, 1, Infinity, 1), "bits")
        .appendField("bits");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Declare a new variable of wire type.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['parameter'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("define parameter")
        .appendField(new Blockly.FieldTextInput("VarName"), "name")
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Define a new parameter and set value");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['reg_var'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("custom register")
      .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("Select a register variable");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['wire_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("custom wire")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("Select a wire variable");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['parameter_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("parameter")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("Select a parameter variable");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['reg_dut'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dut register")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("Select a register variable");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['wire_dut'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("dut wire")
      .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("Select a wire variable");
    this.setHelpUrl("");
  }
};
