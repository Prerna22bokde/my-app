import React, { useState } from "react";
import "./Video.css";

//form submit short login form

export default function FormProject7() {
  const [fullname, setFullName] = useState({
    fname: "",
    lname: "",
    email: " ",
    phone: "",
  });

  const getData = (val) => {
    //    console.log(val.target.value);
    //    console.log(val.target.name);

    //    const value = val.target.value;
    //    const name = val.target.name;  its change to object distructuring

    const { value, name } = val.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };

      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("form submited");
  };

  return (
    <div className="diva">
      <form onSubmit={onSubmit}>
        <h1>
          Hello {fullname.fname} {fullname.lname}
        </h1>
        <p>{fullname.email}</p>
        <p>{fullname.phone}</p>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="fname"
          onChange={getData}
          value={fullname.fname}
        />
        <br />

        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="lname"
          onChange={getData}
          value={fullname.lname}
        />
        <br />

        <input
          type="email"
          placeholder="*****@gmail.com"
          name="email"
          onChange={getData}
          value={fullname.email}
          autoComplete="off"
          //autocomplete off se email option ya original email nhi dikhte
        />
        <br />

        <input
          type="number"
          placeholder="**********"
          name="phone"
          onChange={getData}
          value={fullname.phone}
        />
        <br />
        <button className="setbutton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
