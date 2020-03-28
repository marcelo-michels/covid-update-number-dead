
const { fetchData } = require('./fetch-data');
const { textExtract } = require('./text-extract');
const { sendEmail } = require('./send-email');

const FROM = 'admin@marcelomichels.com';
const TO = 'contato@marcelomichels.com';
const SUBJECT = 'Covid-19';

module.exports.index = async () => {
  try {
    const data = await fetchData();
    await sendEmail(FROM, TO, SUBJECT, textExtract(data));
    return true;
  } catch (error) {
    return false;
  }
};


this.index();