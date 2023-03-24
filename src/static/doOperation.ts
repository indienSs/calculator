export const doOperation = (
  firstArg: string,
  secondArg: string,
  operation: string
): string => {
  let result: string = "";
  switch (operation) {
    case "+": {
      const res: number = Number(firstArg) + Number(secondArg);
      result = String(res);
      break;
    }
    case "-": {
      const res: number = Number(secondArg) - Number(firstArg);
      result = String(res);
      break;
    }
    case "/": {
      const res: number = Number(secondArg) / Number(firstArg);
      result = String(res);
      break;
    }
    case "x": {
      const res: number = Number(firstArg) * Number(secondArg);
      result = String(res);
      break;
    }
  }
  return result;
};
