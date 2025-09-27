
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule,FormsModule,NavbarComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
   products: Product[] = [];  // typed properly
  showNavbar = true;

  constructor(
    private productService: ProductServiceService,
    private cartService: CartServiceService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  addToCart(productId: number) {
    this.cartService.addToCart(productId);
    alert('Added to cart!');
  }
}
