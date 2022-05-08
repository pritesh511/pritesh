import React from "react";
import { useSelector } from "react-redux";
import { FirstName, LastName, ListIem, Name, Icon } from "../list/Styles";

const InputItem = () => {
  const data = useSelector((state) => state.ItemHandelReducers);
  console.log("data", data);
  return (
    <>
      {data?.state?.map((item, index) => {
        return (
          <>
            <ListIem key={`item_${index}`}>
              <Name>
                <FirstName>
                  {item?.gender === "male"
                    ? "Mr."
                    : item?.gender === "female"
                    ? "Ms."
                    : ""}
                </FirstName>{" "}
                <FirstName>{item?.firstName}</FirstName>{" "}
                <LastName>{item?.lastName}</LastName>
              </Name>
              <Icon>+</Icon>
            </ListIem>
          </>
        );
      })}
    </>
  );
};

export default InputItem;
