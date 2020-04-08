import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogModel } from 'src/models/blog.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
    imports: [TypegooseModule.forFeature([BlogModel])],
    controllers: [BlogController],
    providers: [BlogService]
})
export class BlogModule { }
