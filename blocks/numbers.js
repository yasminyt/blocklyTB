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

Blockly.Blocks['constants'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("constant: (signed) number")
        .appendField(new Blockly.FieldTextInput("x"), "number")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("default"), "bits")
        .appendField("bits based")
        .appendField(new Blockly.FieldDropdown([["binary","b"], ["octal","o"], ["decimal","d"], ["hex","h"]]), "base");
    this.setOutput(true, null);
    this.setColour(280);
    this.setTooltip("");
    this.setHelpUrl("http://verilog.renerta.com/source/vrg00020.htm");
  }
};

Blockly.Blocks['decimal_change'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("decimal")
      .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "number")
      .appendField("to")
      .appendField(new Blockly.FieldDropdown([["binary","b"], ["octal","o"], ["hex","h"]]), "base");
    this.setOutput(true, null);
    this.setColour(280);
    this.setTooltip("Returns decimal to binary / octal / hexadecimal results.");
    this.setHelpUrl("");
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

