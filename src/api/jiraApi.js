const axios = require('axios');

const JIRA_URL = 'https://princeravinderias3.atlassian.net/rest/api/latest/issue/KAN-1?expand=names,renderedFields';
const USERNAME = 'princeravinderias3@gmail.com';
const API_TOKEN = 'ATATT3xFfGF0XjSWuePHeG9qJRfiHMKdKfmgGUv5iRLeQpI9CgDPfj0F4Qcjp9HRH0WVsikMg19u4qIN00ZArWj9QV2P5_oKMSuPsU5LAQ4mjUeKKxgYyJB0wjb01ZTKNbmaDNK39YMav9ust0K8MW77aKSfW2mxE46oEtLHjwbFjCL85Ygmzv4=CBC39426';

const jiraApi = axios.create({
  baseURL: JIRA_URL,
  auth: {
    username: USERNAME,
    password: API_TOKEN
  }
});

async function getIssue(issueKey) {
  try {
    const response = await jiraApi.get(`issue/${issueKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching issue:', error);
    throw error;
  }
}

module.exports = {
  getIssue
};
