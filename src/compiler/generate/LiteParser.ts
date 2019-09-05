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
	public static readonly Coin = 94;
	public static readonly Cent = 95;
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
	public static readonly RULE_packageImplementStatement = 20;
	public static readonly RULE_implementNewStatement = 21;
	public static readonly RULE_implementStatement = 22;
	public static readonly RULE_implementSupportStatement = 23;
	public static readonly RULE_implementFunctionStatement = 24;
	public static readonly RULE_implementControlStatement = 25;
	public static readonly RULE_overrideFunctionStatement = 26;
	public static readonly RULE_overrideControlStatement = 27;
	public static readonly RULE_protocolStatement = 28;
	public static readonly RULE_protocolSupportStatement = 29;
	public static readonly RULE_protocolControlStatement = 30;
	public static readonly RULE_protocolControlSubStatement = 31;
	public static readonly RULE_protocolFunctionStatement = 32;
	public static readonly RULE_functionStatement = 33;
	public static readonly RULE_returnStatement = 34;
	public static readonly RULE_yieldReturnStatement = 35;
	public static readonly RULE_yieldBreakStatement = 36;
	public static readonly RULE_parameterClauseIn = 37;
	public static readonly RULE_parameterClauseOut = 38;
	public static readonly RULE_parameterClauseSelf = 39;
	public static readonly RULE_parameter = 40;
	public static readonly RULE_functionSupportStatement = 41;
	public static readonly RULE_judgeCaseStatement = 42;
	public static readonly RULE_caseStatement = 43;
	public static readonly RULE_caseExprStatement = 44;
	public static readonly RULE_judgeStatement = 45;
	public static readonly RULE_judgeElseStatement = 46;
	public static readonly RULE_judgeIfStatement = 47;
	public static readonly RULE_judgeElseIfStatement = 48;
	public static readonly RULE_loopStatement = 49;
	public static readonly RULE_loopEachStatement = 50;
	public static readonly RULE_loopCaseStatement = 51;
	public static readonly RULE_loopElseStatement = 52;
	public static readonly RULE_loopJumpStatement = 53;
	public static readonly RULE_loopContinueStatement = 54;
	public static readonly RULE_checkStatement = 55;
	public static readonly RULE_usingStatement = 56;
	public static readonly RULE_checkErrorStatement = 57;
	public static readonly RULE_checkFinallyStatment = 58;
	public static readonly RULE_iteratorStatement = 59;
	public static readonly RULE_variableStatement = 60;
	public static readonly RULE_variableDeclaredStatement = 61;
	public static readonly RULE_channelAssignStatement = 62;
	public static readonly RULE_assignStatement = 63;
	public static readonly RULE_expressionStatement = 64;
	public static readonly RULE_idExpression = 65;
	public static readonly RULE_idExprItem = 66;
	public static readonly RULE_tupleExpression = 67;
	public static readonly RULE_primaryExpression = 68;
	public static readonly RULE_expression = 69;
	public static readonly RULE_callExpression = 70;
	public static readonly RULE_tuple = 71;
	public static readonly RULE_expressionList = 72;
	public static readonly RULE_annotationSupport = 73;
	public static readonly RULE_annotation = 74;
	public static readonly RULE_annotationList = 75;
	public static readonly RULE_annotationItem = 76;
	public static readonly RULE_annotationAssign = 77;
	public static readonly RULE_callFunc = 78;
	public static readonly RULE_callChannel = 79;
	public static readonly RULE_callElement = 80;
	public static readonly RULE_callPkg = 81;
	public static readonly RULE_callNew = 82;
	public static readonly RULE_typeConversion = 83;
	public static readonly RULE_pkgAssign = 84;
	public static readonly RULE_pkgAssignElement = 85;
	public static readonly RULE_listAssign = 86;
	public static readonly RULE_setAssign = 87;
	public static readonly RULE_dictionaryAssign = 88;
	public static readonly RULE_callAwait = 89;
	public static readonly RULE_list = 90;
	public static readonly RULE_set = 91;
	public static readonly RULE_dictionary = 92;
	public static readonly RULE_dictionaryElement = 93;
	public static readonly RULE_slice = 94;
	public static readonly RULE_sliceFull = 95;
	public static readonly RULE_sliceStart = 96;
	public static readonly RULE_sliceEnd = 97;
	public static readonly RULE_nameSpaceItem = 98;
	public static readonly RULE_name = 99;
	public static readonly RULE_templateDefine = 100;
	public static readonly RULE_templateDefineItem = 101;
	public static readonly RULE_templateCall = 102;
	public static readonly RULE_lambda = 103;
	public static readonly RULE_lambdaIn = 104;
	public static readonly RULE_pkgAnonymous = 105;
	public static readonly RULE_pkgAnonymousAssign = 106;
	public static readonly RULE_pkgAnonymousAssignElement = 107;
	public static readonly RULE_functionExpression = 108;
	public static readonly RULE_plusMinus = 109;
	public static readonly RULE_negate = 110;
	public static readonly RULE_bitwiseNotExpression = 111;
	public static readonly RULE_linq = 112;
	public static readonly RULE_linqItem = 113;
	public static readonly RULE_linqKeyword = 114;
	public static readonly RULE_linqHeadKeyword = 115;
	public static readonly RULE_linqBodyKeyword = 116;
	public static readonly RULE_stringExpression = 117;
	public static readonly RULE_stringExpressionElement = 118;
	public static readonly RULE_judgeExpression = 119;
	public static readonly RULE_judgeExpressionElseStatement = 120;
	public static readonly RULE_judgeExpressionIfStatement = 121;
	public static readonly RULE_judgeExpressionElseIfStatement = 122;
	public static readonly RULE_judgeCaseExpression = 123;
	public static readonly RULE_caseExpressionStatement = 124;
	public static readonly RULE_loopExpression = 125;
	public static readonly RULE_loopEachExpression = 126;
	public static readonly RULE_loopElseExpression = 127;
	public static readonly RULE_checkExpression = 128;
	public static readonly RULE_checkErrorExpression = 129;
	public static readonly RULE_dataStatement = 130;
	public static readonly RULE_floatExpr = 131;
	public static readonly RULE_integerExpr = 132;
	public static readonly RULE_typeNotNull = 133;
	public static readonly RULE_typeType = 134;
	public static readonly RULE_typeReference = 135;
	public static readonly RULE_typeNullable = 136;
	public static readonly RULE_typeTuple = 137;
	public static readonly RULE_typeArray = 138;
	public static readonly RULE_typeList = 139;
	public static readonly RULE_typeSet = 140;
	public static readonly RULE_typeDictionary = 141;
	public static readonly RULE_typeChannel = 142;
	public static readonly RULE_typeStack = 143;
	public static readonly RULE_typePackage = 144;
	public static readonly RULE_typeFunction = 145;
	public static readonly RULE_typeAny = 146;
	public static readonly RULE_typeFunctionParameterClause = 147;
	public static readonly RULE_typeBasic = 148;
	public static readonly RULE_nilExpr = 149;
	public static readonly RULE_boolExpr = 150;
	public static readonly RULE_judgeType = 151;
	public static readonly RULE_bitwise = 152;
	public static readonly RULE_bitwiseAnd = 153;
	public static readonly RULE_bitwiseOr = 154;
	public static readonly RULE_bitwiseNot = 155;
	public static readonly RULE_bitwiseXor = 156;
	public static readonly RULE_bitwiseLeftShift = 157;
	public static readonly RULE_bitwiseRightShift = 158;
	public static readonly RULE_judge = 159;
	public static readonly RULE_assign = 160;
	public static readonly RULE_add = 161;
	public static readonly RULE_mul = 162;
	public static readonly RULE_pow = 163;
	public static readonly RULE_call = 164;
	public static readonly RULE_wave = 165;
	public static readonly RULE_id = 166;
	public static readonly RULE_idItem = 167;
	public static readonly RULE_end = 168;
	public static readonly RULE_more = 169;
	public static readonly RULE_left_brace = 170;
	public static readonly RULE_right_brace = 171;
	public static readonly RULE_left_paren = 172;
	public static readonly RULE_right_paren = 173;
	public static readonly RULE_left_brack = 174;
	public static readonly RULE_right_brack = 175;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "exportStatement", "importStatement", "namespaceSupportStatement", 
		"typeAliasStatement", "typeRedefineStatement", "enumStatement", "enumSupportStatement", 
		"namespaceVariableStatement", "namespaceControlStatement", "namespaceConstantStatement", 
		"namespaceFunctionStatement", "packageStatement", "packageSupportStatement", 
		"includeStatement", "packageNewStatement", "packageVariableStatement", 
		"packageControlSubStatement", "packageEventStatement", "packageImplementStatement", 
		"implementNewStatement", "implementStatement", "implementSupportStatement", 
		"implementFunctionStatement", "implementControlStatement", "overrideFunctionStatement", 
		"overrideControlStatement", "protocolStatement", "protocolSupportStatement", 
		"protocolControlStatement", "protocolControlSubStatement", "protocolFunctionStatement", 
		"functionStatement", "returnStatement", "yieldReturnStatement", "yieldBreakStatement", 
		"parameterClauseIn", "parameterClauseOut", "parameterClauseSelf", "parameter", 
		"functionSupportStatement", "judgeCaseStatement", "caseStatement", "caseExprStatement", 
		"judgeStatement", "judgeElseStatement", "judgeIfStatement", "judgeElseIfStatement", 
		"loopStatement", "loopEachStatement", "loopCaseStatement", "loopElseStatement", 
		"loopJumpStatement", "loopContinueStatement", "checkStatement", "usingStatement", 
		"checkErrorStatement", "checkFinallyStatment", "iteratorStatement", "variableStatement", 
		"variableDeclaredStatement", "channelAssignStatement", "assignStatement", 
		"expressionStatement", "idExpression", "idExprItem", "tupleExpression", 
		"primaryExpression", "expression", "callExpression", "tuple", "expressionList", 
		"annotationSupport", "annotation", "annotationList", "annotationItem", 
		"annotationAssign", "callFunc", "callChannel", "callElement", "callPkg", 
		"callNew", "typeConversion", "pkgAssign", "pkgAssignElement", "listAssign", 
		"setAssign", "dictionaryAssign", "callAwait", "list", "set", "dictionary", 
		"dictionaryElement", "slice", "sliceFull", "sliceStart", "sliceEnd", "nameSpaceItem", 
		"name", "templateDefine", "templateDefineItem", "templateCall", "lambda", 
		"lambdaIn", "pkgAnonymous", "pkgAnonymousAssign", "pkgAnonymousAssignElement", 
		"functionExpression", "plusMinus", "negate", "bitwiseNotExpression", "linq", 
		"linqItem", "linqKeyword", "linqHeadKeyword", "linqBodyKeyword", "stringExpression", 
		"stringExpressionElement", "judgeExpression", "judgeExpressionElseStatement", 
		"judgeExpressionIfStatement", "judgeExpressionElseIfStatement", "judgeCaseExpression", 
		"caseExpressionStatement", "loopExpression", "loopEachExpression", "loopElseExpression", 
		"checkExpression", "checkErrorExpression", "dataStatement", "floatExpr", 
		"integerExpr", "typeNotNull", "typeType", "typeReference", "typeNullable", 
		"typeTuple", "typeArray", "typeList", "typeSet", "typeDictionary", "typeChannel", 
		"typeStack", "typePackage", "typeFunction", "typeAny", "typeFunctionParameterClause", 
		"typeBasic", "nilExpr", "boolExpr", "judgeType", "bitwise", "bitwiseAnd", 
		"bitwiseOr", "bitwiseNot", "bitwiseXor", "bitwiseLeftShift", "bitwiseRightShift", 
		"judge", "assign", "add", "mul", "pow", "call", "wave", "id", "idItem", 
		"end", "more", "left_brace", "right_brace", "left_paren", "right_paren", 
		"left_brack", "right_brack",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'from'", "'by'", "'select'", "'where'", "'group'", "'into'", 
		"'orderby'", "'join'", "'let'", "'in'", "'on'", "'equals'", "'ascending'", 
		"'descending'", "'**'", "'//'", "'%%'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "':='", "'=='", "'<='", "'>='", "'><'", "'...'", "'..'", "'.'", 
		"','", "'=>'", "'->'", "'<-'", "'~>'", "'<~'", "'='", "'<'", "'>'", "';'", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'::'", "':'", "'?'", "'@'", 
		"'!'", "'~'", "'+'", "'-'", "'*'", "'/'", "'%'", "'\\'", "'&'", "'|'", 
		"'^'", "'i8'", "'u8'", "'i16'", "'u16'", "'i32'", "'u32'", "'i64'", "'u64'", 
		"'f32'", "'f64'", "'chr'", "'str'", "'bool'", "'int'", "'num'", "'byte'", 
		"'any'", "'nil'", "'true'", "'false'", "'undef'", undefined, undefined, 
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
		"Coin", "Cent",
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
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 352;
				this.statement();
				}
				}
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LiteParser.Left_Paren || _la === LiteParser.TextLiteral || _la === LiteParser.New_Line);
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
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 357;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 363;
				this.annotationSupport();
				}
			}

			this.state = 366;
			this.exportStatement();
			this.state = 370;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 367;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 376;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 373;
					this.namespaceSupportStatement();
					}
					}
				}
				this.state = 378;
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
			this.state = 379;
			this.match(LiteParser.TextLiteral);
			this.state = 380;
			this.left_brace();
			this.state = 385;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 383;
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
					case LiteParser.TextLiteral:
					case LiteParser.IDPrivate:
					case LiteParser.IDPublic:
						{
						this.state = 381;
						this.importStatement();
						}
						break;
					case LiteParser.New_Line:
						{
						this.state = 382;
						this.match(LiteParser.New_Line);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 387;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 388;
			this.right_brace();
			this.state = 389;
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
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 391;
				this.annotationSupport();
				}
			}

			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
				{
				this.state = 394;
				this.id();
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Dot) {
					{
					this.state = 395;
					this.call();
					}
				}

				}
			}

			this.state = 400;
			this.match(LiteParser.TextLiteral);
			this.state = 401;
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
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this.namespaceVariableStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 404;
				this.namespaceControlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 405;
				this.namespaceFunctionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 406;
				this.namespaceConstantStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 407;
				this.packageStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 408;
				this.protocolStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 409;
				this.implementStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 410;
				this.implementNewStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 411;
				this.enumStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 412;
				this.typeAliasStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 413;
				this.typeRedefineStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 414;
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
			this.state = 417;
			this.id();
			this.state = 418;
			this.match(LiteParser.Equal_Arrow);
			this.state = 419;
			this.typeType();
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
	public typeRedefineStatement(): TypeRedefineStatementContext {
		let _localctx: TypeRedefineStatementContext = new TypeRedefineStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LiteParser.RULE_typeRedefineStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.id();
			this.state = 423;
			this.match(LiteParser.Colon_Equal);
			this.state = 424;
			this.typeType();
			this.state = 425;
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
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 427;
				this.annotationSupport();
				}
			}

			this.state = 430;
			this.id();
			this.state = 431;
			this.match(LiteParser.Colon_Equal);
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 432;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 438;
			this.typeType();
			this.state = 439;
			this.match(LiteParser.Question);
			this.state = 440;
			this.left_brace();
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
				{
				{
				this.state = 441;
				this.enumSupportStatement();
				}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 447;
			this.right_brace();
			this.state = 448;
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
			this.state = 450;
			this.id();
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Equal) {
				{
				this.state = 451;
				this.match(LiteParser.Equal);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Add || _la === LiteParser.Sub) {
					{
					this.state = 452;
					this.add();
					}
				}

				this.state = 455;
				this.integerExpr();
				}
			}

			this.state = 458;
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
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 460;
				this.annotationSupport();
				}
			}

			this.state = 463;
			this.id();
			this.state = 471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Equal:
				{
				this.state = 464;
				this.match(LiteParser.Equal);
				this.state = 465;
				this.expression(0);
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
			case LiteParser.Less:
			case LiteParser.Left_Paren:
			case LiteParser.Left_Brack:
			case LiteParser.Question:
			case LiteParser.Bang:
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
				this.state = 466;
				this.typeType();
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Equal) {
					{
					this.state = 467;
					this.match(LiteParser.Equal);
					this.state = 468;
					this.expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 473;
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
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 475;
				this.annotationSupport();
				}
			}

			this.state = 478;
			this.id();
			this.state = 479;
			this.match(LiteParser.Colon);
			this.state = 480;
			this.left_paren();
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 481;
				this.expression(0);
				}
			}

			this.state = 484;
			this.right_paren();
			this.state = 485;
			this.typeType();
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brace) {
				{
				this.state = 486;
				this.left_brace();
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 487;
					this.packageControlSubStatement();
					}
					}
					this.state = 490;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0));
				this.state = 492;
				this.right_brace();
				}
			}

			this.state = 496;
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
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 498;
				this.annotationSupport();
				}
			}

			this.state = 501;
			this.id();
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (LiteParser.Less - 38)) | (1 << (LiteParser.Left_Paren - 38)) | (1 << (LiteParser.Left_Brack - 38)) | (1 << (LiteParser.Question - 38)) | (1 << (LiteParser.Bang - 38)) | (1 << (LiteParser.TypeI8 - 38)) | (1 << (LiteParser.TypeU8 - 38)) | (1 << (LiteParser.TypeI16 - 38)) | (1 << (LiteParser.TypeU16 - 38)) | (1 << (LiteParser.TypeI32 - 38)) | (1 << (LiteParser.TypeU32 - 38)) | (1 << (LiteParser.TypeI64 - 38)) | (1 << (LiteParser.TypeU64 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (LiteParser.TypeF32 - 70)) | (1 << (LiteParser.TypeF64 - 70)) | (1 << (LiteParser.TypeChr - 70)) | (1 << (LiteParser.TypeStr - 70)) | (1 << (LiteParser.TypeBool - 70)) | (1 << (LiteParser.TypeInt - 70)) | (1 << (LiteParser.TypeNum - 70)) | (1 << (LiteParser.TypeByte - 70)) | (1 << (LiteParser.TypeAny - 70)) | (1 << (LiteParser.IDPrivate - 70)) | (1 << (LiteParser.IDPublic - 70)))) !== 0)) {
				{
				this.state = 502;
				this.typeType();
				}
			}

			this.state = 505;
			this.match(LiteParser.Colon);
			this.state = 506;
			this.expression(0);
			this.state = 507;
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
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 509;
				this.annotationSupport();
				}
			}

			this.state = 512;
			this.id();
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 513;
				this.templateDefine();
				}
			}

			this.state = 516;
			this.match(LiteParser.Colon);
			this.state = 517;
			this.left_paren();
			this.state = 518;
			this.parameterClauseIn();
			this.state = 519;
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
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.At) {
				{
				this.state = 520;
				_localctx._y = this.match(LiteParser.At);
				}
			}

			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 523;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 529;
			this.parameterClauseOut();
			this.state = 530;
			this.right_paren();
			this.state = 531;
			this.left_brace();
			this.state = 535;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 532;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 538;
			this.right_brace();
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
	public packageStatement(): PackageStatementContext {
		let _localctx: PackageStatementContext = new PackageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LiteParser.RULE_packageStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 541;
				this.annotationSupport();
				}
			}

			this.state = 544;
			this.id();
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 545;
				this.templateDefine();
				}
			}

			this.state = 548;
			this.match(LiteParser.Colon_Equal);
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
				{
				this.state = 549;
				this.id();
				}
			}

			this.state = 552;
			this.match(LiteParser.Coin);
			this.state = 553;
			this.left_brace();
			this.state = 557;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 554;
					this.packageSupportStatement();
					}
					}
				}
				this.state = 559;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 560;
			this.right_brace();
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Left_Paren || _la === LiteParser.Cent) {
				{
				this.state = 563;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 561;
					this.packageNewStatement();
					}
					break;

				case 2:
					{
					this.state = 562;
					this.packageImplementStatement();
					}
					break;
				}
				}
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 568;
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
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 570;
				this.includeStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 571;
				this.packageVariableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 572;
				this.packageEventStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 573;
				this.implementFunctionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 574;
				this.implementControlStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 575;
				this.overrideFunctionStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 576;
				this.overrideControlStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 577;
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
			this.state = 580;
			this.typeType();
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
	public packageNewStatement(): PackageNewStatementContext {
		let _localctx: PackageNewStatementContext = new PackageNewStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LiteParser.RULE_packageNewStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 583;
				this.annotationSupport();
				}
			}

			this.state = 586;
			this.match(LiteParser.Cent);
			this.state = 587;
			this.left_paren();
			this.state = 588;
			this.parameterClauseIn();
			this.state = 589;
			this.right_paren();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 590;
				this.left_paren();
				this.state = 592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
					{
					this.state = 591;
					this.expressionList();
					}
				}

				this.state = 594;
				this.right_paren();
				}
			}

			this.state = 598;
			this.left_brace();
			this.state = 602;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 599;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 604;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 605;
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
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 607;
				this.annotationSupport();
				}
			}

			this.state = 610;
			this.id();
			this.state = 618;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Equal:
				{
				this.state = 611;
				this.match(LiteParser.Equal);
				this.state = 612;
				this.expression(0);
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
			case LiteParser.Less:
			case LiteParser.Left_Paren:
			case LiteParser.Left_Brack:
			case LiteParser.Question:
			case LiteParser.Bang:
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
				this.state = 613;
				this.typeType();
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Equal) {
					{
					this.state = 614;
					this.match(LiteParser.Equal);
					this.state = 615;
					this.expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 620;
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
			this.state = 622;
			this.id();
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 623;
				this.left_paren();
				this.state = 624;
				this.id();
				this.state = 625;
				this.right_paren();
				}
			}

			this.state = 629;
			this.left_brace();
			this.state = 631;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 630;
					this.functionSupportStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 633;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 635;
			this.right_brace();
			this.state = 636;
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
			this.state = 638;
			this.id();
			this.state = 639;
			this.left_brack();
			this.state = 640;
			this.match(LiteParser.Question);
			this.state = 641;
			this.right_brack();
			this.state = 642;
			this.nameSpaceItem();
			this.state = 643;
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
	public packageImplementStatement(): PackageImplementStatementContext {
		let _localctx: PackageImplementStatementContext = new PackageImplementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LiteParser.RULE_packageImplementStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(LiteParser.Cent);
			this.state = 646;
			this.typeType();
			this.state = 647;
			this.left_brace();
			this.state = 651;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 648;
					this.implementSupportStatement();
					}
					}
				}
				this.state = 653;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 654;
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
	public implementNewStatement(): ImplementNewStatementContext {
		let _localctx: ImplementNewStatementContext = new ImplementNewStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LiteParser.RULE_implementNewStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 656;
				this.annotationSupport();
				}
			}

			this.state = 659;
			this.parameterClauseSelf();
			this.state = 660;
			this.match(LiteParser.Cent);
			this.state = 661;
			this.left_paren();
			this.state = 662;
			this.parameterClauseIn();
			this.state = 663;
			this.right_paren();
			this.state = 670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 664;
				this.left_paren();
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
					{
					this.state = 665;
					this.expressionList();
					}
				}

				this.state = 668;
				this.right_paren();
				}
			}

			this.state = 672;
			this.left_brace();
			this.state = 676;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 673;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 678;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			this.state = 679;
			this.right_brace();
			this.state = 680;
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
		this.enterRule(_localctx, 44, LiteParser.RULE_implementStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this.parameterClauseSelf();
			this.state = 683;
			this.match(LiteParser.Cent);
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (LiteParser.Less - 38)) | (1 << (LiteParser.Left_Paren - 38)) | (1 << (LiteParser.Left_Brack - 38)) | (1 << (LiteParser.Question - 38)) | (1 << (LiteParser.Bang - 38)) | (1 << (LiteParser.TypeI8 - 38)) | (1 << (LiteParser.TypeU8 - 38)) | (1 << (LiteParser.TypeI16 - 38)) | (1 << (LiteParser.TypeU16 - 38)) | (1 << (LiteParser.TypeI32 - 38)) | (1 << (LiteParser.TypeU32 - 38)) | (1 << (LiteParser.TypeI64 - 38)) | (1 << (LiteParser.TypeU64 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (LiteParser.TypeF32 - 70)) | (1 << (LiteParser.TypeF64 - 70)) | (1 << (LiteParser.TypeChr - 70)) | (1 << (LiteParser.TypeStr - 70)) | (1 << (LiteParser.TypeBool - 70)) | (1 << (LiteParser.TypeInt - 70)) | (1 << (LiteParser.TypeNum - 70)) | (1 << (LiteParser.TypeByte - 70)) | (1 << (LiteParser.TypeAny - 70)) | (1 << (LiteParser.IDPrivate - 70)) | (1 << (LiteParser.IDPublic - 70)))) !== 0)) {
				{
				this.state = 684;
				this.typeType();
				}
			}

			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 687;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 693;
			this.left_brace();
			this.state = 697;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 694;
					this.implementSupportStatement();
					}
					}
				}
				this.state = 699;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 700;
			this.right_brace();
			this.state = 701;
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
		this.enterRule(_localctx, 46, LiteParser.RULE_implementSupportStatement);
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.implementFunctionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				this.implementControlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 705;
				this.overrideFunctionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 706;
				this.overrideControlStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
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
	public implementFunctionStatement(): ImplementFunctionStatementContext {
		let _localctx: ImplementFunctionStatementContext = new ImplementFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LiteParser.RULE_implementFunctionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 710;
				this.annotationSupport();
				}
			}

			this.state = 713;
			this.id();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 714;
				this.templateDefine();
				}
			}

			this.state = 717;
			this.match(LiteParser.Colon);
			this.state = 718;
			this.left_paren();
			this.state = 719;
			this.parameterClauseIn();
			this.state = 720;
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
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.At) {
				{
				this.state = 721;
				_localctx._y = this.match(LiteParser.At);
				}
			}

			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 724;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 730;
			this.parameterClauseOut();
			this.state = 731;
			this.right_paren();
			this.state = 732;
			this.left_brace();
			this.state = 736;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 733;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 738;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			}
			this.state = 739;
			this.right_brace();
			this.state = 740;
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
		this.enterRule(_localctx, 50, LiteParser.RULE_implementControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 742;
				this.annotationSupport();
				}
			}

			this.state = 745;
			this.id();
			this.state = 746;
			this.match(LiteParser.Colon);
			this.state = 747;
			this.left_paren();
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 748;
				this.expression(0);
				}
			}

			this.state = 751;
			this.right_paren();
			this.state = 752;
			this.typeType();
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brace) {
				{
				this.state = 753;
				this.left_brace();
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 754;
					this.packageControlSubStatement();
					}
					}
					this.state = 757;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0));
				this.state = 759;
				this.right_brace();
				}
			}

			this.state = 763;
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
	public overrideFunctionStatement(): OverrideFunctionStatementContext {
		let _localctx: OverrideFunctionStatementContext = new OverrideFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LiteParser.RULE_overrideFunctionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 765;
				this.annotationSupport();
				}
			}

			this.state = 768;
			this.id();
			this.state = 769;
			this.match(LiteParser.Cent);
			this.state = 771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 770;
				_localctx._n = this.match(LiteParser.Discard);
				}
			}

			this.state = 773;
			this.id();
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 774;
				this.templateDefine();
				}
			}

			this.state = 777;
			this.match(LiteParser.Colon);
			this.state = 778;
			this.left_paren();
			this.state = 779;
			this.parameterClauseIn();
			this.state = 780;
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
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.At) {
				{
				this.state = 781;
				_localctx._y = this.match(LiteParser.At);
				}
			}

			this.state = 787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 784;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 790;
			this.parameterClauseOut();
			this.state = 791;
			this.right_paren();
			this.state = 792;
			this.left_brace();
			this.state = 796;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 793;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 798;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			this.state = 799;
			this.right_brace();
			this.state = 800;
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
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 802;
				this.annotationSupport();
				}
			}

			this.state = 805;
			this.id();
			this.state = 806;
			this.match(LiteParser.Cent);
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 807;
				_localctx._n = this.match(LiteParser.Discard);
				}
			}

			this.state = 810;
			this.id();
			this.state = 811;
			this.match(LiteParser.Colon);
			this.state = 812;
			this.left_paren();
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 813;
				this.expression(0);
				}
			}

			this.state = 816;
			this.right_paren();
			this.state = 817;
			this.typeType();
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brace) {
				{
				this.state = 818;
				this.left_brace();
				this.state = 820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 819;
					this.packageControlSubStatement();
					}
					}
					this.state = 822;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0));
				this.state = 824;
				this.right_brace();
				}
			}

			this.state = 828;
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
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 830;
				this.annotationSupport();
				}
			}

			this.state = 833;
			this.id();
			this.state = 835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 834;
				this.templateDefine();
				}
			}

			this.state = 837;
			this.match(LiteParser.Colon_Equal);
			this.state = 838;
			this.match(LiteParser.Cent);
			this.state = 839;
			this.left_brace();
			this.state = 843;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 840;
					this.protocolSupportStatement();
					}
					}
				}
				this.state = 845;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			this.state = 846;
			this.right_brace();
			this.state = 847;
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
			this.state = 853;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 849;
				this.includeStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 850;
				this.protocolFunctionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 851;
				this.protocolControlStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 852;
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
			this.state = 856;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 855;
				this.annotationSupport();
				}
			}

			this.state = 858;
			this.id();
			this.state = 859;
			this.left_paren();
			this.state = 860;
			this.right_paren();
			this.state = 861;
			this.typeType();
			this.state = 871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brace) {
				{
				this.state = 862;
				this.left_brace();
				this.state = 866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					{
					this.state = 863;
					this.protocolControlSubStatement();
					}
					}
					this.state = 868;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 869;
				this.right_brace();
				}
			}

			this.state = 873;
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
			this.state = 875;
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
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 877;
				this.annotationSupport();
				}
			}

			this.state = 880;
			this.id();
			this.state = 882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 881;
				this.templateDefine();
				}
			}

			this.state = 884;
			this.left_paren();
			this.state = 885;
			this.parameterClauseIn();
			this.state = 886;
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
			this.state = 888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.At) {
				{
				this.state = 887;
				_localctx._y = this.match(LiteParser.At);
				}
			}

			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 890;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 896;
			this.parameterClauseOut();
			this.state = 897;
			this.right_paren();
			this.state = 898;
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
			this.state = 900;
			this.id();
			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 901;
				this.templateDefine();
				}
			}

			this.state = 904;
			this.match(LiteParser.Colon);
			this.state = 905;
			this.left_paren();
			this.state = 906;
			this.parameterClauseIn();
			this.state = 907;
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
			this.state = 909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.At) {
				{
				this.state = 908;
				_localctx._y = this.match(LiteParser.At);
				}
			}

			this.state = 914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 911;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 917;
			this.parameterClauseOut();
			this.state = 918;
			this.right_paren();
			this.state = 919;
			this.left_brace();
			this.state = 923;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 920;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 925;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			this.state = 926;
			this.right_brace();
			this.state = 927;
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
			this.state = 929;
			this.match(LiteParser.Left_Arrow);
			this.state = 931;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 930;
				this.tupleExpression();
				}
			}

			this.state = 933;
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
	public yieldReturnStatement(): YieldReturnStatementContext {
		let _localctx: YieldReturnStatementContext = new YieldReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, LiteParser.RULE_yieldReturnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.match(LiteParser.At);
			this.state = 936;
			this.match(LiteParser.Left_Arrow);
			this.state = 937;
			this.tupleExpression();
			this.state = 938;
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
	public yieldBreakStatement(): YieldBreakStatementContext {
		let _localctx: YieldBreakStatementContext = new YieldBreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, LiteParser.RULE_yieldBreakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
			this.match(LiteParser.At);
			this.state = 941;
			this.match(LiteParser.Left_Arrow);
			this.state = 942;
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
		this.enterRule(_localctx, 74, LiteParser.RULE_parameterClauseIn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LiteParser.Left_Paren - 41)) | (1 << (LiteParser.TypeI8 - 41)) | (1 << (LiteParser.TypeU8 - 41)) | (1 << (LiteParser.TypeI16 - 41)) | (1 << (LiteParser.TypeU16 - 41)) | (1 << (LiteParser.TypeI32 - 41)) | (1 << (LiteParser.TypeU32 - 41)) | (1 << (LiteParser.TypeI64 - 41)) | (1 << (LiteParser.TypeU64 - 41)) | (1 << (LiteParser.TypeF32 - 41)) | (1 << (LiteParser.TypeF64 - 41)) | (1 << (LiteParser.TypeChr - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (LiteParser.TypeStr - 73)) | (1 << (LiteParser.TypeBool - 73)) | (1 << (LiteParser.TypeInt - 73)) | (1 << (LiteParser.TypeNum - 73)) | (1 << (LiteParser.TypeByte - 73)) | (1 << (LiteParser.TypeAny - 73)) | (1 << (LiteParser.IDPrivate - 73)) | (1 << (LiteParser.IDPublic - 73)))) !== 0)) {
				{
				this.state = 944;
				this.parameter();
				}
			}

			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 947;
				this.more();
				this.state = 948;
				this.parameter();
				}
				}
				this.state = 954;
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
		this.enterRule(_localctx, 76, LiteParser.RULE_parameterClauseOut);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LiteParser.Left_Paren - 41)) | (1 << (LiteParser.TypeI8 - 41)) | (1 << (LiteParser.TypeU8 - 41)) | (1 << (LiteParser.TypeI16 - 41)) | (1 << (LiteParser.TypeU16 - 41)) | (1 << (LiteParser.TypeI32 - 41)) | (1 << (LiteParser.TypeU32 - 41)) | (1 << (LiteParser.TypeI64 - 41)) | (1 << (LiteParser.TypeU64 - 41)) | (1 << (LiteParser.TypeF32 - 41)) | (1 << (LiteParser.TypeF64 - 41)) | (1 << (LiteParser.TypeChr - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (LiteParser.TypeStr - 73)) | (1 << (LiteParser.TypeBool - 73)) | (1 << (LiteParser.TypeInt - 73)) | (1 << (LiteParser.TypeNum - 73)) | (1 << (LiteParser.TypeByte - 73)) | (1 << (LiteParser.TypeAny - 73)) | (1 << (LiteParser.IDPrivate - 73)) | (1 << (LiteParser.IDPublic - 73)))) !== 0)) {
				{
				this.state = 955;
				this.parameter();
				}
			}

			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 958;
				this.more();
				this.state = 959;
				this.parameter();
				}
				}
				this.state = 965;
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
		this.enterRule(_localctx, 78, LiteParser.RULE_parameterClauseSelf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
			this.id();
			this.state = 967;
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
		this.enterRule(_localctx, 80, LiteParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 969;
				this.annotationSupport();
				}
			}

			this.state = 972;
			this.id();
			this.state = 973;
			this.typeType();
			this.state = 976;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Equal) {
				{
				this.state = 974;
				this.match(LiteParser.Equal);
				this.state = 975;
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
		this.enterRule(_localctx, 82, LiteParser.RULE_functionSupportStatement);
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 978;
				this.returnStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 979;
				this.yieldReturnStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 980;
				this.yieldBreakStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 981;
				this.judgeCaseStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 982;
				this.judgeStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 983;
				this.loopStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 984;
				this.loopEachStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 985;
				this.loopCaseStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 986;
				this.loopJumpStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 987;
				this.loopContinueStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 988;
				this.usingStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 989;
				this.checkStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 990;
				this.functionStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 991;
				this.variableStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 992;
				this.variableDeclaredStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 993;
				this.channelAssignStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 994;
				this.assignStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 995;
				this.expressionStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 996;
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
		this.enterRule(_localctx, 84, LiteParser.RULE_judgeCaseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.expression(0);
			this.state = 1000;
			this.match(LiteParser.Question);
			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1001;
				this.caseStatement();
				}
				}
				this.state = 1004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0));
			this.state = 1006;
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
		this.enterRule(_localctx, 86, LiteParser.RULE_caseStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.caseExprStatement();
			this.state = 1014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1009;
				this.more();
				this.state = 1010;
				this.caseExprStatement();
				}
				}
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1017;
			this.left_brace();
			this.state = 1021;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1018;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1023;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			this.state = 1024;
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
		this.enterRule(_localctx, 88, LiteParser.RULE_caseExprStatement);
		try {
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1026;
				this.match(LiteParser.Discard);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1027;
				this.expression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1030;
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
					{
					this.state = 1028;
					this.id();
					}
					break;
				case LiteParser.Discard:
					{
					this.state = 1029;
					this.match(LiteParser.Discard);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1032;
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
		this.enterRule(_localctx, 90, LiteParser.RULE_judgeStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1054;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1035;
				this.judgeIfStatement();
				this.state = 1039;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1036;
						this.judgeElseIfStatement();
						}
						}
					}
					this.state = 1041;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				}
				this.state = 1042;
				this.judgeElseStatement();
				this.state = 1043;
				this.end();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1045;
				this.judgeIfStatement();
				this.state = 1049;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
					{
					{
					this.state = 1046;
					this.judgeElseIfStatement();
					}
					}
					this.state = 1051;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1052;
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
		this.enterRule(_localctx, 92, LiteParser.RULE_judgeElseStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1056;
			this.match(LiteParser.Discard);
			this.state = 1057;
			this.left_brace();
			this.state = 1061;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1058;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1063;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			}
			this.state = 1064;
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
		this.enterRule(_localctx, 94, LiteParser.RULE_judgeIfStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1066;
			this.match(LiteParser.Question);
			this.state = 1067;
			this.expression(0);
			this.state = 1068;
			this.left_brace();
			this.state = 1072;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1069;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1074;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			}
			this.state = 1075;
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
		this.enterRule(_localctx, 96, LiteParser.RULE_judgeElseIfStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1077;
			this.expression(0);
			this.state = 1078;
			this.left_brace();
			this.state = 1082;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1079;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1084;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			}
			this.state = 1085;
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
		this.enterRule(_localctx, 98, LiteParser.RULE_loopStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			this.id();
			this.state = 1088;
			this.match(LiteParser.At);
			this.state = 1089;
			this.iteratorStatement();
			this.state = 1090;
			this.left_brace();
			this.state = 1094;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1091;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1096;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			}
			this.state = 1097;
			this.right_brace();
			this.state = 1099;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 1098;
				this.loopElseStatement();
				}
			}

			this.state = 1101;
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
		this.enterRule(_localctx, 100, LiteParser.RULE_loopEachStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1103;
				this.id();
				this.state = 1104;
				this.match(LiteParser.Colon);
				}
				break;
			}
			this.state = 1108;
			this.id();
			this.state = 1109;
			this.match(LiteParser.At);
			this.state = 1110;
			this.expression(0);
			this.state = 1111;
			this.left_brace();
			this.state = 1115;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1112;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1117;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			}
			this.state = 1118;
			this.right_brace();
			this.state = 1120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 1119;
				this.loopElseStatement();
				}
			}

			this.state = 1122;
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
		this.enterRule(_localctx, 102, LiteParser.RULE_loopCaseStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1124;
			this.match(LiteParser.At);
			this.state = 1125;
			this.expression(0);
			this.state = 1126;
			this.left_brace();
			this.state = 1130;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1127;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1132;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 1133;
			this.right_brace();
			this.state = 1135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 1134;
				this.loopElseStatement();
				}
			}

			this.state = 1137;
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
	public loopElseStatement(): LoopElseStatementContext {
		let _localctx: LoopElseStatementContext = new LoopElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, LiteParser.RULE_loopElseStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			this.match(LiteParser.Discard);
			this.state = 1140;
			this.left_brace();
			this.state = 1144;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1141;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			this.state = 1147;
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
	public loopJumpStatement(): LoopJumpStatementContext {
		let _localctx: LoopJumpStatementContext = new LoopJumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, LiteParser.RULE_loopJumpStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this.match(LiteParser.At);
			this.state = 1150;
			this.match(LiteParser.Dot_Dot);
			this.state = 1151;
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
		this.enterRule(_localctx, 108, LiteParser.RULE_loopContinueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this.match(LiteParser.Dot_Dot);
			this.state = 1154;
			this.match(LiteParser.At);
			this.state = 1155;
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
		this.enterRule(_localctx, 110, LiteParser.RULE_checkStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1157;
				this.match(LiteParser.Bang);
				this.state = 1158;
				this.left_brace();
				this.state = 1162;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1159;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1164;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				}
				this.state = 1165;
				this.right_brace();
				this.state = 1169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					{
					this.state = 1166;
					this.checkErrorStatement();
					}
					}
					this.state = 1171;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1172;
				this.checkFinallyStatment();
				this.state = 1173;
				this.end();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1175;
				this.match(LiteParser.Bang);
				this.state = 1176;
				this.left_brace();
				this.state = 1180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1177;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1182;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
				}
				this.state = 1183;
				this.right_brace();
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1184;
					this.checkErrorStatement();
					}
					}
					this.state = 1187;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0));
				this.state = 1189;
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
		this.enterRule(_localctx, 112, LiteParser.RULE_usingStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1193;
			this.match(LiteParser.Bang);
			this.state = 1194;
			this.expression(0);
			this.state = 1196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (LiteParser.Less - 38)) | (1 << (LiteParser.Left_Paren - 38)) | (1 << (LiteParser.Left_Brack - 38)) | (1 << (LiteParser.Question - 38)) | (1 << (LiteParser.Bang - 38)) | (1 << (LiteParser.TypeI8 - 38)) | (1 << (LiteParser.TypeU8 - 38)) | (1 << (LiteParser.TypeI16 - 38)) | (1 << (LiteParser.TypeU16 - 38)) | (1 << (LiteParser.TypeI32 - 38)) | (1 << (LiteParser.TypeU32 - 38)) | (1 << (LiteParser.TypeI64 - 38)) | (1 << (LiteParser.TypeU64 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (LiteParser.TypeF32 - 70)) | (1 << (LiteParser.TypeF64 - 70)) | (1 << (LiteParser.TypeChr - 70)) | (1 << (LiteParser.TypeStr - 70)) | (1 << (LiteParser.TypeBool - 70)) | (1 << (LiteParser.TypeInt - 70)) | (1 << (LiteParser.TypeNum - 70)) | (1 << (LiteParser.TypeByte - 70)) | (1 << (LiteParser.TypeAny - 70)) | (1 << (LiteParser.IDPrivate - 70)) | (1 << (LiteParser.IDPublic - 70)))) !== 0)) {
				{
				this.state = 1195;
				this.typeType();
				}
			}

			this.state = 1198;
			this.match(LiteParser.Equal);
			this.state = 1199;
			this.expression(0);
			this.state = 1200;
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
		this.enterRule(_localctx, 114, LiteParser.RULE_checkErrorStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1202;
				this.id();
				}
				break;

			case 2:
				{
				this.state = 1203;
				this.id();
				this.state = 1204;
				this.typeType();
				}
				break;
			}
			this.state = 1208;
			this.left_brace();
			this.state = 1212;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1209;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1214;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
			}
			this.state = 1215;
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
		this.enterRule(_localctx, 116, LiteParser.RULE_checkFinallyStatment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1217;
			this.match(LiteParser.Discard);
			this.state = 1218;
			this.left_brace();
			this.state = 1222;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1219;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1224;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			}
			this.state = 1225;
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
	public iteratorStatement(): IteratorStatementContext {
		let _localctx: IteratorStatementContext = new IteratorStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, LiteParser.RULE_iteratorStatement);
		let _la: number;
		try {
			this.state = 1239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1227;
				this.expression(0);
				this.state = 1228;
				this.match(LiteParser.Dot_Dot);
				this.state = 1229;
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
				this.state = 1230;
				this.expression(0);
				this.state = 1231;
				this.match(LiteParser.Colon);
				this.state = 1232;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1234;
				this.expression(0);
				this.state = 1235;
				this.match(LiteParser.Dot_Dot);
				this.state = 1236;
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
				this.state = 1237;
				this.expression(0);
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
		this.enterRule(_localctx, 120, LiteParser.RULE_variableStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1241;
			this.idExpression();
			this.state = 1243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (LiteParser.Less - 38)) | (1 << (LiteParser.Left_Paren - 38)) | (1 << (LiteParser.Left_Brack - 38)) | (1 << (LiteParser.Question - 38)) | (1 << (LiteParser.Bang - 38)) | (1 << (LiteParser.TypeI8 - 38)) | (1 << (LiteParser.TypeU8 - 38)) | (1 << (LiteParser.TypeI16 - 38)) | (1 << (LiteParser.TypeU16 - 38)) | (1 << (LiteParser.TypeI32 - 38)) | (1 << (LiteParser.TypeU32 - 38)) | (1 << (LiteParser.TypeI64 - 38)) | (1 << (LiteParser.TypeU64 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (LiteParser.TypeF32 - 70)) | (1 << (LiteParser.TypeF64 - 70)) | (1 << (LiteParser.TypeChr - 70)) | (1 << (LiteParser.TypeStr - 70)) | (1 << (LiteParser.TypeBool - 70)) | (1 << (LiteParser.TypeInt - 70)) | (1 << (LiteParser.TypeNum - 70)) | (1 << (LiteParser.TypeByte - 70)) | (1 << (LiteParser.TypeAny - 70)) | (1 << (LiteParser.IDPrivate - 70)) | (1 << (LiteParser.IDPublic - 70)))) !== 0)) {
				{
				this.state = 1242;
				this.typeType();
				}
			}

			this.state = 1245;
			this.match(LiteParser.Equal);
			this.state = 1246;
			this.expression(0);
			this.state = 1247;
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
		this.enterRule(_localctx, 122, LiteParser.RULE_variableDeclaredStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1249;
			this.idExpression();
			this.state = 1250;
			this.typeType();
			this.state = 1251;
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
		this.enterRule(_localctx, 124, LiteParser.RULE_channelAssignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1253;
			this.expression(0);
			this.state = 1254;
			this.match(LiteParser.Dot);
			this.state = 1255;
			this.left_paren();
			this.state = 1256;
			this.match(LiteParser.Left_Arrow);
			this.state = 1257;
			this.right_paren();
			this.state = 1258;
			this.assign();
			this.state = 1259;
			this.expression(0);
			this.state = 1260;
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
		this.enterRule(_localctx, 126, LiteParser.RULE_assignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this.tupleExpression();
			this.state = 1263;
			this.assign();
			this.state = 1264;
			this.tupleExpression();
			this.state = 1265;
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
		this.enterRule(_localctx, 128, LiteParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1267;
			this.expression(0);
			this.state = 1268;
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
	public idExpression(): IdExpressionContext {
		let _localctx: IdExpressionContext = new IdExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, LiteParser.RULE_idExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1270;
			this.idExprItem();
			this.state = 1276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1271;
				this.more();
				this.state = 1272;
				this.idExprItem();
				}
				}
				this.state = 1278;
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
	public idExprItem(): IdExprItemContext {
		let _localctx: IdExprItemContext = new IdExprItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, LiteParser.RULE_idExprItem);
		try {
			this.state = 1281;
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
				this.state = 1279;
				this.id();
				}
				break;
			case LiteParser.Discard:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1280;
				this.match(LiteParser.Discard);
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
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, LiteParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.expression(0);
			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1284;
				this.more();
				this.state = 1285;
				this.expression(0);
				}
				}
				this.state = 1291;
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
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, LiteParser.RULE_primaryExpression);
		try {
			this.state = 1302;
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
				this.state = 1292;
				this.id();
				this.state = 1294;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
				case 1:
					{
					this.state = 1293;
					this.templateCall();
					}
					break;
				}
				}
				break;
			case LiteParser.Discard:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1296;
				_localctx._t = this.match(LiteParser.Discard);
				}
				break;
			case LiteParser.Left_Paren:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1297;
				this.left_paren();
				this.state = 1298;
				this.expression(0);
				this.state = 1299;
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
				this.state = 1301;
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
		let _startState: number = 138;
		this.enterRecursionRule(_localctx, 138, LiteParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1305;
				this.linq();
				}
				break;

			case 2:
				{
				this.state = 1306;
				this.primaryExpression();
				}
				break;

			case 3:
				{
				this.state = 1307;
				this.callNew();
				}
				break;

			case 4:
				{
				this.state = 1308;
				this.callPkg();
				}
				break;

			case 5:
				{
				this.state = 1309;
				this.callAwait();
				}
				break;

			case 6:
				{
				this.state = 1310;
				this.list();
				}
				break;

			case 7:
				{
				this.state = 1311;
				this.set();
				}
				break;

			case 8:
				{
				this.state = 1312;
				this.dictionary();
				}
				break;

			case 9:
				{
				this.state = 1313;
				this.lambda();
				}
				break;

			case 10:
				{
				this.state = 1314;
				this.functionExpression();
				}
				break;

			case 11:
				{
				this.state = 1315;
				this.pkgAnonymous();
				}
				break;

			case 12:
				{
				this.state = 1316;
				this.plusMinus();
				}
				break;

			case 13:
				{
				this.state = 1317;
				this.bitwiseNotExpression();
				}
				break;

			case 14:
				{
				this.state = 1318;
				this.negate();
				}
				break;

			case 15:
				{
				this.state = 1319;
				this.judgeExpression();
				}
				break;

			case 16:
				{
				this.state = 1320;
				this.loopExpression();
				}
				break;

			case 17:
				{
				this.state = 1321;
				this.loopEachExpression();
				}
				break;

			case 18:
				{
				this.state = 1322;
				this.checkExpression();
				}
				break;

			case 19:
				{
				this.state = 1323;
				this.stringExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1366;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1364;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1326;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 1327;
						this.bitwise();
						this.state = 1328;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1330;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 1331;
						this.judge();
						this.state = 1332;
						this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1334;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 1335;
						this.add();
						this.state = 1336;
						this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1338;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1339;
						this.mul();
						this.state = 1340;
						this.expression(4);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1342;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1343;
						this.pow();
						this.state = 1344;
						this.expression(3);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1346;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 1347;
						this.judgeCaseExpression();
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1348;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 1349;
						_localctx._op = this.match(LiteParser.Bang);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1350;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 1351;
						_localctx._op = this.match(LiteParser.Question);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1352;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 1353;
						_localctx._op = this.match(LiteParser.Left_Flow);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1354;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 1355;
						this.typeConversion();
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1356;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 1357;
						this.callFunc();
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1358;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 1359;
						this.callChannel();
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1360;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 1361;
						this.callElement();
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1362;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 1363;
						this.callExpression();
						}
						break;
					}
					}
				}
				this.state = 1368;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
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
		this.enterRule(_localctx, 140, LiteParser.RULE_callExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1369;
			this.call();
			this.state = 1371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1370;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1373;
			this.id();
			this.state = 1375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1374;
				this.templateCall();
				}
				break;
			}
			this.state = 1380;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1377;
				this.callFunc();
				}
				break;

			case 2:
				{
				this.state = 1378;
				this.callChannel();
				}
				break;

			case 3:
				{
				this.state = 1379;
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
		this.enterRule(_localctx, 142, LiteParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1382;
			this.left_paren();
			this.state = 1392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1383;
				this.expression(0);
				this.state = 1389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.Comma) {
					{
					{
					this.state = 1384;
					this.more();
					this.state = 1385;
					this.expression(0);
					}
					}
					this.state = 1391;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1394;
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
		this.enterRule(_localctx, 144, LiteParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1396;
			this.expression(0);
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1397;
				this.more();
				this.state = 1398;
				this.expression(0);
				}
				}
				this.state = 1404;
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
		this.enterRule(_localctx, 146, LiteParser.RULE_annotationSupport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1405;
			this.annotation();
			this.state = 1407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1406;
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
		this.enterRule(_localctx, 148, LiteParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1409;
			this.left_paren();
			this.state = 1413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1410;
				this.id();
				this.state = 1411;
				this.match(LiteParser.Right_Arrow);
				}
				break;
			}
			this.state = 1415;
			this.annotationList();
			this.state = 1416;
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
	public annotationList(): AnnotationListContext {
		let _localctx: AnnotationListContext = new AnnotationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, LiteParser.RULE_annotationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1418;
			this.annotationItem();
			this.state = 1424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1419;
				this.more();
				this.state = 1420;
				this.annotationItem();
				}
				}
				this.state = 1426;
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
		this.enterRule(_localctx, 152, LiteParser.RULE_annotationItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1427;
			this.id();
			this.state = 1440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 1428;
				this.left_paren();
				this.state = 1429;
				this.annotationAssign();
				this.state = 1435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.Comma) {
					{
					{
					this.state = 1430;
					this.more();
					this.state = 1431;
					this.annotationAssign();
					}
					}
					this.state = 1437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1438;
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
		this.enterRule(_localctx, 154, LiteParser.RULE_annotationAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1442;
				this.id();
				this.state = 1443;
				this.match(LiteParser.Equal);
				}
				break;
			}
			this.state = 1447;
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
		this.enterRule(_localctx, 156, LiteParser.RULE_callFunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1451;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Left_Paren:
				{
				this.state = 1449;
				this.tuple();
				}
				break;
			case LiteParser.Left_Brace:
				{
				this.state = 1450;
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
		this.enterRule(_localctx, 158, LiteParser.RULE_callChannel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1453;
			this.match(LiteParser.Dot);
			this.state = 1454;
			this.left_paren();
			this.state = 1455;
			this.match(LiteParser.Left_Arrow);
			this.state = 1456;
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
	public callElement(): CallElementContext {
		let _localctx: CallElementContext = new CallElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, LiteParser.RULE_callElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1458;
			this.match(LiteParser.Dot);
			this.state = 1459;
			this.left_paren();
			this.state = 1462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				{
				this.state = 1460;
				this.slice();
				}
				break;

			case 2:
				{
				this.state = 1461;
				this.expression(0);
				}
				break;
			}
			this.state = 1464;
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
	public callPkg(): CallPkgContext {
		let _localctx: CallPkgContext = new CallPkgContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, LiteParser.RULE_callPkg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1466;
			this.typeType();
			this.state = 1467;
			this.left_brace();
			this.state = 1472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1468;
				this.pkgAssign();
				}
				break;

			case 2:
				{
				this.state = 1469;
				this.listAssign();
				}
				break;

			case 3:
				{
				this.state = 1470;
				this.setAssign();
				}
				break;

			case 4:
				{
				this.state = 1471;
				this.dictionaryAssign();
				}
				break;
			}
			this.state = 1474;
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
		this.enterRule(_localctx, 164, LiteParser.RULE_callNew);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1476;
			this.left_brack();
			this.state = 1477;
			this.typeType();
			this.state = 1478;
			this.right_brack();
			this.state = 1479;
			this.left_paren();
			this.state = 1481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1480;
				this.match(LiteParser.New_Line);
				}
				break;
			}
			this.state = 1484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1483;
				this.expressionList();
				}
			}

			this.state = 1487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1486;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1489;
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
		this.enterRule(_localctx, 166, LiteParser.RULE_typeConversion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1491;
			this.match(LiteParser.Dot);
			this.state = 1492;
			this.left_brack();
			this.state = 1493;
			this.typeType();
			this.state = 1494;
			this.right_brack();
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
		this.enterRule(_localctx, 168, LiteParser.RULE_pkgAssign);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1501;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1496;
					this.pkgAssignElement();
					this.state = 1497;
					this.end();
					}
					}
				}
				this.state = 1503;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
			}
			this.state = 1504;
			this.pkgAssignElement();
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
		this.enterRule(_localctx, 170, LiteParser.RULE_pkgAssignElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1506;
			this.name();
			this.state = 1507;
			this.match(LiteParser.Equal);
			this.state = 1508;
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
		this.enterRule(_localctx, 172, LiteParser.RULE_listAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.expression(0);
			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1511;
				this.more();
				this.state = 1512;
				this.expression(0);
				}
				}
				this.state = 1518;
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
		this.enterRule(_localctx, 174, LiteParser.RULE_setAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1519;
			this.match(LiteParser.Colon);
			this.state = 1520;
			this.expression(0);
			this.state = 1527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1521;
				this.more();
				this.state = 1522;
				this.match(LiteParser.Colon);
				this.state = 1523;
				this.expression(0);
				}
				}
				this.state = 1529;
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
		this.enterRule(_localctx, 176, LiteParser.RULE_dictionaryAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			this.dictionaryElement();
			this.state = 1536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1531;
				this.more();
				this.state = 1532;
				this.dictionaryElement();
				}
				}
				this.state = 1538;
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
		this.enterRule(_localctx, 178, LiteParser.RULE_callAwait);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1539;
			this.match(LiteParser.Left_Flow);
			this.state = 1540;
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
		this.enterRule(_localctx, 180, LiteParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this.left_brace();
			this.state = 1543;
			this.expression(0);
			this.state = 1549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1544;
				this.more();
				this.state = 1545;
				this.expression(0);
				}
				}
				this.state = 1551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1552;
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
		this.enterRule(_localctx, 182, LiteParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1554;
			this.left_brace();
			this.state = 1555;
			this.match(LiteParser.Colon);
			this.state = 1556;
			this.expression(0);
			this.state = 1563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1557;
				this.more();
				this.state = 1558;
				this.match(LiteParser.Colon);
				this.state = 1559;
				this.expression(0);
				}
				}
				this.state = 1565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1566;
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
		this.enterRule(_localctx, 184, LiteParser.RULE_dictionary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1568;
			this.left_brace();
			this.state = 1569;
			this.dictionaryElement();
			this.state = 1575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1570;
				this.more();
				this.state = 1571;
				this.dictionaryElement();
				}
				}
				this.state = 1577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1578;
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
		this.enterRule(_localctx, 186, LiteParser.RULE_dictionaryElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1580;
			this.expression(0);
			this.state = 1581;
			this.match(LiteParser.Colon);
			this.state = 1582;
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
		this.enterRule(_localctx, 188, LiteParser.RULE_slice);
		try {
			this.state = 1587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1584;
				this.sliceFull();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1585;
				this.sliceStart();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1586;
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
		this.enterRule(_localctx, 190, LiteParser.RULE_sliceFull);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1589;
			this.expression(0);
			this.state = 1590;
			this.match(LiteParser.Dot_Dot);
			this.state = 1591;
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
			this.state = 1592;
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
		this.enterRule(_localctx, 192, LiteParser.RULE_sliceStart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1594;
			this.expression(0);
			this.state = 1595;
			this.match(LiteParser.Dot_Dot);
			this.state = 1596;
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
		this.enterRule(_localctx, 194, LiteParser.RULE_sliceEnd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1598;
			this.match(LiteParser.Dot_Dot);
			this.state = 1599;
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
			this.state = 1600;
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
		this.enterRule(_localctx, 196, LiteParser.RULE_nameSpaceItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1609;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1602;
					this.id();
					this.state = 1603;
					this.call();
					this.state = 1605;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === LiteParser.New_Line) {
						{
						this.state = 1604;
						this.match(LiteParser.New_Line);
						}
					}

					}
					}
				}
				this.state = 1611;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			}
			this.state = 1612;
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
		this.enterRule(_localctx, 198, LiteParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1614;
			this.id();
			this.state = 1623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Dot) {
				{
				{
				this.state = 1615;
				this.call();
				this.state = 1617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.New_Line) {
					{
					this.state = 1616;
					this.match(LiteParser.New_Line);
					}
				}

				this.state = 1619;
				this.id();
				}
				}
				this.state = 1625;
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
		this.enterRule(_localctx, 200, LiteParser.RULE_templateDefine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1626;
			this.left_brack();
			this.state = 1627;
			this.templateDefineItem();
			this.state = 1633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1628;
				this.more();
				this.state = 1629;
				this.templateDefineItem();
				}
				}
				this.state = 1635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1636;
			this.right_brack();
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
		this.enterRule(_localctx, 202, LiteParser.RULE_templateDefineItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1638;
			this.id();
			this.state = 1640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
				{
				this.state = 1639;
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
		this.enterRule(_localctx, 204, LiteParser.RULE_templateCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1642;
			this.left_brack();
			this.state = 1643;
			this.typeType();
			this.state = 1649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1644;
				this.more();
				this.state = 1645;
				this.typeType();
				}
				}
				this.state = 1651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1652;
			this.right_brack();
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
		this.enterRule(_localctx, 206, LiteParser.RULE_lambda);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1687;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1654;
				this.left_brace();
				this.state = 1656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					this.state = 1655;
					this.lambdaIn();
					}
				}

				this.state = 1658;
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
				this.state = 1662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.New_Line) {
					{
					{
					this.state = 1659;
					this.match(LiteParser.New_Line);
					}
					}
					this.state = 1664;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1665;
				this.tupleExpression();
				this.state = 1666;
				this.right_brace();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1668;
				this.left_brace();
				this.state = 1670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					this.state = 1669;
					this.lambdaIn();
					}
				}

				this.state = 1672;
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
				this.state = 1676;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1673;
						this.match(LiteParser.New_Line);
						}
						}
					}
					this.state = 1678;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
				}
				this.state = 1682;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1679;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1684;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				}
				this.state = 1685;
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
		this.enterRule(_localctx, 208, LiteParser.RULE_lambdaIn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1689;
			this.id();
			this.state = 1695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1690;
				this.more();
				this.state = 1691;
				this.id();
				}
				}
				this.state = 1697;
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
		this.enterRule(_localctx, 210, LiteParser.RULE_pkgAnonymous);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1698;
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
		this.enterRule(_localctx, 212, LiteParser.RULE_pkgAnonymousAssign);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1700;
			this.left_brace();
			this.state = 1706;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1701;
					this.pkgAnonymousAssignElement();
					this.state = 1702;
					this.end();
					}
					}
				}
				this.state = 1708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
			}
			this.state = 1709;
			this.pkgAnonymousAssignElement();
			this.state = 1710;
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
		this.enterRule(_localctx, 214, LiteParser.RULE_pkgAnonymousAssignElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1712;
			this.name();
			this.state = 1713;
			this.match(LiteParser.Equal);
			this.state = 1714;
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
		this.enterRule(_localctx, 216, LiteParser.RULE_functionExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this.left_paren();
			this.state = 1717;
			this.parameterClauseIn();
			this.state = 1718;
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
			this.state = 1720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.At) {
				{
				this.state = 1719;
				_localctx._y = this.match(LiteParser.At);
				}
			}

			this.state = 1725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1722;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1728;
			this.parameterClauseOut();
			this.state = 1729;
			this.right_paren();
			this.state = 1730;
			this.left_brace();
			this.state = 1734;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1731;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1736;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
			}
			this.state = 1737;
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
	public plusMinus(): PlusMinusContext {
		let _localctx: PlusMinusContext = new PlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, LiteParser.RULE_plusMinus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1739;
			this.add();
			this.state = 1740;
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
		this.enterRule(_localctx, 220, LiteParser.RULE_negate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1742;
			this.wave();
			this.state = 1743;
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
		this.enterRule(_localctx, 222, LiteParser.RULE_bitwiseNotExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1745;
			this.bitwiseNot();
			this.state = 1746;
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
		this.enterRule(_localctx, 224, LiteParser.RULE_linq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1748;
			this.linqHeadKeyword();
			this.state = 1750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1749;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1752;
			this.expression(0);
			this.state = 1753;
			this.match(LiteParser.Right_Arrow);
			this.state = 1755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1754;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1758;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1757;
					this.linqItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1760;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1762;
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
			this.state = 1764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1763;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1766;
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
		this.enterRule(_localctx, 226, LiteParser.RULE_linqItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1768;
			this.linqKeyword();
			this.state = 1770;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeI64 - 68)) | (1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1769;
				this.expression(0);
				}
			}

			this.state = 1772;
			this.match(LiteParser.Right_Arrow);
			this.state = 1774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1773;
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
		this.enterRule(_localctx, 228, LiteParser.RULE_linqKeyword);
		try {
			this.state = 1778;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1776;
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
				this.state = 1777;
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
		this.enterRule(_localctx, 230, LiteParser.RULE_linqHeadKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1780;
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
		this.enterRule(_localctx, 232, LiteParser.RULE_linqBodyKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1782;
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
		this.enterRule(_localctx, 234, LiteParser.RULE_stringExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1784;
			this.match(LiteParser.TextLiteral);
			this.state = 1786;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1785;
					this.stringExpressionElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1788;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
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
		this.enterRule(_localctx, 236, LiteParser.RULE_stringExpressionElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1790;
			this.expression(0);
			this.state = 1791;
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
	public judgeExpression(): JudgeExpressionContext {
		let _localctx: JudgeExpressionContext = new JudgeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, LiteParser.RULE_judgeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1793;
			this.judgeExpressionIfStatement();
			this.state = 1797;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1794;
					this.judgeExpressionElseIfStatement();
					}
					}
				}
				this.state = 1799;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
			}
			this.state = 1800;
			this.judgeExpressionElseStatement();
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
	public judgeExpressionElseStatement(): JudgeExpressionElseStatementContext {
		let _localctx: JudgeExpressionElseStatementContext = new JudgeExpressionElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, LiteParser.RULE_judgeExpressionElseStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1802;
			this.match(LiteParser.Discard);
			this.state = 1803;
			this.left_brace();
			this.state = 1807;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1804;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1809;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
			}
			this.state = 1810;
			this.tupleExpression();
			this.state = 1811;
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
	public judgeExpressionIfStatement(): JudgeExpressionIfStatementContext {
		let _localctx: JudgeExpressionIfStatementContext = new JudgeExpressionIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, LiteParser.RULE_judgeExpressionIfStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1813;
			this.match(LiteParser.Question);
			this.state = 1814;
			this.match(LiteParser.Right_Arrow);
			this.state = 1815;
			this.expression(0);
			this.state = 1816;
			this.left_brace();
			this.state = 1820;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1817;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1822;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 190, this._ctx);
			}
			this.state = 1823;
			this.tupleExpression();
			this.state = 1824;
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
	public judgeExpressionElseIfStatement(): JudgeExpressionElseIfStatementContext {
		let _localctx: JudgeExpressionElseIfStatementContext = new JudgeExpressionElseIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, LiteParser.RULE_judgeExpressionElseIfStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1826;
			this.expression(0);
			this.state = 1827;
			this.left_brace();
			this.state = 1831;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1828;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1833;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
			}
			this.state = 1834;
			this.tupleExpression();
			this.state = 1835;
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
	public judgeCaseExpression(): JudgeCaseExpressionContext {
		let _localctx: JudgeCaseExpressionContext = new JudgeCaseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, LiteParser.RULE_judgeCaseExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1837;
			this.match(LiteParser.Question);
			this.state = 1838;
			this.match(LiteParser.Right_Arrow);
			this.state = 1840;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1839;
					this.caseExpressionStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1842;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
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
	public caseExpressionStatement(): CaseExpressionStatementContext {
		let _localctx: CaseExpressionStatementContext = new CaseExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, LiteParser.RULE_caseExpressionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1844;
			this.caseExprStatement();
			this.state = 1850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1845;
				this.more();
				this.state = 1846;
				this.caseExprStatement();
				}
				}
				this.state = 1852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1853;
			this.left_brace();
			this.state = 1857;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1854;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1859;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
			}
			this.state = 1860;
			this.tupleExpression();
			this.state = 1861;
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
	public loopExpression(): LoopExpressionContext {
		let _localctx: LoopExpressionContext = new LoopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, LiteParser.RULE_loopExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1863;
			this.id();
			this.state = 1864;
			this.match(LiteParser.At);
			this.state = 1865;
			this.match(LiteParser.Right_Arrow);
			this.state = 1866;
			this.iteratorStatement();
			this.state = 1867;
			this.left_brace();
			this.state = 1871;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1868;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
			}
			this.state = 1874;
			this.tupleExpression();
			this.state = 1875;
			this.right_brace();
			this.state = 1877;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				{
				this.state = 1876;
				this.loopElseExpression();
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
	public loopEachExpression(): LoopEachExpressionContext {
		let _localctx: LoopEachExpressionContext = new LoopEachExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, LiteParser.RULE_loopEachExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				{
				this.state = 1879;
				this.id();
				this.state = 1880;
				this.match(LiteParser.Colon);
				}
				break;
			}
			this.state = 1884;
			this.id();
			this.state = 1885;
			this.match(LiteParser.At);
			this.state = 1886;
			this.match(LiteParser.Right_Arrow);
			this.state = 1887;
			this.expression(0);
			this.state = 1888;
			this.left_brace();
			this.state = 1892;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1889;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1894;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			}
			this.state = 1895;
			this.tupleExpression();
			this.state = 1896;
			this.right_brace();
			this.state = 1898;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				{
				this.state = 1897;
				this.loopElseExpression();
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
	public loopElseExpression(): LoopElseExpressionContext {
		let _localctx: LoopElseExpressionContext = new LoopElseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, LiteParser.RULE_loopElseExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1900;
			this.match(LiteParser.Discard);
			this.state = 1901;
			this.left_brace();
			this.state = 1905;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1902;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1907;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			}
			this.state = 1908;
			this.tupleExpression();
			this.state = 1909;
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
	public checkExpression(): CheckExpressionContext {
		let _localctx: CheckExpressionContext = new CheckExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, LiteParser.RULE_checkExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1946;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1911;
				this.match(LiteParser.Bang);
				this.state = 1912;
				this.match(LiteParser.Right_Arrow);
				this.state = 1913;
				this.left_brace();
				this.state = 1917;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1914;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1919;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
				}
				this.state = 1920;
				this.tupleExpression();
				this.state = 1921;
				this.right_brace();
				this.state = 1925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (LiteParser.TypeI8 - 62)) | (1 << (LiteParser.TypeU8 - 62)) | (1 << (LiteParser.TypeI16 - 62)) | (1 << (LiteParser.TypeU16 - 62)) | (1 << (LiteParser.TypeI32 - 62)) | (1 << (LiteParser.TypeU32 - 62)) | (1 << (LiteParser.TypeI64 - 62)) | (1 << (LiteParser.TypeU64 - 62)) | (1 << (LiteParser.TypeF32 - 62)) | (1 << (LiteParser.TypeF64 - 62)) | (1 << (LiteParser.TypeChr - 62)) | (1 << (LiteParser.TypeStr - 62)) | (1 << (LiteParser.TypeBool - 62)) | (1 << (LiteParser.TypeInt - 62)) | (1 << (LiteParser.TypeNum - 62)) | (1 << (LiteParser.TypeByte - 62)) | (1 << (LiteParser.TypeAny - 62)) | (1 << (LiteParser.IDPrivate - 62)) | (1 << (LiteParser.IDPublic - 62)))) !== 0)) {
					{
					{
					this.state = 1922;
					this.checkErrorExpression();
					}
					}
					this.state = 1927;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1928;
				this.checkFinallyStatment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1930;
				this.match(LiteParser.Bang);
				this.state = 1931;
				this.match(LiteParser.Right_Arrow);
				this.state = 1932;
				this.left_brace();
				this.state = 1936;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1933;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1938;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
				}
				this.state = 1939;
				this.tupleExpression();
				this.state = 1940;
				this.right_brace();
				this.state = 1942;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1941;
						this.checkErrorExpression();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1944;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public checkErrorExpression(): CheckErrorExpressionContext {
		let _localctx: CheckErrorExpressionContext = new CheckErrorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, LiteParser.RULE_checkErrorExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1952;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				{
				this.state = 1948;
				this.id();
				}
				break;

			case 2:
				{
				this.state = 1949;
				this.id();
				this.state = 1950;
				this.typeType();
				}
				break;
			}
			this.state = 1954;
			this.left_brace();
			this.state = 1958;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1955;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1960;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
			}
			this.state = 1961;
			this.tupleExpression();
			this.state = 1962;
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
	public dataStatement(): DataStatementContext {
		let _localctx: DataStatementContext = new DataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, LiteParser.RULE_dataStatement);
		try {
			this.state = 1972;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1964;
				this.floatExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1965;
				this.integerExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1966;
				_localctx._t = this.match(LiteParser.TextLiteral);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1967;
				_localctx._t = this.match(LiteParser.CharLiteral);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1968;
				_localctx._t = this.match(LiteParser.TrueLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1969;
				_localctx._t = this.match(LiteParser.FalseLiteral);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1970;
				this.nilExpr();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1971;
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
		this.enterRule(_localctx, 262, LiteParser.RULE_floatExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1974;
			this.integerExpr();
			this.state = 1975;
			this.call();
			this.state = 1976;
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
		this.enterRule(_localctx, 264, LiteParser.RULE_integerExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1978;
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
		this.enterRule(_localctx, 266, LiteParser.RULE_typeNotNull);
		try {
			this.state = 1991;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1980;
				this.typeAny();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1981;
				this.typeTuple();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1982;
				this.typeArray();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1983;
				this.typeList();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1984;
				this.typeSet();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1985;
				this.typeDictionary();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1986;
				this.typeChannel();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1987;
				this.typeStack();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1988;
				this.typeBasic();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1989;
				this.typePackage();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1990;
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
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, LiteParser.RULE_typeType);
		try {
			this.state = 1996;
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
			case LiteParser.Less:
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
				this.state = 1993;
				this.typeNotNull();
				}
				break;
			case LiteParser.Question:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1994;
				this.typeNullable();
				}
				break;
			case LiteParser.Bang:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1995;
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
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, LiteParser.RULE_typeReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1998;
			this.match(LiteParser.Bang);
			this.state = 2001;
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
			case LiteParser.Less:
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
				this.state = 1999;
				this.typeNotNull();
				}
				break;
			case LiteParser.Question:
				{
				this.state = 2000;
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
		this.enterRule(_localctx, 272, LiteParser.RULE_typeNullable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2003;
			this.match(LiteParser.Question);
			this.state = 2004;
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
	public typeTuple(): TypeTupleContext {
		let _localctx: TypeTupleContext = new TypeTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, LiteParser.RULE_typeTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2006;
			this.match(LiteParser.Less);
			this.state = 2007;
			this.typeType();
			this.state = 2011;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2008;
				this.more();
				this.state = 2009;
				this.typeType();
				}
				}
				this.state = 2013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LiteParser.Comma);
			this.state = 2015;
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
	public typeArray(): TypeArrayContext {
		let _localctx: TypeArrayContext = new TypeArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, LiteParser.RULE_typeArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2017;
			this.left_brack();
			this.state = 2018;
			this.match(LiteParser.Colon);
			this.state = 2019;
			this.right_brack();
			this.state = 2020;
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
		this.enterRule(_localctx, 278, LiteParser.RULE_typeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2022;
			this.left_brack();
			this.state = 2023;
			this.right_brack();
			this.state = 2024;
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
		this.enterRule(_localctx, 280, LiteParser.RULE_typeSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2026;
			this.left_brack();
			this.state = 2027;
			this.right_brack();
			this.state = 2028;
			this.match(LiteParser.Colon);
			this.state = 2029;
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
	public typeDictionary(): TypeDictionaryContext {
		let _localctx: TypeDictionaryContext = new TypeDictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, LiteParser.RULE_typeDictionary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2031;
			this.left_brack();
			this.state = 2032;
			this.right_brack();
			this.state = 2033;
			this.typeType();
			this.state = 2034;
			this.match(LiteParser.Colon);
			this.state = 2035;
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
		this.enterRule(_localctx, 284, LiteParser.RULE_typeChannel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2037;
			this.left_brack();
			this.state = 2038;
			this.match(LiteParser.Right_Arrow);
			this.state = 2039;
			this.right_brack();
			this.state = 2040;
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
	public typeStack(): TypeStackContext {
		let _localctx: TypeStackContext = new TypeStackContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, LiteParser.RULE_typeStack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2042;
			this.left_brack();
			this.state = 2043;
			this.match(LiteParser.Xor);
			this.state = 2044;
			this.right_brack();
			this.state = 2045;
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
		this.enterRule(_localctx, 288, LiteParser.RULE_typePackage);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2047;
			this.nameSpaceItem();
			this.state = 2049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 2048;
				this.templateCall();
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
	public typeFunction(): TypeFunctionContext {
		let _localctx: TypeFunctionContext = new TypeFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, LiteParser.RULE_typeFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2051;
			this.left_paren();
			this.state = 2052;
			this.typeFunctionParameterClause();
			this.state = 2053;
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
			this.state = 2055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.At) {
				{
				this.state = 2054;
				_localctx._y = this.match(LiteParser.At);
				}
			}

			this.state = 2060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 2057;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 2062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2063;
			this.typeFunctionParameterClause();
			this.state = 2064;
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
		this.enterRule(_localctx, 292, LiteParser.RULE_typeAny);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2066;
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
		this.enterRule(_localctx, 294, LiteParser.RULE_typeFunctionParameterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (LiteParser.Less - 38)) | (1 << (LiteParser.Left_Paren - 38)) | (1 << (LiteParser.Left_Brack - 38)) | (1 << (LiteParser.Question - 38)) | (1 << (LiteParser.Bang - 38)) | (1 << (LiteParser.TypeI8 - 38)) | (1 << (LiteParser.TypeU8 - 38)) | (1 << (LiteParser.TypeI16 - 38)) | (1 << (LiteParser.TypeU16 - 38)) | (1 << (LiteParser.TypeI32 - 38)) | (1 << (LiteParser.TypeU32 - 38)) | (1 << (LiteParser.TypeI64 - 38)) | (1 << (LiteParser.TypeU64 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (LiteParser.TypeF32 - 70)) | (1 << (LiteParser.TypeF64 - 70)) | (1 << (LiteParser.TypeChr - 70)) | (1 << (LiteParser.TypeStr - 70)) | (1 << (LiteParser.TypeBool - 70)) | (1 << (LiteParser.TypeInt - 70)) | (1 << (LiteParser.TypeNum - 70)) | (1 << (LiteParser.TypeByte - 70)) | (1 << (LiteParser.TypeAny - 70)) | (1 << (LiteParser.IDPrivate - 70)) | (1 << (LiteParser.IDPublic - 70)))) !== 0)) {
				{
				this.state = 2068;
				this.typeType();
				}
			}

			this.state = 2076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 2071;
				this.more();
				this.state = 2072;
				this.typeType();
				}
				}
				this.state = 2078;
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
		this.enterRule(_localctx, 296, LiteParser.RULE_typeBasic);
		try {
			this.state = 2095;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.TypeI8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2079;
				_localctx._t = this.match(LiteParser.TypeI8);
				}
				break;
			case LiteParser.TypeU8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2080;
				_localctx._t = this.match(LiteParser.TypeU8);
				}
				break;
			case LiteParser.TypeI16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2081;
				_localctx._t = this.match(LiteParser.TypeI16);
				}
				break;
			case LiteParser.TypeU16:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2082;
				_localctx._t = this.match(LiteParser.TypeU16);
				}
				break;
			case LiteParser.TypeI32:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2083;
				_localctx._t = this.match(LiteParser.TypeI32);
				}
				break;
			case LiteParser.TypeU32:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2084;
				_localctx._t = this.match(LiteParser.TypeU32);
				}
				break;
			case LiteParser.TypeI64:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2085;
				_localctx._t = this.match(LiteParser.TypeI64);
				}
				break;
			case LiteParser.TypeU64:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2086;
				_localctx._t = this.match(LiteParser.TypeU64);
				}
				break;
			case LiteParser.TypeF32:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2087;
				_localctx._t = this.match(LiteParser.TypeF32);
				}
				break;
			case LiteParser.TypeF64:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2088;
				_localctx._t = this.match(LiteParser.TypeF64);
				}
				break;
			case LiteParser.TypeChr:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2089;
				_localctx._t = this.match(LiteParser.TypeChr);
				}
				break;
			case LiteParser.TypeStr:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2090;
				_localctx._t = this.match(LiteParser.TypeStr);
				}
				break;
			case LiteParser.TypeBool:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2091;
				_localctx._t = this.match(LiteParser.TypeBool);
				}
				break;
			case LiteParser.TypeInt:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2092;
				_localctx._t = this.match(LiteParser.TypeInt);
				}
				break;
			case LiteParser.TypeNum:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2093;
				_localctx._t = this.match(LiteParser.TypeNum);
				}
				break;
			case LiteParser.TypeByte:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2094;
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
		this.enterRule(_localctx, 298, LiteParser.RULE_nilExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2097;
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
		this.enterRule(_localctx, 300, LiteParser.RULE_boolExpr);
		try {
			this.state = 2101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.TrueLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2099;
				_localctx._t = this.match(LiteParser.TrueLiteral);
				}
				break;
			case LiteParser.FalseLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2100;
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
		this.enterRule(_localctx, 302, LiteParser.RULE_judgeType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2103;
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
		this.enterRule(_localctx, 304, LiteParser.RULE_bitwise);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.And:
				{
				this.state = 2105;
				this.bitwiseAnd();
				}
				break;
			case LiteParser.Or:
				{
				this.state = 2106;
				this.bitwiseOr();
				}
				break;
			case LiteParser.Xor:
				{
				this.state = 2107;
				this.bitwiseXor();
				}
				break;
			case LiteParser.Less:
				{
				this.state = 2108;
				this.bitwiseLeftShift();
				}
				break;
			case LiteParser.Greater:
				{
				this.state = 2109;
				this.bitwiseRightShift();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 2112;
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
		this.enterRule(_localctx, 306, LiteParser.RULE_bitwiseAnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2115;
			this.match(LiteParser.And);
			this.state = 2116;
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
		this.enterRule(_localctx, 308, LiteParser.RULE_bitwiseOr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2118;
			this.match(LiteParser.Or);
			this.state = 2119;
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
		this.enterRule(_localctx, 310, LiteParser.RULE_bitwiseNot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2121;
			this.match(LiteParser.Wave);
			this.state = 2122;
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
		this.enterRule(_localctx, 312, LiteParser.RULE_bitwiseXor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2124;
			this.match(LiteParser.Xor);
			this.state = 2125;
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
		this.enterRule(_localctx, 314, LiteParser.RULE_bitwiseLeftShift);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2127;
			this.match(LiteParser.Less);
			this.state = 2128;
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
		this.enterRule(_localctx, 316, LiteParser.RULE_bitwiseRightShift);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2130;
			this.match(LiteParser.Greater);
			this.state = 2131;
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
		this.enterRule(_localctx, 318, LiteParser.RULE_judge);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2133;
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
			this.state = 2135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 2134;
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
		this.enterRule(_localctx, 320, LiteParser.RULE_assign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2137;
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
			this.state = 2139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 2138;
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
		this.enterRule(_localctx, 322, LiteParser.RULE_add);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2141;
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
			this.state = 2143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 2142;
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
		this.enterRule(_localctx, 324, LiteParser.RULE_mul);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2145;
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
			this.state = 2147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 2146;
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
		this.enterRule(_localctx, 326, LiteParser.RULE_pow);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2149;
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
			this.state = 2151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 2150;
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
		this.enterRule(_localctx, 328, LiteParser.RULE_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2153;
			_localctx._op = this.match(LiteParser.Dot);
			this.state = 2155;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				{
				this.state = 2154;
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
		this.enterRule(_localctx, 330, LiteParser.RULE_wave);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2157;
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
		this.enterRule(_localctx, 332, LiteParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2159;
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
		this.enterRule(_localctx, 334, LiteParser.RULE_idItem);
		let _la: number;
		try {
			this.state = 2165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2161;
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
				this.state = 2162;
				this.typeBasic();
				}
				break;
			case LiteParser.TypeAny:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2163;
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
				this.state = 2164;
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
		this.enterRule(_localctx, 336, LiteParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2167;
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
		this.enterRule(_localctx, 338, LiteParser.RULE_more);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2169;
			this.match(LiteParser.Comma);
			this.state = 2173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 2170;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 2175;
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
		this.enterRule(_localctx, 340, LiteParser.RULE_left_brace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			this.match(LiteParser.Left_Brace);
			this.state = 2180;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2177;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 2182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
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
		this.enterRule(_localctx, 342, LiteParser.RULE_right_brace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 2183;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 2188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2189;
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
		this.enterRule(_localctx, 344, LiteParser.RULE_left_paren);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2191;
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
		this.enterRule(_localctx, 346, LiteParser.RULE_right_paren);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2193;
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
		this.enterRule(_localctx, 348, LiteParser.RULE_left_brack);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2195;
			this.match(LiteParser.Left_Brack);
			this.state = 2199;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2196;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 2201;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
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
		this.enterRule(_localctx, 350, LiteParser.RULE_right_brack);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 2202;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2208;
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
		case 69:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03a\u08A5\x04\x02" +
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
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x03\x02\x06\x02\u0164\n\x02" +
		"\r\x02\x0E\x02\u0165\x03\x03\x07\x03\u0169\n\x03\f\x03\x0E\x03\u016C\v" +
		"\x03\x03\x03\x05\x03\u016F\n\x03\x03\x03\x03\x03\x07\x03\u0173\n\x03\f" +
		"\x03\x0E\x03\u0176\v\x03\x03\x03\x07\x03\u0179\n\x03\f\x03\x0E\x03\u017C" +
		"\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\u0182\n\x04\f\x04\x0E\x04" +
		"\u0185\v\x04\x03\x04\x03\x04\x03\x04\x03\x05\x05\x05\u018B\n\x05\x03\x05" +
		"\x03\x05\x05\x05\u018F\n\x05\x05\x05\u0191\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06\u01A2\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x05\t\u01AF\n\t\x03\t" +
		"\x03\t\x03\t\x07\t\u01B4\n\t\f\t\x0E\t\u01B7\v\t\x03\t\x03\t\x03\t\x03" +
		"\t\x07\t\u01BD\n\t\f\t\x0E\t\u01C0\v\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x05\n\u01C8\n\n\x03\n\x05\n\u01CB\n\n\x03\n\x03\n\x03\v\x05\v\u01D0" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u01D8\n\v\x05\v\u01DA\n" +
		"\v\x03\v\x03\v\x03\f\x05\f\u01DF\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u01E5" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x06\f\u01EB\n\f\r\f\x0E\f\u01EC\x03\f\x03" +
		"\f\x05\f\u01F1\n\f\x03\f\x03\f\x03\r\x05\r\u01F6\n\r\x03\r\x03\r\x05\r" +
		"\u01FA\n\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\u0201\n\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u0205\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u020C\n\x0E\x03\x0E\x07\x0E\u020F\n\x0E\f\x0E\x0E\x0E\u0212\v\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0218\n\x0E\f\x0E\x0E\x0E\u021B" +
		"\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u0221\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0225\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0229\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\u022E\n\x0F\f\x0F\x0E\x0F\u0231\v\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\u0236\n\x0F\f\x0F\x0E\x0F\u0239\v\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u0245\n\x10\x03\x11\x03\x11\x03\x11\x03\x12\x05\x12\u024B\n\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0253\n\x12\x03\x12" +
		"\x03\x12\x05\x12\u0257\n\x12\x03\x12\x03\x12\x07\x12\u025B\n\x12\f\x12" +
		"\x0E\x12\u025E\v\x12\x03\x12\x03\x12\x03\x13\x05\x13\u0263\n\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u026B\n\x13\x05\x13\u026D" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u0276\n\x14\x03\x14\x03\x14\x06\x14\u027A\n\x14\r\x14\x0E\x14\u027B\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u028C\n\x16\f\x16\x0E\x16" +
		"\u028F\v\x16\x03\x16\x03\x16\x03\x17\x05\x17\u0294\n\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u029D\n\x17\x03\x17\x03" +
		"\x17\x05\x17\u02A1\n\x17\x03\x17\x03\x17\x07\x17\u02A5\n\x17\f\x17\x0E" +
		"\x17\u02A8\v\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u02B0\n\x18\x03\x18\x07\x18\u02B3\n\x18\f\x18\x0E\x18\u02B6\v\x18\x03" +
		"\x18\x03\x18\x07\x18\u02BA\n\x18\f\x18\x0E\x18\u02BD\v\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02C7\n\x19" +
		"\x03\x1A\x05\x1A\u02CA\n\x1A\x03\x1A\x03\x1A\x05\x1A\u02CE\n\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02D5\n\x1A\x03\x1A\x07\x1A\u02D8" +
		"\n\x1A\f\x1A\x0E\x1A\u02DB\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u02E1\n\x1A\f\x1A\x0E\x1A\u02E4\v\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x05\x1B\u02EA\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02F0\n\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x06\x1B\u02F6\n\x1B\r\x1B\x0E\x1B\u02F7" +
		"\x03\x1B\x03\x1B\x05\x1B\u02FC\n\x1B\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u0301" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0306\n\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u030A\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0311" +
		"\n\x1C\x03\x1C\x07\x1C\u0314\n\x1C\f\x1C\x0E\x1C\u0317\v\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x07\x1C\u031D\n\x1C\f\x1C\x0E\x1C\u0320\v\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x05\x1D\u0326\n\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u032B\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0331\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u0337\n\x1D\r\x1D\x0E\x1D\u0338" +
		"\x03\x1D\x03\x1D\x05\x1D\u033D\n\x1D\x03\x1D\x03\x1D\x03\x1E\x05\x1E\u0342" +
		"\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0346\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x07\x1E\u034C\n\x1E\f\x1E\x0E\x1E\u034F\v\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0358\n\x1F\x03 \x05 \u035B" +
		"\n \x03 \x03 \x03 \x03 \x03 \x03 \x07 \u0363\n \f \x0E \u0366\v \x03 " +
		"\x03 \x05 \u036A\n \x03 \x03 \x03!\x03!\x03\"\x05\"\u0371\n\"\x03\"\x03" +
		"\"\x05\"\u0375\n\"\x03\"\x03\"\x03\"\x03\"\x05\"\u037B\n\"\x03\"\x07\"" +
		"\u037E\n\"\f\"\x0E\"\u0381\v\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x05#" +
		"\u0389\n#\x03#\x03#\x03#\x03#\x03#\x05#\u0390\n#\x03#\x07#\u0393\n#\f" +
		"#\x0E#\u0396\v#\x03#\x03#\x03#\x03#\x07#\u039C\n#\f#\x0E#\u039F\v#\x03" +
		"#\x03#\x03#\x03$\x03$\x05$\u03A6\n$\x03$\x03$\x03%\x03%\x03%\x03%\x03" +
		"%\x03&\x03&\x03&\x03&\x03\'\x05\'\u03B4\n\'\x03\'\x03\'\x03\'\x07\'\u03B9" +
		"\n\'\f\'\x0E\'\u03BC\v\'\x03(\x05(\u03BF\n(\x03(\x03(\x03(\x07(\u03C4" +
		"\n(\f(\x0E(\u03C7\v(\x03)\x03)\x03)\x03*\x05*\u03CD\n*\x03*\x03*\x03*" +
		"\x03*\x05*\u03D3\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u03E8\n+\x03,\x03," +
		"\x03,\x06,\u03ED\n,\r,\x0E,\u03EE\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u03F7" +
		"\n-\f-\x0E-\u03FA\v-\x03-\x03-\x07-\u03FE\n-\f-\x0E-\u0401\v-\x03-\x03" +
		"-\x03.\x03.\x03.\x03.\x05.\u0409\n.\x03.\x05.\u040C\n.\x03/\x03/\x07/" +
		"\u0410\n/\f/\x0E/\u0413\v/\x03/\x03/\x03/\x03/\x03/\x07/\u041A\n/\f/\x0E" +
		"/\u041D\v/\x03/\x03/\x05/\u0421\n/\x030\x030\x030\x070\u0426\n0\f0\x0E" +
		"0\u0429\v0\x030\x030\x031\x031\x031\x031\x071\u0431\n1\f1\x0E1\u0434\v" +
		"1\x031\x031\x032\x032\x032\x072\u043B\n2\f2\x0E2\u043E\v2\x032\x032\x03" +
		"3\x033\x033\x033\x033\x073\u0447\n3\f3\x0E3\u044A\v3\x033\x033\x053\u044E" +
		"\n3\x033\x033\x034\x034\x034\x054\u0455\n4\x034\x034\x034\x034\x034\x07" +
		"4\u045C\n4\f4\x0E4\u045F\v4\x034\x034\x054\u0463\n4\x034\x034\x035\x03" +
		"5\x035\x035\x075\u046B\n5\f5\x0E5\u046E\v5\x035\x035\x055\u0472\n5\x03" +
		"5\x035\x036\x036\x036\x076\u0479\n6\f6\x0E6\u047C\v6\x036\x036\x037\x03" +
		"7\x037\x037\x038\x038\x038\x038\x039\x039\x039\x079\u048B\n9\f9\x0E9\u048E" +
		"\v9\x039\x039\x079\u0492\n9\f9\x0E9\u0495\v9\x039\x039\x039\x039\x039" +
		"\x039\x079\u049D\n9\f9\x0E9\u04A0\v9\x039\x039\x069\u04A4\n9\r9\x0E9\u04A5" +
		"\x039\x039\x059\u04AA\n9\x03:\x03:\x03:\x05:\u04AF\n:\x03:\x03:\x03:\x03" +
		":\x03;\x03;\x03;\x03;\x05;\u04B9\n;\x03;\x03;\x07;\u04BD\n;\f;\x0E;\u04C0" +
		"\v;\x03;\x03;\x03<\x03<\x03<\x07<\u04C7\n<\f<\x0E<\u04CA\v<\x03<\x03<" +
		"\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u04DA" +
		"\n=\x03>\x03>\x05>\u04DE\n>\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03" +
		"B\x03B\x03B\x03C\x03C\x03C\x03C\x07C\u04FD\nC\fC\x0EC\u0500\vC\x03D\x03" +
		"D\x05D\u0504\nD\x03E\x03E\x03E\x03E\x07E\u050A\nE\fE\x0EE\u050D\vE\x03" +
		"F\x03F\x05F\u0511\nF\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0519\nF\x03G" +
		"\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x05G\u052F\nG\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x07G\u0557\nG\fG\x0EG\u055A\vG\x03H\x03H\x05H\u055E" +
		"\nH\x03H\x03H\x05H\u0562\nH\x03H\x03H\x03H\x05H\u0567\nH\x03I\x03I\x03" +
		"I\x03I\x03I\x07I\u056E\nI\fI\x0EI\u0571\vI\x05I\u0573\nI\x03I\x03I\x03" +
		"J\x03J\x03J\x03J\x07J\u057B\nJ\fJ\x0EJ\u057E\vJ\x03K\x03K\x05K\u0582\n" +
		"K\x03L\x03L\x03L\x03L\x05L\u0588\nL\x03L\x03L\x03L\x03M\x03M\x03M\x03" +
		"M\x07M\u0591\nM\fM\x0EM\u0594\vM\x03N\x03N\x03N\x03N\x03N\x03N\x07N\u059C" +
		"\nN\fN\x0EN\u059F\vN\x03N\x03N\x05N\u05A3\nN\x03O\x03O\x03O\x05O\u05A8" +
		"\nO\x03O\x03O\x03P\x03P\x05P\u05AE\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03" +
		"R\x03R\x03R\x05R\u05B9\nR\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x05" +
		"S\u05C3\nS\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x05T\u05CC\nT\x03T\x05T" +
		"\u05CF\nT\x03T\x05T\u05D2\nT\x03T\x03T\x03U\x03U\x03U\x03U\x03U\x03V\x03" +
		"V\x03V\x07V\u05DE\nV\fV\x0EV\u05E1\vV\x03V\x03V\x03W\x03W\x03W\x03W\x03" +
		"X\x03X\x03X\x03X\x07X\u05ED\nX\fX\x0EX\u05F0\vX\x03Y\x03Y\x03Y\x03Y\x03" +
		"Y\x03Y\x07Y\u05F8\nY\fY\x0EY\u05FB\vY\x03Z\x03Z\x03Z\x03Z\x07Z\u0601\n" +
		"Z\fZ\x0EZ\u0604\vZ\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x07\\" +
		"\u060E\n\\\f\\\x0E\\\u0611\v\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03" +
		"]\x03]\x07]\u061C\n]\f]\x0E]\u061F\v]\x03]\x03]\x03^\x03^\x03^\x03^\x03" +
		"^\x07^\u0628\n^\f^\x0E^\u062B\v^\x03^\x03^\x03_\x03_\x03_\x03_\x03`\x03" +
		"`\x03`\x05`\u0636\n`\x03a\x03a\x03a\x03a\x03a\x03b\x03b\x03b\x03b\x03" +
		"c\x03c\x03c\x03c\x03d\x03d\x03d\x05d\u0648\nd\x07d\u064A\nd\fd\x0Ed\u064D" +
		"\vd\x03d\x03d\x03e\x03e\x03e\x05e\u0654\ne\x03e\x03e\x07e\u0658\ne\fe" +
		"\x0Ee\u065B\ve\x03f\x03f\x03f\x03f\x03f\x07f\u0662\nf\ff\x0Ef\u0665\v" +
		"f\x03f\x03f\x03g\x03g\x05g\u066B\ng\x03h\x03h\x03h\x03h\x03h\x07h\u0672" +
		"\nh\fh\x0Eh\u0675\vh\x03h\x03h\x03i\x03i\x05i\u067B\ni\x03i\x03i\x07i" +
		"\u067F\ni\fi\x0Ei\u0682\vi\x03i\x03i\x03i\x03i\x03i\x05i\u0689\ni\x03" +
		"i\x03i\x07i\u068D\ni\fi\x0Ei\u0690\vi\x03i\x07i\u0693\ni\fi\x0Ei\u0696" +
		"\vi\x03i\x03i\x05i\u069A\ni\x03j\x03j\x03j\x03j\x07j\u06A0\nj\fj\x0Ej" +
		"\u06A3\vj\x03k\x03k\x03l\x03l\x03l\x03l\x07l\u06AB\nl\fl\x0El\u06AE\v" +
		"l\x03l\x03l\x03l\x03m\x03m\x03m\x03m\x03n\x03n\x03n\x03n\x05n\u06BB\n" +
		"n\x03n\x07n\u06BE\nn\fn\x0En\u06C1\vn\x03n\x03n\x03n\x03n\x07n\u06C7\n" +
		"n\fn\x0En\u06CA\vn\x03n\x03n\x03o\x03o\x03o\x03p\x03p\x03p\x03q\x03q\x03" +
		"q\x03r\x03r\x05r\u06D9\nr\x03r\x03r\x03r\x05r\u06DE\nr\x03r\x06r\u06E1" +
		"\nr\rr\x0Er\u06E2\x03r\x03r\x05r\u06E7\nr\x03r\x03r\x03s\x03s\x05s\u06ED" +
		"\ns\x03s\x03s\x05s\u06F1\ns\x03t\x03t\x05t\u06F5\nt\x03u\x03u\x03v\x03" +
		"v\x03w\x03w\x06w\u06FD\nw\rw\x0Ew\u06FE\x03x\x03x\x03x\x03y\x03y\x07y" +
		"\u0706\ny\fy\x0Ey\u0709\vy\x03y\x03y\x03z\x03z\x03z\x07z\u0710\nz\fz\x0E" +
		"z\u0713\vz\x03z\x03z\x03z\x03{\x03{\x03{\x03{\x03{\x07{\u071D\n{\f{\x0E" +
		"{\u0720\v{\x03{\x03{\x03{\x03|\x03|\x03|\x07|\u0728\n|\f|\x0E|\u072B\v" +
		"|\x03|\x03|\x03|\x03}\x03}\x03}\x06}\u0733\n}\r}\x0E}\u0734\x03~\x03~" +
		"\x03~\x03~\x07~\u073B\n~\f~\x0E~\u073E\v~\x03~\x03~\x07~\u0742\n~\f~\x0E" +
		"~\u0745\v~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x07\x7F\u0750\n\x7F\f\x7F\x0E\x7F\u0753\v\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x05\x7F\u0758\n\x7F\x03\x80\x03\x80\x03\x80\x05\x80\u075D\n\x80\x03" +
		"\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x07\x80\u0765\n\x80\f\x80" +
		"\x0E\x80\u0768\v\x80\x03\x80\x03\x80\x03\x80\x05\x80\u076D\n\x80\x03\x81" +
		"\x03\x81\x03\x81\x07\x81\u0772\n\x81\f\x81\x0E\x81\u0775\v\x81\x03\x81" +
		"\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82\x03\x82\x07\x82\u077E\n\x82\f" +
		"\x82\x0E\x82\u0781\v\x82\x03\x82\x03\x82\x03\x82\x07\x82\u0786\n\x82\f" +
		"\x82\x0E\x82\u0789\v\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82" +
		"\x07\x82\u0791\n\x82\f\x82\x0E\x82\u0794\v\x82\x03\x82\x03\x82\x03\x82" +
		"\x06\x82\u0799\n\x82\r\x82\x0E\x82\u079A\x05\x82\u079D\n\x82\x03\x83\x03" +
		"\x83\x03\x83\x03\x83\x05\x83\u07A3\n\x83\x03\x83\x03\x83\x07\x83\u07A7" +
		"\n\x83\f\x83\x0E\x83\u07AA\v\x83\x03\x83\x03\x83\x03\x83\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u07B7\n\x84\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u07CA" +
		"\n\x87\x03\x88\x03\x88\x03\x88\x05\x88\u07CF\n\x88\x03\x89\x03\x89\x03" +
		"\x89\x05\x89\u07D4\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x06\x8B\u07DE\n\x8B\r\x8B\x0E\x8B\u07DF\x03\x8B\x03\x8B" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F" +
		"\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x91\x03\x91" +
		"\x03\x91\x03\x91\x03\x91\x03\x92\x03\x92\x05\x92\u0804\n\x92\x03\x93\x03" +
		"\x93\x03\x93\x03\x93\x05\x93\u080A\n\x93\x03\x93\x07\x93\u080D\n\x93\f" +
		"\x93\x0E\x93\u0810\v\x93\x03\x93\x03\x93\x03\x93\x03\x94\x03\x94\x03\x95" +
		"\x05\x95\u0818\n\x95\x03\x95\x03\x95\x03\x95\x07\x95\u081D\n\x95\f\x95" +
		"\x0E\x95\u0820\v\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03" +
		"\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03" +
		"\x96\x05\x96\u0832\n\x96\x03\x97\x03\x97\x03\x98\x03\x98\x05\x98\u0838" +
		"\n\x98\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x05\x9A" +
		"\u0841\n\x9A\x03\x9A\x05\x9A\u0844\n\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9C" +
		"\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9F" +
		"\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x05\xA1\u085A" +
		"\n\xA1\x03\xA2\x03\xA2\x05\xA2\u085E\n\xA2\x03\xA3\x03\xA3\x05\xA3\u0862" +
		"\n\xA3\x03\xA4\x03\xA4\x05\xA4\u0866\n\xA4\x03\xA5\x03\xA5\x05\xA5\u086A" +
		"\n\xA5\x03\xA6\x03\xA6\x05\xA6\u086E\n\xA6\x03\xA7\x03\xA7\x03\xA8\x03" +
		"\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u0878\n\xA9\x03\xAA\x03\xAA" +
		"\x03\xAB\x03\xAB\x07\xAB\u087E\n\xAB\f\xAB\x0E\xAB\u0881\v\xAB\x03\xAC" +
		"\x03\xAC\x07\xAC\u0885\n\xAC\f\xAC\x0E\xAC\u0888\v\xAC\x03\xAD\x07\xAD" +
		"\u088B\n\xAD\f\xAD\x0E\xAD\u088E\v\xAD\x03\xAD\x03\xAD\x03\xAE\x03\xAE" +
		"\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x07\xB0\u0898\n\xB0\f\xB0\x0E\xB0\u089B" +
		"\v\xB0\x03\xB1\x07\xB1\u089E\n\xB1\f\xB1\x0E\xB1\u08A1\v\xB1\x03\xB1\x03" +
		"\xB1\x03\xB1\x02\x02\x03\x8C\xB2\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02" +
		"r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88" +
		"\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A" +
		"\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC" +
		"\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE" +
		"\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0" +
		"\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2" +
		"\x02\xE4\x02\xE6\x02\xE8";
	private static readonly _serializedATNSegment1: string =
		"\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA" +
		"\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02" +
		"\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02" +
		"\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02" +
		"\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02" +
		"\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02" +
		"\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02" +
		"\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02" +
		"\u015E\x02\u0160\x02\x02\x0E\x04\x02##%%\x04\x02\x1B\x1C()\x03\x02\x04" +
		"\x05\x03\x02\x04\x10\x04\x02\x1A\x1A\x1D\x1D\x05\x02\x1A\x1D()=>\x04\x02" +
		"\x14\x18\'\'\x03\x0278\x03\x029;\x03\x02\x11\x13\x03\x02XY\x04\x02**^" +
		"^\x02\u094D\x02\u0163\x03\x02\x02\x02\x04\u016A\x03\x02\x02\x02\x06\u017D" +
		"\x03\x02\x02\x02\b\u018A\x03\x02\x02\x02\n\u01A1\x03\x02\x02\x02\f\u01A3" +
		"\x03\x02\x02\x02\x0E\u01A8\x03\x02\x02\x02\x10\u01AE\x03\x02\x02\x02\x12" +
		"\u01C4\x03\x02\x02\x02\x14\u01CF\x03\x02\x02\x02\x16\u01DE\x03\x02\x02" +
		"\x02\x18\u01F5\x03\x02\x02\x02\x1A\u0200\x03\x02\x02\x02\x1C\u0220\x03" +
		"\x02\x02\x02\x1E\u0244\x03\x02\x02\x02 \u0246\x03\x02\x02\x02\"\u024A" +
		"\x03\x02\x02\x02$\u0262\x03\x02\x02\x02&\u0270\x03\x02\x02\x02(\u0280" +
		"\x03\x02\x02\x02*\u0287\x03\x02\x02\x02,\u0293\x03\x02\x02\x02.\u02AC" +
		"\x03\x02\x02\x020\u02C6\x03\x02\x02\x022\u02C9\x03\x02\x02\x024\u02E9" +
		"\x03\x02\x02\x026\u0300\x03\x02\x02\x028\u0325\x03\x02\x02\x02:\u0341" +
		"\x03\x02\x02\x02<\u0357\x03\x02\x02\x02>\u035A\x03\x02\x02\x02@\u036D" +
		"\x03\x02\x02\x02B\u0370\x03\x02\x02\x02D\u0386\x03\x02\x02\x02F\u03A3" +
		"\x03\x02\x02\x02H\u03A9\x03\x02\x02\x02J\u03AE\x03\x02\x02\x02L\u03B3" +
		"\x03\x02\x02\x02N\u03BE\x03\x02\x02\x02P\u03C8\x03\x02\x02\x02R\u03CC" +
		"\x03\x02\x02\x02T\u03E7\x03\x02\x02\x02V\u03E9\x03\x02\x02\x02X\u03F2" +
		"\x03\x02\x02\x02Z\u040B\x03\x02\x02\x02\\\u0420\x03\x02\x02\x02^\u0422" +
		"\x03\x02\x02\x02`\u042C\x03\x02\x02\x02b\u0437\x03\x02\x02\x02d\u0441" +
		"\x03\x02\x02\x02f\u0454\x03\x02\x02\x02h\u0466\x03\x02\x02\x02j\u0475" +
		"\x03\x02\x02\x02l\u047F\x03\x02\x02\x02n\u0483\x03\x02\x02\x02p\u04A9" +
		"\x03\x02\x02\x02r\u04AB\x03\x02\x02\x02t\u04B8\x03\x02\x02\x02v\u04C3" +
		"\x03\x02\x02\x02x\u04D9\x03\x02\x02\x02z\u04DB\x03\x02\x02\x02|\u04E3" +
		"\x03\x02\x02\x02~\u04E7\x03\x02\x02\x02\x80\u04F0\x03\x02\x02\x02\x82" +
		"\u04F5\x03\x02\x02\x02\x84\u04F8\x03\x02\x02\x02\x86\u0503\x03\x02\x02" +
		"\x02\x88\u0505\x03\x02\x02\x02\x8A\u0518\x03\x02\x02\x02\x8C\u052E\x03" +
		"\x02\x02\x02\x8E\u055B\x03\x02\x02\x02\x90\u0568\x03\x02\x02\x02\x92\u0576" +
		"\x03\x02\x02\x02\x94\u057F\x03\x02\x02\x02\x96\u0583\x03\x02\x02\x02\x98" +
		"\u058C\x03\x02\x02\x02\x9A\u0595\x03\x02\x02\x02\x9C\u05A7\x03\x02\x02" +
		"\x02\x9E\u05AD\x03\x02\x02\x02\xA0\u05AF\x03\x02\x02\x02\xA2\u05B4\x03" +
		"\x02\x02\x02\xA4\u05BC\x03\x02\x02\x02\xA6\u05C6\x03\x02\x02\x02\xA8\u05D5" +
		"\x03\x02\x02\x02\xAA\u05DF\x03\x02\x02\x02\xAC\u05E4\x03\x02\x02\x02\xAE" +
		"\u05E8\x03\x02\x02\x02\xB0\u05F1\x03\x02\x02\x02\xB2\u05FC\x03\x02\x02" +
		"\x02\xB4\u0605\x03\x02\x02\x02\xB6\u0608\x03\x02\x02\x02\xB8\u0614\x03" +
		"\x02\x02\x02\xBA\u0622\x03\x02\x02\x02\xBC\u062E\x03\x02\x02\x02\xBE\u0635" +
		"\x03\x02\x02\x02\xC0\u0637\x03\x02\x02\x02\xC2\u063C\x03\x02\x02\x02\xC4" +
		"\u0640\x03\x02\x02\x02\xC6\u064B\x03\x02\x02\x02\xC8\u0650\x03\x02\x02" +
		"\x02\xCA\u065C\x03\x02\x02\x02\xCC\u0668\x03\x02\x02\x02\xCE\u066C\x03" +
		"\x02\x02\x02\xD0\u0699\x03\x02\x02\x02\xD2\u069B\x03\x02\x02\x02\xD4\u06A4" +
		"\x03\x02\x02\x02\xD6\u06A6\x03\x02\x02\x02\xD8\u06B2\x03\x02\x02\x02\xDA" +
		"\u06B6\x03\x02\x02\x02\xDC\u06CD\x03\x02\x02\x02\xDE\u06D0\x03\x02\x02" +
		"\x02\xE0\u06D3\x03\x02\x02\x02\xE2\u06D6\x03\x02\x02\x02\xE4\u06EA\x03" +
		"\x02\x02\x02\xE6\u06F4\x03\x02\x02\x02\xE8\u06F6\x03\x02\x02\x02\xEA\u06F8" +
		"\x03\x02\x02\x02\xEC\u06FA\x03\x02\x02\x02\xEE\u0700\x03\x02\x02\x02\xF0" +
		"\u0703\x03\x02\x02\x02\xF2\u070C\x03\x02\x02\x02\xF4\u0717\x03\x02\x02" +
		"\x02\xF6\u0724\x03\x02\x02\x02\xF8\u072F\x03\x02\x02\x02\xFA\u0736\x03" +
		"\x02\x02\x02\xFC\u0749\x03\x02\x02\x02\xFE\u075C\x03\x02\x02\x02\u0100" +
		"\u076E\x03\x02\x02\x02\u0102\u079C\x03\x02\x02\x02\u0104\u07A2\x03\x02" +
		"\x02\x02\u0106\u07B6\x03\x02\x02\x02\u0108\u07B8\x03\x02\x02\x02\u010A" +
		"\u07BC\x03\x02\x02\x02\u010C\u07C9\x03\x02\x02\x02\u010E\u07CE\x03\x02" +
		"\x02\x02\u0110\u07D0\x03\x02\x02\x02\u0112\u07D5\x03\x02\x02\x02\u0114" +
		"\u07D8\x03\x02\x02\x02\u0116\u07E3\x03\x02\x02\x02\u0118\u07E8\x03\x02" +
		"\x02\x02\u011A\u07EC\x03\x02\x02\x02\u011C\u07F1\x03\x02\x02\x02\u011E" +
		"\u07F7\x03\x02\x02\x02\u0120\u07FC\x03\x02\x02\x02\u0122\u0801\x03\x02" +
		"\x02\x02\u0124\u0805\x03\x02\x02\x02\u0126\u0814\x03\x02\x02\x02\u0128" +
		"\u0817\x03\x02\x02\x02\u012A\u0831\x03\x02\x02\x02\u012C\u0833\x03\x02" +
		"\x02\x02\u012E\u0837\x03\x02\x02\x02\u0130\u0839\x03\x02\x02\x02\u0132" +
		"\u0840\x03\x02\x02\x02\u0134\u0845\x03\x02\x02\x02\u0136\u0848\x03\x02" +
		"\x02\x02\u0138\u084B\x03\x02\x02\x02\u013A\u084E\x03\x02\x02\x02\u013C" +
		"\u0851\x03\x02\x02\x02\u013E\u0854\x03\x02\x02\x02\u0140\u0857\x03\x02" +
		"\x02\x02\u0142\u085B\x03\x02\x02\x02\u0144\u085F\x03\x02\x02\x02\u0146" +
		"\u0863\x03\x02\x02\x02\u0148\u0867\x03\x02\x02\x02\u014A\u086B\x03\x02" +
		"\x02\x02\u014C\u086F\x03\x02\x02\x02\u014E\u0871\x03\x02\x02\x02\u0150" +
		"\u0877\x03\x02\x02\x02\u0152\u0879\x03\x02\x02\x02\u0154\u087B\x03\x02" +
		"\x02\x02\u0156\u0882\x03\x02\x02\x02\u0158\u088C\x03\x02\x02\x02\u015A" +
		"\u0891\x03\x02\x02\x02\u015C\u0893\x03\x02\x02\x02\u015E\u0895\x03\x02" +
		"\x02\x02\u0160\u089F\x03\x02\x02\x02\u0162\u0164\x05\x04\x03\x02\u0163" +
		"\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0163\x03\x02" +
		"\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\x03\x03\x02\x02\x02\u0167\u0169" +
		"\x07^\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02" +
		"\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016E\x03" +
		"\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u016F\x05\x94K\x02\u016E" +
		"\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03\x02" +
		"\x02\x02\u0170\u0174\x05\x06\x04\x02\u0171\u0173\x07^\x02\x02\u0172\u0171" +
		"\x03\x02\x02\x02\u0173\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02" +
		"\u0174\u0175\x03\x02\x02\x02\u0175\u017A\x03\x02\x02\x02\u0176\u0174\x03" +
		"\x02\x02\x02\u0177\u0179\x05\n\x06\x02\u0178\u0177\x03\x02\x02\x02\u0179" +
		"\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02" +
		"\x02\x02\u017B\x05\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D\u017E" +
		"\x07V\x02\x02\u017E\u0183\x05\u0156\xAC\x02\u017F\u0182\x05\b\x05\x02" +
		"\u0180\u0182\x07^\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0180\x03" +
		"\x02\x02\x02\u0182\u0185\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183" +
		"\u0184\x03\x02\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0183\x03\x02" +
		"\x02\x02\u0186\u0187\x05\u0158\xAD\x02\u0187\u0188\x05\u0152\xAA\x02\u0188" +
		"\x07\x03\x02\x02\x02\u0189\u018B\x05\x94K\x02\u018A\u0189\x03\x02\x02" +
		"\x02\u018A\u018B\x03\x02\x02\x02\u018B\u0190\x03\x02\x02\x02\u018C\u018E" +
		"\x05\u014E\xA8\x02\u018D\u018F\x05\u014A\xA6\x02\u018E\u018D\x03\x02\x02" +
		"\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191\x03\x02\x02\x02\u0190\u018C" +
		"\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02" +
		"\u0192\u0193\x07V\x02\x02\u0193\u0194\x05\u0152\xAA\x02\u0194\t\x03\x02" +
		"\x02\x02\u0195\u01A2\x05\x14\v\x02\u0196\u01A2\x05\x16\f\x02\u0197\u01A2" +
		"\x05\x1A\x0E\x02\u0198\u01A2\x05\x18\r\x02\u0199\u01A2\x05\x1C\x0F\x02" +
		"\u019A\u01A2\x05:\x1E\x02\u019B\u01A2\x05.\x18\x02\u019C\u01A2\x05,\x17" +
		"\x02\u019D\u01A2\x05\x10\t\x02\u019E\u01A2\x05\f\x07\x02\u019F\u01A2\x05" +
		"\x0E\b\x02\u01A0\u01A2\x07^\x02\x02\u01A1\u0195\x03\x02\x02\x02\u01A1" +
		"\u0196\x03\x02\x02\x02\u01A1\u0197\x03\x02\x02\x02\u01A1\u0198\x03\x02" +
		"\x02\x02\u01A1\u0199\x03\x02\x02\x02\u01A1\u019A\x03\x02\x02\x02\u01A1" +
		"\u019B\x03\x02\x02\x02\u01A1\u019C\x03\x02\x02\x02\u01A1\u019D\x03\x02" +
		"\x02\x02\u01A1\u019E\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1" +
		"\u01A0\x03\x02\x02\x02\u01A2\v\x03\x02\x02\x02\u01A3\u01A4\x05\u014E\xA8" +
		"\x02\u01A4\u01A5\x07\"\x02\x02\u01A5\u01A6\x05\u010E\x88\x02\u01A6\u01A7" +
		"\x05\u0152\xAA\x02\u01A7\r\x03\x02\x02\x02\u01A8\u01A9\x05\u014E\xA8\x02" +
		"\u01A9\u01AA\x07\x19\x02\x02\u01AA\u01AB\x05\u010E\x88\x02\u01AB\u01AC" +
		"\x05\u0152\xAA\x02\u01AC\x0F\x03\x02\x02\x02\u01AD\u01AF\x05\x94K\x02" +
		"\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\x03" +
		"\x02\x02\x02\u01B0\u01B1\x05\u014E\xA8\x02\u01B1\u01B5\x07\x19\x02\x02" +
		"\u01B2\u01B4\x07^\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B7\x03" +
		"\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6" +
		"\u01B8\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01B9\x05\u010E" +
		"\x88\x02\u01B9\u01BA\x073\x02\x02\u01BA\u01BE\x05\u0156\xAC\x02\u01BB" +
		"\u01BD\x05\x12\n\x02\u01BC\u01BB\x03\x02\x02\x02\u01BD\u01C0\x03\x02\x02" +
		"\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C1" +
		"\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C2\x05\u0158\xAD" +
		"\x02\u01C2\u01C3\x05\u0152\xAA\x02\u01C3\x11\x03\x02\x02\x02\u01C4\u01CA" +
		"\x05\u014E\xA8\x02\u01C5\u01C7\x07\'\x02\x02\u01C6\u01C8\x05\u0144\xA3" +
		"\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9" +
		"\x03\x02\x02\x02\u01C9\u01CB\x05\u010A\x86\x02\u01CA\u01C5\x03\x02\x02" +
		"\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CD" +
		"\x05\u0152\xAA\x02\u01CD\x13\x03\x02\x02\x02\u01CE\u01D0\x05\x94K\x02" +
		"\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x03" +
		"\x02\x02\x02\u01D1\u01D9\x05\u014E\xA8\x02\u01D2\u01D3\x07\'\x02\x02\u01D3" +
		"\u01DA\x05\x8CG\x02\u01D4\u01D7\x05\u010E\x88\x02\u01D5\u01D6\x07\'\x02" +
		"\x02\u01D6\u01D8\x05\x8CG\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8" +
		"\x03\x02\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01D2\x03\x02\x02\x02" +
		"\u01D9\u01D4\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x05" +
		"\u0152\xAA\x02\u01DC\x15\x03\x02\x02\x02\u01DD\u01DF\x05\x94K\x02\u01DE" +
		"\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02" +
		"\x02\x02\u01E0\u01E1\x05\u014E\xA8\x02\u01E1\u01E2\x072\x02\x02\u01E2" +
		"\u01E4\x05\u015A\xAE\x02\u01E3\u01E5\x05\x8CG\x02\u01E4\u01E3\x03\x02" +
		"\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6" +
		"\u01E7\x05\u015C\xAF\x02\u01E7\u01F0\x05\u010E\x88\x02\u01E8\u01EA\x05" +
		"\u0156\xAC\x02\u01E9\u01EB\x05&\x14\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB" +
		"\u01EC\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02" +
		"\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x05\u0158\xAD\x02\u01EF" +
		"\u01F1\x03\x02\x02\x02\u01F0\u01E8\x03\x02\x02\x02\u01F0\u01F1\x03\x02" +
		"\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x05\u0152\xAA\x02\u01F3" +
		"\x17\x03\x02\x02\x02\u01F4\u01F6\x05\x94K\x02\u01F5\u01F4\x03\x02\x02" +
		"\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9" +
		"\x05\u014E\xA8\x02\u01F8\u01FA\x05\u010E\x88\x02\u01F9\u01F8\x03\x02\x02" +
		"\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC" +
		"\x072\x02\x02\u01FC\u01FD\x05\x8CG\x02\u01FD\u01FE\x05\u0152\xAA\x02\u01FE" +
		"\x19\x03\x02\x02\x02\u01FF\u0201\x05\x94K\x02\u0200\u01FF\x03\x02\x02" +
		"\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0204" +
		"\x05\u014E\xA8\x02\u0203\u0205\x05\xCAf\x02\u0204\u0203\x03\x02\x02\x02" +
		"\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x07" +
		"2\x02\x02\u0207\u0208\x05\u015A\xAE\x02\u0208\u0209\x05L\'\x02\u0209\u020B" +
		"\t\x02\x02\x02\u020A\u020C\x074\x02\x02\u020B\u020A\x03\x02\x02\x02\u020B" +
		"\u020C\x03\x02\x02\x02\u020C\u0210\x03\x02\x02\x02\u020D\u020F\x07^\x02" +
		"\x02\u020E\u020D\x03\x02\x02\x02\u020F\u0212\x03\x02\x02\x02\u0210\u020E" +
		"\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x03\x02\x02\x02" +
		"\u0212\u0210\x03\x02\x02\x02\u0213\u0214\x05N(\x02\u0214\u0215\x05\u015C" +
		"\xAF\x02\u0215\u0219\x05\u0156\xAC\x02\u0216\u0218\x05T+\x02\u0217\u0216" +
		"\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02" +
		"\u0219\u021A\x03\x02\x02\x02\u021A\u021C\x03\x02\x02\x02\u021B\u0219\x03" +
		"\x02\x02\x02\u021C\u021D\x05\u0158\xAD\x02\u021D\u021E\x05\u0152\xAA\x02" +
		"\u021E\x1B\x03\x02\x02\x02\u021F\u0221\x05\x94K\x02\u0220\u021F\x03\x02" +
		"\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222" +
		"\u0224\x05\u014E\xA8\x02\u0223\u0225\x05\xCAf\x02\u0224\u0223\x03\x02" +
		"\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226" +
		"\u0228\x07\x19\x02\x02\u0227\u0229\x05\u014E\xA8\x02\u0228\u0227\x03\x02" +
		"\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A" +
		"\u022B\x07`\x02\x02\u022B\u022F\x05\u0156\xAC\x02\u022C\u022E\x05\x1E" +
		"\x10\x02\u022D\u022C\x03\x02\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F" +
		"\u022D\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0232\x03\x02" +
		"\x02\x02\u0231\u022F\x03\x02\x02\x02\u0232\u0237\x05\u0158\xAD\x02\u0233" +
		"\u0236\x05\"\x12\x02\u0234\u0236\x05*\x16\x02\u0235\u0233\x03\x02\x02" +
		"\x02\u0235\u0234\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u0235" +
		"\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u023A\x03\x02\x02\x02" +
		"\u0239\u0237\x03\x02\x02\x02\u023A\u023B\x05\u0152\xAA\x02\u023B\x1D\x03" +
		"\x02\x02\x02\u023C\u0245\x05 \x11\x02\u023D\u0245\x05$\x13\x02\u023E\u0245" +
		"\x05(\x15\x02\u023F\u0245\x052\x1A\x02\u0240\u0245\x054\x1B\x02\u0241" +
		"\u0245\x056\x1C\x02\u0242\u0245\x058\x1D\x02\u0243\u0245\x07^\x02\x02" +
		"\u0244\u023C\x03\x02\x02\x02\u0244\u023D\x03\x02\x02\x02\u0244\u023E\x03" +
		"\x02\x02\x02\u0244\u023F\x03\x02\x02\x02\u0244\u0240\x03\x02\x02\x02\u0244" +
		"\u0241\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0243\x03\x02" +
		"\x02\x02\u0245\x1F\x03\x02\x02\x02\u0246\u0247\x05\u010E\x88\x02\u0247" +
		"\u0248\x05\u0152\xAA\x02\u0248!\x03\x02\x02\x02\u0249\u024B\x05\x94K\x02" +
		"\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03" +
		"\x02\x02\x02\u024C\u024D\x07a\x02\x02\u024D\u024E\x05\u015A\xAE\x02\u024E" +
		"\u024F\x05L\'\x02\u024F\u0256\x05\u015C\xAF\x02\u0250\u0252\x05\u015A" +
		"\xAE\x02\u0251\u0253\x05\x92J\x02\u0252\u0251\x03\x02\x02\x02\u0252\u0253" +
		"\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x05\u015C\xAF" +
		"\x02\u0255\u0257\x03\x02\x02\x02\u0256\u0250\x03\x02\x02\x02\u0256\u0257" +
		"\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025C\x05\u0156\xAC" +
		"\x02\u0259\u025B\x05T+\x02\u025A\u0259\x03\x02\x02\x02\u025B\u025E\x03" +
		"\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D" +
		"\u025F\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0260\x05\u0158" +
		"\xAD\x02\u0260#\x03\x02\x02\x02\u0261\u0263\x05\x94K\x02\u0262\u0261\x03" +
		"\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264" +
		"\u026C\x05\u014E\xA8\x02\u0265\u0266\x07\'\x02\x02\u0266\u026D\x05\x8C" +
		"G\x02\u0267\u026A\x05\u010E\x88\x02\u0268\u0269\x07\'\x02\x02\u0269\u026B" +
		"\x05\x8CG\x02\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02" +
		"\u026B\u026D\x03\x02\x02\x02\u026C\u0265\x03\x02\x02\x02\u026C\u0267\x03" +
		"\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x05\u0152\xAA\x02" +
		"\u026F%\x03\x02\x02\x02\u0270\u0275\x05\u014E\xA8\x02\u0271\u0272\x05" +
		"\u015A\xAE\x02\u0272\u0273\x05\u014E\xA8\x02\u0273\u0274\x05\u015C\xAF" +
		"\x02\u0274\u0276\x03\x02\x02\x02\u0275\u0271\x03\x02\x02\x02\u0275\u0276" +
		"\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0279\x05\u0156\xAC" +
		"\x02\u0278\u027A\x05T+\x02\u0279\u0278\x03\x02\x02\x02\u027A\u027B\x03" +
		"\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C" +
		"\u027D\x03\x02\x02\x02\u027D\u027E\x05\u0158\xAD\x02\u027E\u027F\x05\u0152" +
		"\xAA\x02\u027F\'\x03\x02\x02\x02\u0280\u0281\x05\u014E\xA8\x02\u0281\u0282" +
		"\x05\u015E\xB0\x02\u0282\u0283\x073\x02\x02\u0283\u0284\x05\u0160\xB1" +
		"\x02\u0284\u0285\x05\xC6d\x02\u0285\u0286\x05\u0152\xAA\x02\u0286)\x03" +
		"\x02\x02\x02\u0287\u0288\x07a\x02\x02\u0288\u0289\x05\u010E\x88\x02\u0289" +
		"\u028D\x05\u0156\xAC\x02\u028A\u028C\x050\x19\x02\u028B\u028A\x03\x02" +
		"\x02\x02\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D" +
		"\u028E\x03\x02\x02\x02\u028E\u0290\x03\x02\x02\x02\u028F\u028D\x03\x02" +
		"\x02\x02\u0290\u0291\x05\u0158\xAD\x02\u0291+\x03\x02\x02\x02\u0292\u0294" +
		"\x05\x94K\x02\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02" +
		"\u0294\u0295\x03\x02\x02\x02\u0295\u0296\x05P)\x02\u0296\u0297\x07a\x02" +
		"\x02\u0297\u0298\x05\u015A\xAE\x02\u0298\u0299\x05L\'\x02\u0299\u02A0" +
		"\x05\u015C\xAF\x02\u029A\u029C\x05\u015A\xAE\x02\u029B\u029D\x05\x92J" +
		"\x02\u029C\u029B\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E" +
		"\x03\x02\x02\x02\u029E\u029F\x05\u015C\xAF\x02\u029F\u02A1\x03\x02\x02" +
		"\x02\u02A0\u029A\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2" +
		"\x03\x02\x02\x02\u02A2\u02A6\x05\u0156\xAC\x02\u02A3\u02A5\x05T+\x02\u02A4" +
		"\u02A3\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A4\x03\x02" +
		"\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A9\x03\x02\x02\x02\u02A8" +
		"\u02A6\x03\x02\x02\x02\u02A9\u02AA\x05\u0158\xAD\x02\u02AA\u02AB\x05\u0152" +
		"\xAA\x02\u02AB-\x03\x02\x02\x02\u02AC\u02AD\x05P)\x02\u02AD\u02AF\x07" +
		"a\x02\x02\u02AE\u02B0\x05\u010E\x88\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF" +
		"\u02B0\x03\x02\x02\x02\u02B0\u02B4\x03\x02\x02\x02\u02B1\u02B3\x07^\x02" +
		"\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B2" +
		"\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x03\x02\x02\x02" +
		"\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02BB\x05\u0156\xAC\x02\u02B8\u02BA" +
		"\x050\x19\x02\u02B9\u02B8\x03\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02" +
		"\u02BB\u02B9\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BE\x03" +
		"\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BE\u02BF\x05\u0158\xAD\x02" +
		"\u02BF\u02C0\x05\u0152\xAA\x02\u02C0/\x03\x02\x02\x02\u02C1\u02C7\x05" +
		"2\x1A\x02\u02C2\u02C7\x054\x1B\x02\u02C3\u02C7\x056\x1C\x02\u02C4\u02C7" +
		"\x058\x1D\x02\u02C5\u02C7\x07^\x02\x02\u02C6\u02C1\x03\x02\x02\x02\u02C6" +
		"\u02C2\x03\x02\x02\x02\u02C6\u02C3\x03\x02\x02\x02\u02C6\u02C4\x03\x02" +
		"\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C71\x03\x02\x02\x02\u02C8\u02CA" +
		"\x05\x94K\x02\u02C9\u02C8\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02" +
		"\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CD\x05\u014E\xA8\x02\u02CC\u02CE" +
		"\x05\xCAf\x02\u02CD\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02" +
		"\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D0\x072\x02\x02\u02D0\u02D1\x05" +
		"\u015A\xAE\x02\u02D1\u02D2\x05L\'\x02\u02D2\u02D4\t\x02\x02\x02\u02D3" +
		"\u02D5\x074\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02" +
		"\x02\u02D5\u02D9\x03\x02\x02\x02\u02D6\u02D8\x07^\x02\x02\u02D7\u02D6" +
		"\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02" +
		"\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB\u02D9\x03" +
		"\x02\x02\x02\u02DC\u02DD\x05N(\x02\u02DD\u02DE\x05\u015C\xAF\x02\u02DE" +
		"\u02E2\x05\u0156\xAC\x02\u02DF\u02E1\x05T+\x02\u02E0\u02DF\x03\x02\x02" +
		"\x02\u02E1\u02E4\x03\x02\x02\x02\u02E2\u02E0\x03\x02\x02\x02\u02E2\u02E3" +
		"\x03\x02\x02\x02\u02E3\u02E5\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02" +
		"\u02E5\u02E6\x05\u0158\xAD\x02\u02E6\u02E7\x05\u0152\xAA\x02\u02E73\x03" +
		"\x02\x02\x02\u02E8\u02EA\x05\x94K\x02\u02E9\u02E8\x03\x02\x02\x02\u02E9" +
		"\u02EA\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x05\u014E" +
		"\xA8\x02\u02EC\u02ED\x072\x02\x02\u02ED\u02EF\x05\u015A\xAE\x02\u02EE" +
		"\u02F0\x05\x8CG\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02" +
		"\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x05\u015C\xAF\x02\u02F2\u02FB" +
		"\x05\u010E\x88\x02\u02F3\u02F5\x05\u0156\xAC\x02\u02F4\u02F6\x05&\x14" +
		"\x02\u02F5\u02F4\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F5" +
		"\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02" +
		"\u02F9\u02FA\x05\u0158\xAD\x02\u02FA\u02FC\x03\x02\x02\x02\u02FB\u02F3" +
		"\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02" +
		"\u02FD\u02FE\x05\u0152\xAA\x02\u02FE5\x03\x02\x02\x02\u02FF\u0301\x05" +
		"\x94K\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301" +
		"\u0302\x03\x02\x02\x02\u0302\u0303\x05\u014E\xA8\x02\u0303\u0305\x07a" +
		"\x02\x02\u0304\u0306\x07Z\x02\x02\u0305\u0304\x03\x02\x02\x02\u0305\u0306" +
		"\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0309\x05\u014E\xA8" +
		"\x02\u0308\u030A\x05\xCAf\x02\u0309\u0308\x03\x02\x02\x02\u0309\u030A" +
		"\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x072\x02\x02" +
		"\u030C\u030D\x05\u015A\xAE\x02\u030D\u030E\x05L\'\x02\u030E\u0310\t\x02" +
		"\x02\x02\u030F\u0311\x074\x02\x02\u0310\u030F\x03\x02\x02\x02\u0310\u0311" +
		"\x03\x02\x02\x02\u0311\u0315\x03\x02\x02\x02\u0312\u0314\x07^\x02\x02" +
		"\u0313\u0312\x03\x02\x02\x02\u0314\u0317\x03\x02\x02\x02\u0315\u0313\x03" +
		"\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0318\x03\x02\x02\x02\u0317" +
		"\u0315\x03\x02\x02\x02\u0318\u0319\x05N(\x02\u0319\u031A\x05\u015C\xAF" +
		"\x02\u031A\u031E\x05\u0156\xAC\x02\u031B\u031D\x05T+\x02\u031C\u031B\x03" +
		"\x02\x02\x02\u031D\u0320\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E" +
		"\u031F\x03\x02\x02\x02\u031F\u0321\x03\x02\x02\x02\u0320\u031E\x03\x02" +
		"\x02\x02\u0321\u0322\x05\u0158\xAD\x02\u0322\u0323\x05\u0152\xAA\x02\u0323" +
		"7\x03\x02\x02\x02\u0324\u0326\x05\x94K\x02\u0325\u0324\x03\x02\x02\x02" +
		"\u0325\u0326\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\u0328\x05" +
		"\u014E\xA8\x02\u0328\u032A\x07a\x02\x02\u0329\u032B\x07Z\x02\x02\u032A" +
		"\u0329\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C\x03\x02" +
		"\x02\x02\u032C\u032D\x05\u014E\xA8\x02\u032D\u032E\x072\x02\x02\u032E" +
		"\u0330\x05\u015A\xAE\x02\u032F\u0331\x05\x8CG\x02\u0330\u032F\x03\x02" +
		"\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332" +
		"\u0333\x05\u015C\xAF\x02\u0333\u033C\x05\u010E\x88\x02\u0334\u0336\x05" +
		"\u0156\xAC\x02\u0335\u0337\x05&\x14\x02\u0336\u0335\x03\x02\x02\x02\u0337" +
		"\u0338\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02" +
		"\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033B\x05\u0158\xAD\x02\u033B" +
		"\u033D\x03\x02\x02\x02\u033C\u0334\x03\x02\x02\x02\u033C\u033D\x03\x02" +
		"\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u033F\x05\u0152\xAA\x02\u033F" +
		"9\x03\x02\x02\x02\u0340\u0342\x05\x94K\x02\u0341\u0340\x03\x02\x02\x02" +
		"\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0345\x05" +
		"\u014E\xA8\x02\u0344\u0346\x05\xCAf\x02\u0345\u0344\x03\x02\x02\x02\u0345" +
		"\u0346\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0348\x07\x19" +
		"\x02\x02\u0348\u0349\x07a\x02\x02\u0349\u034D\x05\u0156\xAC\x02\u034A" +
		"\u034C\x05<\x1F\x02\u034B\u034A\x03\x02\x02\x02\u034C\u034F\x03\x02\x02" +
		"\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u0350" +
		"\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0351\x05\u0158\xAD" +
		"\x02\u0351\u0352\x05\u0152\xAA\x02\u0352;\x03\x02\x02\x02\u0353\u0358" +
		"\x05 \x11\x02\u0354\u0358\x05B\"\x02\u0355\u0358\x05> \x02\u0356\u0358" +
		"\x07^\x02\x02\u0357\u0353\x03\x02\x02\x02\u0357\u0354\x03\x02\x02\x02" +
		"\u0357\u0355\x03\x02\x02\x02\u0357\u0356\x03\x02\x02\x02\u0358=\x03\x02" +
		"\x02\x02\u0359\u035B\x05\x94K\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B" +
		"\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035D\x05\u014E\xA8" +
		"\x02\u035D\u035E\x05\u015A\xAE\x02\u035E\u035F\x05\u015C\xAF\x02\u035F" +
		"\u0369\x05\u010E\x88\x02\u0360\u0364\x05\u0156\xAC\x02\u0361\u0363\x05" +
		"@!\x02\u0362\u0361\x03\x02\x02\x02\u0363\u0366\x03\x02\x02\x02\u0364\u0362" +
		"\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0367\x03\x02\x02\x02" +
		"\u0366\u0364\x03\x02\x02\x02\u0367\u0368\x05\u0158\xAD\x02\u0368\u036A" +
		"\x03\x02\x02\x02\u0369\u0360\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02" +
		"\u036A\u036B\x03\x02\x02\x02\u036B\u036C\x05\u0152\xAA\x02\u036C?\x03" +
		"\x02\x02\x02\u036D";
	private static readonly _serializedATNSegment2: string =
		"\u036E\x05\u014E\xA8\x02\u036EA\x03\x02\x02\x02\u036F\u0371\x05\x94K\x02" +
		"\u0370\u036F\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0372\x03" +
		"\x02\x02\x02\u0372\u0374\x05\u014E\xA8\x02\u0373\u0375\x05\xCAf\x02\u0374" +
		"\u0373\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0376\x03\x02" +
		"\x02\x02\u0376\u0377\x05\u015A\xAE\x02\u0377\u0378\x05L\'\x02\u0378\u037A" +
		"\t\x02\x02\x02\u0379\u037B\x074\x02\x02\u037A\u0379\x03\x02\x02\x02\u037A" +
		"\u037B\x03\x02\x02\x02\u037B\u037F\x03\x02\x02\x02\u037C\u037E\x07^\x02" +
		"\x02\u037D\u037C\x03\x02\x02\x02\u037E\u0381\x03\x02\x02\x02\u037F\u037D" +
		"\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380\u0382\x03\x02\x02\x02" +
		"\u0381\u037F\x03\x02\x02\x02\u0382\u0383\x05N(\x02\u0383\u0384\x05\u015C" +
		"\xAF\x02\u0384\u0385\x05\u0152\xAA\x02\u0385C\x03\x02\x02\x02\u0386\u0388" +
		"\x05\u014E\xA8\x02\u0387\u0389\x05\xCAf\x02\u0388\u0387\x03\x02\x02\x02" +
		"\u0388\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038B\x07" +
		"2\x02\x02\u038B\u038C\x05\u015A\xAE\x02\u038C\u038D\x05L\'\x02\u038D\u038F" +
		"\t\x02\x02\x02\u038E\u0390\x074\x02\x02\u038F\u038E\x03\x02\x02\x02\u038F" +
		"\u0390\x03\x02\x02\x02\u0390\u0394\x03\x02\x02\x02\u0391\u0393\x07^\x02" +
		"\x02\u0392\u0391\x03\x02\x02\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0392" +
		"\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0397\x03\x02\x02\x02" +
		"\u0396\u0394\x03\x02\x02\x02\u0397\u0398\x05N(\x02\u0398\u0399\x05\u015C" +
		"\xAF\x02\u0399\u039D\x05\u0156\xAC\x02\u039A\u039C\x05T+\x02\u039B\u039A" +
		"\x03\x02\x02\x02\u039C\u039F\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02" +
		"\u039D\u039E\x03\x02\x02\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u039D\x03" +
		"\x02\x02\x02\u03A0\u03A1\x05\u0158\xAD\x02\u03A1\u03A2\x05\u0152\xAA\x02" +
		"\u03A2E\x03\x02\x02\x02\u03A3\u03A5\x07$\x02\x02\u03A4\u03A6\x05\x88E" +
		"\x02\u03A5\u03A4\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A7" +
		"\x03\x02\x02\x02\u03A7\u03A8\x05\u0152\xAA\x02\u03A8G\x03\x02\x02\x02" +
		"\u03A9\u03AA\x074\x02\x02\u03AA\u03AB\x07$\x02\x02\u03AB\u03AC\x05\x88" +
		"E\x02\u03AC\u03AD\x05\u0152\xAA\x02\u03ADI\x03\x02\x02\x02\u03AE\u03AF" +
		"\x074\x02\x02\u03AF\u03B0\x07$\x02\x02\u03B0\u03B1\x05\u0152\xAA\x02\u03B1" +
		"K\x03\x02\x02\x02\u03B2\u03B4\x05R*\x02\u03B3\u03B2\x03\x02\x02\x02\u03B3" +
		"\u03B4\x03\x02\x02\x02\u03B4\u03BA\x03\x02\x02\x02\u03B5\u03B6\x05\u0154" +
		"\xAB\x02\u03B6\u03B7\x05R*\x02\u03B7\u03B9\x03\x02\x02\x02\u03B8\u03B5" +
		"\x03\x02\x02\x02\u03B9\u03BC\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02" +
		"\u03BA\u03BB\x03\x02\x02\x02\u03BBM\x03\x02\x02\x02\u03BC\u03BA\x03\x02" +
		"\x02\x02\u03BD\u03BF\x05R*\x02\u03BE\u03BD\x03\x02\x02\x02\u03BE\u03BF" +
		"\x03\x02\x02\x02\u03BF\u03C5\x03\x02\x02\x02\u03C0\u03C1\x05\u0154\xAB" +
		"\x02\u03C1\u03C2\x05R*\x02\u03C2\u03C4\x03\x02\x02\x02\u03C3\u03C0\x03" +
		"\x02\x02\x02\u03C4\u03C7\x03\x02\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5" +
		"\u03C6\x03\x02\x02\x02\u03C6O\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02" +
		"\x02\u03C8\u03C9\x05\u014E\xA8\x02\u03C9\u03CA\x05\u010E\x88\x02\u03CA" +
		"Q\x03\x02\x02\x02\u03CB\u03CD\x05\x94K\x02\u03CC\u03CB\x03\x02\x02\x02" +
		"\u03CC\u03CD\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03CF\x05" +
		"\u014E\xA8\x02\u03CF\u03D2\x05\u010E\x88\x02\u03D0\u03D1\x07\'\x02\x02" +
		"\u03D1\u03D3\x05\x8CG\x02\u03D2\u03D0\x03\x02\x02\x02\u03D2\u03D3\x03" +
		"\x02\x02\x02\u03D3S\x03\x02\x02\x02\u03D4\u03E8\x05F$\x02\u03D5\u03E8" +
		"\x05H%\x02\u03D6\u03E8\x05J&\x02\u03D7\u03E8\x05V,\x02\u03D8\u03E8\x05" +
		"\\/\x02\u03D9\u03E8\x05d3\x02\u03DA\u03E8\x05f4\x02\u03DB\u03E8\x05h5" +
		"\x02\u03DC\u03E8\x05l7\x02\u03DD\u03E8\x05n8\x02\u03DE\u03E8\x05r:\x02" +
		"\u03DF\u03E8\x05p9\x02\u03E0\u03E8\x05D#\x02\u03E1\u03E8\x05z>\x02\u03E2" +
		"\u03E8\x05|?\x02\u03E3\u03E8\x05~@\x02\u03E4\u03E8\x05\x80A\x02\u03E5" +
		"\u03E8\x05\x82B\x02\u03E6\u03E8\x07^\x02\x02\u03E7\u03D4\x03\x02\x02\x02" +
		"\u03E7\u03D5\x03\x02\x02\x02\u03E7\u03D6\x03\x02\x02\x02\u03E7\u03D7\x03" +
		"\x02\x02\x02\u03E7\u03D8\x03\x02\x02\x02\u03E7\u03D9\x03\x02\x02\x02\u03E7" +
		"\u03DA\x03\x02\x02\x02\u03E7\u03DB\x03\x02\x02\x02\u03E7\u03DC\x03\x02" +
		"\x02\x02\u03E7\u03DD\x03\x02\x02\x02\u03E7\u03DE\x03\x02\x02\x02\u03E7" +
		"\u03DF\x03\x02\x02\x02\u03E7\u03E0\x03\x02\x02\x02\u03E7\u03E1\x03\x02" +
		"\x02\x02\u03E7\u03E2\x03\x02\x02\x02\u03E7\u03E3\x03\x02\x02\x02\u03E7" +
		"\u03E4\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E6\x03\x02" +
		"\x02\x02\u03E8U\x03\x02\x02\x02\u03E9\u03EA\x05\x8CG\x02\u03EA\u03EC\x07" +
		"3\x02\x02\u03EB\u03ED\x05X-\x02\u03EC\u03EB\x03\x02\x02\x02\u03ED\u03EE" +
		"\x03\x02\x02\x02\u03EE\u03EC\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02" +
		"\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F1\x05\u0152\xAA\x02\u03F1W\x03" +
		"\x02\x02\x02\u03F2\u03F8\x05Z.\x02\u03F3\u03F4\x05\u0154\xAB\x02\u03F4" +
		"\u03F5\x05Z.\x02\u03F5\u03F7\x03\x02\x02\x02\u03F6\u03F3\x03\x02\x02\x02" +
		"\u03F7\u03FA\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03" +
		"\x02\x02\x02\u03F9\u03FB\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FB" +
		"\u03FF\x05\u0156\xAC\x02\u03FC\u03FE\x05T+\x02\u03FD\u03FC\x03\x02\x02" +
		"\x02\u03FE\u0401\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400" +
		"\x03\x02\x02\x02\u0400\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02" +
		"\u0402\u0403\x05\u0158\xAD\x02\u0403Y\x03\x02\x02\x02\u0404\u040C\x07" +
		"Z\x02\x02\u0405\u040C\x05\x8CG\x02\u0406\u0409\x05\u014E\xA8\x02\u0407" +
		"\u0409\x07Z\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0407\x03\x02\x02" +
		"\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040C\x05\u010E\x88\x02\u040B\u0404" +
		"\x03\x02\x02\x02\u040B\u0405\x03\x02\x02\x02\u040B\u0408\x03\x02\x02\x02" +
		"\u040C[\x03\x02\x02\x02\u040D\u0411\x05`1\x02\u040E\u0410\x05b2\x02\u040F" +
		"\u040E\x03\x02\x02\x02\u0410\u0413\x03\x02\x02\x02\u0411\u040F\x03\x02" +
		"\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412\u0414\x03\x02\x02\x02\u0413" +
		"\u0411\x03\x02\x02\x02\u0414\u0415\x05^0\x02\u0415\u0416\x05\u0152\xAA" +
		"\x02\u0416\u0421\x03\x02\x02\x02\u0417\u041B\x05`1\x02\u0418\u041A\x05" +
		"b2\x02\u0419\u0418\x03\x02\x02\x02\u041A\u041D\x03\x02\x02\x02\u041B\u0419" +
		"\x03\x02\x02\x02\u041B\u041C\x03\x02\x02\x02\u041C\u041E\x03\x02\x02\x02" +
		"\u041D\u041B\x03\x02\x02\x02\u041E\u041F\x05\u0152\xAA\x02\u041F\u0421" +
		"\x03\x02\x02\x02\u0420\u040D\x03\x02\x02\x02\u0420\u0417\x03\x02\x02\x02" +
		"\u0421]\x03\x02\x02\x02\u0422\u0423\x07Z\x02\x02\u0423\u0427\x05\u0156" +
		"\xAC\x02\u0424\u0426\x05T+\x02\u0425\u0424\x03\x02\x02\x02\u0426\u0429" +
		"\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02" +
		"\u0428\u042A\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u042A\u042B\x05" +
		"\u0158\xAD\x02\u042B_\x03\x02\x02\x02\u042C\u042D\x073\x02\x02\u042D\u042E" +
		"\x05\x8CG\x02\u042E\u0432\x05\u0156\xAC\x02\u042F\u0431\x05T+\x02\u0430" +
		"\u042F\x03\x02\x02\x02\u0431\u0434\x03\x02\x02\x02\u0432\u0430\x03\x02" +
		"\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433\u0435\x03\x02\x02\x02\u0434" +
		"\u0432\x03\x02\x02\x02\u0435\u0436\x05\u0158\xAD\x02\u0436a\x03\x02\x02" +
		"\x02\u0437\u0438\x05\x8CG\x02\u0438\u043C\x05\u0156\xAC\x02\u0439\u043B" +
		"\x05T+\x02\u043A\u0439\x03\x02\x02\x02\u043B\u043E\x03\x02\x02\x02\u043C" +
		"\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043F\x03\x02" +
		"\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F\u0440\x05\u0158\xAD\x02\u0440" +
		"c\x03\x02\x02\x02\u0441\u0442\x05\u014E\xA8\x02\u0442\u0443\x074\x02\x02" +
		"\u0443\u0444\x05x=\x02\u0444\u0448\x05\u0156\xAC\x02\u0445\u0447\x05T" +
		"+\x02\u0446\u0445\x03\x02\x02\x02\u0447\u044A\x03\x02\x02\x02\u0448\u0446" +
		"\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044B\x03\x02\x02\x02" +
		"\u044A\u0448\x03\x02\x02\x02\u044B\u044D\x05\u0158\xAD\x02\u044C\u044E" +
		"\x05j6\x02\u044D\u044C\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E" +
		"\u044F\x03\x02\x02\x02\u044F\u0450\x05\u0152\xAA\x02\u0450e\x03\x02\x02" +
		"\x02\u0451\u0452\x05\u014E\xA8\x02\u0452\u0453\x072\x02\x02\u0453\u0455" +
		"\x03\x02\x02\x02\u0454\u0451\x03\x02\x02\x02\u0454\u0455\x03\x02\x02\x02" +
		"\u0455\u0456\x03\x02\x02\x02\u0456\u0457\x05\u014E\xA8\x02\u0457\u0458" +
		"\x074\x02\x02\u0458\u0459\x05\x8CG\x02\u0459\u045D\x05\u0156\xAC\x02\u045A" +
		"\u045C\x05T+\x02\u045B\u045A\x03\x02\x02\x02\u045C\u045F\x03\x02\x02\x02" +
		"\u045D\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u0460\x03" +
		"\x02\x02\x02\u045F\u045D\x03\x02\x02\x02\u0460\u0462\x05\u0158\xAD\x02" +
		"\u0461\u0463\x05j6\x02\u0462\u0461\x03\x02\x02\x02\u0462\u0463\x03\x02" +
		"\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u0465\x05\u0152\xAA\x02\u0465" +
		"g\x03\x02\x02\x02\u0466\u0467\x074\x02\x02\u0467\u0468\x05\x8CG\x02\u0468" +
		"\u046C\x05\u0156\xAC\x02\u0469\u046B\x05T+\x02\u046A\u0469\x03\x02\x02" +
		"\x02\u046B\u046E\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D" +
		"\x03\x02\x02\x02\u046D\u046F\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02" +
		"\u046F\u0471\x05\u0158\xAD\x02\u0470\u0472\x05j6\x02\u0471\u0470\x03\x02" +
		"\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473" +
		"\u0474\x05\u0152\xAA\x02\u0474i\x03\x02\x02\x02\u0475\u0476\x07Z\x02\x02" +
		"\u0476\u047A\x05\u0156\xAC\x02\u0477\u0479\x05T+\x02\u0478\u0477\x03\x02" +
		"\x02\x02\u0479\u047C\x03\x02\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A" +
		"\u047B\x03\x02\x02\x02\u047B\u047D\x03\x02\x02\x02\u047C\u047A\x03\x02" +
		"\x02\x02\u047D\u047E\x05\u0158\xAD\x02\u047Ek\x03\x02\x02\x02\u047F\u0480" +
		"\x074\x02\x02\u0480\u0481\x07\x1F\x02\x02\u0481\u0482\x05\u0152\xAA\x02" +
		"\u0482m\x03\x02\x02\x02\u0483\u0484\x07\x1F\x02\x02\u0484\u0485\x074\x02" +
		"\x02\u0485\u0486\x05\u0152\xAA\x02\u0486o\x03\x02\x02\x02\u0487\u0488" +
		"\x075\x02\x02\u0488\u048C\x05\u0156\xAC\x02\u0489\u048B\x05T+\x02\u048A" +
		"\u0489\x03\x02\x02\x02\u048B\u048E\x03\x02\x02\x02\u048C\u048A\x03\x02" +
		"\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\u048F\x03\x02\x02\x02\u048E" +
		"\u048C\x03\x02\x02\x02\u048F\u0493\x05\u0158\xAD\x02\u0490\u0492\x05t" +
		";\x02\u0491\u0490\x03\x02\x02\x02\u0492\u0495\x03\x02\x02\x02\u0493\u0491" +
		"\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u0496\x03\x02\x02\x02" +
		"\u0495\u0493\x03\x02\x02\x02\u0496\u0497\x05v<\x02\u0497\u0498\x05\u0152" +
		"\xAA\x02\u0498\u04AA\x03\x02\x02\x02\u0499\u049A\x075\x02\x02\u049A\u049E" +
		"\x05\u0156\xAC\x02\u049B\u049D\x05T+\x02\u049C\u049B\x03\x02\x02\x02\u049D" +
		"\u04A0\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02\u049E\u049F\x03\x02" +
		"\x02\x02\u049F\u04A1\x03\x02\x02\x02\u04A0\u049E\x03\x02\x02\x02\u04A1" +
		"\u04A3\x05\u0158\xAD\x02\u04A2\u04A4\x05t;\x02\u04A3\u04A2\x03\x02\x02" +
		"\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A5\u04A6" +
		"\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04A8\x05\u0152\xAA" +
		"\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9\u0487\x03\x02\x02\x02\u04A9\u0499" +
		"\x03\x02\x02\x02\u04AAq\x03\x02\x02\x02\u04AB\u04AC\x075\x02\x02\u04AC" +
		"\u04AE\x05\x8CG\x02\u04AD\u04AF\x05\u010E\x88\x02\u04AE\u04AD\x03\x02" +
		"\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0" +
		"\u04B1\x07\'\x02\x02\u04B1\u04B2\x05\x8CG\x02\u04B2\u04B3\x05\u0152\xAA" +
		"\x02\u04B3s\x03\x02\x02\x02\u04B4\u04B9\x05\u014E\xA8\x02\u04B5\u04B6" +
		"\x05\u014E\xA8\x02\u04B6\u04B7\x05\u010E\x88\x02\u04B7\u04B9\x03\x02\x02" +
		"\x02\u04B8\u04B4\x03\x02\x02\x02\u04B8\u04B5\x03\x02\x02\x02\u04B9\u04BA" +
		"\x03\x02\x02\x02\u04BA\u04BE\x05\u0156\xAC\x02\u04BB\u04BD\x05T+\x02\u04BC" +
		"\u04BB\x03\x02\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04BC\x03\x02" +
		"\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C1\x03\x02\x02\x02\u04C0" +
		"\u04BE\x03\x02\x02\x02\u04C1\u04C2\x05\u0158\xAD\x02\u04C2u\x03\x02\x02" +
		"\x02\u04C3\u04C4\x07Z\x02\x02\u04C4\u04C8\x05\u0156\xAC\x02\u04C5\u04C7" +
		"\x05T+\x02\u04C6\u04C5\x03\x02\x02\x02\u04C7\u04CA\x03\x02\x02\x02\u04C8" +
		"\u04C6\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CB\x03\x02" +
		"\x02\x02\u04CA\u04C8\x03\x02\x02\x02\u04CB\u04CC\x05\u0158\xAD\x02\u04CC" +
		"w\x03\x02\x02\x02\u04CD\u04CE\x05\x8CG\x02\u04CE\u04CF\x07\x1F\x02\x02" +
		"\u04CF\u04D0\t\x03\x02\x02\u04D0\u04D1\x05\x8CG\x02\u04D1\u04D2\x072\x02" +
		"\x02\u04D2\u04D3\x05\x8CG\x02\u04D3\u04DA\x03\x02\x02\x02\u04D4\u04D5" +
		"\x05\x8CG\x02\u04D5\u04D6\x07\x1F\x02\x02\u04D6\u04D7\t\x03\x02\x02\u04D7" +
		"\u04D8\x05\x8CG\x02\u04D8\u04DA\x03\x02\x02\x02\u04D9\u04CD\x03\x02\x02" +
		"\x02\u04D9\u04D4\x03\x02\x02\x02\u04DAy\x03\x02\x02\x02\u04DB\u04DD\x05" +
		"\x84C\x02\u04DC\u04DE\x05\u010E\x88\x02\u04DD\u04DC\x03\x02\x02\x02\u04DD" +
		"\u04DE\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E0\x07\'\x02" +
		"\x02\u04E0\u04E1\x05\x8CG\x02\u04E1\u04E2\x05\u0152\xAA\x02\u04E2{\x03" +
		"\x02\x02\x02\u04E3\u04E4\x05\x84C\x02\u04E4\u04E5\x05\u010E\x88\x02\u04E5" +
		"\u04E6\x05\u0152\xAA\x02\u04E6}\x03\x02\x02\x02\u04E7\u04E8\x05\x8CG\x02" +
		"\u04E8\u04E9\x07 \x02\x02\u04E9\u04EA\x05\u015A\xAE\x02\u04EA\u04EB\x07" +
		"$\x02\x02\u04EB\u04EC\x05\u015C\xAF\x02\u04EC\u04ED\x05\u0142\xA2\x02" +
		"\u04ED\u04EE\x05\x8CG\x02\u04EE\u04EF\x05\u0152\xAA\x02\u04EF\x7F\x03" +
		"\x02\x02\x02\u04F0\u04F1\x05\x88E\x02\u04F1\u04F2\x05\u0142\xA2\x02\u04F2" +
		"\u04F3\x05\x88E\x02\u04F3\u04F4\x05\u0152\xAA\x02\u04F4\x81\x03\x02\x02" +
		"\x02\u04F5\u04F6\x05\x8CG\x02\u04F6\u04F7\x05\u0152\xAA\x02\u04F7\x83" +
		"\x03\x02\x02\x02\u04F8\u04FE\x05\x86D\x02\u04F9\u04FA\x05\u0154\xAB\x02" +
		"\u04FA\u04FB\x05\x86D\x02\u04FB\u04FD\x03\x02\x02\x02\u04FC\u04F9\x03" +
		"\x02\x02\x02\u04FD\u0500\x03\x02\x02\x02\u04FE\u04FC\x03\x02\x02\x02\u04FE" +
		"\u04FF\x03\x02\x02\x02\u04FF\x85\x03\x02\x02\x02\u0500\u04FE\x03\x02\x02" +
		"\x02\u0501\u0504\x05\u014E\xA8\x02\u0502\u0504\x07Z\x02\x02\u0503\u0501" +
		"\x03\x02\x02\x02\u0503\u0502\x03\x02\x02\x02\u0504\x87\x03\x02\x02\x02" +
		"\u0505\u050B\x05\x8CG\x02\u0506\u0507\x05\u0154\xAB\x02\u0507\u0508\x05" +
		"\x8CG\x02\u0508\u050A\x03\x02\x02\x02\u0509\u0506\x03\x02\x02\x02\u050A" +
		"\u050D\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02" +
		"\x02\x02\u050C\x89\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02\u050E\u0510" +
		"\x05\u014E\xA8\x02\u050F\u0511\x05\xCEh\x02\u0510\u050F\x03\x02\x02\x02" +
		"\u0510\u0511\x03\x02\x02\x02\u0511\u0519\x03\x02\x02\x02\u0512\u0519\x07" +
		"Z\x02\x02\u0513\u0514\x05\u015A\xAE\x02\u0514\u0515\x05\x8CG\x02\u0515" +
		"\u0516\x05\u015C\xAF\x02\u0516\u0519\x03\x02\x02\x02\u0517\u0519\x05\u0106" +
		"\x84\x02\u0518\u050E\x03\x02\x02\x02\u0518\u0512\x03\x02\x02\x02\u0518" +
		"\u0513\x03\x02\x02\x02\u0518\u0517\x03\x02\x02\x02\u0519\x8B\x03\x02\x02" +
		"\x02\u051A\u051B\bG\x01\x02\u051B\u052F\x05\xE2r\x02\u051C\u052F\x05\x8A" +
		"F\x02\u051D\u052F\x05\xA6T\x02\u051E\u052F\x05\xA4S\x02\u051F\u052F\x05" +
		"\xB4[\x02\u0520\u052F\x05\xB6\\\x02\u0521\u052F\x05\xB8]\x02\u0522\u052F" +
		"\x05\xBA^\x02\u0523\u052F\x05\xD0i\x02\u0524\u052F\x05\xDAn\x02\u0525" +
		"\u052F\x05\xD4k\x02\u0526\u052F\x05\xDCo\x02\u0527\u052F\x05\xE0q\x02" +
		"\u0528\u052F\x05\xDEp\x02\u0529\u052F\x05\xF0y\x02\u052A\u052F\x05\xFC" +
		"\x7F\x02\u052B\u052F\x05\xFE\x80\x02\u052C\u052F\x05\u0102\x82\x02\u052D" +
		"\u052F\x05\xECw\x02\u052E\u051A\x03\x02\x02\x02\u052E\u051C\x03\x02\x02" +
		"\x02\u052E\u051D\x03\x02\x02\x02\u052E\u051E\x03\x02\x02\x02\u052E\u051F" +
		"\x03\x02\x02\x02\u052E\u0520\x03\x02\x02\x02\u052E\u0521\x03\x02\x02\x02" +
		"\u052E\u0522\x03\x02\x02\x02\u052E\u0523\x03\x02\x02\x02\u052E\u0524\x03" +
		"\x02\x02\x02\u052E\u0525\x03\x02\x02\x02\u052E\u0526\x03\x02\x02\x02\u052E" +
		"\u0527\x03\x02\x02\x02\u052E\u0528\x03\x02\x02\x02\u052E\u0529\x03\x02" +
		"\x02\x02\u052E\u052A\x03\x02\x02\x02\u052E\u052B\x03\x02\x02\x02\u052E" +
		"\u052C\x03\x02\x02\x02\u052E\u052D\x03\x02\x02\x02\u052F\u0558\x03\x02" +
		"\x02\x02\u0530\u0531\f\b\x02\x02\u0531\u0532\x05\u0132\x9A\x02\u0532\u0533" +
		"\x05\x8CG\t\u0533\u0557\x03\x02\x02\x02\u0534\u0535\f\x07\x02\x02\u0535" +
		"\u0536\x05\u0140\xA1\x02\u0536\u0537\x05\x8CG\b\u0537\u0557\x03\x02\x02" +
		"\x02\u0538\u0539\f\x06\x02\x02\u0539\u053A\x05\u0144\xA3\x02\u053A\u053B" +
		"\x05\x8CG\x07\u053B\u0557\x03\x02\x02\x02\u053C\u053D\f\x05\x02\x02\u053D" +
		"\u053E\x05\u0146\xA4\x02\u053E\u053F\x05\x8CG\x06\u053F\u0557\x03\x02" +
		"\x02\x02\u0540\u0541\f\x04\x02\x02\u0541\u0542\x05\u0148\xA5\x02\u0542" +
		"\u0543\x05\x8CG\x05\u0543\u0557\x03\x02\x02\x02\u0544\u0545\f\x11\x02" +
		"\x02\u0545\u0557\x05\xF8}\x02\u0546\u0547\f\x10\x02\x02\u0547\u0557\x07" +
		"5\x02\x02\u0548\u0549\f\x0F\x02\x02\u0549\u0557\x073\x02\x02\u054A\u054B" +
		"\f\x0E\x02\x02\u054B\u0557\x07&\x02\x02\u054C\u054D\f\r\x02\x02\u054D" +
		"\u0557\x05\xA8U\x02\u054E\u054F\f\f\x02\x02\u054F\u0557\x05\x9EP\x02\u0550" +
		"\u0551\f\v\x02\x02\u0551\u0557\x05\xA0Q\x02\u0552\u0553\f\n\x02\x02\u0553" +
		"\u0557\x05\xA2R\x02\u0554\u0555\f\t\x02\x02\u0555\u0557\x05\x8EH\x02\u0556" +
		"\u0530\x03\x02\x02\x02\u0556\u0534\x03\x02\x02\x02\u0556\u0538\x03\x02" +
		"\x02\x02\u0556\u053C\x03\x02\x02\x02\u0556\u0540\x03\x02\x02\x02\u0556" +
		"\u0544\x03\x02\x02\x02\u0556\u0546\x03\x02\x02\x02\u0556\u0548\x03\x02" +
		"\x02\x02\u0556\u054A\x03\x02\x02\x02\u0556\u054C\x03\x02\x02\x02\u0556" +
		"\u054E\x03\x02\x02\x02\u0556\u0550\x03\x02\x02\x02\u0556\u0552\x03\x02" +
		"\x02\x02\u0556\u0554\x03\x02\x02\x02\u0557\u055A\x03\x02\x02\x02\u0558" +
		"\u0556\x03\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\x8D\x03\x02\x02" +
		"\x02\u055A\u0558\x03\x02\x02\x02\u055B\u055D\x05\u014A\xA6\x02\u055C\u055E" +
		"\x07^\x02\x02\u055D\u055C\x03\x02\x02\x02\u055D\u055E\x03\x02\x02\x02" +
		"\u055E\u055F\x03\x02\x02\x02\u055F\u0561\x05\u014E\xA8\x02\u0560\u0562" +
		"\x05\xCEh\x02\u0561\u0560\x03\x02\x02\x02\u0561\u0562\x03\x02\x02\x02" +
		"\u0562\u0566\x03\x02\x02\x02\u0563\u0567\x05\x9EP\x02\u0564\u0567\x05" +
		"\xA0Q\x02\u0565\u0567\x05\xA2R\x02\u0566\u0563\x03\x02\x02\x02\u0566\u0564" +
		"\x03\x02\x02\x02\u0566\u0565\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02" +
		"\u0567\x8F\x03\x02\x02\x02\u0568\u0572\x05\u015A\xAE\x02\u0569\u056F\x05" +
		"\x8CG\x02\u056A\u056B\x05\u0154\xAB\x02\u056B\u056C\x05\x8CG\x02\u056C" +
		"\u056E\x03\x02\x02\x02\u056D\u056A\x03\x02\x02\x02\u056E\u0571\x03\x02" +
		"\x02\x02\u056F\u056D\x03\x02\x02\x02\u056F\u0570\x03\x02\x02\x02\u0570" +
		"\u0573\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02\u0572\u0569\x03\x02" +
		"\x02\x02\u0572\u0573\x03\x02\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574" +
		"\u0575\x05\u015C\xAF\x02\u0575\x91\x03\x02\x02\x02\u0576\u057C\x05\x8C" +
		"G\x02\u0577\u0578\x05\u0154\xAB\x02\u0578\u0579\x05\x8CG\x02\u0579\u057B" +
		"\x03\x02\x02\x02\u057A\u0577\x03\x02\x02\x02\u057B\u057E\x03\x02\x02\x02" +
		"\u057C\u057A\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D\x93\x03" +
		"\x02\x02\x02\u057E\u057C\x03\x02\x02\x02\u057F\u0581\x05\x96L\x02\u0580" +
		"\u0582\x07^\x02\x02\u0581\u0580\x03\x02\x02\x02\u0581\u0582\x03\x02\x02" +
		"\x02\u0582\x95\x03\x02\x02\x02\u0583\u0587\x05\u015A\xAE\x02\u0584\u0585" +
		"\x05\u014E\xA8\x02\u0585\u0586\x07#\x02\x02\u0586\u0588\x03\x02\x02\x02" +
		"\u0587\u0584\x03\x02\x02\x02\u0587\u0588\x03\x02\x02\x02\u0588\u0589\x03" +
		"\x02\x02\x02\u0589\u058A\x05\x98M\x02\u058A\u058B\x05\u015C\xAF\x02\u058B" +
		"\x97\x03\x02\x02\x02\u058C\u0592\x05\x9AN\x02\u058D\u058E\x05\u0154\xAB" +
		"\x02\u058E\u058F\x05\x9AN\x02\u058F\u0591\x03\x02\x02\x02\u0590\u058D" +
		"\x03\x02\x02\x02\u0591\u0594\x03\x02\x02\x02\u0592\u0590\x03\x02\x02\x02" +
		"\u0592\u0593\x03\x02\x02\x02\u0593\x99\x03\x02\x02\x02\u0594\u0592\x03" +
		"\x02\x02\x02\u0595\u05A2\x05\u014E\xA8\x02\u0596\u0597\x05\u015A\xAE\x02" +
		"\u0597\u059D\x05\x9CO\x02\u0598\u0599\x05\u0154\xAB\x02\u0599\u059A\x05" +
		"\x9CO\x02\u059A\u059C\x03\x02\x02\x02\u059B\u0598\x03\x02\x02\x02\u059C" +
		"\u059F\x03\x02\x02\x02\u059D\u059B\x03\x02\x02\x02\u059D\u059E\x03\x02" +
		"\x02\x02\u059E\u05A0\x03\x02\x02\x02\u059F\u059D\x03\x02\x02\x02\u05A0" +
		"\u05A1\x05\u015C\xAF\x02\u05A1\u05A3\x03\x02\x02\x02\u05A2\u0596\x03\x02" +
		"\x02\x02\u05A2\u05A3\x03\x02\x02\x02\u05A3\x9B\x03\x02\x02\x02\u05A4\u05A5" +
		"\x05\u014E\xA8\x02\u05A5\u05A6\x07\'\x02\x02\u05A6\u05A8\x03\x02\x02\x02" +
		"\u05A7\u05A4\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05A9\x03" +
		"\x02\x02\x02\u05A9\u05AA\x05\x8CG\x02\u05AA\x9D\x03\x02\x02\x02\u05AB" +
		"\u05AE\x05\x90I\x02\u05AC\u05AE\x05\xD0i\x02\u05AD\u05AB\x03\x02\x02\x02" +
		"\u05AD\u05AC\x03\x02\x02\x02\u05AE\x9F\x03\x02\x02\x02\u05AF\u05B0\x07" +
		" \x02\x02\u05B0\u05B1\x05\u015A\xAE\x02\u05B1\u05B2\x07$\x02\x02\u05B2" +
		"\u05B3\x05\u015C\xAF\x02\u05B3\xA1\x03\x02\x02\x02\u05B4\u05B5\x07 \x02" +
		"\x02\u05B5\u05B8\x05\u015A\xAE\x02\u05B6\u05B9\x05\xBE`\x02\u05B7\u05B9" +
		"\x05\x8CG\x02\u05B8\u05B6\x03\x02\x02\x02\u05B8\u05B7\x03\x02\x02\x02" +
		"\u05B9\u05BA\x03\x02\x02\x02\u05BA\u05BB\x05\u015C\xAF\x02\u05BB\xA3\x03" +
		"\x02\x02\x02\u05BC\u05BD\x05\u010E\x88\x02\u05BD\u05C2\x05\u0156\xAC\x02" +
		"\u05BE\u05C3\x05\xAAV\x02\u05BF\u05C3\x05\xAEX\x02\u05C0\u05C3\x05\xB0" +
		"Y\x02\u05C1\u05C3\x05\xB2Z\x02\u05C2\u05BE\x03\x02\x02\x02\u05C2\u05BF" +
		"\x03\x02\x02\x02\u05C2\u05C0\x03\x02\x02\x02\u05C2\u05C1\x03\x02\x02\x02" +
		"\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C4\x03\x02\x02\x02\u05C4\u05C5\x05" +
		"\u0158\xAD\x02\u05C5\xA5\x03\x02\x02\x02\u05C6\u05C7\x05\u015E\xB0\x02" +
		"\u05C7\u05C8\x05\u010E\x88\x02\u05C8\u05C9\x05\u0160\xB1\x02\u05C9\u05CB" +
		"\x05\u015A\xAE\x02\u05CA\u05CC\x07^\x02\x02\u05CB\u05CA\x03\x02\x02\x02" +
		"\u05CB\u05CC\x03\x02\x02\x02\u05CC\u05CE\x03\x02\x02\x02\u05CD\u05CF\x05" +
		"\x92J\x02\u05CE\u05CD\x03\x02\x02\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF" +
		"\u05D1\x03\x02\x02\x02\u05D0\u05D2\x07^\x02\x02\u05D1\u05D0\x03\x02\x02" +
		"\x02\u05D1\u05D2\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D4" +
		"\x05\u015C\xAF\x02\u05D4\xA7\x03\x02\x02\x02\u05D5\u05D6\x07 \x02\x02" +
		"\u05D6\u05D7\x05\u015E\xB0\x02\u05D7\u05D8\x05\u010E\x88\x02\u05D8\u05D9" +
		"\x05\u0160\xB1\x02\u05D9\xA9\x03\x02\x02\x02\u05DA\u05DB\x05\xACW\x02" +
		"\u05DB\u05DC\x05\u0152\xAA\x02\u05DC\u05DE\x03\x02\x02\x02\u05DD\u05DA" +
		"\x03\x02\x02\x02\u05DE\u05E1\x03\x02\x02\x02\u05DF\u05DD\x03\x02\x02\x02" +
		"\u05DF\u05E0\x03\x02\x02\x02\u05E0\u05E2\x03\x02\x02\x02\u05E1\u05DF\x03" +
		"\x02\x02\x02\u05E2\u05E3\x05\xACW\x02\u05E3\xAB\x03\x02\x02\x02\u05E4" +
		"\u05E5\x05\xC8e\x02\u05E5\u05E6\x07\'\x02\x02\u05E6\u05E7\x05\x8CG\x02" +
		"\u05E7\xAD\x03\x02\x02\x02\u05E8\u05EE\x05\x8CG\x02\u05E9\u05EA\x05\u0154" +
		"\xAB\x02\u05EA\u05EB\x05\x8CG\x02\u05EB\u05ED\x03\x02\x02\x02\u05EC\u05E9" +
		"\x03\x02\x02\x02\u05ED\u05F0\x03\x02\x02\x02\u05EE\u05EC\x03\x02\x02\x02" +
		"\u05EE\u05EF\x03\x02\x02\x02\u05EF\xAF\x03\x02\x02\x02\u05F0\u05EE\x03" +
		"\x02\x02\x02\u05F1\u05F2\x072\x02\x02\u05F2\u05F9\x05\x8CG\x02\u05F3\u05F4" +
		"\x05\u0154\xAB\x02\u05F4\u05F5\x072\x02\x02\u05F5\u05F6\x05\x8CG\x02\u05F6" +
		"\u05F8\x03\x02\x02\x02\u05F7\u05F3\x03\x02\x02\x02\u05F8\u05FB\x03\x02" +
		"\x02\x02\u05F9\u05F7\x03\x02\x02\x02\u05F9\u05FA\x03\x02\x02\x02\u05FA" +
		"\xB1\x03\x02\x02\x02\u05FB\u05F9\x03\x02\x02\x02\u05FC\u0602\x05\xBC_" +
		"\x02\u05FD\u05FE\x05\u0154\xAB\x02\u05FE\u05FF\x05\xBC_\x02\u05FF\u0601" +
		"\x03\x02\x02\x02\u0600\u05FD\x03\x02\x02\x02\u0601\u0604\x03\x02\x02\x02" +
		"\u0602\u0600\x03\x02\x02\x02\u0602\u0603\x03\x02\x02\x02\u0603\xB3\x03" +
		"\x02\x02\x02\u0604\u0602\x03\x02\x02\x02\u0605\u0606\x07&\x02\x02\u0606" +
		"\u0607\x05\x8CG\x02\u0607\xB5\x03\x02\x02\x02\u0608\u0609\x05\u0156\xAC" +
		"\x02\u0609\u060F\x05\x8CG\x02\u060A\u060B\x05\u0154\xAB\x02\u060B\u060C" +
		"\x05\x8CG\x02\u060C\u060E\x03\x02\x02\x02\u060D\u060A\x03\x02\x02\x02" +
		"\u060E\u0611\x03\x02\x02\x02\u060F\u060D\x03\x02\x02\x02\u060F\u0610\x03" +
		"\x02\x02\x02\u0610\u0612\x03\x02\x02\x02\u0611\u060F\x03\x02\x02\x02\u0612" +
		"\u0613\x05\u0158\xAD\x02\u0613\xB7\x03\x02\x02\x02\u0614\u0615\x05\u0156" +
		"\xAC\x02\u0615\u0616\x072\x02\x02\u0616\u061D\x05\x8CG\x02\u0617\u0618" +
		"\x05\u0154\xAB\x02\u0618\u0619\x072\x02\x02\u0619\u061A\x05\x8CG\x02\u061A" +
		"\u061C\x03\x02\x02\x02\u061B\u0617\x03\x02\x02\x02\u061C\u061F\x03\x02" +
		"\x02\x02\u061D\u061B\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E" +
		"\u0620\x03\x02\x02\x02\u061F\u061D\x03\x02\x02\x02\u0620\u0621\x05\u0158" +
		"\xAD\x02\u0621\xB9\x03\x02\x02\x02\u0622\u0623\x05\u0156\xAC\x02\u0623" +
		"\u0629\x05\xBC_\x02\u0624\u0625\x05\u0154\xAB\x02\u0625\u0626\x05\xBC" +
		"_\x02\u0626\u0628\x03\x02\x02\x02\u0627\u0624\x03\x02\x02\x02\u0628\u062B" +
		"\x03\x02\x02\x02\u0629\u0627\x03\x02\x02\x02\u0629\u062A\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u062A\u062C\x03\x02\x02\x02\u062B\u0629\x03\x02\x02\x02\u062C" +
		"\u062D\x05\u0158\xAD\x02\u062D\xBB\x03\x02\x02\x02\u062E\u062F\x05\x8C" +
		"G\x02\u062F\u0630\x072\x02\x02\u0630\u0631\x05\x8CG\x02\u0631\xBD\x03" +
		"\x02\x02\x02\u0632\u0636\x05\xC0a\x02\u0633\u0636\x05\xC2b\x02\u0634\u0636" +
		"\x05\xC4c\x02\u0635\u0632\x03\x02\x02\x02\u0635\u0633\x03\x02\x02\x02" +
		"\u0635\u0634\x03\x02\x02\x02\u0636\xBF\x03\x02\x02\x02\u0637\u0638\x05" +
		"\x8CG\x02\u0638\u0639\x07\x1F\x02\x02\u0639\u063A\t\x03\x02\x02\u063A" +
		"\u063B\x05\x8CG\x02\u063B\xC1\x03\x02\x02\x02\u063C\u063D\x05\x8CG\x02" +
		"\u063D\u063E\x07\x1F\x02\x02\u063E\u063F\t\x03\x02\x02\u063F\xC3\x03\x02" +
		"\x02\x02\u0640\u0641\x07\x1F\x02\x02\u0641\u0642\t\x03\x02\x02\u0642\u0643" +
		"\x05\x8CG\x02\u0643\xC5\x03\x02\x02\x02\u0644\u0645\x05\u014E\xA8\x02" +
		"\u0645\u0647\x05\u014A\xA6\x02\u0646\u0648\x07^\x02\x02\u0647\u0646\x03" +
		"\x02\x02\x02\u0647\u0648\x03\x02\x02\x02\u0648\u064A\x03\x02\x02\x02\u0649" +
		"\u0644\x03\x02\x02\x02\u064A\u064D\x03\x02\x02\x02\u064B\u0649\x03\x02" +
		"\x02\x02\u064B\u064C\x03\x02\x02\x02\u064C\u064E\x03\x02\x02\x02\u064D" +
		"\u064B\x03\x02\x02\x02\u064E\u064F\x05\u014E\xA8\x02\u064F\xC7\x03\x02" +
		"\x02\x02\u0650\u0659\x05\u014E\xA8\x02\u0651\u0653\x05\u014A\xA6\x02\u0652" +
		"\u0654\x07^\x02\x02\u0653\u0652\x03\x02\x02\x02\u0653\u0654\x03\x02\x02" +
		"\x02\u0654\u0655\x03\x02\x02\x02\u0655\u0656\x05\u014E\xA8\x02\u0656\u0658" +
		"\x03\x02\x02\x02\u0657\u0651\x03\x02\x02\x02\u0658\u065B\x03\x02\x02\x02" +
		"\u0659\u0657\x03\x02\x02\x02\u0659\u065A\x03\x02\x02\x02\u065A\xC9\x03" +
		"\x02\x02\x02\u065B\u0659\x03\x02\x02\x02\u065C\u065D\x05\u015E\xB0\x02" +
		"\u065D\u0663\x05\xCCg\x02\u065E\u065F\x05\u0154\xAB\x02\u065F\u0660\x05" +
		"\xCCg\x02\u0660\u0662\x03\x02\x02\x02\u0661\u065E\x03\x02\x02\x02\u0662" +
		"\u0665\x03\x02\x02\x02\u0663\u0661\x03\x02\x02\x02\u0663\u0664\x03\x02" +
		"\x02\x02\u0664\u0666\x03\x02\x02\x02\u0665\u0663\x03\x02\x02\x02\u0666" +
		"\u0667\x05\u0160\xB1\x02\u0667\xCB\x03\x02\x02\x02\u0668\u066A\x05\u014E" +
		"\xA8\x02\u0669\u066B\x05\u014E\xA8\x02\u066A\u0669\x03\x02\x02\x02\u066A" +
		"\u066B\x03\x02\x02\x02\u066B\xCD\x03\x02\x02\x02\u066C\u066D\x05\u015E" +
		"\xB0\x02\u066D\u0673\x05\u010E\x88\x02\u066E\u066F\x05\u0154\xAB\x02\u066F" +
		"\u0670\x05\u010E\x88\x02\u0670\u0672\x03\x02\x02\x02\u0671\u066E\x03\x02" +
		"\x02\x02\u0672\u0675\x03\x02\x02\x02\u0673\u0671\x03\x02\x02\x02\u0673" +
		"\u0674\x03\x02\x02\x02\u0674\u0676\x03\x02\x02\x02\u0675\u0673\x03\x02" +
		"\x02\x02\u0676\u0677\x05\u0160\xB1\x02\u0677\xCF\x03\x02\x02\x02\u0678" +
		"\u067A\x05\u0156\xAC\x02\u0679\u067B\x05\xD2j\x02\u067A\u0679\x03\x02" +
		"\x02\x02\u067A\u067B\x03\x02\x02\x02\u067B\u067C\x03\x02\x02\x02\u067C" +
		"\u0680\t\x02\x02\x02\u067D\u067F\x07^\x02\x02\u067E\u067D\x03\x02\x02" +
		"\x02\u067F\u0682\x03\x02\x02\x02\u0680\u067E\x03\x02\x02\x02\u0680\u0681" +
		"\x03\x02\x02\x02\u0681\u0683\x03\x02\x02\x02\u0682\u0680\x03\x02\x02\x02" +
		"\u0683\u0684\x05\x88E\x02\u0684\u0685\x05\u0158\xAD\x02\u0685\u069A\x03" +
		"\x02\x02\x02\u0686\u0688\x05\u0156\xAC\x02\u0687\u0689\x05\xD2j\x02\u0688" +
		"\u0687\x03\x02\x02\x02\u0688\u0689\x03\x02\x02\x02\u0689\u068A\x03\x02" +
		"\x02\x02\u068A\u068E\t\x02\x02\x02\u068B\u068D\x07^\x02\x02\u068C\u068B" +
		"\x03\x02\x02\x02\u068D\u0690\x03\x02\x02\x02\u068E\u068C\x03\x02\x02\x02" +
		"\u068E\u068F\x03\x02\x02\x02\u068F\u0694\x03\x02\x02\x02\u0690\u068E\x03" +
		"\x02\x02\x02\u0691\u0693\x05T+\x02\u0692\u0691\x03\x02\x02\x02\u0693\u0696" +
		"\x03\x02\x02\x02\u0694\u0692\x03\x02\x02\x02\u0694\u0695\x03\x02\x02\x02" +
		"\u0695\u0697\x03\x02\x02\x02\u0696\u0694\x03\x02\x02\x02\u0697\u0698\x05" +
		"\u0158\xAD\x02\u0698\u069A\x03\x02\x02\x02\u0699\u0678\x03\x02\x02\x02" +
		"\u0699\u0686\x03\x02\x02\x02\u069A\xD1\x03\x02\x02\x02\u069B\u06A1\x05" +
		"\u014E\xA8\x02\u069C\u069D\x05\u0154\xAB\x02\u069D\u069E\x05\u014E\xA8" +
		"\x02\u069E\u06A0\x03\x02\x02\x02\u069F\u069C\x03\x02\x02\x02\u06A0\u06A3" +
		"\x03\x02\x02\x02\u06A1\u069F\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02" +
		"\u06A2\xD3\x03\x02\x02\x02\u06A3\u06A1\x03\x02\x02\x02\u06A4\u06A5\x05" +
		"\xD6l\x02\u06A5\xD5\x03\x02\x02\x02\u06A6\u06AC\x05\u0156\xAC\x02\u06A7" +
		"\u06A8\x05\xD8m\x02\u06A8\u06A9\x05\u0152\xAA\x02\u06A9\u06AB\x03\x02" +
		"\x02\x02\u06AA\u06A7\x03\x02\x02\x02\u06AB\u06AE\x03\x02\x02\x02\u06AC" +
		"\u06AA\x03\x02\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD\u06AF\x03\x02" +
		"\x02\x02\u06AE\u06AC\x03\x02\x02\x02\u06AF\u06B0\x05\xD8m\x02\u06B0\u06B1" +
		"\x05\u0158\xAD\x02\u06B1\xD7\x03\x02\x02\x02\u06B2\u06B3\x05\xC8e\x02" +
		"\u06B3\u06B4\x07\'\x02\x02\u06B4\u06B5\x05\x8CG\x02\u06B5\xD9\x03\x02" +
		"\x02\x02\u06B6\u06B7\x05\u015A\xAE\x02\u06B7\u06B8\x05L\'\x02\u06B8\u06BA" +
		"\t\x02\x02\x02\u06B9\u06BB\x074\x02\x02\u06BA\u06B9\x03\x02\x02\x02\u06BA" +
		"\u06BB\x03\x02\x02\x02\u06BB\u06BF\x03\x02\x02\x02\u06BC\u06BE\x07^\x02" +
		"\x02\u06BD\u06BC\x03\x02\x02\x02\u06BE\u06C1\x03\x02\x02\x02\u06BF\u06BD" +
		"\x03\x02\x02\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u06C2\x03\x02\x02\x02" +
		"\u06C1\u06BF\x03\x02\x02\x02\u06C2\u06C3\x05N(\x02\u06C3\u06C4\x05\u015C" +
		"\xAF\x02\u06C4\u06C8\x05\u0156\xAC\x02\u06C5\u06C7\x05T+\x02\u06C6\u06C5" +
		"\x03\x02\x02\x02\u06C7\u06CA\x03\x02\x02\x02\u06C8\u06C6\x03\x02\x02\x02" +
		"\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06CB\x03\x02\x02\x02\u06CA\u06C8\x03" +
		"\x02\x02\x02\u06CB\u06CC\x05\u0158\xAD\x02\u06CC\xDB\x03\x02\x02\x02\u06CD" +
		"\u06CE\x05\u0144\xA3\x02\u06CE\u06CF\x05\x8CG\x02\u06CF\xDD\x03\x02\x02" +
		"\x02\u06D0\u06D1\x05\u014C\xA7\x02\u06D1\u06D2\x05\x8CG\x02\u06D2\xDF" +
		"\x03\x02\x02\x02\u06D3\u06D4\x05\u0138\x9D\x02\u06D4\u06D5\x05\x8CG\x02" +
		"\u06D5\xE1\x03\x02\x02\x02\u06D6\u06D8\x05\xE8u\x02\u06D7\u06D9\x07^\x02" +
		"\x02\u06D8\u06D7\x03\x02\x02\x02\u06D8\u06D9\x03\x02\x02\x02\u06D9\u06DA" +
		"\x03\x02\x02\x02\u06DA\u06DB\x05\x8CG\x02\u06DB\u06DD\x07#\x02\x02\u06DC" +
		"\u06DE\x07^\x02\x02\u06DD\u06DC\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02" +
		"\x02\u06DE\u06E0\x03\x02\x02\x02\u06DF\u06E1\x05\xE4s\x02\u06E0\u06DF" +
		"\x03\x02\x02\x02\u06E1\u06E2\x03\x02\x02\x02\u06E2\u06E0\x03\x02\x02\x02" +
		"\u06E2\u06E3\x03\x02\x02\x02\u06E3\u06E4\x03\x02\x02\x02\u06E4\u06E6\t" +
		"\x04\x02\x02\u06E5\u06E7\x07^\x02\x02\u06E6\u06E5\x03\x02\x02\x02\u06E6" +
		"\u06E7\x03\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02\u06E8\u06E9\x05\x8C" +
		"G\x02\u06E9\xE3\x03\x02\x02\x02\u06EA\u06EC\x05\xE6t\x02\u06EB\u06ED\x05" +
		"\x8CG\x02\u06EC\u06EB\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED" +
		"\u06EE\x03\x02\x02\x02\u06EE\u06F0\x07#\x02\x02\u06EF\u06F1\x07^\x02\x02" +
		"\u06F0\u06EF\x03\x02\x02\x02\u06F0\u06F1\x03\x02\x02\x02\u06F1\xE5\x03" +
		"\x02\x02\x02\u06F2\u06F5\x05\xE8u\x02\u06F3\u06F5\x05\xEAv\x02\u06F4\u06F2" +
		"\x03\x02\x02\x02\u06F4\u06F3\x03\x02\x02\x02\u06F5\xE7\x03\x02\x02\x02" +
		"\u06F6\u06F7\x07\x03\x02\x02\u06F7\xE9\x03\x02\x02\x02\u06F8\u06F9\t\x05" +
		"\x02\x02\u06F9\xEB\x03\x02\x02\x02\u06FA\u06FC\x07V\x02\x02\u06FB\u06FD" +
		"\x05\xEEx\x02\u06FC\u06FB\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02\x02" +
		"\u06FE\u06FC\x03\x02\x02\x02\u06FE\u06FF\x03\x02\x02\x02\u06FF\xED\x03" +
		"\x02\x02\x02\u0700\u0701\x05\x8CG\x02\u0701\u0702\x07V\x02\x02\u0702\xEF" +
		"\x03\x02\x02\x02\u0703\u0707\x05\xF4{\x02\u0704\u0706\x05\xF6|\x02\u0705" +
		"\u0704\x03\x02\x02\x02\u0706\u0709\x03\x02\x02\x02\u0707\u0705\x03\x02" +
		"\x02\x02\u0707\u0708\x03\x02\x02\x02\u0708\u070A\x03\x02\x02\x02\u0709" +
		"\u0707\x03\x02\x02\x02\u070A\u070B\x05\xF2z\x02\u070B\xF1\x03\x02\x02" +
		"\x02\u070C\u070D\x07Z\x02\x02\u070D\u0711\x05\u0156\xAC\x02\u070E\u0710" +
		"\x05T+\x02\u070F\u070E\x03\x02\x02\x02\u0710\u0713\x03\x02\x02\x02\u0711" +
		"\u070F\x03\x02\x02\x02\u0711\u0712\x03\x02\x02\x02\u0712\u0714\x03\x02" +
		"\x02\x02\u0713\u0711\x03\x02\x02\x02\u0714\u0715\x05\x88E\x02\u0715\u0716" +
		"\x05\u0158\xAD\x02\u0716\xF3\x03\x02\x02\x02\u0717\u0718\x073\x02\x02" +
		"\u0718\u0719\x07#\x02\x02\u0719\u071A\x05\x8CG\x02\u071A\u071E\x05\u0156" +
		"\xAC\x02\u071B\u071D\x05T+\x02\u071C\u071B\x03\x02\x02\x02\u071D\u0720" +
		"\x03\x02\x02\x02\u071E\u071C\x03\x02\x02\x02\u071E\u071F\x03\x02\x02\x02" +
		"\u071F\u0721\x03\x02\x02\x02\u0720\u071E\x03\x02\x02\x02\u0721\u0722\x05" +
		"\x88E\x02\u0722\u0723\x05\u0158\xAD\x02\u0723\xF5\x03\x02\x02\x02\u0724" +
		"\u0725\x05\x8CG\x02\u0725\u0729\x05\u0156\xAC\x02\u0726\u0728\x05T+\x02" +
		"\u0727\u0726\x03\x02\x02\x02\u0728\u072B\x03\x02\x02\x02\u0729\u0727\x03" +
		"\x02\x02\x02\u0729\u072A\x03\x02\x02\x02\u072A\u072C\x03\x02\x02\x02\u072B" +
		"\u0729\x03\x02\x02\x02\u072C\u072D\x05\x88E\x02\u072D\u072E\x05\u0158" +
		"\xAD\x02\u072E\xF7\x03\x02\x02\x02\u072F\u0730\x073\x02\x02\u0730\u0732" +
		"\x07#\x02\x02\u0731\u0733\x05\xFA~\x02\u0732\u0731\x03\x02\x02\x02\u0733" +
		"\u0734\x03\x02\x02\x02\u0734\u0732\x03\x02\x02\x02\u0734\u0735\x03\x02" +
		"\x02\x02\u0735\xF9\x03\x02\x02\x02\u0736\u073C\x05Z.\x02\u0737\u0738\x05" +
		"\u0154\xAB\x02\u0738\u0739\x05Z.\x02\u0739\u073B\x03\x02\x02\x02\u073A" +
		"\u0737\x03\x02\x02\x02\u073B\u073E\x03\x02\x02\x02\u073C\u073A\x03\x02" +
		"\x02\x02\u073C\u073D\x03\x02\x02\x02\u073D\u073F\x03\x02\x02\x02\u073E" +
		"\u073C\x03\x02\x02\x02\u073F\u0743\x05\u0156\xAC\x02\u0740\u0742\x05T" +
		"+\x02\u0741\u0740\x03\x02\x02\x02\u0742\u0745\x03\x02\x02\x02\u0743\u0741" +
		"\x03\x02\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u0746\x03\x02\x02\x02" +
		"\u0745\u0743\x03\x02\x02\x02\u0746\u0747\x05\x88E\x02\u0747\u0748\x05" +
		"\u0158\xAD\x02\u0748\xFB\x03\x02\x02\x02\u0749\u074A\x05\u014E\xA8\x02" +
		"\u074A\u074B\x074\x02\x02\u074B\u074C\x07#\x02\x02\u074C\u074D\x05x=\x02" +
		"\u074D\u0751\x05\u0156\xAC\x02\u074E\u0750\x05T+\x02\u074F\u074E\x03\x02" +
		"\x02\x02\u0750\u0753\x03\x02\x02\x02\u0751\u074F\x03\x02\x02\x02\u0751" +
		"\u0752\x03\x02\x02\x02\u0752\u0754\x03\x02\x02\x02\u0753\u0751\x03\x02" +
		"\x02\x02\u0754\u0755\x05\x88E\x02\u0755\u0757\x05\u0158\xAD\x02\u0756" +
		"\u0758\x05\u0100\x81\x02\u0757\u0756\x03\x02\x02\x02\u0757\u0758\x03\x02" +
		"\x02\x02\u0758\xFD\x03\x02\x02\x02\u0759\u075A\x05\u014E\xA8\x02\u075A" +
		"\u075B\x072\x02\x02\u075B\u075D\x03\x02\x02\x02\u075C\u0759\x03\x02\x02" +
		"\x02\u075C\u075D\x03\x02\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E\u075F" +
		"\x05\u014E\xA8\x02\u075F\u0760\x074\x02\x02\u0760\u0761\x07#\x02\x02\u0761" +
		"\u0762\x05\x8CG\x02\u0762\u0766\x05\u0156\xAC\x02\u0763\u0765\x05T+\x02" +
		"\u0764\u0763\x03\x02\x02\x02\u0765\u0768\x03\x02\x02\x02\u0766\u0764\x03" +
		"\x02\x02\x02\u0766\u0767\x03\x02\x02\x02\u0767\u0769\x03\x02\x02\x02\u0768" +
		"\u0766\x03\x02\x02\x02\u0769\u076A\x05\x88E\x02\u076A\u076C\x05\u0158" +
		"\xAD\x02\u076B\u076D\x05\u0100\x81\x02\u076C\u076B\x03\x02\x02\x02\u076C" +
		"\u076D\x03\x02\x02\x02\u076D\xFF\x03\x02\x02\x02\u076E\u076F\x07Z\x02" +
		"\x02\u076F\u0773\x05\u0156\xAC\x02\u0770\u0772\x05T+\x02\u0771\u0770\x03" +
		"\x02\x02\x02\u0772\u0775\x03\x02\x02\x02\u0773\u0771\x03\x02\x02\x02\u0773" +
		"\u0774\x03\x02\x02\x02\u0774\u0776\x03\x02\x02\x02\u0775\u0773\x03\x02" +
		"\x02\x02\u0776\u0777\x05\x88E\x02\u0777\u0778\x05\u0158\xAD\x02\u0778" +
		"\u0101\x03\x02\x02\x02\u0779\u077A\x075\x02\x02\u077A\u077B\x07#\x02\x02" +
		"\u077B\u077F\x05\u0156\xAC\x02\u077C\u077E\x05T+\x02\u077D\u077C\x03\x02" +
		"\x02\x02\u077E\u0781\x03\x02\x02\x02\u077F\u077D\x03\x02\x02\x02\u077F" +
		"\u0780\x03\x02\x02\x02\u0780\u0782\x03\x02\x02\x02\u0781\u077F\x03\x02" +
		"\x02\x02\u0782\u0783\x05\x88E\x02\u0783\u0787\x05\u0158\xAD\x02\u0784" +
		"\u0786\x05\u0104\x83\x02\u0785\u0784\x03\x02\x02\x02\u0786\u0789\x03\x02" +
		"\x02\x02\u0787\u0785\x03\x02\x02\x02\u0787\u0788\x03\x02\x02\x02\u0788" +
		"\u078A\x03\x02\x02\x02\u0789\u0787\x03\x02\x02\x02\u078A\u078B\x05v<\x02" +
		"\u078B\u079D\x03\x02\x02\x02\u078C\u078D\x075\x02\x02\u078D\u078E\x07" +
		"#\x02\x02\u078E\u0792\x05\u0156\xAC\x02\u078F\u0791\x05T+\x02\u0790\u078F" +
		"\x03\x02\x02\x02\u0791\u0794\x03\x02\x02\x02\u0792\u0790\x03\x02\x02\x02" +
		"\u0792\u0793\x03\x02\x02\x02\u0793\u0795\x03\x02\x02\x02\u0794\u0792\x03" +
		"\x02\x02\x02\u0795\u0796\x05\x88E\x02\u0796\u0798\x05\u0158\xAD\x02\u0797" +
		"\u0799\x05\u0104\x83\x02\u0798\u0797\x03\x02\x02\x02\u0799\u079A\x03\x02" +
		"\x02\x02\u079A\u0798\x03\x02\x02\x02\u079A\u079B\x03\x02\x02\x02\u079B" +
		"\u079D\x03\x02\x02\x02\u079C\u0779\x03\x02\x02\x02\u079C\u078C\x03\x02" +
		"\x02\x02\u079D\u0103\x03\x02\x02\x02\u079E\u07A3\x05\u014E\xA8\x02\u079F" +
		"\u07A0\x05\u014E\xA8\x02\u07A0\u07A1\x05\u010E\x88\x02\u07A1\u07A3\x03" +
		"\x02\x02\x02\u07A2\u079E\x03\x02\x02\x02\u07A2\u079F\x03\x02\x02\x02\u07A3" +
		"\u07A4\x03\x02\x02\x02\u07A4\u07A8\x05\u0156\xAC\x02\u07A5\u07A7\x05T" +
		"+\x02\u07A6\u07A5\x03\x02\x02\x02\u07A7\u07AA\x03\x02\x02\x02\u07A8\u07A6" +
		"\x03\x02\x02\x02\u07A8\u07A9\x03\x02\x02\x02\u07A9\u07AB\x03\x02\x02\x02" +
		"\u07AA\u07A8\x03\x02\x02\x02\u07AB\u07AC\x05\x88E\x02\u07AC\u07AD\x05" +
		"\u0158\xAD\x02\u07AD\u0105\x03\x02\x02\x02\u07AE\u07B7\x05\u0108\x85\x02" +
		"\u07AF\u07B7\x05\u010A\x86\x02\u07B0\u07B7\x07V\x02\x02\u07B1\u07B7\x07" +
		"W\x02\x02\u07B2\u07B7\x07R\x02\x02\u07B3\u07B7\x07S\x02\x02\u07B4\u07B7" +
		"\x05\u012C\x97\x02\u07B5\u07B7\x07T\x02\x02\u07B6\u07AE\x03\x02\x02\x02" +
		"\u07B6\u07AF\x03\x02\x02\x02\u07B6\u07B0\x03\x02\x02\x02\u07B6\u07B1\x03" +
		"\x02\x02\x02\u07B6\u07B2\x03\x02\x02\x02\u07B6\u07B3\x03\x02\x02\x02\u07B6" +
		"\u07B4\x03\x02\x02\x02\u07B6\u07B5\x03\x02\x02\x02\u07B7\u0107\x03\x02" +
		"\x02\x02\u07B8\u07B9\x05\u010A\x86\x02\u07B9\u07BA\x05\u014A\xA6\x02\u07BA" +
		"\u07BB\x05\u010A\x86\x02\u07BB\u0109\x03\x02\x02\x02\u07BC\u07BD\x07U" +
		"\x02\x02\u07BD\u010B\x03\x02\x02\x02\u07BE\u07CA\x05\u0126\x94\x02\u07BF" +
		"\u07CA\x05\u0114\x8B\x02\u07C0\u07CA\x05\u0116\x8C\x02\u07C1\u07CA\x05" +
		"\u0118\x8D\x02\u07C2\u07CA\x05\u011A\x8E\x02\u07C3\u07CA\x05\u011C\x8F" +
		"\x02\u07C4\u07CA\x05\u011E\x90\x02\u07C5\u07CA\x05\u0120\x91\x02\u07C6" +
		"\u07CA\x05\u012A\x96\x02\u07C7\u07CA\x05\u0122\x92\x02\u07C8\u07CA\x05" +
		"\u0124\x93\x02\u07C9\u07BE\x03\x02\x02\x02\u07C9\u07BF\x03\x02\x02\x02" +
		"\u07C9\u07C0\x03\x02\x02\x02\u07C9\u07C1\x03\x02\x02\x02\u07C9\u07C2\x03" +
		"\x02\x02\x02\u07C9\u07C3\x03\x02\x02\x02\u07C9\u07C4\x03\x02\x02\x02\u07C9" +
		"\u07C5\x03\x02\x02\x02\u07C9\u07C6\x03\x02\x02\x02\u07C9\u07C7\x03\x02" +
		"\x02\x02\u07C9\u07C8\x03\x02\x02\x02\u07CA\u010D\x03\x02\x02\x02\u07CB" +
		"\u07CF\x05\u010C\x87\x02\u07CC\u07CF\x05\u0112\x8A\x02\u07CD\u07CF\x05" +
		"\u0110\x89\x02\u07CE\u07CB\x03\x02\x02\x02\u07CE\u07CC\x03\x02\x02\x02" +
		"\u07CE\u07CD\x03\x02\x02\x02\u07CF\u010F\x03\x02\x02\x02\u07D0\u07D3\x07" +
		"5\x02\x02\u07D1\u07D4\x05\u010C\x87\x02\u07D2\u07D4\x05\u0112\x8A\x02" +
		"\u07D3\u07D1\x03\x02\x02\x02\u07D3\u07D2\x03\x02\x02\x02\u07D4\u0111\x03" +
		"\x02\x02\x02\u07D5\u07D6\x073\x02\x02\u07D6\u07D7\x05\u010C\x87\x02\u07D7" +
		"\u0113\x03\x02\x02\x02\u07D8\u07D9\x07(\x02\x02\u07D9\u07DD\x05\u010E" +
		"\x88\x02\u07DA\u07DB\x05\u0154\xAB\x02\u07DB\u07DC\x05\u010E\x88\x02\u07DC" +
		"\u07DE\x03\x02\x02\x02\u07DD\u07DA\x03\x02\x02\x02\u07DE\u07DF\x03\x02" +
		"\x02\x02\u07DF\u07DD\x03\x02\x02\x02\u07DF\u07E0\x03\x02\x02\x02\u07E0" +
		"\u07E1\x03\x02\x02\x02\u07E1\u07E2\x07)\x02\x02\u07E2\u0115\x03\x02\x02" +
		"\x02\u07E3\u07E4\x05\u015E\xB0\x02\u07E4\u07E5\x072\x02\x02\u07E5\u07E6" +
		"\x05\u0160\xB1\x02\u07E6\u07E7\x05\u010E\x88\x02\u07E7\u0117\x03\x02\x02" +
		"\x02\u07E8\u07E9\x05\u015E\xB0\x02\u07E9\u07EA\x05\u0160\xB1\x02\u07EA" +
		"\u07EB\x05\u010E\x88\x02\u07EB\u0119\x03\x02\x02\x02\u07EC\u07ED\x05\u015E" +
		"\xB0\x02\u07ED\u07EE\x05\u0160\xB1\x02\u07EE\u07EF\x072\x02\x02\u07EF" +
		"\u07F0\x05\u010E\x88\x02\u07F0\u011B\x03\x02\x02\x02\u07F1\u07F2\x05\u015E" +
		"\xB0\x02\u07F2\u07F3\x05\u0160\xB1\x02\u07F3\u07F4\x05\u010E\x88\x02\u07F4" +
		"\u07F5\x072\x02\x02\u07F5\u07F6\x05\u010E\x88\x02\u07F6\u011D\x03\x02" +
		"\x02\x02\u07F7\u07F8\x05\u015E\xB0\x02\u07F8\u07F9\x07#\x02\x02\u07F9" +
		"\u07FA\x05\u0160\xB1\x02\u07FA\u07FB\x05\u010E\x88\x02\u07FB\u011F\x03" +
		"\x02\x02\x02\u07FC\u07FD\x05\u015E\xB0\x02\u07FD\u07FE\x07?\x02\x02\u07FE" +
		"\u07FF\x05\u0160\xB1\x02\u07FF\u0800\x05\u010E\x88\x02\u0800\u0121\x03" +
		"\x02\x02\x02\u0801\u0803\x05\xC6d\x02\u0802\u0804\x05\xCEh\x02\u0803\u0802" +
		"\x03\x02\x02\x02\u0803\u0804\x03\x02\x02\x02\u0804\u0123\x03\x02\x02\x02" +
		"\u0805\u0806\x05\u015A\xAE\x02\u0806\u0807\x05\u0128\x95\x02\u0807\u0809" +
		"\t\x02\x02\x02\u0808\u080A\x074\x02\x02\u0809\u0808\x03\x02\x02\x02\u0809" +
		"\u080A\x03\x02\x02\x02\u080A\u080E\x03\x02\x02\x02\u080B\u080D\x07^\x02" +
		"\x02\u080C\u080B\x03\x02\x02\x02\u080D\u0810\x03\x02\x02\x02\u080E\u080C" +
		"\x03\x02\x02\x02\u080E\u080F\x03\x02\x02\x02\u080F\u0811\x03\x02\x02\x02" +
		"\u0810\u080E\x03\x02\x02\x02\u0811\u0812\x05\u0128\x95\x02\u0812\u0813" +
		"\x05\u015C\xAF\x02\u0813\u0125\x03\x02\x02\x02\u0814\u0815\x07P\x02\x02" +
		"\u0815\u0127\x03\x02\x02\x02\u0816\u0818\x05\u010E\x88\x02\u0817\u0816" +
		"\x03\x02\x02\x02\u0817\u0818\x03\x02\x02\x02\u0818\u081E\x03\x02\x02\x02" +
		"\u0819\u081A\x05\u0154\xAB\x02\u081A\u081B\x05\u010E\x88\x02\u081B\u081D" +
		"\x03\x02\x02\x02\u081C\u0819\x03\x02\x02\x02\u081D\u0820\x03\x02\x02\x02" +
		"\u081E\u081C\x03\x02\x02\x02\u081E\u081F\x03\x02\x02\x02\u081F\u0129\x03" +
		"\x02\x02\x02\u0820\u081E\x03\x02\x02\x02\u0821\u0832\x07@\x02\x02\u0822" +
		"\u0832\x07A\x02\x02\u0823\u0832\x07B\x02\x02\u0824\u0832\x07C\x02\x02" +
		"\u0825\u0832\x07D\x02\x02\u0826\u0832\x07E\x02\x02\u0827\u0832\x07F\x02" +
		"\x02\u0828\u0832\x07G\x02\x02\u0829\u0832\x07H\x02\x02\u082A\u0832\x07" +
		"I\x02\x02\u082B\u0832\x07J\x02\x02\u082C\u0832\x07K\x02\x02\u082D\u0832" +
		"\x07L\x02\x02\u082E\u0832\x07M\x02\x02\u082F\u0832\x07N\x02\x02\u0830" +
		"\u0832\x07O\x02\x02\u0831\u0821\x03\x02\x02\x02\u0831\u0822\x03\x02\x02" +
		"\x02\u0831\u0823\x03\x02\x02\x02\u0831\u0824\x03\x02\x02\x02\u0831\u0825" +
		"\x03\x02\x02\x02\u0831\u0826\x03\x02\x02\x02\u0831\u0827\x03\x02\x02\x02" +
		"\u0831\u0828\x03\x02\x02\x02\u0831\u0829\x03\x02\x02\x02\u0831\u082A\x03" +
		"\x02\x02\x02\u0831\u082B\x03\x02\x02\x02\u0831\u082C\x03\x02\x02\x02\u0831" +
		"\u082D\x03\x02\x02\x02\u0831\u082E\x03\x02\x02\x02\u0831\u082F\x03\x02" +
		"\x02\x02\u0831\u0830\x03\x02\x02\x02\u0832\u012B\x03\x02\x02\x02\u0833" +
		"\u0834\x07Q\x02\x02\u0834\u012D\x03\x02\x02\x02\u0835\u0838\x07R\x02\x02" +
		"\u0836\u0838\x07S\x02\x02\u0837\u0835\x03\x02\x02\x02\u0837\u0836\x03" +
		"\x02\x02\x02\u0838\u012F\x03\x02\x02\x02\u0839\u083A\t\x06\x02\x02\u083A" +
		"\u0131\x03\x02\x02\x02\u083B\u0841\x05\u0134\x9B\x02\u083C\u0841\x05\u0136" +
		"\x9C\x02\u083D\u0841\x05\u013A\x9E\x02\u083E\u0841\x05\u013C\x9F\x02\u083F" +
		"\u0841\x05\u013E\xA0\x02\u0840\u083B\x03\x02\x02\x02\u0840\u083C\x03\x02" +
		"\x02\x02\u0840\u083D\x03\x02\x02\x02\u0840\u083E\x03\x02\x02\x02\u0840" +
		"\u083F\x03\x02\x02\x02\u0841\u0843\x03\x02\x02\x02\u0842\u0844\x07^\x02" +
		"\x02\u0843\u0842\x03\x02\x02\x02\u0843\u0844\x03\x02\x02\x02\u0844\u0133" +
		"\x03\x02\x02\x02\u0845\u0846\x07=\x02\x02\u0846\u0847\x07=\x02\x02\u0847" +
		"\u0135\x03\x02\x02\x02\u0848\u0849\x07>\x02\x02\u0849\u084A\x07>\x02\x02" +
		"\u084A\u0137\x03\x02\x02\x02\u084B\u084C\x076\x02\x02\u084C\u084D\x07" +
		"6\x02\x02\u084D\u0139\x03\x02\x02\x02\u084E\u084F\x07?\x02\x02\u084F\u0850" +
		"\x07?\x02\x02\u0850\u013B\x03\x02\x02\x02\u0851\u0852\x07(\x02\x02\u0852" +
		"\u0853\x07(\x02\x02\u0853\u013D\x03\x02\x02\x02\u0854\u0855\x07)\x02\x02" +
		"\u0855\u0856\x07)\x02\x02\u0856\u013F\x03\x02\x02\x02\u0857\u0859\t\x07" +
		"\x02\x02\u0858\u085A\x07^\x02\x02\u0859\u0858\x03\x02\x02\x02\u0859\u085A" +
		"\x03\x02\x02\x02\u085A\u0141\x03\x02\x02\x02\u085B\u085D\t\b\x02\x02\u085C" +
		"\u085E\x07^\x02\x02\u085D\u085C\x03\x02\x02\x02\u085D\u085E\x03\x02\x02" +
		"\x02\u085E\u0143\x03\x02\x02\x02\u085F\u0861\t\t\x02\x02\u0860\u0862\x07" +
		"^\x02\x02\u0861\u0860\x03\x02\x02\x02\u0861\u0862\x03\x02\x02\x02\u0862" +
		"\u0145\x03\x02\x02\x02\u0863\u0865\t\n\x02\x02\u0864\u0866\x07^\x02\x02" +
		"\u0865\u0864\x03\x02\x02\x02\u0865\u0866\x03\x02\x02\x02\u0866\u0147\x03" +
		"\x02\x02\x02\u0867\u0869\t\v\x02\x02\u0868\u086A\x07^\x02\x02\u0869\u0868" +
		"\x03\x02\x02\x02\u0869\u086A\x03\x02\x02\x02\u086A\u0149\x03\x02\x02\x02" +
		"\u086B\u086D\x07 \x02\x02\u086C\u086E\x07^\x02\x02\u086D\u086C\x03\x02" +
		"\x02\x02\u086D\u086E\x03\x02\x02\x02\u086E\u014B\x03\x02\x02\x02\u086F" +
		"\u0870\x076\x02\x02\u0870\u014D\x03\x02\x02\x02\u0871\u0872\x05\u0150" +
		"\xA9\x02\u0872\u014F\x03\x02\x02\x02\u0873\u0878\t\f\x02\x02\u0874\u0878" +
		"\x05\u012A\x96\x02\u0875\u0878\x05\u0126\x94\x02\u0876\u0878\x05\xE6t" +
		"\x02\u0877\u0873\x03\x02\x02\x02\u0877\u0874\x03\x02\x02\x02\u0877\u0875" +
		"\x03\x02\x02\x02\u0877\u0876\x03\x02\x02\x02\u0878\u0151\x03\x02\x02\x02" +
		"\u0879\u087A\t\r\x02\x02\u087A\u0153\x03\x02\x02\x02\u087B\u087F\x07!" +
		"\x02\x02\u087C\u087E\x07^\x02\x02\u087D\u087C\x03\x02\x02\x02\u087E\u0881" +
		"\x03\x02\x02\x02\u087F\u087D\x03\x02\x02\x02\u087F\u0880\x03\x02\x02\x02" +
		"\u0880\u0155\x03\x02\x02\x02\u0881\u087F\x03\x02\x02\x02\u0882\u0886\x07" +
		"-\x02\x02\u0883\u0885\x07^\x02\x02\u0884\u0883\x03\x02\x02\x02\u0885\u0888" +
		"\x03\x02\x02\x02\u0886\u0884\x03\x02\x02\x02\u0886\u0887\x03\x02\x02\x02" +
		"\u0887\u0157\x03\x02\x02\x02\u0888\u0886\x03\x02\x02\x02\u0889\u088B\x07" +
		"^\x02\x02\u088A\u0889\x03\x02\x02\x02\u088B\u088E\x03\x02\x02\x02\u088C" +
		"\u088A\x03\x02\x02\x02\u088C\u088D\x03\x02\x02\x02\u088D\u088F\x03\x02" +
		"\x02\x02\u088E\u088C\x03\x02\x02\x02\u088F\u0890\x07.\x02\x02\u0890\u0159" +
		"\x03\x02\x02\x02\u0891\u0892\x07+\x02\x02\u0892\u015B\x03\x02\x02\x02" +
		"\u0893\u0894\x07,\x02\x02\u0894\u015D\x03\x02\x02\x02\u0895\u0899\x07" +
		"/\x02\x02\u0896\u0898\x07^\x02\x02\u0897\u0896\x03\x02\x02\x02\u0898\u089B" +
		"\x03\x02\x02\x02\u0899\u0897\x03\x02\x02\x02\u0899\u089A\x03\x02\x02\x02" +
		"\u089A\u015F\x03\x02\x02\x02\u089B\u0899\x03\x02\x02\x02\u089C\u089E\x07" +
		"^\x02\x02\u089D\u089C\x03\x02\x02\x02\u089E\u08A1\x03\x02\x02\x02\u089F" +
		"\u089D\x03\x02\x02\x02\u089F\u08A0\x03\x02\x02\x02\u08A0\u08A2\x03\x02" +
		"\x02\x02\u08A1\u089F\x03\x02\x02\x02\u08A2\u08A3\x070\x02\x02\u08A3\u0161" +
		"\x03\x02\x02\x02\xEC\u0165\u016A\u016E\u0174\u017A\u0181\u0183\u018A\u018E" +
		"\u0190\u01A1\u01AE\u01B5\u01BE\u01C7\u01CA\u01CF\u01D7\u01D9\u01DE\u01E4" +
		"\u01EC\u01F0\u01F5\u01F9\u0200\u0204\u020B\u0210\u0219\u0220\u0224\u0228" +
		"\u022F\u0235\u0237\u0244\u024A\u0252\u0256\u025C\u0262\u026A\u026C\u0275" +
		"\u027B\u028D\u0293\u029C\u02A0\u02A6\u02AF\u02B4\u02BB\u02C6\u02C9\u02CD" +
		"\u02D4\u02D9\u02E2\u02E9\u02EF\u02F7\u02FB\u0300\u0305\u0309\u0310\u0315" +
		"\u031E\u0325\u032A\u0330\u0338\u033C\u0341\u0345\u034D\u0357\u035A\u0364" +
		"\u0369\u0370\u0374\u037A\u037F\u0388\u038F\u0394\u039D\u03A5\u03B3\u03BA" +
		"\u03BE\u03C5\u03CC\u03D2\u03E7\u03EE\u03F8\u03FF\u0408\u040B\u0411\u041B" +
		"\u0420\u0427\u0432\u043C\u0448\u044D\u0454\u045D\u0462\u046C\u0471\u047A" +
		"\u048C\u0493\u049E\u04A5\u04A9\u04AE\u04B8\u04BE\u04C8\u04D9\u04DD\u04FE" +
		"\u0503\u050B\u0510\u0518\u052E\u0556\u0558\u055D\u0561\u0566\u056F\u0572" +
		"\u057C\u0581\u0587\u0592\u059D\u05A2\u05A7\u05AD\u05B8\u05C2\u05CB\u05CE" +
		"\u05D1\u05DF\u05EE\u05F9\u0602\u060F\u061D\u0629\u0635\u0647\u064B\u0653" +
		"\u0659\u0663\u066A\u0673\u067A\u0680\u0688\u068E\u0694\u0699\u06A1\u06AC" +
		"\u06BA\u06BF\u06C8\u06D8\u06DD\u06E2\u06E6\u06EC\u06F0\u06F4\u06FE\u0707" +
		"\u0711\u071E\u0729\u0734\u073C\u0743\u0751\u0757\u075C\u0766\u076C\u0773" +
		"\u077F\u0787\u0792\u079A\u079C\u07A2\u07A8\u07B6\u07C9\u07CE\u07D3\u07DF" +
		"\u0803\u0809\u080E\u0817\u081E\u0831\u0837\u0840\u0843\u0859\u085D\u0861" +
		"\u0865\u0869\u086D\u0877\u087F\u0886\u088C\u0899\u089F";
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
	public implementNewStatement(): ImplementNewStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementNewStatementContext);
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
	public Colon_Equal(): TerminalNode { return this.getToken(LiteParser.Colon_Equal, 0); }
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
	public Colon_Equal(): TerminalNode { return this.getToken(LiteParser.Colon_Equal, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
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
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
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
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
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
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
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
	public _y: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
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
	public At(): TerminalNode | undefined { return this.tryGetToken(LiteParser.At, 0); }
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
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public Colon_Equal(): TerminalNode { return this.getToken(LiteParser.Colon_Equal, 0); }
	public Coin(): TerminalNode { return this.getToken(LiteParser.Coin, 0); }
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
	public packageNewStatement(): PackageNewStatementContext[];
	public packageNewStatement(i: number): PackageNewStatementContext;
	public packageNewStatement(i?: number): PackageNewStatementContext | PackageNewStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageNewStatementContext);
		} else {
			return this.getRuleContext(i, PackageNewStatementContext);
		}
	}
	public packageImplementStatement(): PackageImplementStatementContext[];
	public packageImplementStatement(i: number): PackageImplementStatementContext;
	public packageImplementStatement(i?: number): PackageImplementStatementContext | PackageImplementStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageImplementStatementContext);
		} else {
			return this.getRuleContext(i, PackageImplementStatementContext);
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
	public implementFunctionStatement(): ImplementFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementFunctionStatementContext);
	}
	public implementControlStatement(): ImplementControlStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementControlStatementContext);
	}
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
	public Cent(): TerminalNode { return this.getToken(LiteParser.Cent, 0); }
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
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
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


export class PackageImplementStatementContext extends ParserRuleContext {
	public Cent(): TerminalNode { return this.getToken(LiteParser.Cent, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
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
	public get ruleIndex(): number { return LiteParser.RULE_packageImplementStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageImplementStatement) {
			return visitor.visitPackageImplementStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementNewStatementContext extends ParserRuleContext {
	public parameterClauseSelf(): ParameterClauseSelfContext {
		return this.getRuleContext(0, ParameterClauseSelfContext);
	}
	public Cent(): TerminalNode { return this.getToken(LiteParser.Cent, 0); }
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
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
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
	public get ruleIndex(): number { return LiteParser.RULE_implementNewStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementNewStatement) {
			return visitor.visitImplementNewStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementStatementContext extends ParserRuleContext {
	public parameterClauseSelf(): ParameterClauseSelfContext {
		return this.getRuleContext(0, ParameterClauseSelfContext);
	}
	public Cent(): TerminalNode { return this.getToken(LiteParser.Cent, 0); }
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
	public _y: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
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
	public At(): TerminalNode | undefined { return this.tryGetToken(LiteParser.At, 0); }
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
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
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


export class OverrideFunctionStatementContext extends ParserRuleContext {
	public _n: Token;
	public _t: Token;
	public _y: Token;
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public Cent(): TerminalNode { return this.getToken(LiteParser.Cent, 0); }
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
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
	public At(): TerminalNode | undefined { return this.tryGetToken(LiteParser.At, 0); }
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
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public Cent(): TerminalNode { return this.getToken(LiteParser.Cent, 0); }
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
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
	public Colon_Equal(): TerminalNode { return this.getToken(LiteParser.Colon_Equal, 0); }
	public Cent(): TerminalNode { return this.getToken(LiteParser.Cent, 0); }
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
	public _y: Token;
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
	public At(): TerminalNode | undefined { return this.tryGetToken(LiteParser.At, 0); }
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
	public _y: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
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
	public At(): TerminalNode | undefined { return this.tryGetToken(LiteParser.At, 0); }
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
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
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


export class YieldReturnStatementContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_yieldReturnStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitYieldReturnStatement) {
			return visitor.visitYieldReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldBreakStatementContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_yieldBreakStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitYieldBreakStatement) {
			return visitor.visitYieldBreakStatement(this);
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
	public yieldReturnStatement(): YieldReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldReturnStatementContext);
	}
	public yieldBreakStatement(): YieldBreakStatementContext | undefined {
		return this.tryGetRuleContext(0, YieldBreakStatementContext);
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
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public iteratorStatement(): IteratorStatementContext {
		return this.getRuleContext(0, IteratorStatementContext);
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
	public loopElseStatement(): LoopElseStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopElseStatementContext);
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
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
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
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public loopElseStatement(): LoopElseStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopElseStatementContext);
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
	public loopElseStatement(): LoopElseStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopElseStatementContext);
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


export class LoopElseStatementContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return LiteParser.RULE_loopElseStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopElseStatement) {
			return visitor.visitLoopElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopJumpStatementContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public Dot_Dot(): TerminalNode { return this.getToken(LiteParser.Dot_Dot, 0); }
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
	public Dot_Dot(): TerminalNode { return this.getToken(LiteParser.Dot_Dot, 0); }
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
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equal(): TerminalNode { return this.getToken(LiteParser.Equal, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
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


export class IteratorStatementContext extends ParserRuleContext {
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
	public Dot_Dot(): TerminalNode { return this.getToken(LiteParser.Dot_Dot, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
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
	public idExpression(): IdExpressionContext {
		return this.getRuleContext(0, IdExpressionContext);
	}
	public Equal(): TerminalNode { return this.getToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
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
	public idExpression(): IdExpressionContext {
		return this.getRuleContext(0, IdExpressionContext);
	}
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
	public Dot(): TerminalNode { return this.getToken(LiteParser.Dot, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
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
	public tupleExpression(): TupleExpressionContext[];
	public tupleExpression(i: number): TupleExpressionContext;
	public tupleExpression(i?: number): TupleExpressionContext | TupleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TupleExpressionContext);
		} else {
			return this.getRuleContext(i, TupleExpressionContext);
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


export class IdExpressionContext extends ParserRuleContext {
	public idExprItem(): IdExprItemContext[];
	public idExprItem(i: number): IdExprItemContext;
	public idExprItem(i?: number): IdExprItemContext | IdExprItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdExprItemContext);
		} else {
			return this.getRuleContext(i, IdExprItemContext);
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
	public get ruleIndex(): number { return LiteParser.RULE_idExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIdExpression) {
			return visitor.visitIdExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdExprItemContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_idExprItem; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIdExprItem) {
			return visitor.visitIdExprItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
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
	public plusMinus(): PlusMinusContext | undefined {
		return this.tryGetRuleContext(0, PlusMinusContext);
	}
	public bitwiseNotExpression(): BitwiseNotExpressionContext | undefined {
		return this.tryGetRuleContext(0, BitwiseNotExpressionContext);
	}
	public negate(): NegateContext | undefined {
		return this.tryGetRuleContext(0, NegateContext);
	}
	public judgeExpression(): JudgeExpressionContext | undefined {
		return this.tryGetRuleContext(0, JudgeExpressionContext);
	}
	public loopExpression(): LoopExpressionContext | undefined {
		return this.tryGetRuleContext(0, LoopExpressionContext);
	}
	public loopEachExpression(): LoopEachExpressionContext | undefined {
		return this.tryGetRuleContext(0, LoopEachExpressionContext);
	}
	public checkExpression(): CheckExpressionContext | undefined {
		return this.tryGetRuleContext(0, CheckExpressionContext);
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
	public judgeCaseExpression(): JudgeCaseExpressionContext | undefined {
		return this.tryGetRuleContext(0, JudgeCaseExpressionContext);
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
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public annotationList(): AnnotationListContext {
		return this.getRuleContext(0, AnnotationListContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
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
	public Dot(): TerminalNode { return this.getToken(LiteParser.Dot, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
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
	public Dot(): TerminalNode { return this.getToken(LiteParser.Dot, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
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
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
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


export class TypeConversionContext extends ParserRuleContext {
	public Dot(): TerminalNode { return this.getToken(LiteParser.Dot, 0); }
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
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
	public end(): EndContext[];
	public end(i: number): EndContext;
	public end(i?: number): EndContext | EndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndContext);
		} else {
			return this.getRuleContext(i, EndContext);
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
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Colon);
		} else {
			return this.getToken(LiteParser.Colon, i);
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
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Colon);
		} else {
			return this.getToken(LiteParser.Colon, i);
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
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
	public Dot_Dot(): TerminalNode { return this.getToken(LiteParser.Dot_Dot, 0); }
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
	public Dot_Dot(): TerminalNode { return this.getToken(LiteParser.Dot_Dot, 0); }
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
	public Dot_Dot(): TerminalNode { return this.getToken(LiteParser.Dot_Dot, 0); }
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
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public templateDefineItem(): TemplateDefineItemContext[];
	public templateDefineItem(i: number): TemplateDefineItemContext;
	public templateDefineItem(i?: number): TemplateDefineItemContext | TemplateDefineItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateDefineItemContext);
		} else {
			return this.getRuleContext(i, TemplateDefineItemContext);
		}
	}
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
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
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
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
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
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
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
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
	public end(): EndContext[];
	public end(i: number): EndContext;
	public end(i?: number): EndContext | EndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndContext);
		} else {
			return this.getRuleContext(i, EndContext);
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
	public _y: Token;
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
	public At(): TerminalNode | undefined { return this.tryGetToken(LiteParser.At, 0); }
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


export class JudgeExpressionContext extends ParserRuleContext {
	public judgeExpressionIfStatement(): JudgeExpressionIfStatementContext {
		return this.getRuleContext(0, JudgeExpressionIfStatementContext);
	}
	public judgeExpressionElseStatement(): JudgeExpressionElseStatementContext {
		return this.getRuleContext(0, JudgeExpressionElseStatementContext);
	}
	public judgeExpressionElseIfStatement(): JudgeExpressionElseIfStatementContext[];
	public judgeExpressionElseIfStatement(i: number): JudgeExpressionElseIfStatementContext;
	public judgeExpressionElseIfStatement(i?: number): JudgeExpressionElseIfStatementContext | JudgeExpressionElseIfStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JudgeExpressionElseIfStatementContext);
		} else {
			return this.getRuleContext(i, JudgeExpressionElseIfStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeExpression) {
			return visitor.visitJudgeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeExpressionElseStatementContext extends ParserRuleContext {
	public Discard(): TerminalNode { return this.getToken(LiteParser.Discard, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
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
	public get ruleIndex(): number { return LiteParser.RULE_judgeExpressionElseStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeExpressionElseStatement) {
			return visitor.visitJudgeExpressionElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeExpressionIfStatementContext extends ParserRuleContext {
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
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
	public get ruleIndex(): number { return LiteParser.RULE_judgeExpressionIfStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeExpressionIfStatement) {
			return visitor.visitJudgeExpressionIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeExpressionElseIfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
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
	public get ruleIndex(): number { return LiteParser.RULE_judgeExpressionElseIfStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeExpressionElseIfStatement) {
			return visitor.visitJudgeExpressionElseIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeCaseExpressionContext extends ParserRuleContext {
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public caseExpressionStatement(): CaseExpressionStatementContext[];
	public caseExpressionStatement(i: number): CaseExpressionStatementContext;
	public caseExpressionStatement(i?: number): CaseExpressionStatementContext | CaseExpressionStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseExpressionStatementContext);
		} else {
			return this.getRuleContext(i, CaseExpressionStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeCaseExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeCaseExpression) {
			return visitor.visitJudgeCaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseExpressionStatementContext extends ParserRuleContext {
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
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
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
	public get ruleIndex(): number { return LiteParser.RULE_caseExpressionStatement; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCaseExpressionStatement) {
			return visitor.visitCaseExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopExpressionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public iteratorStatement(): IteratorStatementContext {
		return this.getRuleContext(0, IteratorStatementContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
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
	public loopElseExpression(): LoopElseExpressionContext | undefined {
		return this.tryGetRuleContext(0, LoopElseExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopExpression) {
			return visitor.visitLoopExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopEachExpressionContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public loopElseExpression(): LoopElseExpressionContext | undefined {
		return this.tryGetRuleContext(0, LoopElseExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopEachExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopEachExpression) {
			return visitor.visitLoopEachExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopElseExpressionContext extends ParserRuleContext {
	public Discard(): TerminalNode { return this.getToken(LiteParser.Discard, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
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
	public get ruleIndex(): number { return LiteParser.RULE_loopElseExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopElseExpression) {
			return visitor.visitLoopElseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckExpressionContext extends ParserRuleContext {
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public checkFinallyStatment(): CheckFinallyStatmentContext | undefined {
		return this.tryGetRuleContext(0, CheckFinallyStatmentContext);
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
	public checkErrorExpression(): CheckErrorExpressionContext[];
	public checkErrorExpression(i: number): CheckErrorExpressionContext;
	public checkErrorExpression(i?: number): CheckErrorExpressionContext | CheckErrorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CheckErrorExpressionContext);
		} else {
			return this.getRuleContext(i, CheckErrorExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_checkExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCheckExpression) {
			return visitor.visitCheckExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckErrorExpressionContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
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
	public get ruleIndex(): number { return LiteParser.RULE_checkErrorExpression; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCheckErrorExpression) {
			return visitor.visitCheckErrorExpression(this);
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
	public typeStack(): TypeStackContext | undefined {
		return this.tryGetRuleContext(0, TypeStackContext);
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


export class TypeTupleContext extends ParserRuleContext {
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
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
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
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
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
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
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
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
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
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
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
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
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


export class TypeStackContext extends ParserRuleContext {
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public Xor(): TerminalNode { return this.getToken(LiteParser.Xor, 0); }
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeStack; }
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeStack) {
			return visitor.visitTypeStack(this);
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
	public _y: Token;
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
	public At(): TerminalNode | undefined { return this.tryGetToken(LiteParser.At, 0); }
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


