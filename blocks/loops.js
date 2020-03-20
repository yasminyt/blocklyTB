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

Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField("count with");
    this.appendValueInput("FROM")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("from");
    this.appendValueInput("TO")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to");
    this.appendValueInput("BY")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("by");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// notes: 其余未添加的即使用 blockly 原生提供的
