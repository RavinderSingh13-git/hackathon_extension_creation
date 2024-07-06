var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const vscode = require('vscode');
const { getIssue } = require('./jiraApi');
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.getJiraIssue', () => __awaiter(this, void 0, void 0, function* () {
        const issueKey = yield vscode.window.showInputBox({ prompt: 'Enter JIRA Issue Key' });
        if (issueKey) {
            try {
                const issue = yield getIssue(issueKey);
                vscode.window.showInformationMessage(`Issue ${issueKey}: ${issue.fields.summary}`);
            }
            catch (error) {
                vscode.window.showErrorMessage('Failed to fetch JIRA issue. Check the console for more details.');
            }
        }
        else {
            vscode.window.showWarningMessage('Issue key is required.');
        }
    }));
    context.subscriptions.push(disposable);
}
function deactivate() { }
module.exports = {
    activate,
    deactivate
};
