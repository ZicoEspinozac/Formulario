import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  features = [
    { icon: 'fas fa-cog', title: 'Feature 1', description: 'This is a great feature.' },
    { icon: 'fas fa-cogs', title: 'Feature 2', description: 'This is another great feature.' },
    { icon: 'fas fa-mobile-alt', title: 'Feature 3', description: 'Mobile-friendly design.' },
    { icon: 'fas fa-tablet-alt', title: 'Feature 4', description: 'Tablet-friendly design.' },
    { icon: 'fas fa-desktop', title: 'Feature 5', description: 'Desktop-friendly design.' },
    { icon: 'fas fa-cloud', title: 'Feature 6', description: 'Cloud integration.' },
    { icon: 'fas fa-lock', title: 'Feature 7', description: 'Secure and reliable.' },
    { icon: 'fas fa-sync', title: 'Feature 8', description: 'Fast and responsive.' }
  ];

  dataTypes = ['String', 'Number', 'Email', 'Phone', 'Radio', 'Checkbox', 'Date', 'Password'];

  demos = [
    { title: 'Demo Form 1', number: '01' },
    { title: 'Demo Form 2', number: '02' },
    { title: 'Demo Form 3', number: '03' },
    { title: 'Demo Form 4', number: '04' },
    { title: 'Demo Form 5', number: '05' },
    { title: 'Demo Form 6', number: '06' },
    { title: 'Demo Form 7', number: '07' },
    { title: 'Demo Form 8', number: '08' },
    { title: 'Demo Form 9', number: '09' },
    { title: 'Demo Form 10', number: '10' },
    { title: 'Demo Form 11', number: '11' },
    { title: 'Demo Form 12', number: '12' },
    { title: 'Demo Form 13', number: '13' },
    { title: 'Demo Form 14', number: '14' },
    { title: 'Demo Form 15', number: '15' }
  ];
}
