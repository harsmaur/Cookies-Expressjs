import express from "express";
import studentContoller from "../controllers/controller.js";
const router = express.Router();

router.get('/setCookie', studentContoller.setCookie)
router.get('/getCookie', studentContoller.getCookie)
router.get('/deleteCookie', studentContoller.deleteCookie)

export default router;