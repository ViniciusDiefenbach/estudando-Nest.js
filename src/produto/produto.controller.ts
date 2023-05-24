import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criarProduto(@Body() produto) {
    await this.produtoRepository.salvar(produto);
  }

  @Get()
  async listarProdutos() {
    return await this.produtoRepository.listar();
  }
}
