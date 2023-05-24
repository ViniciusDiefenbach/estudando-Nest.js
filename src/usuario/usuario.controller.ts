import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new UsuarioRepository();

  @Get()
  async listarUsuarios() {
    return this.usuarioRepository.listar();
  }

  @Post()
  criarUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return 'Usuário criado com sucesso!';
  }
}