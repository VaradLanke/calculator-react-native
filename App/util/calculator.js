const handleNumber = (value, stateObject) => {
  stateObject.setCurrentValue(`${stateObject.currentValue}${value}`);
};

const handleOperator = (value, stateObject) => {
  stateObject.setOperator(value);
  stateObject.setPrevValue(stateObject.currentValue);
  stateObject.setCurrentValue("0");
};

const handlEqual = (stateObbject) => {
  const current = parseFloat(stateObbject.currentValue);
  const previous = parseFloat(stateObbject.prevValue);
  const resetState = () => {
    stateObbject.setOperator(null);
    stateObbject.setPrevValue(null);
  };
  switch (stateObbject.operator) {
    case "/":
      stateObbject.setCurrentValue(previous / current);
      resetState();
      break;
    case "*":
      stateObbject.setCurrentValue(previous * current);
      resetState();
      break;
    case "-":
      stateObbject.setCurrentValue(previous - current);
      resetState();
      break;
    case "+":
      stateObbject.setCurrentValue(previous + current);
      resetState();
      break;
  }
};

const handleClear = (stateObject) => {
  stateObject.setCurrentValue("0");
  stateObject.setOperator(null);
  stateObject.setPrevValue(null);
};

const handlePosNeg = (stateObject) => {
  stateObject.setCurrentValue(parseFloat(stateObject.currentValue) * -1);
};

const handlePercentage = (stateObject) => {
  stateObject.setCurrentValue(parseFloat(stateObject.currentValue) * 0.01);
};

const calculator = (type, value, stateObject) => {
  switch (type) {
    case "number":
      handleNumber(value, stateObject);
      break;
    case "operator":
      handleOperator(value, stateObject);
      break;
    case "equal":
      handlEqual(stateObject);
      break;
    case "clear":
      handleClear(stateObject);
      break;
    case "posneg":
      handlePosNeg(stateObject);
      break;
    case "percentage":
      handlePercentage(stateObject);
      break;
  }
};

export default calculator;
