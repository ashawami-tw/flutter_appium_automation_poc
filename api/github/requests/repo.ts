const request = require('supertest');

class Repo {
  private readonly baseUrl = 'https://api.github.com';

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
    return await request(this.baseUrl)
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
    return await request(this.baseUrl)
      .delete(`/repos/${username}/${repoName}`)
      .set(this.getHeaders(bearerToken));
  }

  public async getDetails(
    repoName: string,
    username: string,
    bearerToken: string
  ) {
    return await request(this.baseUrl)
      .get(`/repos/${username}/${repoName}`)
      .set(this.getHeaders(bearerToken));
  }

  public async changeToPrivateMode(
    repoName: string,
    username: string,
    bearerToken: string
  ) {
    return await request(this.baseUrl)
      .patch(`/repos/${username}/${repoName}`)
      .set(this.getHeaders(bearerToken))
      .send({
        name: repoName,
        private: true,
      });
  }
}

export default Repo;
