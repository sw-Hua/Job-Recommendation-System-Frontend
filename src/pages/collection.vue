<template>
    <section class="container">
      <header>Collect Information</header>
      <form @submit.prevent="submitForm" class="form">
        <section class="container">
          <header>Education Information</header>
          <div class="education-background">
            <div v-for="(education, index) in educationBackground" :key="index" class="input-box">
              <label>Education Level</label>
              <div class="select-box">
                <select v-model="education.eduLevel">
                  <option disabled value="">Select education level</option>
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
              <label>Major</label>
              <div class="select-box">
                <select v-model="education.major">
                  <option disabled value="">Select major</option>
                  <option>Agriculture and Veterinary Medicine</option>
                  <option>Applied and Pure Sciences</option>
                  <option>Architecture and Construction</option>
                  <option>Business and Management</option>
                  <option>Computer Science and IT</option>
                  <option>Creative Arts and Design</option>
                  <option>Education and Training</option>
                  <option>Engineering</option>
                  <option>Health and Medicine</option>
                  <option>Humanities</option>
                  <option>Law</option>
                  <option>Personal Care and Fitness</option>
                  <option>Socia Studies and Media</option>
                  <option>Travel and Hospitality</option>
                </select>
              </div>
            </div>
            <button type="button" @click="addEducation">Add Education</button>
          </div>
        </section>
  
        <section class="container">
          <header>Careers Information</header>
          <div class="job-experience">
            <div v-for="(job, index) in jobExperiences" :key="index" class="input-box">
              <label>Job Title</label>
              <input type="text" v-model="job.title" placeholder="Enter job title">
              <label>Annual Salary</label>
              <input type="number" v-model="job.salary" placeholder="Enter salary">
            </div>
            <button type="button" @click="addJobExperience">Add Job Experience</button>
          </div>
        </section>
  
        <section class="container">
          <header>Professional Certificate</header>
          <div class="certificate">
            <div v-for="(certificate, index) in certificates" :key="index" class="input-box">
              <label>Certificate Name</label>
              <div class="select-box">
                <select v-model="certificate.title">
                  <option disabled value="">Select Certificate</option>
                  <option>ACCA</option>
                  <option>CPR certification</option>
                  <option>CPA</option>
                  <option>BLS certification</option>
                  <option>Certified nursing assistant</option>
                  <option>ASE certification</option>
                  <option>ACLS certification</option>
                  <option>ServSafe certifications</option>
                  <option>First aid certification</option>
                  <option>Certified medical assistant</option>
                  <option>Scrum master certification</option>
                  <option>PALS certification</option>
                  <option>Forklift certification</option>
                  <option>BC/BE</option>
                  <option>PMP certification</option>
                  <option>ARRT certification</option>
                  <option>Pharmacy Technician certification</option>
                  <option>NRP certification</option>
                  <option>Home health aide certification</option>
                  <option>CompTIA Security+ certification</option>
                  <option>CISSP</option>
                  <option>WSQ Certificate in Retail Operations</option>
                  <option>Certificate in English - Higher Advanced</option>
                </select>
              </div>
            </div>
            <button type="button" @click="addCertificate">Add Certificate</button>
          </div>
        </section>
        <button type="submit">Next</button>
      </form>
    </section>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        educationBackground: [{ eduLevel: '', major: '' }],
        jobExperiences: [{ title: '', salary: '' }],
        certificates: [{ title: '' }]
      };
    },
    methods: {
      addEducation() {
        this.educationBackground.push({ eduLevel: '', major: '' });
      },
      addJobExperience() {
        this.jobExperiences.push({ title: '', salary: '' });
      },
      addCertificate() {
        this.certificates.push({ title: '' });
      },
      submitForm() {
        // Determine the maximum length among all arrays
        const maxLength = Math.max(
            this.jobExperiences.length,
            this.educationBackground.length,
            this.certificates.length
        );

        // Pad arrays with 'None' to ensure all arrays have the same length
        const paddedJobTitles = this.padArray(this.jobExperiences.map(job => job.title), maxLength, 'None');
        const paddedSalaries = this.padArray(this.jobExperiences.map(job => job.salary), maxLength, 0);
        const paddedDegrees = this.padArray(this.educationBackground.map(education => education.eduLevel || 'None'), maxLength, 'None');
        const paddedMajors = this.padArray(this.educationBackground.map(education => education.major || 'None'), maxLength, 'None');
        const paddedCertifications = this.padArray(this.certificates.map(certificate => certificate.title || 'None'), maxLength, 'None');

        const data = {
            PastJobTitles: paddedJobTitles,
            Salary: paddedSalaries,
            Degree: paddedDegrees,
            Major: paddedMajors,
            ProfessionalCertification: paddedCertifications
        };

        // console.log(data)
        // Making POST request to backend API
        fetch('http://127.0.0.1:8000/predict', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json()) // 解析响应体为 JSON
        .then(data => {
        // 导航到结果页面，并将数据传递给结果页面
        console.log(data)
        this.$router.push({ name: 'result', query: { result: JSON.stringify(data) } });
        })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
        },

        padArray(array, length, value) {
        // Pad the array with specified value to reach the desired length
        const diff = length - array.length;
        if (diff > 0) {
            return array.concat(new Array(diff).fill(value));
        }
        return array;
        }

    }
  };
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


/* Additional styles for job experience module */
.job-experience .education-background .certificate{
  margin-top: 30px;
}
.job-experience .input-box .education-background .certificate{
  margin-top: 20px;
}
.job-experience button .education-background .certificate{
  margin-top: 10px;
}
  </style>
  