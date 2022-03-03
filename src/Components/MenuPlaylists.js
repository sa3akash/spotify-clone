import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

const MenuPlaylists = () => {
  return (
    <PlayListContainer>
      <NameContant>
        <p>PlayList</p>
        <i>
          <FaPlus />
        </i>
      </NameContant>
      <PlaylistScroll>
        {PlayList &&
          PlayList.map((item) => (
            <PlayListContent key={item.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{item.name}</p>
              <i className="trash">
                <BsTrash />
              </i>
            </PlayListContent>
          ))}
      </PlaylistScroll>
    </PlayListContainer>
  );
};

export default MenuPlaylists;

const PlayListContainer = styled.div`
  margin: 15px 0;
  color: #848484;
  @media (max-width: 550px) {
    display: none;
  }
`;
const NameContant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  cursor: pointer;
  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  i {
    font-size: 16px;
    color: #f1f1f1;
  }
`;

const PlaylistScroll = styled.div`
  height: 180px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`;

const PlayListContent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 0px;
  transition: 0.2s;
    &:hover{
      p,.list{
        color: #f1f1f1;
      }
  }
  p {
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline;
  }
  i {
    font-size: 20px;
  }
  .list {
    margin-right: 10px;
  }
  .trash {
    margin-left: auto;
    transition: 0.2s;
    &:hover{
      color: red;
    }
  }
`;
