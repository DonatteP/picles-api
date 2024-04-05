import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose"
import { HydrateOptions, HydratedDocument } from "mongoose"
import { version } from "os"

export type ShelterDocument = HydratedDocument<Shelter>

@Schema({ versionKey: false})
export class Shelter {
    @Prop({required: true})
    name: string
    @Prop({required: true})
    whatsapp: string
    @Prop({required: true})
    email: string
    @Prop({required: true})
    phone: string
    @Prop({required: true})
    createdAt: Date
    @Prop({required: true})
    updatedAt: Date
}

export const ShelterSchema = SchemaFactory.createForClass(Shelter)