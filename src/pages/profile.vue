<template>
    <section class="container">
      <header>Collect Careers Information</header>
      <form @submit.prevent="submitForm" class="form">
        <!-- Removed form fields for demonstration -->
        <button type="submit">Next</button>
      </form>
      <div v-if="responseReceived">
        <h2>Prediction Result:</h2>
        <ul>
          <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        responseReceived: false,
        skills: []
      };
    },
    methods: {
      submitForm() {
        // Dummy data to be sent to the backend
        const dataToSend = {
          "JobID": [532907, 532907, 532907, 532907],
          "JobDate": ["2012-01-01", "2012-01-01", "2012-01-01", "2012-01-01"],
          "IsBaseline": [0, 1, 1, 0],
          "IsLanguage": [0, 1, 0, 0],
          "IsSpecialized": [1, 0, 0, 1],
          "IsSoftware": [0, 0, 1, 1],
          "SkillCluster": ["Administrative Support", "na", "Microsoft Office and Productivity Tools", "Accounting and Finance Software"],
          "SkillClusterFamily": ["Administration", "na", "Information Technology", "Finance"]
        };
  
        // Send data to backend
        fetch('http://127.0.0.1:8000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        })
        .then(response => response.json())
        .then(data => {
          // Handle response from the backend
          console.log('Response from backend:', data);
          this.skills = data;
          this.responseReceived = true;
          // You can add further logic here as needed
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors here
        });
      }
    }
  }
  </script>
  
  <style>
  /* Your existing CSS styles */
  </style>
  