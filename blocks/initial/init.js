/**
 ** 初始化块
 *  不显示在 category 中，仅用于当例化完成后，由程序来完成封装，并显示在 workspace 中。用户不得删除与修改（moduleName 可修改）
 */

// Define module name
Blockly.Blocks['module_name'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("module")
      .appendField(new Blockly.FieldTextInput("tb_"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setDeletable(false);
    this.setMovable(false);
  }
};

// Input port variables
Blockly.Blocks['input_port'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("register variables")
      .appendField(new Blockly.FieldTextInput("..."), "REG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("待测试设计经过例化后的 input 变量");
    this.setHelpUrl("");
    this.setEditable(false);
    this.setDeletable(false);
    // this.setMovable(false);
  },
  extensions: ["break_warning_extension"]
};

// Output port variables
Blockly.Blocks['output_port'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("wire variables")
      .appendField(new Blockly.FieldTextInput("..."), "WIRE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("待测试设计经过例化后的 output 变量");
    this.setHelpUrl("");
    this.setEditable(false);
    this.setDeletable(false);
    this.setMovable(false);
  }
};

// Instance
Blockly.Blocks['instance'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldLabelSerializable("fpag_test"), "MODULENAME")
      .appendField(new Blockly.FieldTextInput("dut"), "NAME")
      .appendField(new Blockly.FieldTextInput("(...)"), "PARAMS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("实例调用");
    this.setHelpUrl("");
    this.setDeletable(false);
    this.setMovable(false);
  }
};

