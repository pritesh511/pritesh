export const RemoveItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      id: id,
    },
  };
};
