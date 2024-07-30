import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TaskModule } from './task/task.module';


@Module({
  imports: [ProductsModule, TaskModule],
  
})
export class AppModule {}
