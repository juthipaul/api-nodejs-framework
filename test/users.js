import supertest from 'supertest';
import {expect} from 'chai';
import {should} from 'chai';
import { it } from 'mocha';

var path = require ("../resources/paths.js");
var prop = require ("../resources/globalProperties.js");
var payload = require ("../payload/payloads.js");


const request = supertest(prop.domainUrl);
describe("Create User APIs Functional tests scenarios" , () => {
    it ("/POST User Creation API returning Success", (done)=> {
            
               payload.resp.then((res) => {
                console.log(res.body);
                let response1= res.body.response;
                    if (response1.to.be.eq("SUCCESS")){
                        
                        console.log("API WORKING FINE");
                    }
                        else console.log("API not working");
               })
               done();
            });
    it ("/POST UserId present in user creation responseBody", (done)=> {
        payload.resp.then((res) => {
            console.log("UserId is here:" + res.body.result.userId);
            console.log(res.body.result.response);
            
                }) 
    done();   
        })
})


//User Read API Tests

describe("Read User APIs functional test scenarios", ()=> {
 
    it ("/GET User Read API returns 200 in response when requested with valid userId",(done)=> {
         
        request.get(path.userRead)
        .set("Authorization",prop.token)
        .set("x-authenticated-user-token",prop.authKey)
        .then((res) =>{

            //console.log(res.body);
            let channel=res.body.result.response.channel;
            let status=res.body.params.status;
            if (status=="success")
            {
                console.log("Read API is working fine");
            }
            else 
            console.log("User Read api is not returning success");
            console.log("User's Channel is: " + channel);
             
        })
        done();
    })  

    it ("/GET User Read API returns USER_NOT_FOUND error when requested with incorrect userId in response",(done)=> {
         
        request.get(path.userRead+"test")
        .set("Authorization",prop.token)
        .set("x-authenticated-user-token",prop.authKey)
        .then((res) =>{

           let status= res.body.params.status;
        if(status=="USER_NOT_FOUND")
        {
            console.log("User read api returning 404 when requested with invalid user id");
        }
        else 
        console.log("User Api is not returning proper message when requested with invalid userId") 
        })
    done();
    })

    it ("/GET User Read API response has userId is response", (done)=>{
        
        request.get(path.userRead)
        .set("Authorization",prop.token)
        .set("x-authenticated-user-token",prop.authKey)
        .then((res) =>{

            let userId= res.body.result.response.userId;
            console.log(userId);
            if (userId=="4f83a9d9-f063-48c1-a28a-687a21f5bc0b")
            {

                console.log("UserId Present in read result response");
            }
        })
    done();
    })

})