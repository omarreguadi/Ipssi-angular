export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  constructor(id, name, description = '', price = 0, stock = 0, imageUrl = 'https://www.citypng.com/public/uploads/preview/-11591925787cggjhepdvq.png') {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.imageUrl = imageUrl;
  }
}
