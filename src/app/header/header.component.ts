import { Component } from '@angular/core';
import {routeValues} from '../constants/route-values';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  protected readonly routeValues = routeValues;
}
