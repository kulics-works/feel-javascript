import { LiteParserVisitor } from '../parser/LiteParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as parser from '../parser/LiteParser';

class LiteLangVisitor extends AbstractParseTreeVisitor<any> implements LiteParserVisitor<any> {

    defaultResult(): number {
        return 0;
    }

    aggregateResult(aggregate: number, nextResult: number): number {
        return aggregate + nextResult;
    }

    visitProgram(ctx: parser.ProgramContext): any {
        return 0;
    }

    visitStatement(ctx: parser.StatementContext): any {
        return 0;
    }
}

export { LiteLangVisitor };