import { MenuItem } from '../spa/services/menu.service'

export const AppMenuItems: MenuItem[] = [
    {
        text: 'Home',
        icon: 'assets/imgs/home.png',
        route: '/home',
        submenu: [],
    },
    {
        text: 'Maintenance',
        icon: 'assets/imgs/settings.png',
        route: '/settings',
        submenu: [],
    },
    {
        text: 'Groups',
        icon: 'assets/imgs/guitar.png',
        route: '/groups',
        submenu: [],
    },
]