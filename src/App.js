import "./App.css";
import styled from "styled-components";
import logo from "../src/asset/Group 220.png";
import img1 from "../src/asset/Group 195.png";
import img2 from "../src/asset/Group 228.png";
import img3 from "../src/asset/Group 114.png";
import img4 from "../src/asset/Group 205.png";
import img5 from "../src/asset/Group 39.png";
import img6 from "../src/asset/Group 64.png";
import img7 from "../src/asset/Group 55.png";
import img8 from "../src/asset/Group 134.png";
import colan from "../src/asset/Group 86.png";
import social from "../src/asset/fb.png";
import Item from "../src/component/items/item";

function App() {
  return (
    <div className="App">
      <Container>
        <Section_1>
          <Nav>
            <Logo>
              <img alt="cri" src={logo}></img>
              <h3>organic</h3>
            </Logo>
            <Nav_item>
              <a className="active" href="#home">
                Home
              </a>
              <a href="#Products">Products</a>
              <a href="#Blog">Blog</a>
              <a href="#about">About Us</a>
              <button type="button">Contact</button>
            </Nav_item>
          </Nav>
          <Content>
            <Left>
              <span>Healthy life with</span>
              <h3>Nature Organic</h3>
              <p>
                Vegetables are the edible parts of a plant that is used in
                cooking or can be eaten now.
              </p>
              <strong>Explore now</strong>
            </Left>
            <Right>
              <Img1>
                <img alt="cri" src={img1}></img>
              </Img1>
              <Img2>
                <img alt="cri" src={img2}></img>
              </Img2>
            </Right>
          </Content>
        </Section_1>

        <Section_2>
          <Img3>
            <img alt="cri" src={img3}></img>
          </Img3>
          <Title>
            <h3>Welcome to Nature</h3>
          </Title>
          <Description>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Description>
        </Section_2>
        <Section_3>
          <Box_1>
            <Item />
          </Box_1>
          <Box_2>
            <img alt="cri" src={img4}></img>
          </Box_2>
          <Box_3>
            <Item />
          </Box_3>
          <Box_4>
            <Item />
          </Box_4>
        </Section_3>
        <Section_4>
          <Title>
            <h3>Proudly presented by</h3>
          </Title>
          <Description>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Description>
        </Section_4>
        <Section_5>
          <Imgs>
            <Imgs1>
              <img alt="cri" src={img5}></img>
            </Imgs1>
            <Imgs2>
              <img alt="cri" src={img6}></img>
            </Imgs2>
            <Imgs3>
              <img alt="cri" src={img7}></img>
            </Imgs3>
            <Imgs4>
              <img alt="cri" src={img6}></img>
            </Imgs4>
            <Imgs5>
              <img alt="cri" src={img5}></img>
            </Imgs5>
          </Imgs>
          <Ellipse1>
            <Ellipse_1></Ellipse_1>
            <Ellipse_2></Ellipse_2>
            <Ellipse_1></Ellipse_1>
            <Ellipse_1></Ellipse_1>
          </Ellipse1>
        </Section_5>
        <Section_6>
          <Left_content>
            <img alt="cri" src={img8}></img>
          </Left_content>
          <Right_contentTop>
            <Colan_logo>
              <img alt="cri" src={colan}></img>
            </Colan_logo>
            <Profile_photo>
              <img
                alt="cri"
                src="https://www.w3schools.com/howto/img_avatar2.png"
              ></img>
            </Profile_photo>
            <Profile_name>
              <h3>Jane Doe</h3>
              <p>🌟 🌟 🌟 🌟 🌟</p>
            </Profile_name>
            <Review>
              <p>
                Thank you for all the amazing produce and products you deliver
                each week… you make my life so easy an bring goodness into our
                family eating. I’ve been roasting a lot of brussel sprouts and
              </p>
            </Review>
            <Ellipse2>
              <Ellipse2_2></Ellipse2_2>
              <Ellipse2_1></Ellipse2_1>
              <Ellipse2_1></Ellipse2_1>
              <Ellipse2_1></Ellipse2_1>
            </Ellipse2>
          </Right_contentTop>
          <Right_contentBottom>
            <h3>Subscribe to Our Newsletter</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Subscribe>
              <Email>
                <p>Enter your email address</p>
              </Email>
              <Button>
                <p>Subscribe</p>
              </Button>
            </Subscribe>
          </Right_contentBottom>
        </Section_6>
        <Section_7>
          <Img3>
            <img alt="cri" src={img3}></img>
          </Img3>
          <Title>
            <h3>Read Our Blog</h3>
          </Title>
          <Description>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Description>
        </Section_7>
        <Blogs>
          <Blog1>
            <img
              alt="cri"
              src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/727d9732-3e11-42ee-a5eb-fc9ce16edba5.png"
            ></img>
            <h3>Blog Post One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <span>Read More</span>
          </Blog1>
          <Blog2>
            <img
              alt="cri"
              src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/be9804d2-0ddd-496e-9ba4-2ad9731288da.png"
            ></img>
            <h3>Blog Post One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <span>Read More</span>
          </Blog2>
          <Blog3>
            <img
              alt="cri"
              src="https://cdn.zeplin.io/60b0effd58b7857a19be7fc2/assets/727d9732-3e11-42ee-a5eb-fc9ce16edba5.png"
            ></img>
            <h3>Blog Post One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <span>Read More</span>
          </Blog3>
        </Blogs>
      </Container>
      <Footer>
        <Organic>
          <Organic_top>
            <img alt="cri" src={logo}></img>
            <h3>Organic</h3>
          </Organic_top>
          <Organic_content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </Organic_content>
          <Line></Line>
        </Organic>
        <Information_1>
          <Information_1_top>
            <h3>Information</h3>
          </Information_1_top>
          <Line2></Line2>
          <Information_1_content>
            <Information_1_content_left>
              <p>About Us</p>
              <p>Products</p>
              <p>Contact Us</p>
              <p>Terms of Service</p>
            </Information_1_content_left>
            <Information_1_content_right>
              <p>About Us</p>
              <p>Products</p>
            </Information_1_content_right>
          </Information_1_content>
        </Information_1>
        <Follow>
          <Follow_Title>
            <h3>Follow Us</h3>
          </Follow_Title>
          <Line2></Line2>
          <Fb>
          <img alt="cri" src={social}></img>
          </Fb>
        </Follow>
      </Footer>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 0 99.4px;
  padding: 18.5px 117px 106px 139px;
  background-image: linear-gradient(to bottom, #f1fefe, rgba(241, 254, 254, 0));
`;
const Section_1 = styled.div``;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30%;
  }
  h3 {
    margin-left: 15px;
  }
`;

const Nav_item = styled.div`
  .active {
    border-bottom: 2px solid #00dbd0;
  }

  a {
    width: 43px;
    height: 21px;
    margin: 24px;
    font-family: LibreBaskerville;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #374b5c;
  }
  a:hover {
    text-decoration: none;
  }
  button {
    border-radius: 10px;
    border: 2px solid #00dbd0;
    background: none;
    color: #374b5c;
  }
`;

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  span {
    width: 256px;
    height: 48px;
    font-family: LibreBaskerville;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #374b5c;
  }
  h3 {
    width: 404px;
    height: 74px;
    font-family: LibreBaskerville;
    font-size: 56px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    color: #374b5c;
  }
  p {
    width: 389px;
    height: 54px;
    margin: 35px 175px 35px 0;
    font-family: LibreBaskerville;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: left;
    color: #374b5c;
  }
  strong {
    width: 220px;
    height: 54px;
    margin: 35px 344px 115px 0;
    padding: 14px 64px 16px 48px;
    border-radius: 10px;
    background-color: #00dbd0;
    color: #ffffff;
    cursor: pointer;
  }
`;
const Right = styled.div``;
const Img1 = styled.div`
  img {
    width: 250px;
    height: 460px;
    position: absolute;
    left: 53%;
  }
`;
const Img2 = styled.div`
  width: 350px;
  height: 340px;
  padding: 64.5px 65.3px 65px 66px;
  border: solid 3px #00dbd0;
`;

const Section_2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const Img3 = styled.div``;
const Title = styled.div`
  h3 {
    width: 309px;
    height: 48px;
    font-family: LibreBaskerville;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #374b5c;
  }
`;
const Description = styled.div`
  p {
    width: 568px;
    height: 42px;
    font-family: LibreBaskerville;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
  }
`;

const Section_3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap;
`;
const Box_1 = styled.div``;
const Box_2 = styled.div`
  img {
    width: 200.7px;
    height: 210.9px;
    margin: 40px;
    ${"" /* padding: 52.4px 51.7px 21px 51px;// */}
    border-radius: 20px;
  }
`;

const Box_3 = styled.div``;
const Box_4 = styled.div``;

const Section_4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;
const Section_5 = styled.div``;
const Imgs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
`;
const Imgs1 = styled.div``;
const Imgs2 = styled.div``;
const Imgs3 = styled.div``;
const Imgs4 = styled.div``;
const Imgs5 = styled.div``;

const Ellipse1 = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
`;

const Ellipse_1 = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 18px 0 0;
  background-color: #374b5c;
  border-radius: 50%;
`;
const Ellipse_2 = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 18px 0 0;
  background-color: #00dbd0;
  border-radius: 50%;
`;

const Section_6 = styled.div``;
const Left_content = styled.div`
  position: absolute;
  left: -12%;
  width: 30%;
  img {
    width: 352px;
    height: 1000px;
    margin: 200px 47px 16px 0;
    transform: rotate(30deg);
  }
`;
const Right_contentTop = styled.div`
  ${"" /* width: 70%; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Colan_logo = styled.div`
  img {
    width: 60px;
    height: 50px;
    margin: 101px 162px 30px 162px;
    padding: 0.2px 0px 0 0.4px;
  }
`;
const Profile_photo = styled.div`
  img {
    width: 97.6px;
    height: 97.6px;
    margin: 30px 143.4px 18.5px 143px;
    object-fit: contain;
    border-radius: 50%;
  }
`;
const Profile_name = styled.div`
  h3 {
    width: 105px;
    height: 35px;
    margin: 18.5px 138px 16px 141px;
    font-family: LibreBaskerville;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: left;
    color: #374b5c;
  }
  p {
    margin-left: 142px;
  }
`;
const Review = styled.div`
  width: 542px;
  height: 101px;
  margin: 20px 32.3px 22px;
  font-family: LibreBaskerville;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: normal;
  text-align: center;
  color: #374b5c;
`;
const Ellipse2 = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
`;
const Ellipse2_2 = styled.div`
  width: 11px;
  height: 11px;
  margin: 0 7px 0 0;
  background-color: #00dbd0;
  border-radius: 50%;
`;
const Ellipse2_1 = styled.div`
  width: 11px;
  height: 11px;
  margin: 0 7px 0 8px;
  border: solid 1px #00dbd0;
  border-radius: 50%;
`;

const Right_contentBottom = styled.div`
  ${"" /* width: 70%; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    width: 447px;
    height: 48px;
    margin: 207px 75.3px 19px 84.3px;
    font-family: LibreBaskerville;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #374b5c;
  }
  p {
    width: 568px;
    height: 42px;
    margin: 19px 19.3px 66px;
    font-family: LibreBaskerville;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
  }
`;

const Subscribe = styled.div`
  display: flex;
  justify-content: center;
`;
const Email = styled.div`
  width: 10%;
  p {
    width: 196px;
    height: 24px;
    margin: 21px 149.5px 24px 0;
    font-family: LibreBaskerville;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
  }
`;
const Button = styled.div`
  width: 167px;
  height: 69px;
  margin: 0 0 0 149.5px;
  padding: 21px 45.5px 24px;
  border-radius: 30px;
  background-color: #00dbd0;
  p {
    width: 76px;
    height: 24px;
    font-family: LibreBaskerville;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin: 0px;
  }
`;

const Section_7 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  h3 {
    text-align: center;
  }
`;
const Blogs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;
const Blog1 = styled.div`
  img {
    width: 278px;
    height: 195px;
    margin: 0 0 18px;
    object-fit: contain;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    width: 112px;
    height: 24px;
    margin: 18px 83px 9px;
    font-family: LibreBaskerville;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #00dbd0;
  }
  p {
    width: 190px;
    height: 57px;
    margin: 9px 44px 11px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
  }
  span {
    width: 68px;
    height: 19px;
    margin: 11px 105px 10.5px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
    border-bottom: 2px solid #00dbd0;
  }
`;
const Blog2 = styled.div`
  img {
    width: 278px;
    height: 195px;
    margin: 0 0 18px;
    object-fit: contain;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    width: 112px;
    height: 24px;
    margin: 18px 83px 9px;
    font-family: LibreBaskerville;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #00dbd0;
  }
  p {
    width: 190px;
    height: 57px;
    margin: 9px 44px 11px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
  }
  span {
    width: 68px;
    height: 19px;
    margin: 11px 105px 10.5px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
    border-bottom: 2px solid #00dbd0;
  }
`;
const Blog3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 278px;
    height: 195px;
    margin: 0 0 18px;
    object-fit: contain;
  }
  h3 {
    width: 112px;
    height: 24px;
    margin: 18px 83px 9px;
    font-family: LibreBaskerville;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #00dbd0;
  }
  p {
    width: 190px;
    height: 57px;
    margin: 9px 44px 11px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
  }
  span {
    width: 68px;
    height: 19px;
    margin: 11px 105px 10.5px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #374b5c;
    border-bottom: 2px solid #00dbd0;
  }
`;

const Footer = styled.div`
  background-image: url("https://github.com/danish-ally/Organic_Portfolio/blob/main/public/images/Group%20229.png?raw=true");
  height: 400px;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-evenly;
`;
const Organic = styled.div``;
const Organic_top = styled.div`
  display: flex;
  margin-left: 70px;
  img {
    margin-top: 100px;
  }
  h3 {
    margin-top: 118px;
    margin-left: 10px;
    width: 109px;
    height: 41px;
    font-family: LibreBaskerville;
    font-size: 31px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;
const Organic_content = styled.div`
  p {
    width: 319px;
    height: 44px;
    margin: 31.5px 0 32.3px 71.5px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;
const Line = styled.div`
  width: 77px;
  height: 0;
  margin: 32.3px 241.5px 0 72px;
  border: solid 2px #00dbd0;
}
`;
const Information_1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 126px;
  margin-left: 50px;
`;
const Information_1_top = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    width: 91px;
    height: 21px;
    margin: 0 105px 14.3px 1px;
    font-family: LibreBaskerville;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;
const Line2 = styled.div`
  width: 54px;
  height: 0;
  margin: 0;
  border: solid 2px #00dbd0;
}
`;
const Information_1_content = styled.div`
  display: flex;
  ${"" /* flex-direction: column; */}
`;
const Information_1_content_left = styled.div`
  display: flex;
  flex-direction: column;
  p {
    width: 96px;
    height: 19px;
    margin: 8.7px 24px 14px 1px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;
const Information_1_content_right = styled.div`
  display: flex;
  flex-direction: column;
  p {
    width: 96px;
    height: 19px;
    margin: 8.7px 125px 14px 1px;
    font-family: LibreBaskerville;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;
const Follow = styled.div`
  margin-top: 125px;
`;
const Follow_Title = styled.div`
  h3 {
    width: 73px;
    height: 21px;
    margin: 0 0 14.3px;
    font-family: LibreBaskerville;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
`;

const Fb = styled.div`
    img{
      width: 30%;
    height: 20px;
    margin-top: 10px;
    }
`;
export default App;
