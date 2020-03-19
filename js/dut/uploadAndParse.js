const uploadBtn = document.querySelector("button");
uploadBtn.onclick = () => readFile();

function readFile() {
  const uploadFile = document.getElementsByTagName("input")[0].files[0];
  if (uploadFile) {
    const reader = new FileReader();
    reader.readAsText(uploadFile, 'UTF-8');
    reader.onload = function (e) {
      const data = this.result;
      getExpressions(data);
    }
  }
}

function getExpressions(contents) {
  const moduleReg = /module\s[\w]+(?=\s?\()/;
  const inputReg = /input[\[:\]\s\w$_,]+(?=;)/g;
  const outputReg = /output[\[:\]\s\w$_,]+(?=;)/g;

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
  window.location.href = "blockly-edit.html";
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
