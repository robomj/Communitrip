import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Button } from "react-bootstrap";
import styled from 'styled-components';

export const Editstyle=styled.div`
margin: auto;
width:60%;
height: 100%;
margin-top: 5%;
background: #f5cd79;
border: 1px solid black;
border-radius: 20px;
text-align: center;
`
export const Input = styled.input`
width:80%;
height:60%;
min-height:40px;
`
export const Emails = styled.div`
width:80%;
height:60%;
min-height:40px;
background-color: white;
border:1px solid black;
`
export default function EditProfile(props) {
  const [editInfo, setEditInfo] = useState({
    name: '',
    email: props.userinfo.email,
    password: '',
    newpassword:'',
    samepassword:''
  });
  const handleInputValue = (key) => (e) => {
    setEditInfo({ ...editInfo, [key]: e.target.value });
  };
  const navigate= useNavigate();
  const handleEdit = () => {
    
    if(editInfo.name !=='' && editInfo.password !== '' && editInfo.newpassword !== '' && editInfo.samepassword !==''){
      axios.post('http://localhost:8080/users/editprofile',{
        name: editInfo.name,
        password: editInfo.newpassword,
        email: editInfo.email,
      }).then(props.userinfo.name = editInfo.name,props.userinfo.password = editInfo.password)   
    }
    navigate('/mypage')
  };
  //console.log(editInfo)
  return (
    <Editstyle>
      <center>
        <h3>회원정보 수정</h3>
        
        <div>이름 : </div><Input type="text" onChange={handleInputValue('name')} />
        <br /><br />
        <div>e-mail : </div><Emails>
          {props.userinfo.email}
        </Emails>
        <br />
        
        <div>현재 비밀번호 : </div><Input type="password" onChange={handleInputValue('password')} />
        
        <br /><br />
        
        <div>비밀번호 수정 : </div> <Input type="password" onChange={handleInputValue('newpassword')} />
        
        <br /><br />
        
        <div>비밀번호 수정확인 : </div>  <Input type="password" onChange={handleInputValue('samepassword')} />
        
        <br /><br /><br /><br />
        <div>
        <Button variant="outline-primary" className='edit-button' onClick={handleEdit} >
          회원정보 수정하기
        </Button>
        <br /><br /><br />
        </div>
      </center>
    </Editstyle>
  )
}