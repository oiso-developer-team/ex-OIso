/* eslint-disable */

const esbuild = require('esbuild');
const fs = require('node:fs/promises');
const pkg = require('../package.json');
// const path = require('path');

exports = async() => {
    // console.log(`${process.cwd()}`)

    const startTime = Date.now()

    console.log('Building core...');
    await esbuild.build({
        entryPoints: ['./src/core/index.js'],
        format: 'iife',
        bundle: true,
        minify: true,
        outfile: './dist/core.bundle.js'
    });
    
    console.log('Connecting...');
    const header = await fs.readFile('./resource/header.js', 'utf-8');
    const coreJS = await fs.readFile('./dist/core.bundle.js', 'utf-8');
    const connected = 
        header.replace('{{version}}', pkg.version) +
        `\n${coreJS}\n`;
    
    await fs.writeFile('./dist/ex-oiso.min.user.js', connected);
    
    console.log('Built ex-oiso in %d ms.', Date.now() - startTime)
}
    
try {
    exports()
} catch (err) {
    console.error("Failed to build: %o", err);
}
