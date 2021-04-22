import supertest from 'supertest';
import {expect,should} from 'chai';
import { it } from 'mocha';

var path = require ("../resources/paths.js");
var prop = require ("../resources/globalProperties.js");
var payload = require ("../payload/payloads.js");
var programs = require ("../payload/programCreatePayload.js");
var programList = require ("../payload/programListPayload.js");


//console.log(prop.domainUrl);
const request = supertest(prop.domainUrl);
var program_id;

//Program Create
describe.skip ("Program APIs Scenarios" , () => {
    it ('/POST Program create API' , (done) => {
        request.post(path.programCreate)
        .set('Authorization', prop.authKey)
        .set('Content-Type', 'application/json')
        .send(programs.programCreateData).end((err,res) =>{
         
            console.log(res.body);
            console.log(err);
            expect(res.body.result.program_id).to.not.be.empty; 
            program_id= res.body.result.program_id;
            console.log("Newly created program ID :" +program_id)  
            expect(res.body.responseCode).to.equal('OK');
            expect(res.status).to.equal(200);
            done();
         })
    });

    it ('/GET Read Program API' , (done)=> {
    
        request.get(path.contentReadPath+program_id)
        .set('Authorization', prop.authKey)
        .set('Content-Type', 'application/json').then((err,res)=>{
        
        console.log(res.body)
        console.log(err);
        expect(res.body.responseCode).to.equal('OK');
        expect(res.status).to.equal(200);
        done();
        })
        
    });

    it ('/POST Program List API' , (done) => {
        request.post(path.programList)
        .set('Authorization', prop.authKey)
        .set('Content-Type', 'application/json')
        .send(programList.programListData).end((err,res)=>{
            
        console.log(res.body);
        console.log(err);
        expect(res.body.responseCode).to.equal('OK');
        expect(res.status).to.equal(200);
        done();
        })
        
    });
  
})