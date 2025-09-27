
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
export const routes: Routes = [
  { path: '', redirectTo: '/app-home', pathMatch: 'full' }, 
  { path:'app-home',component:HomeComponent },
  { path:'app-navbar',component:NavbarComponent },
  { path:'app-productlist',component:ProductlistComponent },
  { path:'app-cart',component:CartComponent },
]
