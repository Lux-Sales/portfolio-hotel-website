import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 0.15rem solid #14274a;
  border-top: none;
  border-radius: 8px;
`;

export const Title = styled.span`
  background-color: #14274a;
  color: #fff;
  text-align: center;
  font-size: 3vw;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1% 0;
`;

export const ImageCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;

  img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .slide-active {
    opacity: 1;
  }

  .span-disabled {
    background-color: transparent;
    border: 1px solid #fff;
  }
`;

export const BulletButtons = styled.div`
  display: flex;
  position: absolute;
  bottom: 3%;
  left: 45%;
  min-width: 7%;
  width: fit-content;
  justify-content: space-around;
  z-index: 1;
  span {
    cursor: pointer;
    background-color: #fff;
    width: 1vw;
    height: 2vh;
    border-radius: 50%;
  }
`;

export const RoomDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4% 7%;

  .dropdown {
    box-shadow: none;
    ul {
      li {
        list-style-type: circle !important;
      }
    }
  }
  .dropdown-title {
    text-transform: uppercase;
    font-weight: 700;
    color: #14274a;
    div {
      display: flex;
      align-items: center;
      white-space: nowrap;
      svg {
        color: #e0b973;
        margin-right: 5%;
        height: 7%;
        width: 7%;
      }
    }
  }
`;
