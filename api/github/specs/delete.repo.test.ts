import { testData } from '../test/testdata';
import Repo from '../requests/repo';
import { assert } from 'chai';

describe('Delete repo', function () {
  let repo: Repo;

  beforeEach(async function () {
    repo = new Repo();
    const res = await repo.create(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );

    assert.strictEqual(res.statusCode, 201);
    this.username = res.body.owner.login;
  });

  it('delete repo from github', async function () {
    const res = await repo._delete(
      testData.repoName,
      this.username,
      testData.bearerToken
    );

    assert.strictEqual(res.statusCode, 204);
  });
});
