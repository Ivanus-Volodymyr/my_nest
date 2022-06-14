import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TestService {
  private url = process.env.MAIN_URl;

  constructor(private httpService: HttpService) {}

  getAll(): any {
    this.httpService
      .get<any>(this.url)
      .subscribe((value) => console.log(value.data));
  }
}
