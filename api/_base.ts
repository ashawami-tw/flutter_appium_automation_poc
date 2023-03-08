const pjr = require('pactum-json-reporter');
const { request, reporter } = require('pactum');

pjr.file = 'report.json';
pjr.path = './report/api-json-report';

before(() => {
  request.setBaseUrl('https://api.github.com');
  request.setDefaultHeaders({
    'Content-Type': 'application/json',
    'User-Agent': 'POC',
  });
  reporter.add(pjr);
});

after(async () => {
  await reporter.end();
});
