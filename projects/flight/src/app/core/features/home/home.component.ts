import { Component } from '@angular/core';
import { injectUserFullname } from '../../../shared/config/config.provide';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Modern Angular</h2>
      </div>

      <div class="card-body">
        <ul>
          <li>Dependency Injection</li>
          <li>Directives</li>
        </ul>
        <div>
          <img src="assets/repo-qr.png">
        </div>
      </div>
    </div>

    <!-- <div class="card">
      <div class="card-header">
        <h2 class="card-title">User</h2>
      </div>

      <div class="card-body">
        <p>{{ userFullname() }}</p>
      </div>
    </div> -->
  `,
  styles: [`
    code {
      color: blue;
    }
  `]
})
export class HomeComponent {
  protected userFullname = injectUserFullname();
}
