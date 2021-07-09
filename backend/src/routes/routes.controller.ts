import { Controller, Get } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { Route } from './interfaces/route.interface';

@Controller('routes')
export class RoutesController {
  constructor(private routesService: RoutesService) {}

  @Get()
  async findAll(): Promise<Route[]> {
    return this.routesService.findAll();
  }
}
