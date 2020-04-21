class Parser {
  moduleDefine = '';
  constructor(moduleContents) {
    this.moduleContents = moduleContents;
    this.getModuleDefine();
  }

  /**
   * Get the definition of module
   */
  getModuleDefine() {
    const contents = this.moduleContents;
    const firstSep = contents.indexOf(';');
    const moduleDefine = contents.substring(0, firstSep);
    this.moduleDefine = moduleDefine.trim();
  }

  /**
   * Get the module name
   * @returns {string|null}
   */
  getModule() {
    const moduleDefine = this.moduleDefine;
    const moduleReg = /module\s+[A-Za-z][\w$]*\s?\n?(?=\s?#?\s?\()/;
    const moduleStr = moduleDefine.match(moduleReg);
    if (moduleStr === null)
      return null;
    const moduleName = moduleStr[0].split(' ')[1];
    return moduleName.trim();
  }

  /**
   * Get the parameters
   * @returns {null|[]}
   */
  getParameter() {
    const moduleDefine = this.moduleDefine;
    const idx = moduleDefine.indexOf("parameter");
    if (idx === -1)
      return null;

    const keyLen = "parameter".length;
    const keys = [];
    let tmpKey = '';
    const tmpChars = [];
    let i = idx + keyLen + 1;
    let char = moduleDefine[i];
    let comment = false;
    while (char !== ')') {
      if (!comment) {
        switch (char) {
          case ' ':
            if (tmpChars.length) {
              tmpKey = tmpChars.join('');
              tmpChars.length = 0;
            }
            break;
          case '=':
            if (!tmpKey.length) {   // if no space before '='
              tmpKey = tmpChars.join('');
              tmpChars.length = 0;
            }
            keys.push(tmpKey);
            break;
          case '/':
            comment = true;
            tmpChars.length = 0;
            break;
          case '\n':
          case ',':
            tmpChars.length = 0;
            break;
          default:
            tmpChars.push(char);
        }
      } else if (char === '\n') {
        comment = false;
      }
      char = moduleDefine[++i];
    }
    return keys;
  }

  /**
   * If there is input/output in module definition
   * @returns {boolean}
   */
  isModuleDefineHasIn_Out() {
    return /input|output/.test(this.moduleDefine);
  }

  /**
   * Regenerate input/output declaration
   * @returns {string}
   */
  regenerateIn_Out() {
    const moduleDefine = this.moduleDefine;
    const leftLstIdx = moduleDefine.lastIndexOf('(');
    const rightLstIdx = moduleDefine.lastIndexOf(')');
    const expression = moduleDefine.substring(leftLstIdx + 1, rightLstIdx).trim();
    const splitArrs = expression.split('\n');
    const len = splitArrs.length;

    const singleExpress = str => {
      const lstIdx = str.lastIndexOf(',');
      return str.substring(0, lstIdx).trim();
    };

    let in_outStr = [];
    if (len === 1) {
      let tmpArr = [];
      let tmpStr = [];
      const expLen = expression.length;
      for (let i = 0; i < expLen; i++) {
        const char = expression[i];
        if (char === ' ') {
          if (tmpStr.length) {
            const str = tmpStr.join('');
            if (/input|output/.test(str)) {
              if (tmpArr.length) {
                const exp = tmpArr.join(' ');
                in_outStr.push(singleExpress(exp));
                tmpArr.length = 0;
              }
            }
            tmpArr.push(str);
            tmpStr.length = 0;
          }
        } else
          tmpStr.push(char);

        if ((i === expLen - 1) && tmpStr.length && tmpArr.length) {
          tmpArr.push(tmpStr.join(''));
          in_outStr.push(tmpArr.join(' '));
        }
      }
    }
    else {
      const lstIdx = len - 1;
      in_outStr = splitArrs.map((e, idx) => {
        const comment = e.indexOf('//');
        if (comment !== -1) {
          const str = e.substring(0, comment).trim();
          return singleExpress(str);
        } else if (idx !== lstIdx)
          return singleExpress(e);
        else
          return e.trim();
      });
    }

    return in_outStr.join('; ') + ';';
  }
  getIn_Out(contents) {
    const inputReg = /input[\w\[\-:\]\s,]+(?=;)/g;
    const outputReg = /output[\w\[\-:\]\s,]+(?=;)/g;

    const inputs = contents.match(inputReg);
    const outputs = contents.match(outputReg);
    return { inputs, outputs };
  }
  parseIn_OutExpressions(express, obj) {
    express.forEach(e => {
      const idx = e.indexOf('[');
      if (idx !== -1) {
        const lastIdx = e.indexOf(']');
        const bits = e.substring(idx, lastIdx + 1);
        const paramStr = e.substring(lastIdx + 1).trim(); // avoid there is no space between bits and parameters
        this.pairKeyBits(paramStr, bits, obj);
      } else {
        let paramStr = e.substr(6);

        let reg_wire = e.indexOf('reg ');
        if (reg_wire !== -1)
          paramStr = e.substr(reg_wire + 3);

        reg_wire = e.indexOf('wire ');
        if (reg_wire !== -1)
          paramStr = e.substr(reg_wire + 4);

        this.pairKeyBits(paramStr.trim(), '', obj);
      }
    });
  }
  pairKeyBits(keyStr, bits, obj) {
    const paramsName = keyStr.split(/,\s?/);
    paramsName.forEach(e => obj.params.push(e));
    obj.pairs[keyStr] = bits;
  }
}

export default Parser;
