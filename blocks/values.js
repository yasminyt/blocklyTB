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
