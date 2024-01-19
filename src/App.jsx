import React, { useState } from "react";
import "./App.scss";
import Input from "./Input";

const inputData = [
  {
    id: 1,
    type: "text",
    name: "username",
    label: "username",
    placeholder: "UserName",
    pattern:"^[A-Za-z0-9]{3,16}$",
    error: "The name must contain 3 characters",
  },
  {
    id: 2,
    type: "text",
    name: "lastname",
    label: "lastname",
    placeholder: "lastname",
    error: "The last name must containt 3 characters",
  },
  {
    id: 3,
    type: "email",
    name: "email",
    label: "email",
    placeholder: "email",
    error: "the email must be valid ",
  },
  {
    id: 4,
    type: "text",
    name: "password",
    label:"password",
    placeholder: "password",
    error:
      "the password must be 8 characters and must include the special character, one uppercase, one lowercase, one number",
  },
  {
    id: 5,
    type: "text",
    name: "password2",
    label: "password2",
    placeholder: "Re-enter the password",
    error: "the passwords must be equal in length and match",
  },
];

const App = () => {
  const [form, setForm] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      username: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
    })
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => {
      return { ...form, [name]: value };
    });
  };


  return (
    <form className="inputfield" onSubmit={handleSubmit}>
      {inputData.map((input) => {
        return <Input key={input.id} input={input} handleChange={handleChange} form={form}  />; // spreading the items ,passing the props in the form of spread operator 
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;