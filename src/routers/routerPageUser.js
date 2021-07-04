import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Trangchu from '../pages/UserPage/Trangchu/Trangchu';
import Gioithieu from '../pages/UserPage/Gioithieu';
import Lienhe from '../pages/UserPage/Lienhe';
import Cuahang from '../pages/UserPage/Cuahang';
import NavUserPage from '../pages/HomePage/NavUserPage';
import PageLogin from '../pages/HomePage/login/pageLogin';

function RouterPageUser({ account_current }) {
  console.log(account_current);
  return (
    <>
      <NavUserPage />
      <Switch>
        <Route path="/" exact component={Trangchu} />
        {
          account_current?.checkToken == true ?
            (
              <Redirect to="/" />
            )
            :
            (
              <Route to="/Dang-nhap" component={PageLogin} />
            )
        }
        <Route path="/Gioi-thieu" component={Gioithieu} />
        <Route path="/Lien-he" component={Lienhe} />
        <Route path="/Cua-hang" component={Cuahang} />
        <Route component={Trangchu} />

      </Switch>
    </>
  );
}

export default RouterPageUser;