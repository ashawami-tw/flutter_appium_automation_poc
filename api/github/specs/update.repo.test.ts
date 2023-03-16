import { testData } from '../test/testdata';
import Repo from '../requests/repo';
import { assert } from 'chai';

describe('Update repo', function () {
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

  it('convert public repo to private repo', async function () {
    const res = await repo.changeToPrivateMode(
      testData.repoName,
      this.username,
      testData.bearerToken
    );

    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.name, testData.repoName);
    assert.strictEqual(res.body.private, testData.isPrivate);
  });

  afterEach(async function () {
    const res = await repo._delete(
      testData.repoName,
      this.username,
      testData.bearerToken
    );

    assert.strictEqual(res.statusCode, 204);
  });
});
