const express = require('express')
const router = express.Router()

const userService = require('../services/auth.service')
const profileService = require('../services/profile.service')

router.route('/:access_token')
    .get((req, res) => {
        const { email } = userService.verifyToken(req.params.access_token);
        const profileInfo = profileService.fetchProfileByEmail(email);
        return res.status(200).json({
            message: "SUCCESS",
            ...profileInfo
        })
    });

module.exports = router;