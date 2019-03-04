import { Collection, Db, MongoClient, MongoClientOptions } from 'mongodb';

export default interface MongoDao {
  connect (): Promise<MongoClient>;
  getClient (): MongoClient;
  disconnect (): Promise<void>;
}
