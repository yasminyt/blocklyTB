Blockly.Blocks['initial'] = {
  init: function() {
    this.appendDummyInput("condition")
        .appendField("Execute at t=0");
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("Block to start the simulation phase");
    this.setHelpUrl("http://referencedesigner.com/tutorials/verilog/verilog_16.php");
  }
};

Blockly.Blocks['initial_par'] = {
  init: function() {
    this.appendDummyInput("condition")
        .appendField("Execute the following all at t=0");
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("Block to start the parallel execution simulation phase");
    this.setHelpUrl("http://referencedesigner.com/tutorials/verilog/verilog_16.php");
  }
};

Blockly.Blocks['always_at'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(null)
        .appendField("Always at");
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("Always Block to keep looping forever");
    this.setHelpUrl("http://referencedesigner.com/tutorials/verilog/verilog_16.php");
  }
};

Blockly.Blocks['always_delay'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("Always delay");
    this.appendStatementInput("code")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// todo: delay
Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck(null)
        .appendField("delay time");
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("After few seconds, code inside will be executed");
    this.setHelpUrl("");
  }
};


// 缺 logic_operation_2
