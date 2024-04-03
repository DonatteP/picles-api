import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: "Abrigo dog",
            shelterEmail: "bigo@gmail.com",
            shelterPhone: "19994110418",
            shelterWhatsApp: "19994110418",
            createdAt: new Date(),
            updatedAt: new Date()
        }))
    }
}