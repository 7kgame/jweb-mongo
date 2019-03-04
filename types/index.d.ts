import { Collection, Db, MongoClient, MongoClientOptions } from 'mongodb';

export default interface MysqlDao {
  connect (): Promise<MongoClient>;
  getClient (): MongoClient;
  disconnect (): Promise<void>;
}
