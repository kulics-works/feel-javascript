// Generated from src/compiler/LiteParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LiteParserVisitor } from "./LiteParserVisitor";


export class LiteParser extends Parser {
	public static readonly LinqFrom = 1;
	public static readonly LinqBy = 2;
	public static readonly LinqSelect = 3;
	public static readonly LinqWhere = 4;
	public static readonly LinqGroup = 5;
	public static readonly LinqInto = 6;
	public static readonly LinqOrderby = 7;
	public static readonly LinqJoin = 8;
	public static readonly LinqLet = 9;
	public static readonly LinqIn = 10;
	public static readonly LinqOn = 11;
	public static readonly LinqEquals = 12;
	public static readonly LinqAscending = 13;
	public static readonly LinqDescending = 14;
	public static readonly Pow = 15;
	public static readonly Root = 16;
	public static readonly Log = 17;
	public static readonly Add_Equal = 18;
	public static readonly Sub_Equal = 19;
	public static readonly Mul_Equal = 20;
	public static readonly Div_Equal = 21;
	public static readonly Mod_Equal = 22;
	public static readonly Colon_Equal = 23;
	public static readonly Equal_Equal = 24;
	public static readonly Less_Equal = 25;
	public static readonly Greater_Equal = 26;
	public static readonly Not_Equal = 27;
	public static readonly Dot_Dot_Dot = 28;
	public static readonly Dot_Dot = 29;
	public static readonly Dot = 30;
	public static readonly Comma = 31;
	public static readonly Equal_Arrow = 32;
	public static readonly Right_Arrow = 33;
	public static readonly Left_Arrow = 34;
	public static readonly Right_Flow = 35;
	public static readonly Left_Flow = 36;
	public static readonly Equal = 37;
	public static readonly Less = 38;
	public static readonly Greater = 39;
	public static readonly Semi = 40;
	public static readonly Left_Paren = 41;
	public static readonly Right_Paren = 42;
	public static readonly Left_Brace = 43;
	public static readonly Right_Brace = 44;
	public static readonly Left_Brack = 45;
	public static readonly Right_Brack = 46;
	public static readonly Colon_Colon = 47;
	public static readonly Colon = 48;
	public static readonly Question = 49;
	public static readonly At = 50;
	public static readonly Bang = 51;
	public static readonly Wave = 52;
	public static readonly Add = 53;
	public static readonly Sub = 54;
	public static readonly Mul = 55;
	public static readonly Div = 56;
	public static readonly Mod = 57;
	public static readonly Slash = 58;
	public static readonly And = 59;
	public static readonly Or = 60;
	public static readonly Xor = 61;
	public static readonly TypeI8 = 62;
	public static readonly TypeU8 = 63;
	public static readonly TypeI16 = 64;
	public static readonly TypeU16 = 65;
	public static readonly TypeI32 = 66;
	public static readonly TypeU32 = 67;
	public static readonly TypeI64 = 68;
	public static readonly TypeU64 = 69;
	public static readonly TypeF32 = 70;
	public static readonly TypeF64 = 71;
	public static readonly TypeChr = 72;
	public static readonly TypeStr = 73;
	public static readonly TypeBool = 74;
	public static readonly TypeInt = 75;
	public static readonly TypeNum = 76;
	public static readonly TypeByte = 77;
	public static readonly TypeAny = 78;
	public static readonly NilLiteral = 79;
	public static readonly TrueLiteral = 80;
	public static readonly FalseLiteral = 81;
	public static readonly UndefinedLiteral = 82;
	public static readonly NumberLiteral = 83;
	public static readonly TextLiteral = 84;
	public static readonly CharLiteral = 85;
	public static readonly IDPrivate = 86;
	public static readonly IDPublic = 87;
	public static readonly Discard = 88;
	public static readonly Big_Big_Comment = 89;
	public static readonly Big_Comment = 90;
	public static readonly Comment = 91;
	public static readonly New_Line = 92;
	public static readonly WS = 93;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_exportStatement = 2;
	public static readonly RULE_importStatement = 3;
	public static readonly RULE_namespaceSupportStatement = 4;
	public static readonly RULE_typeAliasStatement = 5;
	public static readonly RULE_typeRedefineStatement = 6;
	public static readonly RULE_enumStatement = 7;
	public static readonly RULE_enumSupportStatement = 8;
	public static readonly RULE_namespaceVariableStatement = 9;
	public static readonly RULE_namespaceControlStatement = 10;
	public static readonly RULE_namespaceConstantStatement = 11;
	public static readonly RULE_namespaceFunctionStatement = 12;
	public static readonly RULE_packageStatement = 13;
	public static readonly RULE_packageSupportStatement = 14;
	public static readonly RULE_includeStatement = 15;
	public static readonly RULE_packageNewStatement = 16;
	public static readonly RULE_packageVariableStatement = 17;
	public static readonly RULE_packageControlSubStatement = 18;
	public static readonly RULE_packageEventStatement = 19;
	public static readonly RULE_implementStatement = 20;
	public static readonly RULE_implementSupportStatement = 21;
	public static readonly RULE_implementFunctionStatement = 22;
	public static readonly RULE_implementControlStatement = 23;
	public static readonly RULE_overrideStatement = 24;
	public static readonly RULE_overrideSupportStatement = 25;
	public static readonly RULE_overrideFunctionStatement = 26;
	public static readonly RULE_overrideControlStatement = 27;
	public static readonly RULE_protocolStatement = 28;
	public static readonly RULE_protocolSupportStatement = 29;
	public static readonly RULE_protocolControlStatement = 30;
	public static readonly RULE_protocolControlSubStatement = 31;
	public static readonly RULE_protocolFunctionStatement = 32;
	public static readonly RULE_functionStatement = 33;
	public static readonly RULE_returnStatement = 34;
	public static readonly RULE_parameterClauseIn = 35;
	public static readonly RULE_parameterClauseOut = 36;
	public static readonly RULE_parameterClauseSelf = 37;
	public static readonly RULE_parameter = 38;
	public static readonly RULE_functionSupportStatement = 39;
	public static readonly RULE_judgeCaseStatement = 40;
	public static readonly RULE_caseStatement = 41;
	public static readonly RULE_caseExprStatement = 42;
	public static readonly RULE_judgeStatement = 43;
	public static readonly RULE_judgeElseStatement = 44;
	public static readonly RULE_judgeIfStatement = 45;
	public static readonly RULE_judgeElseIfStatement = 46;
	public static readonly RULE_loopStatement = 47;
	public static readonly RULE_loopEachStatement = 48;
	public static readonly RULE_loopCaseStatement = 49;
	public static readonly RULE_loopInfiniteStatement = 50;
	public static readonly RULE_loopJumpStatement = 51;
	public static readonly RULE_loopContinueStatement = 52;
	public static readonly RULE_checkStatement = 53;
	public static readonly RULE_usingStatement = 54;
	public static readonly RULE_checkErrorStatement = 55;
	public static readonly RULE_checkFinallyStatment = 56;
	public static readonly RULE_reportStatement = 57;
	public static readonly RULE_iteratorStatement = 58;
	public static readonly RULE_variableStatement = 59;
	public static readonly RULE_variableDeclaredStatement = 60;
	public static readonly RULE_channelAssignStatement = 61;
	public static readonly RULE_assignStatement = 62;
	public static readonly RULE_expressionStatement = 63;
	public static readonly RULE_primaryExpression = 64;
	public static readonly RULE_expression = 65;
	public static readonly RULE_callExpression = 66;
	public static readonly RULE_tuple = 67;
	public static readonly RULE_expressionList = 68;
	public static readonly RULE_annotationSupport = 69;
	public static readonly RULE_annotation = 70;
	public static readonly RULE_annotationList = 71;
	public static readonly RULE_annotationItem = 72;
	public static readonly RULE_annotationAssign = 73;
	public static readonly RULE_callFunc = 74;
	public static readonly RULE_callChannel = 75;
	public static readonly RULE_callElement = 76;
	public static readonly RULE_callPkg = 77;
	public static readonly RULE_callNew = 78;
	public static readonly RULE_getType = 79;
	public static readonly RULE_typeConversion = 80;
	public static readonly RULE_pkgAssign = 81;
	public static readonly RULE_pkgAssignElement = 82;
	public static readonly RULE_listAssign = 83;
	public static readonly RULE_setAssign = 84;
	public static readonly RULE_dictionaryAssign = 85;
	public static readonly RULE_callAwait = 86;
	public static readonly RULE_list = 87;
	public static readonly RULE_set = 88;
	public static readonly RULE_dictionary = 89;
	public static readonly RULE_dictionaryElement = 90;
	public static readonly RULE_slice = 91;
	public static readonly RULE_sliceFull = 92;
	public static readonly RULE_sliceStart = 93;
	public static readonly RULE_sliceEnd = 94;
	public static readonly RULE_nameSpaceItem = 95;
	public static readonly RULE_name = 96;
	public static readonly RULE_templateDefine = 97;
	public static readonly RULE_templateDefineItem = 98;
	public static readonly RULE_templateCall = 99;
	public static readonly RULE_lambda = 100;
	public static readonly RULE_lambdaIn = 101;
	public static readonly RULE_pkgAnonymous = 102;
	public static readonly RULE_pkgAnonymousAssign = 103;
	public static readonly RULE_pkgAnonymousAssignElement = 104;
	public static readonly RULE_functionExpression = 105;
	public static readonly RULE_tupleExpression = 106;
	public static readonly RULE_plusMinus = 107;
	public static readonly RULE_negate = 108;
	public static readonly RULE_bitwiseNotExpression = 109;
	public static readonly RULE_linq = 110;
	public static readonly RULE_linqItem = 111;
	public static readonly RULE_linqKeyword = 112;
	public static readonly RULE_linqHeadKeyword = 113;
	public static readonly RULE_linqBodyKeyword = 114;
	public static readonly RULE_stringExpression = 115;
	public static readonly RULE_stringExpressionElement = 116;
	public static readonly RULE_dataStatement = 117;
	public static readonly RULE_floatExpr = 118;
	public static readonly RULE_integerExpr = 119;
	public static readonly RULE_typeNotNull = 120;
	public static readonly RULE_typeReference = 121;
	public static readonly RULE_typeNullable = 122;
	public static readonly RULE_typeType = 123;
	public static readonly RULE_typeTuple = 124;
	public static readonly RULE_typeArray = 125;
	public static readonly RULE_typeList = 126;
	public static readonly RULE_typeSet = 127;
	public static readonly RULE_typeDictionary = 128;
	public static readonly RULE_typeChannel = 129;
	public static readonly RULE_typePackage = 130;
	public static readonly RULE_typeFunction = 131;
	public static readonly RULE_typeAny = 132;
	public static readonly RULE_typeFunctionParameterClause = 133;
	public static readonly RULE_typeBasic = 134;
	public static readonly RULE_nilExpr = 135;
	public static readonly RULE_boolExpr = 136;
	public static readonly RULE_judgeType = 137;
	public static readonly RULE_bitwise = 138;
	public static readonly RULE_bitwiseAnd = 139;
	public static readonly RULE_bitwiseOr = 140;
	public static readonly RULE_bitwiseNot = 141;
	public static readonly RULE_bitwiseXor = 142;
	public static readonly RULE_bitwiseLeftShift = 143;
	public static readonly RULE_bitwiseRightShift = 144;
	public static readonly RULE_judge = 145;
	public static readonly RULE_assign = 146;
	public static readonly RULE_add = 147;
	public static readonly RULE_mul = 148;
	public static readonly RULE_pow = 149;
	public static readonly RULE_call = 150;
	public static readonly RULE_wave = 151;
	public static readonly RULE_id = 152;
	public static readonly RULE_idItem = 153;
	public static readonly RULE_end = 154;
	public static readonly RULE_more = 155;
	public static readonly RULE_left_brace = 156;
	public static readonly RULE_right_brace = 157;
	public static readonly RULE_left_paren = 158;
	public static readonly RULE_right_paren = 159;
	public static readonly RULE_left_brack = 160;
	public static readonly RULE_right_brack = 161;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "exportStatement", "importStatement", "namespaceSupportStatement", 
		"typeAliasStatement", "typeRedefineStatement", "enumStatement", "enumSupportStatement", 
		"namespaceVariableStatement", "namespaceControlStatement", "namespaceConstantStatement", 
		"namespaceFunctionStatement", "packageStatement", "packageSupportStatement", 
		"includeStatement", "packageNewStatement", "packageVariableStatement", 
		"packageControlSubStatement", "packageEventStatement", "implementStatement", 
		"implementSupportStatement", "implementFunctionStatement", "implementControlStatement", 
		"overrideStatement", "overrideSupportStatement", "overrideFunctionStatement", 
		"overrideControlStatement", "protocolStatement", "protocolSupportStatement", 
		"protocolControlStatement", "protocolControlSubStatement", "protocolFunctionStatement", 
		"functionStatement", "returnStatement", "parameterClauseIn", "parameterClauseOut", 
		"parameterClauseSelf", "parameter", "functionSupportStatement", "judgeCaseStatement", 
		"caseStatement", "caseExprStatement", "judgeStatement", "judgeElseStatement", 
		"judgeIfStatement", "judgeElseIfStatement", "loopStatement", "loopEachStatement", 
		"loopCaseStatement", "loopInfiniteStatement", "loopJumpStatement", "loopContinueStatement", 
		"checkStatement", "usingStatement", "checkErrorStatement", "checkFinallyStatment", 
		"reportStatement", "iteratorStatement", "variableStatement", "variableDeclaredStatement", 
		"channelAssignStatement", "assignStatement", "expressionStatement", "primaryExpression", 
		"expression", "callExpression", "tuple", "expressionList", "annotationSupport", 
		"annotation", "annotationList", "annotationItem", "annotationAssign", 
		"callFunc", "callChannel", "callElement", "callPkg", "callNew", "getType", 
		"typeConversion", "pkgAssign", "pkgAssignElement", "listAssign", "setAssign", 
		"dictionaryAssign", "callAwait", "list", "set", "dictionary", "dictionaryElement", 
		"slice", "sliceFull", "sliceStart", "sliceEnd", "nameSpaceItem", "name", 
		"templateDefine", "templateDefineItem", "templateCall", "lambda", "lambdaIn", 
		"pkgAnonymous", "pkgAnonymousAssign", "pkgAnonymousAssignElement", "functionExpression", 
		"tupleExpression", "plusMinus", "negate", "bitwiseNotExpression", "linq", 
		"linqItem", "linqKeyword", "linqHeadKeyword", "linqBodyKeyword", "stringExpression", 
		"stringExpressionElement", "dataStatement", "floatExpr", "integerExpr", 
		"typeNotNull", "typeReference", "typeNullable", "typeType", "typeTuple", 
		"typeArray", "typeList", "typeSet", "typeDictionary", "typeChannel", "typePackage", 
		"typeFunction", "typeAny", "typeFunctionParameterClause", "typeBasic", 
		"nilExpr", "boolExpr", "judgeType", "bitwise", "bitwiseAnd", "bitwiseOr", 
		"bitwiseNot", "bitwiseXor", "bitwiseLeftShift", "bitwiseRightShift", "judge", 
		"assign", "add", "mul", "pow", "call", "wave", "id", "idItem", "end", 
		"more", "left_brace", "right_brace", "left_paren", "right_paren", "left_brack", 
		"right_brack",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'from'", "'by'", "'select'", "'where'", "'group'", "'into'", 
		"'orderby'", "'join'", "'let'", "'in'", "'on'", "'equals'", "'ascending'", 
		"'descending'", "'**'", "'//'", "'%%'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "':='", "'=='", "'<='", "'>='", "'><'", "'...'", "'..'", "'.'", 
		"','", "'=>'", "'->'", "'<-'", "'~>'", "'<~'", "'='", "'<'", "'>'", "';'", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'::'", "':'", "'?'", "'@'", 
		"'!'", "'~'", "'+'", "'-'", "'*'", "'/'", "'%'", "'\\'", "'&'", "'|'", 
		"'^'", "'I8'", "'U8'", "'I16'", "'U16'", "'I32'", "'U32'", "'I64'", "'U64'", 
		"'F32'", "'F64'", "'Chr'", "'Str'", "'Bool'", "'Int'", "'Num'", "'Byte'", 
		"'Any'", "'Nil'", "'True'", "'False'", "'Undefined'", undefined, undefined, 
		undefined, undefined, undefined, "'_'", undefined, undefined, undefined, 
		"'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LinqFrom", "LinqBy", "LinqSelect", "LinqWhere", "LinqGroup", 
		"LinqInto", "LinqOrderby", "LinqJoin", "LinqLet", "LinqIn", "LinqOn", 
		"LinqEquals", "LinqAscending", "LinqDescending", "Pow", "Root", "Log", 
		"Add_Equal", "Sub_Equal", "Mul_Equal", "Div_Equal", "Mod_Equal", "Colon_Equal", 
		"Equal_Equal", "Less_Equal", "Greater_Equal", "Not_Equal", "Dot_Dot_Dot", 
		"Dot_Dot", "Dot", "Comma", "Equal_Arrow", "Right_Arrow", "Left_Arrow", 
		"Right_Flow", "Left_Flow", "Equal", "Less", "Greater", "Semi", "Left_Paren", 
		"Right_Paren", "Left_Brace", "Right_Brace", "Left_Brack", "Right_Brack", 
		"Colon_Colon", "Colon", "Question", "At", "Bang", "Wave", "Add", "Sub", 
		"Mul", "Div", "Mod", "Slash", "And", "Or", "Xor", "TypeI8", "TypeU8", 
		"TypeI16", "TypeU16", "TypeI32", "TypeU32", "TypeI64", "TypeU64", "TypeF32", 
		"TypeF64", "TypeChr", "TypeStr", "TypeBool", "TypeInt", "TypeNum", "TypeByte", 
		"TypeAny", "NilLiteral", "TrueLiteral", "FalseLiteral", "UndefinedLiteral", 
		"NumberLiteral", "TextLiteral", "CharLiteral", "IDPrivate", "IDPublic", 
		"Discard", "Big_Big_Comment", "Big_Comment", "Comment", "New_Line", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LiteParser._LITERAL_NAMES, LiteParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LiteParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LiteParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LiteParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LiteParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LiteParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LiteParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 324;
				this.statement();
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LiteParser.Left_Brack || _la === LiteParser.TextLiteral || _la === LiteParser.New_Line);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LiteParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 329;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 335;
				this.annotationSupport();
				}
			}

			this.state = 338;
			this.exportStatement();
			this.state = 342;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 339;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 345;
					this.namespaceSupportStatement();
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let _localctx: ExportStatementContext = new ExportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LiteParser.RULE_exportStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(LiteParser.TextLiteral);
			this.state = 352;
			this.left_brace();
			this.state = 357;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 355;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case LiteParser.Left_Brack:
					case LiteParser.TextLiteral:
						{
						this.state = 353;
						this.importStatement();
						}
						break;
					case LiteParser.New_Line:
						{
						this.state = 354;
						this.match(LiteParser.New_Line);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 360;
			this.right_brace();
			this.state = 361;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LiteParser.RULE_importStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 363;
				this.annotationSupport();
				}
			}

			this.state = 366;
			this.match(LiteParser.TextLiteral);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
				{
				this.state = 367;
				this.id();
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Dot) {
					{
					this.state = 368;
					this.call();
					}
				}

				}
			}

			this.state = 373;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceSupportStatement(): NamespaceSupportStatementContext {
		let _localctx: NamespaceSupportStatementContext = new NamespaceSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LiteParser.RULE_namespaceSupportStatement);
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 375;
				this.namespaceVariableStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 376;
				this.namespaceControlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 377;
				this.namespaceFunctionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 378;
				this.namespaceConstantStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 379;
				this.packageStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 380;
				this.protocolStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 381;
				this.implementStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 382;
				this.overrideStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 383;
				this.packageNewStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 384;
				this.enumStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 385;
				this.typeAliasStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 386;
				this.typeRedefineStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 387;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasStatement(): TypeAliasStatementContext {
		let _localctx: TypeAliasStatementContext = new TypeAliasStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LiteParser.RULE_typeAliasStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.id();
			this.state = 391;
			this.match(LiteParser.Equal_Arrow);
			this.state = 392;
			this.typeType();
			this.state = 393;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeRedefineStatement(): TypeRedefineStatementContext {
		let _localctx: TypeRedefineStatementContext = new TypeRedefineStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LiteParser.RULE_typeRedefineStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.id();
			this.state = 396;
			this.match(LiteParser.Right_Arrow);
			this.state = 397;
			this.typeType();
			this.state = 398;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumStatement(): EnumStatementContext {
		let _localctx: EnumStatementContext = new EnumStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LiteParser.RULE_enumStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 400;
				this.annotationSupport();
				}
			}

			this.state = 403;
			this.id();
			this.state = 404;
			this.match(LiteParser.Right_Arrow);
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 405;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 411;
			this.typeType();
			this.state = 412;
			this.left_brack();
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
				{
				{
				this.state = 413;
				this.enumSupportStatement();
				}
				}
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 419;
			this.right_brack();
			this.state = 420;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumSupportStatement(): EnumSupportStatementContext {
		let _localctx: EnumSupportStatementContext = new EnumSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LiteParser.RULE_enumSupportStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.id();
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Equal) {
				{
				this.state = 423;
				this.match(LiteParser.Equal);
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Add || _la === LiteParser.Sub) {
					{
					this.state = 424;
					this.add();
					}
				}

				this.state = 427;
				this.integerExpr();
				}
			}

			this.state = 430;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceVariableStatement(): NamespaceVariableStatementContext {
		let _localctx: NamespaceVariableStatementContext = new NamespaceVariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LiteParser.RULE_namespaceVariableStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 432;
				this.annotationSupport();
				}
			}

			this.state = 435;
			this.id();
			this.state = 444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Colon_Equal:
				{
				this.state = 436;
				this.match(LiteParser.Colon_Equal);
				this.state = 437;
				this.expression(0);
				}
				break;
			case LiteParser.Colon:
				{
				this.state = 438;
				this.match(LiteParser.Colon);
				this.state = 439;
				this.typeType();
				this.state = 442;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Equal) {
					{
					this.state = 440;
					this.match(LiteParser.Equal);
					this.state = 441;
					this.expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 446;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceControlStatement(): NamespaceControlStatementContext {
		let _localctx: NamespaceControlStatementContext = new NamespaceControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LiteParser.RULE_namespaceControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 448;
				this.annotationSupport();
				}
			}

			this.state = 451;
			this.id();
			this.state = 452;
			this.left_paren();
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 453;
				this.expression(0);
				}
			}

			this.state = 456;
			this.right_paren();
			this.state = 457;
			this.match(LiteParser.Colon);
			this.state = 458;
			this.typeType();
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brace) {
				{
				this.state = 459;
				this.left_brace();
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 460;
					this.packageControlSubStatement();
					}
					}
					this.state = 463;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0));
				this.state = 465;
				this.right_brace();
				}
			}

			this.state = 469;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceConstantStatement(): NamespaceConstantStatementContext {
		let _localctx: NamespaceConstantStatementContext = new NamespaceConstantStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LiteParser.RULE_namespaceConstantStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 471;
				this.annotationSupport();
				}
			}

			this.state = 474;
			this.id();
			this.state = 480;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Colon:
				{
				this.state = 475;
				this.match(LiteParser.Colon);
				this.state = 476;
				this.typeType();
				this.state = 477;
				this.match(LiteParser.Colon);
				}
				break;
			case LiteParser.Colon_Colon:
				{
				this.state = 479;
				this.match(LiteParser.Colon_Colon);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 482;
			this.expression(0);
			this.state = 483;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceFunctionStatement(): NamespaceFunctionStatementContext {
		let _localctx: NamespaceFunctionStatementContext = new NamespaceFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LiteParser.RULE_namespaceFunctionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 485;
				this.annotationSupport();
				}
			}

			this.state = 488;
			this.id();
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 489;
				this.templateDefine();
				}
			}

			this.state = 492;
			this.left_paren();
			this.state = 493;
			this.parameterClauseIn();
			this.state = 494;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 495;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 501;
			this.parameterClauseOut();
			this.state = 502;
			this.right_paren();
			this.state = 503;
			this.left_brace();
			this.state = 507;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 504;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 510;
			this.right_brace();
			this.state = 511;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageStatement(): PackageStatementContext {
		let _localctx: PackageStatementContext = new PackageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LiteParser.RULE_packageStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 513;
				this.annotationSupport();
				}
			}

			this.state = 516;
			this.id();
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 517;
				this.templateDefine();
				}
			}

			this.state = 520;
			this.match(LiteParser.Right_Arrow);
			this.state = 521;
			this.left_brace();
			this.state = 525;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 522;
					this.packageSupportStatement();
					}
					}
				}
				this.state = 527;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 528;
			this.right_brace();
			this.state = 529;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageSupportStatement(): PackageSupportStatementContext {
		let _localctx: PackageSupportStatementContext = new PackageSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LiteParser.RULE_packageSupportStatement);
		try {
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 531;
				this.includeStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 532;
				this.packageVariableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 533;
				this.packageEventStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 534;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public includeStatement(): IncludeStatementContext {
		let _localctx: IncludeStatementContext = new IncludeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LiteParser.RULE_includeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(LiteParser.Colon);
			this.state = 538;
			this.typeType();
			this.state = 539;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageNewStatement(): PackageNewStatementContext {
		let _localctx: PackageNewStatementContext = new PackageNewStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LiteParser.RULE_packageNewStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 541;
				this.annotationSupport();
				}
			}

			this.state = 544;
			this.parameterClauseSelf();
			this.state = 545;
			this.match(LiteParser.Less);
			this.state = 546;
			this.match(LiteParser.Greater);
			this.state = 547;
			this.left_paren();
			this.state = 548;
			this.parameterClauseIn();
			this.state = 549;
			this.right_paren();
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 550;
				this.left_paren();
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
					{
					this.state = 551;
					this.expressionList();
					}
				}

				this.state = 554;
				this.right_paren();
				}
			}

			this.state = 558;
			this.left_brace();
			this.state = 562;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 559;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 564;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 565;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageVariableStatement(): PackageVariableStatementContext {
		let _localctx: PackageVariableStatementContext = new PackageVariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LiteParser.RULE_packageVariableStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 567;
				this.annotationSupport();
				}
			}

			this.state = 570;
			this.id();
			this.state = 579;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Colon_Equal:
				{
				this.state = 571;
				this.match(LiteParser.Colon_Equal);
				this.state = 572;
				this.expression(0);
				}
				break;
			case LiteParser.Colon:
				{
				this.state = 573;
				this.match(LiteParser.Colon);
				this.state = 574;
				this.typeType();
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Equal) {
					{
					this.state = 575;
					this.match(LiteParser.Equal);
					this.state = 576;
					this.expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 581;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageControlSubStatement(): PackageControlSubStatementContext {
		let _localctx: PackageControlSubStatementContext = new PackageControlSubStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LiteParser.RULE_packageControlSubStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this.id();
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 584;
				this.left_paren();
				this.state = 585;
				this.id();
				this.state = 586;
				this.right_paren();
				}
			}

			this.state = 590;
			this.left_brace();
			this.state = 592;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 591;
					this.functionSupportStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 594;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 596;
			this.right_brace();
			this.state = 597;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageEventStatement(): PackageEventStatementContext {
		let _localctx: PackageEventStatementContext = new PackageEventStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LiteParser.RULE_packageEventStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.id();
			this.state = 600;
			this.match(LiteParser.Colon);
			this.state = 601;
			this.left_brack();
			this.state = 602;
			this.match(LiteParser.Question);
			this.state = 603;
			this.right_brack();
			this.state = 604;
			this.nameSpaceItem();
			this.state = 605;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementStatement(): ImplementStatementContext {
		let _localctx: ImplementStatementContext = new ImplementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LiteParser.RULE_implementStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.parameterClauseSelf();
			this.state = 608;
			this.match(LiteParser.Right_Arrow);
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LiteParser.Left_Paren - 41)) | (1 << (LiteParser.Left_Brack - 41)) | (1 << (LiteParser.Question - 41)) | (1 << (LiteParser.Bang - 41)) | (1 << (LiteParser.TypeI8 - 41)) | (1 << (LiteParser.TypeU8 - 41)) | (1 << (LiteParser.TypeI16 - 41)) | (1 << (LiteParser.TypeU16 - 41)) | (1 << (LiteParser.TypeI32 - 41)) | (1 << (LiteParser.TypeU32 - 41)) | (1 << (LiteParser.TypeI64 - 41)) | (1 << (LiteParser.TypeU64 - 41)) | (1 << (LiteParser.TypeF32 - 41)) | (1 << (LiteParser.TypeF64 - 41)) | (1 << (LiteParser.TypeChr - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (LiteParser.TypeStr - 73)) | (1 << (LiteParser.TypeBool - 73)) | (1 << (LiteParser.TypeInt - 73)) | (1 << (LiteParser.TypeNum - 73)) | (1 << (LiteParser.TypeByte - 73)) | (1 << (LiteParser.TypeAny - 73)) | (1 << (LiteParser.IDPrivate - 73)) | (1 << (LiteParser.IDPublic - 73)))) !== 0)) {
				{
				this.state = 609;
				this.typeType();
				}
			}

			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 612;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 618;
			this.left_brace();
			this.state = 622;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 619;
					this.implementSupportStatement();
					}
					}
				}
				this.state = 624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 625;
			this.right_brace();
			this.state = 626;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementSupportStatement(): ImplementSupportStatementContext {
		let _localctx: ImplementSupportStatementContext = new ImplementSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LiteParser.RULE_implementSupportStatement);
		try {
			this.state = 631;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 628;
				this.implementFunctionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 629;
				this.implementControlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 630;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementFunctionStatement(): ImplementFunctionStatementContext {
		let _localctx: ImplementFunctionStatementContext = new ImplementFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LiteParser.RULE_implementFunctionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 633;
				this.annotationSupport();
				}
			}

			this.state = 636;
			this.id();
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 637;
				this.templateDefine();
				}
			}

			this.state = 640;
			this.left_paren();
			this.state = 641;
			this.parameterClauseIn();
			this.state = 642;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 643;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 649;
			this.parameterClauseOut();
			this.state = 650;
			this.right_paren();
			this.state = 651;
			this.left_brace();
			this.state = 655;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 652;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 657;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 658;
			this.right_brace();
			this.state = 659;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementControlStatement(): ImplementControlStatementContext {
		let _localctx: ImplementControlStatementContext = new ImplementControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, LiteParser.RULE_implementControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 661;
				this.annotationSupport();
				}
			}

			this.state = 664;
			this.id();
			this.state = 665;
			this.left_paren();
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 666;
				this.expression(0);
				}
			}

			this.state = 669;
			this.right_paren();
			this.state = 670;
			this.match(LiteParser.Colon);
			this.state = 671;
			this.typeType();
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brace) {
				{
				this.state = 672;
				this.left_brace();
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 673;
					this.packageControlSubStatement();
					}
					}
					this.state = 676;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0));
				this.state = 678;
				this.right_brace();
				}
			}

			this.state = 682;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideStatement(): OverrideStatementContext {
		let _localctx: OverrideStatementContext = new OverrideStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LiteParser.RULE_overrideStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.left_paren();
			this.state = 685;
			this.id();
			this.state = 686;
			this.right_paren();
			this.state = 687;
			this.parameterClauseSelf();
			this.state = 688;
			this.match(LiteParser.Right_Arrow);
			this.state = 692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 689;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 695;
			this.left_brace();
			this.state = 699;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 696;
					this.overrideSupportStatement();
					}
					}
				}
				this.state = 701;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			this.state = 702;
			this.right_brace();
			this.state = 703;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideSupportStatement(): OverrideSupportStatementContext {
		let _localctx: OverrideSupportStatementContext = new OverrideSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, LiteParser.RULE_overrideSupportStatement);
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.overrideFunctionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.overrideControlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 707;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideFunctionStatement(): OverrideFunctionStatementContext {
		let _localctx: OverrideFunctionStatementContext = new OverrideFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LiteParser.RULE_overrideFunctionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 710;
				this.annotationSupport();
				}
			}

			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 713;
				_localctx._n = this.match(LiteParser.Discard);
				}
			}

			this.state = 716;
			this.id();
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 717;
				this.templateDefine();
				}
			}

			this.state = 720;
			this.left_paren();
			this.state = 721;
			this.parameterClauseIn();
			this.state = 722;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 723;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 729;
			this.parameterClauseOut();
			this.state = 730;
			this.right_paren();
			this.state = 731;
			this.left_brace();
			this.state = 735;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 732;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			this.state = 738;
			this.right_brace();
			this.state = 739;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideControlStatement(): OverrideControlStatementContext {
		let _localctx: OverrideControlStatementContext = new OverrideControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, LiteParser.RULE_overrideControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 741;
				this.annotationSupport();
				}
			}

			this.state = 745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 744;
				_localctx._n = this.match(LiteParser.Discard);
				}
			}

			this.state = 747;
			this.id();
			this.state = 748;
			this.left_paren();
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 749;
				this.expression(0);
				}
			}

			this.state = 752;
			this.right_paren();
			this.state = 753;
			this.match(LiteParser.Colon);
			this.state = 754;
			this.typeType();
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brace) {
				{
				this.state = 755;
				this.left_brace();
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 756;
					this.packageControlSubStatement();
					}
					}
					this.state = 759;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0));
				this.state = 761;
				this.right_brace();
				}
			}

			this.state = 765;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolStatement(): ProtocolStatementContext {
		let _localctx: ProtocolStatementContext = new ProtocolStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, LiteParser.RULE_protocolStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 767;
				this.annotationSupport();
				}
			}

			this.state = 770;
			this.id();
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 771;
				this.templateDefine();
				}
			}

			this.state = 774;
			this.match(LiteParser.Left_Arrow);
			this.state = 775;
			this.left_brace();
			this.state = 779;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 776;
					this.protocolSupportStatement();
					}
					}
				}
				this.state = 781;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			this.state = 782;
			this.right_brace();
			this.state = 783;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolSupportStatement(): ProtocolSupportStatementContext {
		let _localctx: ProtocolSupportStatementContext = new ProtocolSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, LiteParser.RULE_protocolSupportStatement);
		try {
			this.state = 789;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 785;
				this.includeStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 786;
				this.protocolFunctionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 787;
				this.protocolControlStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 788;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolControlStatement(): ProtocolControlStatementContext {
		let _localctx: ProtocolControlStatementContext = new ProtocolControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, LiteParser.RULE_protocolControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 791;
				this.annotationSupport();
				}
			}

			this.state = 794;
			this.id();
			this.state = 795;
			this.left_paren();
			this.state = 796;
			this.right_paren();
			this.state = 797;
			this.match(LiteParser.Colon);
			this.state = 798;
			this.typeType();
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brace) {
				{
				this.state = 799;
				this.left_brace();
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					{
					this.state = 800;
					this.protocolControlSubStatement();
					}
					}
					this.state = 805;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 806;
				this.right_brace();
				}
			}

			this.state = 810;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolControlSubStatement(): ProtocolControlSubStatementContext {
		let _localctx: ProtocolControlSubStatementContext = new ProtocolControlSubStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, LiteParser.RULE_protocolControlSubStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolFunctionStatement(): ProtocolFunctionStatementContext {
		let _localctx: ProtocolFunctionStatementContext = new ProtocolFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, LiteParser.RULE_protocolFunctionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 814;
				this.annotationSupport();
				}
			}

			this.state = 817;
			this.id();
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 818;
				this.templateDefine();
				}
			}

			this.state = 821;
			this.left_paren();
			this.state = 822;
			this.parameterClauseIn();
			this.state = 823;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 824;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 830;
			this.parameterClauseOut();
			this.state = 831;
			this.right_paren();
			this.state = 832;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionStatement(): FunctionStatementContext {
		let _localctx: FunctionStatementContext = new FunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, LiteParser.RULE_functionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.id();
			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 835;
				this.templateDefine();
				}
			}

			this.state = 838;
			this.left_paren();
			this.state = 839;
			this.parameterClauseIn();
			this.state = 840;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 844;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 841;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 847;
			this.parameterClauseOut();
			this.state = 848;
			this.right_paren();
			this.state = 849;
			this.left_brace();
			this.state = 853;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 850;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 855;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			this.state = 856;
			this.right_brace();
			this.state = 857;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, LiteParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this.match(LiteParser.Left_Arrow);
			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 860;
				this.expressionList();
				}
			}

			this.state = 863;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterClauseIn(): ParameterClauseInContext {
		let _localctx: ParameterClauseInContext = new ParameterClauseInContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, LiteParser.RULE_parameterClauseIn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (LiteParser.Left_Brack - 45)) | (1 << (LiteParser.TypeI8 - 45)) | (1 << (LiteParser.TypeU8 - 45)) | (1 << (LiteParser.TypeI16 - 45)) | (1 << (LiteParser.TypeU16 - 45)) | (1 << (LiteParser.TypeI32 - 45)) | (1 << (LiteParser.TypeU32 - 45)) | (1 << (LiteParser.TypeI64 - 45)) | (1 << (LiteParser.TypeU64 - 45)) | (1 << (LiteParser.TypeF32 - 45)) | (1 << (LiteParser.TypeF64 - 45)) | (1 << (LiteParser.TypeChr - 45)) | (1 << (LiteParser.TypeStr - 45)) | (1 << (LiteParser.TypeBool - 45)) | (1 << (LiteParser.TypeInt - 45)) | (1 << (LiteParser.TypeNum - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (LiteParser.TypeByte - 77)) | (1 << (LiteParser.TypeAny - 77)) | (1 << (LiteParser.IDPrivate - 77)) | (1 << (LiteParser.IDPublic - 77)))) !== 0)) {
				{
				this.state = 865;
				this.parameter();
				}
			}

			this.state = 873;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 868;
				this.more();
				this.state = 869;
				this.parameter();
				}
				}
				this.state = 875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterClauseOut(): ParameterClauseOutContext {
		let _localctx: ParameterClauseOutContext = new ParameterClauseOutContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, LiteParser.RULE_parameterClauseOut);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (LiteParser.Left_Brack - 45)) | (1 << (LiteParser.TypeI8 - 45)) | (1 << (LiteParser.TypeU8 - 45)) | (1 << (LiteParser.TypeI16 - 45)) | (1 << (LiteParser.TypeU16 - 45)) | (1 << (LiteParser.TypeI32 - 45)) | (1 << (LiteParser.TypeU32 - 45)) | (1 << (LiteParser.TypeI64 - 45)) | (1 << (LiteParser.TypeU64 - 45)) | (1 << (LiteParser.TypeF32 - 45)) | (1 << (LiteParser.TypeF64 - 45)) | (1 << (LiteParser.TypeChr - 45)) | (1 << (LiteParser.TypeStr - 45)) | (1 << (LiteParser.TypeBool - 45)) | (1 << (LiteParser.TypeInt - 45)) | (1 << (LiteParser.TypeNum - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (LiteParser.TypeByte - 77)) | (1 << (LiteParser.TypeAny - 77)) | (1 << (LiteParser.IDPrivate - 77)) | (1 << (LiteParser.IDPublic - 77)))) !== 0)) {
				{
				this.state = 876;
				this.parameter();
				}
			}

			this.state = 884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 879;
				this.more();
				this.state = 880;
				this.parameter();
				}
				}
				this.state = 886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterClauseSelf(): ParameterClauseSelfContext {
		let _localctx: ParameterClauseSelfContext = new ParameterClauseSelfContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, LiteParser.RULE_parameterClauseSelf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 887;
			this.id();
			this.state = 888;
			this.match(LiteParser.Colon);
			this.state = 889;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, LiteParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 892;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 891;
				this.annotationSupport();
				}
			}

			this.state = 894;
			this.id();
			this.state = 895;
			this.match(LiteParser.Colon);
			this.state = 896;
			this.typeType();
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Equal) {
				{
				this.state = 897;
				this.match(LiteParser.Equal);
				this.state = 898;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionSupportStatement(): FunctionSupportStatementContext {
		let _localctx: FunctionSupportStatementContext = new FunctionSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, LiteParser.RULE_functionSupportStatement);
		try {
			this.state = 920;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 901;
				this.returnStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 902;
				this.judgeCaseStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 903;
				this.judgeStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 904;
				this.loopStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 905;
				this.loopEachStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 906;
				this.loopCaseStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 907;
				this.loopInfiniteStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 908;
				this.loopJumpStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 909;
				this.loopContinueStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 910;
				this.usingStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 911;
				this.checkStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 912;
				this.reportStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 913;
				this.functionStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 914;
				this.variableStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 915;
				this.variableDeclaredStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 916;
				this.channelAssignStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 917;
				this.assignStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 918;
				this.expressionStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 919;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeCaseStatement(): JudgeCaseStatementContext {
		let _localctx: JudgeCaseStatementContext = new JudgeCaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, LiteParser.RULE_judgeCaseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this.expression(0);
			this.state = 923;
			this.match(LiteParser.Question);
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 924;
				this.caseStatement();
				}
				}
				this.state = 927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Colon - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0));
			this.state = 929;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseStatement(): CaseStatementContext {
		let _localctx: CaseStatementContext = new CaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, LiteParser.RULE_caseStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
			this.caseExprStatement();
			this.state = 937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 932;
				this.more();
				this.state = 933;
				this.caseExprStatement();
				}
				}
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 940;
			this.left_brace();
			this.state = 944;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 941;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 946;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			this.state = 947;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseExprStatement(): CaseExprStatementContext {
		let _localctx: CaseExprStatementContext = new CaseExprStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, LiteParser.RULE_caseExprStatement);
		let _la: number;
		try {
			this.state = 956;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 949;
				this.match(LiteParser.Discard);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 950;
				this.expression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					this.state = 951;
					this.id();
					}
				}

				this.state = 954;
				this.match(LiteParser.Colon);
				this.state = 955;
				this.typeType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeStatement(): JudgeStatementContext {
		let _localctx: JudgeStatementContext = new JudgeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, LiteParser.RULE_judgeStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 977;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 958;
				this.judgeIfStatement();
				this.state = 962;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 959;
						this.judgeElseIfStatement();
						}
						}
					}
					this.state = 964;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
				}
				this.state = 965;
				this.judgeElseStatement();
				this.state = 966;
				this.end();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 968;
				this.judgeIfStatement();
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
					{
					{
					this.state = 969;
					this.judgeElseIfStatement();
					}
					}
					this.state = 974;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 975;
				this.end();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeElseStatement(): JudgeElseStatementContext {
		let _localctx: JudgeElseStatementContext = new JudgeElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, LiteParser.RULE_judgeElseStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 979;
			this.match(LiteParser.Discard);
			this.state = 980;
			this.left_brace();
			this.state = 984;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 981;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 986;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			}
			this.state = 987;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeIfStatement(): JudgeIfStatementContext {
		let _localctx: JudgeIfStatementContext = new JudgeIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, LiteParser.RULE_judgeIfStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this.match(LiteParser.Question);
			this.state = 990;
			this.expression(0);
			this.state = 991;
			this.left_brace();
			this.state = 995;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 992;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 997;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			}
			this.state = 998;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeElseIfStatement(): JudgeElseIfStatementContext {
		let _localctx: JudgeElseIfStatementContext = new JudgeElseIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, LiteParser.RULE_judgeElseIfStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1000;
			this.expression(0);
			this.state = 1001;
			this.left_brace();
			this.state = 1005;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1002;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			this.state = 1008;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, LiteParser.RULE_loopStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this.iteratorStatement();
			this.state = 1011;
			this.match(LiteParser.At);
			this.state = 1012;
			this.id();
			this.state = 1013;
			this.left_brace();
			this.state = 1017;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1014;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1019;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			}
			this.state = 1020;
			this.right_brace();
			this.state = 1021;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopEachStatement(): LoopEachStatementContext {
		let _localctx: LoopEachStatementContext = new LoopEachStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, LiteParser.RULE_loopEachStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.expression(0);
			this.state = 1024;
			this.match(LiteParser.At);
			this.state = 1029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 1025;
				this.match(LiteParser.Left_Brack);
				this.state = 1026;
				this.id();
				this.state = 1027;
				this.match(LiteParser.Right_Brack);
				}
			}

			this.state = 1031;
			this.id();
			this.state = 1032;
			this.left_brace();
			this.state = 1036;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1033;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1038;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			}
			this.state = 1039;
			this.right_brace();
			this.state = 1040;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopCaseStatement(): LoopCaseStatementContext {
		let _localctx: LoopCaseStatementContext = new LoopCaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, LiteParser.RULE_loopCaseStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.match(LiteParser.At);
			this.state = 1043;
			this.expression(0);
			this.state = 1044;
			this.left_brace();
			this.state = 1048;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1045;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1050;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			}
			this.state = 1051;
			this.right_brace();
			this.state = 1052;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopInfiniteStatement(): LoopInfiniteStatementContext {
		let _localctx: LoopInfiniteStatementContext = new LoopInfiniteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, LiteParser.RULE_loopInfiniteStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this.match(LiteParser.At);
			this.state = 1055;
			this.left_brace();
			this.state = 1059;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1056;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1061;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			this.state = 1062;
			this.right_brace();
			this.state = 1063;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopJumpStatement(): LoopJumpStatementContext {
		let _localctx: LoopJumpStatementContext = new LoopJumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, LiteParser.RULE_loopJumpStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1065;
			this.match(LiteParser.Left_Arrow);
			this.state = 1066;
			this.match(LiteParser.At);
			this.state = 1067;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopContinueStatement(): LoopContinueStatementContext {
		let _localctx: LoopContinueStatementContext = new LoopContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, LiteParser.RULE_loopContinueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1069;
			this.match(LiteParser.Right_Arrow);
			this.state = 1070;
			this.match(LiteParser.At);
			this.state = 1071;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkStatement(): CheckStatementContext {
		let _localctx: CheckStatementContext = new CheckStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, LiteParser.RULE_checkStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1073;
				this.match(LiteParser.Bang);
				this.state = 1074;
				this.left_brace();
				this.state = 1078;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1075;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1080;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				this.state = 1081;
				this.right_brace();
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					{
					this.state = 1082;
					this.checkErrorStatement();
					}
					}
					this.state = 1087;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1088;
				this.checkFinallyStatment();
				this.state = 1089;
				this.end();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1091;
				this.match(LiteParser.Bang);
				this.state = 1092;
				this.left_brace();
				this.state = 1096;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1093;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1098;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				}
				this.state = 1099;
				this.right_brace();
				this.state = 1101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1100;
					this.checkErrorStatement();
					}
					}
					this.state = 1103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0));
				this.state = 1105;
				this.end();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingStatement(): UsingStatementContext {
		let _localctx: UsingStatementContext = new UsingStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, LiteParser.RULE_usingStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			this.expression(0);
			this.state = 1110;
			this.match(LiteParser.Bang);
			this.state = 1111;
			this.expression(0);
			this.state = 1114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Colon) {
				{
				this.state = 1112;
				this.match(LiteParser.Colon);
				this.state = 1113;
				this.typeType();
				}
			}

			this.state = 1116;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkErrorStatement(): CheckErrorStatementContext {
		let _localctx: CheckErrorStatementContext = new CheckErrorStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, LiteParser.RULE_checkErrorStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 1118;
				this.id();
				}
				break;

			case 2:
				{
				this.state = 1119;
				this.id();
				this.state = 1120;
				this.match(LiteParser.Colon);
				this.state = 1121;
				this.typeType();
				}
				break;
			}
			this.state = 1125;
			this.left_brace();
			this.state = 1129;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1126;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
			}
			this.state = 1132;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkFinallyStatment(): CheckFinallyStatmentContext {
		let _localctx: CheckFinallyStatmentContext = new CheckFinallyStatmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, LiteParser.RULE_checkFinallyStatment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1134;
			this.match(LiteParser.Discard);
			this.state = 1135;
			this.left_brace();
			this.state = 1139;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1136;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1141;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			}
			this.state = 1142;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reportStatement(): ReportStatementContext {
		let _localctx: ReportStatementContext = new ReportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, LiteParser.RULE_reportStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1144;
			this.match(LiteParser.Bang);
			this.state = 1145;
			this.left_paren();
			this.state = 1147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1146;
				this.expression(0);
				}
			}

			this.state = 1149;
			this.right_paren();
			this.state = 1150;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iteratorStatement(): IteratorStatementContext {
		let _localctx: IteratorStatementContext = new IteratorStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, LiteParser.RULE_iteratorStatement);
		let _la: number;
		try {
			this.state = 1166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1152;
				this.match(LiteParser.Left_Brack);
				this.state = 1153;
				this.expression(0);
				this.state = 1154;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1155;
				this.expression(0);
				this.state = 1156;
				this.more();
				this.state = 1157;
				this.expression(0);
				this.state = 1158;
				this.match(LiteParser.Right_Brack);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1160;
				this.match(LiteParser.Left_Brack);
				this.state = 1161;
				this.expression(0);
				this.state = 1162;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1163;
				this.expression(0);
				this.state = 1164;
				this.match(LiteParser.Right_Brack);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, LiteParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1168;
			this.expression(0);
			this.state = 1174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Colon_Equal:
				{
				this.state = 1169;
				this.match(LiteParser.Colon_Equal);
				}
				break;
			case LiteParser.Colon:
				{
				this.state = 1170;
				this.match(LiteParser.Colon);
				this.state = 1171;
				this.typeType();
				this.state = 1172;
				this.match(LiteParser.Equal);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1176;
			this.expression(0);
			this.state = 1177;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaredStatement(): VariableDeclaredStatementContext {
		let _localctx: VariableDeclaredStatementContext = new VariableDeclaredStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, LiteParser.RULE_variableDeclaredStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1179;
			this.expression(0);
			this.state = 1180;
			this.match(LiteParser.Colon);
			this.state = 1181;
			this.typeType();
			this.state = 1182;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public channelAssignStatement(): ChannelAssignStatementContext {
		let _localctx: ChannelAssignStatementContext = new ChannelAssignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, LiteParser.RULE_channelAssignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1184;
			this.expression(0);
			this.state = 1185;
			this.match(LiteParser.Left_Brack);
			this.state = 1186;
			this.match(LiteParser.Left_Arrow);
			this.state = 1187;
			this.match(LiteParser.Right_Brack);
			this.state = 1188;
			this.assign();
			this.state = 1189;
			this.expression(0);
			this.state = 1190;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStatement(): AssignStatementContext {
		let _localctx: AssignStatementContext = new AssignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, LiteParser.RULE_assignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1192;
			this.expression(0);
			this.state = 1193;
			this.assign();
			this.state = 1194;
			this.expression(0);
			this.state = 1195;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, LiteParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1197;
			this.expression(0);
			this.state = 1198;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, LiteParser.RULE_primaryExpression);
		try {
			this.state = 1210;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
			case LiteParser.TypeAny:
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1200;
				this.id();
				this.state = 1202;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 1201;
					this.templateCall();
					}
					break;
				}
				}
				break;
			case LiteParser.Discard:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1204;
				_localctx._t = this.match(LiteParser.Discard);
				}
				break;
			case LiteParser.Left_Paren:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1205;
				this.left_paren();
				this.state = 1206;
				this.expression(0);
				this.state = 1207;
				this.right_paren();
				}
				break;
			case LiteParser.NilLiteral:
			case LiteParser.TrueLiteral:
			case LiteParser.FalseLiteral:
			case LiteParser.UndefinedLiteral:
			case LiteParser.NumberLiteral:
			case LiteParser.TextLiteral:
			case LiteParser.CharLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1209;
				this.dataStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 130;
		this.enterRecursionRule(_localctx, 130, LiteParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1213;
				this.linq();
				}
				break;

			case 2:
				{
				this.state = 1214;
				this.primaryExpression();
				}
				break;

			case 3:
				{
				this.state = 1215;
				this.callNew();
				}
				break;

			case 4:
				{
				this.state = 1216;
				this.callPkg();
				}
				break;

			case 5:
				{
				this.state = 1217;
				this.getType();
				}
				break;

			case 6:
				{
				this.state = 1218;
				this.callAwait();
				}
				break;

			case 7:
				{
				this.state = 1219;
				this.list();
				}
				break;

			case 8:
				{
				this.state = 1220;
				this.set();
				}
				break;

			case 9:
				{
				this.state = 1221;
				this.dictionary();
				}
				break;

			case 10:
				{
				this.state = 1222;
				this.lambda();
				}
				break;

			case 11:
				{
				this.state = 1223;
				this.functionExpression();
				}
				break;

			case 12:
				{
				this.state = 1224;
				this.pkgAnonymous();
				}
				break;

			case 13:
				{
				this.state = 1225;
				this.tupleExpression();
				}
				break;

			case 14:
				{
				this.state = 1226;
				this.plusMinus();
				}
				break;

			case 15:
				{
				this.state = 1227;
				this.bitwiseNotExpression();
				}
				break;

			case 16:
				{
				this.state = 1228;
				this.negate();
				}
				break;

			case 17:
				{
				this.state = 1229;
				this.stringExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1274;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1272;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1232;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 1233;
						this.bitwise();
						this.state = 1234;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1236;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 1237;
						this.judge();
						this.state = 1238;
						this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1240;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 1241;
						this.add();
						this.state = 1242;
						this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1244;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1245;
						this.mul();
						this.state = 1246;
						this.expression(4);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1248;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1249;
						this.pow();
						this.state = 1250;
						this.expression(3);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1252;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 1253;
						_localctx._op = this.match(LiteParser.Bang);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1254;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 1255;
						_localctx._op = this.match(LiteParser.Question);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1256;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 1257;
						_localctx._op = this.match(LiteParser.Left_Flow);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1258;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 1259;
						this.typeConversion();
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1260;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 1261;
						this.callFunc();
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1262;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 1263;
						this.callChannel();
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1264;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 1265;
						this.callElement();
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1266;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 1267;
						this.callExpression();
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1268;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 1269;
						this.judgeType();
						this.state = 1270;
						this.typeType();
						}
						break;
					}
					}
				}
				this.state = 1276;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callExpression(): CallExpressionContext {
		let _localctx: CallExpressionContext = new CallExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, LiteParser.RULE_callExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1277;
			this.call();
			this.state = 1279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1278;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1281;
			this.id();
			this.state = 1283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1282;
				this.templateCall();
				}
				break;
			}
			this.state = 1288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1285;
				this.callFunc();
				}
				break;

			case 2:
				{
				this.state = 1286;
				this.callChannel();
				}
				break;

			case 3:
				{
				this.state = 1287;
				this.callElement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, LiteParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1290;
			this.left_paren();
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1291;
				this.expression(0);
				this.state = 1297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.Comma) {
					{
					{
					this.state = 1292;
					this.more();
					this.state = 1293;
					this.expression(0);
					}
					}
					this.state = 1299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1302;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, LiteParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			this.expression(0);
			this.state = 1310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1305;
				this.more();
				this.state = 1306;
				this.expression(0);
				}
				}
				this.state = 1312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationSupport(): AnnotationSupportContext {
		let _localctx: AnnotationSupportContext = new AnnotationSupportContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, LiteParser.RULE_annotationSupport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1313;
			this.annotation();
			this.state = 1315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1314;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, LiteParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			this.match(LiteParser.Left_Brack);
			this.state = 1321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1318;
				this.id();
				this.state = 1319;
				this.match(LiteParser.Right_Arrow);
				}
				break;
			}
			this.state = 1323;
			this.annotationList();
			this.state = 1324;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationList(): AnnotationListContext {
		let _localctx: AnnotationListContext = new AnnotationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, LiteParser.RULE_annotationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			this.annotationItem();
			this.state = 1332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1327;
				this.more();
				this.state = 1328;
				this.annotationItem();
				}
				}
				this.state = 1334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationItem(): AnnotationItemContext {
		let _localctx: AnnotationItemContext = new AnnotationItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, LiteParser.RULE_annotationItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1335;
			this.id();
			this.state = 1348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 1336;
				this.left_paren();
				this.state = 1337;
				this.annotationAssign();
				this.state = 1343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.Comma) {
					{
					{
					this.state = 1338;
					this.more();
					this.state = 1339;
					this.annotationAssign();
					}
					}
					this.state = 1345;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1346;
				this.right_paren();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationAssign(): AnnotationAssignContext {
		let _localctx: AnnotationAssignContext = new AnnotationAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, LiteParser.RULE_annotationAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1350;
				this.id();
				this.state = 1351;
				this.match(LiteParser.Equal);
				}
				break;
			}
			this.state = 1355;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callFunc(): CallFuncContext {
		let _localctx: CallFuncContext = new CallFuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, LiteParser.RULE_callFunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Left_Paren:
				{
				this.state = 1357;
				this.tuple();
				}
				break;
			case LiteParser.Left_Brace:
				{
				this.state = 1358;
				this.lambda();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callChannel(): CallChannelContext {
		let _localctx: CallChannelContext = new CallChannelContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, LiteParser.RULE_callChannel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1361;
			this.match(LiteParser.Left_Brack);
			this.state = 1362;
			this.match(LiteParser.Left_Arrow);
			this.state = 1363;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callElement(): CallElementContext {
		let _localctx: CallElementContext = new CallElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, LiteParser.RULE_callElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1365;
			this.match(LiteParser.Left_Brack);
			this.state = 1368;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1366;
				this.slice();
				}
				break;

			case 2:
				{
				this.state = 1367;
				this.expression(0);
				}
				break;
			}
			this.state = 1370;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callPkg(): CallPkgContext {
		let _localctx: CallPkgContext = new CallPkgContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, LiteParser.RULE_callPkg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1372;
			this.typeType();
			this.state = 1373;
			this.left_brace();
			this.state = 1378;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1374;
				this.pkgAssign();
				}
				break;

			case 2:
				{
				this.state = 1375;
				this.listAssign();
				}
				break;

			case 3:
				{
				this.state = 1376;
				this.setAssign();
				}
				break;

			case 4:
				{
				this.state = 1377;
				this.dictionaryAssign();
				}
				break;
			}
			this.state = 1380;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callNew(): CallNewContext {
		let _localctx: CallNewContext = new CallNewContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, LiteParser.RULE_callNew);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1382;
			this.match(LiteParser.Less);
			this.state = 1383;
			this.typeType();
			this.state = 1384;
			this.match(LiteParser.Greater);
			this.state = 1385;
			this.left_paren();
			this.state = 1387;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 1386;
				this.match(LiteParser.New_Line);
				}
				break;
			}
			this.state = 1390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1389;
				this.expressionList();
				}
			}

			this.state = 1393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1392;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1395;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getType(): GetTypeContext {
		let _localctx: GetTypeContext = new GetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, LiteParser.RULE_getType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1397;
			this.match(LiteParser.Question);
			this.state = 1398;
			this.left_paren();
			this.state = 1402;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
			case LiteParser.Left_Flow:
			case LiteParser.Less:
			case LiteParser.Left_Paren:
			case LiteParser.Left_Brace:
			case LiteParser.Left_Brack:
			case LiteParser.Question:
			case LiteParser.Bang:
			case LiteParser.Wave:
			case LiteParser.Add:
			case LiteParser.Sub:
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
			case LiteParser.TypeAny:
			case LiteParser.NilLiteral:
			case LiteParser.TrueLiteral:
			case LiteParser.FalseLiteral:
			case LiteParser.UndefinedLiteral:
			case LiteParser.NumberLiteral:
			case LiteParser.TextLiteral:
			case LiteParser.CharLiteral:
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
			case LiteParser.Discard:
				{
				this.state = 1399;
				this.expression(0);
				}
				break;
			case LiteParser.Colon:
				{
				this.state = 1400;
				this.match(LiteParser.Colon);
				this.state = 1401;
				this.typeType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1404;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeConversion(): TypeConversionContext {
		let _localctx: TypeConversionContext = new TypeConversionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, LiteParser.RULE_typeConversion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this.match(LiteParser.Colon);
			this.state = 1407;
			this.left_paren();
			this.state = 1408;
			this.typeType();
			this.state = 1409;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAssign(): PkgAssignContext {
		let _localctx: PkgAssignContext = new PkgAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, LiteParser.RULE_pkgAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1411;
			this.pkgAssignElement();
			this.state = 1417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1412;
				this.more();
				this.state = 1413;
				this.pkgAssignElement();
				}
				}
				this.state = 1419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAssignElement(): PkgAssignElementContext {
		let _localctx: PkgAssignElementContext = new PkgAssignElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, LiteParser.RULE_pkgAssignElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1420;
			this.name();
			this.state = 1421;
			this.match(LiteParser.Equal);
			this.state = 1422;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listAssign(): ListAssignContext {
		let _localctx: ListAssignContext = new ListAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, LiteParser.RULE_listAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1424;
			this.expression(0);
			this.state = 1430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1425;
				this.more();
				this.state = 1426;
				this.expression(0);
				}
				}
				this.state = 1432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setAssign(): SetAssignContext {
		let _localctx: SetAssignContext = new SetAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, LiteParser.RULE_setAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1433;
			this.match(LiteParser.Left_Brack);
			this.state = 1434;
			this.expression(0);
			this.state = 1435;
			this.match(LiteParser.Right_Brack);
			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1436;
				this.more();
				this.state = 1437;
				this.match(LiteParser.Left_Brack);
				this.state = 1438;
				this.expression(0);
				this.state = 1439;
				this.match(LiteParser.Right_Brack);
				}
				}
				this.state = 1445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryAssign(): DictionaryAssignContext {
		let _localctx: DictionaryAssignContext = new DictionaryAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, LiteParser.RULE_dictionaryAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1446;
			this.dictionaryElement();
			this.state = 1452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1447;
				this.more();
				this.state = 1448;
				this.dictionaryElement();
				}
				}
				this.state = 1454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callAwait(): CallAwaitContext {
		let _localctx: CallAwaitContext = new CallAwaitContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, LiteParser.RULE_callAwait);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1455;
			this.match(LiteParser.Left_Flow);
			this.state = 1456;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, LiteParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1458;
			this.left_brace();
			this.state = 1459;
			this.expression(0);
			this.state = 1465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1460;
				this.more();
				this.state = 1461;
				this.expression(0);
				}
				}
				this.state = 1467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1468;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, LiteParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.left_brace();
			this.state = 1471;
			this.match(LiteParser.Left_Brack);
			this.state = 1472;
			this.expression(0);
			this.state = 1473;
			this.match(LiteParser.Right_Brack);
			this.state = 1481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1474;
				this.more();
				this.state = 1475;
				this.match(LiteParser.Left_Brack);
				this.state = 1476;
				this.expression(0);
				this.state = 1477;
				this.match(LiteParser.Right_Brack);
				}
				}
				this.state = 1483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1484;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionary(): DictionaryContext {
		let _localctx: DictionaryContext = new DictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, LiteParser.RULE_dictionary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1486;
			this.left_brace();
			this.state = 1487;
			this.dictionaryElement();
			this.state = 1493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1488;
				this.more();
				this.state = 1489;
				this.dictionaryElement();
				}
				}
				this.state = 1495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1496;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryElement(): DictionaryElementContext {
		let _localctx: DictionaryElementContext = new DictionaryElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, LiteParser.RULE_dictionaryElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1498;
			this.match(LiteParser.Left_Brack);
			this.state = 1499;
			this.expression(0);
			this.state = 1500;
			this.match(LiteParser.Right_Brack);
			this.state = 1501;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public slice(): SliceContext {
		let _localctx: SliceContext = new SliceContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, LiteParser.RULE_slice);
		try {
			this.state = 1506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1503;
				this.sliceFull();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1504;
				this.sliceStart();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1505;
				this.sliceEnd();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceFull(): SliceFullContext {
		let _localctx: SliceFullContext = new SliceFullContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, LiteParser.RULE_sliceFull);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1508;
			this.expression(0);
			this.state = 1509;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1510;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceStart(): SliceStartContext {
		let _localctx: SliceStartContext = new SliceStartContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, LiteParser.RULE_sliceStart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1512;
			this.expression(0);
			this.state = 1513;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceEnd(): SliceEndContext {
		let _localctx: SliceEndContext = new SliceEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, LiteParser.RULE_sliceEnd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1515;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1516;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceItem(): NameSpaceItemContext {
		let _localctx: NameSpaceItemContext = new NameSpaceItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, LiteParser.RULE_nameSpaceItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1525;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1518;
					this.id();
					this.state = 1519;
					this.call();
					this.state = 1521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === LiteParser.New_Line) {
						{
						this.state = 1520;
						this.match(LiteParser.New_Line);
						}
					}

					}
					}
				}
				this.state = 1527;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
			}
			this.state = 1528;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, LiteParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			this.id();
			this.state = 1539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Dot) {
				{
				{
				this.state = 1531;
				this.call();
				this.state = 1533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.New_Line) {
					{
					this.state = 1532;
					this.match(LiteParser.New_Line);
					}
				}

				this.state = 1535;
				this.id();
				}
				}
				this.state = 1541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateDefine(): TemplateDefineContext {
		let _localctx: TemplateDefineContext = new TemplateDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, LiteParser.RULE_templateDefine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this.match(LiteParser.Less);
			this.state = 1543;
			this.templateDefineItem();
			this.state = 1549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1544;
				this.more();
				this.state = 1545;
				this.templateDefineItem();
				}
				}
				this.state = 1551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1552;
			this.match(LiteParser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateDefineItem(): TemplateDefineItemContext {
		let _localctx: TemplateDefineItemContext = new TemplateDefineItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, LiteParser.RULE_templateDefineItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1554;
			this.id();
			this.state = 1557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Colon) {
				{
				this.state = 1555;
				this.match(LiteParser.Colon);
				this.state = 1556;
				this.id();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateCall(): TemplateCallContext {
		let _localctx: TemplateCallContext = new TemplateCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, LiteParser.RULE_templateCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1559;
			this.match(LiteParser.Less);
			this.state = 1560;
			this.typeType();
			this.state = 1566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1561;
				this.more();
				this.state = 1562;
				this.typeType();
				}
				}
				this.state = 1568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1569;
			this.match(LiteParser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, LiteParser.RULE_lambda);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1571;
				this.left_brace();
				this.state = 1573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					this.state = 1572;
					this.lambdaIn();
					}
				}

				this.state = 1575;
				_localctx._t = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
					_localctx._t = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.New_Line) {
					{
					{
					this.state = 1576;
					this.match(LiteParser.New_Line);
					}
					}
					this.state = 1581;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1582;
				this.expressionList();
				this.state = 1583;
				this.right_brace();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1585;
				this.left_brace();
				this.state = 1587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					this.state = 1586;
					this.lambdaIn();
					}
				}

				this.state = 1589;
				_localctx._t = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
					_localctx._t = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1593;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1590;
						this.match(LiteParser.New_Line);
						}
						}
					}
					this.state = 1595;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
				}
				this.state = 1599;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1596;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1601;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
				}
				this.state = 1602;
				this.right_brace();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaIn(): LambdaInContext {
		let _localctx: LambdaInContext = new LambdaInContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, LiteParser.RULE_lambdaIn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1606;
			this.id();
			this.state = 1612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1607;
				this.more();
				this.state = 1608;
				this.id();
				}
				}
				this.state = 1614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAnonymous(): PkgAnonymousContext {
		let _localctx: PkgAnonymousContext = new PkgAnonymousContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, LiteParser.RULE_pkgAnonymous);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1615;
			this.pkgAnonymousAssign();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAnonymousAssign(): PkgAnonymousAssignContext {
		let _localctx: PkgAnonymousAssignContext = new PkgAnonymousAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, LiteParser.RULE_pkgAnonymousAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1617;
			this.left_brace();
			this.state = 1618;
			this.pkgAnonymousAssignElement();
			this.state = 1624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1619;
				this.more();
				this.state = 1620;
				this.pkgAnonymousAssignElement();
				}
				}
				this.state = 1626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1627;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAnonymousAssignElement(): PkgAnonymousAssignElementContext {
		let _localctx: PkgAnonymousAssignElementContext = new PkgAnonymousAssignElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, LiteParser.RULE_pkgAnonymousAssignElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1629;
			this.name();
			this.state = 1630;
			this.match(LiteParser.Equal);
			this.state = 1631;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpression(): FunctionExpressionContext {
		let _localctx: FunctionExpressionContext = new FunctionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, LiteParser.RULE_functionExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1633;
			this.left_paren();
			this.state = 1634;
			this.parameterClauseIn();
			this.state = 1635;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1636;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1642;
			this.parameterClauseOut();
			this.state = 1643;
			this.right_paren();
			this.state = 1644;
			this.left_brace();
			this.state = 1648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1645;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
			}
			this.state = 1651;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, LiteParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1653;
			this.left_paren();
			this.state = 1654;
			this.expression(0);
			this.state = 1660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1655;
				this.more();
				this.state = 1656;
				this.expression(0);
				}
				}
				this.state = 1662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1663;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public plusMinus(): PlusMinusContext {
		let _localctx: PlusMinusContext = new PlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, LiteParser.RULE_plusMinus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1665;
			this.add();
			this.state = 1666;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public negate(): NegateContext {
		let _localctx: NegateContext = new NegateContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, LiteParser.RULE_negate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1668;
			this.wave();
			this.state = 1669;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseNotExpression(): BitwiseNotExpressionContext {
		let _localctx: BitwiseNotExpressionContext = new BitwiseNotExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, LiteParser.RULE_bitwiseNotExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1671;
			this.bitwiseNot();
			this.state = 1672;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linq(): LinqContext {
		let _localctx: LinqContext = new LinqContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, LiteParser.RULE_linq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1674;
			this.linqHeadKeyword();
			this.state = 1676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1675;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1678;
			this.expression(0);
			this.state = 1679;
			this.match(LiteParser.Right_Arrow);
			this.state = 1681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1680;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1684;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1683;
					this.linqItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1686;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1688;
			_localctx._k = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.LinqBy || _la === LiteParser.LinqSelect)) {
				_localctx._k = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1689;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1692;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linqItem(): LinqItemContext {
		let _localctx: LinqItemContext = new LinqItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, LiteParser.RULE_linqItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1694;
			this.linqKeyword();
			this.state = 1696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1695;
				this.expression(0);
				}
			}

			this.state = 1698;
			this.match(LiteParser.Right_Arrow);
			this.state = 1700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1699;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linqKeyword(): LinqKeywordContext {
		let _localctx: LinqKeywordContext = new LinqKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, LiteParser.RULE_linqKeyword);
		try {
			this.state = 1704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1702;
				this.linqHeadKeyword();
				}
				break;
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1703;
				this.linqBodyKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linqHeadKeyword(): LinqHeadKeywordContext {
		let _localctx: LinqHeadKeywordContext = new LinqHeadKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, LiteParser.RULE_linqHeadKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1706;
			_localctx._k = this.match(LiteParser.LinqFrom);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linqBodyKeyword(): LinqBodyKeywordContext {
		let _localctx: LinqBodyKeywordContext = new LinqBodyKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, LiteParser.RULE_linqBodyKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1708;
			_localctx._k = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0))) {
				_localctx._k = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringExpression(): StringExpressionContext {
		let _localctx: StringExpressionContext = new StringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, LiteParser.RULE_stringExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1710;
			this.match(LiteParser.TextLiteral);
			this.state = 1712;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1711;
					this.stringExpressionElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1714;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringExpressionElement(): StringExpressionElementContext {
		let _localctx: StringExpressionElementContext = new StringExpressionElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, LiteParser.RULE_stringExpressionElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this.expression(0);
			this.state = 1717;
			this.match(LiteParser.TextLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataStatement(): DataStatementContext {
		let _localctx: DataStatementContext = new DataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, LiteParser.RULE_dataStatement);
		try {
			this.state = 1727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1719;
				this.floatExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1720;
				this.integerExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1721;
				_localctx._t = this.match(LiteParser.TextLiteral);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1722;
				_localctx._t = this.match(LiteParser.CharLiteral);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1723;
				_localctx._t = this.match(LiteParser.TrueLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1724;
				_localctx._t = this.match(LiteParser.FalseLiteral);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1725;
				this.nilExpr();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1726;
				_localctx._t = this.match(LiteParser.UndefinedLiteral);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatExpr(): FloatExprContext {
		let _localctx: FloatExprContext = new FloatExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, LiteParser.RULE_floatExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1729;
			this.integerExpr();
			this.state = 1730;
			this.call();
			this.state = 1731;
			this.integerExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerExpr(): IntegerExprContext {
		let _localctx: IntegerExprContext = new IntegerExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, LiteParser.RULE_integerExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1733;
			this.match(LiteParser.NumberLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotNull(): TypeNotNullContext {
		let _localctx: TypeNotNullContext = new TypeNotNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, LiteParser.RULE_typeNotNull);
		try {
			this.state = 1745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1735;
				this.typeAny();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1736;
				this.typeTuple();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1737;
				this.typeArray();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1738;
				this.typeList();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1739;
				this.typeSet();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1740;
				this.typeDictionary();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1741;
				this.typeChannel();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1742;
				this.typeBasic();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1743;
				this.typePackage();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1744;
				this.typeFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, LiteParser.RULE_typeReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1747;
			this.match(LiteParser.Bang);
			this.state = 1750;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
			case LiteParser.Left_Paren:
			case LiteParser.Left_Brack:
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
			case LiteParser.TypeAny:
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				{
				this.state = 1748;
				this.typeNotNull();
				}
				break;
			case LiteParser.Question:
				{
				this.state = 1749;
				this.typeNullable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNullable(): TypeNullableContext {
		let _localctx: TypeNullableContext = new TypeNullableContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, LiteParser.RULE_typeNullable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1752;
			this.match(LiteParser.Question);
			this.state = 1753;
			this.typeNotNull();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, LiteParser.RULE_typeType);
		try {
			this.state = 1758;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
			case LiteParser.Left_Paren:
			case LiteParser.Left_Brack:
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
			case LiteParser.TypeAny:
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1755;
				this.typeNotNull();
				}
				break;
			case LiteParser.Question:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1756;
				this.typeNullable();
				}
				break;
			case LiteParser.Bang:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1757;
				this.typeReference();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTuple(): TypeTupleContext {
		let _localctx: TypeTupleContext = new TypeTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, LiteParser.RULE_typeTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1760;
			this.left_paren();
			this.state = 1761;
			this.typeType();
			this.state = 1765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1762;
				this.more();
				this.state = 1763;
				this.typeType();
				}
				}
				this.state = 1767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LiteParser.Comma);
			this.state = 1769;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArray(): TypeArrayContext {
		let _localctx: TypeArrayContext = new TypeArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, LiteParser.RULE_typeArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1771;
			this.match(LiteParser.Left_Brack);
			this.state = 1772;
			this.match(LiteParser.Colon);
			this.state = 1773;
			this.match(LiteParser.Right_Brack);
			this.state = 1774;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, LiteParser.RULE_typeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1776;
			this.match(LiteParser.Left_Brack);
			this.state = 1777;
			this.match(LiteParser.Right_Brack);
			this.state = 1778;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSet(): TypeSetContext {
		let _localctx: TypeSetContext = new TypeSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, LiteParser.RULE_typeSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1780;
			this.match(LiteParser.Left_Brack);
			this.state = 1781;
			this.typeType();
			this.state = 1782;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDictionary(): TypeDictionaryContext {
		let _localctx: TypeDictionaryContext = new TypeDictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, LiteParser.RULE_typeDictionary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1784;
			this.match(LiteParser.Left_Brack);
			this.state = 1785;
			this.typeType();
			this.state = 1786;
			this.match(LiteParser.Right_Brack);
			this.state = 1787;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeChannel(): TypeChannelContext {
		let _localctx: TypeChannelContext = new TypeChannelContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, LiteParser.RULE_typeChannel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1789;
			this.match(LiteParser.Left_Brack);
			this.state = 1790;
			this.match(LiteParser.Right_Arrow);
			this.state = 1791;
			this.match(LiteParser.Right_Brack);
			this.state = 1792;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePackage(): TypePackageContext {
		let _localctx: TypePackageContext = new TypePackageContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, LiteParser.RULE_typePackage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1794;
			this.nameSpaceItem();
			this.state = 1796;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1795;
				this.templateCall();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeFunction(): TypeFunctionContext {
		let _localctx: TypeFunctionContext = new TypeFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, LiteParser.RULE_typeFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1798;
			this.left_paren();
			this.state = 1799;
			this.typeFunctionParameterClause();
			this.state = 1800;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1801;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1807;
			this.typeFunctionParameterClause();
			this.state = 1808;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAny(): TypeAnyContext {
		let _localctx: TypeAnyContext = new TypeAnyContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, LiteParser.RULE_typeAny);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1810;
			this.match(LiteParser.TypeAny);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeFunctionParameterClause(): TypeFunctionParameterClauseContext {
		let _localctx: TypeFunctionParameterClauseContext = new TypeFunctionParameterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, LiteParser.RULE_typeFunctionParameterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LiteParser.Left_Paren - 41)) | (1 << (LiteParser.Left_Brack - 41)) | (1 << (LiteParser.Question - 41)) | (1 << (LiteParser.Bang - 41)) | (1 << (LiteParser.TypeI8 - 41)) | (1 << (LiteParser.TypeU8 - 41)) | (1 << (LiteParser.TypeI16 - 41)) | (1 << (LiteParser.TypeU16 - 41)) | (1 << (LiteParser.TypeI32 - 41)) | (1 << (LiteParser.TypeU32 - 41)) | (1 << (LiteParser.TypeI64 - 41)) | (1 << (LiteParser.TypeU64 - 41)) | (1 << (LiteParser.TypeF32 - 41)) | (1 << (LiteParser.TypeF64 - 41)) | (1 << (LiteParser.TypeChr - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (LiteParser.TypeStr - 73)) | (1 << (LiteParser.TypeBool - 73)) | (1 << (LiteParser.TypeInt - 73)) | (1 << (LiteParser.TypeNum - 73)) | (1 << (LiteParser.TypeByte - 73)) | (1 << (LiteParser.TypeAny - 73)) | (1 << (LiteParser.IDPrivate - 73)) | (1 << (LiteParser.IDPublic - 73)))) !== 0)) {
				{
				this.state = 1812;
				this.typeType();
				}
			}

			this.state = 1820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1815;
				this.more();
				this.state = 1816;
				this.typeType();
				}
				}
				this.state = 1822;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBasic(): TypeBasicContext {
		let _localctx: TypeBasicContext = new TypeBasicContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, LiteParser.RULE_typeBasic);
		try {
			this.state = 1839;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.TypeI8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1823;
				_localctx._t = this.match(LiteParser.TypeI8);
				}
				break;
			case LiteParser.TypeU8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1824;
				_localctx._t = this.match(LiteParser.TypeU8);
				}
				break;
			case LiteParser.TypeI16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1825;
				_localctx._t = this.match(LiteParser.TypeI16);
				}
				break;
			case LiteParser.TypeU16:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1826;
				_localctx._t = this.match(LiteParser.TypeU16);
				}
				break;
			case LiteParser.TypeI32:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1827;
				_localctx._t = this.match(LiteParser.TypeI32);
				}
				break;
			case LiteParser.TypeU32:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1828;
				_localctx._t = this.match(LiteParser.TypeU32);
				}
				break;
			case LiteParser.TypeI64:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1829;
				_localctx._t = this.match(LiteParser.TypeI64);
				}
				break;
			case LiteParser.TypeU64:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1830;
				_localctx._t = this.match(LiteParser.TypeU64);
				}
				break;
			case LiteParser.TypeF32:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1831;
				_localctx._t = this.match(LiteParser.TypeF32);
				}
				break;
			case LiteParser.TypeF64:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1832;
				_localctx._t = this.match(LiteParser.TypeF64);
				}
				break;
			case LiteParser.TypeChr:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1833;
				_localctx._t = this.match(LiteParser.TypeChr);
				}
				break;
			case LiteParser.TypeStr:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1834;
				_localctx._t = this.match(LiteParser.TypeStr);
				}
				break;
			case LiteParser.TypeBool:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1835;
				_localctx._t = this.match(LiteParser.TypeBool);
				}
				break;
			case LiteParser.TypeInt:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1836;
				_localctx._t = this.match(LiteParser.TypeInt);
				}
				break;
			case LiteParser.TypeNum:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1837;
				_localctx._t = this.match(LiteParser.TypeNum);
				}
				break;
			case LiteParser.TypeByte:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1838;
				_localctx._t = this.match(LiteParser.TypeByte);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nilExpr(): NilExprContext {
		let _localctx: NilExprContext = new NilExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, LiteParser.RULE_nilExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1841;
			this.match(LiteParser.NilLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolExpr(): BoolExprContext {
		let _localctx: BoolExprContext = new BoolExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, LiteParser.RULE_boolExpr);
		try {
			this.state = 1845;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.TrueLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1843;
				_localctx._t = this.match(LiteParser.TrueLiteral);
				}
				break;
			case LiteParser.FalseLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1844;
				_localctx._t = this.match(LiteParser.FalseLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeType(): JudgeTypeContext {
		let _localctx: JudgeTypeContext = new JudgeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, LiteParser.RULE_judgeType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1847;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Equal_Equal || _la === LiteParser.Not_Equal)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1848;
			this.match(LiteParser.Colon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwise(): BitwiseContext {
		let _localctx: BitwiseContext = new BitwiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, LiteParser.RULE_bitwise);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1855;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.And:
				{
				this.state = 1850;
				this.bitwiseAnd();
				}
				break;
			case LiteParser.Or:
				{
				this.state = 1851;
				this.bitwiseOr();
				}
				break;
			case LiteParser.Xor:
				{
				this.state = 1852;
				this.bitwiseXor();
				}
				break;
			case LiteParser.Less:
				{
				this.state = 1853;
				this.bitwiseLeftShift();
				}
				break;
			case LiteParser.Greater:
				{
				this.state = 1854;
				this.bitwiseRightShift();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1858;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1857;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseAnd(): BitwiseAndContext {
		let _localctx: BitwiseAndContext = new BitwiseAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, LiteParser.RULE_bitwiseAnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1860;
			this.match(LiteParser.And);
			this.state = 1861;
			this.match(LiteParser.And);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOr(): BitwiseOrContext {
		let _localctx: BitwiseOrContext = new BitwiseOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, LiteParser.RULE_bitwiseOr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1863;
			this.match(LiteParser.Or);
			this.state = 1864;
			this.match(LiteParser.Or);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseNot(): BitwiseNotContext {
		let _localctx: BitwiseNotContext = new BitwiseNotContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, LiteParser.RULE_bitwiseNot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1866;
			this.match(LiteParser.Wave);
			this.state = 1867;
			this.match(LiteParser.Wave);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseXor(): BitwiseXorContext {
		let _localctx: BitwiseXorContext = new BitwiseXorContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, LiteParser.RULE_bitwiseXor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1869;
			this.match(LiteParser.Xor);
			this.state = 1870;
			this.match(LiteParser.Xor);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseLeftShift(): BitwiseLeftShiftContext {
		let _localctx: BitwiseLeftShiftContext = new BitwiseLeftShiftContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, LiteParser.RULE_bitwiseLeftShift);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1872;
			this.match(LiteParser.Less);
			this.state = 1873;
			this.match(LiteParser.Less);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseRightShift(): BitwiseRightShiftContext {
		let _localctx: BitwiseRightShiftContext = new BitwiseRightShiftContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, LiteParser.RULE_bitwiseRightShift);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1875;
			this.match(LiteParser.Greater);
			this.state = 1876;
			this.match(LiteParser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judge(): JudgeContext {
		let _localctx: JudgeContext = new JudgeContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, LiteParser.RULE_judge);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1878;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.Equal_Equal) | (1 << LiteParser.Less_Equal) | (1 << LiteParser.Greater_Equal) | (1 << LiteParser.Not_Equal))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (LiteParser.Less - 38)) | (1 << (LiteParser.Greater - 38)) | (1 << (LiteParser.And - 38)) | (1 << (LiteParser.Or - 38)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1880;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1879;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, LiteParser.RULE_assign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1882;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (LiteParser.Add_Equal - 18)) | (1 << (LiteParser.Sub_Equal - 18)) | (1 << (LiteParser.Mul_Equal - 18)) | (1 << (LiteParser.Div_Equal - 18)) | (1 << (LiteParser.Mod_Equal - 18)) | (1 << (LiteParser.Equal - 18)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1883;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public add(): AddContext {
		let _localctx: AddContext = new AddContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, LiteParser.RULE_add);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1886;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Add || _la === LiteParser.Sub)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1887;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mul(): MulContext {
		let _localctx: MulContext = new MulContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, LiteParser.RULE_mul);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1890;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (LiteParser.Mul - 55)) | (1 << (LiteParser.Div - 55)) | (1 << (LiteParser.Mod - 55)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1892;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1891;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pow(): PowContext {
		let _localctx: PowContext = new PowContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, LiteParser.RULE_pow);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1894;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.Pow) | (1 << LiteParser.Root) | (1 << LiteParser.Log))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1895;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, LiteParser.RULE_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1898;
			_localctx._op = this.match(LiteParser.Dot);
			this.state = 1900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				this.state = 1899;
				this.match(LiteParser.New_Line);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wave(): WaveContext {
		let _localctx: WaveContext = new WaveContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, LiteParser.RULE_wave);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1902;
			_localctx._op = this.match(LiteParser.Wave);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, LiteParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1904;
			this.idItem();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idItem(): IdItemContext {
		let _localctx: IdItemContext = new IdItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, LiteParser.RULE_idItem);
		let _la: number;
		try {
			this.state = 1910;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1906;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === LiteParser.IDPrivate || _la === LiteParser.IDPublic)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1907;
				this.typeBasic();
				}
				break;
			case LiteParser.TypeAny:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1908;
				this.typeAny();
				}
				break;
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1909;
				this.linqKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, LiteParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1912;
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Semi || _la === LiteParser.New_Line)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public more(): MoreContext {
		let _localctx: MoreContext = new MoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, LiteParser.RULE_more);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1914;
			this.match(LiteParser.Comma);
			this.state = 1918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1915;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public left_brace(): Left_braceContext {
		let _localctx: Left_braceContext = new Left_braceContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, LiteParser.RULE_left_brace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1921;
			this.match(LiteParser.Left_Brace);
			this.state = 1925;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1922;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 1927;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_brace(): Right_braceContext {
		let _localctx: Right_braceContext = new Right_braceContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, LiteParser.RULE_right_brace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1928;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1934;
			this.match(LiteParser.Right_Brace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public left_paren(): Left_parenContext {
		let _localctx: Left_parenContext = new Left_parenContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, LiteParser.RULE_left_paren);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1936;
			this.match(LiteParser.Left_Paren);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_paren(): Right_parenContext {
		let _localctx: Right_parenContext = new Right_parenContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, LiteParser.RULE_right_paren);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1938;
			this.match(LiteParser.Right_Paren);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public left_brack(): Left_brackContext {
		let _localctx: Left_brackContext = new Left_brackContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, LiteParser.RULE_left_brack);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1940;
			this.match(LiteParser.Left_Brack);
			this.state = 1944;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1941;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 1946;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_brack(): Right_brackContext {
		let _localctx: Right_brackContext = new Right_brackContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, LiteParser.RULE_right_brack);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1947;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1953;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 65:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 12);

		case 9:
			return this.precpred(this._ctx, 11);

		case 10:
			return this.precpred(this._ctx, 10);

		case 11:
			return this.precpred(this._ctx, 9);

		case 12:
			return this.precpred(this._ctx, 8);

		case 13:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03_\u07A6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x03\x02\x06\x02" +
		"\u0148\n\x02\r\x02\x0E\x02\u0149\x03\x03\x07\x03\u014D\n\x03\f\x03\x0E" +
		"\x03\u0150\v\x03\x03\x03\x05\x03\u0153\n\x03\x03\x03\x03\x03\x07\x03\u0157" +
		"\n\x03\f\x03\x0E\x03\u015A\v\x03\x03\x03\x07\x03\u015D\n\x03\f\x03\x0E" +
		"\x03\u0160\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\u0166\n\x04\f" +
		"\x04\x0E\x04\u0169\v\x04\x03\x04\x03\x04\x03\x04\x03\x05\x05\x05\u016F" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0174\n\x05\x05\x05\u0176\n\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0187\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\t\x05\t\u0194\n\t\x03\t\x03\t\x03\t\x07\t\u0199\n\t\f\t\x0E\t\u019C\v" +
		"\t\x03\t\x03\t\x03\t\x07\t\u01A1\n\t\f\t\x0E\t\u01A4\v\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x05\n\u01AC\n\n\x03\n\x05\n\u01AF\n\n\x03\n\x03\n" +
		"\x03\v\x05\v\u01B4\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v" +
		"\u01BD\n\v\x05\v\u01BF\n\v\x03\v\x03\v\x03\f\x05\f\u01C4\n\f\x03\f\x03" +
		"\f\x03\f\x05\f\u01C9\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x06\f\u01D0\n\f" +
		"\r\f\x0E\f\u01D1\x03\f\x03\f\x05\f\u01D6\n\f\x03\f\x03\f\x03\r\x05\r\u01DB" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01E3\n\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x05\x0E\u01E9\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01ED\n\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01F3\n\x0E\f\x0E\x0E\x0E\u01F6\v" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01FC\n\x0E\f\x0E\x0E\x0E" +
		"\u01FF\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u0205\n\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u0209\n\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u020E\n\x0F" +
		"\f\x0F\x0E\x0F\u0211\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\u021A\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x05\x12\u0221\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u022B\n\x12\x03\x12\x03\x12\x05\x12\u022F\n\x12\x03" +
		"\x12\x03\x12\x07\x12\u0233\n\x12\f\x12\x0E\x12\u0236\v\x12\x03\x12\x03" +
		"\x12\x03\x13\x05\x13\u023B\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\u0244\n\x13\x05\x13\u0246\n\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u024F\n\x14\x03\x14\x03" +
		"\x14\x06\x14\u0253\n\x14\r\x14\x0E\x14\u0254\x03\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u0265\n\x16\x03\x16\x07\x16\u0268\n\x16\f\x16\x0E" +
		"\x16\u026B\v\x16\x03\x16\x03\x16\x07\x16\u026F\n\x16\f\x16\x0E\x16\u0272" +
		"\v\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x05\x17\u027A\n" +
		"\x17\x03\x18\x05\x18\u027D\n\x18\x03\x18\x03\x18\x05\x18\u0281\n\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0287\n\x18\f\x18\x0E\x18\u028A\v" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0290\n\x18\f\x18\x0E\x18" +
		"\u0293\v\x18\x03\x18\x03\x18\x03\x18\x03\x19\x05\x19\u0299\n\x19\x03\x19" +
		"\x03\x19\x03\x19\x05\x19\u029E\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x06\x19\u02A5\n\x19\r\x19\x0E\x19\u02A6\x03\x19\x03\x19\x05\x19\u02AB" +
		"\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x07\x1A\u02B5\n\x1A\f\x1A\x0E\x1A\u02B8\v\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u02BC\n\x1A\f\x1A\x0E\x1A\u02BF\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u02C7\n\x1B\x03\x1C\x05\x1C\u02CA\n\x1C\x03\x1C" +
		"\x05\x1C\u02CD\n\x1C\x03\x1C\x03\x1C\x05\x1C\u02D1\n\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x07\x1C\u02D7\n\x1C\f\x1C\x0E\x1C\u02DA\v\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u02E0\n\x1C\f\x1C\x0E\x1C\u02E3\v\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x05\x1D\u02E9\n\x1D\x03\x1D\x05\x1D\u02EC" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02F1\n\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x06\x1D\u02F8\n\x1D\r\x1D\x0E\x1D\u02F9\x03\x1D\x03" +
		"\x1D\x05\x1D\u02FE\n\x1D\x03\x1D\x03\x1D\x03\x1E\x05\x1E\u0303\n\x1E\x03" +
		"\x1E\x03\x1E\x05\x1E\u0307\n\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u030C" +
		"\n\x1E\f\x1E\x0E\x1E\u030F\v\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u0318\n\x1F\x03 \x05 \u031B\n \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x07 \u0324\n \f \x0E \u0327\v \x03 \x03 \x05 \u032B" +
		"\n \x03 \x03 \x03!\x03!\x03\"\x05\"\u0332\n\"\x03\"\x03\"\x05\"\u0336" +
		"\n\"\x03\"\x03\"\x03\"\x03\"\x07\"\u033C\n\"\f\"\x0E\"\u033F\v\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03#\x03#\x05#\u0347\n#\x03#\x03#\x03#\x03#\x07#\u034D" +
		"\n#\f#\x0E#\u0350\v#\x03#\x03#\x03#\x03#\x07#\u0356\n#\f#\x0E#\u0359\v" +
		"#\x03#\x03#\x03#\x03$\x03$\x05$\u0360\n$\x03$\x03$\x03%\x05%\u0365\n%" +
		"\x03%\x03%\x03%\x07%\u036A\n%\f%\x0E%\u036D\v%\x03&\x05&\u0370\n&\x03" +
		"&\x03&\x03&\x07&\u0375\n&\f&\x0E&\u0378\v&\x03\'\x03\'\x03\'\x03\'\x03" +
		"(\x05(\u037F\n(\x03(\x03(\x03(\x03(\x03(\x05(\u0386\n(\x03)\x03)\x03)" +
		"\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x05)\u039B\n)\x03*\x03*\x03*\x06*\u03A0\n*\r*\x0E*\u03A1\x03" +
		"*\x03*\x03+\x03+\x03+\x03+\x07+\u03AA\n+\f+\x0E+\u03AD\v+\x03+\x03+\x07" +
		"+\u03B1\n+\f+\x0E+\u03B4\v+\x03+\x03+\x03,\x03,\x03,\x05,\u03BB\n,\x03" +
		",\x03,\x05,\u03BF\n,\x03-\x03-\x07-\u03C3\n-\f-\x0E-\u03C6\v-\x03-\x03" +
		"-\x03-\x03-\x03-\x07-\u03CD\n-\f-\x0E-\u03D0\v-\x03-\x03-\x05-\u03D4\n" +
		"-\x03.\x03.\x03.\x07.\u03D9\n.\f.\x0E.\u03DC\v.\x03.\x03.\x03/\x03/\x03" +
		"/\x03/\x07/\u03E4\n/\f/\x0E/\u03E7\v/\x03/\x03/\x030\x030\x030\x070\u03EE" +
		"\n0\f0\x0E0\u03F1\v0\x030\x030\x031\x031\x031\x031\x031\x071\u03FA\n1" +
		"\f1\x0E1\u03FD\v1\x031\x031\x031\x032\x032\x032\x032\x032\x032\x052\u0408" +
		"\n2\x032\x032\x032\x072\u040D\n2\f2\x0E2\u0410\v2\x032\x032\x032\x033" +
		"\x033\x033\x033\x073\u0419\n3\f3\x0E3\u041C\v3\x033\x033\x033\x034\x03" +
		"4\x034\x074\u0424\n4\f4\x0E4\u0427\v4\x034\x034\x034\x035\x035\x035\x03" +
		"5\x036\x036\x036\x036\x037\x037\x037\x077\u0437\n7\f7\x0E7\u043A\v7\x03" +
		"7\x037\x077\u043E\n7\f7\x0E7\u0441\v7\x037\x037\x037\x037\x037\x037\x07" +
		"7\u0449\n7\f7\x0E7\u044C\v7\x037\x037\x067\u0450\n7\r7\x0E7\u0451\x03" +
		"7\x037\x057\u0456\n7\x038\x038\x038\x038\x038\x058\u045D\n8\x038\x038" +
		"\x039\x039\x039\x039\x039\x059\u0466\n9\x039\x039\x079\u046A\n9\f9\x0E" +
		"9\u046D\v9\x039\x039\x03:\x03:\x03:\x07:\u0474\n:\f:\x0E:\u0477\v:\x03" +
		":\x03:\x03;\x03;\x03;\x05;\u047E\n;\x03;\x03;\x03;\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0491\n<\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x05=\u0499\n=\x03=\x03=\x03=\x03>\x03>\x03" +
		">\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03" +
		"@\x03@\x03A\x03A\x03A\x03B\x03B\x05B\u04B5\nB\x03B\x03B\x03B\x03B\x03" +
		"B\x03B\x05B\u04BD\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u04D1\nC\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x07C\u04FB\nC\fC\x0EC\u04FE" +
		"\vC\x03D\x03D\x05D\u0502\nD\x03D\x03D\x05D\u0506\nD\x03D\x03D\x03D\x05" +
		"D\u050B\nD\x03E\x03E\x03E\x03E\x03E\x07E\u0512\nE\fE\x0EE\u0515\vE\x05" +
		"E\u0517\nE\x03E\x03E\x03F\x03F\x03F\x03F\x07F\u051F\nF\fF\x0EF\u0522\v" +
		"F\x03G\x03G\x05G\u0526\nG\x03H\x03H\x03H\x03H\x05H\u052C\nH\x03H\x03H" +
		"\x03H\x03I\x03I\x03I\x03I\x07I\u0535\nI\fI\x0EI\u0538\vI\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x07J\u0540\nJ\fJ\x0EJ\u0543\vJ\x03J\x03J\x05J\u0547\n" +
		"J\x03K\x03K\x03K\x05K\u054C\nK\x03K\x03K\x03L\x03L\x05L\u0552\nL\x03M" +
		"\x03M\x03M\x03M\x03N\x03N\x03N\x05N\u055B\nN\x03N\x03N\x03O\x03O\x03O" +
		"\x03O\x03O\x03O\x05O\u0565\nO\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x05P" +
		"\u056E\nP\x03P\x05P\u0571\nP\x03P\x05P\u0574\nP\x03P\x03P\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x05Q\u057D\nQ\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03S\x03" +
		"S\x03S\x03S\x07S\u058A\nS\fS\x0ES\u058D\vS\x03T\x03T\x03T\x03T\x03U\x03" +
		"U\x03U\x03U\x07U\u0597\nU\fU\x0EU\u059A\vU\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x07V\u05A4\nV\fV\x0EV\u05A7\vV\x03W\x03W\x03W\x03W\x07W\u05AD" +
		"\nW\fW\x0EW\u05B0\vW\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x07Y\u05BA" +
		"\nY\fY\x0EY\u05BD\vY\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x07Z\u05CA\nZ\fZ\x0EZ\u05CD\vZ\x03Z\x03Z\x03[\x03[\x03[\x03[\x03" +
		"[\x07[\u05D6\n[\f[\x0E[\u05D9\v[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03" +
		"\\\x03]\x03]\x03]\x05]\u05E5\n]\x03^\x03^\x03^\x03^\x03_\x03_\x03_\x03" +
		"`\x03`\x03`\x03a\x03a\x03a\x05a\u05F4\na\x07a\u05F6\na\fa\x0Ea\u05F9\v" +
		"a\x03a\x03a\x03b\x03b\x03b\x05b\u0600\nb\x03b\x03b\x07b\u0604\nb\fb\x0E" +
		"b\u0607\vb\x03c\x03c\x03c\x03c\x03c\x07c\u060E\nc\fc\x0Ec\u0611\vc\x03" +
		"c\x03c\x03d\x03d\x03d\x05d\u0618\nd\x03e\x03e\x03e\x03e\x03e\x07e\u061F" +
		"\ne\fe\x0Ee\u0622\ve\x03e\x03e\x03f\x03f\x05f\u0628\nf\x03f\x03f\x07f" +
		"\u062C\nf\ff\x0Ef\u062F\vf\x03f\x03f\x03f\x03f\x03f\x05f\u0636\nf\x03" +
		"f\x03f\x07f\u063A\nf\ff\x0Ef\u063D\vf\x03f\x07f\u0640\nf\ff\x0Ef\u0643" +
		"\vf\x03f\x03f\x05f\u0647\nf\x03g\x03g\x03g\x03g\x07g\u064D\ng\fg\x0Eg" +
		"\u0650\vg\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x07i\u0659\ni\fi\x0Ei\u065C" +
		"\vi\x03i\x03i\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x07k\u0668\nk\f" +
		"k\x0Ek\u066B\vk\x03k\x03k\x03k\x03k\x07k\u0671\nk\fk\x0Ek\u0674\vk\x03" +
		"k\x03k\x03l\x03l\x03l\x03l\x03l\x07l\u067D\nl\fl\x0El\u0680\vl\x03l\x03" +
		"l\x03m\x03m\x03m\x03n\x03n\x03n\x03o\x03o\x03o\x03p\x03p\x05p\u068F\n" +
		"p\x03p\x03p\x03p\x05p\u0694\np\x03p\x06p\u0697\np\rp\x0Ep\u0698\x03p\x03" +
		"p\x05p\u069D\np\x03p\x03p\x03q\x03q\x05q\u06A3\nq\x03q\x03q\x05q\u06A7" +
		"\nq\x03r\x03r\x05r\u06AB\nr\x03s\x03s\x03t\x03t\x03u\x03u\x06u\u06B3\n" +
		"u\ru\x0Eu\u06B4\x03v\x03v\x03v\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03" +
		"w\x05w\u06C2\nw\x03x\x03x\x03x\x03x\x03y\x03y\x03z\x03z\x03z\x03z\x03" +
		"z\x03z\x03z\x03z\x03z\x03z\x05z\u06D4\nz\x03{\x03{\x03{\x05{\u06D9\n{" +
		"\x03|\x03|\x03|\x03}\x03}\x03}\x05}\u06E1\n}\x03~\x03~\x03~\x03~\x03~" +
		"\x06~\u06E8\n~\r~\x0E~\u06E9\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F" +
		"\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x84\x03\x84\x05\x84\u0707\n\x84\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x07\x85\u070D\n\x85\f\x85\x0E\x85\u0710\v\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x86\x03\x86\x03\x87\x05\x87\u0718\n\x87\x03\x87\x03\x87\x03\x87" +
		"\x07\x87\u071D\n\x87\f\x87\x0E\x87\u0720\v\x87\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u0732\n\x88\x03\x89\x03\x89\x03" +
		"\x8A\x03\x8A\x05\x8A\u0738\n\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0742\n\x8C\x03\x8C\x05\x8C\u0745\n\x8C" +
		"\x03\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F" +
		"\x03\x90\x03\x90\x03\x90\x03\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92" +
		"\x03\x93\x03\x93\x05\x93\u075B\n\x93\x03\x94\x03\x94\x05\x94\u075F\n\x94" +
		"\x03\x95\x03\x95\x05\x95\u0763\n\x95\x03\x96\x03\x96\x05\x96\u0767\n\x96" +
		"\x03\x97\x03\x97\x05\x97\u076B\n\x97\x03\x98\x03\x98\x05\x98\u076F\n\x98" +
		"\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B" +
		"\u0779\n\x9B\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x07\x9D\u077F\n\x9D\f\x9D" +
		"\x0E\x9D\u0782\v\x9D\x03\x9E\x03\x9E\x07\x9E\u0786\n\x9E\f\x9E\x0E\x9E" +
		"\u0789\v\x9E\x03\x9F\x07\x9F\u078C\n\x9F\f\x9F\x0E\x9F\u078F\v\x9F\x03" +
		"\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x07\xA2\u0799" +
		"\n\xA2\f\xA2\x0E\xA2\u079C\v\xA2\x03\xA3\x07\xA3\u079F\n\xA3\f\xA3\x0E" +
		"\xA3\u07A2\v\xA3\x03\xA3\x03\xA3\x03\xA3\x02\x02\x03\x84\xA4\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA" +
		"\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC" +
		"\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE" +
		"\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C" +
		"\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A" +
		"\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128" +
		"\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134\x02\u0136" +
		"\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142\x02\u0144" +
		"\x02\x02\x0E\x04\x02##%%\x04\x02\x1B\x1C()\x03\x02\x04\x05\x03\x02\x04" +
		"\x10\x04\x02\x1A\x1A\x1D\x1D\x05\x02\x1A\x1D()=>\x04\x02\x14\x18\'\'\x03" +
		"\x0278\x03\x029;\x03\x02\x11\x13\x03\x02XY\x04\x02**^^\x02\u0832\x02\u0147" +
		"\x03\x02\x02\x02\x04\u014E\x03\x02\x02\x02\x06\u0161\x03\x02\x02\x02\b" +
		"\u016E\x03\x02\x02\x02\n\u0186\x03\x02\x02\x02\f\u0188\x03\x02\x02\x02" +
		"\x0E\u018D\x03\x02\x02\x02\x10\u0193\x03\x02\x02\x02\x12\u01A8\x03\x02" +
		"\x02\x02\x14\u01B3\x03\x02\x02\x02\x16\u01C3\x03\x02\x02\x02\x18\u01DA" +
		"\x03\x02\x02\x02\x1A\u01E8\x03\x02\x02\x02\x1C\u0204\x03\x02\x02\x02\x1E" +
		"\u0219\x03\x02\x02\x02 \u021B\x03\x02\x02\x02\"\u0220\x03\x02\x02\x02" +
		"$\u023A\x03\x02\x02\x02&\u0249\x03\x02\x02\x02(\u0259\x03\x02\x02\x02" +
		"*\u0261\x03\x02\x02\x02,\u0279\x03\x02\x02\x02.\u027C\x03\x02\x02\x02" +
		"0\u0298\x03\x02\x02\x022\u02AE\x03\x02\x02\x024\u02C6\x03\x02\x02\x02" +
		"6\u02C9\x03\x02\x02\x028\u02E8\x03\x02\x02\x02:\u0302\x03\x02\x02\x02" +
		"<\u0317\x03\x02\x02\x02>\u031A\x03\x02\x02\x02@\u032E\x03\x02\x02\x02" +
		"B\u0331\x03\x02\x02\x02D\u0344\x03\x02\x02\x02F\u035D\x03\x02\x02\x02" +
		"H\u0364\x03\x02\x02\x02J\u036F\x03\x02\x02\x02L\u0379\x03\x02\x02\x02" +
		"N\u037E\x03\x02\x02\x02P\u039A\x03\x02\x02\x02R\u039C\x03\x02\x02\x02" +
		"T\u03A5\x03\x02\x02\x02V\u03BE\x03\x02\x02\x02X\u03D3\x03\x02\x02\x02" +
		"Z\u03D5\x03\x02\x02\x02\\\u03DF\x03\x02\x02\x02^\u03EA\x03\x02\x02\x02" +
		"`\u03F4\x03\x02\x02\x02b\u0401\x03\x02\x02\x02d\u0414\x03\x02\x02\x02" +
		"f\u0420\x03\x02\x02\x02h\u042B\x03\x02\x02\x02j\u042F\x03\x02\x02\x02" +
		"l\u0455\x03\x02\x02\x02n\u0457\x03\x02\x02\x02p\u0465\x03\x02\x02\x02" +
		"r\u0470\x03\x02\x02\x02t\u047A\x03\x02\x02\x02v\u0490\x03\x02\x02\x02" +
		"x\u0492\x03\x02\x02\x02z\u049D\x03\x02\x02\x02|\u04A2\x03\x02\x02\x02" +
		"~\u04AA\x03\x02\x02\x02\x80\u04AF\x03\x02\x02\x02\x82\u04BC\x03\x02\x02" +
		"\x02\x84\u04D0\x03\x02\x02\x02\x86\u04FF\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x88\u050C\x03\x02\x02\x02\x8A\u051A\x03\x02\x02\x02\x8C\u0523\x03\x02" +
		"\x02\x02\x8E\u0527\x03\x02\x02\x02\x90\u0530\x03\x02\x02\x02\x92\u0539" +
		"\x03\x02\x02\x02\x94\u054B\x03\x02\x02\x02\x96\u0551\x03\x02\x02\x02\x98" +
		"\u0553\x03\x02\x02\x02\x9A\u0557\x03\x02\x02\x02\x9C\u055E\x03\x02\x02" +
		"\x02\x9E\u0568\x03\x02\x02\x02\xA0\u0577\x03\x02\x02\x02\xA2\u0580\x03" +
		"\x02\x02\x02\xA4\u0585\x03\x02\x02\x02\xA6\u058E\x03\x02\x02\x02\xA8\u0592" +
		"\x03\x02\x02\x02\xAA\u059B\x03\x02\x02\x02\xAC\u05A8\x03\x02\x02\x02\xAE" +
		"\u05B1\x03\x02\x02\x02\xB0\u05B4\x03\x02\x02\x02\xB2\u05C0\x03\x02\x02" +
		"\x02\xB4\u05D0\x03\x02\x02\x02\xB6\u05DC\x03\x02\x02\x02\xB8\u05E4\x03" +
		"\x02\x02\x02\xBA\u05E6\x03\x02\x02\x02\xBC\u05EA\x03\x02\x02\x02\xBE\u05ED" +
		"\x03\x02\x02\x02\xC0\u05F7\x03\x02\x02\x02\xC2\u05FC\x03\x02\x02\x02\xC4" +
		"\u0608\x03\x02\x02\x02\xC6\u0614\x03\x02\x02\x02\xC8\u0619\x03\x02\x02" +
		"\x02\xCA\u0646\x03\x02\x02\x02\xCC\u0648\x03\x02\x02\x02\xCE\u0651\x03" +
		"\x02\x02\x02\xD0\u0653\x03\x02\x02\x02\xD2\u065F\x03\x02\x02\x02\xD4\u0663" +
		"\x03\x02\x02\x02\xD6\u0677\x03\x02\x02\x02\xD8\u0683\x03\x02\x02\x02\xDA" +
		"\u0686\x03\x02\x02\x02\xDC\u0689\x03\x02\x02\x02\xDE\u068C\x03\x02\x02" +
		"\x02\xE0\u06A0\x03\x02\x02\x02\xE2\u06AA\x03\x02\x02\x02\xE4\u06AC\x03" +
		"\x02\x02\x02\xE6\u06AE\x03\x02\x02\x02\xE8\u06B0\x03\x02\x02\x02\xEA\u06B6" +
		"\x03\x02\x02\x02\xEC\u06C1\x03\x02\x02\x02\xEE\u06C3\x03\x02\x02\x02\xF0" +
		"\u06C7\x03\x02\x02\x02\xF2\u06D3\x03\x02\x02\x02\xF4\u06D5\x03\x02\x02" +
		"\x02\xF6\u06DA\x03\x02\x02\x02\xF8\u06E0\x03\x02\x02\x02\xFA\u06E2\x03" +
		"\x02\x02\x02\xFC\u06ED\x03\x02\x02\x02\xFE\u06F2\x03\x02\x02\x02\u0100" +
		"\u06F6\x03\x02\x02\x02\u0102\u06FA\x03\x02\x02\x02\u0104\u06FF\x03\x02" +
		"\x02\x02\u0106\u0704\x03\x02\x02\x02\u0108\u0708\x03\x02\x02\x02\u010A" +
		"\u0714\x03\x02\x02\x02\u010C\u0717\x03\x02\x02\x02\u010E\u0731\x03\x02" +
		"\x02\x02\u0110\u0733\x03\x02\x02\x02\u0112\u0737\x03\x02\x02\x02\u0114" +
		"\u0739\x03\x02\x02\x02\u0116\u0741\x03\x02\x02\x02\u0118\u0746\x03\x02" +
		"\x02\x02\u011A\u0749\x03\x02\x02\x02\u011C\u074C\x03\x02\x02\x02\u011E" +
		"\u074F\x03\x02\x02\x02\u0120\u0752\x03\x02\x02\x02\u0122\u0755\x03\x02" +
		"\x02\x02\u0124\u0758\x03\x02\x02\x02\u0126\u075C\x03\x02\x02\x02\u0128" +
		"\u0760\x03\x02\x02\x02\u012A\u0764\x03\x02\x02\x02\u012C\u0768\x03\x02" +
		"\x02\x02\u012E\u076C\x03\x02\x02\x02\u0130\u0770\x03\x02\x02\x02\u0132" +
		"\u0772\x03\x02\x02\x02\u0134\u0778\x03\x02\x02\x02\u0136\u077A\x03\x02" +
		"\x02\x02\u0138\u077C\x03\x02\x02\x02\u013A\u0783\x03\x02\x02\x02\u013C" +
		"\u078D\x03\x02\x02\x02\u013E\u0792\x03\x02\x02\x02\u0140\u0794\x03\x02" +
		"\x02\x02\u0142\u0796\x03\x02\x02\x02\u0144\u07A0\x03\x02\x02\x02\u0146" +
		"\u0148\x05\x04\x03\x02\u0147\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02" +
		"\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\x03\x03\x02\x02\x02\u014B\u014D\x07^\x02\x02\u014C\u014B\x03\x02\x02" +
		"\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F" +
		"\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02" +
		"\u0151\u0153\x05\x8CG\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0158\x05\x06\x04\x02\u0155" +
		"\u0157\x07^\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02" +
		"\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015E" +
		"\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015D\x05\n\x06\x02" +
		"\u015C\u015B\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03" +
		"\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\x05\x03\x02\x02\x02\u0160" +
		"\u015E\x03\x02\x02\x02\u0161\u0162\x07V\x02\x02\u0162\u0167\x05\u013A" +
		"\x9E\x02\u0163\u0166\x05\b\x05\x02\u0164\u0166\x07^\x02\x02\u0165\u0163" +
		"\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02\u0166\u0169\x03\x02\x02\x02" +
		"\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016A\x03" +
		"\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016B\x05\u013C\x9F\x02" +
		"\u016B\u016C\x05\u0136\x9C\x02\u016C\x07\x03\x02\x02\x02\u016D\u016F\x05" +
		"\x8CG\x02\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F" +
		"\u0170\x03\x02\x02\x02\u0170\u0175\x07V\x02\x02\u0171\u0173\x05\u0132" +
		"\x9A\x02\u0172\u0174\x05\u012E\x98\x02\u0173\u0172\x03\x02\x02\x02\u0173" +
		"\u0174\x03\x02\x02\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0171\x03\x02" +
		"\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177" +
		"\u0178\x05\u0136\x9C\x02\u0178\t\x03\x02\x02\x02\u0179\u0187\x05\x14\v" +
		"\x02\u017A\u0187\x05\x16\f\x02\u017B\u0187\x05\x1A\x0E\x02\u017C\u0187" +
		"\x05\x18\r\x02\u017D\u0187\x05\x1C\x0F\x02\u017E\u0187\x05:\x1E\x02\u017F" +
		"\u0187\x05*\x16\x02\u0180\u0187\x052\x1A\x02\u0181\u0187\x05\"\x12\x02" +
		"\u0182\u0187\x05\x10\t\x02\u0183\u0187\x05\f\x07\x02\u0184\u0187\x05\x0E" +
		"\b\x02\u0185\u0187\x07^\x02\x02\u0186\u0179\x03\x02\x02\x02\u0186\u017A" +
		"\x03\x02\x02\x02\u0186\u017B\x03\x02\x02\x02\u0186\u017C\x03\x02\x02\x02" +
		"\u0186\u017D\x03\x02\x02\x02\u0186\u017E\x03\x02\x02\x02\u0186\u017F\x03" +
		"\x02\x02\x02\u0186\u0180\x03\x02\x02\x02\u0186\u0181\x03\x02\x02\x02\u0186" +
		"\u0182\x03\x02\x02\x02\u0186\u0183\x03\x02\x02\x02\u0186\u0184\x03\x02" +
		"\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187\v\x03\x02\x02\x02\u0188\u0189" +
		"\x05\u0132\x9A\x02\u0189\u018A\x07\"\x02\x02\u018A\u018B\x05\xF8}\x02" +
		"\u018B\u018C\x05\u0136\x9C\x02\u018C\r\x03\x02\x02\x02\u018D\u018E\x05" +
		"\u0132\x9A\x02\u018E\u018F\x07#\x02\x02\u018F\u0190\x05\xF8}\x02\u0190" +
		"\u0191\x05\u0136\x9C\x02\u0191\x0F\x03\x02\x02\x02\u0192\u0194\x05\x8C" +
		"G\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195" +
		"\x03\x02\x02\x02\u0195\u0196\x05\u0132\x9A\x02\u0196\u019A\x07#\x02\x02" +
		"\u0197\u0199\x07^\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199\u019C\x03" +
		"\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
		"\u019D\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u019E\x05\xF8" +
		"}\x02\u019E\u01A2\x05\u0142\xA2\x02\u019F\u01A1\x05\x12\n\x02\u01A0\u019F" +
		"\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02" +
		"\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A2\x03" +
		"\x02\x02\x02\u01A5\u01A6\x05\u0144\xA3\x02\u01A6\u01A7\x05\u0136\x9C\x02" +
		"\u01A7\x11\x03\x02\x02\x02\u01A8\u01AE\x05\u0132\x9A\x02\u01A9\u01AB\x07" +
		"\'\x02\x02\u01AA\u01AC\x05\u0128\x95\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB" +
		"\u01AC\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x05\xF0" +
		"y\x02\u01AE\u01A9\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0" +
		"\x03\x02\x02\x02\u01B0\u01B1\x05\u0136\x9C\x02\u01B1\x13\x03\x02\x02\x02" +
		"\u01B2\u01B4\x05\x8CG\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03" +
		"\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01BE\x05\u0132\x9A\x02" +
		"\u01B6\u01B7\x07\x19\x02\x02\u01B7\u01BF\x05\x84C\x02\u01B8\u01B9\x07" +
		"2\x02\x02\u01B9\u01BC\x05\xF8}\x02\u01BA\u01BB\x07\'\x02\x02\u01BB\u01BD" +
		"\x05\x84C\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02" +
		"\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01B6\x03\x02\x02\x02\u01BE\u01B8\x03" +
		"\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x05\u0136\x9C\x02" +
		"\u01C1\x15\x03\x02\x02\x02\u01C2\u01C4\x05\x8CG\x02\u01C3\u01C2\x03\x02" +
		"\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5" +
		"\u01C6\x05\u0132\x9A\x02\u01C6\u01C8\x05\u013E\xA0\x02\u01C7\u01C9\x05" +
		"\x84C\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
		"\u01CA\x03\x02\x02\x02\u01CA\u01CB\x05\u0140\xA1\x02\u01CB\u01CC\x072" +
		"\x02\x02\u01CC\u01D5\x05\xF8}\x02\u01CD\u01CF\x05\u013A\x9E\x02\u01CE" +
		"\u01D0\x05&\x14\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02" +
		"\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3" +
		"\x03\x02\x02\x02\u01D3\u01D4\x05\u013C\x9F\x02\u01D4\u01D6\x03\x02\x02" +
		"\x02\u01D5\u01CD\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D7" +
		"\x03\x02\x02\x02\u01D7\u01D8\x05\u0136\x9C\x02\u01D8\x17\x03\x02\x02\x02" +
		"\u01D9\u01DB\x05\x8CG\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03" +
		"\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01E2\x05\u0132\x9A\x02" +
		"\u01DD\u01DE\x072\x02\x02\u01DE\u01DF\x05\xF8}\x02\u01DF\u01E0\x072\x02" +
		"\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01E3\x071\x02\x02\u01E2\u01DD" +
		"\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02" +
		"\u01E4\u01E5\x05\x84C\x02\u01E5\u01E6\x05\u0136\x9C\x02\u01E6\x19\x03" +
		"\x02\x02\x02\u01E7\u01E9\x05\x8CG\x02\u01E8\u01E7\x03\x02\x02\x02\u01E8" +
		"\u01E9\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EC\x05\u0132" +
		"\x9A\x02\u01EB\u01ED\x05\xC4c\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED" +
		"\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x05\u013E\xA0" +
		"\x02\u01EF\u01F0\x05H%\x02\u01F0\u01F4\t\x02\x02\x02\u01F1\u01F3\x07^" +
		"\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4" +
		"\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F7\x03\x02" +
		"\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7\u01F8\x05J&\x02\u01F8\u01F9" +
		"\x05\u0140\xA1\x02\u01F9\u01FD\x05\u013A\x9E\x02\u01FA\u01FC\x05P)\x02" +
		"\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03" +
		"\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u0200\x03\x02\x02\x02\u01FF" +
		"\u01FD\x03\x02\x02\x02\u0200\u0201\x05\u013C\x9F\x02\u0201\u0202\x05\u0136" +
		"\x9C\x02\u0202\x1B\x03\x02\x02\x02\u0203\u0205\x05\x8CG\x02\u0204\u0203" +
		"\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02" +
		"\u0206\u0208\x05\u0132\x9A\x02\u0207\u0209\x05\xC4c\x02\u0208\u0207\x03" +
		"\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020B\x07#\x02\x02\u020B\u020F\x05\u013A\x9E\x02\u020C\u020E\x05\x1E" +
		"\x10\x02\u020D\u020C\x03\x02\x02\x02\u020E\u0211\x03\x02\x02\x02\u020F" +
		"\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0212\x03\x02" +
		"\x02\x02\u0211\u020F\x03\x02\x02\x02\u0212\u0213\x05\u013C\x9F\x02\u0213" +
		"\u0214\x05\u0136\x9C\x02\u0214\x1D\x03\x02\x02\x02\u0215\u021A\x05 \x11" +
		"\x02\u0216\u021A\x05$\x13\x02\u0217\u021A\x05(\x15\x02\u0218\u021A\x07" +
		"^\x02\x02\u0219\u0215\x03\x02\x02\x02\u0219\u0216\x03\x02\x02\x02\u0219" +
		"\u0217\x03\x02\x02\x02\u0219\u0218\x03\x02\x02\x02\u021A\x1F\x03\x02\x02" +
		"\x02\u021B\u021C\x072\x02\x02\u021C\u021D\x05\xF8}\x02\u021D\u021E\x05" +
		"\u0136\x9C\x02\u021E!\x03\x02\x02\x02\u021F\u0221\x05\x8CG\x02\u0220\u021F" +
		"\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02" +
		"\u0222\u0223\x05L\'\x02\u0223\u0224\x07(\x02\x02\u0224\u0225\x07)\x02" +
		"\x02\u0225\u0226\x05\u013E\xA0\x02\u0226\u0227\x05H%\x02\u0227\u022E\x05" +
		"\u0140\xA1\x02\u0228\u022A\x05\u013E\xA0\x02\u0229\u022B\x05\x8AF\x02" +
		"\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C\x03" +
		"\x02\x02\x02\u022C\u022D\x05\u0140\xA1\x02\u022D\u022F\x03\x02\x02\x02" +
		"\u022E\u0228\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03" +
		"\x02\x02\x02\u0230\u0234\x05\u013A\x9E\x02\u0231\u0233\x05P)\x02\u0232" +
		"\u0231\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02" +
		"\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0237\x03\x02\x02\x02\u0236" +
		"\u0234\x03\x02\x02\x02\u0237\u0238\x05\u013C\x9F\x02\u0238#\x03\x02\x02" +
		"\x02\u0239\u023B\x05\x8CG\x02\u023A\u0239\x03\x02\x02\x02\u023A\u023B" +
		"\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u0245\x05\u0132\x9A" +
		"\x02\u023D\u023E\x07\x19\x02\x02\u023E\u0246\x05\x84C\x02\u023F\u0240" +
		"\x072\x02\x02\u0240\u0243\x05\xF8}\x02\u0241\u0242\x07\'\x02\x02\u0242" +
		"\u0244\x05\x84C\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0244\x03\x02\x02" +
		"\x02\u0244\u0246\x03\x02\x02\x02\u0245\u023D\x03\x02\x02\x02\u0245\u023F" +
		"\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0248\x05\u0136\x9C" +
		"\x02\u0248%\x03\x02\x02\x02\u0249\u024E\x05\u0132\x9A\x02\u024A\u024B" +
		"\x05\u013E\xA0\x02\u024B\u024C\x05\u0132\x9A\x02\u024C\u024D\x05\u0140" +
		"\xA1\x02\u024D\u024F\x03\x02\x02\x02\u024E\u024A\x03\x02\x02\x02\u024E" +
		"\u024F\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0252\x05\u013A" +
		"\x9E\x02\u0251\u0253\x05P)\x02\u0252\u0251\x03\x02\x02\x02\u0253\u0254" +
		"\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02" +
		"\u0255\u0256\x03\x02\x02\x02\u0256\u0257\x05\u013C\x9F\x02\u0257\u0258" +
		"\x05\u0136\x9C\x02\u0258\'\x03\x02\x02\x02\u0259\u025A\x05\u0132\x9A\x02" +
		"\u025A\u025B\x072\x02\x02\u025B\u025C\x05\u0142\xA2\x02\u025C\u025D\x07" +
		"3\x02\x02\u025D\u025E\x05\u0144\xA3\x02\u025E\u025F\x05\xC0a\x02\u025F" +
		"\u0260\x05\u0136\x9C\x02\u0260)\x03\x02\x02\x02\u0261\u0262\x05L\'\x02" +
		"\u0262\u0264\x07#\x02\x02\u0263\u0265\x05\xF8}\x02\u0264\u0263\x03\x02" +
		"\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0269\x03\x02\x02\x02\u0266" +
		"\u0268\x07^\x02\x02\u0267\u0266\x03\x02\x02\x02\u0268\u026B\x03\x02\x02" +
		"\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C" +
		"\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026C\u0270\x05\u013A\x9E" +
		"\x02\u026D\u026F\x05,\x17\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0272" +
		"\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02" +
		"\u0271\u0273\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0274\x05" +
		"\u013C\x9F\x02\u0274\u0275\x05\u0136\x9C\x02\u0275+\x03\x02\x02\x02\u0276" +
		"\u027A\x05.\x18\x02\u0277\u027A\x050\x19\x02\u0278\u027A\x07^\x02\x02" +
		"\u0279\u0276\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u0278\x03" +
		"\x02\x02\x02\u027A-\x03\x02\x02\x02\u027B\u027D\x05\x8CG\x02\u027C\u027B" +
		"\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02" +
		"\u027E\u0280\x05\u0132\x9A\x02\u027F\u0281\x05\xC4c\x02\u0280\u027F\x03" +
		"\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282" +
		"\u0283\x05\u013E\xA0\x02\u0283\u0284\x05H%\x02\u0284\u0288\t\x02\x02\x02" +
		"\u0285\u0287\x07^\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287\u028A\x03" +
		"\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289" +
		"\u028B\x03\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028C\x05J&\x02" +
		"\u028C\u028D\x05\u0140\xA1\x02\u028D\u0291\x05\u013A\x9E\x02\u028E\u0290" +
		"\x05P)\x02\u028F\u028E\x03\x02\x02\x02\u0290\u0293\x03\x02\x02\x02\u0291" +
		"\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0294\x03\x02" +
		"\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0295\x05\u013C\x9F\x02\u0295" +
		"\u0296\x05\u0136\x9C\x02\u0296/\x03\x02\x02\x02\u0297\u0299\x05\x8CG\x02" +
		"\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03" +
		"\x02\x02\x02\u029A\u029B\x05\u0132\x9A\x02\u029B\u029D\x05\u013E\xA0\x02" +
		"\u029C\u029E\x05\x84C\x02\u029D\u029C\x03\x02\x02\x02\u029D\u029E\x03" +
		"\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A0\x05\u0140\xA1\x02" +
		"\u02A0\u02A1\x072\x02\x02\u02A1\u02AA\x05\xF8}\x02\u02A2\u02A4\x05\u013A" +
		"\x9E\x02\u02A3\u02A5\x05&\x14\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5\u02A6" +
		"\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02" +
		"\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02A9\x05\u013C\x9F\x02\u02A9\u02AB" +
		"\x03\x02\x02\x02\u02AA\u02A2\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02" +
		"\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x05\u0136\x9C\x02\u02AD1\x03" +
		"\x02\x02\x02\u02AE\u02AF\x05\u013E\xA0\x02\u02AF\u02B0\x05\u0132\x9A\x02" +
		"\u02B0\u02B1\x05\u0140\xA1\x02\u02B1\u02B2\x05L\'\x02\u02B2\u02B6\x07" +
		"#\x02\x02\u02B3\u02B5\x07^\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B8" +
		"\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02" +
		"\u02B7\u02B9\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9\u02BD\x05" +
		"\u013A\x9E\x02\u02BA\u02BC\x054\x1B\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC" +
		"\u02BF\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02" +
		"\x02\x02\u02BE\u02C0\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0" +
		"\u02C1\x05\u013C\x9F\x02\u02C1\u02C2\x05\u0136\x9C\x02\u02C23\x03\x02" +
		"\x02\x02\u02C3\u02C7\x056\x1C\x02\u02C4\u02C7\x058\x1D\x02\u02C5\u02C7" +
		"\x07^\x02\x02\u02C6\u02C3\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02" +
		"\u02C6\u02C5\x03\x02\x02\x02\u02C75\x03\x02\x02\x02\u02C8\u02CA\x05\x8C" +
		"G\x02\u02C9\u02C8\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CC" +
		"\x03\x02\x02\x02\u02CB\u02CD\x07Z\x02\x02\u02CC\u02CB\x03\x02\x02\x02" +
		"\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x05" +
		"\u0132\x9A\x02\u02CF\u02D1\x05\xC4c\x02\u02D0\u02CF\x03\x02\x02\x02\u02D0" +
		"\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x05\u013E" +
		"\xA0\x02\u02D3\u02D4\x05H%\x02\u02D4\u02D8\t\x02\x02\x02\u02D5\u02D7\x07" +
		"^\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D7\u02DA\x03\x02\x02\x02\u02D8" +
		"\u02D6\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DB\x03\x02" +
		"\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DB\u02DC\x05J&\x02\u02DC\u02DD" +
		"\x05\u0140\xA1\x02\u02DD\u02E1\x05\u013A\x9E\x02\u02DE\u02E0\x05P)\x02" +
		"\u02DF\u02DE\x03\x02\x02\x02\u02E0\u02E3\x03\x02\x02\x02\u02E1\u02DF\x03" +
		"\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E4\x03\x02\x02\x02\u02E3" +
		"\u02E1\x03\x02\x02\x02\u02E4\u02E5\x05\u013C\x9F\x02\u02E5\u02E6\x05\u0136" +
		"\x9C\x02\u02E67\x03\x02\x02\x02\u02E7\u02E9\x05\x8CG\x02\u02E8\u02E7\x03" +
		"\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EB\x03\x02\x02\x02\u02EA" +
		"\u02EC\x07Z\x02\x02\u02EB\u02EA\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02" +
		"\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EE\x05\u0132\x9A\x02\u02EE\u02F0" +
		"\x05\u013E\xA0\x02\u02EF\u02F1\x05\x84C\x02\u02F0\u02EF\x03\x02\x02\x02" +
		"\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x05" +
		"\u0140\xA1\x02\u02F3\u02F4\x072\x02\x02\u02F4\u02FD\x05\xF8}\x02\u02F5" +
		"\u02F7\x05\u013A\x9E\x02\u02F6\u02F8\x05&\x14\x02\u02F7\u02F6\x03\x02" +
		"\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9" +
		"\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC\x05\u013C" +
		"\x9F\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02F5\x03\x02\x02\x02\u02FD" +
		"\u02FE\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x05\u0136" +
		"\x9C\x02\u03009\x03\x02\x02\x02\u0301\u0303\x05\x8CG\x02\u0302\u0301\x03" +
		"\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304" +
		"\u0306\x05\u0132\x9A\x02\u0305\u0307\x05\xC4c\x02\u0306\u0305\x03\x02" +
		"\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308" +
		"\u0309\x07$\x02\x02\u0309\u030D\x05\u013A\x9E\x02\u030A\u030C\x05<\x1F" +
		"\x02\u030B\u030A\x03\x02\x02\x02\u030C\u030F\x03\x02\x02\x02\u030D\u030B" +
		"\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u0310\x03\x02\x02\x02" +
		"\u030F\u030D\x03\x02\x02\x02\u0310\u0311\x05\u013C\x9F\x02\u0311\u0312" +
		"\x05\u0136\x9C\x02\u0312;\x03\x02\x02\x02\u0313\u0318\x05 \x11\x02\u0314" +
		"\u0318\x05B\"\x02\u0315\u0318\x05> \x02\u0316\u0318\x07^\x02\x02\u0317" +
		"\u0313\x03\x02\x02\x02\u0317\u0314\x03\x02\x02\x02\u0317\u0315\x03\x02" +
		"\x02\x02\u0317\u0316\x03\x02\x02\x02\u0318=\x03\x02\x02\x02\u0319\u031B" +
		"\x05\x8CG\x02\u031A\u0319\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02" +
		"\u031B\u031C\x03\x02\x02\x02\u031C\u031D\x05\u0132\x9A\x02\u031D\u031E" +
		"\x05\u013E\xA0\x02\u031E\u031F\x05\u0140\xA1\x02\u031F\u0320\x072\x02" +
		"\x02\u0320\u032A\x05\xF8}\x02\u0321\u0325\x05\u013A\x9E\x02\u0322\u0324" +
		"\x05@!\x02\u0323\u0322\x03\x02\x02\x02\u0324\u0327\x03\x02\x02\x02\u0325" +
		"\u0323\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0328\x03\x02" +
		"\x02\x02\u0327\u0325\x03\x02\x02\x02\u0328\u0329\x05\u013C\x9F\x02\u0329" +
		"\u032B\x03\x02\x02\x02\u032A\u0321\x03\x02\x02\x02\u032A\u032B\x03\x02" +
		"\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u032D\x05\u0136\x9C\x02\u032D" +
		"?\x03\x02\x02\x02\u032E\u032F\x05\u0132\x9A\x02\u032FA\x03\x02\x02\x02" +
		"\u0330\u0332\x05\x8CG\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332\x03" +
		"\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0335\x05\u0132\x9A\x02" +
		"\u0334\u0336\x05\xC4c\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03" +
		"\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0338\x05\u013E\xA0\x02" +
		"\u0338\u0339\x05H%\x02\u0339\u033D\t\x02\x02\x02\u033A\u033C\x07^\x02" +
		"\x02\u033B\u033A\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033B" +
		"\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u0340\x03\x02\x02\x02" +
		"\u033F\u033D\x03\x02\x02\x02\u0340\u0341\x05J&\x02\u0341\u0342\x05\u0140" +
		"\xA1\x02\u0342\u0343\x05\u0136\x9C\x02\u0343C\x03\x02\x02\x02\u0344\u0346" +
		"\x05\u0132\x9A\x02\u0345\u0347\x05\xC4c\x02\u0346\u0345\x03\x02\x02\x02" +
		"\u0346\u0347\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u0349\x05" +
		"\u013E\xA0\x02\u0349\u034A\x05H%\x02\u034A\u034E\t\x02\x02\x02\u034B\u034D" +
		"\x07^\x02\x02\u034C\u034B\x03\x02\x02\x02\u034D\u0350\x03\x02\x02\x02" +
		"\u034E\u034C\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02\u034F\u0351\x03" +
		"\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0351\u0352\x05J&\x02\u0352\u0353" +
		"\x05\u0140\xA1\x02\u0353\u0357\x05\u013A\x9E\x02\u0354\u0356\x05P)\x02" +
		"\u0355\u0354\x03\x02\x02\x02\u0356\u0359\x03\x02\x02\x02\u0357\u0355\x03" +
		"\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035A\x03\x02\x02\x02\u0359" +
		"\u0357\x03\x02\x02\x02\u035A\u035B\x05\u013C\x9F\x02\u035B\u035C\x05\u0136" +
		"\x9C\x02\u035CE\x03\x02\x02\x02\u035D\u035F\x07$\x02\x02\u035E\u0360\x05" +
		"\x8AF\x02\u035F\u035E\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360" +
		"\u0361\x03\x02\x02\x02\u0361\u0362\x05\u0136\x9C\x02\u0362G\x03\x02\x02" +
		"\x02\u0363\u0365\x05N(\x02\u0364\u0363\x03\x02\x02\x02\u0364\u0365\x03" +
		"\x02\x02\x02\u0365\u036B\x03\x02\x02\x02\u0366\u0367\x05\u0138\x9D\x02" +
		"\u0367\u0368\x05N(\x02\u0368\u036A\x03\x02\x02\x02\u0369\u0366\x03\x02" +
		"\x02\x02\u036A\u036D\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036B" +
		"\u036C\x03\x02\x02\x02\u036CI\x03\x02\x02\x02\u036D\u036B\x03\x02\x02" +
		"\x02\u036E\u0370\x05N(\x02\u036F\u036E\x03\x02\x02\x02\u036F\u0370\x03" +
		"\x02\x02\x02\u0370\u0376\x03\x02\x02\x02\u0371\u0372\x05\u0138\x9D\x02" +
		"\u0372\u0373\x05N(\x02\u0373\u0375\x03\x02\x02\x02\u0374\u0371\x03\x02" +
		"\x02\x02\u0375\u0378\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0376" +
		"\u0377\x03\x02\x02\x02\u0377K\x03\x02\x02\x02\u0378\u0376\x03\x02\x02" +
		"\x02\u0379\u037A\x05\u0132\x9A\x02\u037A\u037B\x072\x02\x02\u037B\u037C" +
		"\x05\xF8}\x02\u037CM\x03\x02\x02\x02\u037D\u037F\x05\x8CG\x02\u037E\u037D" +
		"\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02" +
		"\u0380\u0381\x05\u0132\x9A\x02\u0381\u0382\x072\x02\x02\u0382\u0385\x05" +
		"\xF8}\x02\u0383\u0384\x07\'\x02\x02\u0384\u0386\x05\x84C\x02\u0385\u0383" +
		"\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386O\x03\x02\x02\x02\u0387" +
		"\u039B\x05F$\x02\u0388\u039B\x05R*\x02\u0389\u039B\x05X-\x02\u038A\u039B" +
		"\x05`1\x02\u038B\u039B\x05b2\x02\u038C\u039B\x05d3\x02\u038D\u039B\x05" +
		"f4\x02\u038E\u039B\x05h5\x02\u038F\u039B\x05j6\x02\u0390\u039B\x05n8\x02" +
		"\u0391\u039B\x05l7\x02\u0392\u039B\x05t;\x02\u0393\u039B\x05D#\x02\u0394" +
		"\u039B\x05x=\x02\u0395\u039B\x05z>\x02\u0396\u039B\x05|?\x02\u0397\u039B" +
		"\x05~@\x02\u0398\u039B\x05\x80A\x02\u0399\u039B\x07^\x02\x02\u039A\u0387" +
		"\x03\x02\x02\x02\u039A\u0388\x03\x02\x02\x02\u039A\u0389\x03\x02\x02\x02" +
		"\u039A\u038A\x03\x02\x02\x02\u039A\u038B\x03\x02\x02\x02\u039A\u038C\x03" +
		"\x02\x02\x02\u039A\u038D\x03\x02\x02\x02\u039A\u038E\x03\x02\x02\x02\u039A" +
		"\u038F\x03\x02\x02\x02\u039A\u0390\x03\x02\x02\x02\u039A\u0391\x03\x02" +
		"\x02\x02\u039A\u0392\x03\x02\x02\x02\u039A\u0393\x03\x02\x02\x02\u039A" +
		"\u0394\x03\x02\x02\x02\u039A\u0395\x03\x02\x02\x02\u039A\u0396\x03\x02" +
		"\x02\x02\u039A\u0397\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039A" +
		"\u0399\x03\x02\x02\x02\u039BQ\x03\x02\x02\x02\u039C\u039D\x05\x84C\x02" +
		"\u039D\u039F\x073\x02\x02\u039E\u03A0\x05T+\x02\u039F\u039E\x03\x02\x02" +
		"\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2" +
		"\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A4\x05\u0136\x9C" +
		"\x02\u03A4S\x03\x02\x02\x02\u03A5\u03AB\x05V,\x02\u03A6\u03A7\x05\u0138" +
		"\x9D\x02\u03A7\u03A8\x05V,\x02\u03A8\u03AA\x03\x02\x02\x02\u03A9\u03A6" +
		"\x03\x02\x02\x02\u03AA\u03AD\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02" +
		"\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AE";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AE\u03B2\x05\u013A\x9E" +
		"\x02\u03AF\u03B1\x05P)\x02\u03B0\u03AF\x03\x02\x02\x02\u03B1\u03B4\x03" +
		"\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3" +
		"\u03B5\x03\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B5\u03B6\x05\u013C" +
		"\x9F\x02\u03B6U\x03\x02\x02\x02\u03B7\u03BF\x07Z\x02\x02\u03B8\u03BF\x05" +
		"\x84C\x02\u03B9\u03BB\x05\u0132\x9A\x02\u03BA\u03B9\x03\x02\x02\x02\u03BA" +
		"\u03BB\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BD\x072\x02" +
		"\x02\u03BD\u03BF\x05\xF8}\x02\u03BE\u03B7\x03\x02\x02\x02\u03BE\u03B8" +
		"\x03\x02\x02\x02\u03BE\u03BA\x03\x02\x02\x02\u03BFW\x03\x02\x02\x02\u03C0" +
		"\u03C4\x05\\/\x02\u03C1\u03C3\x05^0\x02\u03C2\u03C1\x03\x02\x02\x02\u03C3" +
		"\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03\x02" +
		"\x02\x02\u03C5\u03C7\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C7" +
		"\u03C8\x05Z.\x02\u03C8\u03C9\x05\u0136\x9C\x02\u03C9\u03D4\x03\x02\x02" +
		"\x02\u03CA\u03CE\x05\\/\x02\u03CB\u03CD\x05^0\x02\u03CC\u03CB\x03\x02" +
		"\x02\x02\u03CD\u03D0\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE" +
		"\u03CF\x03\x02\x02\x02\u03CF\u03D1\x03\x02\x02\x02\u03D0\u03CE\x03\x02" +
		"\x02\x02\u03D1\u03D2\x05\u0136\x9C\x02\u03D2\u03D4\x03\x02\x02\x02\u03D3" +
		"\u03C0\x03\x02\x02\x02\u03D3\u03CA\x03\x02\x02\x02\u03D4Y\x03\x02\x02" +
		"\x02\u03D5\u03D6\x07Z\x02\x02\u03D6\u03DA\x05\u013A\x9E\x02\u03D7\u03D9" +
		"\x05P)\x02\u03D8\u03D7\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02\x02\u03DA" +
		"\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02" +
		"\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03DE\x05\u013C\x9F\x02\u03DE" +
		"[\x03\x02\x02\x02\u03DF\u03E0\x073\x02\x02\u03E0\u03E1\x05\x84C\x02\u03E1" +
		"\u03E5\x05\u013A\x9E\x02\u03E2\u03E4\x05P)\x02\u03E3\u03E2\x03\x02\x02" +
		"\x02\u03E4\u03E7\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E5\u03E6" +
		"\x03\x02\x02\x02\u03E6\u03E8\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02" +
		"\u03E8\u03E9\x05\u013C\x9F\x02\u03E9]\x03\x02\x02\x02\u03EA\u03EB\x05" +
		"\x84C\x02\u03EB\u03EF\x05\u013A\x9E\x02\u03EC\u03EE\x05P)\x02\u03ED\u03EC" +
		"\x03\x02\x02\x02\u03EE\u03F1\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02" +
		"\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F2\x03\x02\x02\x02\u03F1\u03EF\x03" +
		"\x02\x02\x02\u03F2\u03F3\x05\u013C\x9F\x02\u03F3_\x03\x02\x02\x02\u03F4" +
		"\u03F5\x05v<\x02\u03F5\u03F6\x074\x02\x02\u03F6\u03F7\x05\u0132\x9A\x02" +
		"\u03F7\u03FB\x05\u013A\x9E\x02\u03F8\u03FA\x05P)\x02\u03F9\u03F8\x03\x02" +
		"\x02\x02\u03FA\u03FD\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB" +
		"\u03FC\x03\x02\x02\x02\u03FC\u03FE\x03\x02\x02\x02\u03FD\u03FB\x03\x02" +
		"\x02\x02\u03FE\u03FF\x05\u013C\x9F\x02\u03FF\u0400\x05\u0136\x9C\x02\u0400" +
		"a\x03\x02\x02\x02\u0401\u0402\x05\x84C\x02\u0402\u0407\x074\x02\x02\u0403" +
		"\u0404\x07/\x02\x02\u0404\u0405\x05\u0132\x9A\x02\u0405\u0406\x070\x02" +
		"\x02\u0406\u0408\x03\x02\x02\x02\u0407\u0403\x03\x02\x02\x02\u0407\u0408" +
		"\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u040A\x05\u0132\x9A" +
		"\x02\u040A\u040E\x05\u013A\x9E\x02\u040B\u040D\x05P)\x02\u040C\u040B\x03" +
		"\x02\x02\x02\u040D\u0410\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040E" +
		"\u040F\x03\x02\x02\x02\u040F\u0411\x03\x02\x02\x02\u0410\u040E\x03\x02" +
		"\x02\x02\u0411\u0412\x05\u013C\x9F\x02\u0412\u0413\x05\u0136\x9C\x02\u0413" +
		"c\x03\x02\x02\x02\u0414\u0415\x074\x02\x02\u0415\u0416\x05\x84C\x02\u0416" +
		"\u041A\x05\u013A\x9E\x02\u0417\u0419\x05P)\x02\u0418\u0417\x03\x02\x02" +
		"\x02\u0419\u041C\x03\x02\x02\x02\u041A\u0418\x03\x02\x02\x02\u041A\u041B" +
		"\x03\x02\x02\x02\u041B\u041D\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02" +
		"\u041D\u041E\x05\u013C\x9F\x02\u041E\u041F\x05\u0136\x9C\x02\u041Fe\x03" +
		"\x02\x02\x02\u0420\u0421\x074\x02\x02\u0421\u0425\x05\u013A\x9E\x02\u0422" +
		"\u0424\x05P)\x02\u0423\u0422\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02" +
		"\u0425\u0423\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0428\x03" +
		"\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0428\u0429\x05\u013C\x9F\x02" +
		"\u0429\u042A\x05\u0136\x9C\x02\u042Ag\x03\x02\x02\x02\u042B\u042C\x07" +
		"$\x02\x02\u042C\u042D\x074\x02\x02\u042D\u042E\x05\u0136\x9C\x02\u042E" +
		"i\x03\x02\x02\x02\u042F\u0430\x07#\x02\x02\u0430\u0431\x074\x02\x02\u0431" +
		"\u0432\x05\u0136\x9C\x02\u0432k\x03\x02\x02\x02\u0433\u0434\x075\x02\x02" +
		"\u0434\u0438\x05\u013A\x9E\x02\u0435\u0437\x05P)\x02\u0436\u0435\x03\x02" +
		"\x02\x02\u0437\u043A\x03\x02\x02\x02\u0438\u0436\x03\x02\x02\x02\u0438" +
		"\u0439\x03\x02\x02\x02\u0439\u043B\x03\x02\x02\x02\u043A\u0438\x03\x02" +
		"\x02\x02\u043B\u043F\x05\u013C\x9F\x02\u043C\u043E\x05p9\x02\u043D\u043C" +
		"\x03\x02\x02\x02\u043E\u0441\x03\x02\x02\x02\u043F\u043D\x03\x02\x02\x02" +
		"\u043F\u0440\x03\x02\x02\x02\u0440\u0442\x03\x02\x02\x02\u0441\u043F\x03" +
		"\x02\x02\x02\u0442\u0443\x05r:\x02\u0443\u0444\x05\u0136\x9C\x02\u0444" +
		"\u0456\x03\x02\x02\x02\u0445\u0446\x075\x02\x02\u0446\u044A\x05\u013A" +
		"\x9E\x02\u0447\u0449\x05P)\x02\u0448\u0447\x03\x02\x02\x02\u0449\u044C" +
		"\x03\x02\x02\x02\u044A\u0448\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02" +
		"\u044B\u044D\x03\x02\x02\x02\u044C\u044A\x03\x02\x02\x02\u044D\u044F\x05" +
		"\u013C\x9F\x02\u044E\u0450\x05p9\x02\u044F\u044E\x03\x02\x02\x02\u0450" +
		"\u0451\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0451\u0452\x03\x02" +
		"\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0454\x05\u0136\x9C\x02\u0454" +
		"\u0456\x03\x02\x02\x02\u0455\u0433\x03\x02\x02\x02\u0455\u0445\x03\x02" +
		"\x02\x02\u0456m\x03\x02\x02\x02\u0457\u0458\x05\x84C\x02\u0458\u0459\x07" +
		"5\x02\x02\u0459\u045C\x05\x84C\x02\u045A\u045B\x072\x02\x02\u045B\u045D" +
		"\x05\xF8}\x02\u045C\u045A\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02" +
		"\u045D\u045E\x03\x02\x02\x02\u045E\u045F\x05\u0136\x9C\x02\u045Fo\x03" +
		"\x02\x02\x02\u0460\u0466\x05\u0132\x9A\x02\u0461\u0462\x05\u0132\x9A\x02" +
		"\u0462\u0463\x072\x02\x02\u0463\u0464\x05\xF8}\x02\u0464\u0466\x03\x02" +
		"\x02\x02\u0465\u0460\x03\x02\x02\x02\u0465\u0461\x03\x02\x02\x02\u0466" +
		"\u0467\x03\x02\x02\x02\u0467\u046B\x05\u013A\x9E\x02\u0468\u046A\x05P" +
		")\x02\u0469\u0468\x03\x02\x02\x02\u046A\u046D\x03\x02\x02\x02\u046B\u0469" +
		"\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C\u046E\x03\x02\x02\x02" +
		"\u046D\u046B\x03\x02\x02\x02\u046E\u046F\x05\u013C\x9F\x02\u046Fq\x03" +
		"\x02\x02\x02\u0470\u0471\x07Z\x02\x02\u0471\u0475\x05\u013A\x9E\x02\u0472" +
		"\u0474\x05P)\x02\u0473\u0472\x03\x02\x02\x02\u0474\u0477\x03\x02\x02\x02" +
		"\u0475\u0473\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0478\x03" +
		"\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0478\u0479\x05\u013C\x9F\x02" +
		"\u0479s\x03\x02\x02\x02\u047A\u047B\x075\x02\x02\u047B\u047D\x05\u013E" +
		"\xA0\x02\u047C\u047E\x05\x84C\x02\u047D\u047C\x03\x02\x02\x02\u047D\u047E" +
		"\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\u0480\x05\u0140\xA1" +
		"\x02\u0480\u0481\x05\u0136\x9C\x02\u0481u\x03\x02\x02\x02\u0482\u0483" +
		"\x07/\x02\x02\u0483\u0484\x05\x84C\x02\u0484\u0485\t\x03\x02\x02\u0485" +
		"\u0486\x05\x84C\x02\u0486\u0487\x05\u0138\x9D\x02\u0487\u0488\x05\x84" +
		"C\x02\u0488\u0489\x070\x02\x02\u0489\u0491\x03\x02\x02\x02\u048A\u048B" +
		"\x07/\x02\x02\u048B\u048C\x05\x84C\x02\u048C\u048D\t\x03\x02\x02\u048D" +
		"\u048E\x05\x84C\x02\u048E\u048F\x070\x02\x02\u048F\u0491\x03\x02\x02\x02" +
		"\u0490\u0482\x03\x02\x02\x02\u0490\u048A\x03\x02\x02\x02\u0491w\x03\x02" +
		"\x02\x02\u0492\u0498\x05\x84C\x02\u0493\u0499\x07\x19\x02\x02\u0494\u0495" +
		"\x072\x02\x02\u0495\u0496\x05\xF8}\x02\u0496\u0497\x07\'\x02\x02\u0497" +
		"\u0499\x03\x02\x02\x02\u0498\u0493\x03\x02\x02\x02\u0498\u0494\x03\x02" +
		"\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049B\x05\x84C\x02\u049B\u049C" +
		"\x05\u0136\x9C\x02\u049Cy\x03\x02\x02\x02\u049D\u049E\x05\x84C\x02\u049E" +
		"\u049F\x072\x02\x02\u049F\u04A0\x05\xF8}\x02\u04A0\u04A1\x05\u0136\x9C" +
		"\x02\u04A1{\x03\x02\x02\x02\u04A2\u04A3\x05\x84C\x02\u04A3\u04A4\x07/" +
		"\x02\x02\u04A4\u04A5\x07$\x02\x02\u04A5\u04A6\x070\x02\x02\u04A6\u04A7" +
		"\x05\u0126\x94\x02\u04A7\u04A8\x05\x84C\x02\u04A8\u04A9\x05\u0136\x9C" +
		"\x02\u04A9}\x03\x02\x02\x02\u04AA\u04AB\x05\x84C\x02\u04AB\u04AC\x05\u0126" +
		"\x94\x02\u04AC\u04AD\x05\x84C\x02\u04AD\u04AE\x05\u0136\x9C\x02\u04AE" +
		"\x7F\x03\x02\x02\x02\u04AF\u04B0\x05\x84C\x02\u04B0\u04B1\x05\u0136\x9C" +
		"\x02\u04B1\x81\x03\x02\x02\x02\u04B2\u04B4\x05\u0132\x9A\x02\u04B3\u04B5" +
		"\x05\xC8e\x02\u04B4\u04B3\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02" +
		"\u04B5\u04BD\x03\x02\x02\x02\u04B6\u04BD\x07Z\x02\x02\u04B7\u04B8\x05" +
		"\u013E\xA0\x02\u04B8\u04B9\x05\x84C\x02\u04B9\u04BA\x05\u0140\xA1\x02" +
		"\u04BA\u04BD\x03\x02\x02\x02\u04BB\u04BD\x05\xECw\x02\u04BC\u04B2\x03" +
		"\x02\x02\x02\u04BC\u04B6\x03\x02\x02\x02\u04BC\u04B7\x03\x02\x02\x02\u04BC" +
		"\u04BB\x03\x02\x02\x02\u04BD\x83\x03\x02\x02\x02\u04BE\u04BF\bC\x01\x02" +
		"\u04BF\u04D1\x05\xDEp\x02\u04C0\u04D1\x05\x82B\x02\u04C1\u04D1\x05\x9E" +
		"P\x02\u04C2\u04D1\x05\x9CO\x02\u04C3\u04D1\x05\xA0Q\x02\u04C4\u04D1\x05" +
		"\xAEX\x02\u04C5\u04D1\x05\xB0Y\x02\u04C6\u04D1\x05\xB2Z\x02\u04C7\u04D1" +
		"\x05\xB4[\x02\u04C8\u04D1\x05\xCAf\x02\u04C9\u04D1\x05\xD4k\x02\u04CA" +
		"\u04D1\x05\xCEh\x02\u04CB\u04D1\x05\xD6l\x02\u04CC\u04D1\x05\xD8m\x02" +
		"\u04CD\u04D1\x05\xDCo\x02\u04CE\u04D1\x05\xDAn\x02\u04CF\u04D1\x05\xE8" +
		"u\x02\u04D0\u04BE\x03\x02\x02\x02\u04D0\u04C0\x03\x02\x02\x02\u04D0\u04C1" +
		"\x03\x02\x02\x02\u04D0\u04C2\x03\x02\x02\x02\u04D0\u04C3\x03\x02\x02\x02" +
		"\u04D0\u04C4\x03\x02\x02\x02\u04D0\u04C5\x03\x02\x02\x02\u04D0\u04C6\x03" +
		"\x02\x02\x02\u04D0\u04C7\x03\x02\x02\x02\u04D0\u04C8\x03\x02\x02\x02\u04D0" +
		"\u04C9\x03\x02\x02\x02\u04D0\u04CA\x03\x02\x02\x02\u04D0\u04CB\x03\x02" +
		"\x02\x02\u04D0\u04CC\x03\x02\x02\x02\u04D0\u04CD\x03\x02\x02\x02\u04D0" +
		"\u04CE\x03\x02\x02\x02\u04D0\u04CF\x03\x02\x02\x02\u04D1\u04FC\x03\x02" +
		"\x02\x02\u04D2\u04D3\f\b\x02\x02\u04D3\u04D4\x05\u0116\x8C\x02\u04D4\u04D5" +
		"\x05\x84C\t\u04D5\u04FB\x03\x02\x02\x02\u04D6\u04D7\f\x07\x02\x02\u04D7" +
		"\u04D8\x05\u0124\x93\x02\u04D8\u04D9\x05\x84C\b\u04D9\u04FB\x03\x02\x02" +
		"\x02\u04DA\u04DB\f\x06\x02\x02\u04DB\u04DC\x05\u0128\x95\x02\u04DC\u04DD" +
		"\x05\x84C\x07\u04DD\u04FB\x03\x02\x02\x02\u04DE\u04DF\f\x05\x02\x02\u04DF" +
		"\u04E0\x05\u012A\x96\x02\u04E0\u04E1\x05\x84C\x06\u04E1\u04FB\x03\x02" +
		"\x02\x02\u04E2\u04E3\f\x04\x02\x02\u04E3\u04E4\x05\u012C\x97\x02\u04E4" +
		"\u04E5\x05\x84C\x05\u04E5\u04FB\x03\x02\x02\x02\u04E6\u04E7\f\x11\x02" +
		"\x02\u04E7\u04FB\x075\x02\x02\u04E8\u04E9\f\x10\x02\x02\u04E9\u04FB\x07" +
		"3\x02\x02\u04EA\u04EB\f\x0F\x02\x02\u04EB\u04FB\x07&\x02\x02\u04EC\u04ED" +
		"\f\x0E\x02\x02\u04ED\u04FB\x05\xA2R\x02\u04EE\u04EF\f\r\x02\x02\u04EF" +
		"\u04FB\x05\x96L\x02\u04F0\u04F1\f\f\x02\x02\u04F1\u04FB\x05\x98M\x02\u04F2" +
		"\u04F3\f\v\x02\x02\u04F3\u04FB\x05\x9AN\x02\u04F4\u04F5\f\n\x02\x02\u04F5" +
		"\u04FB\x05\x86D\x02\u04F6\u04F7\f\t\x02\x02\u04F7\u04F8\x05\u0114\x8B" +
		"\x02\u04F8\u04F9\x05\xF8}\x02\u04F9\u04FB\x03\x02\x02\x02\u04FA\u04D2" +
		"\x03\x02\x02\x02\u04FA\u04D6\x03\x02\x02\x02\u04FA\u04DA\x03\x02\x02\x02" +
		"\u04FA\u04DE\x03\x02\x02\x02\u04FA\u04E2\x03\x02\x02\x02\u04FA\u04E6\x03" +
		"\x02\x02\x02\u04FA\u04E8\x03\x02\x02\x02\u04FA\u04EA\x03\x02\x02\x02\u04FA" +
		"\u04EC\x03\x02\x02\x02\u04FA\u04EE\x03\x02\x02\x02\u04FA\u04F0\x03\x02" +
		"\x02\x02\u04FA\u04F2\x03\x02\x02\x02\u04FA\u04F4\x03\x02\x02\x02\u04FA" +
		"\u04F6\x03\x02\x02\x02\u04FB\u04FE\x03\x02\x02\x02\u04FC\u04FA\x03\x02" +
		"\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\x85\x03\x02\x02\x02\u04FE\u04FC" +
		"\x03\x02\x02\x02\u04FF\u0501\x05\u012E\x98\x02\u0500\u0502\x07^\x02\x02" +
		"\u0501\u0500\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0503\x03" +
		"\x02\x02\x02\u0503\u0505\x05\u0132\x9A\x02\u0504\u0506\x05\xC8e\x02\u0505" +
		"\u0504\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u050A\x03\x02" +
		"\x02\x02\u0507\u050B\x05\x96L\x02\u0508\u050B\x05\x98M\x02\u0509\u050B" +
		"\x05\x9AN\x02\u050A\u0507\x03\x02\x02\x02\u050A\u0508\x03\x02\x02\x02" +
		"\u050A\u0509\x03\x02\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B\x87\x03" +
		"\x02\x02\x02\u050C\u0516\x05\u013E\xA0\x02\u050D\u0513\x05\x84C\x02\u050E" +
		"\u050F\x05\u0138\x9D\x02\u050F\u0510\x05\x84C\x02\u0510\u0512\x03\x02" +
		"\x02\x02\u0511\u050E\x03\x02\x02\x02\u0512\u0515\x03\x02\x02\x02\u0513" +
		"\u0511\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514\u0517\x03\x02" +
		"\x02\x02\u0515\u0513\x03\x02\x02\x02\u0516\u050D\x03\x02\x02\x02\u0516" +
		"\u0517\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518\u0519\x05\u0140" +
		"\xA1\x02\u0519\x89\x03\x02\x02\x02\u051A\u0520\x05\x84C\x02\u051B\u051C" +
		"\x05\u0138\x9D\x02\u051C\u051D\x05\x84C\x02\u051D\u051F\x03\x02\x02\x02" +
		"\u051E\u051B\x03\x02\x02\x02\u051F\u0522\x03\x02\x02\x02\u0520\u051E\x03" +
		"\x02\x02\x02\u0520\u0521\x03\x02\x02\x02\u0521\x8B\x03\x02\x02\x02\u0522" +
		"\u0520\x03\x02\x02\x02\u0523\u0525\x05\x8EH\x02\u0524\u0526\x07^\x02\x02" +
		"\u0525\u0524\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\x8D\x03" +
		"\x02\x02\x02\u0527\u052B\x07/\x02\x02\u0528\u0529\x05\u0132\x9A\x02\u0529" +
		"\u052A\x07#\x02\x02\u052A\u052C\x03\x02\x02\x02\u052B\u0528\x03\x02\x02" +
		"\x02\u052B\u052C\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u052E" +
		"\x05\x90I\x02\u052E\u052F\x070\x02\x02\u052F\x8F\x03\x02\x02\x02\u0530" +
		"\u0536\x05\x92J\x02\u0531\u0532\x05\u0138\x9D\x02\u0532\u0533\x05\x92" +
		"J\x02\u0533\u0535\x03\x02\x02\x02\u0534\u0531\x03\x02\x02\x02\u0535\u0538" +
		"\x03\x02\x02\x02\u0536\u0534\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02" +
		"\u0537\x91\x03\x02\x02\x02\u0538\u0536\x03\x02\x02\x02\u0539\u0546\x05" +
		"\u0132\x9A\x02\u053A\u053B\x05\u013E\xA0\x02\u053B\u0541\x05\x94K\x02" +
		"\u053C\u053D\x05\u0138\x9D\x02\u053D\u053E\x05\x94K\x02\u053E\u0540\x03" +
		"\x02\x02\x02\u053F\u053C\x03\x02\x02\x02\u0540\u0543\x03\x02\x02\x02\u0541" +
		"\u053F\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\u0544\x03\x02" +
		"\x02\x02\u0543\u0541\x03\x02\x02\x02\u0544\u0545\x05\u0140\xA1\x02\u0545" +
		"\u0547\x03\x02\x02\x02\u0546\u053A\x03\x02\x02\x02\u0546\u0547\x03\x02" +
		"\x02\x02\u0547\x93\x03\x02\x02\x02\u0548\u0549\x05\u0132\x9A\x02\u0549" +
		"\u054A\x07\'\x02\x02\u054A\u054C\x03\x02\x02\x02\u054B\u0548\x03\x02\x02" +
		"\x02\u054B\u054C\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\u054E" +
		"\x05\x84C\x02\u054E\x95\x03\x02\x02\x02\u054F\u0552\x05\x88E\x02\u0550" +
		"\u0552\x05\xCAf\x02\u0551\u054F\x03\x02\x02\x02\u0551\u0550\x03\x02\x02" +
		"\x02\u0552\x97\x03\x02\x02\x02\u0553\u0554\x07/\x02\x02\u0554\u0555\x07" +
		"$\x02\x02\u0555\u0556\x070\x02\x02\u0556\x99\x03\x02\x02\x02\u0557\u055A" +
		"\x07/\x02\x02\u0558\u055B\x05\xB8]\x02\u0559\u055B\x05\x84C\x02\u055A" +
		"\u0558\x03\x02\x02\x02\u055A\u0559\x03\x02\x02\x02\u055B\u055C\x03\x02" +
		"\x02\x02\u055C\u055D\x070\x02\x02\u055D\x9B\x03\x02\x02\x02\u055E\u055F" +
		"\x05\xF8}\x02\u055F\u0564\x05\u013A\x9E\x02\u0560\u0565\x05\xA4S\x02\u0561" +
		"\u0565\x05\xA8U\x02\u0562\u0565\x05\xAAV\x02\u0563\u0565\x05\xACW\x02" +
		"\u0564\u0560\x03\x02\x02\x02\u0564\u0561\x03\x02\x02\x02\u0564\u0562\x03" +
		"\x02\x02\x02\u0564\u0563\x03\x02\x02\x02\u0564\u0565\x03\x02\x02\x02\u0565" +
		"\u0566\x03\x02\x02\x02\u0566\u0567\x05\u013C\x9F\x02\u0567\x9D\x03\x02" +
		"\x02\x02\u0568\u0569\x07(\x02\x02\u0569\u056A\x05\xF8}\x02\u056A\u056B" +
		"\x07)\x02\x02\u056B\u056D\x05\u013E\xA0\x02\u056C\u056E\x07^\x02\x02\u056D" +
		"\u056C\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E\u0570\x03\x02" +
		"\x02\x02\u056F\u0571\x05\x8AF\x02\u0570\u056F\x03\x02\x02\x02\u0570\u0571" +
		"\x03\x02\x02\x02\u0571\u0573\x03\x02\x02\x02\u0572\u0574\x07^\x02\x02" +
		"\u0573\u0572\x03\x02\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574\u0575\x03" +
		"\x02\x02\x02\u0575\u0576\x05\u0140\xA1\x02\u0576\x9F\x03\x02\x02\x02\u0577" +
		"\u0578\x073\x02\x02\u0578\u057C\x05\u013E\xA0\x02\u0579\u057D\x05\x84" +
		"C\x02\u057A\u057B\x072\x02\x02\u057B\u057D\x05\xF8}\x02\u057C\u0579\x03" +
		"\x02\x02\x02\u057C\u057A\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E" +
		"\u057F\x05\u0140\xA1\x02\u057F\xA1\x03\x02\x02\x02\u0580\u0581\x072\x02" +
		"\x02\u0581\u0582\x05\u013E\xA0\x02\u0582\u0583\x05\xF8}\x02\u0583\u0584" +
		"\x05\u0140\xA1\x02\u0584\xA3\x03\x02\x02\x02\u0585\u058B\x05\xA6T\x02" +
		"\u0586\u0587\x05\u0138\x9D\x02\u0587\u0588\x05\xA6T\x02\u0588\u058A\x03" +
		"\x02\x02\x02\u0589\u0586\x03\x02\x02\x02\u058A\u058D\x03\x02\x02\x02\u058B" +
		"\u0589\x03\x02\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\xA5\x03\x02\x02" +
		"\x02\u058D\u058B\x03\x02\x02\x02\u058E\u058F\x05\xC2b\x02\u058F\u0590" +
		"\x07\'\x02\x02\u0590\u0591\x05\x84C\x02\u0591\xA7\x03\x02\x02\x02\u0592" +
		"\u0598\x05\x84C\x02\u0593\u0594\x05\u0138\x9D\x02\u0594\u0595\x05\x84" +
		"C\x02\u0595\u0597\x03\x02\x02\x02\u0596\u0593\x03\x02\x02\x02\u0597\u059A" +
		"\x03\x02\x02\x02\u0598\u0596\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02" +
		"\u0599\xA9\x03\x02\x02\x02\u059A\u0598\x03\x02\x02\x02\u059B\u059C\x07" +
		"/\x02\x02\u059C\u059D\x05\x84C\x02\u059D\u05A5\x070\x02\x02\u059E\u059F" +
		"\x05\u0138\x9D\x02\u059F\u05A0\x07/\x02\x02\u05A0\u05A1\x05\x84C\x02\u05A1" +
		"\u05A2\x070\x02\x02\u05A2\u05A4\x03\x02\x02\x02\u05A3\u059E\x03\x02\x02" +
		"\x02\u05A4\u05A7\x03\x02\x02\x02\u05A5\u05A3\x03\x02\x02\x02\u05A5\u05A6" +
		"\x03\x02\x02\x02\u05A6\xAB\x03\x02\x02\x02\u05A7\u05A5\x03\x02\x02\x02" +
		"\u05A8\u05AE\x05\xB6\\\x02\u05A9\u05AA\x05\u0138\x9D\x02\u05AA\u05AB\x05" +
		"\xB6\\\x02\u05AB\u05AD\x03\x02\x02\x02\u05AC\u05A9\x03\x02\x02\x02\u05AD" +
		"\u05B0\x03\x02\x02\x02\u05AE\u05AC\x03\x02\x02\x02\u05AE\u05AF\x03\x02" +
		"\x02\x02\u05AF\xAD\x03\x02\x02\x02\u05B0\u05AE\x03\x02\x02\x02\u05B1\u05B2" +
		"\x07&\x02\x02\u05B2\u05B3\x05\x84C\x02\u05B3\xAF\x03\x02\x02\x02\u05B4" +
		"\u05B5\x05\u013A\x9E\x02\u05B5\u05BB\x05\x84C\x02\u05B6\u05B7\x05\u0138" +
		"\x9D\x02\u05B7\u05B8\x05\x84C\x02\u05B8\u05BA\x03\x02\x02\x02\u05B9\u05B6" +
		"\x03\x02\x02\x02\u05BA\u05BD\x03\x02\x02\x02\u05BB\u05B9\x03\x02\x02\x02" +
		"\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BE\x03\x02\x02\x02\u05BD\u05BB\x03" +
		"\x02\x02\x02\u05BE\u05BF\x05\u013C\x9F\x02\u05BF\xB1\x03\x02\x02\x02\u05C0" +
		"\u05C1\x05\u013A\x9E\x02\u05C1\u05C2\x07/\x02\x02\u05C2\u05C3\x05\x84" +
		"C\x02\u05C3\u05CB\x070\x02\x02\u05C4\u05C5\x05\u0138\x9D\x02\u05C5\u05C6" +
		"\x07/\x02\x02\u05C6\u05C7\x05\x84C\x02\u05C7\u05C8\x070\x02\x02\u05C8" +
		"\u05CA\x03\x02\x02\x02\u05C9\u05C4\x03\x02\x02\x02\u05CA\u05CD\x03\x02" +
		"\x02\x02\u05CB\u05C9\x03\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02\u05CC" +
		"\u05CE\x03\x02\x02\x02\u05CD\u05CB\x03\x02\x02\x02\u05CE\u05CF\x05\u013C" +
		"\x9F\x02\u05CF\xB3\x03\x02\x02\x02\u05D0\u05D1\x05\u013A\x9E\x02\u05D1" +
		"\u05D7\x05\xB6\\\x02\u05D2\u05D3\x05\u0138\x9D\x02\u05D3\u05D4\x05\xB6" +
		"\\\x02\u05D4\u05D6\x03\x02\x02\x02\u05D5\u05D2\x03\x02\x02\x02\u05D6\u05D9" +
		"\x03\x02\x02\x02\u05D7\u05D5\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02" +
		"\u05D8\u05DA\x03\x02\x02\x02\u05D9\u05D7\x03\x02\x02\x02\u05DA\u05DB\x05" +
		"\u013C\x9F\x02\u05DB\xB5\x03\x02\x02\x02\u05DC\u05DD\x07/\x02\x02\u05DD" +
		"\u05DE\x05\x84C\x02\u05DE\u05DF\x070\x02\x02\u05DF\u05E0\x05\x84C\x02" +
		"\u05E0\xB7\x03\x02\x02\x02\u05E1\u05E5\x05\xBA^\x02\u05E2\u05E5\x05\xBC" +
		"_\x02\u05E3\u05E5\x05\xBE`\x02\u05E4\u05E1\x03\x02\x02\x02\u05E4\u05E2" +
		"\x03\x02\x02\x02\u05E4\u05E3\x03\x02\x02\x02\u05E5\xB9\x03\x02\x02\x02" +
		"\u05E6\u05E7\x05\x84C\x02\u05E7\u05E8\t\x03\x02\x02\u05E8\u05E9\x05\x84" +
		"C\x02\u05E9\xBB\x03\x02\x02\x02\u05EA\u05EB\x05\x84C\x02\u05EB\u05EC\t" +
		"\x03\x02\x02\u05EC\xBD\x03\x02\x02\x02\u05ED\u05EE\t\x03\x02\x02\u05EE" +
		"\u05EF\x05\x84C\x02\u05EF\xBF\x03\x02\x02\x02\u05F0\u05F1\x05\u0132\x9A" +
		"\x02\u05F1\u05F3\x05\u012E\x98\x02\u05F2\u05F4\x07^\x02\x02\u05F3\u05F2" +
		"\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4\u05F6\x03\x02\x02\x02" +
		"\u05F5\u05F0\x03\x02\x02\x02\u05F6\u05F9\x03\x02\x02\x02\u05F7\u05F5\x03" +
		"\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05FA\x03\x02\x02\x02\u05F9" +
		"\u05F7\x03\x02\x02\x02\u05FA\u05FB\x05\u0132\x9A\x02\u05FB\xC1\x03\x02" +
		"\x02\x02\u05FC\u0605\x05\u0132\x9A\x02\u05FD\u05FF\x05\u012E\x98\x02\u05FE" +
		"\u0600\x07^\x02\x02\u05FF\u05FE\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02" +
		"\x02\u0600\u0601\x03\x02\x02\x02\u0601\u0602\x05\u0132\x9A\x02\u0602\u0604" +
		"\x03\x02\x02\x02\u0603\u05FD\x03\x02\x02\x02\u0604\u0607\x03\x02\x02\x02" +
		"\u0605\u0603\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606\xC3\x03" +
		"\x02\x02\x02\u0607\u0605\x03\x02\x02\x02\u0608\u0609\x07(\x02\x02\u0609" +
		"\u060F\x05\xC6d\x02\u060A\u060B\x05\u0138\x9D\x02\u060B\u060C\x05\xC6" +
		"d\x02\u060C\u060E\x03\x02\x02\x02\u060D\u060A\x03\x02\x02\x02\u060E\u0611" +
		"\x03\x02\x02\x02\u060F\u060D\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02" +
		"\u0610\u0612\x03\x02\x02\x02\u0611\u060F\x03\x02\x02\x02\u0612\u0613\x07" +
		")\x02\x02\u0613\xC5\x03\x02\x02\x02\u0614\u0617\x05\u0132\x9A\x02\u0615" +
		"\u0616\x072\x02\x02\u0616\u0618\x05\u0132\x9A\x02\u0617\u0615\x03\x02" +
		"\x02\x02\u0617\u0618\x03\x02\x02\x02\u0618\xC7\x03\x02\x02\x02\u0619\u061A" +
		"\x07(\x02\x02\u061A\u0620\x05\xF8}\x02\u061B\u061C\x05\u0138\x9D\x02\u061C" +
		"\u061D\x05\xF8}\x02\u061D\u061F\x03\x02\x02\x02\u061E\u061B\x03\x02\x02" +
		"\x02\u061F\u0622\x03\x02\x02\x02\u0620\u061E\x03\x02\x02\x02\u0620\u0621" +
		"\x03\x02\x02\x02\u0621\u0623\x03\x02\x02\x02\u0622\u0620\x03\x02\x02\x02" +
		"\u0623\u0624\x07)\x02\x02\u0624\xC9\x03\x02\x02\x02\u0625\u0627\x05\u013A" +
		"\x9E\x02\u0626\u0628\x05\xCCg\x02\u0627\u0626\x03\x02\x02\x02\u0627\u0628" +
		"\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629\u062D\t\x02\x02\x02" +
		"\u062A\u062C\x07^\x02\x02\u062B\u062A\x03\x02\x02\x02\u062C\u062F\x03" +
		"\x02\x02\x02\u062D\u062B\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E" +
		"\u0630\x03\x02\x02\x02\u062F\u062D\x03\x02\x02\x02\u0630\u0631\x05\x8A" +
		"F\x02\u0631\u0632\x05\u013C\x9F\x02\u0632\u0647\x03\x02\x02\x02\u0633" +
		"\u0635\x05\u013A\x9E\x02\u0634\u0636\x05\xCCg\x02\u0635\u0634\x03\x02" +
		"\x02\x02\u0635\u0636\x03\x02\x02\x02\u0636\u0637\x03\x02\x02\x02\u0637" +
		"\u063B\t\x02\x02\x02\u0638\u063A\x07^\x02\x02\u0639\u0638\x03\x02\x02" +
		"\x02\u063A\u063D\x03\x02\x02\x02\u063B\u0639\x03\x02\x02\x02\u063B\u063C" +
		"\x03\x02\x02\x02\u063C\u0641\x03\x02\x02\x02\u063D\u063B\x03\x02\x02\x02" +
		"\u063E\u0640\x05P)\x02\u063F\u063E\x03\x02\x02\x02\u0640\u0643\x03\x02" +
		"\x02\x02\u0641\u063F\x03\x02\x02\x02\u0641\u0642\x03\x02\x02\x02\u0642" +
		"\u0644\x03\x02\x02\x02\u0643\u0641\x03\x02\x02\x02\u0644\u0645\x05\u013C" +
		"\x9F\x02\u0645\u0647\x03\x02\x02\x02\u0646\u0625\x03\x02\x02\x02\u0646" +
		"\u0633\x03\x02\x02\x02\u0647\xCB\x03\x02\x02\x02\u0648\u064E\x05\u0132" +
		"\x9A\x02\u0649\u064A\x05\u0138\x9D\x02\u064A\u064B\x05\u0132\x9A\x02\u064B" +
		"\u064D\x03\x02\x02\x02\u064C\u0649\x03\x02\x02\x02\u064D\u0650\x03\x02" +
		"\x02\x02\u064E\u064C\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F" +
		"\xCD\x03\x02\x02\x02\u0650\u064E\x03\x02\x02\x02\u0651\u0652\x05\xD0i" +
		"\x02\u0652\xCF\x03\x02\x02\x02\u0653\u0654\x05\u013A\x9E\x02\u0654\u065A" +
		"\x05\xD2j\x02\u0655\u0656\x05\u0138\x9D\x02\u0656\u0657\x05\xD2j\x02\u0657" +
		"\u0659\x03\x02\x02\x02\u0658\u0655\x03\x02\x02\x02\u0659\u065C\x03\x02" +
		"\x02\x02\u065A\u0658\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B" +
		"\u065D\x03\x02\x02\x02\u065C\u065A\x03\x02\x02\x02\u065D\u065E\x05\u013C" +
		"\x9F\x02\u065E\xD1\x03\x02\x02\x02\u065F\u0660\x05\xC2b\x02\u0660\u0661" +
		"\x07\'\x02\x02\u0661\u0662\x05\x84C\x02\u0662\xD3\x03\x02\x02\x02\u0663" +
		"\u0664\x05\u013E\xA0\x02\u0664\u0665\x05H%\x02\u0665\u0669\t\x02\x02\x02" +
		"\u0666\u0668\x07^\x02\x02\u0667\u0666\x03\x02\x02\x02\u0668\u066B\x03" +
		"\x02\x02\x02\u0669\u0667\x03\x02\x02\x02\u0669\u066A\x03\x02\x02\x02\u066A" +
		"\u066C\x03\x02\x02\x02\u066B\u0669\x03\x02\x02\x02\u066C\u066D\x05J&\x02" +
		"\u066D\u066E\x05\u0140\xA1\x02\u066E\u0672\x05\u013A\x9E\x02\u066F\u0671" +
		"\x05P)\x02\u0670\u066F\x03\x02\x02\x02\u0671\u0674\x03\x02\x02\x02\u0672" +
		"\u0670\x03\x02\x02\x02\u0672\u0673\x03\x02\x02\x02\u0673\u0675\x03\x02" +
		"\x02\x02\u0674\u0672\x03\x02\x02\x02\u0675\u0676\x05\u013C\x9F\x02\u0676" +
		"\xD5\x03\x02\x02\x02\u0677\u0678\x05\u013E\xA0\x02\u0678\u067E\x05\x84" +
		"C\x02\u0679\u067A\x05\u0138\x9D\x02\u067A\u067B\x05\x84C\x02\u067B\u067D" +
		"\x03\x02\x02\x02\u067C\u0679\x03\x02\x02\x02\u067D\u0680\x03\x02\x02\x02" +
		"\u067E\u067C\x03\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F\u0681\x03\x02\x02\x02\u0680" +
		"\u067E\x03\x02\x02\x02\u0681\u0682\x05\u0140\xA1\x02\u0682\xD7\x03\x02" +
		"\x02\x02\u0683\u0684\x05\u0128\x95\x02\u0684\u0685\x05\x84C\x02\u0685" +
		"\xD9\x03\x02\x02\x02\u0686\u0687\x05\u0130\x99\x02\u0687\u0688\x05\x84" +
		"C\x02\u0688\xDB\x03\x02\x02\x02\u0689\u068A\x05\u011C\x8F\x02\u068A\u068B" +
		"\x05\x84C\x02\u068B\xDD\x03\x02\x02\x02\u068C\u068E\x05\xE4s\x02\u068D" +
		"\u068F\x07^\x02\x02\u068E\u068D\x03\x02\x02\x02\u068E\u068F\x03\x02\x02" +
		"\x02\u068F\u0690\x03\x02\x02\x02\u0690\u0691\x05\x84C\x02\u0691\u0693" +
		"\x07#\x02\x02\u0692\u0694\x07^\x02\x02\u0693\u0692\x03\x02\x02\x02\u0693" +
		"\u0694\x03\x02\x02\x02\u0694\u0696\x03\x02\x02\x02\u0695\u0697\x05\xE0" +
		"q\x02\u0696\u0695\x03\x02\x02\x02\u0697\u0698\x03\x02\x02\x02\u0698\u0696" +
		"\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02\u0699\u069A\x03\x02\x02\x02" +
		"\u069A\u069C\t\x04\x02\x02\u069B\u069D\x07^\x02\x02\u069C\u069B\x03\x02" +
		"\x02\x02\u069C\u069D\x03\x02\x02\x02\u069D\u069E\x03\x02\x02\x02\u069E" +
		"\u069F\x05\x84C\x02\u069F\xDF\x03\x02\x02\x02\u06A0\u06A2\x05\xE2r\x02" +
		"\u06A1\u06A3\x05\x84C\x02\u06A2\u06A1\x03\x02\x02\x02\u06A2\u06A3\x03" +
		"\x02\x02\x02\u06A3\u06A4\x03\x02\x02\x02\u06A4\u06A6\x07#\x02\x02\u06A5" +
		"\u06A7\x07^\x02\x02\u06A6\u06A5\x03\x02\x02\x02\u06A6\u06A7\x03\x02\x02" +
		"\x02\u06A7\xE1\x03\x02\x02\x02\u06A8\u06AB\x05\xE4s\x02\u06A9\u06AB\x05" +
		"\xE6t\x02\u06AA\u06A8\x03\x02\x02\x02\u06AA\u06A9\x03\x02\x02\x02\u06AB" +
		"\xE3\x03\x02\x02\x02\u06AC\u06AD\x07\x03\x02\x02\u06AD\xE5\x03\x02\x02" +
		"\x02\u06AE\u06AF\t\x05\x02\x02\u06AF\xE7\x03\x02\x02\x02\u06B0\u06B2\x07" +
		"V\x02\x02\u06B1\u06B3\x05\xEAv\x02\u06B2\u06B1\x03\x02\x02\x02\u06B3\u06B4" +
		"\x03\x02\x02\x02\u06B4\u06B2\x03\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02" +
		"\u06B5\xE9\x03\x02\x02\x02\u06B6\u06B7\x05\x84C\x02\u06B7\u06B8\x07V\x02" +
		"\x02\u06B8\xEB\x03\x02\x02\x02\u06B9\u06C2\x05\xEEx\x02\u06BA\u06C2\x05" +
		"\xF0y\x02\u06BB\u06C2\x07V\x02\x02\u06BC\u06C2\x07W\x02\x02\u06BD\u06C2" +
		"\x07R\x02\x02\u06BE\u06C2\x07S\x02\x02\u06BF\u06C2\x05\u0110\x89\x02\u06C0" +
		"\u06C2\x07T\x02\x02\u06C1\u06B9\x03\x02\x02\x02\u06C1\u06BA\x03\x02\x02" +
		"\x02\u06C1\u06BB\x03\x02\x02\x02\u06C1\u06BC\x03\x02\x02\x02\u06C1\u06BD" +
		"\x03\x02\x02\x02\u06C1\u06BE\x03\x02\x02\x02\u06C1\u06BF\x03\x02\x02\x02" +
		"\u06C1\u06C0\x03\x02\x02\x02\u06C2\xED\x03\x02\x02\x02\u06C3\u06C4\x05" +
		"\xF0y\x02\u06C4\u06C5\x05\u012E\x98\x02\u06C5\u06C6\x05\xF0y\x02\u06C6" +
		"\xEF\x03\x02\x02\x02\u06C7\u06C8\x07U\x02\x02\u06C8\xF1\x03\x02\x02\x02" +
		"\u06C9\u06D4\x05\u010A\x86\x02\u06CA\u06D4\x05\xFA~\x02\u06CB\u06D4\x05" +
		"\xFC\x7F\x02\u06CC\u06D4\x05\xFE\x80\x02\u06CD\u06D4\x05\u0100\x81\x02" +
		"\u06CE\u06D4\x05\u0102\x82\x02\u06CF\u06D4\x05\u0104\x83\x02\u06D0\u06D4" +
		"\x05\u010E\x88\x02\u06D1\u06D4\x05\u0106\x84\x02\u06D2\u06D4\x05\u0108" +
		"\x85\x02\u06D3\u06C9\x03\x02\x02\x02\u06D3\u06CA\x03\x02\x02\x02\u06D3" +
		"\u06CB\x03\x02\x02\x02\u06D3\u06CC\x03\x02\x02\x02\u06D3\u06CD\x03\x02" +
		"\x02\x02\u06D3\u06CE\x03\x02\x02\x02\u06D3\u06CF\x03\x02\x02\x02\u06D3" +
		"\u06D0\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D3\u06D2\x03\x02" +
		"\x02\x02\u06D4\xF3\x03\x02\x02\x02\u06D5\u06D8\x075\x02\x02\u06D6\u06D9" +
		"\x05\xF2z\x02\u06D7\u06D9\x05\xF6|\x02\u06D8\u06D6\x03\x02\x02\x02\u06D8" +
		"\u06D7\x03\x02\x02\x02\u06D9\xF5\x03\x02\x02\x02\u06DA\u06DB\x073\x02" +
		"\x02\u06DB\u06DC\x05\xF2z\x02\u06DC\xF7\x03\x02\x02\x02\u06DD\u06E1\x05" +
		"\xF2z\x02\u06DE\u06E1\x05\xF6|\x02\u06DF\u06E1\x05\xF4{\x02\u06E0\u06DD" +
		"\x03\x02\x02\x02\u06E0\u06DE\x03\x02\x02\x02\u06E0\u06DF\x03\x02\x02\x02" +
		"\u06E1\xF9\x03\x02\x02\x02\u06E2\u06E3\x05\u013E\xA0\x02\u06E3\u06E7\x05" +
		"\xF8}\x02\u06E4\u06E5\x05\u0138\x9D\x02\u06E5\u06E6\x05\xF8}\x02\u06E6" +
		"\u06E8\x03\x02\x02\x02\u06E7\u06E4\x03\x02\x02\x02\u06E8\u06E9\x03\x02" +
		"\x02\x02\u06E9\u06E7\x03\x02\x02\x02\u06E9\u06EA\x03\x02\x02\x02\u06EA" +
		"\u06EB\x03\x02\x02\x02\u06EB\u06EC\x05\u0140\xA1\x02\u06EC\xFB\x03\x02" +
		"\x02\x02\u06ED\u06EE\x07/\x02\x02\u06EE\u06EF\x072\x02\x02\u06EF\u06F0" +
		"\x070\x02\x02\u06F0\u06F1\x05\xF8}\x02\u06F1\xFD\x03\x02\x02\x02\u06F2" +
		"\u06F3\x07/\x02\x02\u06F3\u06F4\x070\x02\x02\u06F4\u06F5\x05\xF8}\x02" +
		"\u06F5\xFF\x03\x02\x02\x02\u06F6\u06F7\x07/\x02\x02\u06F7\u06F8\x05\xF8" +
		"}\x02\u06F8\u06F9\x070\x02\x02\u06F9\u0101\x03\x02\x02\x02\u06FA\u06FB" +
		"\x07/\x02\x02\u06FB\u06FC\x05\xF8}\x02\u06FC\u06FD\x070\x02\x02\u06FD" +
		"\u06FE\x05\xF8}\x02\u06FE\u0103\x03\x02\x02\x02\u06FF\u0700\x07/\x02\x02" +
		"\u0700\u0701\x07#\x02\x02\u0701\u0702\x070\x02\x02\u0702\u0703\x05\xF8" +
		"}\x02\u0703\u0105\x03\x02\x02\x02\u0704\u0706\x05\xC0a\x02\u0705\u0707" +
		"\x05\xC8e\x02\u0706\u0705\x03\x02\x02\x02\u0706\u0707\x03\x02\x02\x02" +
		"\u0707\u0107\x03\x02\x02\x02\u0708\u0709\x05\u013E\xA0\x02\u0709\u070A" +
		"\x05\u010C\x87\x02\u070A\u070E\t\x02\x02\x02\u070B\u070D\x07^\x02\x02" +
		"\u070C\u070B\x03\x02\x02\x02\u070D\u0710\x03\x02\x02\x02\u070E\u070C\x03" +
		"\x02\x02\x02\u070E\u070F\x03\x02\x02\x02\u070F\u0711\x03\x02\x02\x02\u0710" +
		"\u070E\x03\x02\x02\x02\u0711\u0712\x05\u010C\x87\x02\u0712\u0713\x05\u0140" +
		"\xA1\x02\u0713\u0109\x03\x02\x02\x02\u0714\u0715\x07P\x02\x02\u0715\u010B" +
		"\x03\x02\x02\x02\u0716\u0718\x05\xF8}\x02\u0717\u0716\x03\x02\x02\x02" +
		"\u0717\u0718\x03\x02\x02\x02\u0718\u071E\x03\x02\x02\x02\u0719\u071A\x05" +
		"\u0138\x9D\x02\u071A\u071B\x05\xF8}\x02\u071B\u071D\x03\x02\x02\x02\u071C" +
		"\u0719\x03\x02\x02\x02\u071D\u0720\x03\x02\x02\x02\u071E\u071C\x03\x02" +
		"\x02\x02\u071E\u071F\x03\x02\x02\x02\u071F\u010D\x03\x02\x02\x02\u0720" +
		"\u071E\x03\x02\x02\x02\u0721\u0732\x07@\x02\x02\u0722\u0732\x07A\x02\x02" +
		"\u0723\u0732\x07B\x02\x02\u0724\u0732\x07C\x02\x02\u0725\u0732\x07D\x02" +
		"\x02\u0726\u0732\x07E\x02\x02\u0727\u0732\x07F\x02\x02\u0728\u0732\x07" +
		"G\x02\x02\u0729\u0732\x07H\x02\x02\u072A\u0732\x07I\x02\x02\u072B\u0732" +
		"\x07J\x02\x02\u072C\u0732\x07K\x02\x02\u072D\u0732\x07L\x02\x02\u072E" +
		"\u0732\x07M\x02\x02\u072F\u0732\x07N\x02\x02\u0730\u0732\x07O\x02\x02" +
		"\u0731\u0721\x03\x02\x02\x02\u0731\u0722\x03\x02\x02\x02\u0731\u0723\x03" +
		"\x02\x02\x02\u0731\u0724\x03\x02\x02\x02\u0731\u0725\x03\x02\x02\x02\u0731" +
		"\u0726\x03\x02\x02\x02\u0731\u0727\x03\x02\x02\x02\u0731\u0728\x03\x02" +
		"\x02\x02\u0731\u0729\x03\x02\x02\x02\u0731\u072A\x03\x02\x02\x02\u0731" +
		"\u072B\x03\x02\x02\x02\u0731\u072C\x03\x02\x02\x02\u0731\u072D\x03\x02" +
		"\x02\x02\u0731\u072E\x03\x02\x02\x02\u0731\u072F\x03\x02\x02\x02\u0731" +
		"\u0730\x03\x02\x02\x02\u0732\u010F\x03\x02\x02\x02\u0733\u0734\x07Q\x02" +
		"\x02\u0734\u0111\x03\x02\x02\x02\u0735\u0738\x07R\x02\x02\u0736\u0738" +
		"\x07S\x02\x02\u0737\u0735\x03\x02\x02\x02\u0737\u0736\x03\x02\x02\x02" +
		"\u0738\u0113\x03\x02\x02\x02\u0739\u073A\t\x06\x02\x02\u073A\u073B\x07" +
		"2\x02\x02\u073B\u0115\x03\x02\x02\x02\u073C\u0742\x05\u0118\x8D\x02\u073D" +
		"\u0742\x05\u011A\x8E\x02\u073E\u0742\x05\u011E\x90\x02\u073F\u0742\x05" +
		"\u0120\x91\x02\u0740\u0742\x05\u0122\x92\x02\u0741\u073C\x03\x02\x02\x02" +
		"\u0741\u073D\x03\x02\x02\x02\u0741\u073E\x03\x02\x02\x02\u0741\u073F\x03" +
		"\x02\x02\x02\u0741\u0740\x03\x02\x02\x02\u0742\u0744\x03\x02\x02\x02\u0743" +
		"\u0745\x07^\x02\x02\u0744\u0743\x03\x02\x02\x02\u0744\u0745\x03\x02\x02" +
		"\x02\u0745\u0117\x03\x02\x02\x02\u0746\u0747\x07=\x02\x02\u0747\u0748" +
		"\x07=\x02\x02\u0748\u0119\x03\x02\x02\x02\u0749\u074A\x07>\x02\x02\u074A" +
		"\u074B\x07>\x02\x02\u074B\u011B\x03\x02\x02\x02\u074C\u074D\x076\x02\x02" +
		"\u074D\u074E\x076\x02\x02\u074E\u011D\x03\x02\x02\x02\u074F\u0750\x07" +
		"?\x02\x02\u0750\u0751\x07?\x02\x02\u0751\u011F\x03\x02\x02\x02\u0752\u0753" +
		"\x07(\x02\x02\u0753\u0754\x07(\x02\x02\u0754\u0121\x03\x02\x02\x02\u0755" +
		"\u0756\x07)\x02\x02\u0756\u0757\x07)\x02\x02\u0757\u0123\x03\x02\x02\x02" +
		"\u0758\u075A\t\x07\x02\x02\u0759\u075B\x07^\x02\x02\u075A\u0759\x03\x02" +
		"\x02\x02\u075A\u075B\x03\x02\x02\x02\u075B\u0125\x03\x02\x02\x02\u075C" +
		"\u075E\t\b\x02\x02\u075D\u075F\x07^\x02\x02\u075E\u075D\x03\x02\x02\x02" +
		"\u075E\u075F\x03\x02\x02\x02\u075F\u0127\x03\x02\x02\x02\u0760\u0762\t" +
		"\t\x02\x02\u0761\u0763\x07^\x02\x02\u0762\u0761\x03\x02\x02\x02\u0762" +
		"\u0763\x03\x02\x02\x02\u0763\u0129\x03\x02\x02\x02\u0764\u0766\t\n\x02" +
		"\x02\u0765\u0767\x07^\x02\x02\u0766\u0765\x03\x02\x02\x02\u0766\u0767" +
		"\x03\x02\x02\x02\u0767\u012B\x03\x02\x02\x02\u0768\u076A\t\v\x02\x02\u0769" +
		"\u076B\x07^\x02\x02\u076A\u0769\x03\x02\x02\x02\u076A\u076B\x03\x02\x02" +
		"\x02\u076B\u012D\x03\x02\x02\x02\u076C\u076E\x07 \x02\x02\u076D\u076F" +
		"\x07^\x02\x02\u076E\u076D\x03\x02\x02\x02\u076E\u076F\x03\x02\x02\x02" +
		"\u076F\u012F\x03\x02\x02\x02\u0770\u0771\x076\x02\x02\u0771\u0131\x03" +
		"\x02\x02\x02\u0772\u0773\x05\u0134\x9B\x02\u0773\u0133\x03\x02\x02\x02" +
		"\u0774\u0779\t\f\x02\x02\u0775\u0779\x05\u010E\x88\x02\u0776\u0779\x05" +
		"\u010A\x86\x02\u0777\u0779\x05\xE2r\x02\u0778\u0774\x03\x02\x02\x02\u0778" +
		"\u0775\x03\x02\x02\x02\u0778\u0776\x03\x02\x02\x02\u0778\u0777\x03\x02" +
		"\x02\x02\u0779\u0135\x03\x02\x02\x02\u077A\u077B\t\r\x02\x02\u077B\u0137" +
		"\x03\x02\x02\x02\u077C\u0780\x07!\x02\x02\u077D\u077F\x07^\x02\x02\u077E" +
		"\u077D\x03\x02\x02\x02\u077F\u0782\x03\x02\x02\x02\u0780\u077E\x03\x02" +
		"\x02\x02\u0780\u0781\x03\x02\x02\x02\u0781\u0139\x03\x02\x02\x02\u0782" +
		"\u0780\x03\x02\x02\x02\u0783\u0787\x07-\x02\x02\u0784\u0786\x07^\x02\x02" +
		"\u0785\u0784\x03\x02\x02\x02\u0786\u0789\x03\x02\x02\x02\u0787\u0785\x03" +
		"\x02\x02\x02\u0787\u0788\x03\x02\x02\x02\u0788\u013B\x03\x02\x02\x02\u0789" +
		"\u0787\x03\x02\x02\x02\u078A\u078C\x07^\x02\x02\u078B\u078A\x03\x02\x02" +
		"\x02\u078C\u078F\x03\x02\x02\x02\u078D\u078B\x03\x02\x02\x02\u078D\u078E" +
		"\x03\x02\x02\x02\u078E\u0790\x03\x02\x02\x02\u078F\u078D\x03\x02\x02\x02" +
		"\u0790\u0791\x07.\x02\x02\u0791\u013D\x03\x02\x02\x02\u0792\u0793\x07" +
		"+\x02\x02\u0793\u013F\x03\x02\x02\x02\u0794\u0795\x07,\x02\x02\u0795\u0141" +
		"\x03\x02\x02\x02\u0796\u079A\x07/\x02\x02\u0797\u0799\x07^\x02\x02\u0798" +
		"\u0797\x03\x02\x02\x02\u0799\u079C\x03\x02\x02\x02\u079A\u0798\x03\x02" +
		"\x02\x02\u079A\u079B\x03\x02\x02\x02\u079B\u0143\x03\x02\x02\x02\u079C" +
		"\u079A\x03\x02\x02\x02\u079D\u079F\x07^\x02\x02\u079E\u079D\x03\x02\x02" +
		"\x02\u079F\u07A2\x03\x02\x02\x02\u07A0\u079E\x03\x02\x02\x02\u07A0\u07A1" +
		"\x03\x02\x02\x02\u07A1\u07A3\x03\x02\x02\x02\u07A2\u07A0\x03\x02\x02\x02" +
		"\u07A3\u07A4\x070\x02\x02\u07A4\u0145\x03\x02\x02\x02\xC9\u0149\u014E" +
		"\u0152\u0158\u015E\u0165\u0167\u016E\u0173\u0175\u0186\u0193\u019A\u01A2" +
		"\u01AB\u01AE\u01B3\u01BC\u01BE\u01C3\u01C8\u01D1\u01D5\u01DA\u01E2\u01E8" +
		"\u01EC\u01F4\u01FD\u0204\u0208\u020F\u0219\u0220\u022A\u022E\u0234\u023A" +
		"\u0243\u0245\u024E\u0254\u0264\u0269\u0270\u0279\u027C\u0280\u0288\u0291" +
		"\u0298\u029D\u02A6\u02AA\u02B6\u02BD\u02C6\u02C9\u02CC\u02D0\u02D8\u02E1" +
		"\u02E8\u02EB\u02F0\u02F9\u02FD\u0302\u0306\u030D\u0317\u031A\u0325\u032A" +
		"\u0331\u0335\u033D\u0346\u034E\u0357\u035F\u0364\u036B\u036F\u0376\u037E" +
		"\u0385\u039A\u03A1\u03AB\u03B2\u03BA\u03BE\u03C4\u03CE\u03D3\u03DA\u03E5" +
		"\u03EF\u03FB\u0407\u040E\u041A\u0425\u0438\u043F\u044A\u0451\u0455\u045C" +
		"\u0465\u046B\u0475\u047D\u0490\u0498\u04B4\u04BC\u04D0\u04FA\u04FC\u0501" +
		"\u0505\u050A\u0513\u0516\u0520\u0525\u052B\u0536\u0541\u0546\u054B\u0551" +
		"\u055A\u0564\u056D\u0570\u0573\u057C\u058B\u0598\u05A5\u05AE\u05BB\u05CB" +
		"\u05D7\u05E4\u05F3\u05F7\u05FF\u0605\u060F\u0617\u0620\u0627\u062D\u0635" +
		"\u063B\u0641\u0646\u064E\u065A\u0669\u0672\u067E\u068E\u0693\u0698\u069C" +
		"\u06A2\u06A6\u06AA\u06B4\u06C1\u06D3\u06D8\u06E0\u06E9\u0706\u070E\u0717" +
		"\u071E\u0731\u0737\u0741\u0744\u075A\u075E\u0762\u0766\u076A\u076E\u0778" +
		"\u0780\u0787\u078D\u079A\u07A0";
	public static readonly _serializedATN: string = Utils.join(
		[
			LiteParser._serializedATNSegment0,
			LiteParser._serializedATNSegment1,
			LiteParser._serializedATNSegment2,
			LiteParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LiteParser.__ATN) {
			LiteParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LiteParser._serializedATN));
		}

		return LiteParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_program; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public exportStatement(): ExportStatementContext {
		return this.getRuleContext(0, ExportStatementContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public namespaceSupportStatement(): NamespaceSupportStatementContext[];
	public namespaceSupportStatement(i: number): NamespaceSupportStatementContext;
	public namespaceSupportStatement(i?: number): NamespaceSupportStatementContext | NamespaceSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamespaceSupportStatementContext);
		} else {
			return this.getRuleContext(i, NamespaceSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	public TextLiteral(): TerminalNode { return this.getToken(LiteParser.TextLiteral, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public importStatement(): ImportStatementContext[];
	public importStatement(i: number): ImportStatementContext;
	public importStatement(i?: number): ImportStatementContext | ImportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportStatementContext);
		} else {
			return this.getRuleContext(i, ImportStatementContext);
		}
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_exportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitExportStatement) {
			return visitor.visitExportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public TextLiteral(): TerminalNode { return this.getToken(LiteParser.TextLiteral, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_importStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceSupportStatementContext extends ParserRuleContext {
	public namespaceVariableStatement(): NamespaceVariableStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceVariableStatementContext);
	}
	public namespaceControlStatement(): NamespaceControlStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceControlStatementContext);
	}
	public namespaceFunctionStatement(): NamespaceFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceFunctionStatementContext);
	}
	public namespaceConstantStatement(): NamespaceConstantStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceConstantStatementContext);
	}
	public packageStatement(): PackageStatementContext | undefined {
		return this.tryGetRuleContext(0, PackageStatementContext);
	}
	public protocolStatement(): ProtocolStatementContext | undefined {
		return this.tryGetRuleContext(0, ProtocolStatementContext);
	}
	public implementStatement(): ImplementStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementStatementContext);
	}
	public overrideStatement(): OverrideStatementContext | undefined {
		return this.tryGetRuleContext(0, OverrideStatementContext);
	}
	public packageNewStatement(): PackageNewStatementContext | undefined {
		return this.tryGetRuleContext(0, PackageNewStatementContext);
	}
	public enumStatement(): EnumStatementContext | undefined {
		return this.tryGetRuleContext(0, EnumStatementContext);
	}
	public typeAliasStatement(): TypeAliasStatementContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasStatementContext);
	}
	public typeRedefineStatement(): TypeRedefineStatementContext | undefined {
		return this.tryGetRuleContext(0, TypeRedefineStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceSupportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceSupportStatement) {
			return visitor.visitNamespaceSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Equal_Arrow(): TerminalNode { return this.getToken(LiteParser.Equal_Arrow, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeAliasStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeAliasStatement) {
			return visitor.visitTypeAliasStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeRedefineStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeRedefineStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeRedefineStatement) {
			return visitor.visitTypeRedefineStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public enumSupportStatement(): EnumSupportStatementContext[];
	public enumSupportStatement(i: number): EnumSupportStatementContext;
	public enumSupportStatement(i?: number): EnumSupportStatementContext | EnumSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumSupportStatementContext);
		} else {
			return this.getRuleContext(i, EnumSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_enumStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitEnumStatement) {
			return visitor.visitEnumStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumSupportStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public integerExpr(): IntegerExprContext | undefined {
		return this.tryGetRuleContext(0, IntegerExprContext);
	}
	public add(): AddContext | undefined {
		return this.tryGetRuleContext(0, AddContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_enumSupportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitEnumSupportStatement) {
			return visitor.visitEnumSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceVariableStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon_Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceVariableStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceVariableStatement) {
			return visitor.visitNamespaceVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceControlStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext | undefined {
		return this.tryGetRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext | undefined {
		return this.tryGetRuleContext(0, Right_braceContext);
	}
	public packageControlSubStatement(): PackageControlSubStatementContext[];
	public packageControlSubStatement(i: number): PackageControlSubStatementContext;
	public packageControlSubStatement(i?: number): PackageControlSubStatementContext | PackageControlSubStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageControlSubStatementContext);
		} else {
			return this.getRuleContext(i, PackageControlSubStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceControlStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceControlStatement) {
			return visitor.visitNamespaceControlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceConstantStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Colon);
		} else {
			return this.getToken(LiteParser.Colon, i);
		}
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public Colon_Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon_Colon, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceConstantStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceConstantStatement) {
			return visitor.visitNamespaceConstantStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceFunctionStatementContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceFunctionStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceFunctionStatement) {
			return visitor.visitNamespaceFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public packageSupportStatement(): PackageSupportStatementContext[];
	public packageSupportStatement(i: number): PackageSupportStatementContext;
	public packageSupportStatement(i?: number): PackageSupportStatementContext | PackageSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageSupportStatementContext);
		} else {
			return this.getRuleContext(i, PackageSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageStatement) {
			return visitor.visitPackageStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageSupportStatementContext extends ParserRuleContext {
	public includeStatement(): IncludeStatementContext | undefined {
		return this.tryGetRuleContext(0, IncludeStatementContext);
	}
	public packageVariableStatement(): PackageVariableStatementContext | undefined {
		return this.tryGetRuleContext(0, PackageVariableStatementContext);
	}
	public packageEventStatement(): PackageEventStatementContext | undefined {
		return this.tryGetRuleContext(0, PackageEventStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageSupportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageSupportStatement) {
			return visitor.visitPackageSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeStatementContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_includeStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIncludeStatement) {
			return visitor.visitIncludeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNewStatementContext extends ParserRuleContext {
	public parameterClauseSelf(): ParameterClauseSelfContext {
		return this.getRuleContext(0, ParameterClauseSelfContext);
	}
	public Less(): TerminalNode { return this.getToken(LiteParser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(LiteParser.Greater, 0); }
	public left_paren(): Left_parenContext[];
	public left_paren(i: number): Left_parenContext;
	public left_paren(i?: number): Left_parenContext | Left_parenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Left_parenContext);
		} else {
			return this.getRuleContext(i, Left_parenContext);
		}
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public right_paren(): Right_parenContext[];
	public right_paren(i: number): Right_parenContext;
	public right_paren(i?: number): Right_parenContext | Right_parenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Right_parenContext);
		} else {
			return this.getRuleContext(i, Right_parenContext);
		}
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageNewStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageNewStatement) {
			return visitor.visitPackageNewStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageVariableStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon_Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageVariableStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageVariableStatement) {
			return visitor.visitPackageVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageControlSubStatementContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public left_paren(): Left_parenContext | undefined {
		return this.tryGetRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext | undefined {
		return this.tryGetRuleContext(0, Right_parenContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageControlSubStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageControlSubStatement) {
			return visitor.visitPackageControlSubStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageEventStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageEventStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageEventStatement) {
			return visitor.visitPackageEventStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementStatementContext extends ParserRuleContext {
	public parameterClauseSelf(): ParameterClauseSelfContext {
		return this.getRuleContext(0, ParameterClauseSelfContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public implementSupportStatement(): ImplementSupportStatementContext[];
	public implementSupportStatement(i: number): ImplementSupportStatementContext;
	public implementSupportStatement(i?: number): ImplementSupportStatementContext | ImplementSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImplementSupportStatementContext);
		} else {
			return this.getRuleContext(i, ImplementSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_implementStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementStatement) {
			return visitor.visitImplementStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementSupportStatementContext extends ParserRuleContext {
	public implementFunctionStatement(): ImplementFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementFunctionStatementContext);
	}
	public implementControlStatement(): ImplementControlStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementControlStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_implementSupportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementSupportStatement) {
			return visitor.visitImplementSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementFunctionStatementContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_implementFunctionStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementFunctionStatement) {
			return visitor.visitImplementFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementControlStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext | undefined {
		return this.tryGetRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext | undefined {
		return this.tryGetRuleContext(0, Right_braceContext);
	}
	public packageControlSubStatement(): PackageControlSubStatementContext[];
	public packageControlSubStatement(i: number): PackageControlSubStatementContext;
	public packageControlSubStatement(i?: number): PackageControlSubStatementContext | PackageControlSubStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageControlSubStatementContext);
		} else {
			return this.getRuleContext(i, PackageControlSubStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_implementControlStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementControlStatement) {
			return visitor.visitImplementControlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideStatementContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public parameterClauseSelf(): ParameterClauseSelfContext {
		return this.getRuleContext(0, ParameterClauseSelfContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public overrideSupportStatement(): OverrideSupportStatementContext[];
	public overrideSupportStatement(i: number): OverrideSupportStatementContext;
	public overrideSupportStatement(i?: number): OverrideSupportStatementContext | OverrideSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSupportStatementContext);
		} else {
			return this.getRuleContext(i, OverrideSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_overrideStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitOverrideStatement) {
			return visitor.visitOverrideStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideSupportStatementContext extends ParserRuleContext {
	public overrideFunctionStatement(): OverrideFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, OverrideFunctionStatementContext);
	}
	public overrideControlStatement(): OverrideControlStatementContext | undefined {
		return this.tryGetRuleContext(0, OverrideControlStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_overrideSupportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitOverrideSupportStatement) {
			return visitor.visitOverrideSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideFunctionStatementContext extends ParserRuleContext {
	public _n: Token;
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_overrideFunctionStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitOverrideFunctionStatement) {
			return visitor.visitOverrideFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideControlStatementContext extends ParserRuleContext {
	public _n: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext | undefined {
		return this.tryGetRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext | undefined {
		return this.tryGetRuleContext(0, Right_braceContext);
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	public packageControlSubStatement(): PackageControlSubStatementContext[];
	public packageControlSubStatement(i: number): PackageControlSubStatementContext;
	public packageControlSubStatement(i?: number): PackageControlSubStatementContext | PackageControlSubStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageControlSubStatementContext);
		} else {
			return this.getRuleContext(i, PackageControlSubStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_overrideControlStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitOverrideControlStatement) {
			return visitor.visitOverrideControlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public protocolSupportStatement(): ProtocolSupportStatementContext[];
	public protocolSupportStatement(i: number): ProtocolSupportStatementContext;
	public protocolSupportStatement(i?: number): ProtocolSupportStatementContext | ProtocolSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProtocolSupportStatementContext);
		} else {
			return this.getRuleContext(i, ProtocolSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolStatement) {
			return visitor.visitProtocolStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolSupportStatementContext extends ParserRuleContext {
	public includeStatement(): IncludeStatementContext | undefined {
		return this.tryGetRuleContext(0, IncludeStatementContext);
	}
	public protocolFunctionStatement(): ProtocolFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, ProtocolFunctionStatementContext);
	}
	public protocolControlStatement(): ProtocolControlStatementContext | undefined {
		return this.tryGetRuleContext(0, ProtocolControlStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolSupportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolSupportStatement) {
			return visitor.visitProtocolSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolControlStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public left_brace(): Left_braceContext | undefined {
		return this.tryGetRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext | undefined {
		return this.tryGetRuleContext(0, Right_braceContext);
	}
	public protocolControlSubStatement(): ProtocolControlSubStatementContext[];
	public protocolControlSubStatement(i: number): ProtocolControlSubStatementContext;
	public protocolControlSubStatement(i?: number): ProtocolControlSubStatementContext | ProtocolControlSubStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProtocolControlSubStatementContext);
		} else {
			return this.getRuleContext(i, ProtocolControlSubStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolControlStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolControlStatement) {
			return visitor.visitProtocolControlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolControlSubStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolControlSubStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolControlSubStatement) {
			return visitor.visitProtocolControlSubStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolFunctionStatementContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolFunctionStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolFunctionStatement) {
			return visitor.visitProtocolFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStatementContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_functionStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitFunctionStatement) {
			return visitor.visitFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_returnStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterClauseInContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_parameterClauseIn; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitParameterClauseIn) {
			return visitor.visitParameterClauseIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterClauseOutContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_parameterClauseOut; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitParameterClauseOut) {
			return visitor.visitParameterClauseOut(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterClauseSelfContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_parameterClauseSelf; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitParameterClauseSelf) {
			return visitor.visitParameterClauseSelf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_parameter; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSupportStatementContext extends ParserRuleContext {
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public judgeCaseStatement(): JudgeCaseStatementContext | undefined {
		return this.tryGetRuleContext(0, JudgeCaseStatementContext);
	}
	public judgeStatement(): JudgeStatementContext | undefined {
		return this.tryGetRuleContext(0, JudgeStatementContext);
	}
	public loopStatement(): LoopStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopStatementContext);
	}
	public loopEachStatement(): LoopEachStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopEachStatementContext);
	}
	public loopCaseStatement(): LoopCaseStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopCaseStatementContext);
	}
	public loopInfiniteStatement(): LoopInfiniteStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopInfiniteStatementContext);
	}
	public loopJumpStatement(): LoopJumpStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopJumpStatementContext);
	}
	public loopContinueStatement(): LoopContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopContinueStatementContext);
	}
	public usingStatement(): UsingStatementContext | undefined {
		return this.tryGetRuleContext(0, UsingStatementContext);
	}
	public checkStatement(): CheckStatementContext | undefined {
		return this.tryGetRuleContext(0, CheckStatementContext);
	}
	public reportStatement(): ReportStatementContext | undefined {
		return this.tryGetRuleContext(0, ReportStatementContext);
	}
	public functionStatement(): FunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, FunctionStatementContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public variableDeclaredStatement(): VariableDeclaredStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaredStatementContext);
	}
	public channelAssignStatement(): ChannelAssignStatementContext | undefined {
		return this.tryGetRuleContext(0, ChannelAssignStatementContext);
	}
	public assignStatement(): AssignStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_functionSupportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitFunctionSupportStatement) {
			return visitor.visitFunctionSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeCaseStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public caseStatement(): CaseStatementContext[];
	public caseStatement(i: number): CaseStatementContext;
	public caseStatement(i?: number): CaseStatementContext | CaseStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseStatementContext);
		} else {
			return this.getRuleContext(i, CaseStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeCaseStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeCaseStatement) {
			return visitor.visitJudgeCaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseStatementContext extends ParserRuleContext {
	public caseExprStatement(): CaseExprStatementContext[];
	public caseExprStatement(i: number): CaseExprStatementContext;
	public caseExprStatement(i?: number): CaseExprStatementContext | CaseExprStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseExprStatementContext);
		} else {
			return this.getRuleContext(i, CaseExprStatementContext);
		}
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_caseStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCaseStatement) {
			return visitor.visitCaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseExprStatementContext extends ParserRuleContext {
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_caseExprStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCaseExprStatement) {
			return visitor.visitCaseExprStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeStatementContext extends ParserRuleContext {
	public judgeIfStatement(): JudgeIfStatementContext {
		return this.getRuleContext(0, JudgeIfStatementContext);
	}
	public judgeElseStatement(): JudgeElseStatementContext | undefined {
		return this.tryGetRuleContext(0, JudgeElseStatementContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public judgeElseIfStatement(): JudgeElseIfStatementContext[];
	public judgeElseIfStatement(i: number): JudgeElseIfStatementContext;
	public judgeElseIfStatement(i?: number): JudgeElseIfStatementContext | JudgeElseIfStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JudgeElseIfStatementContext);
		} else {
			return this.getRuleContext(i, JudgeElseIfStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeStatement) {
			return visitor.visitJudgeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeElseStatementContext extends ParserRuleContext {
	public Discard(): TerminalNode { return this.getToken(LiteParser.Discard, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeElseStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeElseStatement) {
			return visitor.visitJudgeElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeIfStatementContext extends ParserRuleContext {
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeIfStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeIfStatement) {
			return visitor.visitJudgeIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeElseIfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeElseIfStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeElseIfStatement) {
			return visitor.visitJudgeElseIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	public iteratorStatement(): IteratorStatementContext {
		return this.getRuleContext(0, IteratorStatementContext);
	}
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopStatement) {
			return visitor.visitLoopStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopEachStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Left_Brack(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Left_Brack, 0); }
	public Right_Brack(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Brack, 0); }
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopEachStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopEachStatement) {
			return visitor.visitLoopEachStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopCaseStatementContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopCaseStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopCaseStatement) {
			return visitor.visitLoopCaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopInfiniteStatementContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopInfiniteStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopInfiniteStatement) {
			return visitor.visitLoopInfiniteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopJumpStatementContext extends ParserRuleContext {
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopJumpStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopJumpStatement) {
			return visitor.visitLoopJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContinueStatementContext extends ParserRuleContext {
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopContinueStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopContinueStatement) {
			return visitor.visitLoopContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckStatementContext extends ParserRuleContext {
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public checkFinallyStatment(): CheckFinallyStatmentContext | undefined {
		return this.tryGetRuleContext(0, CheckFinallyStatmentContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public checkErrorStatement(): CheckErrorStatementContext[];
	public checkErrorStatement(i: number): CheckErrorStatementContext;
	public checkErrorStatement(i?: number): CheckErrorStatementContext | CheckErrorStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CheckErrorStatementContext);
		} else {
			return this.getRuleContext(i, CheckErrorStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_checkStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCheckStatement) {
			return visitor.visitCheckStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_usingStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitUsingStatement) {
			return visitor.visitUsingStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckErrorStatementContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_checkErrorStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCheckErrorStatement) {
			return visitor.visitCheckErrorStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckFinallyStatmentContext extends ParserRuleContext {
	public Discard(): TerminalNode { return this.getToken(LiteParser.Discard, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_checkFinallyStatment; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCheckFinallyStatment) {
			return visitor.visitCheckFinallyStatment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReportStatementContext extends ParserRuleContext {
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_reportStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitReportStatement) {
			return visitor.visitReportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IteratorStatementContext extends ParserRuleContext {
	public _op: Token;
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public more(): MoreContext | undefined {
		return this.tryGetRuleContext(0, MoreContext);
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_iteratorStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIteratorStatement) {
			return visitor.visitIteratorStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon_Equal, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_variableStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaredStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_variableDeclaredStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaredStatement) {
			return visitor.visitVariableDeclaredStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChannelAssignStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public assign(): AssignContext {
		return this.getRuleContext(0, AssignContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_channelAssignStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitChannelAssignStatement) {
			return visitor.visitChannelAssignStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public assign(): AssignContext {
		return this.getRuleContext(0, AssignContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_assignStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAssignStatement) {
			return visitor.visitAssignStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_expressionStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public templateCall(): TemplateCallContext | undefined {
		return this.tryGetRuleContext(0, TemplateCallContext);
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	public left_paren(): Left_parenContext | undefined {
		return this.tryGetRuleContext(0, Left_parenContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public right_paren(): Right_parenContext | undefined {
		return this.tryGetRuleContext(0, Right_parenContext);
	}
	public dataStatement(): DataStatementContext | undefined {
		return this.tryGetRuleContext(0, DataStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_primaryExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _op: Token;
	public linq(): LinqContext | undefined {
		return this.tryGetRuleContext(0, LinqContext);
	}
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public callNew(): CallNewContext | undefined {
		return this.tryGetRuleContext(0, CallNewContext);
	}
	public callPkg(): CallPkgContext | undefined {
		return this.tryGetRuleContext(0, CallPkgContext);
	}
	public getType(): GetTypeContext | undefined {
		return this.tryGetRuleContext(0, GetTypeContext);
	}
	public callAwait(): CallAwaitContext | undefined {
		return this.tryGetRuleContext(0, CallAwaitContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public dictionary(): DictionaryContext | undefined {
		return this.tryGetRuleContext(0, DictionaryContext);
	}
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	public functionExpression(): FunctionExpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionContext);
	}
	public pkgAnonymous(): PkgAnonymousContext | undefined {
		return this.tryGetRuleContext(0, PkgAnonymousContext);
	}
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
	}
	public plusMinus(): PlusMinusContext | undefined {
		return this.tryGetRuleContext(0, PlusMinusContext);
	}
	public bitwiseNotExpression(): BitwiseNotExpressionContext | undefined {
		return this.tryGetRuleContext(0, BitwiseNotExpressionContext);
	}
	public negate(): NegateContext | undefined {
		return this.tryGetRuleContext(0, NegateContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Bang(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Bang, 0); }
	public Question(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Question, 0); }
	public Left_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Left_Flow, 0); }
	public typeConversion(): TypeConversionContext | undefined {
		return this.tryGetRuleContext(0, TypeConversionContext);
	}
	public callFunc(): CallFuncContext | undefined {
		return this.tryGetRuleContext(0, CallFuncContext);
	}
	public callChannel(): CallChannelContext | undefined {
		return this.tryGetRuleContext(0, CallChannelContext);
	}
	public callElement(): CallElementContext | undefined {
		return this.tryGetRuleContext(0, CallElementContext);
	}
	public callExpression(): CallExpressionContext | undefined {
		return this.tryGetRuleContext(0, CallExpressionContext);
	}
	public judgeType(): JudgeTypeContext | undefined {
		return this.tryGetRuleContext(0, JudgeTypeContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public bitwise(): BitwiseContext | undefined {
		return this.tryGetRuleContext(0, BitwiseContext);
	}
	public judge(): JudgeContext | undefined {
		return this.tryGetRuleContext(0, JudgeContext);
	}
	public add(): AddContext | undefined {
		return this.tryGetRuleContext(0, AddContext);
	}
	public mul(): MulContext | undefined {
		return this.tryGetRuleContext(0, MulContext);
	}
	public pow(): PowContext | undefined {
		return this.tryGetRuleContext(0, PowContext);
	}
	public stringExpression(): StringExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallExpressionContext extends ParserRuleContext {
	public call(): CallContext {
		return this.getRuleContext(0, CallContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	public templateCall(): TemplateCallContext | undefined {
		return this.tryGetRuleContext(0, TemplateCallContext);
	}
	public callFunc(): CallFuncContext | undefined {
		return this.tryGetRuleContext(0, CallFuncContext);
	}
	public callChannel(): CallChannelContext | undefined {
		return this.tryGetRuleContext(0, CallChannelContext);
	}
	public callElement(): CallElementContext | undefined {
		return this.tryGetRuleContext(0, CallElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallExpression) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_tuple; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_expressionList; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationSupportContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotationSupport; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotationSupport) {
			return visitor.visitAnnotationSupport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public annotationList(): AnnotationListContext {
		return this.getRuleContext(0, AnnotationListContext);
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotation; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationListContext extends ParserRuleContext {
	public annotationItem(): AnnotationItemContext[];
	public annotationItem(i: number): AnnotationItemContext;
	public annotationItem(i?: number): AnnotationItemContext | AnnotationItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationItemContext);
		} else {
			return this.getRuleContext(i, AnnotationItemContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotationList; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotationList) {
			return visitor.visitAnnotationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationItemContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext | undefined {
		return this.tryGetRuleContext(0, Left_parenContext);
	}
	public annotationAssign(): AnnotationAssignContext[];
	public annotationAssign(i: number): AnnotationAssignContext;
	public annotationAssign(i?: number): AnnotationAssignContext | AnnotationAssignContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationAssignContext);
		} else {
			return this.getRuleContext(i, AnnotationAssignContext);
		}
	}
	public right_paren(): Right_parenContext | undefined {
		return this.tryGetRuleContext(0, Right_parenContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotationItem; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotationItem) {
			return visitor.visitAnnotationItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationAssignContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotationAssign; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotationAssign) {
			return visitor.visitAnnotationAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallFuncContext extends ParserRuleContext {
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
	}
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callFunc; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallFunc) {
			return visitor.visitCallFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallChannelContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callChannel; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallChannel) {
			return visitor.visitCallChannel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallElementContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public slice(): SliceContext | undefined {
		return this.tryGetRuleContext(0, SliceContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callElement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallElement) {
			return visitor.visitCallElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallPkgContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public pkgAssign(): PkgAssignContext | undefined {
		return this.tryGetRuleContext(0, PkgAssignContext);
	}
	public listAssign(): ListAssignContext | undefined {
		return this.tryGetRuleContext(0, ListAssignContext);
	}
	public setAssign(): SetAssignContext | undefined {
		return this.tryGetRuleContext(0, SetAssignContext);
	}
	public dictionaryAssign(): DictionaryAssignContext | undefined {
		return this.tryGetRuleContext(0, DictionaryAssignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callPkg; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallPkg) {
			return visitor.visitCallPkg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallNewContext extends ParserRuleContext {
	public Less(): TerminalNode { return this.getToken(LiteParser.Less, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Greater(): TerminalNode { return this.getToken(LiteParser.Greater, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callNew; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallNew) {
			return visitor.visitCallNew(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetTypeContext extends ParserRuleContext {
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_getType; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitGetType) {
			return visitor.visitGetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeConversionContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeConversion; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeConversion) {
			return visitor.visitTypeConversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAssignContext extends ParserRuleContext {
	public pkgAssignElement(): PkgAssignElementContext[];
	public pkgAssignElement(i: number): PkgAssignElementContext;
	public pkgAssignElement(i?: number): PkgAssignElementContext | PkgAssignElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PkgAssignElementContext);
		} else {
			return this.getRuleContext(i, PkgAssignElementContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAssign; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAssign) {
			return visitor.visitPkgAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAssignElementContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public Equal(): TerminalNode { return this.getToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAssignElement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAssignElement) {
			return visitor.visitPkgAssignElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListAssignContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_listAssign; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitListAssign) {
			return visitor.visitListAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetAssignContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode[];
	public Left_Brack(i: number): TerminalNode;
	public Left_Brack(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Left_Brack);
		} else {
			return this.getToken(LiteParser.Left_Brack, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Right_Brack(): TerminalNode[];
	public Right_Brack(i: number): TerminalNode;
	public Right_Brack(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Right_Brack);
		} else {
			return this.getToken(LiteParser.Right_Brack, i);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_setAssign; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSetAssign) {
			return visitor.visitSetAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryAssignContext extends ParserRuleContext {
	public dictionaryElement(): DictionaryElementContext[];
	public dictionaryElement(i: number): DictionaryElementContext;
	public dictionaryElement(i?: number): DictionaryElementContext | DictionaryElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DictionaryElementContext);
		} else {
			return this.getRuleContext(i, DictionaryElementContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_dictionaryAssign; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitDictionaryAssign) {
			return visitor.visitDictionaryAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallAwaitContext extends ParserRuleContext {
	public Left_Flow(): TerminalNode { return this.getToken(LiteParser.Left_Flow, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callAwait; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallAwait) {
			return visitor.visitCallAwait(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_list; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public Left_Brack(): TerminalNode[];
	public Left_Brack(i: number): TerminalNode;
	public Left_Brack(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Left_Brack);
		} else {
			return this.getToken(LiteParser.Left_Brack, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Right_Brack(): TerminalNode[];
	public Right_Brack(i: number): TerminalNode;
	public Right_Brack(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Right_Brack);
		} else {
			return this.getToken(LiteParser.Right_Brack, i);
		}
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_set; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSet) {
			return visitor.visitSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public dictionaryElement(): DictionaryElementContext[];
	public dictionaryElement(i: number): DictionaryElementContext;
	public dictionaryElement(i?: number): DictionaryElementContext | DictionaryElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DictionaryElementContext);
		} else {
			return this.getRuleContext(i, DictionaryElementContext);
		}
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_dictionary; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitDictionary) {
			return visitor.visitDictionary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryElementContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_dictionaryElement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitDictionaryElement) {
			return visitor.visitDictionaryElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceContext extends ParserRuleContext {
	public sliceFull(): SliceFullContext | undefined {
		return this.tryGetRuleContext(0, SliceFullContext);
	}
	public sliceStart(): SliceStartContext | undefined {
		return this.tryGetRuleContext(0, SliceStartContext);
	}
	public sliceEnd(): SliceEndContext | undefined {
		return this.tryGetRuleContext(0, SliceEndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_slice; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSlice) {
			return visitor.visitSlice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceFullContext extends ParserRuleContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_sliceFull; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSliceFull) {
			return visitor.visitSliceFull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceStartContext extends ParserRuleContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_sliceStart; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSliceStart) {
			return visitor.visitSliceStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceEndContext extends ParserRuleContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_sliceEnd; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSliceEnd) {
			return visitor.visitSliceEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceItemContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public call(): CallContext[];
	public call(i: number): CallContext;
	public call(i?: number): CallContext | CallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallContext);
		} else {
			return this.getRuleContext(i, CallContext);
		}
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_nameSpaceItem; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNameSpaceItem) {
			return visitor.visitNameSpaceItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public call(): CallContext[];
	public call(i: number): CallContext;
	public call(i?: number): CallContext | CallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallContext);
		} else {
			return this.getRuleContext(i, CallContext);
		}
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_name; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateDefineContext extends ParserRuleContext {
	public Less(): TerminalNode { return this.getToken(LiteParser.Less, 0); }
	public templateDefineItem(): TemplateDefineItemContext[];
	public templateDefineItem(i: number): TemplateDefineItemContext;
	public templateDefineItem(i?: number): TemplateDefineItemContext | TemplateDefineItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateDefineItemContext);
		} else {
			return this.getRuleContext(i, TemplateDefineItemContext);
		}
	}
	public Greater(): TerminalNode { return this.getToken(LiteParser.Greater, 0); }
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_templateDefine; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTemplateDefine) {
			return visitor.visitTemplateDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateDefineItemContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_templateDefineItem; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTemplateDefineItem) {
			return visitor.visitTemplateDefineItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateCallContext extends ParserRuleContext {
	public Less(): TerminalNode { return this.getToken(LiteParser.Less, 0); }
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public Greater(): TerminalNode { return this.getToken(LiteParser.Greater, 0); }
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_templateCall; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTemplateCall) {
			return visitor.visitTemplateCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	public _t: Token;
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public lambdaIn(): LambdaInContext | undefined {
		return this.tryGetRuleContext(0, LambdaInContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_lambda; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaInContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_lambdaIn; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLambdaIn) {
			return visitor.visitLambdaIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAnonymousContext extends ParserRuleContext {
	public pkgAnonymousAssign(): PkgAnonymousAssignContext {
		return this.getRuleContext(0, PkgAnonymousAssignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAnonymous; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAnonymous) {
			return visitor.visitPkgAnonymous(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAnonymousAssignContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public pkgAnonymousAssignElement(): PkgAnonymousAssignElementContext[];
	public pkgAnonymousAssignElement(i: number): PkgAnonymousAssignElementContext;
	public pkgAnonymousAssignElement(i?: number): PkgAnonymousAssignElementContext | PkgAnonymousAssignElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PkgAnonymousAssignElementContext);
		} else {
			return this.getRuleContext(i, PkgAnonymousAssignElementContext);
		}
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAnonymousAssign; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAnonymousAssign) {
			return visitor.visitPkgAnonymousAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAnonymousAssignElementContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public Equal(): TerminalNode { return this.getToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAnonymousAssignElement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAnonymousAssignElement) {
			return visitor.visitPkgAnonymousAssignElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionContext extends ParserRuleContext {
	public _t: Token;
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_functionExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_tupleExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlusMinusContext extends ParserRuleContext {
	public add(): AddContext {
		return this.getRuleContext(0, AddContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_plusMinus; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPlusMinus) {
			return visitor.visitPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegateContext extends ParserRuleContext {
	public wave(): WaveContext {
		return this.getRuleContext(0, WaveContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_negate; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNegate) {
			return visitor.visitNegate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseNotExpressionContext extends ParserRuleContext {
	public bitwiseNot(): BitwiseNotContext {
		return this.getRuleContext(0, BitwiseNotContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_bitwiseNotExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBitwiseNotExpression) {
			return visitor.visitBitwiseNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqContext extends ParserRuleContext {
	public _k: Token;
	public linqHeadKeyword(): LinqHeadKeywordContext {
		return this.getRuleContext(0, LinqHeadKeywordContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public LinqSelect(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqSelect, 0); }
	public LinqBy(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqBy, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public linqItem(): LinqItemContext[];
	public linqItem(i: number): LinqItemContext;
	public linqItem(i?: number): LinqItemContext | LinqItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinqItemContext);
		} else {
			return this.getRuleContext(i, LinqItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linq; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinq) {
			return visitor.visitLinq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqItemContext extends ParserRuleContext {
	public linqKeyword(): LinqKeywordContext {
		return this.getRuleContext(0, LinqKeywordContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linqItem; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinqItem) {
			return visitor.visitLinqItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqKeywordContext extends ParserRuleContext {
	public linqHeadKeyword(): LinqHeadKeywordContext | undefined {
		return this.tryGetRuleContext(0, LinqHeadKeywordContext);
	}
	public linqBodyKeyword(): LinqBodyKeywordContext | undefined {
		return this.tryGetRuleContext(0, LinqBodyKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linqKeyword; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinqKeyword) {
			return visitor.visitLinqKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqHeadKeywordContext extends ParserRuleContext {
	public _k: Token;
	public LinqFrom(): TerminalNode { return this.getToken(LiteParser.LinqFrom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linqHeadKeyword; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinqHeadKeyword) {
			return visitor.visitLinqHeadKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqBodyKeywordContext extends ParserRuleContext {
	public _k: Token;
	public LinqSelect(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqSelect, 0); }
	public LinqBy(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqBy, 0); }
	public LinqWhere(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqWhere, 0); }
	public LinqGroup(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqGroup, 0); }
	public LinqInto(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqInto, 0); }
	public LinqOrderby(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqOrderby, 0); }
	public LinqJoin(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqJoin, 0); }
	public LinqLet(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqLet, 0); }
	public LinqIn(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqIn, 0); }
	public LinqOn(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqOn, 0); }
	public LinqEquals(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqEquals, 0); }
	public LinqAscending(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqAscending, 0); }
	public LinqDescending(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqDescending, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linqBodyKeyword; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinqBodyKeyword) {
			return visitor.visitLinqBodyKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringExpressionContext extends ParserRuleContext {
	public TextLiteral(): TerminalNode { return this.getToken(LiteParser.TextLiteral, 0); }
	public stringExpressionElement(): StringExpressionElementContext[];
	public stringExpressionElement(i: number): StringExpressionElementContext;
	public stringExpressionElement(i?: number): StringExpressionElementContext | StringExpressionElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionElementContext);
		} else {
			return this.getRuleContext(i, StringExpressionElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_stringExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringExpressionElementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public TextLiteral(): TerminalNode { return this.getToken(LiteParser.TextLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_stringExpressionElement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitStringExpressionElement) {
			return visitor.visitStringExpressionElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStatementContext extends ParserRuleContext {
	public _t: Token;
	public floatExpr(): FloatExprContext | undefined {
		return this.tryGetRuleContext(0, FloatExprContext);
	}
	public integerExpr(): IntegerExprContext | undefined {
		return this.tryGetRuleContext(0, IntegerExprContext);
	}
	public TextLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TextLiteral, 0); }
	public CharLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.CharLiteral, 0); }
	public TrueLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TrueLiteral, 0); }
	public FalseLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.FalseLiteral, 0); }
	public nilExpr(): NilExprContext | undefined {
		return this.tryGetRuleContext(0, NilExprContext);
	}
	public UndefinedLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.UndefinedLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_dataStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitDataStatement) {
			return visitor.visitDataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatExprContext extends ParserRuleContext {
	public integerExpr(): IntegerExprContext[];
	public integerExpr(i: number): IntegerExprContext;
	public integerExpr(i?: number): IntegerExprContext | IntegerExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntegerExprContext);
		} else {
			return this.getRuleContext(i, IntegerExprContext);
		}
	}
	public call(): CallContext {
		return this.getRuleContext(0, CallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_floatExpr; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitFloatExpr) {
			return visitor.visitFloatExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerExprContext extends ParserRuleContext {
	public NumberLiteral(): TerminalNode { return this.getToken(LiteParser.NumberLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_integerExpr; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIntegerExpr) {
			return visitor.visitIntegerExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotNullContext extends ParserRuleContext {
	public typeAny(): TypeAnyContext | undefined {
		return this.tryGetRuleContext(0, TypeAnyContext);
	}
	public typeTuple(): TypeTupleContext | undefined {
		return this.tryGetRuleContext(0, TypeTupleContext);
	}
	public typeArray(): TypeArrayContext | undefined {
		return this.tryGetRuleContext(0, TypeArrayContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public typeSet(): TypeSetContext | undefined {
		return this.tryGetRuleContext(0, TypeSetContext);
	}
	public typeDictionary(): TypeDictionaryContext | undefined {
		return this.tryGetRuleContext(0, TypeDictionaryContext);
	}
	public typeChannel(): TypeChannelContext | undefined {
		return this.tryGetRuleContext(0, TypeChannelContext);
	}
	public typeBasic(): TypeBasicContext | undefined {
		return this.tryGetRuleContext(0, TypeBasicContext);
	}
	public typePackage(): TypePackageContext | undefined {
		return this.tryGetRuleContext(0, TypePackageContext);
	}
	public typeFunction(): TypeFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeNotNull; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeNotNull) {
			return visitor.visitTypeNotNull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeReferenceContext extends ParserRuleContext {
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public typeNotNull(): TypeNotNullContext | undefined {
		return this.tryGetRuleContext(0, TypeNotNullContext);
	}
	public typeNullable(): TypeNullableContext | undefined {
		return this.tryGetRuleContext(0, TypeNullableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeReference; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeReference) {
			return visitor.visitTypeReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNullableContext extends ParserRuleContext {
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public typeNotNull(): TypeNotNullContext {
		return this.getRuleContext(0, TypeNotNullContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeNullable; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeNullable) {
			return visitor.visitTypeNullable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	public typeNotNull(): TypeNotNullContext | undefined {
		return this.tryGetRuleContext(0, TypeNotNullContext);
	}
	public typeNullable(): TypeNullableContext | undefined {
		return this.tryGetRuleContext(0, TypeNullableContext);
	}
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeType; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeType) {
			return visitor.visitTypeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTupleContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeTuple; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeTuple) {
			return visitor.visitTypeTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArrayContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeArray; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeArray) {
			return visitor.visitTypeArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeList; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSetContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeSet; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeSet) {
			return visitor.visitTypeSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDictionaryContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeDictionary; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeDictionary) {
			return visitor.visitTypeDictionary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeChannelContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeChannel; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeChannel) {
			return visitor.visitTypeChannel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePackageContext extends ParserRuleContext {
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	public templateCall(): TemplateCallContext | undefined {
		return this.tryGetRuleContext(0, TemplateCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typePackage; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypePackage) {
			return visitor.visitTypePackage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeFunctionContext extends ParserRuleContext {
	public _t: Token;
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public typeFunctionParameterClause(): TypeFunctionParameterClauseContext[];
	public typeFunctionParameterClause(i: number): TypeFunctionParameterClauseContext;
	public typeFunctionParameterClause(i?: number): TypeFunctionParameterClauseContext | TypeFunctionParameterClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeFunctionParameterClauseContext);
		} else {
			return this.getRuleContext(i, TypeFunctionParameterClauseContext);
		}
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeFunction; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeFunction) {
			return visitor.visitTypeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAnyContext extends ParserRuleContext {
	public TypeAny(): TerminalNode { return this.getToken(LiteParser.TypeAny, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeAny; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeAny) {
			return visitor.visitTypeAny(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeFunctionParameterClauseContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeFunctionParameterClause; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeFunctionParameterClause) {
			return visitor.visitTypeFunctionParameterClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBasicContext extends ParserRuleContext {
	public _t: Token;
	public TypeI8(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeI8, 0); }
	public TypeU8(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeU8, 0); }
	public TypeI16(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeI16, 0); }
	public TypeU16(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeU16, 0); }
	public TypeI32(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeI32, 0); }
	public TypeU32(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeU32, 0); }
	public TypeI64(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeI64, 0); }
	public TypeU64(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeU64, 0); }
	public TypeF32(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeF32, 0); }
	public TypeF64(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeF64, 0); }
	public TypeChr(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeChr, 0); }
	public TypeStr(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeStr, 0); }
	public TypeBool(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeBool, 0); }
	public TypeInt(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeInt, 0); }
	public TypeNum(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeNum, 0); }
	public TypeByte(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeByte, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeBasic; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeBasic) {
			return visitor.visitTypeBasic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NilExprContext extends ParserRuleContext {
	public NilLiteral(): TerminalNode { return this.getToken(LiteParser.NilLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_nilExpr; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNilExpr) {
			return visitor.visitNilExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolExprContext extends ParserRuleContext {
	public _t: Token;
	public TrueLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TrueLiteral, 0); }
	public FalseLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.FalseLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_boolExpr; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBoolExpr) {
			return visitor.visitBoolExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeTypeContext extends ParserRuleContext {
	public _op: Token;
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public Equal_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal_Equal, 0); }
	public Not_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Not_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeType; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeType) {
			return visitor.visitJudgeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseContext extends ParserRuleContext {
	public bitwiseAnd(): BitwiseAndContext | undefined {
		return this.tryGetRuleContext(0, BitwiseAndContext);
	}
	public bitwiseOr(): BitwiseOrContext | undefined {
		return this.tryGetRuleContext(0, BitwiseOrContext);
	}
	public bitwiseXor(): BitwiseXorContext | undefined {
		return this.tryGetRuleContext(0, BitwiseXorContext);
	}
	public bitwiseLeftShift(): BitwiseLeftShiftContext | undefined {
		return this.tryGetRuleContext(0, BitwiseLeftShiftContext);
	}
	public bitwiseRightShift(): BitwiseRightShiftContext | undefined {
		return this.tryGetRuleContext(0, BitwiseRightShiftContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_bitwise; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBitwise) {
			return visitor.visitBitwise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseAndContext extends ParserRuleContext {
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.And);
		} else {
			return this.getToken(LiteParser.And, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_bitwiseAnd; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBitwiseAnd) {
			return visitor.visitBitwiseAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseOrContext extends ParserRuleContext {
	public Or(): TerminalNode[];
	public Or(i: number): TerminalNode;
	public Or(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Or);
		} else {
			return this.getToken(LiteParser.Or, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_bitwiseOr; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBitwiseOr) {
			return visitor.visitBitwiseOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseNotContext extends ParserRuleContext {
	public Wave(): TerminalNode[];
	public Wave(i: number): TerminalNode;
	public Wave(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Wave);
		} else {
			return this.getToken(LiteParser.Wave, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_bitwiseNot; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBitwiseNot) {
			return visitor.visitBitwiseNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseXorContext extends ParserRuleContext {
	public Xor(): TerminalNode[];
	public Xor(i: number): TerminalNode;
	public Xor(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Xor);
		} else {
			return this.getToken(LiteParser.Xor, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_bitwiseXor; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBitwiseXor) {
			return visitor.visitBitwiseXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseLeftShiftContext extends ParserRuleContext {
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Less);
		} else {
			return this.getToken(LiteParser.Less, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_bitwiseLeftShift; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBitwiseLeftShift) {
			return visitor.visitBitwiseLeftShift(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitwiseRightShiftContext extends ParserRuleContext {
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Greater);
		} else {
			return this.getToken(LiteParser.Greater, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_bitwiseRightShift; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBitwiseRightShift) {
			return visitor.visitBitwiseRightShift(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeContext extends ParserRuleContext {
	public _op: Token;
	public Or(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Or, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(LiteParser.And, 0); }
	public Equal_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal_Equal, 0); }
	public Not_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Not_Equal, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judge; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudge) {
			return visitor.visitJudge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public _op: Token;
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public Add_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Add_Equal, 0); }
	public Sub_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Sub_Equal, 0); }
	public Mul_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Mul_Equal, 0); }
	public Div_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Div_Equal, 0); }
	public Mod_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Mod_Equal, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_assign; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddContext extends ParserRuleContext {
	public _op: Token;
	public Add(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Add, 0); }
	public Sub(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Sub, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_add; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulContext extends ParserRuleContext {
	public _op: Token;
	public Mul(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Mul, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Mod, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_mul; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitMul) {
			return visitor.visitMul(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowContext extends ParserRuleContext {
	public _op: Token;
	public Pow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Pow, 0); }
	public Root(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Root, 0); }
	public Log(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Log, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pow; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPow) {
			return visitor.visitPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public _op: Token;
	public Dot(): TerminalNode { return this.getToken(LiteParser.Dot, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_call; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveContext extends ParserRuleContext {
	public _op: Token;
	public Wave(): TerminalNode { return this.getToken(LiteParser.Wave, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_wave; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitWave) {
			return visitor.visitWave(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public idItem(): IdItemContext | undefined {
		return this.tryGetRuleContext(0, IdItemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_id; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdItemContext extends ParserRuleContext {
	public _op: Token;
	public IDPublic(): TerminalNode | undefined { return this.tryGetToken(LiteParser.IDPublic, 0); }
	public IDPrivate(): TerminalNode | undefined { return this.tryGetToken(LiteParser.IDPrivate, 0); }
	public typeBasic(): TypeBasicContext | undefined {
		return this.tryGetRuleContext(0, TypeBasicContext);
	}
	public typeAny(): TypeAnyContext | undefined {
		return this.tryGetRuleContext(0, TypeAnyContext);
	}
	public linqKeyword(): LinqKeywordContext | undefined {
		return this.tryGetRuleContext(0, LinqKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_idItem; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIdItem) {
			return visitor.visitIdItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	public Semi(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Semi, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_end; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitEnd) {
			return visitor.visitEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoreContext extends ParserRuleContext {
	public Comma(): TerminalNode { return this.getToken(LiteParser.Comma, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_more; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitMore) {
			return visitor.visitMore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_braceContext extends ParserRuleContext {
	public Left_Brace(): TerminalNode { return this.getToken(LiteParser.Left_Brace, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_left_brace; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLeft_brace) {
			return visitor.visitLeft_brace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_braceContext extends ParserRuleContext {
	public Right_Brace(): TerminalNode { return this.getToken(LiteParser.Right_Brace, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_right_brace; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitRight_brace) {
			return visitor.visitRight_brace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_parenContext extends ParserRuleContext {
	public Left_Paren(): TerminalNode { return this.getToken(LiteParser.Left_Paren, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_left_paren; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLeft_paren) {
			return visitor.visitLeft_paren(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_parenContext extends ParserRuleContext {
	public Right_Paren(): TerminalNode { return this.getToken(LiteParser.Right_Paren, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_right_paren; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitRight_paren) {
			return visitor.visitRight_paren(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_brackContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_left_brack; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLeft_brack) {
			return visitor.visitLeft_brack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_brackContext extends ParserRuleContext {
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_right_brack; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitRight_brack) {
			return visitor.visitRight_brack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


