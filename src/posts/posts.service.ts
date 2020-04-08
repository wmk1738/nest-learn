import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from './post.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {

    constructor(@InjectModel('PostModel') private readonly postModel: Model<any>) { }

    async create(body: CreatePostDTO) {
        const data = await this.postModel.create(body);
        return data;
    }

    async getall() {
        return this.postModel.find();
    }

    async getById(id: string) {
        const data = await this.postModel.findById(id);
        return data;
    }

    async update(id: string, updatePostDto: CreatePostDTO) {
        return await this.postModel.findByIdAndUpdate(id, updatePostDto);
    }

    async delete(id: string) {
        return await this.postModel.findByIdAndDelete(id);
    }
}
