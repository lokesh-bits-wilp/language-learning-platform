import "dotenv/config";
import "reflect-metadata";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import routes from "./routes";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import config from "./config";
import logger from "./logger";
import dbConnector from "./orm/DbCreateConnection";

export const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Language learning API Service",
            version: "1.0.0",
            description: "API documentation using Swagger",
        },
        servers: [
            {
                url: "/",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: [path.join(__dirname, "./controller/*.{ts,js}")], // Specify the path of TypeScript file(s) with API annotations
};

// Initialize Swagger-js-docs
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
if (config.SWAGGER_DOCS_ENABLED) app.use(`${config.BASE_URL}/api-docs/`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(morgan("combined"));

app.use("/public", express.static(path.join(__dirname, 'public')));

app.use("/", routes);

app.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
});

(async () => {
    try {
        await dbConnector.getCurrentDataSource();
    } catch (error) {
        process.exit(1);
    }
})();
