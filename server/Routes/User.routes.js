const {getAllUsers,getUserDetailes,UpdateUpdate,DeleteUser} = require('../Controllers/Uesr.controller')
const router = require('express').Router();

router.get('/',getAllUsers);
router.get('/user/:id',getUserDetailes);
router.put('/user/:id',UpdateUpdate);
router.delete('/user/:id',DeleteUser);
// router.get('/',getAllUsers)



module.exports = router;