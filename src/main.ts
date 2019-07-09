import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { LiteLexer } from './parser/LiteLexer';
import { LiteParser } from './parser/LiteParser';
import { LiteLangVisitor } from './visitor/base';

// Create the lexer and parser
let inputStream = new ANTLRInputStream("text");
let lexer = new LiteLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new LiteParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let ast = parser.program();

// Create the visitor
const visitor = new LiteLangVisitor();
// Use the visitor entry point
let result = visitor.visit(ast);

console.log(result);