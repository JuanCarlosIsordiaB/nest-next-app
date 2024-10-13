import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {


  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {

    return this.prisma.product.create({
      data: createProductDto
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    const productFound = this.prisma.product.findUnique({where: {id}});
    if(!productFound){
      throw new Error('Product not found');
    }
    return productFound;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const productFound = this.prisma.product.findUnique({where: {id}});
    if(!productFound){
      throw new Error('Product not found');
    }
    return this.prisma.product.update({
      where: {id},
      data: updateProductDto
    });
  }

  remove(id: string) {
    const productFound = this.prisma.product.findUnique({where: {id}});
    if(!productFound){
      throw new Error('Product not found');
    }
    return this.prisma.product.delete({where: {id}});
  }
}
