import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-bottom: 0;  
`;

export const Button = styled.button`
    padding: 0 10px;
    cursor: pointer;
    border-color: #00000024;
    border-radius: 4px;
    background-color: #00000005;
    font-size: 25px;
    margin-left: 15px;

    &:hover, &:focus {

        background-color: #2196f3;
        transform: scale(1.22);
    }  

    &::first-letter {
      text-transform: uppercase;
    }
`;