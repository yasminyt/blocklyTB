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

  // init the workspace
  const xml = generateXML();
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);

  // realtime generator code
  workspace.addChangeListener(() => realtimeGenerate(null, workspace));

  // 注册自定义的 toolbox-variable
  if (Blockly.VariablesDynamic && Blockly.VariablesDynamic.CreateVariables) {
    workspace.registerToolboxCategoryCallback("variable_dynamic",
      () => Blockly.VariablesDynamic.CreateVariables.variableCategory(workspace));
  }
  // 注册自定义的 toolbox-task
  if (Blockly.VariablesDynamic && Blockly.VariablesDynamic.CreateTask) {
    workspace.registerToolboxCategoryCallback("create_task",
      () => Blockly.VariablesDynamic.CreateTask.taskCategory(workspace));
  }
};

function realtimeGenerate(event, workspace) {
  const code = Blockly.Verilog.workspaceToCode(workspace);
  document.getElementById('codeArea').innerText = code;
}
