import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// Controller는 root도메인에서 링크를 분기시켜준다.
// ()안에 아무것도 없으면 root url로 연결
// ('user')라고 되 있으면 root/user로 연결
// ex) root -> localhost:3000으로 연결
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Controller와 마찬가지로 ()안에 아무것도 없으면 root url따라감
  // 위의 Controller('user')이고 아래 Get('alex') 이면
  // root/user/alex url로 연결할수 있음
  @Get()
  getHello(): {name : string} {
    return this.appService.getHi();
  }

  @Post()
  postHello(): string {
    return `I got your post request`;
  }
}
