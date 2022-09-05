contract('TestContract', (accounts) => {
    const TestContract = artifacts.require('TestContract');

    it('getNewestPair should return an address', async () => {
        const chainId = await web3.eth.getChainId();
        const pancakeFactoryV2 = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';
        const contract = await TestContract.deployed();
        const result = await contract.getNewestPair(pancakeFactoryV2);
        console.log(`    ✔ getNewestPair returned ${result}`);
    });
})