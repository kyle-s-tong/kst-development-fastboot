const FastBootAppServer = require('fastboot-app-server');

const distPath = 'dist';

const options = {
  distPath,
};

const server = new FastBootAppServer({ ...options });

server.start();
