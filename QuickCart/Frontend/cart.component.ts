
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,NavbarComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  showNavbar = true;
  cartItems: CartItem[] = [];
  products: Product[] = [];
  checkoutSuccess = false;
checkoutData: any = null; 
productsLoaded = false;
  constructor(
    public cartService: CartServiceService,
    private productService: ProductServiceService
  ) {}
  
  ngOnInit(): void {
    // Load cart items
    this.cartItems = this.cartService.getCart();
  
    // Load products
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.productsLoaded = true;
    });
  }
  loadCart() {
    this.cartItems = this.cartService.getCart();
  }

  // Make sure this matches your Product object's key for ID (usually 'id' or 'productId')
  getProduct(id: number): Product | undefined {
    return this.products.find(p => p.productId === id);
    // If your Product uses 'id' instead of 'productId', then:
    // return this.products.find(p => p.id === id);
  }
  
  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.cartItems = this.cartService.getCart();
  }
  
  total(): number {
    return this.cartItems.reduce((sum, item) => {
      const product = this.getProduct(item.productId);
      return sum + (product?.price || 0) * item.quantity;
    }, 0);
  }

  checkout() {
    this.productService.checkout(this.cartItems).subscribe(() => {
      alert('Checkout successful!');
      this.checkoutSuccess = true;
      this.checkoutData = Response;  // assuming API returns data, adjust if not
      this.cartService.clear();
      this.cartItems = [];
    }, error => {
      alert('Checkout failed. Please try again.');
    });
  }
  continueShopping() {
    this.checkoutSuccess = false;
    this.loadCart();
  }
}

