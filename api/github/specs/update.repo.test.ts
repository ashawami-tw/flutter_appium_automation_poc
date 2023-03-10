import { testData } from '../test_data/testdata';
import Repo from '../requests/repo';

describe('Update repo', () => {
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

  it('convert public repo to private repo', async function () {
    await repo.changeToPrivateMode(
      testData.repoName,
      this.username,
      testData.bearerToken
    );

    repo.spec.response().to.have.status(200);
    repo.spec.response().to.have.jsonMatch({
      name: testData.repoName,
      private: testData.isPrivate,
    });
  });

  afterEach(async function () {
    await repo._delete(testData.repoName, this.username, testData.bearerToken);

    repo.spec.response().to.have.status(204);
  });
});
