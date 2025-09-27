
public class Product {
	   private Long productId; 
	    private String name; 
	    private Number price; 
	    public void setPrice(Number price) {
			this.price = price;
		}
		private String imageUrl;
	    
	    public Product() {
	    }
	    public Product(Long productId, String name, Number price, String imageUrl) {
	        this.productId = productId;
	        this.name = name;
	        this.price = price;
	        this.imageUrl = imageUrl;
	    }
		public Number getPrice() {
			return price;
		}

		public Long getId() {
			return productId;
		}
		public void setId(Long productId) {
			this.productId = productId;
		}
		public Long getProductId() {
			return productId;
		}

		public void setProductId(Long productId) {
			this.productId = productId;
		}

		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getImageUrl() {
			return imageUrl;
		}
		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}
}
