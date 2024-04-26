import { CommonModule, NgClass } from '@angular/common';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showHomeContent: boolean;
  showNewsContent: boolean;
  showContactContent: boolean;
  showAboutContent: boolean;
  activeTab: string;
  // tab: string;

  constructor() {
    this.showHomeContent = true;
    this.showNewsContent = false;
    this.showContactContent = false;
    this.showAboutContent = false;
    // this.tab = '';
    this.activeTab = 'Home';
  }

  setTab(tab: string) {
    console.log('tab ', tab);
    // console.log('el ', el);
    // this.tab = tab;
    this.activeTab = tab;
    console.log('activeTab ', this.activeTab);
  }
}
