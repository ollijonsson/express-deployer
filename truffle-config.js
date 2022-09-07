require("ts-node").register({
  files: true,
});

module.exports = {
  networks: {
    // Default
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "pragma",
    },
  },
};
