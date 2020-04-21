function getValues() {
  const moduleName = window.sessionStorage.getItem('moduleName');
  let parameters = window.sessionStorage.getItem('parameterObj');
  if (parameters) {
    parameters = JSON.parse(parameters);
    generateBlock(parameters);
  }
  return { module: moduleName, parameters };
}

export default function () {
  const { module, parameters } = getValues();

  if (!parameters) {
    const xml = `
      <xml xmlns="https://developers.google.com/blockly/xml" style="display: none">
        <block type="module_name" x="63" y="63">
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
