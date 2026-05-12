import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { Inicio } from './inicio/inicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Inicio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('revisaospa');
}
