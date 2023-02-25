import React, { useState } from "react";

const LogIn = () => {
  const [user, SetUser] = useState({
    name: "",
    email: "",
    contact: "",
  });
  var name, value;
  const getuserData = (event) => {
    event.preventDefault();
    name = event.target.name;
    value = event.target.value;

    SetUser({
      ...user,
      [name]: value,
    });
  };

  const postData = async (event) => {
    event.preventDefault();
    const { name, email, contact } = user;
    if (name && email && contact) {
      const response = await fetch(
        "https://login-auth-d8181-default-rtdb.firebaseio.com/userInfoForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            contact,
          }),
        }
      );

      if (response) {
        SetUser({
          name: "",
          email: "",
          contact: "",
        });

        alert("Data Stored Successfully");
      }
    } else {
      alert("All the fields are requried");
    }
  };

  return (
    <>
      <h1>LogIn Page</h1>
      <form method="POST">
        <label>Enter Name</label>
        <input
          name="name"
          onChange={getuserData}
          value={user.name}
          type="text"
          required
        />
        <label>Enter Email </label>
        <input
          name="email"
          onChange={getuserData}
          value={user.email}
          type="email"
          required
        />
        <label>Contact number</label>
        <input
          name="contact"
          onChange={getuserData}
          value={user.contact}
          type="text"
          required
        />
        <button onClick={postData}>Submit</button>
      </form>
    </>
  );
};

export default LogIn;
