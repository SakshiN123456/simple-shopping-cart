
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showNavbar = true;
  features = [
    {
      icon: 'bi bi-box-seam',
      title: 'Product Listing',
      description: 'Displays products dynamically from a service with images, names, and prices.'
    },
    {
      icon: 'bi bi-cart4',
      title: 'Cart Functionality',
      description: 'Add, update, and remove products in your cart. All synced across the app.'
    },
    {
      icon: 'bi bi-bootstrap',
      title: 'Responsive UI',
      description: 'Built with Bootstrap 5 for responsive, mobile-friendly layout.'
    },
    {
      icon: 'bi bi-check-circle',
      title: 'Checkout System',
      description: 'Mock checkout process with order confirmation and cart clearing.'
    }
  ];
}
