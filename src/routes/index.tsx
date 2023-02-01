import { Error, Home } from "../pages";
import { Route, Routes } from "react-router-dom";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
