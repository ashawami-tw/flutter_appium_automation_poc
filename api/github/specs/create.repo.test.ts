import { schema } from '../schema/create.repo.schema';
import { validate } from 'jsonschema';
import { testData } from '../test/testdata';
import Repo from '../requests/repo';
import { assert } from 'chai';

describe('Create repo', function () {
  let repo: Repo;

  beforeEach(() => {
    repo = new Repo();
  });

  it('create new repo in github', async function () {
    const res = await repo.create(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );

    this.username = res.body.owner.login;
    assert.strictEqual(res.statusCode, 201);
    assert.strictEqual(validate(res.body, schema).errors.length, 0);
    assert.strictEqual(res.body.name, testData.repoName);
    assert.strictEqual(res.body.private, !testData.isPrivate);
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
