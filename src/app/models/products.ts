import { Product } from './product';

export const Products: Product[] = [
  {
    name: 'Apple',
    sku: 1 ,
    description: 'Eat one every day to keep the doctor away!',
    price: 12,
    cal: 30,
    img: 'apple',
    nutrient: {
          Carotenoid: 0,
          Vitamin: 2,
          Folates: 0,
          Potassium: 1,
          Fiber: 1
      }
  },
  {
    name: 'Avocado',
    sku: 2,
    description: 'Guacamole anyone',
    price: 8,
    cal: 20,
    img: 'avocado',
    nutrient: {
         Carotenoid: 0,
         Vitamin: 4,
         Folates: 0,
         Potassium: 1,
         Fiber: 1
      }
  },
  {
    name: 'Banana',
    sku: 3,
    description: 'Banana Banana Banana',
    price: 2,
    cal: 10,
    img: 'banana',
    nutrient: {
         Carotenoid: 1,
         Vitamin: 3,
         Folates: 2,
         Potassium: 4,
         Fiber: 4
    }
  },

  {
   name: 'Grape',
   sku: 4,
   description: 'Wine is great, but grapes are even better',
   price: 8,
   cal: 10,
   img: 'grape',
   nutrient: {
        Carotenoid: 3,
        Vitamin: 2,
        Folates: 1,
        Potassium: 0,
        Fiber: 3
    }
  },

  {
     name: 'Grapefruit',
     sku: 5,
     description: 'Pink or red, always healthy and delicious',
     price: 11,
     cal: 60,
     img: 'grapefruit',
     nutrient: {
          Carotenoid: 2,
          Vitamin: 1,
          Folates: 3,
          Potassium: 2,
          Fiber: 3
     }
  },
  {
     name: 'Papaya',
     sku: 6,
     description: 'Super-popular for breakfast',
     price: 5,
     cal: 90,
     img: 'papaya',
     nutrient: {
          Carotenoid: 1,
          Vitamin: 3,
          Folates: 2,
          Potassium: 4,
          Fiber: 4
     }
    },

  {
     name: 'Pineapple',
     sku: 7,
     description: 'Enjoy it but do not forget to peel first.',
     price: 4,
     cal: 40,
     img: 'pineapple',
     nutrient: {
          Carotenoid: 3,
          Vitamin: 2,
          Folates: 1,
          Potassium: 3,
          Fiber: 2
     }
  }

];
