const vscode = require('vscode');
const { getIssue } = require('./jiraApi');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.getJiraIssue', async () => {
    const issueKey = await vscode.window.showInputBox({ prompt: 'Enter JIRA Issue Key' });

    if (issueKey) {
      try {
        const issue = await getIssue(issueKey);
        vscode.window.showInformationMessage(`Issue ${issueKey}: ${issue.fields.summary}`);
      } catch (error) {
        vscode.window.showErrorMessage('Failed to fetch JIRA issue. Check the console for more details.');
      }
    } else {
      vscode.window.showWarningMessage('Issue key is required.');
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
