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
        route: null,
        submenu: [
            {
                text: 'Groups maint',
                icon: 'assets/imgs/settings.png',
                route: '/groups-maintenance',
                submenu: [],
            },
            {
                text: 'Settings',
                icon: 'assets/imgs/settings.png',
                route: '/settings',
                submenu: [],
            }
        ],
    },
    {
        text: 'Groups',
        icon: 'assets/imgs/guitar.png',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'assets/imgs/guitar.png',
                route: null,
                submenu: [
                    {
                        text: 'KOЯN',
                        icon: 'assets/imgs/guitar.png',
                        route: '/group-detail/korn',
                        submenu: [],
                    },
                    {
                        text: 'Slipknot',
                        icon: 'assets/imgs/guitar.png',
                        route: '/group-detail/slipknot',
                        submenu: [],
                    },
                    {
                        text: 'Linkin Park',
                        icon: 'assets/imgs/guitar.png',
                        route: '/group-detail/linkin-park',
                        submenu: [],
                    },
                ]
            },
            {
                text: 'Top 3',
                icon: 'assets/imgs/guitar.png',
                route: '/groups-list/3',
                submenu: []
            },
            {
                text: 'Top 5',
                icon: 'assets/imgs/guitar.png',
                route: '/groups-list/5',
                submenu: []
            },
        ],
    },
]