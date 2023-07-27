import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {

  htmlContent: string = `Add Prism styles</h2>\n<p>Next add Prism styles into your
   <code>styles.scss</code>. Theme CSS is needed at least. Check my 
   <a href=\"https://auralinna.blog/post/2017/how-to-customize-bootstrap-styles-and-variables-when-using-ng-bootstrap\">
   earlier blog post</a> how to change Angular to use SCSS instead of CSS if you don't use SCSS already. Alternatively y
   ou can add CSS files directly into your HTML.</p>\n<pre><code class=\"language-scss\">@import &quot;~prismjs/plugins/too
   lbar/prism-toolbar.css&quot;;\n@import &quot;~prismjs/themes/prism-okaidia&quot;;\n</code></pre>\n<hr />\n<p>It should be 
   working now. Please feel free to comment this post if you have questions or suggestions how to improve code base.</p>
  `;

  private highlighted: boolean = false;




}
