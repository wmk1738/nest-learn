import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './blog.dto';


@Injectable()
export class BlogService {

    constructor(@InjectModel('BlogModel') private readonly blogModel: Model<any>) { }

    //查询所有的blog
    getAll() {
        return this.blogModel.find();
    }

    getById(id: string) {
        return this.blogModel.findById(id);
    }

    create(body: CreateBlogDto) {
        return this.blogModel.create(body);
    }

    delete(id: string) {
        return this.blogModel.findByIdAndDelete(id);
    }

    update(id: string, body: CreateBlogDto) {
        return this.blogModel.findByIdAndUpdate(id, body);
    }

}
