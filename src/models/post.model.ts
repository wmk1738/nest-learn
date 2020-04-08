import { prop } from '@typegoose/typegoose';

export class PostModel {
    @prop()
    title: string;

    @prop()
    content: string;
}