import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);

    const role = await this.roleService.getRoleByValue('STUDENT');
    await user.$set('roles', [role.id]);
    user.roles = [role];

    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(value: string) {
    const user = await this.userRepository.findOne({
      where: { email: value },
      include: { all: true },
    });

    if (user) {
      return user;
    }
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.id);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$set('roles', [role.id]);
      user.roles = [role];
      return { role, id: user.id };
    }

    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
  }

  async delete(dto: DeleteUserDto) {
    const isDeleted = await this.userRepository.destroy({
      where: { id: dto.id },
      force: true,
    });

    if (!isDeleted) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }
    return dto.id;
  }
}
