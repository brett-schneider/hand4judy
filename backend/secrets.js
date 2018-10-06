// secrets.js
const secrets = {
  // dbUri: process.env.DB_URI
  dbUri: "mongodb://handdit:=prA+9?S3A3wRXb^@localhost:27017/handdit"
};

export const getSecret = key => secrets[key];


