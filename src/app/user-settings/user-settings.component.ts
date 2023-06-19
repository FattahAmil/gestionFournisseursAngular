import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  isHidden: boolean =true;
  
  toggleClassMenu(): void {
    this.isHidden = !this.isHidden;
  }
}
