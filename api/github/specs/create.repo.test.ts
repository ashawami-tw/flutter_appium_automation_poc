import { spec, expect } from 'pactum';
import { schema } from '../schema/create_repo_schema';
import { testData } from '../test_data/testdata';
import CreateRepo from '../requests/create.repo';

describe('Create repo', () => {
  let create: CreateRepo;
  let _spec;

  beforeEach(() => {
    _spec = spec();
    create = new CreateRepo(_spec);
  });

  it('create test repo in github', async () => {
    await create.newRepo(
      testData.repoName,
      testData.description,
      testData.bearerToken
    );

    _spec.response().to.have.status(201);
    _spec.response().to.have.jsonSchema(schema);
    _spec.response().to.have.jsonMatch({
      name: testData.repoName,
      private: testData.isPrivate,
    });
  });
});
