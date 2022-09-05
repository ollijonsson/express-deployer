const TestContract = artifacts.require('TestContract');

const migration: Truffle.Migration = async (
  deployer,
  network,
  accounts
) => {
  await deployer.deploy(TestContract);
}

module.exports = migration;

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export { }