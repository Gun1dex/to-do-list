import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navBar: NavbarComponent;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  showNavBar() {
    this.navBar.navBar.toggle();
  }

}
