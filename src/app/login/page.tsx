import React from "react";
import { UserLoginForm } from "../components";
import { ClientDataContextProvider } from "../contexts/ClientDataContext";

const LoginPage = () => {
  return (
    <section className="h-screen flex mt-24 justify-center w-full gap-16 px-32">
      <ClientDataContextProvider>
        <UserLoginForm />
      </ClientDataContextProvider>
    </section>
  );
};

export default LoginPage;
