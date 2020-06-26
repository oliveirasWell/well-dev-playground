import { lazy } from 'react';
// import Home from '../screens/Home/Home';

const Home = lazy(() => import('../screens/Home/Home'));
const List = lazy(() => import('../screens/List/List'));

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
    title: 'List',
    menu: true,
    component: List,
    redirect(history, id) {
      return history.push(this.path.replace(':id', id));
    },
  },
};
