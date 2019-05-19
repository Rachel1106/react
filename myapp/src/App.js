import React from 'react';
import {HashRouter,NavLink,Route,Switch,Redirect} from "react-router-dom";
import Home from "./component/index";
import Classify from "./component/classification";
import ShopCar from "./component/shopcar";
import My from "./component/my";
import "./css/app.css"


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/classify" component={Classify}></Route>
        <Route path="/shop" component={ShopCar}></Route>
        <Route path="/my" component={My}></Route>
        <Redirect to="/home" path="/"></Redirect>
      </Switch>
      
      <div className="footer">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/classify">分类</NavLink>
        <NavLink to="/shop">购物车</NavLink>
        <NavLink to="/my">我的</NavLink>
      </div>
    </HashRouter>
  );
}

export default App;
