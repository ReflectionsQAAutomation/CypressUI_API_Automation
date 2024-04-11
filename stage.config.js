const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
    baseUrl : "https://practicesoftwaretesting.com"    
    },  
    
    env : {
      apiUrl : "https://api.practicesoftwaretesting.com"
    }
});
