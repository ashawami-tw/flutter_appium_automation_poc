const request = require('supertest');

class Repo {
  private getHeaders(bearerToken: string) {
    return {
      'Content-Type': 'application/json',
      'User-Agent': 'POC',
      Authorization: bearerToken,
    };
  }

  public async create(
    repoName: string,
    description: string,
    bearerToken: string
  ) {
    return await request('https://api.github.com')
      .post('/user/repos')
      .set(this.getHeaders(bearerToken))
      .send({
        name: repoName,
        description: description,
      });
  }

  public async _delete(
    repoName: string,
    username: string,
    bearerToken: string
  ) {
    return await request('https://api.github.com')
      .delete(`/repos/${username}/${repoName}`)
      .set(this.getHeaders(bearerToken));
  }

  public async getDetails(
    repoName: string,
    username: string,
    bearerToken: string
  ) {
    return await request('https://api.github.com')
      .get(`/repos/${username}/${repoName}`)
      .set(this.getHeaders(bearerToken));
  }
}

export default Repo;
