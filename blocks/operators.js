Blockly.Blocks['bit_select'] = {
  init: function() {
    this.appendValueInput("number")
        .setCheck(null)
        .appendField("select bit");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("from variable");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('Enter a number and a variable getter, this will select input bit number');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pos_edge'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("rising edge of");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('Rising edge of');
    this.setHelpUrl("https://electronics.stackexchange.com/questions/326662/posedge-in-verilog");
  }
};

Blockly.Blocks['neg_edge'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("falling edge of");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('Falling edge of');
    this.setHelpUrl("https://electronics.stackexchange.com/questions/326662/posedge-in-verilog");
  }
};

Blockly.Blocks['concatenation'] = {
  init: function() {
    this.appendValueInput("expressions")
        .setCheck(null)
        .appendField("concatenation");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip("The concatenation is the combination of two or more expressions. You can create a list of expressions.");
    this.setHelpUrl("http://verilog.renerta.com/source/vrg00009.htm");
  }
};
