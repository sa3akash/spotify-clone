import React from "react";
import styled from "styled-components";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <BannerContainer>
      <img src="/img/artist.jpg" alt="banner-img" />
      <Content>
        <div className="breadCrud">
          <p>
            Home <span>/Popoular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-Ha</h2>
              <div>
                <img src="/img/check.png" alt="check" />
              </div>
            </div>
            <div className="icon-p">
              <i>
                <FaHeadphones />
              </i>
              <p>
                11,185,145 <span>Monthly Listener</span>
              </p>
            </div>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              <span>Following</span>
            </a>
          </div>
        </div>
      </Content>

      <BackgroundLaywot></BackgroundLaywot>
    </BannerContainer>
  );
};

export default Banner;

const BackgroundLaywot = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
`;

const BannerContainer = styled.div`
  height: 300px;
  color: #f1f1f1;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    filter: grayscale(100);
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const Content = styled.div`
  padding: 20px 30px;
  .breadCrud {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 18px;
      color: #848484;
      font-weight: bold;
      span {
        font-size: 20px;
        font-weight: bold;
        color: #f1f1f1;
      }
    }
    i {
      font-size: 28px;
      cursor: pointer;
    }
  }
  .artist {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 22;
    padding: 20px 30px;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .name {
        display: flex;
        align-items: center;
        position: relative;
        padding: 10px 0;
        h2 {
          font-size: 32px;
          font-weight: bold;
        }
        div {
          position: absolute;
          top: 22px;
          left: 80px;
          width: 30px;
          height: 30px;
          border-radius: 100%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            filter: grayscale(0);
          }
        }
      }
      .icon-p {
        display: flex;
        align-items: center;

        i {
          font-size: 16px;
          margin-right: 10px;
        }
        p {
          color: #848484;
          font-weight: bold;
          span {
            font-weight: bold;
            color: #f1f1f1;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      a {
        &:nth-child(1) {
          text-decoration: none;
          padding: 8px 28px;
          color: white;
          font-weight: bold;
          font-size: 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          transition: all 0.2s;
          background: #31a31d;
          &:hover {
            background-color: #289714;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
          }
        }
        &:nth-child(2) {
          text-decoration: none;
          padding: 8px 28px;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          display: flex;
          font-size: 20px;
          font-weight: bold;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          border: 1px solid rgba(255, 255, 255, 0.3);
          &:hover {
            background: rgba(0, 0, 0, 0.6);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
          }
          i {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;
