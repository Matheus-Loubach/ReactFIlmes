import styled, {css} from "styled-components";
export const Container = styled.section`

position: absolute;
backdrop-filter: blur(2px);
width: 100%;
height: 160%;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 5;   
display: flex;
align-items: center;
justify-content: center;
background: rgba(17, 18, 17, 0.95);
background: linear-gradient(90deg, #ff0000 0%, rgba(17,18,17,0.95) 0%);
opacity: 0;
pointer-events: none;
transform: translateY(50px);
transition: .5s;
> img {
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: .7s;
  transform: rotate(40deg);
  width: 50px;
  border-radius: 50px;
  filter: invert(100%);
  margin-bottom: 60px;
}
img:hover{
  cursor: pointer;
}

h1{
  color: #fff;
  font-weight: bold;
  font-family: fantasy sans-sanrif;
  font-size: 2.0em;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  transform: scale(0.7);
  transition: .7s;
}
nav ul{
  list-style-type: none;
  margin-top: 10%;
}
nav ul a{
  text-decoration: none;
}

nav li{
  font-family: 'Montserrat';
  margin-bottom: 10%;
  font-size: 1.5em;
  background-color: #ffffff21;
  border-radius: 10px;
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
}

nav li:hover{
  background-color: #ffffff;
  color: #000000;
}

nav li img{
  margin-left: 25px;
}
${({ IsVisible }) => IsVisible && css`
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0px);
  > img {
    transform: rotate(0deg);
  }
  nav {
    transform: scale(1);
  }
`}
`;