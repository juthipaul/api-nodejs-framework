import supertest from 'supertest';
import {expect} from 'chai';
import { it } from 'mocha';

var path = require ("../resources/paths.js");
var prop = require ("../resources/globalProperties.js");
var payload = require ("../payload/payloads.js");

console.log(prop.domainUrl);

const request = supertest(prop.domainUrl);

//const token = path.token;
describe ("Content apis" , () => {
    it ('/GET all details of the content' , (done) => {
            request.get(path.contentReadPath).end((err,res) =>{
             console.log(res.body);
             console.log(err);
             expect(res.body.result.content).to.not.be.empty;
             done();
          })
        })
// With done call back 
            //request.get('content/v1/read/do_31321401593029427218').then((res) =>{
               // console.log(res.body);
                //console.log(err);
               // expect(res.body.result.content).to.not.be.empty;
               // done();
            //})
        //})
    it ('/GET contains channel',(done)=> {
            request.get(path.contentReadPath).end((_err,res) =>{
            console.log(res.body.result.content.channel);
            expect(res.body.result.content.channel).to.be.equal("01269878797503692810");
            done();

        });
    });

    it ('/GET contains identifier',(done)=> {
            const url = 'content/v1/read/do_31321401593029427218';
                request.get(path.contentReadPath).end((_err,res) =>{
                console.log(res.body.result.content.identifier);
                expect(res.body.result.content.identifier).to.eq("do_31321401593029427218");
                done();
            });
        });

});
