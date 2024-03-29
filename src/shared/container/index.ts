import { container } from  'tsyringe';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';

// Interfaces: ICatetoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", CategoriesRepository  
);

// Interfaces: ISpecificationsRepository
container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository", SpecificationsRepository  
);

container.registerSingleton<IUsersRepository>(
   "UsersRepository", UsersRepository
);