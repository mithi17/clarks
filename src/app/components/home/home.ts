import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { About } from '../about/about';
// import { Ourproduct } from '../ourproduct/ourproduct';
// import { Segments } from '../segments/segments'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], // Remove Segments About, Ourproduct, Segments
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['/products']);
  }
}