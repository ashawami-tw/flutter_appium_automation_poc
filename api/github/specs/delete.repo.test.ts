import { testData } from '../test_data/testdata';
import Repo from '../requests/repo';

describe('Delete repo', () => {
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

  it('delete test repo in github', async () => {
    await repo._delete(
      testData.repoName,
      testData.username,
      testData.bearerToken
    );

    repo.spec.response().to.have.status(204);
  });
});
