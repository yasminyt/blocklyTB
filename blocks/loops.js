Blockly.Blocks['forever_loop'] = {
  init: function() {
    this.appendDummyInput("condition")
        .appendField("execute forever");
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Execute the sequence below forever");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['while_loop'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(null)
        .appendField("while");
    this.appendStatementInput("code")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// notes: 其余未添加的即使用 blockly 原生提供的
