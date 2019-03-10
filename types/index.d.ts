import { Collection, Db, MongoClient, MongoClientOptions } from 'mongodb';

export interface DBAndCol {
  db: Db;
  col: Collection;
}

export default interface MongoDao {
  connect (): Promise<MongoClient>;
  getClient (): MongoClient;
  disconnect (): Promise<void>;

  getCollection (dbName: string, colName: string): DBAndCol;
}
