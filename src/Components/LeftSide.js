import React from "react";
import styled from "styled-components";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import Menu from "./Menu";
import { MenuList } from "./MenuList";
import MenuPlaylists from "./MenuPlaylists";
import TrackList from "./TrackList";

const LeftSide = () => {
  return (
    <LeftMenu>
      <LogoContainer>
        <i>
          <FaSpotify />
        </i>
        <h2>SA2_Music</h2>
        <i className="search-icon">
          <FaEllipsisH />
        </i>
      </LogoContainer>
      <SearchBox>
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </SearchBox>
      {/* Menu render */}
      <Menu title={"Menu"} menuObject={MenuList} />
      {/* Menu playlist */}
      <MenuPlaylists />
      {/* TrackList */}
      <TrackList />
    </LeftMenu>
  );
};

export default LeftSide;

const LeftMenu = styled.div`
  width: 280px;
  height: 100%;
  min-height: 100vh;
  background: rgba(34, 34, 34, 0.6);
  backdrop-filter: blur(10px);
  padding: 20px 15px;
  transition: all 0.3s cubic-bezier(0.175,0.885,0.32,0.27);
  overflow: hidden;
  z-index: 1;
  @media (max-width: 550px) {
    width: 64px;
    max-width: 64px;
  }
`;
const LogoContainer = styled.div`
  color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  i:nth-child(1) {
    font-size: 30px;
  }
  i:nth-child(3) {
    font-size: 20px;
  }
  @media (max-width: 550px) {
    
   h2{
     display: none;
   }
   .search-icon{
     display: none;
   }
  }
`;
const SearchBox = styled.div`
  width: 100%;
  height: 45px;
  color: #848484;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    padding-left: 45px;
    font-size: 14px;
    font-weight: bold;
  }
  i {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #848484;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    font-size: 22px;
  }
  @media (max-width: 550px) {
    
   display: none;
   }
`;
