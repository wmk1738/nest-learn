import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostModel } from 'src/models/post.model';
import { TypegooseModule } from 'nestjs-typegoose'

@Module({
    imports: [TypegooseModule.forFeature([PostModel])],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostsModule { }
