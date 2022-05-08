const InitialState = [];

const ItemHandelReducers = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, firstName, lastName, gender } = action.payload;
      console.log(id, firstName, firstName, gender);
      console.log(state?.data);
      return {
        state: [
          {
            id: id,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
          },
        ],
      };
    default:
      return {
        state,
      };
  }
};

export default ItemHandelReducers;
