// const SQL = require("sql-template-strings");

describe('habit endpoints', () => {
    let api;
    let app;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })

    it('should return a list of all habits in database', async () => {
        const res = await request(api).get('/habit');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
    })

    it('should create a new habit with how many times a day', async () => {
        const res = await request(api)
            .post('/habit')
            .send({
                habitname: 'shopping',
                dailyNum: 3
            }),
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");

        const habitRes = await request(api).get('/habit/2');
        expect(habitRes.statusCode).toEqual(200);
        expect(habitRes.body).toEqual(1);
    })

})