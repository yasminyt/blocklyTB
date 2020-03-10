// creating dynamic variables
Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
  {
    "type": "variables_get_reg",
    "message0": "custom register %1",
    "args0": [{
      "type": "field_variable",
      "name": "VAR",
      "variable": "",
      "variableTypes": ["Register"],
      "defaultType": "Register"
    }],
    "output": null,
    "style": "variable_dynamic_blocks",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "Select a register variable",
  },
  {
    "type": "variables_get_wire",
    "message0": "custom wire %1",
    "args0": [{
      "type": "field_variable",
      "name": "VAR",
      "variable": "",
      "variableTypes": ["Wire"],
      "defaultType": "Wire"
    }],
    "output": null,
    "style": "variable_dynamic_blocks",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "Select a wire variable",
  },
  {
    "type": "variables_get_parameter",
    "message0": "custom parameter %1",
    "args0": [{
      "type": "field_variable",
      "name": "VAR",
      "variable": "",
      "variableTypes": ["Parameter"],
      "defaultType": "Parameter"
    }],
    "output": null,
    "style": "variable_dynamic_blocks",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "Select a parameter variable",
  },
]);

// static dut variables
Blockly.Blocks['reg_dut'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dut register")
        .appendField(new Blockly.FieldDropdown(this.generatedOptions), "variable");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("Select a register variable after DUT");
    this.setHelpUrl("");
  },
  generatedOptions: function () {
    const inputObj = JSON.parse(window.sessionStorage.getItem("inputObj"));
    const params = inputObj['params'];
    return params.map(e => [e, e]);
  }
};

Blockly.Blocks['wire_dut'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dut wire")
        .appendField(new Blockly.FieldDropdown(this.generatedOptions), "variable");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("Select a wire variable after DUT");
    this.setHelpUrl("");
  },
  generatedOptions: function () {
    const inputObj = JSON.parse(window.sessionStorage.getItem("outputObj"));
    const params = inputObj['params'];
    return params.map(e => [e, e]);
  }
};

// generate new variables
Blockly.Blocks['reg_new'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("new register")
        .appendField(new Blockly.FieldVariable("", null, ["String"]), "VAR")
        .appendField("with")
        .appendField(new Blockly.FieldNumber(1, 1, Infinity, 1), "bits")
        .appendField("bits");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Declare a new variable of register type.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['wire_new'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("new wire")
      .appendField(new Blockly.FieldVariable("item"), "NAME")
      .appendField("with")
      .appendField(new Blockly.FieldNumber(1, 1, Infinity, 1), "bits")
      .appendField("bits");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Declare a new variable of wire type.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['parameter_new'] = {
  init: function() {
    this.appendValueInput("VALUE")
      .setCheck(null)
      .appendField("define parameter")
      .appendField(new Blockly.FieldVariable("item"), "NAME")
      .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("Define a new parameter and set value");
    this.setHelpUrl("");
  }
};
