import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarioRepository = [];

  async salvar(usuario) {
    this.usuarioRepository.push(usuario);
    console.log(this.usuarioRepository);
  }

  async listar() {
    return this.usuarioRepository;
  }

  async buscarPorEmail(email) {
    const usuario = this.usuarioRepository.find(
      (usuario) => usuario.email === email,
    );
    return usuario !== undefined;
  }
}
