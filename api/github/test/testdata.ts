import * as dotenv from 'dotenv';
dotenv.config();
const githubBearerToken = process.env.GITHUB_BEARER_TOKEN;

export const testData = {
  repoName: 'Test-repository',
  description: 'This is a test repository created by Postman',
  isPrivate: true,
  bearerToken: `Bearer ${githubBearerToken}`,
};
