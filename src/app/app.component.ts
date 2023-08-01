import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kevin-code-ui';
  htmlContent2:string=`<pre><code class="language-typescript">
  // Tu código JavaScript aquí
  function exampleFunction() {
    console.log("¡Hola, mundo!");
  }
  </code></pre>`;


  
}
