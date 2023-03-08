import * as dotenv from 'dotenv';
dotenv.config();
const githubBearerToken = process.env.GITHUB_BEARER_TOKEN;

export const testData = {
  repoName: 'Test-repository',
  isPrivate: false,
  bearerToken: `Bearer ${githubBearerToken}`,
};
