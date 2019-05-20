/* eslint no-console: "off" */
const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(process.env.PORT, () => console.log(`Server is listening on ${PORT}`));

