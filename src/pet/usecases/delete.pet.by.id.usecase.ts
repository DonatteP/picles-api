import { IUseCase } from "src/domain/iusecase.interface";
import DeletePetByIdUseCaseInput from "./dtos/delete.pet.by.id.input";
import DeletePetByIdUseCaseOutput from "./dtos/delete.pet.by.id.output";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetNotFoundError from "src/domain/erros/pet.not.found.error";
import { Pet } from "../schemas/pet.schema";

@Injectable()
export default class DeletePetByIdUseCase implements IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ){}
    
    async run(input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCaseOutput>{
        const pet = await this.getPetById(input.id)

        if(!pet){
            throw new PetNotFoundError()
        }

        await this.petRepository.deleteById(input.id)
        return new DeletePetByIdUseCaseOutput()

    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }

}