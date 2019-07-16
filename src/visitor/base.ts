import { LiteParserVisitor } from "../compiler/generate/LiteParserVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import * as parser from '../compiler/generate/LiteParser';

class Result {
    data: any;
    text: string;
    permission: string;
    isVirtual: boolean;
}

class Namespace {
    Name: string;
    Imports: string;
}

const Wrap = "\r\n";
const Terminate = ";";

const Byte = "byte";
const Any = "interface{}";
const Int = "int";
const Num = "float64";
const I8 = "int8";
const I16 = "int16";
const I32 = "int32";
const I64 = "int64";

const U8 = "uint8";
const U16 = "uint16";
const U32 = "uint32";
const U64 = "uint64";

const F32 = "float32";
const F64 = "float64";

const Bool = "bool";
const T = "true";
const F = "false";

const Chr = "rune";
const Str = "string";
const Lst = "Lst";
const Set = "Set";
const Dic = "Dic";

const BlockLeft = "{";
const BlockRight = "}";

const Func = "func ";
const Var = "var ";
const Const = "const ";
const Type = "type ";
const Chan = "chan ";

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class LiteLangVisitor extends AbstractParseTreeVisitor<any>
    implements LiteParserVisitor<any> {

    selfID: string;
    superID: string;
    setID: string;

    defaultResult() {
        return "";
    }

    visitProgram(ctx: parser.ProgramContext): any {
        let statementList = ctx.statement();
        let result = "";
        statementList.forEach(item => {
            result += this.visit(item)
        });

        return result;
    }

    visitId(ctx: parser.IdContext): any {
        let r = new Result();
        r.data = "var";
        let first = this.visit(ctx.getChild(0)) as Result;
        r.permission = first.permission;
        r.text = first.text;
        r.isVirtual = first.isVirtual;
        if (ctx.childCount >= 2) {
            for (let i = 1; i < ctx.childCount; i++) {
                let other = this.visit(ctx.getChild(i)) as Result;
                r.text += "_" + other.text
            }
        }
        switch (r.text) {
            case this.selfID:
                r.text = "this";
                break;
            case this.superID:
                r.text = "super";
                break;
            case this.setID:
                r.text = "value";
                break;
            default:
                break;
        }
        return r;
    }

    visitIdItem(ctx: parser.IdItemContext): any {
        let r = new Result();
        r.data = "var";
        if (ctx.typeBasic() != null) {
            r.permission = "public"
            r.text += ctx.typeBasic().text
            r.isVirtual = true
        } else if (ctx.typeAny() != null) {
            r.permission = "public"
            r.text += ctx.typeAny().text
            r.isVirtual = true
        } else if (ctx.linqKeyword() != null) {
            r.permission = "public"
            r.text += this.visit(ctx.linqKeyword())
            r.isVirtual = true
        } else if (ctx._op.type == parser.LiteParser.IDPublic) {
            r.permission = "public"
            r.text += ctx._op.text
            r.isVirtual = true
        } else if (ctx._op.type == parser.LiteParser.IDPrivate) {
            r.permission = "protected"
            r.text += ctx._op.text
            r.isVirtual = true
        }
        return r;
    }

    visitStatement(ctx: parser.StatementContext): any {
        let obj = "";
        let ns = this.visit(ctx.exportStatement()) as (Namespace | null);
        if (ns == null) {
            return "";
        }
        obj += "export " + ns.Name + BlockLeft + Wrap + ns.Imports;
        for (const item of ctx.namespaceSupportStatement()) {
            obj += this.visit(item) as string;
        }
        obj += BlockRight;
        return obj;
    }

    visitExportStatement(ctx: parser.ExportStatementContext): any {
        let name = ctx.TextLiteral().text;
        let obj = new Namespace();
        obj.Name = name.substr(1, name.length - 2);

        for (const item of ctx.importStatement()) {
            obj.Imports += this.visit(item) as string;
        }
        return obj;
    }

    visitImportStatement(ctx: parser.ImportStatementContext): any {
        let obj = "import * as ";
        // if ctx.AnnotationSupport() != nil {
        //     obj += sf.Visit(ctx.AnnotationSupport()).(string)
        // }
        let ns = ctx.TextLiteral().text;
        if (ctx.call() != null) {
            obj += ". ";
        } else if (ctx.id() != null) {
            obj += (this.visit(ctx.id()) as Result).text;
        }

        obj += " from " + ns + Wrap + Terminate;
        return obj;
    }
}