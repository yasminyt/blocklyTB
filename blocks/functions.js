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

Blockly.defineBlocksWithJsonArray([
  {
    "type": "write_sys",
    "message0": "Write %1",
    "args0": [
      {
        "type": "field_input",
        "name": "message",
        "text": "messages"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "System task \"Write\" displays specific information from the simulator.",
    "helpUrl": "http://www.verilog.renerta.com/source/vrg00013.htm",
    "mutator": "add_variables"
  },
  {
    "type": "display_sys",
    "message0": "Display %1",
    "args0": [
      {
        "type": "field_input",
        "name": "message",
        "text": "messages"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "System task \"display\" displays specific information from the simulator, and " +
      "adds a new line character at the end of the output",
    "helpUrl": "http://www.verilog.renerta.com/source/vrg00013.htm",
    "mutator": "add_variables"
  },
]);

Blockly.Blocks['monitor_sys'] = {
  init: function() {
    this.appendValueInput("variables")
        .setCheck(null)
        .appendField("Monitor variables");
    this.appendDummyInput()
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("messages"), "message");
    this.setInputsInline(true);
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

Blockly.defineBlocksWithJsonArray([
  {
    "type": "fclose",
    "message0": "",
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 10,
    "tooltip": "To close an opened file use the $fclose function. This function is called without any arguments, it simply closes all opened files. If an argument is specified it will close only a file in which the descriptor is given.",
    "helpUrl": "http://verilog.renerta.com/source/vrg00016.htm",
    "mutator": "add_file"
  }
]);

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

Blockly.defineBlocksWithJsonArray([
  {
    "type": "fdisplay",
    "message0": "Print message %1 to file %2",
    "args0": [
      {
        "type": "field_input",
        "name": "message",
        "text": "default"
      },
      {
        "type": "input_value",
        "name": "fileName"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 10,
    "tooltip": "Write content to specified file. Variable list is optional.",
    "helpUrl": "http://verilog.renerta.com/source/vrg00016.htm",
    "mutator": "add_variables"
  }
]);

Blockly.Blocks['fmonitor'] = {
  init: function() {
    this.appendValueInput("variables")
        .setCheck(null)
        .appendField("Monitor variables");
    this.appendValueInput("fileName")
        .setCheck(null)
        .appendField("in file");
    this.appendDummyInput()
        .appendField("and print")
        .appendField(new Blockly.FieldTextInput("messages"), "message");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip("");
    this.setHelpUrl("http://verilog.renerta.com/source/vrg00016.htm");
  }
};

Blockly.Extensions.registerMutator('add_variables',
  Blockly.Constants.CustomMenu.ADD_VARIABLES,
  Blockly.Constants.CustomMenu.EXTENSIONS, ['']);


Blockly.Extensions.registerMutator('add_file',
  Blockly.Constants.CustomMenu.ADD_FILE,
  Blockly.Constants.CustomMenu.EXTENSIONS2, ['']);
