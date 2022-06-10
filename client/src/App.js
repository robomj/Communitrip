import React,{ useEffect, useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Edit_profile from './pages/Edit_profile'
import Mypage from './pages/Mypage';
import Main from "./pages/Main";
import axios from 'axios';

function App() {
    const navigate = useNavigate();
    const [userinfo, setUserinfo] = useState({
      name: '',
      email:''
    });
    console.log(userinfo)
    const isAuthenticated = () => {
      axios.get('http://localhost:8080/users/auth').then((res) =>{
        
        if(res.data.data.userInfo !==null){
          const {name,email,password}= res.data.data.userInfo;
          setUserinfo({name,email,password});
          setIsLogin(true);
        }
        
      }).catch( error => {
        console.log(error);
      })
    };
    const handleResponseSuccess = () => {
      isAuthenticated();
    };
    const handleLogout =() =>{
      axios.post('http://localhost:8080/users/logout').then((res)=>{
        setUserinfo(null);
        setIsLogin(false);
        navigate('/')
      })
    }
    const [isLogin, setIsLogin] = useState(false);
    const [onLoginModal, setOnLoginModal]=useState(false)
    const onLoginModalHandler =() =>{
      setOnLoginModal(!onLoginModal);
    }
  
    useEffect(() => {
      isAuthenticated();
    }, []);

    return (
        <div className="App">
        <Navbar  bg="light" variant="light" className="nav">
          <Container>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="nav justify-content-end" >
              <Nav.Link 
                href="/"
                onClick={() => {
                  navigate('/');
                }}
              >
                게시판
              </Nav.Link>
              <Nav.Link 
                href="myboard"
                onClick={() => {
                  /*navigate("/mypage");*/
                }}
              >
                나의게시판
              </Nav.Link>
              <Nav.Link 
                href="mypage"
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                마이페이지
              </Nav.Link>
              
              <Nav.Link 
                onClick={() => {
                onLoginModalHandler()
                }}
              >
                Login
                {onLoginModal ? <Login /> :null}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />        
<Routes>
    <Route path="/" element={<Main />} userinfo = {userinfo} />
    <Route path="/mypage" element={<Mypage userinfo ={userinfo} handleLogout={handleLogout} />} />
    <Route path="/login" element={<Login handleResponseSuccess={handleResponseSuccess}/>} />
    <Route path="/edit_profile" element={<Edit_profile userinfo={userinfo} />} />
</Routes>
</div>
    )
}

export default App;
/*Nav.Link
href="my-Wise-saying"
onClick={() => {
  navigate("/my-Wise-saying");
}}
>
Myboard
</Nav.Link>*/
