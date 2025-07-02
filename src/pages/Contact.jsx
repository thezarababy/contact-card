import React from "react";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const submitData = (e) => {
    e.preventDefault();
    setUsers([...users, { firstName, lastName, email, queryType, message }]);

    setFirstName("");
    setLastName("");
    setEmail("");
    setQueryType("");
    setMessage("");
  };

  return (
    <div className="max-w-[500px] mx-auto p-4 bg-white mt-10 rounded-lg shadow-lg">
      <form onSubmit={submitData} className=" flex flex-col max-w-[500px]">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <div className="flex gap-2">
          <div>
            <label className="block mb-2">
              {" "}
              First Name{" "}
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="border p-2 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block mb-2">
              {" "}
              Last Name{" "}
              <input
                type="text"
                placeholder="Enter your first name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="border p-2 rounded-md"
              />
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-2">Email Address </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border p-2 rounded-md max-w-[450px]"
          />
        </div>
        <div className="mt-4 mb-2">
          <label>Query Type </label>
        </div>
        <div className="flex gap-2 mb-4  ">
          <div className="border p-2 rounded-md ">
            <label for="" className="block mb-2">
              <input
                type="radio"
                name="info"
                value="General Enquiry"
                checked={queryType === "General Enquiry"}
                onChange={(e) => setQueryType(e.target.value)}
                className=""
              />
              General Enquiry
            </label>
          </div>
          <div className="border p-2 rounded-md">
            <label for="">
              <input type="radio" name="info"
              value="Support Request"
                checked={queryType === "Support Request"}
                onChange={(e) => setQueryType(e.target.value)} />
              Support Request
            </label>
          </div>
        </div>

        <div>
          <label class="block" className="block mb-2">
            Message{" "}
          </label>
          <textarea
            rows="5"
            cols="50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded-md"
          ></textarea>
        </div>
        <div className="flex items-center mt-4 mb-2">
          <input type="checkbox" id="consent" className="pt-0 mr-2"/>
          <label for="consent" className="block mb-2">
            {" "}
            I consent to being contacted by the team 
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-900 text-white border-b-4 px-3 py-1.5 hover:bg-green-700"
          >
            {" "}
            Submit
          </button>
        </div>
      </form>

      <section>
        {users.map((data, i) => (
          <div className="bg-gray-200 p-5 m-2" key={i}>
            <h1>
              <b>FirstName: {data.firstName}</b>
            </h1>
            <h1>
              <b>LastName: {data.lastName}</b>
            </h1>
            <h1>
              <b>Email: {data.email}</b>
            </h1>
            <h1>
              <b>QueryType: {data.queryType}</b>
            </h1>
            <h1>
              <b>Message: {data.message}</b>
            </h1>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Contact;
