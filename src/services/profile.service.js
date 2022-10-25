
const profileData = require('../mockData/profiles.js');
const ProfileNotFoundException = require("../exceptions/ProfileNotFoundException")

const fetchProfileByEmail = (email) => {
    const profile = profileData[email];
    if (!profile) {
        throw new ProfileNotFoundException("Invalid token");
    }
    return profile;
}

module.exports.fetchProfileByEmail = fetchProfileByEmail;