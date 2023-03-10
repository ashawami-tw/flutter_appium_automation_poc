import { spec } from 'pactum';

class Repo {
  public spec;

  public async create(
    repoName: string,
    description: string,
    bearerToken: string
  ) {
    this.spec = spec();
    this.spec
      .post('/user/repos')
      .withJson({
        name: repoName,
        description: description,
      })
      .withHeaders({
        Authorization: bearerToken,
      });

    await this.spec.toss();
  }

  public async _delete(
    repoName: string,
    username: string,
    bearerToken: string
  ) {
    this.spec = spec();
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

  public async getDetails(
    repoName: string,
    username: string,
    bearerToken: string
  ) {
    this.spec = spec();
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

export default Repo;
