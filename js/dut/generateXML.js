export default function () {
  const moduleName = window.sessionStorage.getItem('moduleName');
  const tbField = `<field name="NAME">tb_${moduleName}</field>`;
  const instanceFiled = `<field name="MODULENAME">${moduleName}</field>`;

  return `
    <xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
      <block type="module_name" id="zS/c.u]_mYJ?AFjZVk1R" x="63" y="63">
        ${tbField}
        <next>
          <block type="input_port" id="Re!VCJOwA|/$C(}Pu+U|">
            <field name="REG">...</field>
            <next>
              <block type="output_port" id="w3QByJ;7#6n%v2D2j)_s">
                <field name="WIRE">...</field>
                <next>
                  <block type="instance" id="/39?N{^F,(wzDnfGoeyn">
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


