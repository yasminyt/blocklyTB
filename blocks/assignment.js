Blockly.Blocks['none_block_assign'] = {
  init: function() {
    this.appendValueInput("var")
        .setCheck(null)
        .appendField("non-block assign");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("Non-blocking assignments happen in parallel. if an 'always@' block contains multiple '<=' " +
      "assignments, which are literally written in Verilog sequentially, all of the assignments " +
      "being set at exactly the same time.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['block_assign'] = {
  init: function() {
    this.appendValueInput("var")
        .setCheck(null)
        .appendField("block assign");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("Blocking assignments happen sequentially. If an 'always@' block contains multiple '=' " +
      "assignments, the assignments being set one after another.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['assign'] = {
  init: function() {
    this.appendValueInput("statement")
        .setCheck(null)
        .appendField("continuous assign");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("An assign statement is used for modeling only combinational logic and it is executed continuously. " +
      "So the assign statement is called 'continuous assignment statement' as there is no sensitive list.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['none_block_assign_output'] = {
  init: function() {
    this.appendValueInput("var")
        .setCheck(null)
        .appendField("non-block assign");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip("Non-blocking assignments happen in parallel. The assignment is being set at exactly the same time.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['block_assign_output'] = {
  init: function() {
    this.appendValueInput("var")
        .setCheck(null)
        .appendField("block assign");
    this.appendValueInput("value")
      .setCheck(null)
      .appendField("to");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip("Blocking assignments happen sequentially. If an 'always@' block contains multiple '=' " +
      "assignments, the assignments being set one after another.");
    this.setHelpUrl("");
  }
};


