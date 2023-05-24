export class UsuarioRepository {
  private usuarioRepository = [];

  async salvar(usuario) {
    this.usuarioRepository.push(usuario);
    console.log(this.usuarioRepository);
  }
}
