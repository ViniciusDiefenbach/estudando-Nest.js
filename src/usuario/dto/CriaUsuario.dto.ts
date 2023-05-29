import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/EmailUnico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O usuário não pode estar vazio' })
  @IsString({ message: 'Informe um nome de usuário válido' })
  readonly nome: string;
  @IsEmail({}, { message: 'Informe um email válido' })
  @IsString({ message: 'Informe um email válido' })
  @EmailUnico({ message: 'Email já cadastrado' })
  readonly email: string;
  @IsNotEmpty({ message: 'Informe uma senha válida' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsString({ message: 'Informe uma senha válida' })
  readonly senha: string;
}
