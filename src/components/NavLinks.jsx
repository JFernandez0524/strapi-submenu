import sublinks from '../data';
import { useAppContext } from '../context';

const NavLinks = () => {
  const { setPageId } = useAppContext();

  return (
    <div className='nav-links'>
      {sublinks.map((pages) => {
        const { pageId, page } = pages;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
