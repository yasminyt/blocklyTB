Blockly.Blocks['delay_single'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("delay time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("Delay Control. Expression specifies the time duration between initially " +
      "encountering the statement and when the statement actually executes.");
    this.setHelpUrl("");
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
    this.setColour(195);
    this.setTooltip("Delay Control. Expression specifies the time duration between initially " +
      "encountering the statement and when the statement actually executes.");
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
    this.setColour(195);
    this.setTooltip("Delay Control. Expression specifies the time duration between initially " +
      "encountering the statement and when the statement actually executes.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['timing_at'] = {
  init: function() {
    this.appendValueInput("events")
        .setCheck(null)
        .appendField("At with");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("Event control. Can assign a list of sensitive events.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['timing_wait'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("wait true");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("The wait statement allows a procedural statement or a block to be delayed until a condition becomes true. ");
    this.setHelpUrl("");
  }
};
