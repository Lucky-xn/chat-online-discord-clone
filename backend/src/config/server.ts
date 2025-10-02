import { dbConnection } from './database';
import { UserModel, IUser } from './models/User';

export async function startApp() {
    try {
        await dbConnection.connect();

        const users: IUser[] = await UserModel.find({}).exec();

        if (users.length === 0) {
            console.log("Nenhum utilizador encontrado.");
        } else {
            console.log("Utilizadores encontrados:", users);
        }

        const newUser = new UserModel({ username: 'ana', email: 'ana@example.com' });
        await newUser.save();
        console.log("Novo utilizador 'ana' criado!");

    } catch (error) {
        console.error("❌ Falha ao iniciar a aplicação:", error);
        process.exit(1);
    }
}