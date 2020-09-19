import { Controller, Get, Post, Req, HttpCode, Param } from '@nestjs/common';
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

    @Get(':id')
    findOne(@Param() params): string{
        console.log(params.id);
        return `This route returns the user that have #${params.id}`
    }
    
}


