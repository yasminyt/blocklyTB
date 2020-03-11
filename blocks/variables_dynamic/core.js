// todo: 变量命名检查
const type = {
  REGISTER: "Register",
  WIRE: "Wire",
  PARAMETER: "Parameter"
};

Blockly.VariablesDynamic.onCreateVariableButtonClick_Register = function(button) {
  const workspace = button.getTargetWorkspace();
  Blockly.Variables.createVariableButtonHandler(workspace,
    text => newVariableBlock(text, workspace, type.REGISTER), type.REGISTER);
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Wire = function(button) {
  const workspace = button.getTargetWorkspace();
  Blockly.Variables.createVariableButtonHandler(workspace,
    text => newVariableBlock(text, workspace, type.WIRE), type.WIRE);
};
Blockly.VariablesDynamic.onCreateVariableButtonClick_Parameter = function(button) {
  const workspace = button.getTargetWorkspace();
  Blockly.Variables.createVariableButtonHandler(workspace,
    text => newVariableBlock(text, workspace, type.PARAMETER), type.PARAMETER);
};

Blockly.VariablesDynamic.variableCategory = function(workspace) {
  let xmlList = [];
  let button = document.createElement('button');
  button.setAttribute('text', 'Create register...');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_REGISTER');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', "Create wire...");
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_WIRE');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', "Create parameter...");
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
  const regVariableModelList = workspace.getVariablesOfType(type.REGISTER);
  const wireVariableModelList = workspace.getVariablesOfType(type.WIRE);
  const paramVariableModelList = workspace.getVariablesOfType(type.PARAMETER);

  const xmlList = [];

  const generateBlock = (variableModelList, blockType) => {
    if (variableModelList.length > 0) {
      variableModelList.sort(Blockly.VariableModel.compareByName);
      // Show only one type of variable
      const variable = variableModelList[0];
      const block = Blockly.utils.xml.createElement('block');
      block.setAttribute('type', blockType);
      block.setAttribute('gap', 20);
      block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
      xmlList.push(block);
    }
  };

  generateBlock(regVariableModelList, 'variables_get_reg');
  generateBlock(wireVariableModelList, 'variables_get_wire');
  generateBlock(paramVariableModelList, 'variables_get_parameter');

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

function newVariableBlock(text, workspace, variableType) {
  const variable = workspace.getVariable(text, variableType);
  const id = variable.id_;
  const field = `<field name="VAR" id="${id}" variabletype="${variableType}">${text}</field>`;
  let blockType = '';
  switch (variableType) {
    case type.REGISTER: blockType = 'reg_new'; break;
    case type.WIRE: blockType = 'wire_new'; break;
    case type.PARAMETER: blockType = 'parameter_new';
  }
  const xml = `
    <xml>
      <block type="${blockType}">
        ${field}
      </block>
    </xml>
  `;
  const dom = Blockly.Xml.textToDom(xml);
  Blockly.Xml.domToWorkspace(dom, workspace);
}
