import { ApiProperty } from "@nestjs/swagger";
export class CreatePostDTO {
    @ApiProperty({
        description: '文章名字',
        example: '文章',
    })
    title: string;

    @ApiProperty({
        description: '文章内容',
        example: '内容',
    })
    content: string;
}