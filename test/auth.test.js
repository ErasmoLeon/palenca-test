import { expect, test } from '@jest/globals';
const axios = require("axios");

test('should do login', async () => {
    const result = await axios.post("http://localhost:3000/uber/login", {
        "email": "pierre@palenca.com",
        "password": "MyPwdChingon123"
    });

    expect(result.status).toBe(200);

    expect(result.data).toMatchObject({
        message: 'SUCCESS',
        access_token: 'cTV0aWFuQ2NqaURGRE82UmZXNVBpdTRxakx3V1F5'
    });
});

test('should get profile info thrown error', async () => {
    try {
        await axios.post("http://localhost:3000/uber/login", {
            "email": "erasmo@palenca.com",
            "password": "123"
        });
    } catch (e) {
        expect(e.response.status).toBe(401);
        expect(e.response.data).toMatchObject({ message: 'CREDENTIALS_INVALID', details: 'Incorrect username or password' });
    }
});