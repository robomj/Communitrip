import React,{ useEffect, useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Edit_profile from './pages/Edit_profile'
import Mypage from './pages/Mypage';
import Main from "./pages/Main";
import axios from 'axios';
import Board from './pages/Board';
import Boardpostform from './pages/Boardpostform';


function App() {
    const navigate = useNavigate();
    const [userinfo, setUserinfo] = useState({

    });
    const [postsinfo, setPostsinfo]=useState()
    console.log(userinfo)
    const isPosts =() =>{
      axios.get('http://localhost:8080/posts').then((res)=>{ 
      const test = res.data.data    
      setPostsinfo(test)
        }).catch(error =>{
          console.log(error)
        })
    }
    const isAuthenticated = () => {
      axios.get('http://localhost:8080/users/auth').then((res) =>{
        
        if(res.data.data.userInfo !==null){
          const test= res.data.data.userInfo;
          setUserinfo(test);
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
      isAuthenticated();isPosts();
    }, []);

    return (
        <div className="App">
        <Navbar  bg="light" variant="light" className="nav">
          <Container>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="nav justify-content-end" >
              <Nav.Link 
                href="board"
                onClick={() => {
                  navigate('/board');
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
              
<Routes>
    <Route path="/" element={<Main />}  postsinfo={postsinfo} userinfo = {userinfo} />
    <Route path="/mypage" element={<Mypage userinfo ={userinfo} handleLogout={handleLogout} />} />
    <Route path="/login" element={<Login handleResponseSuccess={handleResponseSuccess}/>} />
    <Route path="/edit_profile" element={<Edit_profile userinfo={userinfo} />} />
    <Route path="/board" element={<Board postsinfo={postsinfo} />} />
    <Route path="/boardpostform" element={<Boardpostform  />} />

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
