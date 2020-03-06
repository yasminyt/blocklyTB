import generateXML from "./dut/generateXML.js";

window.onload = () => {
  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    grid:
      {
        spacing: 20,
        length: 3,
        colour: '#aaa',
        snap: true
      },
    trashcan: true,
    zoom:
      {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      },
  });

  const xml = generateXML();
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);

  workspace.addChangeListener(() => realtimeGenerate(null, workspace));
};

function realtimeGenerate(event, workspace) {
  const code = Blockly.Verilog.workspaceToCode(workspace);
  document.getElementById('codeArea').innerText = code;
}
