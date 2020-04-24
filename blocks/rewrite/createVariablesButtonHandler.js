Blockly.Variables.createMoreVariablesButtonHandler = function(
  workspace, opt_callback, opt_type) {
  const type = opt_type || '';
  const NEW_VARIABLE_TITLE = "New variable name: \n" +
    "(If creating multiple variables, separate them with commas. \nE.g. a, b, c)";
  // This function needs to be named so it can be called recursively.
  const promptAndCheckWithAlert = function (defaultName) {
    Blockly.Variables.promptName(NEW_VARIABLE_TITLE, defaultName,
      function (text) {
        if (text) {
          const variables = text.replace(/(,\s*)$/, '').split(/,\s*/);
          const len = variables.length;
          // single variable
          if (len === 1) {
            const variable = variables[0];
            const existing =
              Blockly.Variables.nameUsedWithAnyType_(variable, workspace);
            let msg;
            if (existing) {
              if (existing.type === type) {
                msg = Blockly.Msg['VARIABLE_ALREADY_EXISTS'].replace(
                  '%1', existing.name);
              } else {
                msg = Blockly.Msg['VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE'];
                msg = msg.replace('%1', existing.name).replace('%2', existing.type);
              }
              Blockly.alert(msg,
                function () {
                  promptAndCheckWithAlert(variable);  // Recurse
                });
            } else {
              // No conflict
              workspace.createVariable(variable, type);
              if (opt_callback) {
                opt_callback(variable);
              }
            }
          } else {    // multiple variables
            const existName = [];
            const existType = {};
            const newVariables = [];
            variables.forEach(variable => {
              const existing =
                Blockly.Variables.nameUsedWithAnyType_(variable, workspace);
              if (existing) {
                if (existing.type === type) {
                  existName.push(existing.name);
                } else {
                  const type = existing.type;
                  if (existType.hasOwnProperty(type))
                    existType[type].push(existing.name);
                  else
                    existType[type] = [existing.name];
                }
              } else {
                // No conflict
                workspace.createVariable(variable, type);
                newVariables.push(variable);
              }
            });
            const msg = [];
            if (existName.length) {
              msg.push(`These variables named '${existName.join(', ')}' already exist.`);
            }
            if (Object.keys(existType).length) {
              for (let type in existType)
                if (existType.hasOwnProperty(type))
                  msg.push(`These variables named '${existType[type].join(', ')}' already exists for another type: '${type}'.`)
            }
            if (msg.length)
              alert(msg.join('\n') + '\nPlease try again.');
            if (opt_callback) {
              opt_callback(newVariables);
            }
          }
        } else {
          // User canceled prompt.
          if (opt_callback) {
            opt_callback(null);
          }
        }
      });
  };
  promptAndCheckWithAlert('');
};
