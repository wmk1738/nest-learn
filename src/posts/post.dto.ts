import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDTO {
    @ApiProperty({
        description: '文章名字',
        default:'文章一'
    })
    title: string;

    @ApiProperty({
        description: '文章内容',
        default:'内容一'
    })
    content: string;
}