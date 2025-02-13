import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidebar-component',
  imports: [MatListModule,MatSidenavModule,MatToolbarModule,MatButtonModule],
  templateUrl: './sidebar-component.component.html',
  styleUrl: './sidebar-component.component.css'
})
export class SidebarComponentComponent {

}
