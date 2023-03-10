import { spec } from 'pactum';

class DeleteRepo {
  public readonly spec;

  constructor() {
    this.spec = spec();
  }

  public async deleteRepo(
    repoName: string,
    username: string,
    bearerToken: string
  ) {
    this.spec
      .delete('/repos/{username}/{repo}')
      .withPathParams({
        repo: repoName,
        username: username,
      })
      .withHeaders({
        Authorization: bearerToken,
      });

    await this.spec.toss();
  }
}

export default DeleteRepo;
