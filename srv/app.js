const FastBootAppServer = require('fastboot-app-server');

const distPath = 'dist';

const options = {
  distPath,
  gzip: true, // Optional - Enables gzip compression.
  host: '0.0.0.0', // Optional - Sets the host the server listens on.
};

const server = new FastBootAppServer({ ...options });

server.start();
