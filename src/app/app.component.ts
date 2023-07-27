import { Component } from '@angular/core';
import { HighlightService } from './services/highlight.service';

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

  constructor(private highlightService: HighlightService) {}
  private highlighted: boolean = false

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll()
      this.highlighted = true
    }
  }
  
}
