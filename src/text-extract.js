
module.exports.textExtract = (data) => (
`Casos Confirmados: ${data.confirmed}
Recuperados: ${data.recovered}
Mortes: ${data.deaths}`
);