import React from "react";
import { Header } from "./commonFiles/Header";
import CardItem from "./CardList/CardItem";
import Auth, { SignUp, Login } from "./auth/Auth";

export default function App() {
  return (
    <>
      {/* <Header />
      <CardItem /> */}
      {/* <Auth /> */}
      <SignUp />
      <Login />
    </>
  );
}
