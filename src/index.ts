import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { LiteLexer } from "./compiler/generate/LiteLexer";
import { LiteParser } from "./compiler/generate/LiteParser";
import { LiteLangVisitor } from "./visitor/base";

// Create the lexer and parser
const input: string = `
"demo" {
    test "./test"
}

main : (->) {

}

`;
let inputStream = new ANTLRInputStream(input);
let lexer = new LiteLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new LiteParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.program();

// Create the visitor
const visitor = new LiteLangVisitor();
// Use the visitor entry point
let output = visitor.visit(tree);

console.log(output);

