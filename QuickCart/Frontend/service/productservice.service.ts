
export class ProductServiceService {
  private baseUrl = 'http://localhost:8080/api'; // Your backend API URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  checkout(cartItems: CartItem[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/checkout`, cartItems, { responseType: 'text' });
  }
}
