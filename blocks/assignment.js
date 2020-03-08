/**
 * assign 中的变量由用户自行选择，不做下拉处理
 * todo: 添加延时块
 */

Blockly.Blocks['assign'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("assign")
        .appendField(new Blockly.FieldVariable("default"), "var");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl("https://stackoverflow.com/questions/28751979/difference-between-behavioral-and-dataflow-in-verilog");
  }
};

Blockly.Blocks['assign_parallel'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("parallel assign")
        .appendField(new Blockly.FieldVariable("default"), "var");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl("https://stackoverflow.com/questions/28751979/difference-between-behavioral-and-dataflow-in-verilog");
  }
};





