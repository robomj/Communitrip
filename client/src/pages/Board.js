import React,{ useState } from "react";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import axios from 'axios';
import Boardpostform from './Boardpostform';



export const Allpage = styled.div`
width : 99vw;
height : 90vh;
margin: 0 auto;
`
export const Options = styled.div`
width : 99vw;
height : 4vh;
background-color : green;
`
export const Boardbutton = styled.button`
margin-right : 25px
`
export const ViewBoard =styled.div`
width : 99vw;
height : 90vh;
overflow : auto;
background-color : skyblue;
`
export const Vboard = styled.div`
display: table;
margin: 0 auto;
width: 99%;
height: calc(100vh - 4rem);
`
export const Vboards = styled.div`
background-color: #bc9eff0e;
padding: 5rem;
width: 99%;
min-height: 90vh;
height: 90%;
`
export const Postbutton = styled.button`
float: right;
`
export default function Board(props){
console.log(props.postsinfo)
const navigate = useNavigate();
return(
<Allpage>
    <Options>
        태그선택  게시글 나열 방식  <Postbutton onClick={() => {navigate('/create_post');}}>글쓰기</Postbutton>
    </Options>
    <ViewBoard>
    <Vboard>
      <Vboards>
      {props.postsinfo&&props.postsinfo.map((posts)=>
            <Boardbutton>
            <Boardpostform 
            posts={posts}
            key={posts.id}
            />
            </Boardbutton>
            )}
      </Vboards>
    </Vboard>
    </ViewBoard>
</Allpage>


)
}

        /*{postsinfo.map((posts, idx)=>(
            <Boardpostform 
            posts={posts}
            key={idx}
            />))}*/