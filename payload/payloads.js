import supertest from 'supertest';
var prop = require ("../resources/globalProperties.js");
var path = require ("../resources/paths.js");

function payloads() {

    this.userCreate = {
        'request'  :{               
          firstName: 'JavaScriptTestUser',
          //email: 'juthikatest_13@yopmail.com', 
         email: `testapi-${Math.floor(Math.random() * 9999)}@yopmail.com`,
          emailVerified: true,
          password:'Test@123'
      
       }};    

    const request = supertest(prop.domainUrl);
    this.resp = request.post(path.userCreatePath)
    .set('Authorization',prop.token)
    .send(this.userCreate);
}
module.exports= new payloads();