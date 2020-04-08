import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDTO } from './post.dto';
import { PostsService } from './posts.service';


@Controller('posts')
@ApiTags('博客')
export class PostsController {

    constructor(private readonly postService: PostsService) { }

    @Get()
    @ApiOperation({ description: '查询博客列表' })
    async findPosts() {
        return this.postService.getall();
    }

    @Post('create')
    @ApiOperation({
        description: '创建博客',
    })
    async create(@Body() body: CreatePostDTO) {
        const data = await this.postService.create(body);
        return {
            success: true,
            body,
            data,
        };
    }

    @Get(':id')
    @ApiOperation({ description: '查询某个博客' })
    async detail(@Param('id') id: string) {
        const data = await this.postService.getById(id)
        return {
            success: true,
            ...data,
        }
    }

    @Put(':id')
    @ApiOperation({ description: '更新帖子' })
    async update(@Param('id') id: string, @Body() body: CreatePostDTO) {
        await this.postService.update(id, body)
        return {
            success: true,
        }
    }

    @Delete(':id')
    @ApiOperation({ description: '删除帖子' })
    async remove(@Param('id') id: string) {
        await this.postService.delete(id);
        return {
            success: true,
        }
    }
}
