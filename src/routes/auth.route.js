const express = require('express')
const router = express.Router()
const userService = require('../services/auth.service')

router.route("")
    .post((req, res) => {
        const userInfo = userService.doAtuh(req.body.email);
        return res.status(200).json({
            message: "SUCCESS",
            access_token: userInfo.access_token
        })
    });

module.exports = router;