const saveButton = document.querySelector('.saveButton');
saveButton.onclick = () => {
  let code = document.getElementById('codeArea').innerText;
  if (code) {
    const idx = code.indexOf('Copy');
    code = code.substring(0, idx);
    const filename = inputFileName('.v');
    filename && doSave(code, filename);
  }
  else
    alert('There is nothing to save!')
};

function inputFileName(fileType) {
  let filename = prompt('Please enter a filename...');
  if (filename === '')
    return inputFileName();
  else if (filename !== null) {
    if (fileType === '.v') {
      if (/(\.v)$/.test(filename))
        return filename;
      else
        return filename + '.v';
    } else {
      if (/(\.xml)$/.test(filename))
        return filename;
      else
        return filename + '.xml';
    }

  }
  return null;
}

function doSave(code, filename) {
  if (isIE()) {   // IE 浏览器保存
    const winname = window.open('', '_blank', 'top=10000');
    winname.document.open('text/html', 'replace');
    winname.document.writeln(code);
    winname.document.execCommand('saves', '', filename);
    winname.close();
  } else
    saveAs(code, filename);
}

function saveAs(code, filename) {
  const a = document.createElement('a');
  const blob = new Blob([code], {type: 'text/plain'});
  a.download = filename;
  a.href = URL.createObjectURL(blob);
  a.click();
  URL.revokeObjectURL(blob);
}

function isIE() {
  return !!(window.ActiveXObject || 'ActiveXObject' in window);
}
