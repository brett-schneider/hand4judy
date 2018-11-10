// secrets.js
const secrets = {
  // dbUri: process.env.DB_URI
  dbUri: "mongodb://handdit:" + encodeURIComponent("=prA+9?S3A3wRXb^") + "@localhost:27017/handdit",
  session: "8f4a30fa-3d40-4300-8951-e6a2e317eccc",
};

export const getSecret = key => secrets[key];


