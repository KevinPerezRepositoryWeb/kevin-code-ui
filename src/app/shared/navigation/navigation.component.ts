import { Component, OnInit, ViewChild } from '@angular/core';
import { NavBarService } from '../../services/nav-data.service';
import { NavBar } from 'src/app/interfaces/nav-bar.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(
    private navBarService: NavBarService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {

  }

  dataNav: NavBar[] = this.navBarService.data;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  navigate(item: NavBar) {
    this.router.navigate([`/${item.routeLink}`])
    console.log("me dispare", item)
  }
}
