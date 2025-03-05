import * as vscode from 'vscode';

// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('ca65-ls-vscode.helloWorld', () => {
		vscode.window.showInformationMessage('i stg');
	});

	context.subscriptions.push(disposable);
}
