import mongoose, { Mongoose } from "mongoose";

type Connection = Mongoose;

class MongoDbConnection {
    private static instance: MongoDbConnection;
    private connection: Connection | null = null;

    private constructor() {}

    public static getInstance(): MongoDbConnection {
        if (!MongoDbConnection.instance) {
            MongoDbConnection.instance = new MongoDbConnection();
        }
        return MongoDbConnection.instance;
    }

    public async connect(): Promise<Connection> {
        if (this.connection) {
            console.log("Reutilizando conexão com o MongoDB existente.");
            return this.connection;
        }

        try {
            const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/discord_clone";
            
            console.log("Estabelecendo nova conexão com o MongoDB...");
            this.connection = await mongoose.connect(mongoURI);
            
            console.log("✅ MongoDB conectado com sucesso!");
            return this.connection;
        } catch (err) {
            console.error("❌ Erro ao conectar no MongoDB:", err);
            throw err;
        }
    }
}

export const dbConnection = MongoDbConnection.getInstance();