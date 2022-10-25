import { expect, test } from '@jest/globals';
const axios = require("axios");

test('should get profile info', async () => {
    const result = await axios.get("http://localhost:3000/uber/profile/cTV0aWFuQ2NqaURGRE82UmZXNVBpdTRxakx3V1F5");

    expect(result.status).toBe(200);

    expect(result.data).toMatchObject({
        message: 'SUCCESS',
        platform: 'uber',
        profile: {
            country: 'mx',
            city_name: 'Ciudad de Mexico',
            worker_id: '34dc0c89b16fd170eba320ab186d08ed',
            first_name: 'Pierre',
            last_name: 'Delarroqua',
            email: 'pierre@palenca.com',
            phone_prefix: '+52',
            phone_number: '5576955981',
            rating: '4.8',
            lifetime_trips: 1254
        }
    });
});

test('should get profile info thrown error', async () => {
    try {
        await axios.get("http://localhost:3000/uber/profile/123123");
    } catch (e) {
        expect(e.response.status).toBe(401);
        expect(e.response.data).toMatchObject({ message: 'CREDENTIALS_INVALID', details: 'Incorrect token' });
    }
});