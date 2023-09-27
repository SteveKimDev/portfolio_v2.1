import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'gatsby';
import OffCanvasMenu from './offcanvas-menu';

const Header = () => {
  return (
    <header className='header'>
      <Stack direction='horizontal' gap={5}>
        {/* Stack 1 */}
        <div>
          <Link to='/'>
            <div className='stack1'>
              <span className='green-text'>STEVE KIM</span>
            </div>
          </Link>
        </div>

        {/* Stack 2 */}
        <div className='stack2 ms-auto'>
          <OffCanvasMenu />
        </div>
      </Stack>
    </header>
  );
};

export default Header;
