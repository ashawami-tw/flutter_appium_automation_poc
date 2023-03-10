import { schema } from '../schema/create.repo.schema';
import { testData } from '../test_data/testdata';
import Repo from '../requests/repo';

describe('Create repo', function () {
  let repo: Repo;

  beforeEach(() => {
    repo = new Repo();
  });

  it('create test repo in github', async function () {
    const res = await repo.create(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );
    this.username = res.body.owner.login;

    repo.spec.response().to.have.status(201);
    repo.spec.response().to.have.jsonSchema(schema);
    repo.spec.response().to.have.jsonMatch({
      name: testData.repoName,
      private: !testData.isPrivate,
    });
  });

  afterEach(async function () {
    await repo._delete(testData.repoName, this.username, testData.bearerToken);

    repo.spec.response().to.have.status(204);
  });
});
