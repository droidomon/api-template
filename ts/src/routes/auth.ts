import {Router } from "express"

const router = Router()

router.get("/", (req, res, next)=>{
    res.status(200).json({success: true, data: [], message: "Successfully authenticated!"})
})

export default router