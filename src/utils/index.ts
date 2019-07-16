// const fs = require("fs");
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";
import * as yaml from "js-yaml";

/**
 *
 *
 * @export 防抖动算法，参考: https://davidwalsh.name/function-debounce
 * @param {*} func
 * @param {number} wait
 * @param {boolean} immediate
 * @returns
 */
export function debounce(func: any, wait: number, immediate: boolean) {
    let timeout: any;
    return function () {
        let context = this;
        let args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/**
 *
 *
 * @export 读取文件内容之前，先保证这是一个文件
 * @param {string} file
 * @param {*} cb
 * @returns {void}
 */
export function readFileContent(file: string, cb: any): void {
    if (!file || fs.lstatSync(file).isDirectory()) {
        return null;
    }
    fs.readFile(file, (err: any, data: any) => {
        cb(err, file, data && data.toString());
    });
}

/**
 *
 *
 * @export 写入文件内容之前，先保证这是一个文件
 * @param {string} file
 * @param {string} content
 * @param {*} cb
 */
export function writeFileContent(file: string, content: string, cb: any) {
    mkdirp(path.dirname(file), function (err: any) {
        if (err) throw err;
        fs.writeFile(file, content, (e: any) => {
            cb(e);
        });
    });
}

/**
 *
 *
 * @export 解析markdown文件
 * @param {string} file
 * @returns
 */
export function parseMarkdown(file: string) {
    let obj = {};
    try {
        const fileContent = fs.readFileSync(file, "utf8");

        const splitContent = fileContent.match(/^-{3}[\s\S]+?-{3}/);

        const frontmatter = yaml.safeLoad(
            splitContent[0].substring(3, splitContent[0].length - 3)
        );

        const content = fileContent.substring(splitContent[0].length).trim();
        let previewMatch = content.match(/[\s\S]+?(<!-- more -->)/);
        let preview =
            previewMatch === null
                ? ""
                : previewMatch[0].substring(
                    0,
                    previewMatch[0].length - "<!-- more -->".length
                );
        obj = { ...frontmatter, ...{ content, preview } };

        console.log("preview", preview);
    } catch (error) {
        console.log(error);
    }
    return obj;
}
