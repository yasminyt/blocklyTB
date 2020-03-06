const saveButton = document.querySelector('.saveButton');
saveButton.onclick = () => {
  const code = document.getElementById('codeArea').innerText;
  if (code) {
    const filename = inputFileName();
    filename && doSave(code, filename);
  }
  else
    alert('There is nothing to save!')
};

function inputFileName() {
  let filename = prompt('Please enter a filename...');
  if (filename === '')
    return inputFileName();
  else if (filename !== null) {
    if (/\.v$/.test(filename))
      return filename;
    else
      return filename + '.v';
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
  a.setAttribute('href', 'data:text/html;gb2312,' + code);
  a.setAttribute('download', filename);
  a.setAttribute('target', '_blank');
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
}

function isIE() {
  return !!(window.ActiveXObject || 'ActiveXObject' in window);
}
