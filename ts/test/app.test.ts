import request from "supertest"
import app from "../src/app"

describe("Testing base URL", ()=>{
    it("GET Request to / must return 404 not found", done => {
        request(app).get("/").expect(404).end((err, res)=>{
            if(!err) console.log(res.body);
            done(err)

        })
    })
})