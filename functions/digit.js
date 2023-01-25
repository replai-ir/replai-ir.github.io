export function convertDigitToSplitShape(digits) {
  let splitShape = "";
  const digits_str = digits.toString();
  const end_index = digits_str.length - 1;

  console.log("-".repeat(30));
  console.log(digits_str);
  for (let i = end_index; i > -1; i--) {
    splitShape += digits_str[i];
    if (splitShape.length % 3 === 0) splitShape += ",";
  }
  if (splitShape.length % 3 === 0)
    splitShape = splitShape.slice(0, splitShape.length - 1);

  return splitShape;
}
