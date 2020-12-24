import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Produit 1', 'c est la description du produit 1. le produit est trés demandé!', 100, 5),
    new Product(2, 'Produit 2', 'c est la description du produit 2. le produit est trés demandé!', 150, 5),
    new Product(3, 'Produit 3', 'c est la description du produit 3. le produit est trés demandé!', 50, 5),
    new Product(4, 'Produit 4', 'c est la description du produit 4. le produit est trés demandé!!', 200, 15),
    new Product(5, 'Produit 5', 'c est la description du produit 5. le produit est trés demandé!!', 100, 2),
    new Product(6, 'Produit 6', 'c est la description du produit 6. le produit est trés demandé!', 150, 6),
    new Product(7, 'Produit 7', 'c est la description du produit 7. le produit est trés demandé!', 250, 3),
    new Product(8, 'Produit 8', 'c est la description du produit 8. le produit est trés demandé!', 300, 2),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
