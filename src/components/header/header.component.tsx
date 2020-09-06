import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/original.svg';

import './header.styles.scss';
<<<<<<< HEAD
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../card-dropdown/card-dropdown.component';

const Header = ({ currentUser, hidden }: any) => (
=======

const Header = ({ currentUser }: any) => (
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='options' to='/shop'>
        SHOP
      </Link>
      <Link className='options' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
<<<<<<< HEAD
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }: any) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
=======
    </div>
  </div>
);

export default Header;
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
