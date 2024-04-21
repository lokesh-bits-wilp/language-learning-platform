import { DataSource } from "typeorm";
import logger from "../logger";
import dataSource from "./config/OrmConfig";

class DBConnector {
  private activeDataSource: DataSource;

  async getCurrentDataSource() {
    try {
      if (this.activeDataSource && this.activeDataSource.isInitialized) {
        logger.info("Using Existing DB connection");

        return this.activeDataSource;
      }
      logger.info("Using New DB connection");

      this.activeDataSource = await this.dbCreateConnection();
      return this.activeDataSource;
    } catch (error) {
            logger.error(error);
      throw new Error("Invalid DB configuration");
    }
  }

  private async dbCreateConnection() {
    try {
      // load entities, establish db connection, sync schema, etc.
      const conn = await dataSource.initialize();
      logger.info(
        `Database connection success. Database: '${conn.options.database}'`
      );
      return conn;
    } catch (err) {
            if (err.name === "CannotConnectAlreadyConnectedError") {
        return this.activeDataSource;
      }
      logger.error(err);
            throw new Error("Invalid DB configuration");
    }
    // return null;
  }
}

const dbConnector: DBConnector = new DBConnector();
export default dbConnector;
