import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){}


    async findEmail(email:string){
        console.log(email);
        
        if(email==undefined){
            return {data:[]}
        }
        let allMails = await this.prisma.userLogin.findMany({
            where:{
                email_address:{
                    contains: email
                }
            }
        })
        return{data: allMails};
    }
}
