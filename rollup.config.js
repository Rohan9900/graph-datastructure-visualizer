import peerDepsExternal  from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { babel } from '@rollup/plugin-babel';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: "./stories/index.js",
    output: [
        {
            
            file: "dist/index.js",
            format: 'es'
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        postcss({
            extensions: ['.css']
        }),
        uglify(),
        babel()
    ]
}