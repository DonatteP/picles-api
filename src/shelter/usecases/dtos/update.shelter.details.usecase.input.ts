export default class UpdateShelterDetailsUseCaseInput {
    name: string
    whatsapp: string
    email: string
    phone: string

    constructor(data: Partial<UpdateShelterDetailsUseCaseInput>) {
        Object.assign(this, data);
    }
    
}