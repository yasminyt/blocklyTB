import { TASK, INPUT, OUTPUT } from "../../js/typeKeys.js";

Blockly.VariablesDynamic.CreateTask = {
   /**
   * Handle clicking events
   * @param button
   */
  onCreateTaskButtonClick: function(button) {
    // Note: because this is a listen function, "this" !== Blockly.VariablesDynamic.CreateTask
    const workspace = button.getTargetWorkspace();
    const this_ = Blockly.VariablesDynamic.CreateTask;
    Blockly.Variables.createVariableButtonHandler(workspace,
        text => this_.newBlock2Workspace(text, workspace, TASK), TASK);
  },
  onCreateInputButtonClick: function(button) {
    const workspace = button.getTargetWorkspace();
    const this_ = Blockly.VariablesDynamic.CreateTask;
    Blockly.Variables.createMoreVariablesButtonHandler(workspace,
      text => this_.newBlock2Workspace(text, workspace, INPUT), INPUT);
  },
  onCreateOutputButtonClick: function(button) {
    const workspace = button.getTargetWorkspace();
    const this_ = Blockly.VariablesDynamic.CreateTask;
    Blockly.Variables.createMoreVariablesButtonHandler(workspace,
      text => this_.newBlock2Workspace(text, workspace, OUTPUT), OUTPUT);
  },
  /**
   * Create the task category.
   * @param workspace
   * @returns {[]}
   */
  taskCategory: function (workspace) {
    let xmlList = [];
    let button = document.createElement('button');
    button.setAttribute('text', 'Create task...');
    button.setAttribute('callbackKey', 'CREATE_TASK');
    xmlList.push(button);
    button = document.createElement('button');
    button.setAttribute('text', 'New input...');
    button.setAttribute('callbackKey', 'CREATE_INPUT');
    xmlList.push(button);
    button = document.createElement('button');
    button.setAttribute('text', 'New output...');
    button.setAttribute('callbackKey', 'CREATE_OUTPUT');
    xmlList.push(button);

    workspace.registerButtonCallback('CREATE_TASK',
      this.onCreateTaskButtonClick);
    workspace.registerButtonCallback('CREATE_INPUT',
      this.onCreateInputButtonClick);
    workspace.registerButtonCallback('CREATE_OUTPUT',
      this.onCreateOutputButtonClick);

    const taskList = this.taskCategoryBlocks(workspace);
    xmlList = xmlList.concat(taskList);
    return xmlList;
  },
  /**
   * Generate the blocks for task category
   * @param workspace
   * @returns {[]}
   */
  taskCategoryBlocks: function (workspace) {
    const taskVariableModelList = workspace.getVariablesOfType(TASK);
    const inputVariableModelList = workspace.getVariablesOfType(INPUT);
    const outputVariableModelList = workspace.getVariablesOfType(OUTPUT);

    const generateBlocks = Blockly.VariablesDynamic.CreateVariables.generateBlocks2Category;

    const xmlList = [];
    generateBlocks(taskVariableModelList, 'task_call', xmlList);
    generateBlocks(inputVariableModelList, 'variables_get_input', xmlList);
    generateBlocks(outputVariableModelList, 'variables_get_output', xmlList);
    return xmlList;
  },
  /**
   * Display the task/input block in workspace
   * @param text
   * @param workspace
   * @param type
   */
  newBlock2Workspace: function(text, workspace, type) {
    Blockly.VariablesDynamic.CreateVariables.newVariableBlock(text, workspace, type);
  }
};
