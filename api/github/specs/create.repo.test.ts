import { schema } from '../schema/create.repo.schema';
import { testData } from '../test_data/testdata';
import CreateRepo from '../requests/create.repo';
import DeleteRepo from '../requests/delete.repo';

describe('Create repo', () => {
  let create: CreateRepo;
  let _delete: DeleteRepo;

  beforeEach(() => {
    create = new CreateRepo();
    _delete = new DeleteRepo();
  });

  it('create test repo in github', async () => {
    await create.newRepo(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );

    create.spec.response().to.have.status(201);
    create.spec.response().to.have.jsonSchema(schema);
    create.spec.response().to.have.jsonMatch({
      name: testData.repoName,
      private: testData.isPrivate,
    });
  });

  afterEach(async () => {
    await _delete.deleteRepo(
      testData.repoName,
      testData.username,
      testData.bearerToken
    );

    _delete.spec.response().to.have.status(204);
  });
});
