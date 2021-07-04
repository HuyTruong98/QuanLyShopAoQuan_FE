import "./App.css";
import Page from "./pages/HomePage/Page";
import "antd/dist/antd.css";
import PageLogin from "./pages/HomePage/login/pageLogin";
import { useSelector } from "react-redux";
import UserPage from "./pages/UserPage/routerUserPage/UserPage";
import { Redirect } from "react-router-dom";

function App() {
  const account_current = useSelector(
    (state) => state.quanlylogin.account_current
  );
  return (
    <div className="App m-0">
      {account_current.checkToken && account_current?.quyen !== "KhachHang" && account_current !== null ? (
        <Page account_current={account_current} />
      ) : (
        <UserPage account_current={account_current} />
      )}
    </div>
  );
}

export default App;
