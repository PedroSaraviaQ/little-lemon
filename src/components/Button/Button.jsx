import styled from "styled-components";

function Button(props) {
  const Button = styled.button`
    background-color: #f4ce14;
    font-size: 18px;
    font-weight: bold;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 16px;
  `;

  return <Button>{props.children}</Button>;
}

export default Button;
