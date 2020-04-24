Blockly.Blocks['add_assignment_container'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Add assignment")
      .appendField(new Blockly.FieldCheckbox("false"), "do");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['create_array_container'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Create array")
      .appendField(new Blockly.FieldCheckbox("false"), "do");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['add_variables_container'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Add variables")
      .appendField(new Blockly.FieldCheckbox("false"), "do");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['add_file_container'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Close one file")
      .appendField(new Blockly.FieldCheckbox("false"), "do");
    this.setColour(10);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Constants.CustomMenu = {
  "ADD_ASSIGNMENT": null,
  "CREATE_ARRAY": null,
  "ADD_VARIABLES": null,
  "ADD_FILE": null,
  "EXTENSIONS": null,
  "EXTENSIONS2": null
}

Blockly.Constants.CustomMenu.ADD_ASSIGNMENT = {
  mutationToDom() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('do', this.isAdd_);
    return container;
  },
  domToMutation(xmlElement) {
    this.isAdd_ = xmlElement.getAttribute('do') === 'true';
    this.updateShape_();
  },
  decompose(workspace) {
    const containerBlock = workspace.newBlock('add_assignment_container');
    containerBlock.initSvg();
    containerBlock.setFieldValue(this.isAdd_, 'do');
    return containerBlock;
  },
  compose(containerBlock) {
    this.isAdd_ = containerBlock.getFieldValue('do') === 'TRUE';
    this.updateShape_();
  },
  updateShape_() {
    const valueInput = this.getInput('value');
    if (this.isAdd_ && !valueInput) {
      Blockly.Events.disable();
      this.appendValueInput('value')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('with value');
      this.setInputsInline(true);
      Blockly.Events.enable();
    }
    if (!this.isAdd_ && valueInput)
      this.removeInput('value');
  }
}

Blockly.Constants.CustomMenu.CREATE_ARRAY = {
  mutationToDom() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('do', this.isAdd_);
    return container;
  },
  domToMutation(xmlElement) {
    this.isAdd_ = xmlElement.getAttribute('do') === 'true';
    this.updateShape_();
  },
  decompose(workspace) {
    const containerBlock = workspace.newBlock('create_array_container');
    containerBlock.initSvg();
    containerBlock.setFieldValue(this.isAdd_, 'do');
    return containerBlock;
  },
  compose(containerBlock) {
    this.isAdd_ = containerBlock.getFieldValue('do') === 'TRUE';
    this.updateShape_();
  },
  updateShape_() {
    const valueInput = this.getInput('numbers');
    if (this.isAdd_ && !valueInput) {
      Blockly.Events.disable();
      this.appendValueInput('numbers')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('and numbers');
      Blockly.Events.enable();
    }
    if (!this.isAdd_ && valueInput)
      this.removeInput('numbers');
  }
}

Blockly.Constants.CustomMenu.ADD_VARIABLES = {
  mutationToDom() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('do', this.isAdd_);
    return container;
  },
  domToMutation(xmlElement) {
    this.isAdd_ = xmlElement.getAttribute('do') === 'true';
    this.updateShape_();
  },
  decompose(workspace) {
    const containerBlock = workspace.newBlock('add_variables_container');
    containerBlock.initSvg();
    containerBlock.setFieldValue(this.isAdd_, 'do');
    return containerBlock;
  },
  compose(containerBlock) {
    this.isAdd_ = containerBlock.getFieldValue('do') === 'TRUE';
    this.updateShape_();
  },
  updateShape_() {
    const valueInput = this.getInput('variables');
    if (this.isAdd_ && !valueInput) {
      Blockly.Events.disable();
      this.appendValueInput('variables')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('with variables');
      Blockly.Events.enable();
    }
    if (!this.isAdd_ && valueInput)
      this.removeInput('variables');
  }
}

Blockly.Constants.CustomMenu.ADD_FILE = {
  mutationToDom() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('do', this.isAdd_);
    return container;
  },
  domToMutation(xmlElement) {
    this.isAdd_ = xmlElement.getAttribute('do') === 'true';
    this.updateShape_();
  },
  decompose(workspace) {
    const containerBlock = workspace.newBlock('add_file_container');
    containerBlock.initSvg();
    containerBlock.setFieldValue(this.isAdd_, 'do');
    return containerBlock;
  },
  compose(containerBlock) {
    this.isAdd_ = containerBlock.getFieldValue('do') === 'TRUE';
    this.updateShape_();
  },
  updateShape_() {
    if (this.isAdd_ && this.getInput('all')) {
      this.removeInput('all');
      this.appendValueInput('fileName')
        .appendField('Close one file');
    }
    if (!this.isAdd_ && this.getInput('fileName')){
      this.removeInput('fileName');
      this.appendDummyInput('all')
        .appendField('Close all files');
    }
  }
}

Blockly.Constants.CustomMenu.EXTENSIONS = function() {
  this.isAdd_ = false;
}

Blockly.Constants.CustomMenu.EXTENSIONS2 = function() {
  this.isAdd_ = false;
  this.appendDummyInput('all')
    .appendField('Close all files');
}
