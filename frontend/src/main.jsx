import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";

import Connexion from "./pages/auth/Connexion.jsx";
import store from "./redux/store.js";
import HomePage from "./pages/HomePage.jsx";
import Contact from "./pages/Contact.jsx";
import EventComingPage from "./pages/EventComingPage.jsx";
import EventReplays from "./components/EventReplays.jsx";
import Auth from "./pages/auth/Authenticate.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Connexion />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/agenda" element={<EventComingPage />} />
      <Route path="/replays" element={<EventReplays />} />
      <Route path="/auth" element={<Auth />} />

      {/* default path */}
      <Route path="" index={true} element={<HomePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);