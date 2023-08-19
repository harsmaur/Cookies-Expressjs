import express from 'express';
import studentContoller from '../controller/studentController.js';
const router = express.Router();

router.get('/getSessionInfo', studentContoller.getSessionInfo)
router.get('/deleteSession', studentContoller.deleteSession)
router.get('/regenerateSession', studentContoller.regenrateSession)
router.get('/session_ex', studentContoller.session_example)
router.get('/getsessiondata', studentContoller.get_session_data)
export default router;