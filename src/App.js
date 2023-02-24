import "./App.css";
import { lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router";
import MainLayout from "./pages/main";
import FPSpinner from "./comps/fpspinner";

const Home = lazy(() => import("./pages/home"));
const OpenTicket = lazy(() => import("./pages/open-ticket"));
const SendEmail = lazy(() => import("./pages/send-email"));
const AddItem = lazy(() => import("./pages/add-item"));
const Settings = lazy(() => import("./pages/settings"));
const Profile = lazy(() => import("./pages/profile"));

function App() {
  return (
    <MainLayout
      Page={
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/open-ticket" element={<OpenTicket />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      }
    />
  );
}

function Wrapper() {
  return (
    <>
      <Suspense fallback={<FPSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
