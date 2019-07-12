import { XsjsVisitor } from "@/compiler/generate/XsjsVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class Visitor extends AbstractParseTreeVisitor<number>
  implements XsjsVisitor<number> {
  defaultResult() {
    return 0;
  }
}
