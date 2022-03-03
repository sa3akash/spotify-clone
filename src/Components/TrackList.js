import React from "react";
import styled from "styled-components";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";

const TrackList = () => {
  return (
    <TrackContainer>
      <div className="top">
        <img src="/img/track.png" alt="music-img" />
        <p>
          Sample music
          <br />
          <span>Artist</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </TrackContainer>
  );
};

export default TrackList;

const TrackContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  color: #848484;
  .top {
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
      font-size: 16px;
      color: #f1f1f1;
      span {
        color: #848484;
        font-size: 14px;
      }
    }
    img {
      width: 50px;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    i {
      font-size: 20px;
      transition: 2ms;
      cursor: pointer;
      &:hover {
        color: #f1f1f1;
      }
    }
    input {
      position: relative;
      height: 5px;
      border: none;
      outline: none;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.1);
      appearance: none;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: #49e12e;
        width: 50%;
        height: 100%;
        border-radius: 10px;
        z-index: 2;
        transition: width 200ms linear;
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 10px;
        height: 20px;
        border-radius: 10px;
        background-color: #f1f1f1;
        border: 2px solid #000;
        cursor: pointer;
        position: relative;
        margin: -2px 0 0 0;
        z-index: 9;
        box-sizing: border-box;
        transition: all 0.3s linear;
      }
      &::-moz-progress-bar {
        width: 10px;
        height: 20px;
        border-radius: 10px;
        background-color: #f1f1f1;
        z-index: 9;
        box-sizing: border-box;
        transition: all 0.3s linear;
      }
      &::-moz-range-thumb{
        width: 10px;
        height: 20px;
        border-radius: 10px;
        background-color: #f1f1f1;
        z-index: 9;
        box-sizing: border-box;
        transition: all 0.3s linear;
      }
    }
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
