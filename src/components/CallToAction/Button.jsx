import styled from "styled-components";

const Button = styled.button`
  background-color: #f4ce14;
  font-size: 18px;
  font-weight: bold;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 16px;
  @media screen and (max-width: 840px) {
    font-size: 16px;
  }
  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

const CallToAction = (props) => <Button>{props.children}</Button>;

export default CallToAction;
