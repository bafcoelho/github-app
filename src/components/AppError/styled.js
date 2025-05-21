import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff3f5;

  h1 {
    font-weight: bold;
    font-size: 36px;
    color: #970528;
    margin-bottom: 16px;
  }

  span {
    font-size: 18px;
    color: #970528;
    max-width: 400px;
    line-height: 1.5;
  }
`;