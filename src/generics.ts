const tickets: Array<number> = [10, 20, 30];
const names: Array<string> = ['ali', 'arif', 'anis'];
const products: Array<object> = [
  { pdId: 1 },
  { pdName: 'adidas' },
  { isStock: true },
];

function getNums<T>(val: T): T {
  return val;
}

function getProducts<T>(products: T[]): T {
  /**
   * Do some server and DB operations
   */
  const index = 5;
  return products[index];
}

interface DB {
  connection: string;
  username: string;
  password: number;
}

function getData<T, U extends DB>(dataOne: T, dataTwo: U): object {
  return {
    dataOne,
    dataTwo,
  };
}

getData('data_one', {
  connection: 'connection_string',
  username: 'ali',
  password: 123,
});

class Buyable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const pd = new Buyable();
pd.addToCart({ shoes: 'adidas', price: 120, quantity: 3, isOffer: false });
console.log('My producst are: ', pd.cart);
