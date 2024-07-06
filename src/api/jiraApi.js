const axios = require('axios');
require('dotenv').config();
//here is my code....

const JIRA_URL = 'https://princeravinderias3.atlassian.net/rest/api/latest/issue/KAN-1?expand=names,renderedFields';
const USERNAME = process.env.USERNAME;
const API_TOKEN = process.env.PASSWORD;

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
