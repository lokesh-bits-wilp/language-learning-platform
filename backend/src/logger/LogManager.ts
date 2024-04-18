import {createLogger, format, Logger, transports} from "winston"

import fs from "fs"
const { combine, timestamp, printf } = format;

export class LogManager {
    private readonly logger: Logger
    constructor(private logDir: string, private datePattern: string, private env: string) {
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir)
        }
        this.logger = createLogger({
            format: combine(
                timestamp(),
                printf((info) => {
                    return `${info.level.toUpperCase()} | ${info.message}`;
                }),
            ),
            transports: [
                new (transports.Console)({
                    level: "info"
                }),
                new (require("winston-daily-rotate-file"))({
                    filename: `${this.logDir}/logs`,
                    timestamp: this.tsFormat(),
                    datePattern: this.datePattern,
                    prepend: true,
                    level: this.env === "development" ? "verbose" : "info",
                    maxFiles: "30d",
                    zippedArchive: true
                })
            ]
        })
    }

    tsFormat(): string {
        return (new Date()).toLocaleDateString()
    }

    getLogger(): Logger {
        return this.logger
    }
}