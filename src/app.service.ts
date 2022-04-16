import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloFromHome(): object {
    return { greeting: 'Hello from Home!' }
  }
}
