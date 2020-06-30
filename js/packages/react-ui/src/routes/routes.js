import { lazy } from 'react';
// import List from '../pages/List/List';

const List = lazy(() => import('../pages/List/List'));
const Home = lazy(() => import('../pages/Home/Home'));

export const routes = {
  HOME: {
    path: '/home',
    title: 'Home',
    menu: true,
    component: Home,
    redirect(history) {
      return history.push(this.path);
    },
  },
  LIST: {
    path: '/list',
    title: 'List',
    menu: true,
    component: List,
    redirect(history) {
      return history.push(this.path);
    },
  },
  LIST_ITEM: {
    path: '/listItem/:id',
    title: 'ListItem',
    menu: true,
    component: List,
    redirect(history, id) {
      return history.push(this.path.replace(':id', id));
    },
  },
};
