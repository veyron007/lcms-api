import { Controller, Get, Query, Res, Body, Post , Put} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Response } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { AdditionalInformationDto } from './dto/additional-info.dto';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) { }

    @Get('getClients')
    getUsers(@Query() params: any): any {
        try {
            return this.clientsService.findClientsByName(params.name);
        } catch (obj) {
            console.log(obj);
        }

    }

    @Post('createClient')
    async createClient(@Body() createClientDto: CreateClientDto) {
        console.log(createClientDto);
        let result = await this.clientsService.createClient(createClientDto);
        console.log('a2',result);
        return {
            data: result

        }

    }



    @Put('updateClient')
    async updateClient(@Body() updateClientDTO: UpdateClientDto){
        console.log(updateClientDTO);
        let result:any = await this.clientsService.updateClient(updateClientDTO);
        console.log('update',result);
        return{
            data:result
        }
        

    }

    @Post('addAdditionalInfo')
    async addAdditionalInfo(@Body () additionalInformationDto: AdditionalInformationDto){

        let result : any = await this.clientsService.addAdditionalInfo(additionalInformationDto)
        return{
            data: result
        }
    }

}
