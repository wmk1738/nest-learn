import { Controller } from '@nestjs/common';
import { User } from './user.entity';
import { Crud } from '@nestjsx/crud';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: {
        type: User,
    },
})
@Controller('user')
export class UserController {
    constructor( public service: UserService) { }

}
