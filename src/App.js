import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LayoutDashboard from "./layout/LayoutDashboard";
import Modal from "react-modal";
import LayoutPayment from "./layout/LayoutPayment";
import CheckoutPage from "./pages/CheckoutPage";
import ShippingPage from "./pages/ShippingPage";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "./store/auth/auth-slice";
import { getToken, logOut } from "./utils/auth";
import CategoryPage from "./pages/CategoryPage";
import UnauthorizePage from "./pages/UnauthorizePage";
import RequiredAuthPage from "./pages/RequireAuthPage";
import { permissions } from "./constants/permissions";
import CampaignUpdate from "./modules/campaign/CampaignUpdate";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const CampaignView = lazy(() => import("./modules/campaign/CampaignView"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const LayoutOnlyDashboard = lazy(() => import("./layout/LayoutOnlyDashboard"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

const customStyles = {
  content: {},
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("🚀 ~ file: App.js:26 ~ App ~ user:", user);
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();

      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        authUpdateUser({});
        logOut();
      }
    }
  }, [dispatch, user]);

  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutOnlyDashboard></LayoutOnlyDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        </Route>

        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route path="/admin" element={<AdminPage></AdminPage>}></Route>

          <Route
            element={
              <RequiredAuthPage
                allowPermissions={[permissions.campaign.CREATE_CAMPAIGN]}
              ></RequiredAuthPage>
            }
          >
            <Route
              path="/start-campaign"
              element={<StartCampaignPage></StartCampaignPage>}
            ></Route>
          </Route>

          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>

          <Route
            element={
              <RequiredAuthPage
                allowPermissions={[permissions.category.CREATE_CATEGORY]}
              ></RequiredAuthPage>
            }
          >
            <Route
              path="/category"
              element={<CategoryPage></CategoryPage>}
            ></Route>
          </Route>

          <Route
            path="/unauthorize"
            element={<UnauthorizePage></UnauthorizePage>}
          ></Route>

          <Route
            path="/manage/update-camp"
            element={<CampaignUpdate></CampaignUpdate>}
          ></Route>
        </Route>

        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
