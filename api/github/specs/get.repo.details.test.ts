import { testData } from '../test_data/testdata';
import Repo from '../requests/repo';

describe('Get repo detail', () => {
  let repo: Repo;

  beforeEach(async () => {
    repo = new Repo();
    await repo.create(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );

    repo.spec.response().to.have.status(201);
  });

  it('get repo details in github', async () => {
    await repo.getDetails(
      testData.repoName,
      testData.username,
      testData.bearerToken
    );

    repo.spec.response().to.have.status(200);
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
