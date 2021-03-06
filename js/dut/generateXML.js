import { MODULENAME, PARAMETEROBJ } from "../typeKeys.js";

function getValues() {
  const moduleName = window.sessionStorage.getItem(MODULENAME);
  let parameters = window.sessionStorage.getItem(PARAMETEROBJ);
  if (parameters) {
    parameters = JSON.parse(parameters);
    generateBlock(parameters);
  }
  return { module: moduleName, parameters };
}

function generateXML() {
  const { module, parameters } = getValues();

  if (!parameters) {
    const xml = `
      <xml xmlns="https://developers.google.com/blockly/xml" style="display: none">
        <block type="module_name" x="38" y="37">
          <field name="NAME">tb_${module}</field>
          <next>
            <block type="input_port">
              <field name="REG">...</field>
              <next>
                <block type="output_port">
                  <field name="WIRE">...</field>
                  <next>
                    <block type="instance">
                      <field name="MODULENAME">${module}</field>
                      <field name="PARAMS">(...)</field>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </next>
        </block>
      </xml>
    `;
    return { xml, parameter: false};
  }
  const xml = `
    <xml xmlns="https://developers.google.com/blockly/xml" style="display: none">
      <block type="module_name" x="38" y="37">
        <field name="NAME">tb_${module}</field>
      </block>
      <block type="input_port" x="38" y="113">
        <field name="REG">...</field>
        <next>
          <block type="output_port">
            <field name="WIRE">...</field>
            <next>
              <block type="instance_parameter">
                <field name="MODULENAME">${module}</field>
                ${generateField(parameters)}
                <field name="NAME">dut</field>
                <field name="PARAMS">(...)</field>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>
    `;
  return { xml, parameter: true };
}

function generateBlock(parameters) {
  Blockly.Blocks['instance_parameter'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("fpag_test"), "MODULENAME")
        .appendField("with parameters");
      this.generateInput();
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("and instance")
        .appendField(new Blockly.FieldTextInput("dut"), "dut")
        .appendField(new Blockly.FieldTextInput("(...)"), "PARAMS");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
      this.setTooltip("实例调用");
      this.setHelpUrl("");
    },
    generateInput() {
      const this_ = this;
      parameters.forEach(e => {
        this_.appendValueInput(e)
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(e);
      })
    }
  };
}

function generateField(parameters) {
  const fields = parameters.map(e => {
    return `<field name="${e}">${e}</field>`;
  });
  return fields.join('\n');
}

function storageVariables(text) {
  const idx = text.indexOf('<VARIABLES>');
  if (idx !== -1) {
    const str = text.substring(idx);
    const variablesStr = str.match(/\{(.)+\}/)[0];
    const variableObj = JSON.parse(variablesStr);
    for (let key in variableObj) {
      if (variableObj.hasOwnProperty(key)) {
        const value = variableObj[key];
        if (value) {
          window.sessionStorage.setItem(key, value);
          if (key === PARAMETEROBJ)
            generateBlock(JSON.parse(value));
        }
      }
    }
    return text.substring(0, idx);
  }
  return text;
}

export { generateXML, generateBlock, storageVariables }
