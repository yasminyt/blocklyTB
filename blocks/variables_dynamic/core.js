// todo: 变量命名检查
Blockly.VariablesDynamic.onCreateVariableButtonClick_Register = function(button) {
  const workspace = button.getTargetWorkspace();
  Blockly.Variables.createVariableButtonHandler(workspace,
    undefined, 'Register');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Wire = function(button) {
  const workspace = button.getTargetWorkspace();
  Blockly.Variables.createVariableButtonHandler(workspace,
    undefined, 'Wire');
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Parameter = function(button) {
  const workspace = button.getTargetWorkspace();
  Blockly.Variables.createVariableButtonHandler(workspace,
    undefined, 'Parameter');
};

Blockly.VariablesDynamic.variableCategory = function(workspace) {
  let xmlList = [];
  let button = document.createElement('button');
  button.setAttribute('text', 'create register...');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_REGISTER');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', "create wire...");
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_WIRE');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', "create parameter...");
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_PARAMETER');
  xmlList.push(button);

  workspace.registerButtonCallback('CREATE_VARIABLE_REGISTER',
    Blockly.VariablesDynamic.onCreateVariableButtonClick_Register);
  workspace.registerButtonCallback('CREATE_VARIABLE_WIRE',
    Blockly.VariablesDynamic.onCreateVariableButtonClick_Wire);
  workspace.registerButtonCallback('CREATE_VARIABLE_PARAMETER',
    Blockly.VariablesDynamic.onCreateVariableButtonClick_Parameter);


  const blockList = Blockly.VariablesDynamic.variableCategoryBlocks(workspace);
  xmlList = xmlList.concat(blockList);
  const dutList = Blockly.VariablesDynamic.dutCategoryBlocks();
  xmlList  = xmlList.concat(dutList);
  return xmlList;
};

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.VariablesDynamic.variableCategoryBlocks = function(workspace) {
  const variableModelList = workspace.getAllVariables();
  const xmlList = [];
  if (variableModelList.length > 0) {
    if (Blockly.Blocks['variables_get_dynamic']) {
      variableModelList.sort(Blockly.VariableModel.compareByName);
      for (let i = 0, variable; (variable = variableModelList[i]); i++) {
        const block = Blockly.utils.xml.createElement('block');
        if (variable.type === 'Register')
          block.setAttribute('type', 'variables_get_reg');
        if (variable.type === 'Wire')
          block.setAttribute('type', 'variables_get_wire');
        if (variable.type === 'Parameter')
          block.setAttribute('type', 'variables_get_parameter');
        block.setAttribute('gap', 10);
        block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
        xmlList.push(block);
      }
    }
  }
  return xmlList;
};

Blockly.VariablesDynamic.dutCategoryBlocks = function () {
  const xmlList = [];
  const regBlock = Blockly.utils.xml.createElement('block');
  regBlock.setAttribute('type', 'reg_dut');
  regBlock.setAttribute('gap', 10);
  xmlList.push(regBlock);
  const wireBlock = Blockly.utils.xml.createElement('block');
  wireBlock.setAttribute('type', 'wire_dut');
  xmlList.push(wireBlock);

  return xmlList;
};

function newVariableBlock(text, workspace) {
  const block = `
    <block type="reg_new">
    </block>
  `;
  const xml = Blockly.Xml.textToDom(`<xml>${block}</xml>`);
  console.log(xml)
  Blockly.Xml.domToWorkspace(xml, workspace);
}
