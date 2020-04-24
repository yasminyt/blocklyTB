/**
 * Generator Verilog codes for initial blocks.
 */

import { MODULENAME, INPUTOBJ, OUTPUTOBJ, PARAMETEROBJ } from "../../js/typeKeys.js";

/**
 * module [moduleName];
 * @param block
 * @returns {string}
 */
Blockly.Verilog['module_name'] = function(block) {
  const text_name = block.getFieldValue('NAME');
  let code = `module ${text_name};\n`;
  return code;
};

/**
 * reg [bits] [variable];  // after DUT
 * @param block
 * @returns {string}
 */
Blockly.Verilog['input_port'] = function(block) {
  return generateCodes(INPUTOBJ, 'reg');
};

/**
 * wire [bits] [variable];  // after DUT
 * @param block
 * @returns {string}
 */
Blockly.Verilog['output_port'] = function (block) {
  return generateCodes(OUTPUTOBJ, 'wire');
};

/**
 * Generate codes.
 * @param objName
 * @param type
 * @returns {string}
 */
function generateCodes(objName, type) {
  const obj = JSON.parse(window.sessionStorage.getItem(objName));
  const pairs = obj.pairs;
  const code = [];
  for (const params in pairs) {
    if (pairs.hasOwnProperty(params)) {
      const bits = pairs[params];
      if (bits.length)
        code.push(`\t${type} ${bits} ${params.trim()};\n`);
      else
        code.push(`\t${type} ${params.trim()};\n`);
    }
  }
  return code.join('');
}

/**
 * [moduleName] [instanceName] (...variables list...);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['instance'] = function(block) {
  const text_name = block.getFieldValue('NAME');
  const moduleName = window.sessionStorage.getItem(MODULENAME);
  const params = `${generateParams(INPUTOBJ)}, ${generateParams(OUTPUTOBJ)}`;
  const code = `\t${moduleName} ${text_name}(${params});\n`;
  return code;
};

/**
 * [moduleName] #(...parameters list...) [instanceName] (...variables list...);
 * @param block
 * @returns {string}
 */
Blockly.Verilog['instance_parameter'] = function(block) {
  const moduleName = window.sessionStorage.getItem(MODULENAME);
  const parameters = JSON.parse(window.sessionStorage.getItem(PARAMETEROBJ));
  const dutParams = parameters.map(e => {
    const value = Blockly.Verilog.valueToCode(block, e, Blockly.Verilog.ORDER_NONE) || null;
    return `.${e}(${value})`;
  });
  const dut = block.getFieldValue('dut');
  const in_out = `${generateParams(INPUTOBJ)}, ${generateParams(OUTPUTOBJ)}`;
  const code = `\t${moduleName} #(${dutParams.join(', ')}) ${dut}(${in_out});\n`;
  return code;
};

/**
 * Generate parameters for calling module.
 * @param objName
 * @returns {string}
 */
function generateParams(objName) {
  const obj = JSON.parse(window.sessionStorage.getItem(objName));
  const params = obj.params;
  const change = params.map(e => {
    const trimE = e.trim();
    return `.${trimE}(${trimE})`;
  });
  return change.join(', ');
}
