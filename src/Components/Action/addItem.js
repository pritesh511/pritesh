export const addItem = (firstName, lastName, gender) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: new Date().getTime().toString(),
      firstName: firstName,
      lastName: lastName,
      gender: gender,
    },
  };
};
