import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import { Menu } from './Menu';
import { routes } from '../../routes/routes';

test('renders only menus item that `menu` field are true  ', () => {
  const expected = Object.values(routes)
    .filter(r => r.menu)
    .map(r => r.title);

  const { getAllByRole } = render(<Menu />);
  const menuItems = getAllByRole(/menuitem/i);
  const renderedItems = menuItems.map(i => getNodeText(i));

  expect(renderedItems).toEqual(expect.arrayContaining(expected));
});

test('not renders menus item that `menu` field are false', () => {
  const expected = Object.values(routes)
    .filter(r => !r.menu)
    .map(r => r.title);

  const { getAllByRole } = render(<Menu />);
  const menuItems = getAllByRole(/menuitem/i);
  const renderedItems = menuItems.map(i => getNodeText(i));

  expect(renderedItems).not.toEqual(expect.arrayContaining(expected));
});
