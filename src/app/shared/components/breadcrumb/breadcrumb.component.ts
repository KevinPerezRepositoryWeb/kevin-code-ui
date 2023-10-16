import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/internal/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbItems: { label: string, url: string }[] = []; // Arreglo de objetos para elementos del breadcrumb

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    // Suscríbete a eventos de actualización del breadcrumb
    this.breadcrumbService.breadcrumbUpdated.subscribe(breadcrumb => {
      this.breadcrumbItems = breadcrumb.map((label, index) => {
        const url = breadcrumb.slice(0, index + 1).join('/');
        return { label, url };
      });
    });
  }
}
