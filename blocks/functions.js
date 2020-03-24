Blockly.Blocks['time_sys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Current simulation time");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip("The $time system function returns an integer that is a 64-bit time, scaled to the timescale unit of the module that invoked it. ");
    this.setHelpUrl("https://www.eg.bucknell.edu/~csci320/2016-fall/wp-content/uploads/2015/08/verilog-std-1364-2005.pdf");
  }
};

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

/**
 * File I/O
 */

Blockly.Blocks['fopen'] = {
  init: function() {
    this.appendValueInput("fileName")
        .setCheck(null)
        .appendField("Open a file");
    this.setOutput(true, null);
    this.setColour(10);
    this.setTooltip("Opens a file and returns a multi-channel descriptor in the format of an unsized integer.");
    this.setHelpUrl("http://verilog.renerta.com/source/vrg00016.htm");
  }
};

Blockly.Blocks['fclose'] = {
  init: function() {
    this.appendValueInput("fileName")
        .setCheck(null)
        .appendField("Close all file or choose one");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip("To close an opened file use the $fclose function. This function is called without any arguments, it simply closes all opened files. If an argument is specified it will close only a file in which the descriptor is given.");
    this.setHelpUrl("http://verilog.renerta.com/source/vrg00016.htm");
  }
};


Blockly.Blocks['readmemb'] = {
  init: function() {
    this.appendValueInput("fileName")
        .setCheck(null)
        .appendField("Read binary file");
    this.appendValueInput("memory")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip("The system task reads binary data from file, and saves to the memory.");
    this.setHelpUrl("http://verilog.renerta.com/source/vrg00016.htm");
  }
};

Blockly.Blocks['readmemh'] = {
  init: function() {
    this.appendValueInput("fileName")
        .setCheck(null)
        .appendField("Read hexadecimal file");
    this.appendValueInput("memory")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip("The system task reads hexadecimal data from file, and saves to the memory.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fdisplay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print message")
        .appendField(new Blockly.FieldTextInput("default"), "message");
    this.appendValueInput("variables")
        .setCheck(null)
        .appendField("with variables(opt)");
    this.appendValueInput("fileName")
        .setCheck(null)
        .appendField("to file");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip("Write content to specified file. Variable list is optional.");
    this.setHelpUrl("http://verilog.renerta.com/source/vrg00016.htm");
  }
};
