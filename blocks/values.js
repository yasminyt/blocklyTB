Blockly.Blocks['zero'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0");
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip("Value of 0");
    this.setHelpUrl("https://www.csee.umbc.edu/portal/help/VHDL/verilog/types.html");
  }
};

Blockly.Blocks['one'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("1");
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip('Value of 1');
    this.setHelpUrl("https://www.csee.umbc.edu/portal/help/VHDL/verilog/types.html");
  }
};

Blockly.Blocks['high_impedance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Z");
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip("High high_impedance");
    this.setHelpUrl("https://www.csee.umbc.edu/portal/help/VHDL/verilog/types.html");
  }
};

Blockly.Blocks['uncertainty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("X");
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip("Uncertain value");
    this.setHelpUrl("https://www.csee.umbc.edu/portal/help/VHDL/verilog/types.html");
  }
};

Blockly.Blocks['range'] = {
  init: function() {
    this.appendValueInput("value1")
        .setCheck(null)
        .appendField("range between");
    this.appendValueInput("value2")
        .setCheck(null)
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['repeat_concat'] = {
  init: function() {
    this.appendValueInput("concatenation")
        .setCheck(null)
        .appendField("repeat")
        .appendField(new Blockly.FieldNumber(2, 1, Infinity, 1), "times")
        .appendField("times to");
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("http://verilog.renerta.com/source/vrg00009.htm");
  }
};
