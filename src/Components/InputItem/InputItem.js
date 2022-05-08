import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveItem } from "../Action/RemoveItem";
import { FirstName, LastName, ListIem, Name, Icon } from "../list/Styles";

const InputItem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ItemHandelReducers);
  console.log("datasda", data);
  return (
    <>
      {data?.data?.map((item, index) => {
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
              <Icon
                onClick={() => {
                  dispatch(RemoveItem(item?.id));
                }}
              >
                +
              </Icon>
            </ListIem>
          </>
        );
      })}
    </>
  );
};

export default InputItem;
