import React, { useRef } from 'react';
import { useAppContext } from '../context';
import sublinks from '../data';

const Submenu = () => {
  const { pageId, setPageId } = useAppContext();

  const findPage = sublinks.find((item) => item.pageId === pageId);
  const subMenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const subMenu = subMenuContainer.current;
    const { clientX, clientY } = event;
    const { x, bottom } = subMenu.getBoundingClientRect();

    if (clientX > x + 1 || clientX < x || clientY < bottom) {
      setPageId(null);
    }
  };

  return (
    <div
      className={findPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={subMenuContainer}
    >
      <h5>{findPage?.page.toUpperCase()}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns: findPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {findPage?.links.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
