import PetResponse from "src/pet/dtos/pet.response";
import GetPetsUseCaseInput from "./get.pets.usecase.input";


export default class GetPetsUseCaseOutput {
    currentPage: number;
    totalPages: number;
    items: PetResponse[];

    constructor(data: Partial<GetPetsUseCaseOutput>){
        Object.assign(this, data)
    }
}