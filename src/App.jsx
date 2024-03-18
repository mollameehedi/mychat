
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import Setting from "./pages/setting/Setting";
import Message from "./pages/message/Message";
import Notification from "./pages/notification/Notification";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route element={<RootLayout/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="message" element={<Message/>}/>
              <Route path="notification" element={<Notification/>}/>
              <Route path="setting" element={<Setting/>}/>
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
