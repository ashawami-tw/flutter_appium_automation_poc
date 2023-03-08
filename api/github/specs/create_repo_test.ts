import { spec } from 'pactum';
import { schema } from '../schema/create_repo_schema';
import { testData } from '../test_data/testdata';

describe('Create repo', () => {
  it('create test repo in github', async () => {
    await spec()
      .post('/user/repos')
      .withJson({
        name: testData.repoName,
        description: 'This is a test repository created by Postman',
      })
      .withHeaders({
        Authorization: testData.bearerToken,
      })
      .expectStatus(201)
      .expectJsonMatch({
        name: testData.repoName,
        private: testData.isPrivate,
      })
      .expectJsonSchema(schema);
  });
});
