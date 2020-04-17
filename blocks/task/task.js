import { TASK, INPUT, OUTPUT } from '../../js/typeKeys.js';

/**
 * For task
 */
Blockly.defineBlocksWithJsonArray([
  // 调用 task
  {
    "type": "task_call",
    "message0": "",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "Call a task with its variables",
    "helpUrl": "",
    "mutator": "task_call_mutator"
  },
  { // 构造输入参数的配置框
    "type": "task_call_create_container",
    "message0": "input %1 %2",
    "args0": [{
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "STACK"
    }],
    "colour": 180,
    "tooltip": "Add, remove or reorder sections to configure this task block",
    "enableContextMenu": false
  },
  { // 添加需要的参数个数
    "type": "task_call_create_item",
    "message0": "item",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "Add an item to the input",
    "enableContextMenu": false
  },

  // 创建 task 的内容
  {
    "type": "task_content",
    "message0": "define task %1 %2 do %3",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "",
        "variableTypes": [TASK],
        "defaultType": TASK
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "CONTENT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  }
]);

/**
 * For input
 */
Blockly.defineBlocksWithJsonArray([
  // input getter
  {
    "type": "variables_get_input",
    "message0": "input %1",
    "args0": [{
      "type": "field_variable",
      "name": "VAR",
      "variable": "",
      "variableTypes": [INPUT],
      "defaultType": INPUT
    }],
    "output": null,
    "colour": 185,
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "Select a input variable",
  },
  // define input
  {
    "type": "input_new",
    "message0": "new input %1 with bits %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "",
        "variableTypes": [INPUT],
        "defaultType": INPUT
      },
      {
        "type": "input_value",
        "name": "bits_range"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 185,
    "tooltip": "Declare a new variable of input type being used by task.",
    "helpUrl": ""
  },
]);

/**
 * For output
 */
Blockly.defineBlocksWithJsonArray([
  // output getter
  {
    "type": "variables_get_output",
    "message0": "output %1",
    "args0": [{
      "type": "field_variable",
      "name": "VAR",
      "variable": "",
      "variableTypes": [OUTPUT],
      "defaultType": OUTPUT
    }],
    "output": null,
    "colour": 185,
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "Select a output variable",
  },
  // define output
  {
    "type": "output_new",
    "message0": "new output %1 with bits %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "",
        "variableTypes": [OUTPUT],
        "defaultType": OUTPUT
      },
      {
        "type": "input_value",
        "name": "bits_range"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 185,
    "tooltip": "Declare a new variable of output type being used by task.",
    "helpUrl": ""
  },
]);

/**
 * Declare task on Blockly.Constants
 * @type {{}}
 */
Blockly.Constants.Task = {
  "TASK_CALL_MUTATOR_MIXIN": null,
  "TASK_CALL_EXTENSION": null
};

/**
 * Mixin for mutator functions in the 'task_call_mutator' extension.
 * @mixin
 * @augments Blockly.Block
 * @package
 */
Blockly.Constants.Task.TASK_CALL_MUTATOR_MIXIN = {
  /**
   * Create XML to represent number of variable inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function () {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the variable inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function (workspace) {
    const containerBlock  = workspace.newBlock('task_call_create_container');
    containerBlock.initSvg();
    let connection = containerBlock.getInput('STACK').connection;
    for (let i = 0; i < this.itemCount_; i++) {
      const itemBlock = workspace.newBlock('task_call_create_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function (containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    const connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (let i = 0; i < this.itemCount_; i++) {
      const connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) === -1)
        connection.disconnect();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++)
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function (containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock('STACK');
    let i = 0;
    while (itemBlock) {
      const input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock  = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function () {
    const EMPTY = 'EMPTY';
    const ADD = 'ADD';

    // Get task type variables, and set a default one to new FieldVariable.
    const variableModelList = this.workspace.variableMap_.getVariablesOfType(TASK);
    variableModelList.sort(Blockly.VariableModel.compareByName);
    const variable = variableModelList[0];
    const varName = variable.name;

    if (this.itemCount_ && this.getInput(EMPTY)) {
      this.removeInput(EMPTY);
    } else if (!this.itemCount_ && !this.getInput(EMPTY)) {
      this.appendDummyInput(EMPTY)
        .appendField("task")
        .appendField(new Blockly.FieldVariable(varName, null, [TASK], TASK), "VAR");
    }
    // Add new inputs
    let i = 0;
    for (; i < this.itemCount_; i++) {
      if (!this.getInput(ADD + i)) {
        Blockly.Events.disable();
        const input = this.appendValueInput('ADD' + i);
        if (i === 0) {
          input.appendField("task")
            .appendField(new Blockly.FieldVariable(varName, null, [TASK], TASK), "VAR")
            .appendField('with');
        }
        Blockly.Events.enable();
      }
    }
    // Remove deleted inputs.
    while (this.getInput(ADD + i)) {
      this.removeInput(ADD + i);
      i++;
    }
  }
};

/**
 * Performs final setup of a task_call block.
 * @this {Blockly.Block}
 */
Blockly.Constants.Task.TASK_CALL_EXTENSION = function () {
  // Add the quote mixin for the itemCount_ = 0 case.
  // this.mixin()
  // Initialize the mutator values, default 1 item.
  this.itemCount_ = 1;
  this.updateShape_();
  // Configure the mutator UI.
  this.setMutator(new Blockly.Mutator(['task_call_create_item']));
};

Blockly.Extensions.registerMutator('task_call_mutator',
  Blockly.Constants.Task.TASK_CALL_MUTATOR_MIXIN,
  Blockly.Constants.Task.TASK_CALL_EXTENSION);
