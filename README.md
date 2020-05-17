## 简介

Feel-Javacript，基于[Feel]()极简风格的语法，使用 antlr 实现一个 javascript 版本的语法编译器。

## 导航

- [Feel 语法](/docs/feel.md)
- [antlr 匹配语法](/docs/antlr-match.md)

## get starting

1、安装 antlr4 (Mac oSX 版本)

```bash
$ cd /usr/local/lib
$ sudo curl -O https://www.antlr.org/download/antlr-4.7.2-complete.jar
$ export CLASSPATH=".:/usr/local/lib/antlr-4.7.2-complete.jar:$CLASSPATH"
$ alias antlr4='java -jar /usr/local/lib/antlr-4.7.2-complete.jar'
$ alias grun='java org.antlr.v4.gui.TestRig'
```

2、安装 antlr4ts

```bash
npm install antlr4ts --save
npm install antlr4ts-cli --save-dev
```

3、修改配置文件 package.json，填写如下内容

```json
"scripts": {
  "antlr": "antlr4ts -visitor src/compiler/Xsjs.g4 -o src/compiler/generate -Xexact-output-dir",
}
```

4、运行

```bash
npm run watch
npm run start
```

## 参考

[antlr4 编译选项](https://github.com/antlr/antlr4/blob/master/doc/tool-options.md)

[typescript 编译选项](http://www.typescriptlang.org/docs/handbook/compiler-options.html)
