import supertest from 'supertest';
import {expect} from 'chai';
import {it} from 'mocha';


var path = require ("../resources/paths.js");
var prop = require ("../resources/globalProperties.js");
var disc = require ("../payload/groupCreate.js");
var forumread = require("../payload/forumRead");


const request = supertest(prop.domainUrlPreprod);
var group_id;

describe ("Discussion APIs functional tests", () =>{
    
    //Create Group
    it ('/POST, Create group API functional tests' ,(done) => {
        request.post(path.createNewGroup)
        .set('Authorization', prop.authKeyPreprod)
        .set('x-authenticated-user-token', prop.authTokenPreprod)
        .set('Content-Type', 'application/json')
        .send(disc.groupCreate).end((err,res) =>{

            console.log(res.body);
            console.log(err);
            expect(res.body.responseCode).to.equal(200);
            expect(res.body.result.groupId).to.not.be.empty;
            group_id=res.body.result.groupId;
            console.log(group_id);
        })
        done();
    })


    //Get categories
    it ('/GET, Get all categories API functional tests', (done) =>{
        request.get(path.getListCategories)
        .set('Authorization', prop.authKeyPreprod)
        .set('x-authenticated-user-token', prop.authTokenPreprod)
        .set('Content-Type', 'application/json').end((err,res) =>{
            console.log(res.body);
            console.log(err);
            expect(res.body.categories).to.not.be.empty;
            expect(res.body.breadcrumbs).to.not.be.empty;
            expect(res.body.title).to.not.be.empty;

        })

        done();
    })
})
