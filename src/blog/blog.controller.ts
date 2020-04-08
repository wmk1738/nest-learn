import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './blog.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Blog')
@Controller('blog')
export class BlogController {
    constructor(private readonly bs: BlogService) { }

    @Get()
    @ApiOperation({description:'查询所有'})
    async index() {
        const data = await this.bs.getAll();
        return {
            data,
            success: true
        }
    }
    
    @Get(':id')
    @ApiOperation({description:'查询一个'})
    async get(@Param('id') id: string) {
        const data = await this.bs.getById(id)
        return {
            data,
            success: true
        }
    }

    @Post()
    @ApiOperation({description:'创建'})
    async create(@Body() createBlogDto: CreateBlogDto) {
        await this.bs.create(createBlogDto);
        return { success: true }
    }

    @Delete(':id')
    @ApiOperation({description:'删除'})
    async delete(@Param('id') id: string) {
        await this.bs.delete(id);
        return { success: true }
    }

    @Put(':id')
    @ApiOperation({description:'修改'})
    async update(@Param('id') id: string, @Body() body: CreateBlogDto) {
        await this.bs.update(id, body);
        return { success: true }
    }

}
