var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week07-AngularSolarExplorer-Markley'
    });
});

router.get('/:id', function(request, response, next) {
    'use strict';
    response.render(request.params.id, {
        title: ' Week07-AngularSolarExplorer-Markley'
    });
});

router.get('/renewables/:id', function(request, response, next) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'Week07-AngularSolarExplorer-Markley'
    });
});

module.exports = router;
