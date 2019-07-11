import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { XsjsLexer } from "./compiler/generate/XsjsLexer";
import { XsjsParser } from "./compiler/generate/XsjsParser";

import { Visitor } from "./parser/visitor";
// Create the lexer and parser
const input: string = `
1+(2+3)
a= 10
`;
let inputStream = new ANTLRInputStream(input);
let lexer = new XsjsLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new XsjsParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.prog();

// Create the visitor
const visitor = new Visitor();
// Use the visitor entry point
let output = visitor.visit(tree);

console.log(output);

