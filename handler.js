'use strict';

const AWS = require('aws-sdk');
const fetch = require('node-fetch');

module.exports.main = async event => {
  try {
    const deads = await fetchNumberDeads();
    let msgEmail = `Brazil deads count ${deads}`;
    await sendEmail('contato@marcelomichels.com', 'contato@marcelomichels.com', msgEmail, msgEmail);
  } catch (error) {
    console.error(error)
  }
  return true;
};

const fetchNumberDeads = async () => {
  const fetchRes = await fetch('https://www.worldometers.info/coronavirus/country/brazil/');
  if (fetchRes.status == 200) {
    const htmlPage = await fetchRes.text();
    const secondMaincounterNumber = htmlPage.indexOf('maincounter-number', htmlPage.indexOf('maincounter-number') + 1);
    const spanStart = htmlPage.indexOf('<span>', secondMaincounterNumber);
    const spanEnd = htmlPage.indexOf('</span>', secondMaincounterNumber);
    return htmlPage.substring(spanStart + 6, spanEnd);
  } else {
    throw new Error('fetch status <> 200');
  }
}

const sendEmail = async (from, to, subject, textMsg) => {
  var params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: {
        Text: { Charset: "UTF-8", Data: textMsg }
      },
      Subject: { Charset: "UTF-8", Data: subject }
    },
    Source: from,
  };
  let ses = new AWS.SES();
  return await ses.sendEmail(params).promise();
}