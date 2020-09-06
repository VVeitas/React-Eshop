import React from 'react';
<<<<<<< HEAD
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sing-in-and-sing-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
<<<<<<< HEAD
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component<any, any> {
  unsubscribeFromAuth: any = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

=======

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth: any = null;

  componentDidMount() {
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot(snapShot => {
<<<<<<< HEAD
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else setCurrentUser(userAuth);
=======
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else this.setState({ currentUser: userAuth });
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/hats' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
=======
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/hats' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
        </Switch>
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = ({ user }: any) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
=======
export default App;
>>>>>>> 57c8c303f77356fe58d4253e0deff11adec570c2
