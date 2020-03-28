
const fetch = require('node-fetch');

module.exports.fetchData = async () => {
  const fetchRes = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil');
  if (fetchRes.status == 200) {
    const result = await fetchRes.json();
    return result.data;
  } else {
    throw new Error('fetch status <> 200');
  }
};