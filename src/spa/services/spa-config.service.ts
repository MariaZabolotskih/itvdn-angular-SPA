import { Injectable } from '@angular/core';


export interface Icon {
  imageFile: string;
  url: string;
  alt: string;
}

export interface SpaConfigSettings {
  showUserControls?: boolean;
  socialIcons?: Icon[];
}

@Injectable()
export class SpaConfigService {
  showUserControls = true;
  socialIcons = new Array<Icon>()
  constructor() { }

  configure(settings: SpaConfigSettings): void {
    Object.assign(this, settings)
  }
}
