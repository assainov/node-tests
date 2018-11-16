const request = require('supertest');
const expect = require('expect');

const app = require('./server.js').app;

describe('Server', () => {

    describe('GET /', () => {
        it('should return json with error key response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });
    
    describe('GET /users', () => {
        it('should include a user Talgat Assainov who is 1 year old', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Talgat Assainov',
                        age: 1
                    });
                })
                .end(done);
        });
    });
});
