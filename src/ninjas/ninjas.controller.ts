import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}
  //get /ninja?type=fast --> []
  @Get()
  getNinja(
    @Query(`weapon`) weapon: `bow` | `sword`,
    @Query(`type`) type: `warrior` | `archer`,
  ) {
    return this.ninjaService.getNinjas(weapon, type);
  }

  //get /ninja/:id --> { ... }
  @Get(`:id`)
  getOneNinja(@Param('id') id: string) {
    return this.ninjaService.getNinja(+id);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }

  @Put(`:id`)
  updateNinja(@Param(`id`) id: number, @Body() UpdateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinjaTest1(+id, UpdateNinjaDto);
  }

  @Delete(`id`)
  deleteNinja(@Param(`id`) id: number) {
    return this.ninjaService.removeNinja(+id);
  }
}
