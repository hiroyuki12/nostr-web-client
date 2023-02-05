export const convertASCIItoHex = (asciiString: string) => {
  let hex = "";
  let tempASCII, tempHex;
  asciiString.split("").map((i) => {
    tempASCII = i.charCodeAt(0);
    tempHex = tempASCII.toString(16);
    hex = hex + tempHex;
  });
  hex = hex.trim();
  return hex;
  console.log(hex);
};
