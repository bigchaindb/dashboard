import * as driver from 'bigchaindb-driver';

const API_PATH = 'http://localhost:9984/api/v1/'
const conn = new driver.Connection(API_PATH)
const alice = new driver.Ed25519Keypair()
const bob = new driver.Ed25519Keypair()
const MIN = 1;
const MAX = 10;

function createTx(){
    const tx = driver.Transaction.makeCreateTransaction(
        { city: 'Berlin, DE', temperature: 22, datetime: new Date().toString() },
        { what: 'My first BigchainDB transaction' },
        [ driver.Transaction.makeOutput(
                driver.Transaction.makeEd25519Condition(alice.publicKey))
        ],
        alice.publicKey
    )
    const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
    conn.postTransactionAsync(txSigned).then(tx => console.log(tx.id));
}

function transferTx(){
    const tx = driver.Transaction.makeCreateTransaction(
        { city: 'Berlin, DE', temperature: 22, datetime: new Date().toString() },
        { what: 'My first BigchainDB transaction' },
        [ driver.Transaction.makeOutput(
                driver.Transaction.makeEd25519Condition(alice.publicKey))
        ],
        alice.publicKey
    )
    const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
    conn.postTransactionCommit(txSigned).then(tx => {
        const txTransferBob = driver.Transaction.makeTransferTransaction(
            [{ tx: tx, output_index: 0 }],
            [driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(bob.publicKey))],
            {message: 'Transfered to Bob'}
            )
            let txTransferBobSigned = driver.Transaction.signTransaction(txTransferBob, alice.privateKey)
            conn.postTransactionAsync(txTransferBobSigned).then(tx => console.log(tx.id));
    })
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runTest(){
const runs = getRandomInt(MIN, MAX);
for(let i=1;i< runs; i++){
    if(i%2 == 0) transferTx()
    else createTx();
}
}

runTest();