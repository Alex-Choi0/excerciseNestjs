import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHi(): {name : string} {
    return {name : "Alex"};
  }
}
