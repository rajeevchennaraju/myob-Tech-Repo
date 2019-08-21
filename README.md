# myob-Tech-Repo
This is a Hello World project with 3 endpoint to access root endpoint, health and metadata.
This is a nodejs application with TravisCi integration.
Application listens on port 3000
Mocha test is encorporated with this application.

# Risk - Applicaiton/Deployment
  There is no risk associated with this applicaiton or its deployment as it is a simple hellow world application with 3 end point.
  
# Deployment steps
  To deploy this application follow below steps
  git clone git@github.com:rajeevchennaraju/myob-Tech-Repo.git
  cd myob-Tech-Repo
  npm install
  npm start
  
# Testing
  Folow Deployment steps before testing this application locally
  Replace las step npm start with npm test.

# Application access - Endpoint details
GET / - http://localhost:3000 <br>
  Response: Hello World
  
GET /health -http://localhost:3000/health <br>
  Response: {"message":"Application is up and running","Status":"","status":"200"}
  
GET /metadata - http://localhost:3000/metadata <br>
  Response: {"name":"myobtechtest","version":"1.0.0","description":"pre-interview technical test"}
  
# Build Pipeline
Application repository has been integrated with Travis-CI build pipeline.
Any commit to the application repository build pipeline will be triggered automatically. 
  
  
# References:
GitHub - git@github.com:rajeevchennaraju/myob-Tech-Repo.git <br>
Travis-CI - https://travis-ci.com/rajeevchennaraju/myob-Tech-Repo
