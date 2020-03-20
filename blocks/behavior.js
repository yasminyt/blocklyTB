Blockly.Blocks['initial'] = {
  init: function() {
    this.appendDummyInput("condition")
        .appendField("Sequential execute");
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

Blockly.Blocks['fork-join'] = {
  init: function() {
    this.appendDummyInput("condition")
        .appendField("Parallel execute");
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

// todo: always at
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

Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
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

Blockly.Blocks['delay_output'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("delay time");
    this.appendValueInput("statement")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
