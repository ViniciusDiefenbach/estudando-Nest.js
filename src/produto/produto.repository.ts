import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtoRepository = [];

  salvar(produto) {
    this.produtoRepository.push(produto);
  }

  listar() {
    return this.produtoRepository;
  }
}
