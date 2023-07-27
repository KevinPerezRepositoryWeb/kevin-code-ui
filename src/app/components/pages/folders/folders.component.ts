import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  folders: any[] = [
    { name: 'Carpeta 1' },
    { name: 'Carpeta 2' },
    { name: 'Carpeta 3' },
    // Agrega más carpetas según tus necesidades
  ];

  onFolderClick(folder: any): void {
    console.log('Carpeta seleccionada:', folder.name);
    // Agrega aquí la lógica para manejar el clic en una carpeta
  }
}
