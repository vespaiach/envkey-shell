require('envkey');

const { spawn } = require('cross-spawn');

module.exports = function (argv) {
    if (argv.length > 2) {
        const proc = spawn(argv[2], argv.slice(3), {
            stdio: 'inherit',
            shell: true,
        });
        process.on('SIGTERM', () => proc.kill('SIGTERM'));
        process.on('SIGINT', () => proc.kill('SIGINT'));
        process.on('SIGBREAK', () => proc.kill('SIGBREAK'));
        process.on('SIGHUP', () => proc.kill('SIGHUP'));
        proc.on('exit', (code, signal) => {
            process.exit(code ? code : signal === 'SIGINT' ? 0 : 1);
        });
        return proc;
    }
};
