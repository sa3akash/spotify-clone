import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";
import MainContainer from "./Components/MainContainer";
import styled from "styled-components";

function App() {
  return (
    <SpotifyMainContainer>
      <LeftSide />
      <MainContainer />
      <RightSide />
      <BackgroundImgContainer></BackgroundImgContainer>
    </SpotifyMainContainer>
  );
}

export default App;

const SpotifyMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
`;
const BackgroundImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(/img/background.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(100);
  z-index: -1;
`;
