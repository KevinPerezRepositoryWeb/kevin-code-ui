import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as CodeMirror from 'codemirror';
import { DetailCodeComponent } from '../../alerts/detail-code/detail-code.component';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editorRef!: ElementRef;

  private codeMirrorInstance!: CodeMirror.Editor;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private renderer: Renderer2, private el: ElementRef
    ) {

  }

  ngOnInit(): void {
    this.initForm()
    this.addClickEvents();

  }

  initForm(){
    this.form = this.fb.group({
      editor: [''],
      icono: [''],
      title: ['Código para ordenar un array'],
    });
  }
  addClickEvents() {
    const selectElement = this.el.nativeElement.querySelector('#select');
    const opcionesElement = this.el.nativeElement.querySelector('#opciones');
    const contenidoSelectElement = this.el.nativeElement.querySelector('#select .contenido-select');
    const hiddenInputElement = this.el.nativeElement.querySelector('#inputSelect');

    // Selección de todas las opciones y asignación de evento click
    const opciones = this.el.nativeElement.querySelectorAll('#opciones > .opcion');
    opciones.forEach((opcion:any) => {
      this.renderer.listen(opcion, 'click', (event) => {
        event.preventDefault();
        contenidoSelectElement.innerHTML = opcion.innerHTML;
        selectElement.classList.toggle('active');
        opcionesElement.classList.toggle('active');
        hiddenInputElement.value = opcion.querySelector('.titulo').innerText;
      });
    });

    // Asignación de evento click al elemento select
    this.renderer.listen(selectElement, 'click', () => {
      selectElement.classList.toggle('active');
      opcionesElement.classList.toggle('active');
    });
  }

  ngAfterViewInit() {
    this.initCodeMirror()
  }

  initCodeMirror() {
    const editorOptions: any = {
      lineNumbers: true, // Puedes personalizar las opciones según tus necesidades
      mode: 'javascript', // Establece el modo de lenguaje
      theme: 'dracula', // Tema por defecto
      scrollbarStyle:'native'
    };

    this.codeMirrorInstance = CodeMirror.fromTextArea(this.editorRef.nativeElement, editorOptions);
    this.codeMirrorInstance.setSize('100%', '100%'); // Establecer el ancho del editor al 80% del contenedor
    this.codeMirrorInstance.setValue('<div></div')
  }


  changeTheme(theme: string) {
    this.codeMirrorInstance.setOption('theme', theme);
  }

  get editor(): string {
    if (this.codeMirrorInstance) return this.codeMirrorInstance.getValue();
    return "";
  }

  dis() {
     console.log(this.editor)
    return false;
  }

  getIconImageUrl(iconName: string): string {
    return `assets/icons/${iconName}`;
  }

  lenguajes = [ // Puedes agregar aquí más países si lo deseas
    { icon: 'assets/icons/angular.svg', name: 'Angular', description:'Framework JS' },
    { icon: 'assets/icons/flutter.svg', name: 'Flutter', description:'Framework Multiplaforma'  },
    // Agrega más países aquí con sus respectivos códigos y nombres
  ];

  getFlagPath(code: string): string {
    return `assets/icons/${code.toLowerCase()}.svg`;
  }
  
  openDetailCode() {
    this.matDialog.open(DetailCodeComponent, {
      width: '400px',
      height:'400px',
      data: {
        
      }
    })
  }

}




