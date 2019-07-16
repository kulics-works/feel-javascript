import { LiteParserVisitor } from "@/compiler/generate/LiteParserVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class LiteLangVisitor extends AbstractParseTreeVisitor<any>
  implements LiteParserVisitor<any> {
    defaultResult() {
        return 0;
    }
}
