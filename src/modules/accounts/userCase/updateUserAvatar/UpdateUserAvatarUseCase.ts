import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { deleteFile } from "@utils/file";
import { inject, injectable } from "tsyringe";


interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {

    constructor(
        @inject('UsersRepository')
        private respository: IUsersRepository
    ){    }

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.respository.findById(user_id);

        if(avatar_file){       
            await deleteFile(`./tmp/avatar/${avatar_file}`);
        }

        user.avatar = avatar_file;

        await this.respository.create(user);

    }
}

export { UpdateUserAvatarUseCase }