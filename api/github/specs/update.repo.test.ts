import { testData } from '../test_data/testdata';
import Repo from '../requests/repo';

describe('Update repo', () => {
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

  it('convert public repo to private repo', async () => {
    await repo.changeToPrivateMode(
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
