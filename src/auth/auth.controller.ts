import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LoginUserDto } from "src/users/dto/login-user.dto";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() userDto: LoginUserDto) {
    return this.authService.login({
      email: userDto.email,
      password: userDto.password,
    });
  }

  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
