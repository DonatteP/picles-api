import { InjectModel } from "@nestjs/mongoose";
import { Shelter } from "./schemas/shelter.schema";
import { Model } from "mongoose";
import IShelterRepository from "./interfaces/shelter.repository.interfaces";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ShelterRepository implements IShelterRepository {
    constructor(
        @InjectModel(Shelter.name)
        private shelterModel: Model<Shelter>,
    ){}

    async get(): Promise<Shelter>{
        return await this.shelterModel.findOne()
    }


    async update(data: Partial<Shelter>): Promise<void> {
        await this. shelterModel.updateOne(null, {
            ...data,
            updatedAt: new Date()
        })
    }

}