
const AWS = require('aws-sdk');
const ses = new AWS.SES();

module.exports.sendEmail = async (from, to, subject, textMsg) => {
  const params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: {
        Text: { Charset: "UTF-8", Data: textMsg }
      },
      Subject: { Charset: "UTF-8", Data: subject }
    },
    Source: from,
  };
  return await ses.sendEmail(params).promise();
};