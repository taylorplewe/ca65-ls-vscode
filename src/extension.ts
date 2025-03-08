import * as vscode from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
	console.log("here we go");
	const serverOptions: ServerOptions = {
		command: context.asAbsolutePath('asm6502-lsp'),
		transport: TransportKind.stdio,
	};

	const clientOptions: LanguageClientOptions = {
		documentSelector: [
			{ language: "ca65", scheme: "file" },
			{ language: "ca65", scheme: "untitled" },
		],
	};

	client = new LanguageClient(
		'ca65-ls',
		'ca65-ls',
		serverOptions,
		clientOptions,
	);
	client.start();
	console.log('started!');
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}