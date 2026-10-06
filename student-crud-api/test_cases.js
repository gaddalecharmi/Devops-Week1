const assert = require('node:assert');

const BASE_URL = 'http://localhost:3000';

async function runTests() {
  let temporaryStudentId;

  try {
    const getResponse = await fetch(`${BASE_URL}/students`);
    const getBody = await getResponse.json();

    assert.strictEqual(getResponse.status, 200);
    console.log('PASS: GET /students returns status 200');

    assert.ok(Array.isArray(getBody));
    assert.ok(getBody.length > 0);
    console.log('PASS: GET response contains student data');

    const postResponse = await fetch(`${BASE_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Temporary Test Student',
        age: 21,
        course: 'Testing'
      })
    });

    const postBody = await postResponse.json();

    assert.strictEqual(postResponse.status, 201);
    console.log('PASS: POST /students returns status 201');

    assert.strictEqual(postBody.name, 'Temporary Test Student');
    temporaryStudentId = postBody.id;
    console.log('PASS: POST successfully creates a temporary student');

    const patchResponse = await fetch(
      `${BASE_URL}/students/${temporaryStudentId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          course: 'Updated Testing'
        })
      }
    );

    const patchBody = await patchResponse.json();

    assert.strictEqual(patchResponse.status, 200);
    console.log('PASS: PATCH /students/:id returns status 200');

    assert.strictEqual(patchBody.course, 'Updated Testing');
    console.log('PASS: PATCH successfully updates the temporary student');

    const deleteResponse = await fetch(
      `${BASE_URL}/students/${temporaryStudentId}`,
      {
        method: 'DELETE'
      }
    );

    const deleteBody = await deleteResponse.json();

    assert.strictEqual(deleteResponse.status, 200);
    console.log('PASS: DELETE /students/:id returns status 200');

    assert.strictEqual(
      deleteBody.message,
      'Student deleted successfully'
    );
    console.log('PASS: DELETE successfully deletes the temporary student');

    console.log('All API test cases passed successfully.');

  } catch (error) {
    console.error(`FAIL: ${error.message}`);
    process.exitCode = 1;
  }
}

runTests();