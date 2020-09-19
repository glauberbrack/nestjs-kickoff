import { Controller, Get, Post, Req, HttpCode } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'All apllication users'
    }

    @Post()
    @HttpCode(204)
    create(): string {
        return 'This route create a new user'
    }
    
}


