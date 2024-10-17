import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try {
      
      return await this.prisma.product.create({
        data: createProductDto,
      });
    } catch (error) {
      if(error.code === 'P2002')throw new ConflictException('This product already exists');
      throw new InternalServerErrorException();
      
    }
  }

  async findAll() {
    try {
      return await this.prisma.product.findMany();
    } catch (error) {
      throw new NotFoundException('Products not found');
    }
  }

  async findOne(id: string) {
    try {
      const productFound = this.prisma.product.findUnique({ where: { id } });
      if (!productFound) {
        throw new NotFoundException('Products not found');
      }
      return await productFound;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const productFound = this.prisma.product.findUnique({ where: { id } });
      if (!productFound) {
        throw new NotFoundException('Products not found');
      }
      return await this.prisma.product.update({
        where: { id },
        data: updateProductDto,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      const productFound = this.prisma.product.findUnique({ where: { id } });
      if (!productFound) {
        throw new NotFoundException('Products not found');
      }
      return await this.prisma.product.delete({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }
}
