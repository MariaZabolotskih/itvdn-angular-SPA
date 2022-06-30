import { Component, OnInit } from '@angular/core';
import { SpaConfigService, SpaConfigSettings } from 'src/spa/services/spa-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private spaConfigService: SpaConfigService) {}

  ngOnInit(): void {
    const config: SpaConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/imgs/vk.png', alt: 'ВКонтакте', url: 'https://vk.com' },
        { imageFile: 'assets/imgs/whatsapp.png', alt: 'ВКонтакте', url: 'https://whatsapp.com' },
      ],
      showUserControls: true
    };
    this.spaConfigService.configure(config);
  }

}
