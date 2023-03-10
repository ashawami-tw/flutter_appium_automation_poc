import { schema } from '../schema/create.repo.schema';
import { testData } from '../test_data/testdata';
import Repo from '../requests/repo';

describe('Create repo', () => {
  let repo: Repo;

  beforeEach(() => {
    repo = new Repo();
  });

  it('create test repo in github', async () => {
    await repo.create(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );

    repo.spec.response().to.have.status(201);
    repo.spec.response().to.have.jsonSchema(schema);
    repo.spec.response().to.have.jsonMatch({
      name: testData.repoName,
      private: testData.isPrivate,
    });
  });

  afterEach(async () => {
    await repo._delete(
      testData.repoName,
      testData.username,
      testData.bearerToken
    );

    repo.spec.response().to.have.status(204);
  });
});
