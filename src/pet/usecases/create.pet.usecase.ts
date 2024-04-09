import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>{
    run(input: CreatePetUseCaseInput):Promise<CreatePetUseCaseOutput>{
        throw new Error("Method not implemented")
    }
}