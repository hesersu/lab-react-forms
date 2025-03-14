import React from "react";
import { useState } from "react";
// import studentsData from "../assets/students.json";

const AddStudents = (props) => {
  const [students, setStudents] = useState(props.studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  function handleSubmitForm(event) {
    event.preventDefault();

    const studentToAdd = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };
    props.setStudentData([studentToAdd, ...props.studentsData]);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            onChange={(e) => {
              setProgram(e.target.value);
            }}
          >
            ;<option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            onChange={(event) => {
              setGraduationYear(event.target.value);
            }}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            value={graduated}
            onChange={(event) => {
              setGraduated(event.target.checked);
            }}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudents;
