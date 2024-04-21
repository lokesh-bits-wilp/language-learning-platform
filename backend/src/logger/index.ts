import winston from "winston"
import { LogManager } from "./LogManager";
import config from "../config"

const logManager: LogManager = new LogManager("log", "YYYY-MM-DD", config.NODE_ENV)

const logger: winston.Logger = logManager.getLogger()

export default logger