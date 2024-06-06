import React from 'react';
import sublinks from '../data';
import { useAppContext } from '../context';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        {sublinks.map((item) => {
          const { pageId, page, links } = item;
          return (
            <article key={pageId}>
              <h4>{page}</h4>

              <ul className='sidebar-sublinks'>
                {links.map((link) => {
                  const { id, label, icon, url } = link;
                  return (
                    <li key={id}>
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}

        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
