'use strict';

const spawn = require('child-process-ext/spawn');
const path = require('path');
const localNpmBinPath = path.join(__dirname, './node_modules/npm/bin/npm-cli.js');

(async () => {
    try {
        const { stdoutBuffer } = await spawn('ls', ['./node_modules'], {
            stdio: 'pipe',
            shell: true,
        });
        console.log('OUT', stdoutBuffer.toString());
        await spawn('node', [localNpmBinPath, 'install', '--no-save', 'is-even'], {
            stdio: 'pipe',
            shell: true,
        });
    } catch (e) {
        console.log(String(e.stderrBuffer));
    }
})();
