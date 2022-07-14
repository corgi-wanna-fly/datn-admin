import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./account/Account";
import Order from "./pages/Order";
import OrderForm from "./pages/OrderForm";
import Product from "./pages/Product";
import ProductForm from "./pages/ProductForm";
import Voucher from "./voucher/Voucher";
import Category from "./category/Category";
import Sale from "./sale/Sale";
import Brand from "./brand/Brand";
import NewVoucher from "./voucher/NewVoucher";
import EditVoucher from "./voucher/EditVoucher";
import NewBrand from "./brand/NewBrand";
import EditBrand from "./brand/EditBrand";
import NewAccount from "./account/NewAccount";
import EditCategory from "./category/EditCategory";
import NewCategory from "./category/NewCategory";
import NewSale from "./sale/NewSale";
import EditSale from "./sale/EditSale";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/accounts" exact>
        <Account></Account>
      </Route>
      <Route path="/add-account" exact>
        <NewAccount></NewAccount>
      </Route>
      <Route path="/products" exact>
        <Product></Product>
      </Route>
      <Route path="/add-product" exact>
        <ProductForm></ProductForm>
      </Route>
      <Route path="/orders" exact>
        <Order></Order>
      </Route>
      <Route path="/categories" exact>
        <Category></Category>
      </Route>
      <Route path="/add-category" exact>
        <NewCategory></NewCategory>
      </Route>
      <Route path="/sale" exact>
        <Sale></Sale>
      </Route>
      <Route path="/add-sale" exact>
        <NewSale></NewSale>
      </Route>
      <Route path="/vouchers" exact>
        <Voucher></Voucher>
      </Route>
      <Route path="/add-voucher" exact>
        <NewVoucher></NewVoucher>
      </Route>
      <Route path="/brand" exact>
        <Brand></Brand>
      </Route>
      <Route path="/add-brand" exact>
        <NewBrand></NewBrand>
      </Route>
      <Route path={`/order-detail/:id`} exact>
        <OrderForm></OrderForm>
      </Route>
      <Route path={`/voucher-detail/:id`} exact>
        <EditVoucher></EditVoucher>
      </Route>
      <Route path={`/brand-detail/:id`} exact>
        <EditBrand></EditBrand>
      </Route>
      <Route path={`/category-detail/:id`} exact>
        <EditCategory></EditCategory>
      </Route>
      <Route path={`/sale-detail/:id`} exact>
        <EditSale></EditSale>
      </Route>
    </Switch>
  );
};

export default Routes;
