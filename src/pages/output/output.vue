<template>
    <div class="main">
      <h1 class="title">The Most Suitable Position: Java Backend Engineer</h1>
      <div class="info-data">
        <div class="card">
          <div class="head">
            <h2>Past Salary</h2>
            <p>$7349 Per Month</p>
          </div>
          <span class="progress" style="--value: 78%;"></span>
          <span class="label">Over 78% of occupations</span>
        </div>
        <div class="card">
          <div class="head">
            <h2>Number of positions</h2>
            <p>12345</p>
          </div>
          <span class="progress" style="--value: 35%;"></span>
          <span class="label">Over 35% of occupations</span>
        </div>
        <div class="card">
          <div class="head">
            <h2>Past Performance</h2>
            <p>Over 65% of occupations</p>
          </div>
        </div>
        <div class="card">
          <div class="head">
            <h2>Salary Forecasts</h2>
            <p>2024：$7349 per/m，2034：$16785 per/m</p>
          </div>
        </div>
        <div class="card">
          <div class="head">
            <h2>Forecast job numbers</h2>
            <p>2024：12345，2034：12345</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
  
  /* Variables */
  :root {
    --grey: #F1F0F6;
    --dark-grey: #8D8D8D;
    --light: #fff;
    --dark: #000;
    --green: #81D43A;
    --light-green: #E3FFCB;
    --blue: #1775F1;
    --light-blue: #D0E4FF;
    --dark-blue: #0C5FCD;
    --red: #FC3B56;
  }
  
  /* Global Styles */
  html {
    overflow-x: hidden;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: var(--grey);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  li {
    list-style: none;
  }
  
  /* Main Content Styles */
  .main {
    padding: 24px;
  }
  
  .title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  .info-data {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 20px;
  }
  
  .card {
    background-color: var(--light);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
    
  }
  
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .head h2 {
    font-size: 20px;
    font-weight: 600;
  }
  
  .head p {
    font-size: 14px;
  }
  
  .progress {
  position: relative; /* Added */
  display: block;
  height: 10px;
  border-radius: 10px;
  background-color: var(--grey);
  margin-bottom: 8px;
}

.progress::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--value); /* Added */
  background-color: var(--blue);
  border-radius: 10px; /* Added */
}

  
  .label {
    font-size: 14px;
    font-weight: 700;
  }
  
  /* Responsive Styles */
  @media screen and (max-width: 768px) {
    .info-data {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  </style>
  