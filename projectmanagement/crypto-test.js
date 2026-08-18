import crypto from "crypto";

const generateHash = (message) => {
  //   const hash = crypto.createHash("sha256").update(message).digest("hex");
  const hash = crypto.randomBytes(10).toString("hex");
  console.log(hash);
  console.log("length -> ", hash.length);
};

generateHash("ashutosh");

/*
256 bits data generated 
hex uses 
0123456789abcdef = 16 bits = 2 Bytes  = 2 Hexadecimal characters

256 bits = ? Bytes
256 bits / 8 bits = 32 Bytes
32 Bytes in Hexadecimal characters = 32 * 2 = 64 Hexadecimal characters
*/
