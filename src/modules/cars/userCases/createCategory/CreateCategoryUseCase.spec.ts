import { AppError } from "../../../../errors/AppError"
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let categoriesRepository: CategoriesRepositoryInMemory
let createCategory: CreateCategoryUseCase

describe('Create category', () => {

    beforeAll(() => {
        categoriesRepository = new CategoriesRepositoryInMemory()
        createCategory = new CreateCategoryUseCase(categoriesRepository)
    })

    it('Should be able to create a new category', async () => {
        const category = { name: 'Car', description: 'Car description' }

        await createCategory.execute(category)

        const categoryCreated = await categoriesRepository.findByName('Car')

        expect(categoryCreated).toHaveProperty('id')
    })

    it('Should not be able to create a new category with same name', async () => {

        expect(async () => {
            const category = { name: 'Car', description: 'Car description' }
            await createCategory.execute(category)
        }).rejects.toBeInstanceOf(AppError)

    })
})