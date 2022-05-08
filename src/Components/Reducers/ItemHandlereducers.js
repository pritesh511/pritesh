const InitialState = { data: [] };

const ItemHandelReducers = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, firstName, lastName, gender } = action.payload;
      return {
        data: [
          ...state.data,
          {
            id: id,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
          },
        ],
      };
    case "REMOVE_ITEM":
      const newData = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        data: newData,
      };
    default:
      return state;
  }
};

export default ItemHandelReducers;
