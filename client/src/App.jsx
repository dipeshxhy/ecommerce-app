import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/Layout";
import AdminDashboard from "./pages/admin-view/Dashboard";
import AdminOrder from "./pages/admin-view/Order";
import AdminFeatures from "./pages/admin-view/Features";
import AdminProduct from "./pages/admin-view/Product";
import ShoppingLayout from "./components/shopping-view/Layout";
import ShoppingListing from "./pages/shopping-view/Listing";
import ShoppingAccount from "./pages/shopping-view/Account";
import ShoppingCheckout from "./pages/shopping-view/Checkout";
import NotFound from "./pages/NotFound";
import ShoppingHome from "./pages/shopping-view/Home";
import NotAuthoried from "./pages/NotAuthoried";
import ProtectRoute from "./components/common/ProtectRoute";
import { Toaster } from "./components/ui/toaster";
import { useSelector } from "react-redux";

const App = () => {
  const {user,isAuthenticated}=useSelector(state=>state.auth)
  
 
  return (
    <div className="">
      <Routes>
        <Route path="/auth" element={<ProtectRoute isAuthenticted={isAuthenticated} user={user}><AuthLayout /></ProtectRoute>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<ProtectRoute isAuthenticted={isAuthenticated} user={user}><AdminLayout /></ProtectRoute>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrder />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="products" element={<AdminProduct />} />s
        </Route>
        <Route path="/shopping" element={<ProtectRoute isAuthenticted={isAuthenticated} user={user}><ShoppingLayout /></ProtectRoute>}>
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>
        <Route path="/noaccess" element={<NotAuthoried />} />
        <Route path="*" element={<NotFound />} />s
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
