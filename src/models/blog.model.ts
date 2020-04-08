import { prop } from "@typegoose/typegoose"

export class BlogModel {
    @prop()
    title: string;

    @prop()
    content: string;

    @prop()
    img: string;

    @prop()
    user: string;
}