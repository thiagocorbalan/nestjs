import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  findAll(): Observable<any[]> {
    throw new HttpException('Erro in findAll method', HttpStatus.FORBIDDEN);
  }
}
