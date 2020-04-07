import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDTO } from './post.dto';

@Controller('posts')
@ApiTags('博客')
export class PostsController {

    @Get()
    @ApiOperation({ description: '查询博客列表' })
    index() {
        return []
    }

    @Post('create')
    create(@Body() body: CreatePostDTO) {
        return 'success'
    }

    @Get(':id')
    detail() {
        return {
            data: ''
        }
    }
}
