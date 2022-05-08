import styled from "styled-components";

const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
`;
const FormBlock = styled.div``;
const Form = styled.form`
  padding: 24px;
  border: 1px solid #e4e4e5;
  display: flex;
  flex-direction: column;
  .select {
    height: 41px;
    width: 100%;
  }
`;
const InputName = styled.input`
  padding: 12px 16px;
  margin: 0 0 12px 0;
  border-radius: 6px;
  border: 1px solid #e4e4e5;
  :focus {
    outline: none;
    border-color: #3c7ce8;
    box-shadow: 0 0 0 3px #afcdff, 1px 1px 2px 0 rgb(0 0 0 / 5%);
  }
`;
const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;
  margin: 16px 0 0 0;
  padding: 8px 18px;
  border-radius: 26px;
  background-color: rgb(60, 124, 232);
  box-shadow: rgb(0 0 0 / 12%) 1px 0px 3px 0px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: all 300ms ease 0s;
`;

export { FormContainer, FormBlock, Form, InputName, Button };
