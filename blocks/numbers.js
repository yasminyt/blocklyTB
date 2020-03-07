Blockly.Blocks['math_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0), "NUM");
    this.setOutput(true, null);
    this.setColour(280);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['decimal_binary_return'] = {
  init: function() {
    this.appendValueInput("number")
        .setCheck("Number")
        .appendField("decimal to binary");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(280);
    this.setTooltip('Return the value of decimal to binary');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['decimal_hex_return'] = {
  init: function() {
    this.appendValueInput("number")
        .setCheck("Number")
        .appendField("decimal to hex");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(280);
    this.setTooltip('Return the value of decimal to hex');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['decimal_octal_return'] = {
  init: function() {
    this.appendValueInput("number")
        .setCheck("Number")
        .appendField("decimal to octal");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(280);
    this.setTooltip('Return the value of decimal to octal');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['decimal_binary'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck("Number")
        .appendField("decimal to binary of ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip('Enter a number is decimal to be converted to Binary');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['decimal_hex'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck("Number")
        .appendField("decimal to hex of");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip('Enter a number is decimal to be converted to hex');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['decimal_octal'] = {
  init: function() {
    this.appendValueInput("val")
        .setCheck("Number")
        .appendField("decimal to octal of");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip('Enter a number is decimal to be converted to octal');
    this.setHelpUrl('');
  }
};

