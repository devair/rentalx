import { container } from  'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

// Interfaces: ICatetoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", CategoriesRepository  
);

// Interfaces: ISpecificationsRepository
container.registerSingleton<ISpecificationRepository>(
  "ISpecificationRepository", SpecificationRepository  
);