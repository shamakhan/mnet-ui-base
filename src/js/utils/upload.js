export const modifiedValInRule = (checked, rule) => {
  if (checked) {
    const ruleKeys = rule && Object.keys(rule);
    return (
      ruleKeys.length &&
      ruleKeys.some(key => {
        return rule[key] && rule[key].isModified;
      })
    );
  }
  return true;
};

export const isAnyFailInRule = rule => {
  const ruleKeys = rule && Object.keys(rule);
  const isAnyData =
    ruleKeys.length &&
    ruleKeys.some(key => {
      return (
        rule[key] &&
        rule[key].isModified &&
        rule[key].result &&
        rule[key].result.status === 'FAIL'
      );
    });
  return isAnyData;
};

export const failMessageInRule = rule => {
  const ruleKeys = rule && Object.keys(rule);
  const failState = {
    status: false,
    message: '',
  };
  // eslint-disable-next-line no-unused-expressions
  ruleKeys.length &&
    ruleKeys.forEach(key => {
      if (
        rule[key] &&
        rule[key].isModified &&
        rule[key].result &&
        rule[key].result.status === 'FAIL'
      ) {
        failState.status = true;
        failState.message =
          rule[key].result.messages.length && rule[key].result.messages[0];
        return failState;
      }
    });

  return failState;
};
