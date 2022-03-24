import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('emails')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllEmails() {
    return this.appService.getAll();
  }

  @Post()
  addEmail(@Body() createEmail: { name: string; email: string }) {
    this.appService.insertNewsletter(createEmail);
    return;
  }
}
