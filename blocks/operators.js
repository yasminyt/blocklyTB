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

Blockly.Blocks['concat'] = {
  init: function() {
    this.appendValueInput("arg1")
        .setCheck(null)
        .appendField("");
    this.appendDummyInput()
        .appendField("concatenate with");
    this.appendValueInput("arg2")
        .setCheck(null)
        .appendField("");
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
