import { generateXML, storageVariables } from "./dut/generateXML.js";
import { MODULENAME, INPUTOBJ, OUTPUTOBJ, PARAMETEROBJ } from "./typeKeys.js";

window.onload = () => {
  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    media: 'static/media/',
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
  const url = document.URL;
  const type = url.split('=')[1];

  let xml, parameter = false;
  if (type === 'digital') {
    const result = generateXML();
    xml = result.xml;
    parameter = result.parameter;
  }
  if (type === 'blockly') {
    const text = window.sessionStorage.getItem('blocklyXML');
    xml = storageVariables(text);
  }

  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
  if (parameter)
    alert("\nPlease first create the parameters required in the instance call and connect it to the module block, " +
      "otherwise an error will occur!");

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

  // 注册保存工作区事件
  workspace.registerButtonCallback('saveWorkspace',
    () => saveWorkspace(workspace));
  // 注册返回首页事件
  workspace.registerButtonCallback('back2index', back2index);
};

function realtimeGenerate(event, workspace) {
  const code = Blockly.Verilog.workspaceToCode(workspace);
  const htmlCode = `<pre><code class="language-verilog">${code}</code></pre>`;
  document.getElementById('codeArea').innerHTML = htmlCode;
  Prism.highlightElement(document.querySelector('code'));
}

function saveWorkspace(workspace) {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  let xml_text = Blockly.Xml.domToText(xml);

  const getValue = key => window.sessionStorage.getItem(key);
  const VARIABLES = {
    [MODULENAME]: getValue(MODULENAME),
    [INPUTOBJ]: getValue(INPUTOBJ),
    [OUTPUTOBJ]: getValue(OUTPUTOBJ),
    [PARAMETEROBJ]: getValue(PARAMETEROBJ)
  }
  const variableStr = JSON.stringify(VARIABLES);
  xml_text += `\n<VARIABLES>${variableStr}</VARIABLES>`;
  const filename = inputFileName('.xml');
  filename && doSave(xml_text, filename);
}

function back2index() {
  const result = confirm("\nAre you sure you want to back to the index page?\n\n" +
    "The changes will not be retained!");
  if (result) {
    window.location.href = "index.html";
    sessionStorage.clear();
  }
}
