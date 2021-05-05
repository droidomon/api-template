import app from "../../src/app";
import request from "supertest"

describe("Testing the Auth routes", ()=>{
    it("GET request to /auth should return 200 OK", done => {
        request(app).get("/auth").expect(200).end((err, res)=>{
            if(!err) console.log(res.body);
            done(err)
            
        })
    })
})