
@RestController 
@RequestMapping("/product") 
@CrossOrigin(origins = "http://localhost:4200") 
public class ProductController {
	 private final List<Product> productList = List.of(
		        new Product(1L, "Laptop", 699.99, "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80"),
		        new Product(2L, "Headphones", 59.99, "https://via.placeholder.com/150"),
		        new Product(3L, "Keyboard", 29.99, "https://via.placeholder.com/150"),
		        new Product(4L, "Monitor", 199.99, "https://via.placeholder.com/150"),
		        new Product(5L, "Mouse", 25.00, "https://via.placeholder.com/150")
		    );

		    @GetMapping("/products")
		    public List<Product> getProducts() {
		        return productList;
		    }

		    @PostMapping("/checkout")
		    public ResponseEntity<String> checkout(@RequestBody List<CartItems> cartItems) {
		        System.out.println("Checkout received:");
		        cartItems.forEach(item ->
		            System.out.println("Product ID: " + item.getProductId() + ", Quantity: " + item.getQuantity())
		        );
		        return ResponseEntity.ok("Checkout successful!");
		    }
}
