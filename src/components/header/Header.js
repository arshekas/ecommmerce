import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropDown from '../cartDropDown/CartDropDown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectCartHidden } from '../../redux/cart/cart-selectors'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
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
        <CartIcon />
      </div>
      { hidden ? null : (<CartDropDown />)}
    </div>
  );

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
// const mapStateToProps = ({user : { currentUser }, cart : { hidden }}) => ({
//     currentUser,
//     hidden
//   });
// const mapStateToProps = ({state}) => ({
//     currentUser: state.user.currentUser
//   });
  
  export default connect(mapStateToProps)(Header);