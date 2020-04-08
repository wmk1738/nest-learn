import { ApiProperty } from "@nestjs/swagger";

export class CreateBlogDto {
    @ApiProperty({ description: '文章内容', example: '今日新闻' })
    content: string;

    @ApiProperty({ description: '文章标题', example: '腾讯新闻' })
    title: string;

    @ApiProperty({ description: '用户名', example: '张三' })
    user?: string;

    @ApiProperty({ description: '图片' })
    img?: string;
}