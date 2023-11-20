import { UsersService } from './users.service';
import { Controller,Get,Query,Res,Body,Post,Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
constructor(private readonly usersService:UsersService){}


@Get('validateEmail')
validateEmail(@Query() params:any):any{
    console.log(params);
    
    try{
        return this.usersService.findEmail(params.email);

    }catch(obj){
        console.log(obj);
    }


}





}
