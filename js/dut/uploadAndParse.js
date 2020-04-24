import Parser from './parser.js';
import { MODULENAME, INPUTOBJ, OUTPUTOBJ, PARAMETEROBJ } from "../typeKeys.js";

const uploadBtn = document.querySelector("button");
const inputs = document.querySelectorAll('.custom-file-input');
const labels = document.querySelectorAll('.custom-file-label');

uploadBtn.onclick = e => {
  e.preventDefault();
  readFile();
};

function readFile() {
  const uploadFile = document.getElementsByTagName("input");
  const digitalFile = uploadFile[0].files[0];
  const blocklyFile = uploadFile[1].files[0];
  if (!digitalFile && !blocklyFile)
    return alert('Please choose a digital or blockly design to upload!');
  if (digitalFile && blocklyFile)
    return alertEmpty('Only one file can be selected for upload!');

  const vReg = /(.v)$/;
  const xmlReg = /(.xml)$/;
  const reader = new FileReader();

  if (digitalFile) {
    if (!vReg.test(digitalFile.name))
      return alertEmpty('Please choose a digital file ending with .v !');

    reader.readAsText(digitalFile, 'UTF-8');
    reader.onload = function (e) {
      const data = this.result;
      parseModule(data);
    }
  }
  if (blocklyFile) {
    if (!xmlReg.test(blocklyFile.name))
      return alertEmpty('Please choose a blockly file ending with .xml !');

    reader.readAsText(blocklyFile, 'UTF-8');
    reader.onload = function (e) {
      const data = this.result;
      window.sessionStorage.setItem("blocklyXML", data);
      window.location.href = "blockly-edit.html?file=blockly";
    }
  }
}

function parseModule(contents) {
  const parser = new Parser(contents);

  const moduleName = parser.getModule();
  if (!moduleName)
    return alertEmpty('The module name could not be found, or it was not defined correctly, please recheck!');
  window.sessionStorage.setItem(MODULENAME, moduleName);

  // get variables of parameter type in module definition
  const parameters = parser.getParameter();
  if (parameters)
    window.sessionStorage.setItem(PARAMETEROBJ, JSON.stringify(parameters));

  let in_outExpress = contents;
  if (parser.isModuleDefineHasIn_Out()) {
    in_outExpress = parser.regenerateIn_Out();
  }
  const { inputs, outputs } = parser.getIn_Out(in_outExpress);

  // if (!inputs && !outputs)
  //   return alertEmpty('The input and output port definitions cannot be found or\n' +
  //     'cannot be defined in the parameters of the module, please check the file!');

  if (inputs) {
    const inputObj = {params: [], pairs: {}};
    parser.parseIn_OutExpressions(inputs, inputObj);
    window.sessionStorage.setItem(INPUTOBJ, JSON.stringify(inputObj));
  }
  if (outputs) {
    const outputObj  = {params: [], pairs: {}};
    parser.parseIn_OutExpressions(outputs, outputObj);
    window.sessionStorage.setItem(OUTPUTOBJ, JSON.stringify(outputObj));
  }

  window.location.href = "blockly-edit.html?file=digital";
}

function alertEmpty(str) {
  alert(str);
  inputs.forEach(e => e.value = '');
  labels.forEach(e => e.textContent = '');
}
