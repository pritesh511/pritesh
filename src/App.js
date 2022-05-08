import { Provider } from "react-redux";
import Input from "./Components/Input/Input";
import List from "./Components/list/List";
import store from "./Components/Store/store";
import { MainContainer } from "./appStyle";

console.log("home", store);
const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainContainer>
          <Input />
          <List />
        </MainContainer>
      </Provider>
    </>
  );
};

export default App;
