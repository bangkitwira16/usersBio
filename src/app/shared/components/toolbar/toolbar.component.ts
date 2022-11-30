import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, BrowserModule, RouterModule],
})
export class ToolbarComponent implements OnInit {
  menus: { label: string; route: string }[] = [
    {label: 'Editor', route: ''},
    {label: 'Crud', route: 'crud'}
  ];
  constructor() {}

  ngOnInit(): void {}
}
