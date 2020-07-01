import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from '../../routes/routes';

const Menu = () => {
  const history = useHistory();

  return (
    <>
      {Object.values(routes)
        .filter(({ menu }) => !!menu)
        .map((route, index) => {
          const { path, title } = route;

          return (
            <div
              key={`${path}*menu`}
              onClick={() => route.redirect(history)}
              role="menuitem"
              tabIndex={index}
            >
              {title}
            </div>
          );
        })}
    </>
  );
};

export { Menu };
