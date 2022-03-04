import React, { useState, useRef, useEffect } from "react";
import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaShareAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import styled from "styled-components";

const MusicPlayer = ({ song, img }) => {
  const [love, setLove] = useState(false);
  const [playPause, setPlayPause] = useState(false);
  const [durations, setDurations] = useState(0);

  const audioPlayer = useRef() // audio tag
  const progressBar = useRef() // audio progressBar

  const timeCalc = (sec)=>{
    const minites= Math.floor(sec / 60)
    const returnMinite = minites < 10 ? `0${minites}` : `${minites}`
    const secend= Math.floor(sec % 60)
    const returnSec = secend < 10 ? `0${secend}` : `${secend}`

    return(`${returnMinite}:${returnSec}`)
  }

 

  useEffect(()=>{

    const seconds = Math.floor(audioPlayer.current.duration);
    setDurations(seconds)

  },[audioPlayer?.current?.loadedmetadata,audioPlayer?.current?.readyState])



  const changeLoved = () => {
    setLove(!love);
  };
  const changePlayPause = () => {
    const playing = playPause
    if(!playing){
      audioPlayer.current.play()
    }else{
      audioPlayer.current.pause()
    }
    setPlayPause(!playing);
  };


  return (
    <PlayerContainer>
      <div className="playerImage">
        <img src={img} alt="Player img" />
      </div>
      <div className="playerAttribute">
        <audio src={song} preload="metadata" ref={audioPlayer}/>
        <Top>
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {love ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <div className="download">
              <BsDownload />
            </div>
          </div>
          <div className="meddle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {playPause ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forword">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </Top>
        <Bottom>
          <div className="time">00:00</div>
          <input type="range" className="progressbar" ref={progressBar}/>
          <div className="duration">{
          
          durations && timeCalc(durations) ? timeCalc(durations) : '00:00'
          
          
          }</div>
        </Bottom>
      </div>
    </PlayerContainer>
  );
};

export default MusicPlayer;

const PlayerContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  color: #595959;
  .playerImage {
    min-width: 120px;
    width: 120px;
    height: 120px;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .playerAttribute {
    width: 100%;
    padding-left: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  .left {
    display: flex;
    align-items: center;
    font-size: 16px;
    .loved {
      color: #49e12e;
      filter: drop-shadow(0 0 4px #49e12e);
      padding: 5px;
      margin-right: 10px;
      cursor: pointer;
    }
    .download {
      cursor: pointer;
      color: #afa8a8;
      &:hover {
        color: #f1f1f1;
        transition: 0.2s;
      }
    }
  }
  .meddle {
    display: flex;
    align-items: center;
    font-size: 20px;
    i {
      margin: 5px;
      padding: 5px;
      cursor: pointer;
    }
    .back i:nth-child(2),
    .forword i:nth-child(1) {
      color: #9a9a9a;
    }
    .playPause {
      width: 40px;
      min-width: 40px;
      height: 40px;
      background: #f1f1f1;
      color: #000;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 10px;
  .progressbar{
    width: 75%;
    position: relative;
    height: 5px;
    border: none;
    outline: none;
    appearance: none;
    background: rgba(255,255,255,0.1);
    cursor: pointer;
     /* chrome thump word start */
    &::before{
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 50%;
      background: #848484;
      height: var(--progress);
      z-index: 2;
      transition: all .3s ease;
    }
    &::-webkit-slider-thumb{
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border: none;
      outline: none;
      border-radius: 50%;
     
    }
    /* chrome thump word end */
  }
  .time,.duration{
    color: #f1f1f1;
    font-size: 16px;
    font-weight: bold;
  }
`;
