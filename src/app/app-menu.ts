import {MenuItem} from '../spa/services/menu.service'

export const AppMenuItems: MenuItem[] = [
    {
        text: 'Groups',
        icon: 'assets/imgs/guitar.png',
        route: '/groups',
        submenu: [],
    },
    {
        text: 'Maintenance',
        icon: 'assets/imgs/settings.png',
        route: '/settings',
        submenu: [],
    },
    {
        text: 'Home',
        icon: 'assets/imgs/home.png',
        route: '/home',
        submenu: [],
    },

]