import React from "react";
import styled from "styled-components";
import item from "../../asset/Group 207.png";

function Item() {
  return (
    <Container>
      <img alt="cri" src={item}></img>
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 200.7px;
    height: 210.9px;
    margin: 40px;
    border-radius: 20px;
  }
`;

export default Item;
