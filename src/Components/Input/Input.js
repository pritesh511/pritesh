import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { addItem } from "../Action/addItem";
import { Button, Form, FormBlock, FormContainer, InputName } from "./Style";

const Input = () => {
  const dispatch = useDispatch();
  const selectedOption = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addItem(firstName, lastName, gender));
  };

  return (
    <>
      <FormContainer>
        <FormBlock>
          <Form onSubmit={handleForm}>
            <InputName
              placeholder="FirstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></InputName>
            <InputName
              placeholder="LastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></InputName>
            <Select
              defaultValue={gender}
              onChange={(e) => {
                setGender(e.value);
              }}
              options={selectedOption}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </FormBlock>
      </FormContainer>
    </>
  );
};

export default Input;
