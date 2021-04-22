import supertest from 'supertest';
import {expect} from 'chai';
import {it} from 'mocha';


var path = require ("../resources/paths.js");
var prop = require ("../resources/globalProperties.js");
var disc = require ("../payload/GroupCreate.js");
var forumread = require("../payload/forumRead");

//Create a group
const request = supertest(prop.domainUrlPreprod);
var group_id;

describe.only("Discussion APIs functional tests", () =>{
    var group_id;
    it.skip ('/POST, Create group API functional tests' ,(done) => {
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

    it.skip ('/GET, Get all categories API functional tests', (done) =>{
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

    it ('/POST, POST Discussion forum read API functional tests', (done) =>{

        //const tok = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHUnh4OHVyNDNwWEgzX1FNekJXZXJRUFdyWDAyUEprSzlDemwzaGM2MGZBIn0.eyJqdGkiOiIxOTE3MjliOS1jYmRlLTQzOGUtYWUyZS1iZjE2MjM4NjdmMWUiLCJleHAiOjE2MTkwMzkyMDMsIm5iZiI6MCwiaWF0IjoxNjE4OTk2MDAzLCJpc3MiOiJodHRwczovL3N0YWdpbmcuc3VuYmlyZGVkLm9yZy9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImY6OTc5NzM4YjctMjUzYy00YWRmLTk2NzMtYTg1N2VlYjg2MTE1OjE0MDVmMzM0LWVlNTktNDJmYy1iZWZiLTUxOTg2MjIxODgxZSIsInR5cCI6IkJlYXJlciIsImF6cCI6Im50cC1zdXBwb3J0LXRvb2wiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiIyNzVlMjI1NS0yOWM2LTRkZTEtOTI0Ni1hMmQ4ZmQ4MDhjZDYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vb3BzLm50cC5uZXQuaW4iLCJodHRwOi8vb3BzLm50cC5uZXQuaW4iXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6IiIsIm5hbWUiOiJvcmdhZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6Im9yZ2FkbWluMDA3IiwiZ2l2ZW5fbmFtZSI6Im9yZ2FkbWluIiwiZmFtaWx5X25hbWUiOiIiLCJlbWFpbCI6Im9yKioqKioqKipAeW9wbWFpbC5jb20ifQ.bYxh-c5yDLUZmg_b-BYt5cHcvK9479ZHiiBKY0vw-p-qJSRT2wt4x5cLXJJPR8CKcRMPAxGZzTkxVf7fh6RlhF0vyT0fHELvy7akhKC07rPPa8RIrSuvuXd7o9U-HbiBByzo-aBHv2PjBhwwzZEyT-eX3zofMrYmW0sJmTkHDxODbJtemVYtXkbYz4vbbdgqQKJnxJ-lR_JyF-Bg6fDXT5CJpzBRJql8xpBnEAzHcRbSF8Fl4-awdYAWAkha7HTik_yaJsHa9JRHkyBi70hfd-d905EeyJU481C2Nn2kfVUo_3mbA5fmNgZOa-JkFBVK57EwAAqtSJUPos_RgjQWlw";
        
        request.post(path.getForumId)
        .set('Authorization', prop.authKeyPreprod)
        .set('x-authenticated-user-token', prop.authTokenPreprod)
        .set('Content-Type', 'application/json')
        .send('body',forumread.forumRead).end((err,res) =>{
            console.log(res.status);
            console.log(res.error);
            console.log(err);
        })
        done();
    })
})