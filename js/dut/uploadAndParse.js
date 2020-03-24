const uploadBtn = document.querySelector("button");
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
  if (digitalFile && blocklyFile) {
    // console.log(uploadFile[0])
    // todo: empty input
    return alert('Only one file can be selected for upload!');
  }
  const vReg = /(.v)$/;
  const xmlReg = /(.xml)$/;
  const reader = new FileReader();

  if (digitalFile) {
    if (!vReg.test(digitalFile.name))
      return alert('Please choose a digital file ending with .v !');

    reader.readAsText(digitalFile, 'UTF-8');
    reader.onload = function (e) {
      const data = this.result;
      getExpressions(data);
    }
  }
  if (blocklyFile) {
    if (!xmlReg.test(blocklyFile.name))
      return alert('Please choose a blockly file ending with .xml !');

    reader.readAsText(blocklyFile, 'UTF-8');
    reader.onload = function (e) {
      const data = this.result;
      window.sessionStorage.setItem("blocklyXML", data);
      window.location.href = "blockly-edit.html?file=blockly";
    }
  }
}

function getExpressions(contents) {
  // todo: input reg情况
  const moduleReg = /module\s[\w]+(?=\s?\()/;
  const inputReg = /input[\[:\]\s\w$_,]+(?=;)/g;
  const outputReg = /output[\[:\]\s\w$_,]+(?=;)/g;

  // todo: check if exists module
  const moduleName = contents.match(moduleReg)[0].split(' ')[1];
  const inputs = contents.match(inputReg);
  const outputs = contents.match(outputReg);

  const inputObj = {params: [], pairs: {}},
        outputObj  = {params: [], pairs: {}};
  getParameters(inputs, inputObj);
  getParameters(outputs, outputObj);
  window.sessionStorage.setItem("moduleName", moduleName);
  window.sessionStorage.setItem("inputObj", JSON.stringify(inputObj));
  window.sessionStorage.setItem("outputObj", JSON.stringify(outputObj));
  window.location.href = "blockly-edit.html?file=digital";
}

function getParameters(express, obj) {
  express.forEach(e => {
    const idx = e.indexOf('[');
    if (idx !== -1) {
      const lastIdx = e.indexOf(']');
      const bits = e.substring(idx, lastIdx + 1);
      const paramStr = e.substring(lastIdx + 2);
      combineParams(paramStr, bits, obj);
    } else {
      const paramStr = e.substr(6);
      combineParams(paramStr, '', obj);
    }
  });
}

function combineParams(paramStr, bits, obj) {
  const paramsName = paramStr.split(/,\s?/);
  paramsName.forEach(e => obj.params.push(e));
  obj.pairs[paramStr] = bits;
}
