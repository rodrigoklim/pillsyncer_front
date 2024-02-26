export type MenuItem = {
  label: string;
  icon: string;
  path: string;
  children?: MenuItem[];
};

export const menu = [
  {
    label: 'customers',
    icon: 'person',
    path: '/customers',
    children: [
      {
        label: 'list',
        path: '/customers',
      },
      {
        label: 'add',
        path: '/customers/add',
      },
    ],
  },
  {
    label: 'medicines',
    icon: 'fa-solid fa-pills',
    path: '/medicines',
  },
  {
    label: 'deals',
    icon: 'sell',
    path: '/deals',
  },
  {
    label: 'reports',
    icon: 'fa-solid fa-chart-line',
    path: '/reports',
  },
  {
    label: 'team',
    icon: 'group',
    path: '/team',
  },
  {
    label: 'config',
    icon: 'settings',
    path: '/config',
  },
] as MenuItem[];
