class CreateRepo {
  private readonly spec;

  constructor(spec) {
    this.spec = spec;
  }

  public async newRepo(
    repoName: string,
    description: string,
    bearerToken: string
  ) {
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
}

export default CreateRepo;
