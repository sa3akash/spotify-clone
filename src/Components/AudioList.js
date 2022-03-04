import React,{useState,useEffect} from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
import MusicPlayer from "./MusicPlayer";
import { Songs } from "./Songs";

const AudioList = () => {

  const [music , setMusic]=useState(Songs) //final music component output
  const [songSrc , setSong]=useState(Songs[0].song) //audio player using
  const [imageSrc , setImage]=useState(Songs[0].imgSrc) //audio player using

  // music component conditional render
  const changeSong = (id)=>{
    Songs.forEach((item)=>{
     if(item.id===id){
      item.favourite = !item.favourite
     }
    })
    setMusic([...Songs])
  }

  // user effects 

  useEffect(() => {
    //audio Active work start
    const allLi = document.querySelectorAll(".songs");
    function liActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", liActive));
    //audio Active work end
  }, []);

// music player work

  const changeMusic = (song,imgSrc)=>{
    setSong(song)
    setImage(imgSrc)
  }

  return (
    <AudioContainer>
      <h2>
        the list<span>{Songs.length} songs</span>
      </h2>
      <SongsContainer>
        {music &&
          music.map((music, index) => (
            <div className="songs" key={music?.id} onClick={()=> changeMusic(music?.song, music?.imgSrc)}>
              <div className="count">#{index+1}</div>
              <ContantBox>
                <div className="imgBox">
                  <img src={music?.imgSrc} alt={music?.songName} />
                </div>
                <div className="section">
                  <p className="songName">{music?.songName} <span className="spanArtist">{music?.artist}</span></p>
                  <div className="hits">
                    <p><i><FaHeadphones /></i>95,490,102</p>
                    <p><i><FaRegClock /></i>3.04</p>
                    <div className="favorite" onClick={()=> changeSong(music?.id)}>

                      {
                          music?.favourite ?
                          <i><FaHeart /></i>
                          : 
                          <i><FaRegHeart /></i>
                      }
                      
                    </div>
                  </div>
                </div>
              </ContantBox>
            </div>
          ))}
      </SongsContainer>
      <MusicPlayer song={songSrc}  img={imageSrc}/>
    </AudioContainer>
  );
};

export default AudioList;

const AudioContainer = styled.div`
  padding: 10px 30px;
  h2 {
    text-transform: capitalize;
    font-size: 18px;
    color: #f1f1f1;

    span {
      color: #848484;
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;
const SongsContainer = styled.div`
  height: 220px;
  overflow-x: hidden;
  overflow-y: scroll;

  /* background-color: tomato; */
  .songs {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #848484;
    font-weight: 600;
    width: 100%;
    margin: 10px 0;
    padding: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover,
    &.active {
      color: #f1f1f1;
    }
    .count {
      margin-right: 10px;
    }
  }
`;
const ContantBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 5px;
  .imgBox {
    min-width: 45px;
    width: 45px;
    height: 45px;
    border-radius: 0.5em;
    overflow: hidden;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .songName {
      font-size: 18px;
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
    .hits {
      display: flex;
      align-items: center;
      p {
        margin-right: 15px;
        i {
          font-size: 14px;
          margin-right: 5px;
        }
      }
      .favorite {
        color: #49e12e;
        filter: drop-shadow(0 0 4px #49e12e);
      }
    }
  }
`;
