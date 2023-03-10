import { testData } from '../test_data/testdata';
import DeleteRepo from '../requests/delete.repo';
import CreateRepo from '../requests/create.repo';

describe('Delete repo', () => {
  let create: CreateRepo;
  let _delete: DeleteRepo;
  let _spec;

  beforeEach(async () => {
    create = new CreateRepo();
    _delete = new DeleteRepo();
    await create.newRepo(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );

    create.spec.response().to.have.status(201);
  });

  it('delete test repo in github', async () => {
    await _delete.deleteRepo(
      testData.repoName,
      testData.username,
      testData.bearerToken
    );

    _delete.spec.response().to.have.status(204);
  });
});
