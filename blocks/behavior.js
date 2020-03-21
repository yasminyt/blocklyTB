Blockly.Blocks['begin_end'] = {
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

Blockly.Blocks['fork_join'] = {
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

Blockly.Blocks['initial_blocks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("do initial");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("Initial blocks execute only once at time zero (start execution at time zero).");
    this.setHelpUrl("http://www.asic-world.com/verilog/vbehave1.html");
  }
};

Blockly.Blocks['always_at'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(null)
        .appendField("always at");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("It is used to describe events that should happen under certain conditions.");
    this.setHelpUrl("https://class.ece.uw.edu/371/peckol/doc/Always@.pdf");
  }
};

Blockly.Blocks['asterisk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("*");
    this.setOutput(true, null);
    this.setColour(355);
    this.setTooltip("It means all the inputs included, so it is equivalent to writing all the inputs.");
    this.setHelpUrl("");
  }
};
