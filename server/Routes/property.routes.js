const {getAllPropertys,createProperty,getPropertyDetailes,UpdateProperty,DeleteProperty} = require('../Controllers/Property.controller')
const router = require('express').Router();

router.get('/',getAllPropertys);
router.post('/post',createProperty)
router.get('/property/:id',getPropertyDetailes);
router.put('/property/:id',UpdateProperty);
router.delete('/property/:id',DeleteProperty);
// router.get('/',getAllUsers)



module.exports = router;