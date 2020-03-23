Blockly.Blocks['write_sys'] = {
  init: function() {
    this.appendValueInput("variables")
        .setCheck(null)
        .appendField("Write")
        .appendField(new Blockly.FieldTextInput("messages"), "message")
        .appendField("with variables");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("System task \"write\" displays specific information from the simulator.");
    this.setHelpUrl("http://www.verilog.renerta.com/source/vrg00013.htm");
  }
};

Blockly.Blocks['display_sys'] = {
  init: function() {
    this.appendValueInput("variables")
        .setCheck(null)
        .appendField("Display")
        .appendField(new Blockly.FieldTextInput("messages"), "message")
        .appendField("with variables");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("System task \"display\" displays specific information from the simulator, and " +
      "adds a new line character at the end of the output");
    this.setHelpUrl("http://www.verilog.renerta.com/source/vrg00013.htm");
  }
};

Blockly.Blocks['monitor_sys'] = {
  init: function() {
    this.appendValueInput("variables")
        .setCheck(null)
        .appendField("Monitor")
        .appendField(new Blockly.FieldTextInput("messages"), "message")
        .appendField("with variables");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("The $monitor task provides the ability to monitor and display the" +
      " values of any variables or expressions specified as arguments to the task.");
    this.setHelpUrl("http://www.verilog.renerta.com/source/vrg00013.htm");
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

Blockly.Blocks['finish_sys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Finish simulation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Finishes a simulation and exits the simulation process.");
    this.setHelpUrl("https://www.eg.bucknell.edu/~csci320/2016-fall/wp-content/uploads/2015/08/verilog-std-1364-2005.pdf");
  }
};

Blockly.Blocks['stop_sys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop simulation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Halts a simulation and enters an interactive debug mode.");
    this.setHelpUrl("https://www.eg.bucknell.edu/~csci320/2016-fall/wp-content/uploads/2015/08/verilog-std-1364-2005.pdf");
  }
};

// todo: $time, $fopen, $fdisplay
