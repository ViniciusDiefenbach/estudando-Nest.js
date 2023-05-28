import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  Length,
  ValidateNested,
} from 'class-validator';

export class CriaProdutoDTO {
  @IsString({ message: 'O nome deve ser uma string' })
  nome: string;
  @IsNumber({}, { message: 'O valor deve ser um número' })
  @IsPositive({ message: 'O valor deve ser positivo' })
  valor: number;
  @IsNumber({}, { message: 'A quantidade deve ser um número' })
  @IsPositive({ message: 'A quantidade deve ser positiva' })
  @IsInt({ message: 'A quantidade deve ser um número inteiro' })
  quantidade: number;
  @IsString({ message: 'A descrição deve ser uma string' })
  descricao: string;
  @IsArray({ message: 'As caracteristicas devem ser um array' })
  @ValidateNested({
    message: 'As caracteristicas devem estar dentro do CriaProduto',
  })
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];
  @IsArray({ message: 'As imagens devem ser um array' })
  @ValidateNested({ message: 'As imagens devem estar dentro do CriaProduto' })
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];
  @IsString({ message: 'A categoria deve ser uma string' })
  categoria: string;
}

class CaracteristicaProdutoDTO {
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  @IsString({ message: 'O nome deve ser uma string' })
  nome: string;
  @IsNotEmpty({ message: 'A descrição não pode estar vazia' })
  @IsString({ message: 'A descrição deve ser uma string' })
  @Length(1, 255, { message: 'A descrição deve ter entre 1 e 255 caracteres' })
  descricao: string;
}

class ImagemProdutoDTO {
  @IsNotEmpty({ message: 'A url não pode estar vazia' })
  @IsUrl({}, { message: 'A url deve ser válida' })
  @IsString({ message: 'A url deve ser uma string' })
  url: string;
  @IsNotEmpty({ message: 'A descrição não pode estar vazia' })
  @IsString({ message: 'A descrição deve ser uma string' })
  @Length(1, 255, { message: 'A descrição deve ter entre 1 e 255 caracteres' })
  descricao: string;
}
