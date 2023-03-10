import { testData } from '../test_data/testdata';
import Repo from '../requests/repo';

describe('Delete repo', function () {
  let repo: Repo;

  beforeEach(async function () {
    repo = new Repo();
    const res = await repo.create(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );

    repo.spec.response().to.have.status(201);
    this.username = res.body.owner.login;
  });

  it('delete repo from github', async function () {
    await repo._delete(testData.repoName, this.username, testData.bearerToken);

    repo.spec.response().to.have.status(204);
  });
});
