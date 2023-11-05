import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PersonalInformation, Prisma } from 'prisma/generated/client';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { AdditionalInformationDto } from './dto/additional-info.dto';





@Injectable()
export class ClientsService {
    constructor(private prisma: PrismaService) { }





    async findClientsByName(name: any) {
        let allClients = await this.prisma.personalInformation.findMany({
            where: {
                first_name: {
                    contains: name
                }
            }
        })
        return { data: allClients };

    }
    getHello(): string {
        return 'Hello Client';
    }


    async createClient(createClientDto: CreateClientDto) {
        try {
            let client = await this.prisma.personalInformation.create({
                data: {
                    ...createClientDto
                }
            })
            if (client) {
                console.log('a1', client);
                return {
                    'msg': 'client created successfully'
                }

            } else {
                return {
                    'msg': 'some error occured'
                }
            }
        }
        catch (obj) {
            console.log(obj);
            return {
                'msg': 'some error occured'
            }
        }
    }




    async updateClient(updateClientDto: UpdateClientDto) {
        try {
            console.log('bogo',updateClientDto.email_address);
            const client = await this.prisma.personalInformation.findFirst({
                where:{
                    email_address:updateClientDto.email_address
                }
            })
            console.log('yoyo',client);
            if(!client){
                return ("User Not found")
            }
            let id = client.id;
            
            const updateclient_result = await this.prisma.personalInformation.update({
                where: {
                    id: id,
                },
                data: {
                    ...updateClientDto
                }
            });

            if (updateclient_result) {
                console.log('a1', updateclient_result);
                return {
                    'msg': 'client updated successfully'
                }

            } else {
                return {
                    'msg': 'some error occured'
                }
            }

        }
        catch(error) {
console.log(error);

        }
    }





    async addAdditionalInfo (additionalInformationDto : AdditionalInformationDto){
        try{
            console.log('bogo',additionalInformationDto.email_address);
            const client = await this.prisma.personalInformation.findFirst({
                where:{
                    email_address:additionalInformationDto.email_address
                }
            })
            console.log('yoyo',client);
            if(!client){
                return ("User Not found")
            }
            let client_id = client.id;
            console.log(additionalInformationDto);

            let tuple = {
            client_id,
            ...additionalInformationDto
            
            }

            delete tuple.email_address;

            let result = await this.prisma.additionalInformation.create({
                data: {
                    ...tuple
                }
            })
            if (result) {
                console.log('a1', result);
                return {
                    'msg': 'Additional Information added successfully'
                }

            } else {
                return {
                    'msg': 'some error occured'
                }
            }
            

        }
        catch(error){
            console.log(error);
            
            
            return{
                error
            }

        }
    }

}
