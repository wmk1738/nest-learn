import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { BlogModule } from './blog/blog.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModule } from './user/user.module';

@Module({
    imports: [TypegooseModule.forRoot('mongodb://localhost/myblog'), PostsModule, BlogModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
