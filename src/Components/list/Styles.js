import styled from "styled-components";

const ListContainer = styled.div`
  width: 50%;
  padding: 20px;
`;
const ListIem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #e4e4e5;
  margin: 0 0 10px 0;
`;
const Name = styled.div``;
const FirstName = styled.span`
  font-size: 16px;
  line-height: 24px;
`;
const LastName = styled.span``;
const Icon = styled.span`
  width: 16px;
  height: 16px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateZ(45deg);
  cursor: pointer;
`;

export { ListContainer, ListIem, FirstName, LastName, Name, Icon };
