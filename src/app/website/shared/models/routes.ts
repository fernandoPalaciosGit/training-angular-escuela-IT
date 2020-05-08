export interface NavRoute {
  routeLink: string;
  tooltip: string;
  label: string;
}

export const navigationWebsiteRoutes: NavRoute[] = [
  {
    routeLink: '/basics',
    tooltip: 'generic usage in templates of pipes, directives and flow control properties',
    label: 'basic knowledge'
  },
  {
    routeLink: '/item-list/products',
    tooltip: 'My awesome cats cards',
    label: 'product list'
  },
  {
    routeLink: '/item-list/users',
    tooltip: '',
    label: 'user list'
  },
  {
    routeLink: '/todo-list',
    tooltip: '',
    label: 'Todos'
  },
  {
    routeLink: '/contact',
    tooltip: '',
    label: 'contact form'
  },
  {
    routeLink: '/authentication/login',
    tooltip: '',
    label: 'LOGIN'
  }
];
