import * as driver from 'bigchaindb-driver';
import bigchaindb from '../configs/bigchaindb.config.json';

const protocol = bigchaindb.secure ? 'https://' : 'http://';

const API_PATH = protocol + bigchaindb.host + bigchaindb.api;
const conn = new driver.Connection(API_PATH);

export const getTransaction = txId => {
  return conn.getTransaction(txId).then(value => {
    return value;
  });
};

export const getBlock = blockHeight => {
  return conn.getBlock(blockHeight);
};
