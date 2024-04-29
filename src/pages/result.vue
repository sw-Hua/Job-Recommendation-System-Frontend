<template>
    <div class="box">
      <h2>Result</h2>
      <div v-if="resultData.BestFitJob && resultData.BestFitJob.length > 0">
        <h3>Best Fit Jobs:</h3>
        <ul>
          <li v-for="(job, index) in resultData.BestFitJob" :key="index">{{ job }}</li>
        </ul>
      </div>
      <div v-if="resultData.PotentialSalary && resultData.PotentialSalary.length > 0">
        <h3>Potential Salary:</h3>
        <ul>
          <li v-for="(salary, index) in resultData.PotentialSalary" :key="index">{{ salary }}</li>
        </ul>
      </div>
      <div v-if="resultData.SkillsNeeded && resultData.SkillsNeeded.length > 0">
        <h3>Skills Needed:</h3>
        <ul>
          <li v-for="(skill, index) in resultData.SkillsNeeded" :key="index">{{ skill }}</li>
        </ul>
      </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
        return {
            resultData: {} // 将在mounted()中从路由参数中获取
        };
    },
    mounted() { 
        const resultData = JSON.parse(this.$route.query.result);
        this.resultData = resultData;
        console.log("resultData: ");
        console.log(resultData);
    },
    methods: {
  
    },
  };
  </script>
  
  <style scoped>
  .box{
    position: relative;
    max-width: 700px;
    width: 100%;
    background: #fff;
    padding: 70px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  