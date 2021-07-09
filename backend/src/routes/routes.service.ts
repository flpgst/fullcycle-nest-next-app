import { Injectable } from '@nestjs/common';
import * as db from '../db/routes.json';

@Injectable()
export class RoutesService {
  findAll() {
    return db.routes;
  }
}
