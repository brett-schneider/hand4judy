// secrets.js
const secrets = {
  // dbUri: process.env.DB_URI
  dbUri: "mongodb://handdit:*password*@localhost:*port*/handdit"
};

export const getSecret = key => secrets[key];


