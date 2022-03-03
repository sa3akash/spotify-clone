import React, { useEffect } from "react";
import styled from "styled-components";

const Menu = ({ title, menuObject }) => {
  useEffect(() => {
    //List Active work start
    const allLi = document.querySelector("ul").querySelectorAll("li");
    function liActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", liActive));
    //List Active work end
  }, []);
  return (
    <MenuContainer>
      <p>{title}</p>
      <List id="list">
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </List>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  margin: 15px 0;
  p {
    color: #848484;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
    @media (max-width: 550px) {
      display: none;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  
  li {
    margin: 8px 0px;
    width: 100%;
    position: relative;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #848484;
      padding: 5px 0;
      font-size: 18px;
      transition: 0.2s;
      &:hover {
        color: #f1f1f1;
      }
      i {
        margin-right: 10px;
        font-size: 20px;
      }
     
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -15px;
      background-color: #49e12e;
      width: 0px;
      height: 100%;
      transition: 0.2s;
    }
    &:hover {
      &::before {
        width: 5px;
      }
    }

    //active Class Work start

    &.active {
      a {
        color: #f1f1f1;
      }
      &::before {
        width: 5px;
      }
    }
    //active Class Work end
  }
  @media (max-width: 550px) {
     li{
      margin: 35px 0 !important;
     }
     a{
        i{
          font-size: 28px !important;
          margin: 0;
          padding: 0;
        }
        span {
          display: none;
        }
    }
    }
    
`;
