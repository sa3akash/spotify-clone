import React, {useEffect} from "react";
import { FaUsers } from "react-icons/fa";
import styled from "styled-components";
import AudioList from "./AudioList";
import Banner from "./Banner";

const MainContainer = () => {
  useEffect(() => {
    //List Active work start
    const allLi = document.getElementById("menuId").querySelectorAll("li");
    function liActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", liActive));
    //List Active work end
  }, []);
  return (
    <Main>
      <Banner />
      <MenuList>
        <ul id="menuId">
          <li><a href="#">popular</a></li>
          <li><a href="#">albums</a></li>
          <li><a href="#">songs</a></li>
          <li><a href="#">fans</a></li>
          <li><a href="#">about</a></li>
        </ul>
      <p>
        <i><FaUsers /></i> 12.3M <span> followers</span>
      </p>
      </MenuList>
      
     <AudioList/>
    </Main>
  );
};

export default MainContainer;

const Main = styled.div`
  height: 100vh;
  z-index: 1;
  flex-grow: 1;
  background: rgba(34, 34, 34, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 0.27);
`;

const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  text-transform: capitalize;
  color: #848484;
  background: #2c2c2c;
  ul{
    list-style: none;
    display: flex;
    align-items: center;
    li{
      margin: 0 25px;
      position: relative;
      a{
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        &::before{
          content: '';
          position: absolute;
          bottom: -20px;
          left: 10px;
          width: 0px;
          height: 5px;
          border-radius: 10px;
          background-color: #f1f1f1;
        }
      }
      &:hover, &.active{
        color: #f1f1f1;
        a::before{
          width: 30px;
          transition: all 0.3s cubic-bezier(0.175,0.885,0.32,0.27);
          
        }
      }
    }
  }
  p{
    color: #f1f1f1;
    font-size: 16px;
    i{
      margin-right: 5px;
      font-size: 14px;
    }

    span {
      font-size: 14px;
      color: #848484;
      margin-left: 5px;
      text-align: center;
    }
  }
`;


