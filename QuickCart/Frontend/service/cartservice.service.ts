
export class CartServiceService {
  private cartKey = 'myAppCart';  // localStorage key
  private cart: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const data = localStorage.getItem(this.cartKey);
    this.cart = data ? JSON.parse(data) : [];
  }

  private saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(productId: number) {
    const item = this.cart.find(i => i.productId === productId);
    if (item) {
      item.quantity += 1;
    } else {
      this.cart.push({ productId, quantity: 1 });
    }
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(i => i.productId === productId);
    if (item) {
      item.quantity = quantity > 0 ? quantity : 1;
      this.saveCart();
    }
  }
