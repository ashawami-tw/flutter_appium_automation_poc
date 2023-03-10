import { spec } from 'pactum';

class RepoDetails {
  public readonly spec;

  constructor() {
    this.spec = spec();
  }

  public async getDetails(
    repoName: string,
    username: string,
    bearerToken: string
  ) {
    this.spec
      .get('/repos/{username}/{repo}')
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

export default RepoDetails;
