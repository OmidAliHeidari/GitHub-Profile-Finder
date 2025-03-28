import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import UserResult from "./components/UserResult";
import { fetchUser } from "./utils/Api";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [getData, setGetData] = useState(undefined);

  const onSearch = async (name) => {
    try {
      const user = await fetchUser(name);
      setGetData(user);
    } catch (error) {
      console.log("Kullanıcı bulunamadı!", error);
      setGetData(null);
    }
  };

  return (
    <>
      <BrowserRouter>
        <SearchInput onSearch={onSearch} />
        <UserResult getData={getData} />
      </BrowserRouter>
    </>
  );
}

export default App;
