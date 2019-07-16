import { LiteParserVisitor } from "@/compiler/generate/LiteParserVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class Visitor extends AbstractParseTreeVisitor<any>
  implements LiteParserVisitor<any> {
    defaultResult() {
        return 0;
    }
}
