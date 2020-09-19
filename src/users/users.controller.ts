import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    @Post()
    create(@Body() createUserDto: CreateUserDto ): string {
        return 'This route create a new user'
    }

    @Get()
    findAll(): string {
        return 'All apllication users'
    }

    @Get(':id')
    findOne(@Param('id') id: string): string{
        return `This route returns the user that have #${id}`
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): string{
        return `This route update the user that have #${id}`
    }
    
    @Delete(':id')
    remove(@Param('id') id: string): string{
        return `This route removes the user that have #${id}`
    }
}


