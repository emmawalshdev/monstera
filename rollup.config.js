import resolve from '@rollup/plugin-node-resolve'; // A Rollup plugin which locates modules using the Node resolution algorithm, for using third party modules in node_modules
import commonjs from '@rollup/plugin-commonjs'; // A Rollup plugin to convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import multiInput from 'rollup-plugin-multi-input'; // A rollup plugin to bundle modular libraries with sub directories.
import eslint from '@rollup/plugin-eslint'; //  A Rollup plugin to lint entry points and all imported files with ESLint.
import {terser} from 'rollup-plugin-terser'; // A Rollup plugin to generate a minified bundle with terser.
import babel from '@rollup/plugin-babel'; // A Rollup plugin for seamless integration between Rollup and Babel.

export default [
    {
        input: ['src/js/*.js'],
        plugins: [
            multiInput({
                relative: 'src/js/',
            }), 
            eslint({
                fix: true,
                throwOnError: true,
                include: 'src/js/*.js',
            }),
            resolve(),
            babel({
				babelHelpers: 'runtime',
				exclude: 'node_modules/**',
            }),
            commonjs(),
            terser(),
        ],
        output: {
            format: 'esm',
            dir: 'assets',
        },
        watch: {
			clearScreen: false,
		},
    }
]