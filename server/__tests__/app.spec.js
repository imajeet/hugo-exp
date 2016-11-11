import test from 'ava';
import request from 'supertest';
import app from '../server';

function makeServer() {
  return app.listen(1336);
}

const server = makeServer();
test.afterEach.cb(t => {
  server.close();
  t.end();
});

test.cb('Should respond with Analyzed data', t => {
  request(server)
    .get('/api/analyzed/?name=hugoce17&limit=1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err) => {
      t.falsy(err);
      t.end();
    });
});

test.cb('Should respond with 404', t => {
  request(server)
    .get('/api/foo/bar')
    .expect(404)
    .end((err) => {
      t.falsy(err);
      t.end();
    });
});
