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
      getExpressions(data);
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

function getExpressions(contents) {
  const moduleReg = /module\s+[A-Za-z][\w$]*(?=\s?\()/;
  const inputReg = /input(.)+(?=;)/g;
  const outputReg = /output(.)+(?=;)/g;

  let moduleName = contents.match(moduleReg)[0];
  if (!moduleName)
    return alertEmpty('The module name could not be found, or it was not defined correctly, please recheck!');

  const inputs = contents.match(inputReg);
  const outputs = contents.match(outputReg);
  if (!inputs && !outputs)
    return alertEmpty('The input and output port definitions cannot be found or\n' +
      'cannot be defined in the parameters of the module, please check the file!');

  if (inputs) {
    const inputObj = {params: [], pairs: {}};
    getParameters(inputs, inputObj);
    window.sessionStorage.setItem("inputObj", JSON.stringify(inputObj));
  }
  if (outputs) {
    const outputObj  = {params: [], pairs: {}};
    getParameters(outputs, outputObj);
    window.sessionStorage.setItem("outputObj", JSON.stringify(outputObj));
  }

  moduleName = moduleName.split(' ')[1];
  window.sessionStorage.setItem("moduleName", moduleName);
  window.location.href = "blockly-edit.html?file=digital";
}

function getParameters(express, obj) {
  express.forEach(e => {
    const idx = e.indexOf('[');
    if (idx !== -1) {
      const lastIdx = e.indexOf(']');
      const bits = e.substring(idx, lastIdx + 1);
      const paramStr = e.substring(lastIdx + 1).trim(); // avoid there is no space between bits and parameters
      combineParams(paramStr, bits, obj);
    } else {
      let paramStr = e.substr(6);

      let reg_wire = e.indexOf('reg ');
      if (reg_wire !== -1)
        paramStr = e.substr(reg_wire + 3);

      reg_wire = e.indexOf('wire ');
      if (reg_wire !== -1)
        paramStr = e.substr(reg_wire + 4);

      combineParams(paramStr.trim(), '', obj);
    }
  });
}

function combineParams(paramStr, bits, obj) {
  const paramsName = paramStr.split(/,\s?/);
  paramsName.forEach(e => obj.params.push(e));
  obj.pairs[paramStr] = bits;
}

function alertEmpty(str) {
  alert(str);
  inputs.forEach(e => e.value = '');
  labels.forEach(e => e.textContent = '');
}
