import React, { Component } from "react";
import Table from "./Table";

const errorMsg = {
  color: "red",
};

export class Studentmanag extends Component {
  state = {
    student: {
      fname: "",
      city: "surat",
      email: "",
      birthDay: "",
      course: "bca",
      fnameError: "",
      cityError: "",
      emailError: "",
      birthDayError: "",
      courseError: "",
    },
    courses: ["bca", "mca", "b.com", "m.com", "B.E"],
    cities: ["surat", "amdavad", "vadodara", "rajkot", "bardoli"],
    isFormSubmit: false,
    students: [],
    error: {
      fname: "",
      city: "",
      email: "",
      birthDay: "",
      course: "",
    },
  };

  validate = () => {
    let fnameError = "";
    let cityError = "";
    let emailError = "";
    let birthDayError = "";
    let courseError = "";
    if (!this.state.student.email.includes("@")) {
      emailError = "invalid email";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  onSubmitForm = (event) => {
    const error = "";
    event.preventDefault();

    this.setState({
      ...this.state,
      isFormSubmit: true,
      students: [
        ...this.state.students,
        { ...this.state.student, id: Math.random().toString(36).substr(2, 9) },
      ],
    });
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      
    }

    // const isValid = this.validate(),

    //     if (this.state.isFormSubmit) {
    //       const [fname] = this.state.student;
    //       if (fname.length === 0) {
    //         error = "name field is require";
    //       }
    //       this.setState({
    //         ...this.state,
    //         error: error,
    //       });
    //     }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      student: {
        fname: "",
        city: "",
        email: "",
        birthDay: "",
        course: "",
      },
    });
  };

  formChangeHandler = (event) => {
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        [event.target.name]: event.target.value,
      },
    });
  };

  deleteRow = (index) =>{
    this.setState({
      taskList: this.state.taskList.filter((s,sindex)=>index !== sindex),
    });
  }

  clickOnDelete(record){
    this.setState({
      taskList: this.state.taskList.filter(r => r !== record )
    });
  }

  render() {
    return (
      <form>
        <div>
          {/* form */}
          <div>
            <h1>Student Registration</h1>
            {this.state.error.length > 0 && (
              <h5 style={errorMsg}>error :{this.state.error}</h5>
            )}
            <label>Full name:</label>
            <input
              type="text"
              name="fname"
              placeholder="Enter Fullname"
              value={this.state.student.fname}
              validate
              onChange={(event) => this.formChangeHandler(event)}
            />
            <div style={{ color: "red" }}>{this.state.student.fnameError}</div>
            <br />

            <label>Choose a city:</label>
            <select
              name="city"
              placeholder="select city"
              value={this.state.student.city}
              onChange={(event) => this.formChangeHandler(event)}
            >
              {this.state.cities.map((cityname, index) => (
                <option key={index} value={cityname}>
                  {cityname}
                </option>
              ))}
            </select>
            <div style={{ color: "red" }}>{this.state.student.cityError}</div>
            <br />

            <label>Enter your email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={this.state.student.email}
              onChange={(event) => this.formChangeHandler(event)}
            />
            <div style={{ color: "red" }}>{this.state.student.emailError}</div>
            <br />

            <label htmlFor="birthDay">BirthDay:</label>
            <input
              type="date"
              name="birthDay"
              placeholder="Enter birthDate"
              value={this.state.student.birthDay}
              onChange={(event) => this.formChangeHandler(event)}
            />
            <div style={{ color: "red" }}>
              {this.state.student.birthDayError}
            </div>
            <br />

            <label>Choose a course:</label>
            <select
              name="course"
              placeholder="select course"
              value={this.state.student.course}
              onChange={(event) => this.formChangeHandler(event)}
            >
              {this.state.courses.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div style={{ color: "red" }}>
              {this.state.student.birthDayError}
            </div>
            <br />

            <button onClick={(event) => this.onSubmitForm(event)}>Save</button>
          </div>
          {/* end form */}
          {/* table data */}
          <div>
            {this.state.isFormSubmit && this.state.students.length > 0 && (
              <Table data={this.state.students} />
            )}
          </div>
          {/* end table data */}
        </div>
      </form>
    );
  }
}
export default Studentmanag;
