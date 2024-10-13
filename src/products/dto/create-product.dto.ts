export class CreateProductDto {



    
    name: string;

    image: string;

    description: string;

    price: number;

}
/*
id          String   @id @default(uuid())
  name        String
  image       String?
  description String?
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
*/
