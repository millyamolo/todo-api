const request = require('supertest');
const app = require('../index');
const expect = require('chai').expect;

describe('To-Do API', () => {
  it('should GET all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should POST a new todo', async () => {
    const todo = { id: 1, title: 'Write Jenkins pipeline' };
    const res = await request(app)
      .post('/todos')
      .send(todo);
    expect(res.status).to.equal(201);
    expect(res.body).to.deep.equal(todo);
  });

  // ✅ NEW: UPDATE test
  it('should UPDATE an existing todo', async () => {
    const todo = { id: 2, title: 'Old title' };
    await request(app).post('/todos').send(todo);

    const updated = { id: 2, title: 'Updated title' };
    const res = await request(app).put('/todos/2').send(updated);
    expect(res.status).to.equal(200);
    expect(res.body.title).to.equal('Updated title');
  });

  // ✅ NEW: DELETE test
  it('should DELETE a todo', async () => {
    const todo = { id: 3, title: 'To be deleted' };
    await request(app).post('/todos').send(todo);

    const res = await request(app).delete('/todos/3');
    expect(res.status).to.equal(204);
  });
});
