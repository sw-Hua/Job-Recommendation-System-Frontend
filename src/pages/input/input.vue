<template>
    <section class="container">
      <header>Collect Careers Information </header>
      <form action="./personalInput" class="form">
        <div class="input-box">
          <label>Education Level</label>
          <div class="select-box">
            <select>
              <option hidden>Education level</option>
              <option>Primary Education</option>
              <option>GCE 'O' Level</option>
              <option>Normal-level (N-level)</option>
              <option>GCE 'A' Level</option>
              <option>Vocational</option>
              <option>Bachelor</option>
              <option>Master</option>
              <option>Doctoral (PhD)</option>
            </select>
          </div>
        </div>
        <div class="input-box">
          <label>Graduate School or Educational Institution</label>
          <input type="text" placeholder="Enter graduate school"  />
        </div>
        <div class="column">
          <div class="input-box">
            <label>Major</label>
            <input type="text" placeholder="Enter your major"  />
          </div>
          <div class="input-box">
            <label>Salary Expectations</label>
            <input type="number" placeholder="Enter your salary expectations"  />
          </div>
        </div>
        <div class="input-box">
          <label>Expectations for Future Careers</label>
          <div class="select-box">
            <select>
              <option hidden>Expectations</option>
              <option>proactive</option>
              <option>maintain</option>
              <option>conservative</option>
            </select>
          </div>
        </div>
        <div class="input-box address">
          <label>Work Experience</label>
          <div class="select-box">
            <select>
              <option hidden>Job Position</option>
              <option>Software Developer</option>
              <option>AI Scientist</option>
              <option>Data Analyst</option>
              <option>Web Developer</option>
            </select>
          </div>
          <input type="number" placeholder="Years of work experience"  />
          <div class="column">
            <div class="select-box">
              <select>
                <option hidden>Skills</option>
                <option>Java</option>
                <option>Cpp</option>
                <option>Sql</option>
                <option>Excel</option>
              </select>
            </div>
            <input type="text" placeholder="Hobbies"  />
          </div>
          <div class="column">
            <input type="text" placeholder="Industries of interest"  />
            <input type="number" placeholder="Salary Expectations"  />
          </div>
        </div>
        <button>Next</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  /* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(130, 106, 251);
}
.container {
  position: relative;
  max-width: 700px;
  width: 100%;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.container header {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  text-align: center;
}
.container .form {
  margin-top: 30px;
}
.form .input-box {
  width: 100%;
  margin-top: 20px;
}
.input-box label {
  color: #333;
}
.form :where(.input-box input, .select-box) {
  position: relative;
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #707070;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}
.input-box input:focus {
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}
.form .column {
  display: flex;
  column-gap: 15px;
}
.form .gender-box {
  margin-top: 20px;
}
.gender-box h3 {
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 8px;
}
.form :where(.gender-option, .gender) {
  display: flex;
  align-items: center;
  column-gap: 50px;
  flex-wrap: wrap;
}
.form .gender {
  column-gap: 5px;
}
.gender input {
  accent-color: rgb(130, 106, 251);
}
.form :where(.gender input, .gender label) {
  cursor: pointer;
}
.gender label {
  color: #707070;
}
.address :where(input, .select-box) {
  margin-top: 15px;
}
.select-box select {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: #707070;
  font-size: 1rem;
}
.form button {
  height: 55px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgb(130, 106, 251);
}
.form button:hover {
  background: rgb(88, 56, 250);
}
/*Responsive*/
@media screen and (max-width: 500px) {
  .form .column {
    flex-wrap: wrap;
  }
  .form :where(.gender-option, .gender) {
    row-gap: 15px;
  }
}
  </style>
  