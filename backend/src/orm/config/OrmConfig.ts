import { DataSourceOptions, DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import configEnv from '../../config'
import path from 'path';
const config: DataSourceOptions = {
    type: 'postgres',
    name: 'default',
    host: configEnv.POSTGRES_HOST,
    port: Number(configEnv.POSTGRES_PORT),
    username: configEnv.POSTGRES_USER,
    password: configEnv.POSTGRES_PASSWORD,
    database: configEnv.POSTGRES_DB,
    synchronize: false,
    logging: false,
    entities: [path.join(__dirname, '../entities/*.{js,ts}')],
    migrations: [path.join(__dirname, '../migrations/*.{ts,js}')],
    subscribers: [path.join(__dirname, '../subscriber/*.{ts,js}')],
    namingStrategy: new SnakeNamingStrategy(),
};

const dataSource = new DataSource(config)

export default dataSource;
