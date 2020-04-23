// todo: 变量命名检查
import { REGISTER, WIRE, LOCALPARAM, PARAMETER, INTEGER, TASK, INPUT, OUTPUT } from "../../js/typeKeys.js";

Blockly.VariablesDynamic.CreateVariables = {
  onCreateVariableButtonClick: null,
  variableCategory: null,
  variableCategoryBlocks: null,
  dutCategoryBlocks: null,
  newVariableBlock: null,

  generateBlocks2Category: null
};

/**
 * Handle the clicking events
 * @type {{REGISTER: Blockly.VariablesDynamic.CreateVariables.onCreateVariableButtonClick.REGISTER,
 *  WIRE: Blockly.VariablesDynamic.CreateVariables.onCreateVariableButtonClick.WIRE,
 *  PARAMETER: Blockly.VariablesDynamic.CreateVariables.onCreateVariableButtonClick.PARAMETER,
 *  INTEGER: Blockly.VariablesDynamic.CreateVariables.onCreateVariableButtonClick.INTEGER}}
 */
Blockly.VariablesDynamic.CreateVariables.onCreateVariableButtonClick = {
  REGISTER: function (button) {
    const workspace = button.getTargetWorkspace();
    const this_ = Blockly.VariablesDynamic.CreateVariables;
    Blockly.Variables.createMoreVariablesButtonHandler(workspace,
      text => this_.newVariableBlock(text, workspace, REGISTER), REGISTER);
  },
  WIRE: function (button) {
    const workspace = button.getTargetWorkspace();
    const this_ = Blockly.VariablesDynamic.CreateVariables;
    Blockly.Variables.createMoreVariablesButtonHandler(workspace,
      text => this_.newVariableBlock(text, workspace, WIRE), WIRE);
  },
  PARAMETER: function (button) {
    const workspace = button.getTargetWorkspace();
    const this_ = Blockly.VariablesDynamic.CreateVariables;
    Blockly.Variables.createMoreVariablesButtonHandler(workspace,
      text => this_.newVariableBlock(text, workspace, PARAMETER), PARAMETER);
  },
  LOCALPARAM: function (button) {
    const workspace = button.getTargetWorkspace();
    const this_ = Blockly.VariablesDynamic.CreateVariables;
    Blockly.Variables.createMoreVariablesButtonHandler(workspace,
      text => this_.newVariableBlock(text, workspace, LOCALPARAM), LOCALPARAM);
  },
  INTEGER: function (button) {
    const workspace = button.getTargetWorkspace();
    const this_ = Blockly.VariablesDynamic.CreateVariables;
    Blockly.Variables.createMoreVariablesButtonHandler(workspace,
      text => this_.newVariableBlock(text, workspace, INTEGER), INTEGER);
  }
};

/**
 * Create the Variables category.
 * @param workspace
 * @returns {[]}
 */
Blockly.VariablesDynamic.CreateVariables.variableCategory = function(workspace) {
  let xmlList = [];
  let button = document.createElement('button');
  button.setAttribute('text', 'New register...');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_REGISTER');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', "New wire...");
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_WIRE');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', "New parameter...");
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_PARAMETER');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', "New localparam...");
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_LOCALPARAM');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', "New integer...");
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_INTEGER');
  xmlList.push(button);

  workspace.registerButtonCallback('CREATE_VARIABLE_REGISTER',
    this.onCreateVariableButtonClick.REGISTER);
  workspace.registerButtonCallback('CREATE_VARIABLE_WIRE',
    this.onCreateVariableButtonClick.WIRE);
  workspace.registerButtonCallback('CREATE_VARIABLE_PARAMETER',
    this.onCreateVariableButtonClick.PARAMETER);
  workspace.registerButtonCallback('CREATE_VARIABLE_LOCALPARAM',
    this.onCreateVariableButtonClick.LOCALPARAM);
  workspace.registerButtonCallback('CREATE_VARIABLE_INTEGER',
    this.onCreateVariableButtonClick.INTEGER);


  const blockList = this.variableCategoryBlocks(workspace);
  xmlList = xmlList.concat(blockList);
  const dutList = this.dutCategoryBlocks();
  xmlList  = xmlList.concat(dutList);
  return xmlList;
};

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.VariablesDynamic.CreateVariables.variableCategoryBlocks = function(workspace) {
  const regVariableModelList = workspace.getVariablesOfType(REGISTER);
  const wireVariableModelList = workspace.getVariablesOfType(WIRE);
  const paramVariableModelList = workspace.getVariablesOfType(PARAMETER);
  const localparamVariableModelList = workspace.getVariablesOfType(LOCALPARAM);
  const intVariableModelList = workspace.getVariablesOfType(INTEGER);

  const xmlList = [];

  this.generateBlocks2Category(regVariableModelList, 'variables_get_reg', xmlList);
  this.generateBlocks2Category(wireVariableModelList, 'variables_get_wire', xmlList);
  this.generateBlocks2Category(paramVariableModelList, 'variables_get_parameter', xmlList);
  this.generateBlocks2Category(localparamVariableModelList, 'variables_get_localparam', xmlList);
  this.generateBlocks2Category(intVariableModelList, 'variables_get_integer', xmlList);

  return xmlList;
};

/**
 * Generate the blocks that being dut.
 * @returns {[]}
 */
Blockly.VariablesDynamic.CreateVariables.dutCategoryBlocks = function () {
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

/**
 * Display the new variable block in workspace.
 * @param text
 * @param workspace
 * @param variableType
 */
Blockly.VariablesDynamic.CreateVariables.newVariableBlock = function(text, workspace, variableType) {
  const type = typeof text;
  const blocks = [];
  let index = 0;

  const generateBlock = text => {
    const variable = workspace.getVariable(text, variableType);
    const id = variable.id_;
    let field = `<field name="VAR" id="${id}" variabletype="${variableType}">${text}</field>`;
    let blockType = '';
    switch (variableType) {
      case REGISTER:
        blockType = 'reg_new';
        field += `
        <value name="bits_range"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
        <value name="numbers"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
      `;
        break;
      case WIRE:
        blockType = 'wire_new';
        field += `<value name="bits_range"><shadow type="math_number"><field name="NUM">1</field></shadow></value>`;
        break;
      case PARAMETER: blockType = 'parameter_new'; break;
      case LOCALPARAM: blockType = 'localparam_new'; break;
      case INTEGER: blockType = 'integer_new'; break;

      case TASK: blockType = 'task_content'; break;
      case INPUT: blockType = 'input_new';
      case OUTPUT:
        (blockType === '') && (blockType = 'output_new');
        field += `<value name="bits_range"><shadow type="math_number"><field name="NUM">1</field></shadow></value>`
        break;
    }
    const block = `
      <block type="${blockType}" x="38" y="${500 + index}">
        ${field}
      </block>
    `;
    blocks.push(block);
  }

  if (type === 'string') {
    generateBlock(text);
  } else if (text){
    text.forEach(e => {
      generateBlock(e);
      index += 25;
    });
  }

  const xml = `
    <xml>
      ${blocks.join('\n')}
    </xml>
  `;
  const dom = Blockly.Xml.textToDom(xml);
  Blockly.Xml.domToWorkspace(dom, workspace);
};

Blockly.VariablesDynamic.CreateVariables.generateBlocks2Category = function (variableModelList, blockType, xmlList) {
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
