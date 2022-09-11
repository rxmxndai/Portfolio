import styled from "styled-components";
import "./home.scss";
import Profile from "../../imgs/profile.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const Home = () => {
  return (
    <Container id="home">
      <Left>
        <div className="wrapper-left">
          <h2 className="intro">Hi, My name is </h2>
          <h1 className="name"> Roman Karki</h1>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item"> Web Developer </div>
              <div className="title-item"> UI/UX Designer </div>
              <div className="title-item"> Data enthusiast </div>
              <div className="title-item"> Tech enthusiast </div>
            </div>
          </div>

          <p className="description">
            I am a web developer specializing in react and node. I design and
            develop websites and web application for wide range of customers. I
            am interested in big data and software development.
          </p>
        </div>

        <svg
          viewBox="0 0 75 75"
          fill="none"
          stroke="green"
          className="scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </Left>

      <Right>
        <div className="img-bg"></div>
        {/* <img src={Profile} alt="" className="img"/>  */}
      </Right>
    </Container>
  );
};

export default Home;