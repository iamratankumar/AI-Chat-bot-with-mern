import Header from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Chat from "./pages/Chat.tsx";
import Page404 from "./pages/Page404.tsx";
import {userAuth} from "./context/AuthContext.tsx";

function App() {
    console.log(userAuth()?.isLoggedIn)

  return (<main>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/*" element={<Page404/>}/>
        </Routes>
      </main>
  )
}

export default App
