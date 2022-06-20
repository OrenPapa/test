import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StorageService from "../Helpers/StorageService";
import { RootState } from "../Redux/Store";
import { setUserData } from "../Redux/UserSlice";
import Routing from "./Routing";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userSlice);
  const localUserData = StorageService.parse(
    StorageService.getItem("user") as string
  );
  useEffect(() => {
    if (StorageService.hasItem("user")) {
      dispatch(
        setUserData({
          email: localUserData.email,
          name: localUserData.name,
          surname: localUserData.surname,
          address: localUserData.address,
          image: localUserData.image,
          password: localUserData.password,
        })
      );
    }
  }, []);

  return <Routing />;
}

export default App;
