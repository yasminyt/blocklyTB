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
Blockly.defineBlocksWithJsonArray([
  {
    "type": "reg_new",
    "message0": "new register %1 with %2 bits",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "",
        "variableTypes": ["Register"],
        "defaultType": "Register"
      },
      {
        "type": "field_number",
        "name": "bits",
        "value": 1,
        "min": 1,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "Declare a new variable of wire type.",
    "helpUrl": ""
  },
  {
    "type": "wire_new",
    "message0": "new wire %1 with %2 bits",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "",
        "variableTypes": ["Wire"],
        "defaultType": "Wire"
      },
      {
        "type": "field_number",
        "name": "bits",
        "value": 1,
        "min": 1,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "Declare a new variable of wire type.",
    "helpUrl": ""
  },
  {
    "type": "parameter_new",
    "message0": "define parameter %1 to %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "",
        "variableTypes": ["Parameter"],
        "defaultType": "Parameter"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "Define a new parameter and set value",
    "helpUrl": ""
  }
]);
