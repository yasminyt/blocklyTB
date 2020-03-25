export default function () {
  const moduleName = window.sessionStorage.getItem('moduleName');
  const tbField = `<field name="NAME">tb_${moduleName}</field>`;
  const instanceFiled = `<field name="MODULENAME">${moduleName}</field>`;

  return `
    <xml xmlns="https://developers.google.com/blockly/xml" style="display: none">
      <block type="module_name" x="63" y="63">
        ${tbField}
        <next>
          <block type="input_port">
            <field name="REG">...</field>
            <next>
              <block type="output_port">
                <field name="WIRE">...</field>
                <next>
                  <block type="instance">
                    ${instanceFiled}
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
}


