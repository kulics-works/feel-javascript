// Generated from /Users/huahua/Documents/lian/react/xsjs/src/compiler/LiteParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LiteParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LinqFrom=1, LinqBy=2, LinqSelect=3, LinqWhere=4, LinqGroup=5, LinqInto=6, 
		LinqOrderby=7, LinqJoin=8, LinqLet=9, LinqIn=10, LinqOn=11, LinqEquals=12, 
		LinqAscending=13, LinqDescending=14, Pow=15, Root=16, Log=17, Add_Equal=18, 
		Sub_Equal=19, Mul_Equal=20, Div_Equal=21, Mod_Equal=22, Colon_Equal=23, 
		Equal_Equal=24, Less_Equal=25, Greater_Equal=26, Not_Equal=27, Dot_Dot_Dot=28, 
		Dot_Dot=29, Dot=30, Comma=31, Equal_Arrow=32, Right_Arrow=33, Left_Arrow=34, 
		Right_Flow=35, Left_Flow=36, Equal=37, Less=38, Greater=39, Semi=40, Left_Paren=41, 
		Right_Paren=42, Left_Brace=43, Right_Brace=44, Left_Brack=45, Right_Brack=46, 
		Colon_Colon=47, Colon=48, Question=49, At=50, Bang=51, Wave=52, Add=53, 
		Sub=54, Mul=55, Div=56, Mod=57, Slash=58, And=59, Or=60, TypeI8=61, TypeU8=62, 
		TypeI16=63, TypeU16=64, TypeI32=65, TypeU32=66, TypeI64=67, TypeU64=68, 
		TypeF32=69, TypeF64=70, TypeChr=71, TypeStr=72, TypeBool=73, TypeInt=74, 
		TypeNum=75, TypeByte=76, TypeAny=77, NilLiteral=78, TrueLiteral=79, FalseLiteral=80, 
		UndefinedLiteral=81, NumberLiteral=82, TextLiteral=83, CharLiteral=84, 
		IDPrivate=85, IDPublic=86, Discard=87, Big_Big_Comment=88, Big_Comment=89, 
		Comment=90, New_Line=91, WS=92;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_exportStatement = 2, RULE_importStatement = 3, 
		RULE_namespaceSupportStatement = 4, RULE_typeAliasStatement = 5, RULE_typeRedefineStatement = 6, 
		RULE_enumStatement = 7, RULE_enumSupportStatement = 8, RULE_namespaceVariableStatement = 9, 
		RULE_namespaceControlStatement = 10, RULE_namespaceConstantStatement = 11, 
		RULE_namespaceFunctionStatement = 12, RULE_packageStatement = 13, RULE_packageSupportStatement = 14, 
		RULE_includeStatement = 15, RULE_packageNewStatement = 16, RULE_packageVariableStatement = 17, 
		RULE_packageControlSubStatement = 18, RULE_packageEventStatement = 19, 
		RULE_implementStatement = 20, RULE_implementSupportStatement = 21, RULE_implementFunctionStatement = 22, 
		RULE_implementControlStatement = 23, RULE_overrideStatement = 24, RULE_overrideSupportStatement = 25, 
		RULE_overrideFunctionStatement = 26, RULE_overrideControlStatement = 27, 
		RULE_protocolStatement = 28, RULE_protocolSupportStatement = 29, RULE_protocolControlStatement = 30, 
		RULE_protocolControlSubStatement = 31, RULE_protocolFunctionStatement = 32, 
		RULE_functionStatement = 33, RULE_returnStatement = 34, RULE_parameterClauseIn = 35, 
		RULE_parameterClauseOut = 36, RULE_parameterClauseSelf = 37, RULE_parameter = 38, 
		RULE_functionSupportStatement = 39, RULE_judgeCaseStatement = 40, RULE_caseDefaultStatement = 41, 
		RULE_caseExprStatement = 42, RULE_caseStatement = 43, RULE_judgeStatement = 44, 
		RULE_judgeElseStatement = 45, RULE_judgeIfStatement = 46, RULE_judgeElseIfStatement = 47, 
		RULE_loopStatement = 48, RULE_loopEachStatement = 49, RULE_loopCaseStatement = 50, 
		RULE_loopInfiniteStatement = 51, RULE_loopJumpStatement = 52, RULE_loopContinueStatement = 53, 
		RULE_checkStatement = 54, RULE_usingStatement = 55, RULE_checkErrorStatement = 56, 
		RULE_checkFinallyStatment = 57, RULE_reportStatement = 58, RULE_iteratorStatement = 59, 
		RULE_variableStatement = 60, RULE_variableDeclaredStatement = 61, RULE_channelAssignStatement = 62, 
		RULE_assignStatement = 63, RULE_expressionStatement = 64, RULE_primaryExpression = 65, 
		RULE_expression = 66, RULE_callExpression = 67, RULE_tuple = 68, RULE_expressionList = 69, 
		RULE_annotationSupport = 70, RULE_annotation = 71, RULE_annotationList = 72, 
		RULE_annotationItem = 73, RULE_annotationAssign = 74, RULE_callFunc = 75, 
		RULE_callChannel = 76, RULE_callElement = 77, RULE_callPkg = 78, RULE_callNew = 79, 
		RULE_getType = 80, RULE_typeConversion = 81, RULE_pkgAssign = 82, RULE_pkgAssignElement = 83, 
		RULE_listAssign = 84, RULE_setAssign = 85, RULE_dictionaryAssign = 86, 
		RULE_callAwait = 87, RULE_list = 88, RULE_set = 89, RULE_dictionary = 90, 
		RULE_dictionaryElement = 91, RULE_slice = 92, RULE_sliceFull = 93, RULE_sliceStart = 94, 
		RULE_sliceEnd = 95, RULE_nameSpaceItem = 96, RULE_name = 97, RULE_templateDefine = 98, 
		RULE_templateDefineItem = 99, RULE_templateCall = 100, RULE_lambda = 101, 
		RULE_lambdaIn = 102, RULE_pkgAnonymous = 103, RULE_pkgAnonymousAssign = 104, 
		RULE_pkgAnonymousAssignElement = 105, RULE_functionExpression = 106, RULE_tupleExpression = 107, 
		RULE_plusMinus = 108, RULE_negate = 109, RULE_linq = 110, RULE_linqItem = 111, 
		RULE_linqKeyword = 112, RULE_linqHeadKeyword = 113, RULE_linqBodyKeyword = 114, 
		RULE_stringExpression = 115, RULE_stringExpressionElement = 116, RULE_dataStatement = 117, 
		RULE_floatExpr = 118, RULE_integerExpr = 119, RULE_typeNotNull = 120, 
		RULE_typeReference = 121, RULE_typeNullable = 122, RULE_typeType = 123, 
		RULE_typeTuple = 124, RULE_typeArray = 125, RULE_typeList = 126, RULE_typeSet = 127, 
		RULE_typeDictionary = 128, RULE_typeChannel = 129, RULE_typePackage = 130, 
		RULE_typeFunction = 131, RULE_typeAny = 132, RULE_typeFunctionParameterClause = 133, 
		RULE_typeBasic = 134, RULE_nilExpr = 135, RULE_boolExpr = 136, RULE_judgeType = 137, 
		RULE_judge = 138, RULE_assign = 139, RULE_add = 140, RULE_mul = 141, RULE_pow = 142, 
		RULE_call = 143, RULE_wave = 144, RULE_id = 145, RULE_idItem = 146, RULE_end = 147, 
		RULE_more = 148, RULE_left_brace = 149, RULE_right_brace = 150, RULE_left_paren = 151, 
		RULE_right_paren = 152, RULE_left_brack = 153, RULE_right_brack = 154;
	public static final String[] ruleNames = {
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
		"caseDefaultStatement", "caseExprStatement", "caseStatement", "judgeStatement", 
		"judgeElseStatement", "judgeIfStatement", "judgeElseIfStatement", "loopStatement", 
		"loopEachStatement", "loopCaseStatement", "loopInfiniteStatement", "loopJumpStatement", 
		"loopContinueStatement", "checkStatement", "usingStatement", "checkErrorStatement", 
		"checkFinallyStatment", "reportStatement", "iteratorStatement", "variableStatement", 
		"variableDeclaredStatement", "channelAssignStatement", "assignStatement", 
		"expressionStatement", "primaryExpression", "expression", "callExpression", 
		"tuple", "expressionList", "annotationSupport", "annotation", "annotationList", 
		"annotationItem", "annotationAssign", "callFunc", "callChannel", "callElement", 
		"callPkg", "callNew", "getType", "typeConversion", "pkgAssign", "pkgAssignElement", 
		"listAssign", "setAssign", "dictionaryAssign", "callAwait", "list", "set", 
		"dictionary", "dictionaryElement", "slice", "sliceFull", "sliceStart", 
		"sliceEnd", "nameSpaceItem", "name", "templateDefine", "templateDefineItem", 
		"templateCall", "lambda", "lambdaIn", "pkgAnonymous", "pkgAnonymousAssign", 
		"pkgAnonymousAssignElement", "functionExpression", "tupleExpression", 
		"plusMinus", "negate", "linq", "linqItem", "linqKeyword", "linqHeadKeyword", 
		"linqBodyKeyword", "stringExpression", "stringExpressionElement", "dataStatement", 
		"floatExpr", "integerExpr", "typeNotNull", "typeReference", "typeNullable", 
		"typeType", "typeTuple", "typeArray", "typeList", "typeSet", "typeDictionary", 
		"typeChannel", "typePackage", "typeFunction", "typeAny", "typeFunctionParameterClause", 
		"typeBasic", "nilExpr", "boolExpr", "judgeType", "judge", "assign", "add", 
		"mul", "pow", "call", "wave", "id", "idItem", "end", "more", "left_brace", 
		"right_brace", "left_paren", "right_paren", "left_brack", "right_brack"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'from'", "'by'", "'select'", "'where'", "'group'", "'into'", "'orderby'", 
		"'join'", "'let'", "'in'", "'on'", "'equals'", "'ascending'", "'descending'", 
		"'**'", "'//'", "'%%'", "'+='", "'-='", "'*='", "'/='", "'%='", "':='", 
		"'=='", "'<='", "'>='", "'><'", "'...'", "'..'", "'.'", "','", "'=>'", 
		"'->'", "'<-'", "'~>'", "'<~'", "'='", "'<'", "'>'", "';'", "'('", "')'", 
		"'{'", "'}'", "'['", "']'", "'::'", "':'", "'?'", "'@'", "'!'", "'~'", 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'\\'", "'&'", "'|'", "'I8'", "'U8'", 
		"'I16'", "'U16'", "'I32'", "'U32'", "'I64'", "'U64'", "'F32'", "'F64'", 
		"'Chr'", "'Str'", "'Bool'", "'Int'", "'Num'", "'Byte'", "'Any'", "'Nil'", 
		"'True'", "'False'", "'Undefined'", null, null, null, null, null, "'_'", 
		null, null, null, "'\n'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "LinqFrom", "LinqBy", "LinqSelect", "LinqWhere", "LinqGroup", "LinqInto", 
		"LinqOrderby", "LinqJoin", "LinqLet", "LinqIn", "LinqOn", "LinqEquals", 
		"LinqAscending", "LinqDescending", "Pow", "Root", "Log", "Add_Equal", 
		"Sub_Equal", "Mul_Equal", "Div_Equal", "Mod_Equal", "Colon_Equal", "Equal_Equal", 
		"Less_Equal", "Greater_Equal", "Not_Equal", "Dot_Dot_Dot", "Dot_Dot", 
		"Dot", "Comma", "Equal_Arrow", "Right_Arrow", "Left_Arrow", "Right_Flow", 
		"Left_Flow", "Equal", "Less", "Greater", "Semi", "Left_Paren", "Right_Paren", 
		"Left_Brace", "Right_Brace", "Left_Brack", "Right_Brack", "Colon_Colon", 
		"Colon", "Question", "At", "Bang", "Wave", "Add", "Sub", "Mul", "Div", 
		"Mod", "Slash", "And", "Or", "TypeI8", "TypeU8", "TypeI16", "TypeU16", 
		"TypeI32", "TypeU32", "TypeI64", "TypeU64", "TypeF32", "TypeF64", "TypeChr", 
		"TypeStr", "TypeBool", "TypeInt", "TypeNum", "TypeByte", "TypeAny", "NilLiteral", 
		"TrueLiteral", "FalseLiteral", "UndefinedLiteral", "NumberLiteral", "TextLiteral", 
		"CharLiteral", "IDPrivate", "IDPublic", "Discard", "Big_Big_Comment", 
		"Big_Comment", "Comment", "New_Line", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LiteParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LiteParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(311); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(310);
				statement();
				}
				}
				setState(313); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 45)) & ~0x3f) == 0 && ((1L << (_la - 45)) & ((1L << (Left_Brack - 45)) | (1L << (TextLiteral - 45)) | (1L << (New_Line - 45)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public ExportStatementContext exportStatement() {
			return getRuleContext(ExportStatementContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public List<NamespaceSupportStatementContext> namespaceSupportStatement() {
			return getRuleContexts(NamespaceSupportStatementContext.class);
		}
		public NamespaceSupportStatementContext namespaceSupportStatement(int i) {
			return getRuleContext(NamespaceSupportStatementContext.class,i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(315);
				match(New_Line);
				}
				}
				setState(320);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(321);
				annotationSupport();
				}
			}

			setState(324);
			exportStatement();
			setState(328);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(325);
					match(New_Line);
					}
					} 
				}
				setState(330);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(334);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(331);
					namespaceSupportStatement();
					}
					} 
				}
				setState(336);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExportStatementContext extends ParserRuleContext {
		public TerminalNode TextLiteral() { return getToken(LiteParser.TextLiteral, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<ImportStatementContext> importStatement() {
			return getRuleContexts(ImportStatementContext.class);
		}
		public ImportStatementContext importStatement(int i) {
			return getRuleContext(ImportStatementContext.class,i);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public ExportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exportStatement; }
	}

	public final ExportStatementContext exportStatement() throws RecognitionException {
		ExportStatementContext _localctx = new ExportStatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_exportStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			match(TextLiteral);
			setState(338);
			left_brace();
			setState(343);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(341);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case Left_Brack:
					case TextLiteral:
						{
						setState(339);
						importStatement();
						}
						break;
					case New_Line:
						{
						setState(340);
						match(New_Line);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(345);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			setState(346);
			right_brace();
			setState(347);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportStatementContext extends ParserRuleContext {
		public TerminalNode TextLiteral() { return getToken(LiteParser.TextLiteral, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public CallContext call() {
			return getRuleContext(CallContext.class,0);
		}
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_importStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(349);
				annotationSupport();
				}
			}

			setState(352);
			match(TextLiteral);
			setState(357);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
				{
				setState(353);
				id();
				setState(355);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Dot) {
					{
					setState(354);
					call();
					}
				}

				}
			}

			setState(359);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceSupportStatementContext extends ParserRuleContext {
		public NamespaceVariableStatementContext namespaceVariableStatement() {
			return getRuleContext(NamespaceVariableStatementContext.class,0);
		}
		public NamespaceControlStatementContext namespaceControlStatement() {
			return getRuleContext(NamespaceControlStatementContext.class,0);
		}
		public NamespaceFunctionStatementContext namespaceFunctionStatement() {
			return getRuleContext(NamespaceFunctionStatementContext.class,0);
		}
		public NamespaceConstantStatementContext namespaceConstantStatement() {
			return getRuleContext(NamespaceConstantStatementContext.class,0);
		}
		public PackageStatementContext packageStatement() {
			return getRuleContext(PackageStatementContext.class,0);
		}
		public ProtocolStatementContext protocolStatement() {
			return getRuleContext(ProtocolStatementContext.class,0);
		}
		public ImplementStatementContext implementStatement() {
			return getRuleContext(ImplementStatementContext.class,0);
		}
		public OverrideStatementContext overrideStatement() {
			return getRuleContext(OverrideStatementContext.class,0);
		}
		public PackageNewStatementContext packageNewStatement() {
			return getRuleContext(PackageNewStatementContext.class,0);
		}
		public EnumStatementContext enumStatement() {
			return getRuleContext(EnumStatementContext.class,0);
		}
		public TypeAliasStatementContext typeAliasStatement() {
			return getRuleContext(TypeAliasStatementContext.class,0);
		}
		public TypeRedefineStatementContext typeRedefineStatement() {
			return getRuleContext(TypeRedefineStatementContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public NamespaceSupportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceSupportStatement; }
	}

	public final NamespaceSupportStatementContext namespaceSupportStatement() throws RecognitionException {
		NamespaceSupportStatementContext _localctx = new NamespaceSupportStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_namespaceSupportStatement);
		try {
			setState(374);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(361);
				namespaceVariableStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(362);
				namespaceControlStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(363);
				namespaceFunctionStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(364);
				namespaceConstantStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(365);
				packageStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(366);
				protocolStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(367);
				implementStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(368);
				overrideStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(369);
				packageNewStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(370);
				enumStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(371);
				typeAliasStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(372);
				typeRedefineStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(373);
				match(New_Line);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeAliasStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Equal_Arrow() { return getToken(LiteParser.Equal_Arrow, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TypeAliasStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAliasStatement; }
	}

	public final TypeAliasStatementContext typeAliasStatement() throws RecognitionException {
		TypeAliasStatementContext _localctx = new TypeAliasStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_typeAliasStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
			id();
			setState(377);
			match(Equal_Arrow);
			setState(378);
			typeType();
			setState(379);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeRedefineStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TypeRedefineStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeRedefineStatement; }
	}

	public final TypeRedefineStatementContext typeRedefineStatement() throws RecognitionException {
		TypeRedefineStatementContext _localctx = new TypeRedefineStatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_typeRedefineStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(381);
			id();
			setState(382);
			match(Right_Arrow);
			setState(383);
			typeType();
			setState(384);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public Left_brackContext left_brack() {
			return getRuleContext(Left_brackContext.class,0);
		}
		public Right_brackContext right_brack() {
			return getRuleContext(Right_brackContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<EnumSupportStatementContext> enumSupportStatement() {
			return getRuleContexts(EnumSupportStatementContext.class);
		}
		public EnumSupportStatementContext enumSupportStatement(int i) {
			return getRuleContext(EnumSupportStatementContext.class,i);
		}
		public EnumStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumStatement; }
	}

	public final EnumStatementContext enumStatement() throws RecognitionException {
		EnumStatementContext _localctx = new EnumStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_enumStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(387);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(386);
				annotationSupport();
				}
			}

			setState(389);
			id();
			setState(390);
			match(Right_Arrow);
			setState(394);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(391);
				match(New_Line);
				}
				}
				setState(396);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(397);
			typeType();
			setState(398);
			left_brack();
			setState(402);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
				{
				{
				setState(399);
				enumSupportStatement();
				}
				}
				setState(404);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(405);
			right_brack();
			setState(406);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumSupportStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public IntegerExprContext integerExpr() {
			return getRuleContext(IntegerExprContext.class,0);
		}
		public AddContext add() {
			return getRuleContext(AddContext.class,0);
		}
		public EnumSupportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumSupportStatement; }
	}

	public final EnumSupportStatementContext enumSupportStatement() throws RecognitionException {
		EnumSupportStatementContext _localctx = new EnumSupportStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_enumSupportStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			id();
			setState(414);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Equal) {
				{
				setState(409);
				match(Equal);
				setState(411);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Add || _la==Sub) {
					{
					setState(410);
					add();
					}
				}

				setState(413);
				integerExpr();
				}
			}

			setState(416);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceVariableStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Colon_Equal() { return getToken(LiteParser.Colon_Equal, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public NamespaceVariableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceVariableStatement; }
	}

	public final NamespaceVariableStatementContext namespaceVariableStatement() throws RecognitionException {
		NamespaceVariableStatementContext _localctx = new NamespaceVariableStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_namespaceVariableStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(418);
				annotationSupport();
				}
			}

			setState(421);
			id();
			setState(430);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Colon_Equal:
				{
				setState(422);
				match(Colon_Equal);
				setState(423);
				expression(0);
				}
				break;
			case Colon:
				{
				setState(424);
				match(Colon);
				setState(425);
				typeType();
				setState(428);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Equal) {
					{
					setState(426);
					match(Equal);
					setState(427);
					expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(432);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceControlStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<PackageControlSubStatementContext> packageControlSubStatement() {
			return getRuleContexts(PackageControlSubStatementContext.class);
		}
		public PackageControlSubStatementContext packageControlSubStatement(int i) {
			return getRuleContext(PackageControlSubStatementContext.class,i);
		}
		public NamespaceControlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceControlStatement; }
	}

	public final NamespaceControlStatementContext namespaceControlStatement() throws RecognitionException {
		NamespaceControlStatementContext _localctx = new NamespaceControlStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_namespaceControlStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(435);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(434);
				annotationSupport();
				}
			}

			setState(437);
			id();
			setState(438);
			match(Colon);
			setState(439);
			typeType();
			setState(442);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Equal) {
				{
				setState(440);
				match(Equal);
				setState(441);
				expression(0);
				}
			}

			setState(444);
			match(Right_Arrow);
			setState(446); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(445);
				packageControlSubStatement();
				}
				}
				setState(448); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0) );
			setState(450);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceConstantStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<TerminalNode> Colon() { return getTokens(LiteParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(LiteParser.Colon, i);
		}
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode Colon_Colon() { return getToken(LiteParser.Colon_Colon, 0); }
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public NamespaceConstantStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceConstantStatement; }
	}

	public final NamespaceConstantStatementContext namespaceConstantStatement() throws RecognitionException {
		NamespaceConstantStatementContext _localctx = new NamespaceConstantStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_namespaceConstantStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(453);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(452);
				annotationSupport();
				}
			}

			setState(455);
			id();
			setState(461);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Colon:
				{
				setState(456);
				match(Colon);
				setState(457);
				typeType();
				setState(458);
				match(Colon);
				}
				break;
			case Colon_Colon:
				{
				setState(460);
				match(Colon_Colon);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(463);
			expression(0);
			setState(464);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceFunctionStatementContext extends ParserRuleContext {
		public Token t;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ParameterClauseInContext parameterClauseIn() {
			return getRuleContext(ParameterClauseInContext.class,0);
		}
		public ParameterClauseOutContext parameterClauseOut() {
			return getRuleContext(ParameterClauseOutContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Flow() { return getToken(LiteParser.Right_Flow, 0); }
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TemplateDefineContext templateDefine() {
			return getRuleContext(TemplateDefineContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public NamespaceFunctionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceFunctionStatement; }
	}

	public final NamespaceFunctionStatementContext namespaceFunctionStatement() throws RecognitionException {
		NamespaceFunctionStatementContext _localctx = new NamespaceFunctionStatementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_namespaceFunctionStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(467);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(466);
				annotationSupport();
				}
			}

			setState(469);
			id();
			setState(471);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Less) {
				{
				setState(470);
				templateDefine();
				}
			}

			setState(473);
			parameterClauseIn();
			setState(474);
			((NamespaceFunctionStatementContext)_localctx).t = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
				((NamespaceFunctionStatementContext)_localctx).t = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(478);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(475);
				match(New_Line);
				}
				}
				setState(480);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(481);
			parameterClauseOut();
			setState(482);
			left_brace();
			setState(486);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(483);
					functionSupportStatement();
					}
					} 
				}
				setState(488);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			}
			setState(489);
			right_brace();
			setState(490);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PackageStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TemplateDefineContext templateDefine() {
			return getRuleContext(TemplateDefineContext.class,0);
		}
		public List<PackageSupportStatementContext> packageSupportStatement() {
			return getRuleContexts(PackageSupportStatementContext.class);
		}
		public PackageSupportStatementContext packageSupportStatement(int i) {
			return getRuleContext(PackageSupportStatementContext.class,i);
		}
		public PackageStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageStatement; }
	}

	public final PackageStatementContext packageStatement() throws RecognitionException {
		PackageStatementContext _localctx = new PackageStatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_packageStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(493);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(492);
				annotationSupport();
				}
			}

			setState(495);
			id();
			setState(497);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Less) {
				{
				setState(496);
				templateDefine();
				}
			}

			setState(499);
			match(Right_Arrow);
			setState(500);
			left_brace();
			setState(504);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(501);
					packageSupportStatement();
					}
					} 
				}
				setState(506);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			}
			setState(507);
			right_brace();
			setState(508);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PackageSupportStatementContext extends ParserRuleContext {
		public IncludeStatementContext includeStatement() {
			return getRuleContext(IncludeStatementContext.class,0);
		}
		public PackageVariableStatementContext packageVariableStatement() {
			return getRuleContext(PackageVariableStatementContext.class,0);
		}
		public PackageEventStatementContext packageEventStatement() {
			return getRuleContext(PackageEventStatementContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public PackageSupportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageSupportStatement; }
	}

	public final PackageSupportStatementContext packageSupportStatement() throws RecognitionException {
		PackageSupportStatementContext _localctx = new PackageSupportStatementContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_packageSupportStatement);
		try {
			setState(514);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(510);
				includeStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(511);
				packageVariableStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(512);
				packageEventStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(513);
				match(New_Line);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IncludeStatementContext extends ParserRuleContext {
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public IncludeStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_includeStatement; }
	}

	public final IncludeStatementContext includeStatement() throws RecognitionException {
		IncludeStatementContext _localctx = new IncludeStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_includeStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(516);
			match(Colon);
			setState(517);
			typeType();
			setState(518);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PackageNewStatementContext extends ParserRuleContext {
		public ParameterClauseSelfContext parameterClauseSelf() {
			return getRuleContext(ParameterClauseSelfContext.class,0);
		}
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public ParameterClauseInContext parameterClauseIn() {
			return getRuleContext(ParameterClauseInContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public PackageNewStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageNewStatement; }
	}

	public final PackageNewStatementContext packageNewStatement() throws RecognitionException {
		PackageNewStatementContext _localctx = new PackageNewStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_packageNewStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(521);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(520);
				annotationSupport();
				}
			}

			setState(523);
			parameterClauseSelf();
			setState(524);
			match(Less);
			setState(525);
			match(Greater);
			setState(526);
			parameterClauseIn();
			setState(533);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Paren) {
				{
				setState(527);
				left_paren();
				setState(529);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Flow) | (1L << Less) | (1L << Left_Paren) | (1L << Left_Brace) | (1L << Left_Brack) | (1L << Question) | (1L << Bang) | (1L << Wave) | (1L << Add) | (1L << Sub) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (NilLiteral - 64)) | (1L << (TrueLiteral - 64)) | (1L << (FalseLiteral - 64)) | (1L << (UndefinedLiteral - 64)) | (1L << (NumberLiteral - 64)) | (1L << (TextLiteral - 64)) | (1L << (CharLiteral - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)) | (1L << (Discard - 64)))) != 0)) {
					{
					setState(528);
					expressionList();
					}
				}

				setState(531);
				right_paren();
				}
			}

			setState(535);
			left_brace();
			setState(539);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(536);
					functionSupportStatement();
					}
					} 
				}
				setState(541);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			}
			setState(542);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PackageVariableStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Colon_Equal() { return getToken(LiteParser.Colon_Equal, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public PackageVariableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageVariableStatement; }
	}

	public final PackageVariableStatementContext packageVariableStatement() throws RecognitionException {
		PackageVariableStatementContext _localctx = new PackageVariableStatementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_packageVariableStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(544);
				annotationSupport();
				}
			}

			setState(547);
			id();
			setState(556);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Colon_Equal:
				{
				setState(548);
				match(Colon_Equal);
				setState(549);
				expression(0);
				}
				break;
			case Colon:
				{
				setState(550);
				match(Colon);
				setState(551);
				typeType();
				setState(554);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Equal) {
					{
					setState(552);
					match(Equal);
					setState(553);
					expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(558);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PackageControlSubStatementContext extends ParserRuleContext {
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public PackageControlSubStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageControlSubStatement; }
	}

	public final PackageControlSubStatementContext packageControlSubStatement() throws RecognitionException {
		PackageControlSubStatementContext _localctx = new PackageControlSubStatementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_packageControlSubStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(560);
			id();
			setState(565);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Paren) {
				{
				setState(561);
				left_paren();
				setState(562);
				id();
				setState(563);
				right_paren();
				}
			}

			setState(567);
			left_brace();
			setState(569); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(568);
					functionSupportStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(571); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(573);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PackageEventStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public Left_brackContext left_brack() {
			return getRuleContext(Left_brackContext.class,0);
		}
		public TerminalNode Question() { return getToken(LiteParser.Question, 0); }
		public Right_brackContext right_brack() {
			return getRuleContext(Right_brackContext.class,0);
		}
		public NameSpaceItemContext nameSpaceItem() {
			return getRuleContext(NameSpaceItemContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public PackageEventStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_packageEventStatement; }
	}

	public final PackageEventStatementContext packageEventStatement() throws RecognitionException {
		PackageEventStatementContext _localctx = new PackageEventStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_packageEventStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(575);
			id();
			setState(576);
			match(Colon);
			setState(577);
			left_brack();
			setState(578);
			match(Question);
			setState(579);
			right_brack();
			setState(580);
			nameSpaceItem();
			setState(581);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImplementStatementContext extends ParserRuleContext {
		public ParameterClauseSelfContext parameterClauseSelf() {
			return getRuleContext(ParameterClauseSelfContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<ImplementSupportStatementContext> implementSupportStatement() {
			return getRuleContexts(ImplementSupportStatementContext.class);
		}
		public ImplementSupportStatementContext implementSupportStatement(int i) {
			return getRuleContext(ImplementSupportStatementContext.class,i);
		}
		public ImplementStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_implementStatement; }
	}

	public final ImplementStatementContext implementStatement() throws RecognitionException {
		ImplementStatementContext _localctx = new ImplementStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_implementStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(583);
			parameterClauseSelf();
			setState(584);
			match(Right_Arrow);
			setState(586);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Paren) | (1L << Left_Brack) | (1L << Question) | (1L << Bang) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
				{
				setState(585);
				typeType();
				}
			}

			setState(591);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(588);
				match(New_Line);
				}
				}
				setState(593);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(594);
			left_brace();
			setState(598);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(595);
					implementSupportStatement();
					}
					} 
				}
				setState(600);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			}
			setState(601);
			right_brace();
			setState(602);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImplementSupportStatementContext extends ParserRuleContext {
		public ImplementFunctionStatementContext implementFunctionStatement() {
			return getRuleContext(ImplementFunctionStatementContext.class,0);
		}
		public ImplementControlStatementContext implementControlStatement() {
			return getRuleContext(ImplementControlStatementContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public ImplementSupportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_implementSupportStatement; }
	}

	public final ImplementSupportStatementContext implementSupportStatement() throws RecognitionException {
		ImplementSupportStatementContext _localctx = new ImplementSupportStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_implementSupportStatement);
		try {
			setState(607);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(604);
				implementFunctionStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(605);
				implementControlStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(606);
				match(New_Line);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImplementFunctionStatementContext extends ParserRuleContext {
		public Token n;
		public Token t;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ParameterClauseInContext parameterClauseIn() {
			return getRuleContext(ParameterClauseInContext.class,0);
		}
		public ParameterClauseOutContext parameterClauseOut() {
			return getRuleContext(ParameterClauseOutContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Flow() { return getToken(LiteParser.Right_Flow, 0); }
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TemplateDefineContext templateDefine() {
			return getRuleContext(TemplateDefineContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public ImplementFunctionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_implementFunctionStatement; }
	}

	public final ImplementFunctionStatementContext implementFunctionStatement() throws RecognitionException {
		ImplementFunctionStatementContext _localctx = new ImplementFunctionStatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_implementFunctionStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(610);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(609);
				annotationSupport();
				}
			}

			setState(613);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Discard) {
				{
				setState(612);
				((ImplementFunctionStatementContext)_localctx).n = match(Discard);
				}
			}

			setState(615);
			id();
			setState(617);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Less) {
				{
				setState(616);
				templateDefine();
				}
			}

			setState(619);
			parameterClauseIn();
			setState(620);
			((ImplementFunctionStatementContext)_localctx).t = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
				((ImplementFunctionStatementContext)_localctx).t = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(624);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(621);
				match(New_Line);
				}
				}
				setState(626);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(627);
			parameterClauseOut();
			setState(628);
			left_brace();
			setState(632);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(629);
					functionSupportStatement();
					}
					} 
				}
				setState(634);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			setState(635);
			right_brace();
			setState(636);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImplementControlStatementContext extends ParserRuleContext {
		public Token n;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public List<PackageControlSubStatementContext> packageControlSubStatement() {
			return getRuleContexts(PackageControlSubStatementContext.class);
		}
		public PackageControlSubStatementContext packageControlSubStatement(int i) {
			return getRuleContext(PackageControlSubStatementContext.class,i);
		}
		public ImplementControlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_implementControlStatement; }
	}

	public final ImplementControlStatementContext implementControlStatement() throws RecognitionException {
		ImplementControlStatementContext _localctx = new ImplementControlStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_implementControlStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(639);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(638);
				annotationSupport();
				}
			}

			setState(642);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Discard) {
				{
				setState(641);
				((ImplementControlStatementContext)_localctx).n = match(Discard);
				}
			}

			setState(644);
			id();
			setState(645);
			match(Colon);
			setState(646);
			typeType();
			setState(647);
			match(Right_Arrow);
			setState(649); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(648);
				packageControlSubStatement();
				}
				}
				setState(651); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0) );
			setState(653);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OverrideStatementContext extends ParserRuleContext {
		public ParameterClauseSelfContext parameterClauseSelf() {
			return getRuleContext(ParameterClauseSelfContext.class,0);
		}
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<OverrideSupportStatementContext> overrideSupportStatement() {
			return getRuleContexts(OverrideSupportStatementContext.class);
		}
		public OverrideSupportStatementContext overrideSupportStatement(int i) {
			return getRuleContext(OverrideSupportStatementContext.class,i);
		}
		public OverrideStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_overrideStatement; }
	}

	public final OverrideStatementContext overrideStatement() throws RecognitionException {
		OverrideStatementContext _localctx = new OverrideStatementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_overrideStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(655);
			parameterClauseSelf();
			setState(656);
			left_paren();
			setState(657);
			id();
			setState(658);
			right_paren();
			setState(659);
			match(Right_Arrow);
			setState(663);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(660);
				match(New_Line);
				}
				}
				setState(665);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(666);
			left_brace();
			setState(670);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(667);
					overrideSupportStatement();
					}
					} 
				}
				setState(672);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
			}
			setState(673);
			right_brace();
			setState(674);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OverrideSupportStatementContext extends ParserRuleContext {
		public OverrideFunctionStatementContext overrideFunctionStatement() {
			return getRuleContext(OverrideFunctionStatementContext.class,0);
		}
		public OverrideControlStatementContext overrideControlStatement() {
			return getRuleContext(OverrideControlStatementContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public OverrideSupportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_overrideSupportStatement; }
	}

	public final OverrideSupportStatementContext overrideSupportStatement() throws RecognitionException {
		OverrideSupportStatementContext _localctx = new OverrideSupportStatementContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_overrideSupportStatement);
		try {
			setState(679);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(676);
				overrideFunctionStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(677);
				overrideControlStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(678);
				match(New_Line);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OverrideFunctionStatementContext extends ParserRuleContext {
		public Token n;
		public Token t;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ParameterClauseInContext parameterClauseIn() {
			return getRuleContext(ParameterClauseInContext.class,0);
		}
		public ParameterClauseOutContext parameterClauseOut() {
			return getRuleContext(ParameterClauseOutContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Flow() { return getToken(LiteParser.Right_Flow, 0); }
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TemplateDefineContext templateDefine() {
			return getRuleContext(TemplateDefineContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public OverrideFunctionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_overrideFunctionStatement; }
	}

	public final OverrideFunctionStatementContext overrideFunctionStatement() throws RecognitionException {
		OverrideFunctionStatementContext _localctx = new OverrideFunctionStatementContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_overrideFunctionStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(682);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(681);
				annotationSupport();
				}
			}

			setState(685);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Discard) {
				{
				setState(684);
				((OverrideFunctionStatementContext)_localctx).n = match(Discard);
				}
			}

			setState(687);
			id();
			setState(689);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Less) {
				{
				setState(688);
				templateDefine();
				}
			}

			setState(691);
			parameterClauseIn();
			setState(692);
			((OverrideFunctionStatementContext)_localctx).t = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
				((OverrideFunctionStatementContext)_localctx).t = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(696);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(693);
				match(New_Line);
				}
				}
				setState(698);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(699);
			parameterClauseOut();
			setState(700);
			left_brace();
			setState(704);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,60,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(701);
					functionSupportStatement();
					}
					} 
				}
				setState(706);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,60,_ctx);
			}
			setState(707);
			right_brace();
			setState(708);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OverrideControlStatementContext extends ParserRuleContext {
		public Token n;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public List<PackageControlSubStatementContext> packageControlSubStatement() {
			return getRuleContexts(PackageControlSubStatementContext.class);
		}
		public PackageControlSubStatementContext packageControlSubStatement(int i) {
			return getRuleContext(PackageControlSubStatementContext.class,i);
		}
		public OverrideControlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_overrideControlStatement; }
	}

	public final OverrideControlStatementContext overrideControlStatement() throws RecognitionException {
		OverrideControlStatementContext _localctx = new OverrideControlStatementContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_overrideControlStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(711);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(710);
				annotationSupport();
				}
			}

			setState(714);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Discard) {
				{
				setState(713);
				((OverrideControlStatementContext)_localctx).n = match(Discard);
				}
			}

			setState(716);
			id();
			setState(717);
			match(Colon);
			setState(718);
			typeType();
			setState(719);
			match(Right_Arrow);
			setState(721); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(720);
				packageControlSubStatement();
				}
				}
				setState(723); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0) );
			setState(725);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Left_Arrow() { return getToken(LiteParser.Left_Arrow, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TemplateDefineContext templateDefine() {
			return getRuleContext(TemplateDefineContext.class,0);
		}
		public List<ProtocolSupportStatementContext> protocolSupportStatement() {
			return getRuleContexts(ProtocolSupportStatementContext.class);
		}
		public ProtocolSupportStatementContext protocolSupportStatement(int i) {
			return getRuleContext(ProtocolSupportStatementContext.class,i);
		}
		public ProtocolStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolStatement; }
	}

	public final ProtocolStatementContext protocolStatement() throws RecognitionException {
		ProtocolStatementContext _localctx = new ProtocolStatementContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_protocolStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(728);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(727);
				annotationSupport();
				}
			}

			setState(730);
			id();
			setState(732);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Less) {
				{
				setState(731);
				templateDefine();
				}
			}

			setState(734);
			match(Left_Arrow);
			setState(735);
			left_brace();
			setState(739);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(736);
					protocolSupportStatement();
					}
					} 
				}
				setState(741);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
			}
			setState(742);
			right_brace();
			setState(743);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolSupportStatementContext extends ParserRuleContext {
		public IncludeStatementContext includeStatement() {
			return getRuleContext(IncludeStatementContext.class,0);
		}
		public ProtocolFunctionStatementContext protocolFunctionStatement() {
			return getRuleContext(ProtocolFunctionStatementContext.class,0);
		}
		public ProtocolControlStatementContext protocolControlStatement() {
			return getRuleContext(ProtocolControlStatementContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public ProtocolSupportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolSupportStatement; }
	}

	public final ProtocolSupportStatementContext protocolSupportStatement() throws RecognitionException {
		ProtocolSupportStatementContext _localctx = new ProtocolSupportStatementContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_protocolSupportStatement);
		try {
			setState(749);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,67,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(745);
				includeStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(746);
				protocolFunctionStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(747);
				protocolControlStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(748);
				match(New_Line);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolControlStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public List<ProtocolControlSubStatementContext> protocolControlSubStatement() {
			return getRuleContexts(ProtocolControlSubStatementContext.class);
		}
		public ProtocolControlSubStatementContext protocolControlSubStatement(int i) {
			return getRuleContext(ProtocolControlSubStatementContext.class,i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public List<TerminalNode> Comma() { return getTokens(LiteParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(LiteParser.Comma, i);
		}
		public ProtocolControlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolControlStatement; }
	}

	public final ProtocolControlStatementContext protocolControlStatement() throws RecognitionException {
		ProtocolControlStatementContext _localctx = new ProtocolControlStatementContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_protocolControlStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(752);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(751);
				annotationSupport();
				}
			}

			setState(754);
			id();
			setState(755);
			match(Colon);
			setState(756);
			typeType();
			setState(757);
			match(Right_Arrow);
			setState(758);
			protocolControlSubStatement();
			setState(763);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(759);
				match(Comma);
				setState(760);
				protocolControlSubStatement();
				}
				}
				setState(765);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(766);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolControlSubStatementContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ProtocolControlSubStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolControlSubStatement; }
	}

	public final ProtocolControlSubStatementContext protocolControlSubStatement() throws RecognitionException {
		ProtocolControlSubStatementContext _localctx = new ProtocolControlSubStatementContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_protocolControlSubStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(768);
			id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolFunctionStatementContext extends ParserRuleContext {
		public Token t;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ParameterClauseInContext parameterClauseIn() {
			return getRuleContext(ParameterClauseInContext.class,0);
		}
		public ParameterClauseOutContext parameterClauseOut() {
			return getRuleContext(ParameterClauseOutContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Flow() { return getToken(LiteParser.Right_Flow, 0); }
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TemplateDefineContext templateDefine() {
			return getRuleContext(TemplateDefineContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public ProtocolFunctionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolFunctionStatement; }
	}

	public final ProtocolFunctionStatementContext protocolFunctionStatement() throws RecognitionException {
		ProtocolFunctionStatementContext _localctx = new ProtocolFunctionStatementContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_protocolFunctionStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(771);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(770);
				annotationSupport();
				}
			}

			setState(773);
			id();
			setState(775);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Less) {
				{
				setState(774);
				templateDefine();
				}
			}

			setState(777);
			parameterClauseIn();
			setState(778);
			((ProtocolFunctionStatementContext)_localctx).t = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
				((ProtocolFunctionStatementContext)_localctx).t = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(782);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(779);
				match(New_Line);
				}
				}
				setState(784);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(785);
			parameterClauseOut();
			setState(786);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionStatementContext extends ParserRuleContext {
		public Token t;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ParameterClauseInContext parameterClauseIn() {
			return getRuleContext(ParameterClauseInContext.class,0);
		}
		public ParameterClauseOutContext parameterClauseOut() {
			return getRuleContext(ParameterClauseOutContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Flow() { return getToken(LiteParser.Right_Flow, 0); }
		public TemplateDefineContext templateDefine() {
			return getRuleContext(TemplateDefineContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public FunctionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionStatement; }
	}

	public final FunctionStatementContext functionStatement() throws RecognitionException {
		FunctionStatementContext _localctx = new FunctionStatementContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_functionStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(788);
			id();
			setState(790);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Less) {
				{
				setState(789);
				templateDefine();
				}
			}

			setState(792);
			parameterClauseIn();
			setState(793);
			((FunctionStatementContext)_localctx).t = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
				((FunctionStatementContext)_localctx).t = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(797);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(794);
				match(New_Line);
				}
				}
				setState(799);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(800);
			parameterClauseOut();
			setState(801);
			left_brace();
			setState(805);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,75,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(802);
					functionSupportStatement();
					}
					} 
				}
				setState(807);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,75,_ctx);
			}
			setState(808);
			right_brace();
			setState(809);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode Left_Arrow() { return getToken(LiteParser.Left_Arrow, 0); }
		public TupleContext tuple() {
			return getRuleContext(TupleContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(811);
			match(Left_Arrow);
			setState(812);
			tuple();
			setState(813);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterClauseInContext extends ParserRuleContext {
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public ParameterClauseInContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterClauseIn; }
	}

	public final ParameterClauseInContext parameterClauseIn() throws RecognitionException {
		ParameterClauseInContext _localctx = new ParameterClauseInContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_parameterClauseIn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(815);
			left_paren();
			setState(817);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Brack) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
				{
				setState(816);
				parameter();
				}
			}

			setState(824);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(819);
				more();
				setState(820);
				parameter();
				}
				}
				setState(826);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(827);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterClauseOutContext extends ParserRuleContext {
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public ParameterClauseOutContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterClauseOut; }
	}

	public final ParameterClauseOutContext parameterClauseOut() throws RecognitionException {
		ParameterClauseOutContext _localctx = new ParameterClauseOutContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_parameterClauseOut);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(829);
			left_paren();
			setState(831);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Brack) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
				{
				setState(830);
				parameter();
				}
			}

			setState(838);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(833);
				more();
				setState(834);
				parameter();
				}
				}
				setState(840);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(841);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterClauseSelfContext extends ParserRuleContext {
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public ParameterClauseSelfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterClauseSelf; }
	}

	public final ParameterClauseSelfContext parameterClauseSelf() throws RecognitionException {
		ParameterClauseSelfContext _localctx = new ParameterClauseSelfContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_parameterClauseSelf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(843);
			left_paren();
			setState(844);
			id();
			setState(845);
			match(Colon);
			setState(846);
			typeType();
			setState(847);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public AnnotationSupportContext annotationSupport() {
			return getRuleContext(AnnotationSupportContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_parameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(850);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(849);
				annotationSupport();
				}
			}

			setState(852);
			id();
			setState(853);
			match(Colon);
			setState(854);
			typeType();
			setState(857);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Equal) {
				{
				setState(855);
				match(Equal);
				setState(856);
				expression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionSupportStatementContext extends ParserRuleContext {
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public JudgeCaseStatementContext judgeCaseStatement() {
			return getRuleContext(JudgeCaseStatementContext.class,0);
		}
		public JudgeStatementContext judgeStatement() {
			return getRuleContext(JudgeStatementContext.class,0);
		}
		public LoopStatementContext loopStatement() {
			return getRuleContext(LoopStatementContext.class,0);
		}
		public LoopEachStatementContext loopEachStatement() {
			return getRuleContext(LoopEachStatementContext.class,0);
		}
		public LoopCaseStatementContext loopCaseStatement() {
			return getRuleContext(LoopCaseStatementContext.class,0);
		}
		public LoopInfiniteStatementContext loopInfiniteStatement() {
			return getRuleContext(LoopInfiniteStatementContext.class,0);
		}
		public LoopJumpStatementContext loopJumpStatement() {
			return getRuleContext(LoopJumpStatementContext.class,0);
		}
		public LoopContinueStatementContext loopContinueStatement() {
			return getRuleContext(LoopContinueStatementContext.class,0);
		}
		public UsingStatementContext usingStatement() {
			return getRuleContext(UsingStatementContext.class,0);
		}
		public CheckStatementContext checkStatement() {
			return getRuleContext(CheckStatementContext.class,0);
		}
		public ReportStatementContext reportStatement() {
			return getRuleContext(ReportStatementContext.class,0);
		}
		public FunctionStatementContext functionStatement() {
			return getRuleContext(FunctionStatementContext.class,0);
		}
		public VariableStatementContext variableStatement() {
			return getRuleContext(VariableStatementContext.class,0);
		}
		public VariableDeclaredStatementContext variableDeclaredStatement() {
			return getRuleContext(VariableDeclaredStatementContext.class,0);
		}
		public ChannelAssignStatementContext channelAssignStatement() {
			return getRuleContext(ChannelAssignStatementContext.class,0);
		}
		public AssignStatementContext assignStatement() {
			return getRuleContext(AssignStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public FunctionSupportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionSupportStatement; }
	}

	public final FunctionSupportStatementContext functionSupportStatement() throws RecognitionException {
		FunctionSupportStatementContext _localctx = new FunctionSupportStatementContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_functionSupportStatement);
		try {
			setState(878);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,82,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(859);
				returnStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(860);
				judgeCaseStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(861);
				judgeStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(862);
				loopStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(863);
				loopEachStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(864);
				loopCaseStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(865);
				loopInfiniteStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(866);
				loopJumpStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(867);
				loopContinueStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(868);
				usingStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(869);
				checkStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(870);
				reportStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(871);
				functionStatement();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(872);
				variableStatement();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(873);
				variableDeclaredStatement();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(874);
				channelAssignStatement();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(875);
				assignStatement();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(876);
				expressionStatement();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(877);
				match(New_Line);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JudgeCaseStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Question() { return getToken(LiteParser.Question, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<CaseStatementContext> caseStatement() {
			return getRuleContexts(CaseStatementContext.class);
		}
		public CaseStatementContext caseStatement(int i) {
			return getRuleContext(CaseStatementContext.class,i);
		}
		public JudgeCaseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_judgeCaseStatement; }
	}

	public final JudgeCaseStatementContext judgeCaseStatement() throws RecognitionException {
		JudgeCaseStatementContext _localctx = new JudgeCaseStatementContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_judgeCaseStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(880);
			expression(0);
			setState(881);
			match(Question);
			setState(883); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(882);
				caseStatement();
				}
				}
				setState(885); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Flow) | (1L << Less) | (1L << Left_Paren) | (1L << Left_Brace) | (1L << Left_Brack) | (1L << Colon) | (1L << Question) | (1L << Bang) | (1L << Wave) | (1L << Add) | (1L << Sub) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (NilLiteral - 64)) | (1L << (TrueLiteral - 64)) | (1L << (FalseLiteral - 64)) | (1L << (UndefinedLiteral - 64)) | (1L << (NumberLiteral - 64)) | (1L << (TextLiteral - 64)) | (1L << (CharLiteral - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)) | (1L << (Discard - 64)))) != 0) );
			setState(887);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseDefaultStatementContext extends ParserRuleContext {
		public TerminalNode Discard() { return getToken(LiteParser.Discard, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public CaseDefaultStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseDefaultStatement; }
	}

	public final CaseDefaultStatementContext caseDefaultStatement() throws RecognitionException {
		CaseDefaultStatementContext _localctx = new CaseDefaultStatementContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_caseDefaultStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(889);
			match(Discard);
			setState(890);
			left_brace();
			setState(894);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,84,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(891);
					functionSupportStatement();
					}
					} 
				}
				setState(896);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,84,_ctx);
			}
			setState(897);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseExprStatementContext extends ParserRuleContext {
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public CaseExprStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseExprStatement; }
	}

	public final CaseExprStatementContext caseExprStatement() throws RecognitionException {
		CaseExprStatementContext _localctx = new CaseExprStatementContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_caseExprStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(905);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
			case 1:
				{
				setState(899);
				expression(0);
				}
				break;
			case 2:
				{
				setState(901);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
					{
					setState(900);
					id();
					}
				}

				setState(903);
				match(Colon);
				setState(904);
				typeType();
				}
				break;
			}
			setState(907);
			left_brace();
			setState(911);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,87,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(908);
					functionSupportStatement();
					}
					} 
				}
				setState(913);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,87,_ctx);
			}
			setState(914);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseStatementContext extends ParserRuleContext {
		public CaseDefaultStatementContext caseDefaultStatement() {
			return getRuleContext(CaseDefaultStatementContext.class,0);
		}
		public CaseExprStatementContext caseExprStatement() {
			return getRuleContext(CaseExprStatementContext.class,0);
		}
		public CaseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseStatement; }
	}

	public final CaseStatementContext caseStatement() throws RecognitionException {
		CaseStatementContext _localctx = new CaseStatementContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_caseStatement);
		try {
			setState(918);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,88,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(916);
				caseDefaultStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(917);
				caseExprStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JudgeStatementContext extends ParserRuleContext {
		public JudgeIfStatementContext judgeIfStatement() {
			return getRuleContext(JudgeIfStatementContext.class,0);
		}
		public JudgeElseStatementContext judgeElseStatement() {
			return getRuleContext(JudgeElseStatementContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<JudgeElseIfStatementContext> judgeElseIfStatement() {
			return getRuleContexts(JudgeElseIfStatementContext.class);
		}
		public JudgeElseIfStatementContext judgeElseIfStatement(int i) {
			return getRuleContext(JudgeElseIfStatementContext.class,i);
		}
		public JudgeStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_judgeStatement; }
	}

	public final JudgeStatementContext judgeStatement() throws RecognitionException {
		JudgeStatementContext _localctx = new JudgeStatementContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_judgeStatement);
		int _la;
		try {
			int _alt;
			setState(939);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(920);
				judgeIfStatement();
				setState(924);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(921);
						judgeElseIfStatement();
						}
						} 
					}
					setState(926);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
				}
				setState(927);
				judgeElseStatement();
				setState(928);
				end();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(930);
				judgeIfStatement();
				setState(934);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Flow) | (1L << Less) | (1L << Left_Paren) | (1L << Left_Brace) | (1L << Left_Brack) | (1L << Question) | (1L << Bang) | (1L << Wave) | (1L << Add) | (1L << Sub) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (NilLiteral - 64)) | (1L << (TrueLiteral - 64)) | (1L << (FalseLiteral - 64)) | (1L << (UndefinedLiteral - 64)) | (1L << (NumberLiteral - 64)) | (1L << (TextLiteral - 64)) | (1L << (CharLiteral - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)) | (1L << (Discard - 64)))) != 0)) {
					{
					{
					setState(931);
					judgeElseIfStatement();
					}
					}
					setState(936);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(937);
				end();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JudgeElseStatementContext extends ParserRuleContext {
		public TerminalNode Discard() { return getToken(LiteParser.Discard, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public JudgeElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_judgeElseStatement; }
	}

	public final JudgeElseStatementContext judgeElseStatement() throws RecognitionException {
		JudgeElseStatementContext _localctx = new JudgeElseStatementContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_judgeElseStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(941);
			match(Discard);
			setState(942);
			left_brace();
			setState(946);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,92,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(943);
					functionSupportStatement();
					}
					} 
				}
				setState(948);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,92,_ctx);
			}
			setState(949);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JudgeIfStatementContext extends ParserRuleContext {
		public TerminalNode Question() { return getToken(LiteParser.Question, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public JudgeIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_judgeIfStatement; }
	}

	public final JudgeIfStatementContext judgeIfStatement() throws RecognitionException {
		JudgeIfStatementContext _localctx = new JudgeIfStatementContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_judgeIfStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(951);
			match(Question);
			setState(952);
			expression(0);
			setState(953);
			left_brace();
			setState(957);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,93,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(954);
					functionSupportStatement();
					}
					} 
				}
				setState(959);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,93,_ctx);
			}
			setState(960);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JudgeElseIfStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public JudgeElseIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_judgeElseIfStatement; }
	}

	public final JudgeElseIfStatementContext judgeElseIfStatement() throws RecognitionException {
		JudgeElseIfStatementContext _localctx = new JudgeElseIfStatementContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_judgeElseIfStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(962);
			expression(0);
			setState(963);
			left_brace();
			setState(967);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,94,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(964);
					functionSupportStatement();
					}
					} 
				}
				setState(969);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,94,_ctx);
			}
			setState(970);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoopStatementContext extends ParserRuleContext {
		public IteratorStatementContext iteratorStatement() {
			return getRuleContext(IteratorStatementContext.class,0);
		}
		public TerminalNode At() { return getToken(LiteParser.At, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public LoopStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loopStatement; }
	}

	public final LoopStatementContext loopStatement() throws RecognitionException {
		LoopStatementContext _localctx = new LoopStatementContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_loopStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(972);
			iteratorStatement();
			setState(973);
			match(At);
			setState(974);
			id();
			setState(975);
			left_brace();
			setState(979);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,95,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(976);
					functionSupportStatement();
					}
					} 
				}
				setState(981);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,95,_ctx);
			}
			setState(982);
			right_brace();
			setState(983);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoopEachStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode At() { return getToken(LiteParser.At, 0); }
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public LoopEachStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loopEachStatement; }
	}

	public final LoopEachStatementContext loopEachStatement() throws RecognitionException {
		LoopEachStatementContext _localctx = new LoopEachStatementContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_loopEachStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(985);
			expression(0);
			setState(986);
			match(At);
			setState(991);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Brack) {
				{
				setState(987);
				match(Left_Brack);
				setState(988);
				id();
				setState(989);
				match(Right_Brack);
				}
			}

			setState(993);
			id();
			setState(994);
			left_brace();
			setState(998);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,97,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(995);
					functionSupportStatement();
					}
					} 
				}
				setState(1000);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,97,_ctx);
			}
			setState(1001);
			right_brace();
			setState(1002);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoopCaseStatementContext extends ParserRuleContext {
		public TerminalNode At() { return getToken(LiteParser.At, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public LoopCaseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loopCaseStatement; }
	}

	public final LoopCaseStatementContext loopCaseStatement() throws RecognitionException {
		LoopCaseStatementContext _localctx = new LoopCaseStatementContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_loopCaseStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1004);
			match(At);
			setState(1005);
			expression(0);
			setState(1006);
			left_brace();
			setState(1010);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,98,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1007);
					functionSupportStatement();
					}
					} 
				}
				setState(1012);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,98,_ctx);
			}
			setState(1013);
			right_brace();
			setState(1014);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoopInfiniteStatementContext extends ParserRuleContext {
		public TerminalNode At() { return getToken(LiteParser.At, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public LoopInfiniteStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loopInfiniteStatement; }
	}

	public final LoopInfiniteStatementContext loopInfiniteStatement() throws RecognitionException {
		LoopInfiniteStatementContext _localctx = new LoopInfiniteStatementContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_loopInfiniteStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1016);
			match(At);
			setState(1017);
			left_brace();
			setState(1021);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,99,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1018);
					functionSupportStatement();
					}
					} 
				}
				setState(1023);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,99,_ctx);
			}
			setState(1024);
			right_brace();
			setState(1025);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoopJumpStatementContext extends ParserRuleContext {
		public TerminalNode Left_Arrow() { return getToken(LiteParser.Left_Arrow, 0); }
		public TerminalNode At() { return getToken(LiteParser.At, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public LoopJumpStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loopJumpStatement; }
	}

	public final LoopJumpStatementContext loopJumpStatement() throws RecognitionException {
		LoopJumpStatementContext _localctx = new LoopJumpStatementContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_loopJumpStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1027);
			match(Left_Arrow);
			setState(1028);
			match(At);
			setState(1029);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoopContinueStatementContext extends ParserRuleContext {
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode At() { return getToken(LiteParser.At, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public LoopContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loopContinueStatement; }
	}

	public final LoopContinueStatementContext loopContinueStatement() throws RecognitionException {
		LoopContinueStatementContext _localctx = new LoopContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_loopContinueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1031);
			match(Right_Arrow);
			setState(1032);
			match(At);
			setState(1033);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CheckStatementContext extends ParserRuleContext {
		public TerminalNode Bang() { return getToken(LiteParser.Bang, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public CheckFinallyStatmentContext checkFinallyStatment() {
			return getRuleContext(CheckFinallyStatmentContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public List<CheckErrorStatementContext> checkErrorStatement() {
			return getRuleContexts(CheckErrorStatementContext.class);
		}
		public CheckErrorStatementContext checkErrorStatement(int i) {
			return getRuleContext(CheckErrorStatementContext.class,i);
		}
		public CheckStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_checkStatement; }
	}

	public final CheckStatementContext checkStatement() throws RecognitionException {
		CheckStatementContext _localctx = new CheckStatementContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_checkStatement);
		int _la;
		try {
			int _alt;
			setState(1069);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1035);
				match(Bang);
				setState(1036);
				left_brace();
				setState(1040);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,100,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1037);
						functionSupportStatement();
						}
						} 
					}
					setState(1042);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,100,_ctx);
				}
				setState(1043);
				right_brace();
				setState(1047);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
					{
					{
					setState(1044);
					checkErrorStatement();
					}
					}
					setState(1049);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1050);
				checkFinallyStatment();
				setState(1051);
				end();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1053);
				match(Bang);
				setState(1054);
				left_brace();
				setState(1058);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,102,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1055);
						functionSupportStatement();
						}
						} 
					}
					setState(1060);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,102,_ctx);
				}
				setState(1061);
				right_brace();
				setState(1063); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1062);
					checkErrorStatement();
					}
					}
					setState(1065); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0) );
				setState(1067);
				end();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingStatementContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Bang() { return getToken(LiteParser.Bang, 0); }
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public UsingStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingStatement; }
	}

	public final UsingStatementContext usingStatement() throws RecognitionException {
		UsingStatementContext _localctx = new UsingStatementContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_usingStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1071);
			expression(0);
			setState(1072);
			match(Bang);
			setState(1073);
			expression(0);
			setState(1076);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(1074);
				match(Colon);
				setState(1075);
				typeType();
				}
			}

			setState(1078);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CheckErrorStatementContext extends ParserRuleContext {
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public CheckErrorStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_checkErrorStatement; }
	}

	public final CheckErrorStatementContext checkErrorStatement() throws RecognitionException {
		CheckErrorStatementContext _localctx = new CheckErrorStatementContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_checkErrorStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1085);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				{
				setState(1080);
				id();
				}
				break;
			case 2:
				{
				setState(1081);
				id();
				setState(1082);
				match(Colon);
				setState(1083);
				typeType();
				}
				break;
			}
			setState(1087);
			left_brace();
			setState(1091);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,107,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1088);
					functionSupportStatement();
					}
					} 
				}
				setState(1093);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,107,_ctx);
			}
			setState(1094);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CheckFinallyStatmentContext extends ParserRuleContext {
		public TerminalNode Discard() { return getToken(LiteParser.Discard, 0); }
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public CheckFinallyStatmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_checkFinallyStatment; }
	}

	public final CheckFinallyStatmentContext checkFinallyStatment() throws RecognitionException {
		CheckFinallyStatmentContext _localctx = new CheckFinallyStatmentContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_checkFinallyStatment);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1096);
			match(Discard);
			setState(1097);
			left_brace();
			setState(1101);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,108,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1098);
					functionSupportStatement();
					}
					} 
				}
				setState(1103);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,108,_ctx);
			}
			setState(1104);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReportStatementContext extends ParserRuleContext {
		public TerminalNode Bang() { return getToken(LiteParser.Bang, 0); }
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reportStatement; }
	}

	public final ReportStatementContext reportStatement() throws RecognitionException {
		ReportStatementContext _localctx = new ReportStatementContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_reportStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1106);
			match(Bang);
			setState(1107);
			left_paren();
			setState(1109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Flow) | (1L << Less) | (1L << Left_Paren) | (1L << Left_Brace) | (1L << Left_Brack) | (1L << Question) | (1L << Bang) | (1L << Wave) | (1L << Add) | (1L << Sub) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (NilLiteral - 64)) | (1L << (TrueLiteral - 64)) | (1L << (FalseLiteral - 64)) | (1L << (UndefinedLiteral - 64)) | (1L << (NumberLiteral - 64)) | (1L << (TextLiteral - 64)) | (1L << (CharLiteral - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)) | (1L << (Discard - 64)))) != 0)) {
				{
				setState(1108);
				expression(0);
				}
			}

			setState(1111);
			right_paren();
			setState(1112);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IteratorStatementContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MoreContext more() {
			return getRuleContext(MoreContext.class,0);
		}
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public TerminalNode Less_Equal() { return getToken(LiteParser.Less_Equal, 0); }
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public TerminalNode Greater_Equal() { return getToken(LiteParser.Greater_Equal, 0); }
		public IteratorStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iteratorStatement; }
	}

	public final IteratorStatementContext iteratorStatement() throws RecognitionException {
		IteratorStatementContext _localctx = new IteratorStatementContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_iteratorStatement);
		int _la;
		try {
			setState(1128);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1114);
				match(Left_Brack);
				setState(1115);
				expression(0);
				setState(1116);
				((IteratorStatementContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Less_Equal) | (1L << Greater_Equal) | (1L << Less) | (1L << Greater))) != 0)) ) {
					((IteratorStatementContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1117);
				expression(0);
				setState(1118);
				more();
				setState(1119);
				expression(0);
				setState(1120);
				match(Right_Brack);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1122);
				match(Left_Brack);
				setState(1123);
				expression(0);
				setState(1124);
				((IteratorStatementContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Less_Equal) | (1L << Greater_Equal) | (1L << Less) | (1L << Greater))) != 0)) ) {
					((IteratorStatementContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1125);
				expression(0);
				setState(1126);
				match(Right_Brack);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableStatementContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public TerminalNode Colon_Equal() { return getToken(LiteParser.Colon_Equal, 0); }
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public VariableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableStatement; }
	}

	public final VariableStatementContext variableStatement() throws RecognitionException {
		VariableStatementContext _localctx = new VariableStatementContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_variableStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1130);
			expression(0);
			setState(1136);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Colon_Equal:
				{
				setState(1131);
				match(Colon_Equal);
				}
				break;
			case Colon:
				{
				setState(1132);
				match(Colon);
				setState(1133);
				typeType();
				setState(1134);
				match(Equal);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1138);
			expression(0);
			setState(1139);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclaredStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public VariableDeclaredStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaredStatement; }
	}

	public final VariableDeclaredStatementContext variableDeclaredStatement() throws RecognitionException {
		VariableDeclaredStatementContext _localctx = new VariableDeclaredStatementContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_variableDeclaredStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1141);
			expression(0);
			setState(1142);
			match(Colon);
			setState(1143);
			typeType();
			setState(1144);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ChannelAssignStatementContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public TerminalNode Left_Arrow() { return getToken(LiteParser.Left_Arrow, 0); }
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public ChannelAssignStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_channelAssignStatement; }
	}

	public final ChannelAssignStatementContext channelAssignStatement() throws RecognitionException {
		ChannelAssignStatementContext _localctx = new ChannelAssignStatementContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_channelAssignStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1146);
			expression(0);
			setState(1147);
			match(Left_Brack);
			setState(1148);
			match(Left_Arrow);
			setState(1149);
			match(Right_Brack);
			setState(1150);
			assign();
			setState(1151);
			expression(0);
			setState(1152);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignStatementContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public AssignContext assign() {
			return getRuleContext(AssignContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public AssignStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignStatement; }
	}

	public final AssignStatementContext assignStatement() throws RecognitionException {
		AssignStatementContext _localctx = new AssignStatementContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_assignStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1154);
			expression(0);
			setState(1155);
			assign();
			setState(1156);
			expression(0);
			setState(1157);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public EndContext end() {
			return getRuleContext(EndContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1159);
			expression(0);
			setState(1160);
			end();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryExpressionContext extends ParserRuleContext {
		public Token t;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TemplateCallContext templateCall() {
			return getRuleContext(TemplateCallContext.class,0);
		}
		public TerminalNode Discard() { return getToken(LiteParser.Discard, 0); }
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public DataStatementContext dataStatement() {
			return getRuleContext(DataStatementContext.class,0);
		}
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_primaryExpression);
		try {
			setState(1172);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LinqFrom:
			case LinqBy:
			case LinqSelect:
			case LinqWhere:
			case LinqGroup:
			case LinqInto:
			case LinqOrderby:
			case LinqJoin:
			case LinqLet:
			case LinqIn:
			case LinqOn:
			case LinqEquals:
			case LinqAscending:
			case LinqDescending:
			case TypeI8:
			case TypeU8:
			case TypeI16:
			case TypeU16:
			case TypeI32:
			case TypeU32:
			case TypeI64:
			case TypeU64:
			case TypeF32:
			case TypeF64:
			case TypeChr:
			case TypeStr:
			case TypeBool:
			case TypeInt:
			case TypeNum:
			case TypeByte:
			case TypeAny:
			case IDPrivate:
			case IDPublic:
				enterOuterAlt(_localctx, 1);
				{
				setState(1162);
				id();
				setState(1164);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,112,_ctx) ) {
				case 1:
					{
					setState(1163);
					templateCall();
					}
					break;
				}
				}
				break;
			case Discard:
				enterOuterAlt(_localctx, 2);
				{
				setState(1166);
				((PrimaryExpressionContext)_localctx).t = match(Discard);
				}
				break;
			case Left_Paren:
				enterOuterAlt(_localctx, 3);
				{
				setState(1167);
				left_paren();
				setState(1168);
				expression(0);
				setState(1169);
				right_paren();
				}
				break;
			case NilLiteral:
			case TrueLiteral:
			case FalseLiteral:
			case UndefinedLiteral:
			case NumberLiteral:
			case TextLiteral:
			case CharLiteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(1171);
				dataStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public Token op;
		public LinqContext linq() {
			return getRuleContext(LinqContext.class,0);
		}
		public CallFuncContext callFunc() {
			return getRuleContext(CallFuncContext.class,0);
		}
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public CallChannelContext callChannel() {
			return getRuleContext(CallChannelContext.class,0);
		}
		public CallElementContext callElement() {
			return getRuleContext(CallElementContext.class,0);
		}
		public CallNewContext callNew() {
			return getRuleContext(CallNewContext.class,0);
		}
		public CallPkgContext callPkg() {
			return getRuleContext(CallPkgContext.class,0);
		}
		public GetTypeContext getType() {
			return getRuleContext(GetTypeContext.class,0);
		}
		public CallAwaitContext callAwait() {
			return getRuleContext(CallAwaitContext.class,0);
		}
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public DictionaryContext dictionary() {
			return getRuleContext(DictionaryContext.class,0);
		}
		public LambdaContext lambda() {
			return getRuleContext(LambdaContext.class,0);
		}
		public FunctionExpressionContext functionExpression() {
			return getRuleContext(FunctionExpressionContext.class,0);
		}
		public PkgAnonymousContext pkgAnonymous() {
			return getRuleContext(PkgAnonymousContext.class,0);
		}
		public TupleExpressionContext tupleExpression() {
			return getRuleContext(TupleExpressionContext.class,0);
		}
		public PlusMinusContext plusMinus() {
			return getRuleContext(PlusMinusContext.class,0);
		}
		public NegateContext negate() {
			return getRuleContext(NegateContext.class,0);
		}
		public StringExpressionContext stringExpression() {
			return getRuleContext(StringExpressionContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public JudgeContext judge() {
			return getRuleContext(JudgeContext.class,0);
		}
		public AddContext add() {
			return getRuleContext(AddContext.class,0);
		}
		public MulContext mul() {
			return getRuleContext(MulContext.class,0);
		}
		public PowContext pow() {
			return getRuleContext(PowContext.class,0);
		}
		public TerminalNode Bang() { return getToken(LiteParser.Bang, 0); }
		public TerminalNode Question() { return getToken(LiteParser.Question, 0); }
		public TerminalNode Left_Flow() { return getToken(LiteParser.Left_Flow, 0); }
		public TypeConversionContext typeConversion() {
			return getRuleContext(TypeConversionContext.class,0);
		}
		public CallContext call() {
			return getRuleContext(CallContext.class,0);
		}
		public CallExpressionContext callExpression() {
			return getRuleContext(CallExpressionContext.class,0);
		}
		public JudgeTypeContext judgeType() {
			return getRuleContext(JudgeTypeContext.class,0);
		}
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 132;
		enterRecursionRule(_localctx, 132, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1194);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
			case 1:
				{
				setState(1175);
				linq();
				}
				break;
			case 2:
				{
				setState(1176);
				callFunc();
				}
				break;
			case 3:
				{
				setState(1177);
				primaryExpression();
				}
				break;
			case 4:
				{
				setState(1178);
				callChannel();
				}
				break;
			case 5:
				{
				setState(1179);
				callElement();
				}
				break;
			case 6:
				{
				setState(1180);
				callNew();
				}
				break;
			case 7:
				{
				setState(1181);
				callPkg();
				}
				break;
			case 8:
				{
				setState(1182);
				getType();
				}
				break;
			case 9:
				{
				setState(1183);
				callAwait();
				}
				break;
			case 10:
				{
				setState(1184);
				list();
				}
				break;
			case 11:
				{
				setState(1185);
				set();
				}
				break;
			case 12:
				{
				setState(1186);
				dictionary();
				}
				break;
			case 13:
				{
				setState(1187);
				lambda();
				}
				break;
			case 14:
				{
				setState(1188);
				functionExpression();
				}
				break;
			case 15:
				{
				setState(1189);
				pkgAnonymous();
				}
				break;
			case 16:
				{
				setState(1190);
				tupleExpression();
				}
				break;
			case 17:
				{
				setState(1191);
				plusMinus();
				}
				break;
			case 18:
				{
				setState(1192);
				negate();
				}
				break;
			case 19:
				{
				setState(1193);
				stringExpression();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1230);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,116,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1228);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1196);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1197);
						judge();
						setState(1198);
						expression(6);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1200);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1201);
						add();
						setState(1202);
						expression(5);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1204);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1205);
						mul();
						setState(1206);
						expression(4);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1208);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1209);
						pow();
						setState(1210);
						expression(3);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1212);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(1213);
						((ExpressionContext)_localctx).op = match(Bang);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1214);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(1215);
						((ExpressionContext)_localctx).op = match(Question);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1216);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(1217);
						((ExpressionContext)_localctx).op = match(Left_Flow);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1218);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(1219);
						typeConversion();
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1220);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(1221);
						call();
						setState(1222);
						callExpression(0);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(1224);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(1225);
						judgeType();
						setState(1226);
						typeType();
						}
						break;
					}
					} 
				}
				setState(1232);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,116,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class CallExpressionContext extends ParserRuleContext {
		public CallElementContext callElement() {
			return getRuleContext(CallElementContext.class,0);
		}
		public CallFuncContext callFunc() {
			return getRuleContext(CallFuncContext.class,0);
		}
		public CallPkgContext callPkg() {
			return getRuleContext(CallPkgContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public List<CallExpressionContext> callExpression() {
			return getRuleContexts(CallExpressionContext.class);
		}
		public CallExpressionContext callExpression(int i) {
			return getRuleContext(CallExpressionContext.class,i);
		}
		public CallContext call() {
			return getRuleContext(CallContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public CallExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callExpression; }
	}

	public final CallExpressionContext callExpression() throws RecognitionException {
		return callExpression(0);
	}

	private CallExpressionContext callExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		CallExpressionContext _localctx = new CallExpressionContext(_ctx, _parentState);
		CallExpressionContext _prevctx = _localctx;
		int _startState = 134;
		enterRecursionRule(_localctx, 134, RULE_callExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1238);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
			case 1:
				{
				setState(1234);
				callElement();
				}
				break;
			case 2:
				{
				setState(1235);
				callFunc();
				}
				break;
			case 3:
				{
				setState(1236);
				callPkg();
				}
				break;
			case 4:
				{
				setState(1237);
				id();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1249);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,119,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CallExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_callExpression);
					setState(1240);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1241);
					call();
					setState(1243);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==New_Line) {
						{
						setState(1242);
						match(New_Line);
						}
					}

					setState(1245);
					callExpression(2);
					}
					} 
				}
				setState(1251);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,119,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TupleContext extends ParserRuleContext {
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public TupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tuple; }
	}

	public final TupleContext tuple() throws RecognitionException {
		TupleContext _localctx = new TupleContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_tuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1252);
			left_paren();
			setState(1262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Flow) | (1L << Less) | (1L << Left_Paren) | (1L << Left_Brace) | (1L << Left_Brack) | (1L << Question) | (1L << Bang) | (1L << Wave) | (1L << Add) | (1L << Sub) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (NilLiteral - 64)) | (1L << (TrueLiteral - 64)) | (1L << (FalseLiteral - 64)) | (1L << (UndefinedLiteral - 64)) | (1L << (NumberLiteral - 64)) | (1L << (TextLiteral - 64)) | (1L << (CharLiteral - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)) | (1L << (Discard - 64)))) != 0)) {
				{
				setState(1253);
				expression(0);
				setState(1259);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(1254);
					more();
					setState(1255);
					expression(0);
					}
					}
					setState(1261);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(1264);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1266);
			expression(0);
			setState(1272);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1267);
				more();
				setState(1268);
				expression(0);
				}
				}
				setState(1274);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationSupportContext extends ParserRuleContext {
		public AnnotationContext annotation() {
			return getRuleContext(AnnotationContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public AnnotationSupportContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationSupport; }
	}

	public final AnnotationSupportContext annotationSupport() throws RecognitionException {
		AnnotationSupportContext _localctx = new AnnotationSupportContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_annotationSupport);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1275);
			annotation();
			setState(1277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1276);
				match(New_Line);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationContext extends ParserRuleContext {
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public AnnotationListContext annotationList() {
			return getRuleContext(AnnotationListContext.class,0);
		}
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public AnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation; }
	}

	public final AnnotationContext annotation() throws RecognitionException {
		AnnotationContext _localctx = new AnnotationContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_annotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1279);
			match(Left_Brack);
			setState(1283);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,124,_ctx) ) {
			case 1:
				{
				setState(1280);
				id();
				setState(1281);
				match(Right_Arrow);
				}
				break;
			}
			setState(1285);
			annotationList();
			setState(1286);
			match(Right_Brack);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationListContext extends ParserRuleContext {
		public List<AnnotationItemContext> annotationItem() {
			return getRuleContexts(AnnotationItemContext.class);
		}
		public AnnotationItemContext annotationItem(int i) {
			return getRuleContext(AnnotationItemContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public AnnotationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationList; }
	}

	public final AnnotationListContext annotationList() throws RecognitionException {
		AnnotationListContext _localctx = new AnnotationListContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_annotationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1288);
			annotationItem();
			setState(1294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1289);
				more();
				setState(1290);
				annotationItem();
				}
				}
				setState(1296);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationItemContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public List<AnnotationAssignContext> annotationAssign() {
			return getRuleContexts(AnnotationAssignContext.class);
		}
		public AnnotationAssignContext annotationAssign(int i) {
			return getRuleContext(AnnotationAssignContext.class,i);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public AnnotationItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationItem; }
	}

	public final AnnotationItemContext annotationItem() throws RecognitionException {
		AnnotationItemContext _localctx = new AnnotationItemContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_annotationItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1297);
			id();
			setState(1310);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Left_Paren) {
				{
				setState(1298);
				left_paren();
				setState(1299);
				annotationAssign();
				setState(1305);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(1300);
					more();
					setState(1301);
					annotationAssign();
					}
					}
					setState(1307);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1308);
				right_paren();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationAssignContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public AnnotationAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotationAssign; }
	}

	public final AnnotationAssignContext annotationAssign() throws RecognitionException {
		AnnotationAssignContext _localctx = new AnnotationAssignContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_annotationAssign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1315);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
			case 1:
				{
				setState(1312);
				id();
				setState(1313);
				match(Equal);
				}
				break;
			}
			setState(1317);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallFuncContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TupleContext tuple() {
			return getRuleContext(TupleContext.class,0);
		}
		public LambdaContext lambda() {
			return getRuleContext(LambdaContext.class,0);
		}
		public TemplateCallContext templateCall() {
			return getRuleContext(TemplateCallContext.class,0);
		}
		public CallFuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callFunc; }
	}

	public final CallFuncContext callFunc() throws RecognitionException {
		CallFuncContext _localctx = new CallFuncContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_callFunc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1319);
			id();
			setState(1321);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Less) {
				{
				setState(1320);
				templateCall();
				}
			}

			setState(1325);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Left_Paren:
				{
				setState(1323);
				tuple();
				}
				break;
			case Left_Brace:
				{
				setState(1324);
				lambda();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallChannelContext extends ParserRuleContext {
		public Token op;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public TerminalNode Left_Arrow() { return getToken(LiteParser.Left_Arrow, 0); }
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public TerminalNode Question() { return getToken(LiteParser.Question, 0); }
		public CallChannelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callChannel; }
	}

	public final CallChannelContext callChannel() throws RecognitionException {
		CallChannelContext _localctx = new CallChannelContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_callChannel);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1327);
			id();
			setState(1329);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Question) {
				{
				setState(1328);
				((CallChannelContext)_localctx).op = match(Question);
				}
			}

			setState(1331);
			match(Left_Brack);
			setState(1332);
			match(Left_Arrow);
			setState(1333);
			match(Right_Brack);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallElementContext extends ParserRuleContext {
		public Token op;
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public SliceContext slice() {
			return getRuleContext(SliceContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Question() { return getToken(LiteParser.Question, 0); }
		public CallElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callElement; }
	}

	public final CallElementContext callElement() throws RecognitionException {
		CallElementContext _localctx = new CallElementContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_callElement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1335);
			id();
			setState(1337);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Question) {
				{
				setState(1336);
				((CallElementContext)_localctx).op = match(Question);
				}
			}

			setState(1339);
			match(Left_Brack);
			setState(1342);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,133,_ctx) ) {
			case 1:
				{
				setState(1340);
				slice();
				}
				break;
			case 2:
				{
				setState(1341);
				expression(0);
				}
				break;
			}
			setState(1344);
			match(Right_Brack);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallPkgContext extends ParserRuleContext {
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public PkgAssignContext pkgAssign() {
			return getRuleContext(PkgAssignContext.class,0);
		}
		public ListAssignContext listAssign() {
			return getRuleContext(ListAssignContext.class,0);
		}
		public SetAssignContext setAssign() {
			return getRuleContext(SetAssignContext.class,0);
		}
		public DictionaryAssignContext dictionaryAssign() {
			return getRuleContext(DictionaryAssignContext.class,0);
		}
		public CallPkgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callPkg; }
	}

	public final CallPkgContext callPkg() throws RecognitionException {
		CallPkgContext _localctx = new CallPkgContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_callPkg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1346);
			typeType();
			setState(1347);
			left_brace();
			setState(1352);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,134,_ctx) ) {
			case 1:
				{
				setState(1348);
				pkgAssign();
				}
				break;
			case 2:
				{
				setState(1349);
				listAssign();
				}
				break;
			case 3:
				{
				setState(1350);
				setAssign();
				}
				break;
			case 4:
				{
				setState(1351);
				dictionaryAssign();
				}
				break;
			}
			setState(1354);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallNewContext extends ParserRuleContext {
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public CallNewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callNew; }
	}

	public final CallNewContext callNew() throws RecognitionException {
		CallNewContext _localctx = new CallNewContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_callNew);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1356);
			match(Less);
			setState(1357);
			typeType();
			setState(1358);
			match(Greater);
			setState(1359);
			left_paren();
			setState(1361);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,135,_ctx) ) {
			case 1:
				{
				setState(1360);
				match(New_Line);
				}
				break;
			}
			setState(1364);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Flow) | (1L << Less) | (1L << Left_Paren) | (1L << Left_Brace) | (1L << Left_Brack) | (1L << Question) | (1L << Bang) | (1L << Wave) | (1L << Add) | (1L << Sub) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (NilLiteral - 64)) | (1L << (TrueLiteral - 64)) | (1L << (FalseLiteral - 64)) | (1L << (UndefinedLiteral - 64)) | (1L << (NumberLiteral - 64)) | (1L << (TextLiteral - 64)) | (1L << (CharLiteral - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)) | (1L << (Discard - 64)))) != 0)) {
				{
				setState(1363);
				expressionList();
				}
			}

			setState(1367);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1366);
				match(New_Line);
				}
			}

			setState(1369);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetTypeContext extends ParserRuleContext {
		public TerminalNode Question() { return getToken(LiteParser.Question, 0); }
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public GetTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getType; }
	}

	public final GetTypeContext getType() throws RecognitionException {
		GetTypeContext _localctx = new GetTypeContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_getType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1371);
			match(Question);
			setState(1372);
			left_paren();
			setState(1376);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LinqFrom:
			case LinqBy:
			case LinqSelect:
			case LinqWhere:
			case LinqGroup:
			case LinqInto:
			case LinqOrderby:
			case LinqJoin:
			case LinqLet:
			case LinqIn:
			case LinqOn:
			case LinqEquals:
			case LinqAscending:
			case LinqDescending:
			case Left_Flow:
			case Less:
			case Left_Paren:
			case Left_Brace:
			case Left_Brack:
			case Question:
			case Bang:
			case Wave:
			case Add:
			case Sub:
			case TypeI8:
			case TypeU8:
			case TypeI16:
			case TypeU16:
			case TypeI32:
			case TypeU32:
			case TypeI64:
			case TypeU64:
			case TypeF32:
			case TypeF64:
			case TypeChr:
			case TypeStr:
			case TypeBool:
			case TypeInt:
			case TypeNum:
			case TypeByte:
			case TypeAny:
			case NilLiteral:
			case TrueLiteral:
			case FalseLiteral:
			case UndefinedLiteral:
			case NumberLiteral:
			case TextLiteral:
			case CharLiteral:
			case IDPrivate:
			case IDPublic:
			case Discard:
				{
				setState(1373);
				expression(0);
				}
				break;
			case Colon:
				{
				setState(1374);
				match(Colon);
				setState(1375);
				typeType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1378);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeConversionContext extends ParserRuleContext {
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public TypeConversionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeConversion; }
	}

	public final TypeConversionContext typeConversion() throws RecognitionException {
		TypeConversionContext _localctx = new TypeConversionContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_typeConversion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1380);
			match(Colon);
			setState(1381);
			left_paren();
			setState(1382);
			typeType();
			setState(1383);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PkgAssignContext extends ParserRuleContext {
		public List<PkgAssignElementContext> pkgAssignElement() {
			return getRuleContexts(PkgAssignElementContext.class);
		}
		public PkgAssignElementContext pkgAssignElement(int i) {
			return getRuleContext(PkgAssignElementContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public PkgAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pkgAssign; }
	}

	public final PkgAssignContext pkgAssign() throws RecognitionException {
		PkgAssignContext _localctx = new PkgAssignContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_pkgAssign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1385);
			pkgAssignElement();
			setState(1391);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1386);
				more();
				setState(1387);
				pkgAssignElement();
				}
				}
				setState(1393);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PkgAssignElementContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PkgAssignElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pkgAssignElement; }
	}

	public final PkgAssignElementContext pkgAssignElement() throws RecognitionException {
		PkgAssignElementContext _localctx = new PkgAssignElementContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_pkgAssignElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1394);
			name();
			setState(1395);
			match(Equal);
			setState(1396);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListAssignContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public ListAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listAssign; }
	}

	public final ListAssignContext listAssign() throws RecognitionException {
		ListAssignContext _localctx = new ListAssignContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_listAssign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1398);
			expression(0);
			setState(1404);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1399);
				more();
				setState(1400);
				expression(0);
				}
				}
				setState(1406);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetAssignContext extends ParserRuleContext {
		public List<TerminalNode> Left_Brack() { return getTokens(LiteParser.Left_Brack); }
		public TerminalNode Left_Brack(int i) {
			return getToken(LiteParser.Left_Brack, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> Right_Brack() { return getTokens(LiteParser.Right_Brack); }
		public TerminalNode Right_Brack(int i) {
			return getToken(LiteParser.Right_Brack, i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public SetAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setAssign; }
	}

	public final SetAssignContext setAssign() throws RecognitionException {
		SetAssignContext _localctx = new SetAssignContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_setAssign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1407);
			match(Left_Brack);
			setState(1408);
			expression(0);
			setState(1409);
			match(Right_Brack);
			setState(1417);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1410);
				more();
				setState(1411);
				match(Left_Brack);
				setState(1412);
				expression(0);
				setState(1413);
				match(Right_Brack);
				}
				}
				setState(1419);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DictionaryAssignContext extends ParserRuleContext {
		public List<DictionaryElementContext> dictionaryElement() {
			return getRuleContexts(DictionaryElementContext.class);
		}
		public DictionaryElementContext dictionaryElement(int i) {
			return getRuleContext(DictionaryElementContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public DictionaryAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dictionaryAssign; }
	}

	public final DictionaryAssignContext dictionaryAssign() throws RecognitionException {
		DictionaryAssignContext _localctx = new DictionaryAssignContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_dictionaryAssign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1420);
			dictionaryElement();
			setState(1426);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1421);
				more();
				setState(1422);
				dictionaryElement();
				}
				}
				setState(1428);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallAwaitContext extends ParserRuleContext {
		public TerminalNode Left_Flow() { return getToken(LiteParser.Left_Flow, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CallAwaitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callAwait; }
	}

	public final CallAwaitContext callAwait() throws RecognitionException {
		CallAwaitContext _localctx = new CallAwaitContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_callAwait);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1429);
			match(Left_Flow);
			setState(1430);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListContext extends ParserRuleContext {
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1432);
			left_brace();
			setState(1433);
			expression(0);
			setState(1439);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1434);
				more();
				setState(1435);
				expression(0);
				}
				}
				setState(1441);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1442);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetContext extends ParserRuleContext {
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public List<TerminalNode> Left_Brack() { return getTokens(LiteParser.Left_Brack); }
		public TerminalNode Left_Brack(int i) {
			return getToken(LiteParser.Left_Brack, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> Right_Brack() { return getTokens(LiteParser.Right_Brack); }
		public TerminalNode Right_Brack(int i) {
			return getToken(LiteParser.Right_Brack, i);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public SetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set; }
	}

	public final SetContext set() throws RecognitionException {
		SetContext _localctx = new SetContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1444);
			left_brace();
			setState(1445);
			match(Left_Brack);
			setState(1446);
			expression(0);
			setState(1447);
			match(Right_Brack);
			setState(1455);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1448);
				more();
				setState(1449);
				match(Left_Brack);
				setState(1450);
				expression(0);
				setState(1451);
				match(Right_Brack);
				}
				}
				setState(1457);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1458);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DictionaryContext extends ParserRuleContext {
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public List<DictionaryElementContext> dictionaryElement() {
			return getRuleContexts(DictionaryElementContext.class);
		}
		public DictionaryElementContext dictionaryElement(int i) {
			return getRuleContext(DictionaryElementContext.class,i);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public DictionaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dictionary; }
	}

	public final DictionaryContext dictionary() throws RecognitionException {
		DictionaryContext _localctx = new DictionaryContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_dictionary);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1460);
			left_brace();
			setState(1461);
			dictionaryElement();
			setState(1467);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1462);
				more();
				setState(1463);
				dictionaryElement();
				}
				}
				setState(1469);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1470);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DictionaryElementContext extends ParserRuleContext {
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public DictionaryElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dictionaryElement; }
	}

	public final DictionaryElementContext dictionaryElement() throws RecognitionException {
		DictionaryElementContext _localctx = new DictionaryElementContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_dictionaryElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1472);
			match(Left_Brack);
			setState(1473);
			expression(0);
			setState(1474);
			match(Right_Brack);
			setState(1475);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SliceContext extends ParserRuleContext {
		public SliceFullContext sliceFull() {
			return getRuleContext(SliceFullContext.class,0);
		}
		public SliceStartContext sliceStart() {
			return getRuleContext(SliceStartContext.class,0);
		}
		public SliceEndContext sliceEnd() {
			return getRuleContext(SliceEndContext.class,0);
		}
		public SliceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_slice; }
	}

	public final SliceContext slice() throws RecognitionException {
		SliceContext _localctx = new SliceContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_slice);
		try {
			setState(1480);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,146,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1477);
				sliceFull();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1478);
				sliceStart();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1479);
				sliceEnd();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SliceFullContext extends ParserRuleContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public TerminalNode Less_Equal() { return getToken(LiteParser.Less_Equal, 0); }
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public TerminalNode Greater_Equal() { return getToken(LiteParser.Greater_Equal, 0); }
		public SliceFullContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sliceFull; }
	}

	public final SliceFullContext sliceFull() throws RecognitionException {
		SliceFullContext _localctx = new SliceFullContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_sliceFull);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1482);
			expression(0);
			setState(1483);
			((SliceFullContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Less_Equal) | (1L << Greater_Equal) | (1L << Less) | (1L << Greater))) != 0)) ) {
				((SliceFullContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1484);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SliceStartContext extends ParserRuleContext {
		public Token op;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public TerminalNode Less_Equal() { return getToken(LiteParser.Less_Equal, 0); }
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public TerminalNode Greater_Equal() { return getToken(LiteParser.Greater_Equal, 0); }
		public SliceStartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sliceStart; }
	}

	public final SliceStartContext sliceStart() throws RecognitionException {
		SliceStartContext _localctx = new SliceStartContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_sliceStart);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1486);
			expression(0);
			setState(1487);
			((SliceStartContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Less_Equal) | (1L << Greater_Equal) | (1L << Less) | (1L << Greater))) != 0)) ) {
				((SliceStartContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SliceEndContext extends ParserRuleContext {
		public Token op;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public TerminalNode Less_Equal() { return getToken(LiteParser.Less_Equal, 0); }
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public TerminalNode Greater_Equal() { return getToken(LiteParser.Greater_Equal, 0); }
		public SliceEndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sliceEnd; }
	}

	public final SliceEndContext sliceEnd() throws RecognitionException {
		SliceEndContext _localctx = new SliceEndContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_sliceEnd);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1489);
			((SliceEndContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Less_Equal) | (1L << Greater_Equal) | (1L << Less) | (1L << Greater))) != 0)) ) {
				((SliceEndContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1490);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameSpaceItemContext extends ParserRuleContext {
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<CallContext> call() {
			return getRuleContexts(CallContext.class);
		}
		public CallContext call(int i) {
			return getRuleContext(CallContext.class,i);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public NameSpaceItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameSpaceItem; }
	}

	public final NameSpaceItemContext nameSpaceItem() throws RecognitionException {
		NameSpaceItemContext _localctx = new NameSpaceItemContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_nameSpaceItem);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1499);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,148,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1492);
					id();
					setState(1493);
					call();
					setState(1495);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==New_Line) {
						{
						setState(1494);
						match(New_Line);
						}
					}

					}
					} 
				}
				setState(1501);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,148,_ctx);
			}
			setState(1502);
			id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameContext extends ParserRuleContext {
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<CallContext> call() {
			return getRuleContexts(CallContext.class);
		}
		public CallContext call(int i) {
			return getRuleContext(CallContext.class,i);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1504);
			id();
			setState(1513);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Dot) {
				{
				{
				setState(1505);
				call();
				setState(1507);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==New_Line) {
					{
					setState(1506);
					match(New_Line);
					}
				}

				setState(1509);
				id();
				}
				}
				setState(1515);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplateDefineContext extends ParserRuleContext {
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public List<TemplateDefineItemContext> templateDefineItem() {
			return getRuleContexts(TemplateDefineItemContext.class);
		}
		public TemplateDefineItemContext templateDefineItem(int i) {
			return getRuleContext(TemplateDefineItemContext.class,i);
		}
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public TemplateDefineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateDefine; }
	}

	public final TemplateDefineContext templateDefine() throws RecognitionException {
		TemplateDefineContext _localctx = new TemplateDefineContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_templateDefine);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1516);
			match(Less);
			setState(1517);
			templateDefineItem();
			setState(1523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1518);
				more();
				setState(1519);
				templateDefineItem();
				}
				}
				setState(1525);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1526);
			match(Greater);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplateDefineItemContext extends ParserRuleContext {
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TemplateDefineItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateDefineItem; }
	}

	public final TemplateDefineItemContext templateDefineItem() throws RecognitionException {
		TemplateDefineItemContext _localctx = new TemplateDefineItemContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_templateDefineItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1528);
			id();
			setState(1531);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(1529);
				match(Colon);
				setState(1530);
				id();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplateCallContext extends ParserRuleContext {
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public List<TypeTypeContext> typeType() {
			return getRuleContexts(TypeTypeContext.class);
		}
		public TypeTypeContext typeType(int i) {
			return getRuleContext(TypeTypeContext.class,i);
		}
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public TemplateCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateCall; }
	}

	public final TemplateCallContext templateCall() throws RecognitionException {
		TemplateCallContext _localctx = new TemplateCallContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_templateCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1533);
			match(Less);
			setState(1534);
			typeType();
			setState(1540);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1535);
				more();
				setState(1536);
				typeType();
				}
				}
				setState(1542);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1543);
			match(Greater);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaContext extends ParserRuleContext {
		public Token t;
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Flow() { return getToken(LiteParser.Right_Flow, 0); }
		public LambdaInContext lambdaIn() {
			return getRuleContext(LambdaInContext.class,0);
		}
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public LambdaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambda; }
	}

	public final LambdaContext lambda() throws RecognitionException {
		LambdaContext _localctx = new LambdaContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_lambda);
		int _la;
		try {
			int _alt;
			setState(1578);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,159,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1545);
				left_brace();
				setState(1547);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
					{
					setState(1546);
					lambdaIn();
					}
				}

				setState(1549);
				((LambdaContext)_localctx).t = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
					((LambdaContext)_localctx).t = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1553);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==New_Line) {
					{
					{
					setState(1550);
					match(New_Line);
					}
					}
					setState(1555);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1556);
				expressionList();
				setState(1557);
				right_brace();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1559);
				left_brace();
				setState(1561);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
					{
					setState(1560);
					lambdaIn();
					}
				}

				setState(1563);
				((LambdaContext)_localctx).t = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
					((LambdaContext)_localctx).t = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1567);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,157,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1564);
						match(New_Line);
						}
						} 
					}
					setState(1569);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,157,_ctx);
				}
				setState(1573);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,158,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1570);
						functionSupportStatement();
						}
						} 
					}
					setState(1575);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,158,_ctx);
				}
				setState(1576);
				right_brace();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaInContext extends ParserRuleContext {
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public LambdaInContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaIn; }
	}

	public final LambdaInContext lambdaIn() throws RecognitionException {
		LambdaInContext _localctx = new LambdaInContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_lambdaIn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1580);
			id();
			setState(1586);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1581);
				more();
				setState(1582);
				id();
				}
				}
				setState(1588);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PkgAnonymousContext extends ParserRuleContext {
		public PkgAnonymousAssignContext pkgAnonymousAssign() {
			return getRuleContext(PkgAnonymousAssignContext.class,0);
		}
		public PkgAnonymousContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pkgAnonymous; }
	}

	public final PkgAnonymousContext pkgAnonymous() throws RecognitionException {
		PkgAnonymousContext _localctx = new PkgAnonymousContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_pkgAnonymous);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1589);
			pkgAnonymousAssign();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PkgAnonymousAssignContext extends ParserRuleContext {
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public List<PkgAnonymousAssignElementContext> pkgAnonymousAssignElement() {
			return getRuleContexts(PkgAnonymousAssignElementContext.class);
		}
		public PkgAnonymousAssignElementContext pkgAnonymousAssignElement(int i) {
			return getRuleContext(PkgAnonymousAssignElementContext.class,i);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public PkgAnonymousAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pkgAnonymousAssign; }
	}

	public final PkgAnonymousAssignContext pkgAnonymousAssign() throws RecognitionException {
		PkgAnonymousAssignContext _localctx = new PkgAnonymousAssignContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_pkgAnonymousAssign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1591);
			left_brace();
			setState(1592);
			pkgAnonymousAssignElement();
			setState(1598);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1593);
				more();
				setState(1594);
				pkgAnonymousAssignElement();
				}
				}
				setState(1600);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1601);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PkgAnonymousAssignElementContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PkgAnonymousAssignElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pkgAnonymousAssignElement; }
	}

	public final PkgAnonymousAssignElementContext pkgAnonymousAssignElement() throws RecognitionException {
		PkgAnonymousAssignElementContext _localctx = new PkgAnonymousAssignElementContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_pkgAnonymousAssignElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1603);
			name();
			setState(1604);
			match(Equal);
			setState(1605);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionExpressionContext extends ParserRuleContext {
		public Token t;
		public ParameterClauseInContext parameterClauseIn() {
			return getRuleContext(ParameterClauseInContext.class,0);
		}
		public ParameterClauseOutContext parameterClauseOut() {
			return getRuleContext(ParameterClauseOutContext.class,0);
		}
		public Left_braceContext left_brace() {
			return getRuleContext(Left_braceContext.class,0);
		}
		public Right_braceContext right_brace() {
			return getRuleContext(Right_braceContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Flow() { return getToken(LiteParser.Right_Flow, 0); }
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<FunctionSupportStatementContext> functionSupportStatement() {
			return getRuleContexts(FunctionSupportStatementContext.class);
		}
		public FunctionSupportStatementContext functionSupportStatement(int i) {
			return getRuleContext(FunctionSupportStatementContext.class,i);
		}
		public FunctionExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionExpression; }
	}

	public final FunctionExpressionContext functionExpression() throws RecognitionException {
		FunctionExpressionContext _localctx = new FunctionExpressionContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_functionExpression);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1607);
			parameterClauseIn();
			setState(1608);
			((FunctionExpressionContext)_localctx).t = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
				((FunctionExpressionContext)_localctx).t = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1612);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(1609);
				match(New_Line);
				}
				}
				setState(1614);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1615);
			parameterClauseOut();
			setState(1616);
			left_brace();
			setState(1620);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,163,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1617);
					functionSupportStatement();
					}
					} 
				}
				setState(1622);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,163,_ctx);
			}
			setState(1623);
			right_brace();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleExpressionContext extends ParserRuleContext {
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public TupleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleExpression; }
	}

	public final TupleExpressionContext tupleExpression() throws RecognitionException {
		TupleExpressionContext _localctx = new TupleExpressionContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_tupleExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1625);
			left_paren();
			setState(1626);
			expression(0);
			setState(1632);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1627);
				more();
				setState(1628);
				expression(0);
				}
				}
				setState(1634);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1635);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PlusMinusContext extends ParserRuleContext {
		public AddContext add() {
			return getRuleContext(AddContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PlusMinusContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_plusMinus; }
	}

	public final PlusMinusContext plusMinus() throws RecognitionException {
		PlusMinusContext _localctx = new PlusMinusContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_plusMinus);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1637);
			add();
			setState(1638);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NegateContext extends ParserRuleContext {
		public WaveContext wave() {
			return getRuleContext(WaveContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NegateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_negate; }
	}

	public final NegateContext negate() throws RecognitionException {
		NegateContext _localctx = new NegateContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_negate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1640);
			wave();
			setState(1641);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinqContext extends ParserRuleContext {
		public Token k;
		public LinqHeadKeywordContext linqHeadKeyword() {
			return getRuleContext(LinqHeadKeywordContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode LinqSelect() { return getToken(LiteParser.LinqSelect, 0); }
		public TerminalNode LinqBy() { return getToken(LiteParser.LinqBy, 0); }
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public List<LinqItemContext> linqItem() {
			return getRuleContexts(LinqItemContext.class);
		}
		public LinqItemContext linqItem(int i) {
			return getRuleContext(LinqItemContext.class,i);
		}
		public LinqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linq; }
	}

	public final LinqContext linq() throws RecognitionException {
		LinqContext _localctx = new LinqContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_linq);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1643);
			linqHeadKeyword();
			setState(1645);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1644);
				match(New_Line);
				}
			}

			setState(1647);
			expression(0);
			setState(1648);
			match(Right_Arrow);
			setState(1650);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1649);
				match(New_Line);
				}
			}

			setState(1653); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1652);
					linqItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1655); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,167,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(1657);
			((LinqContext)_localctx).k = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==LinqBy || _la==LinqSelect) ) {
				((LinqContext)_localctx).k = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1659);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1658);
				match(New_Line);
				}
			}

			setState(1661);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinqItemContext extends ParserRuleContext {
		public LinqKeywordContext linqKeyword() {
			return getRuleContext(LinqKeywordContext.class,0);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public LinqItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linqItem; }
	}

	public final LinqItemContext linqItem() throws RecognitionException {
		LinqItemContext _localctx = new LinqItemContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_linqItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1663);
			linqKeyword();
			setState(1665);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Flow) | (1L << Less) | (1L << Left_Paren) | (1L << Left_Brace) | (1L << Left_Brack) | (1L << Question) | (1L << Bang) | (1L << Wave) | (1L << Add) | (1L << Sub) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (NilLiteral - 64)) | (1L << (TrueLiteral - 64)) | (1L << (FalseLiteral - 64)) | (1L << (UndefinedLiteral - 64)) | (1L << (NumberLiteral - 64)) | (1L << (TextLiteral - 64)) | (1L << (CharLiteral - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)) | (1L << (Discard - 64)))) != 0)) {
				{
				setState(1664);
				expression(0);
				}
			}

			setState(1667);
			match(Right_Arrow);
			setState(1669);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1668);
				match(New_Line);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinqKeywordContext extends ParserRuleContext {
		public LinqHeadKeywordContext linqHeadKeyword() {
			return getRuleContext(LinqHeadKeywordContext.class,0);
		}
		public LinqBodyKeywordContext linqBodyKeyword() {
			return getRuleContext(LinqBodyKeywordContext.class,0);
		}
		public LinqKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linqKeyword; }
	}

	public final LinqKeywordContext linqKeyword() throws RecognitionException {
		LinqKeywordContext _localctx = new LinqKeywordContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_linqKeyword);
		try {
			setState(1673);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LinqFrom:
				enterOuterAlt(_localctx, 1);
				{
				setState(1671);
				linqHeadKeyword();
				}
				break;
			case LinqBy:
			case LinqSelect:
			case LinqWhere:
			case LinqGroup:
			case LinqInto:
			case LinqOrderby:
			case LinqJoin:
			case LinqLet:
			case LinqIn:
			case LinqOn:
			case LinqEquals:
			case LinqAscending:
			case LinqDescending:
				enterOuterAlt(_localctx, 2);
				{
				setState(1672);
				linqBodyKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinqHeadKeywordContext extends ParserRuleContext {
		public Token k;
		public TerminalNode LinqFrom() { return getToken(LiteParser.LinqFrom, 0); }
		public LinqHeadKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linqHeadKeyword; }
	}

	public final LinqHeadKeywordContext linqHeadKeyword() throws RecognitionException {
		LinqHeadKeywordContext _localctx = new LinqHeadKeywordContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_linqHeadKeyword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1675);
			((LinqHeadKeywordContext)_localctx).k = match(LinqFrom);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinqBodyKeywordContext extends ParserRuleContext {
		public Token k;
		public TerminalNode LinqSelect() { return getToken(LiteParser.LinqSelect, 0); }
		public TerminalNode LinqBy() { return getToken(LiteParser.LinqBy, 0); }
		public TerminalNode LinqWhere() { return getToken(LiteParser.LinqWhere, 0); }
		public TerminalNode LinqGroup() { return getToken(LiteParser.LinqGroup, 0); }
		public TerminalNode LinqInto() { return getToken(LiteParser.LinqInto, 0); }
		public TerminalNode LinqOrderby() { return getToken(LiteParser.LinqOrderby, 0); }
		public TerminalNode LinqJoin() { return getToken(LiteParser.LinqJoin, 0); }
		public TerminalNode LinqLet() { return getToken(LiteParser.LinqLet, 0); }
		public TerminalNode LinqIn() { return getToken(LiteParser.LinqIn, 0); }
		public TerminalNode LinqOn() { return getToken(LiteParser.LinqOn, 0); }
		public TerminalNode LinqEquals() { return getToken(LiteParser.LinqEquals, 0); }
		public TerminalNode LinqAscending() { return getToken(LiteParser.LinqAscending, 0); }
		public TerminalNode LinqDescending() { return getToken(LiteParser.LinqDescending, 0); }
		public LinqBodyKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linqBodyKeyword; }
	}

	public final LinqBodyKeywordContext linqBodyKeyword() throws RecognitionException {
		LinqBodyKeywordContext _localctx = new LinqBodyKeywordContext(_ctx, getState());
		enterRule(_localctx, 228, RULE_linqBodyKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1677);
			((LinqBodyKeywordContext)_localctx).k = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending))) != 0)) ) {
				((LinqBodyKeywordContext)_localctx).k = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringExpressionContext extends ParserRuleContext {
		public TerminalNode TextLiteral() { return getToken(LiteParser.TextLiteral, 0); }
		public List<StringExpressionElementContext> stringExpressionElement() {
			return getRuleContexts(StringExpressionElementContext.class);
		}
		public StringExpressionElementContext stringExpressionElement(int i) {
			return getRuleContext(StringExpressionElementContext.class,i);
		}
		public StringExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringExpression; }
	}

	public final StringExpressionContext stringExpression() throws RecognitionException {
		StringExpressionContext _localctx = new StringExpressionContext(_ctx, getState());
		enterRule(_localctx, 230, RULE_stringExpression);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1679);
			match(TextLiteral);
			setState(1681); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1680);
					stringExpressionElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1683); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,172,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringExpressionElementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode TextLiteral() { return getToken(LiteParser.TextLiteral, 0); }
		public StringExpressionElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringExpressionElement; }
	}

	public final StringExpressionElementContext stringExpressionElement() throws RecognitionException {
		StringExpressionElementContext _localctx = new StringExpressionElementContext(_ctx, getState());
		enterRule(_localctx, 232, RULE_stringExpressionElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1685);
			expression(0);
			setState(1686);
			match(TextLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataStatementContext extends ParserRuleContext {
		public Token t;
		public FloatExprContext floatExpr() {
			return getRuleContext(FloatExprContext.class,0);
		}
		public IntegerExprContext integerExpr() {
			return getRuleContext(IntegerExprContext.class,0);
		}
		public TerminalNode TextLiteral() { return getToken(LiteParser.TextLiteral, 0); }
		public TerminalNode CharLiteral() { return getToken(LiteParser.CharLiteral, 0); }
		public TerminalNode TrueLiteral() { return getToken(LiteParser.TrueLiteral, 0); }
		public TerminalNode FalseLiteral() { return getToken(LiteParser.FalseLiteral, 0); }
		public NilExprContext nilExpr() {
			return getRuleContext(NilExprContext.class,0);
		}
		public TerminalNode UndefinedLiteral() { return getToken(LiteParser.UndefinedLiteral, 0); }
		public DataStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataStatement; }
	}

	public final DataStatementContext dataStatement() throws RecognitionException {
		DataStatementContext _localctx = new DataStatementContext(_ctx, getState());
		enterRule(_localctx, 234, RULE_dataStatement);
		try {
			setState(1696);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,173,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1688);
				floatExpr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1689);
				integerExpr();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1690);
				((DataStatementContext)_localctx).t = match(TextLiteral);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1691);
				((DataStatementContext)_localctx).t = match(CharLiteral);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1692);
				((DataStatementContext)_localctx).t = match(TrueLiteral);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1693);
				((DataStatementContext)_localctx).t = match(FalseLiteral);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1694);
				nilExpr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1695);
				((DataStatementContext)_localctx).t = match(UndefinedLiteral);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FloatExprContext extends ParserRuleContext {
		public List<IntegerExprContext> integerExpr() {
			return getRuleContexts(IntegerExprContext.class);
		}
		public IntegerExprContext integerExpr(int i) {
			return getRuleContext(IntegerExprContext.class,i);
		}
		public CallContext call() {
			return getRuleContext(CallContext.class,0);
		}
		public FloatExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatExpr; }
	}

	public final FloatExprContext floatExpr() throws RecognitionException {
		FloatExprContext _localctx = new FloatExprContext(_ctx, getState());
		enterRule(_localctx, 236, RULE_floatExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1698);
			integerExpr();
			setState(1699);
			call();
			setState(1700);
			integerExpr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegerExprContext extends ParserRuleContext {
		public TerminalNode NumberLiteral() { return getToken(LiteParser.NumberLiteral, 0); }
		public IntegerExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerExpr; }
	}

	public final IntegerExprContext integerExpr() throws RecognitionException {
		IntegerExprContext _localctx = new IntegerExprContext(_ctx, getState());
		enterRule(_localctx, 238, RULE_integerExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1702);
			match(NumberLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeNotNullContext extends ParserRuleContext {
		public TypeAnyContext typeAny() {
			return getRuleContext(TypeAnyContext.class,0);
		}
		public TypeTupleContext typeTuple() {
			return getRuleContext(TypeTupleContext.class,0);
		}
		public TypeArrayContext typeArray() {
			return getRuleContext(TypeArrayContext.class,0);
		}
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TypeSetContext typeSet() {
			return getRuleContext(TypeSetContext.class,0);
		}
		public TypeDictionaryContext typeDictionary() {
			return getRuleContext(TypeDictionaryContext.class,0);
		}
		public TypeChannelContext typeChannel() {
			return getRuleContext(TypeChannelContext.class,0);
		}
		public TypeBasicContext typeBasic() {
			return getRuleContext(TypeBasicContext.class,0);
		}
		public TypePackageContext typePackage() {
			return getRuleContext(TypePackageContext.class,0);
		}
		public TypeFunctionContext typeFunction() {
			return getRuleContext(TypeFunctionContext.class,0);
		}
		public TypeNotNullContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeNotNull; }
	}

	public final TypeNotNullContext typeNotNull() throws RecognitionException {
		TypeNotNullContext _localctx = new TypeNotNullContext(_ctx, getState());
		enterRule(_localctx, 240, RULE_typeNotNull);
		try {
			setState(1714);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,174,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1704);
				typeAny();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1705);
				typeTuple();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1706);
				typeArray();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1707);
				typeList();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1708);
				typeSet();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1709);
				typeDictionary();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1710);
				typeChannel();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1711);
				typeBasic();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1712);
				typePackage();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(1713);
				typeFunction();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeReferenceContext extends ParserRuleContext {
		public TerminalNode Bang() { return getToken(LiteParser.Bang, 0); }
		public TypeNotNullContext typeNotNull() {
			return getRuleContext(TypeNotNullContext.class,0);
		}
		public TypeNullableContext typeNullable() {
			return getRuleContext(TypeNullableContext.class,0);
		}
		public TypeReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeReference; }
	}

	public final TypeReferenceContext typeReference() throws RecognitionException {
		TypeReferenceContext _localctx = new TypeReferenceContext(_ctx, getState());
		enterRule(_localctx, 242, RULE_typeReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1716);
			match(Bang);
			setState(1719);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LinqFrom:
			case LinqBy:
			case LinqSelect:
			case LinqWhere:
			case LinqGroup:
			case LinqInto:
			case LinqOrderby:
			case LinqJoin:
			case LinqLet:
			case LinqIn:
			case LinqOn:
			case LinqEquals:
			case LinqAscending:
			case LinqDescending:
			case Left_Paren:
			case Left_Brack:
			case TypeI8:
			case TypeU8:
			case TypeI16:
			case TypeU16:
			case TypeI32:
			case TypeU32:
			case TypeI64:
			case TypeU64:
			case TypeF32:
			case TypeF64:
			case TypeChr:
			case TypeStr:
			case TypeBool:
			case TypeInt:
			case TypeNum:
			case TypeByte:
			case TypeAny:
			case IDPrivate:
			case IDPublic:
				{
				setState(1717);
				typeNotNull();
				}
				break;
			case Question:
				{
				setState(1718);
				typeNullable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeNullableContext extends ParserRuleContext {
		public TerminalNode Question() { return getToken(LiteParser.Question, 0); }
		public TypeNotNullContext typeNotNull() {
			return getRuleContext(TypeNotNullContext.class,0);
		}
		public TypeNullableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeNullable; }
	}

	public final TypeNullableContext typeNullable() throws RecognitionException {
		TypeNullableContext _localctx = new TypeNullableContext(_ctx, getState());
		enterRule(_localctx, 244, RULE_typeNullable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1721);
			match(Question);
			setState(1722);
			typeNotNull();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeTypeContext extends ParserRuleContext {
		public TypeNotNullContext typeNotNull() {
			return getRuleContext(TypeNotNullContext.class,0);
		}
		public TypeNullableContext typeNullable() {
			return getRuleContext(TypeNullableContext.class,0);
		}
		public TypeReferenceContext typeReference() {
			return getRuleContext(TypeReferenceContext.class,0);
		}
		public TypeTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeType; }
	}

	public final TypeTypeContext typeType() throws RecognitionException {
		TypeTypeContext _localctx = new TypeTypeContext(_ctx, getState());
		enterRule(_localctx, 246, RULE_typeType);
		try {
			setState(1727);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LinqFrom:
			case LinqBy:
			case LinqSelect:
			case LinqWhere:
			case LinqGroup:
			case LinqInto:
			case LinqOrderby:
			case LinqJoin:
			case LinqLet:
			case LinqIn:
			case LinqOn:
			case LinqEquals:
			case LinqAscending:
			case LinqDescending:
			case Left_Paren:
			case Left_Brack:
			case TypeI8:
			case TypeU8:
			case TypeI16:
			case TypeU16:
			case TypeI32:
			case TypeU32:
			case TypeI64:
			case TypeU64:
			case TypeF32:
			case TypeF64:
			case TypeChr:
			case TypeStr:
			case TypeBool:
			case TypeInt:
			case TypeNum:
			case TypeByte:
			case TypeAny:
			case IDPrivate:
			case IDPublic:
				enterOuterAlt(_localctx, 1);
				{
				setState(1724);
				typeNotNull();
				}
				break;
			case Question:
				enterOuterAlt(_localctx, 2);
				{
				setState(1725);
				typeNullable();
				}
				break;
			case Bang:
				enterOuterAlt(_localctx, 3);
				{
				setState(1726);
				typeReference();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeTupleContext extends ParserRuleContext {
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public List<TypeTypeContext> typeType() {
			return getRuleContexts(TypeTypeContext.class);
		}
		public TypeTypeContext typeType(int i) {
			return getRuleContext(TypeTypeContext.class,i);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public TypeTupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeTuple; }
	}

	public final TypeTupleContext typeTuple() throws RecognitionException {
		TypeTupleContext _localctx = new TypeTupleContext(_ctx, getState());
		enterRule(_localctx, 248, RULE_typeTuple);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1729);
			left_paren();
			setState(1730);
			typeType();
			setState(1734); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1731);
				more();
				setState(1732);
				typeType();
				}
				}
				setState(1736); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Comma );
			setState(1738);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeArrayContext extends ParserRuleContext {
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TypeArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArray; }
	}

	public final TypeArrayContext typeArray() throws RecognitionException {
		TypeArrayContext _localctx = new TypeArrayContext(_ctx, getState());
		enterRule(_localctx, 250, RULE_typeArray);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1740);
			match(Left_Brack);
			setState(1741);
			match(Colon);
			setState(1742);
			match(Right_Brack);
			setState(1743);
			typeType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeListContext extends ParserRuleContext {
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeList; }
	}

	public final TypeListContext typeList() throws RecognitionException {
		TypeListContext _localctx = new TypeListContext(_ctx, getState());
		enterRule(_localctx, 252, RULE_typeList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1745);
			match(Left_Brack);
			setState(1746);
			match(Right_Brack);
			setState(1747);
			typeType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeSetContext extends ParserRuleContext {
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public TypeSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeSet; }
	}

	public final TypeSetContext typeSet() throws RecognitionException {
		TypeSetContext _localctx = new TypeSetContext(_ctx, getState());
		enterRule(_localctx, 254, RULE_typeSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1749);
			match(Left_Brack);
			setState(1750);
			typeType();
			setState(1751);
			match(Right_Brack);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDictionaryContext extends ParserRuleContext {
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public List<TypeTypeContext> typeType() {
			return getRuleContexts(TypeTypeContext.class);
		}
		public TypeTypeContext typeType(int i) {
			return getRuleContext(TypeTypeContext.class,i);
		}
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public TypeDictionaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDictionary; }
	}

	public final TypeDictionaryContext typeDictionary() throws RecognitionException {
		TypeDictionaryContext _localctx = new TypeDictionaryContext(_ctx, getState());
		enterRule(_localctx, 256, RULE_typeDictionary);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1753);
			match(Left_Brack);
			setState(1754);
			typeType();
			setState(1755);
			match(Right_Brack);
			setState(1756);
			typeType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeChannelContext extends ParserRuleContext {
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public TypeTypeContext typeType() {
			return getRuleContext(TypeTypeContext.class,0);
		}
		public TypeChannelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeChannel; }
	}

	public final TypeChannelContext typeChannel() throws RecognitionException {
		TypeChannelContext _localctx = new TypeChannelContext(_ctx, getState());
		enterRule(_localctx, 258, RULE_typeChannel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1758);
			match(Left_Brack);
			setState(1759);
			match(Right_Arrow);
			setState(1760);
			match(Right_Brack);
			setState(1761);
			typeType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypePackageContext extends ParserRuleContext {
		public NameSpaceItemContext nameSpaceItem() {
			return getRuleContext(NameSpaceItemContext.class,0);
		}
		public TemplateCallContext templateCall() {
			return getRuleContext(TemplateCallContext.class,0);
		}
		public TypePackageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typePackage; }
	}

	public final TypePackageContext typePackage() throws RecognitionException {
		TypePackageContext _localctx = new TypePackageContext(_ctx, getState());
		enterRule(_localctx, 260, RULE_typePackage);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1763);
			nameSpaceItem();
			setState(1765);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,178,_ctx) ) {
			case 1:
				{
				setState(1764);
				templateCall();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeFunctionContext extends ParserRuleContext {
		public Token t;
		public List<TypeFunctionParameterClauseContext> typeFunctionParameterClause() {
			return getRuleContexts(TypeFunctionParameterClauseContext.class);
		}
		public TypeFunctionParameterClauseContext typeFunctionParameterClause(int i) {
			return getRuleContext(TypeFunctionParameterClauseContext.class,i);
		}
		public TerminalNode Right_Arrow() { return getToken(LiteParser.Right_Arrow, 0); }
		public TerminalNode Right_Flow() { return getToken(LiteParser.Right_Flow, 0); }
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public TypeFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeFunction; }
	}

	public final TypeFunctionContext typeFunction() throws RecognitionException {
		TypeFunctionContext _localctx = new TypeFunctionContext(_ctx, getState());
		enterRule(_localctx, 262, RULE_typeFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1767);
			typeFunctionParameterClause();
			setState(1768);
			((TypeFunctionContext)_localctx).t = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Right_Arrow || _la==Right_Flow) ) {
				((TypeFunctionContext)_localctx).t = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1772);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(1769);
				match(New_Line);
				}
				}
				setState(1774);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1775);
			typeFunctionParameterClause();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeAnyContext extends ParserRuleContext {
		public TerminalNode TypeAny() { return getToken(LiteParser.TypeAny, 0); }
		public TypeAnyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAny; }
	}

	public final TypeAnyContext typeAny() throws RecognitionException {
		TypeAnyContext _localctx = new TypeAnyContext(_ctx, getState());
		enterRule(_localctx, 264, RULE_typeAny);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1777);
			match(TypeAny);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeFunctionParameterClauseContext extends ParserRuleContext {
		public Left_parenContext left_paren() {
			return getRuleContext(Left_parenContext.class,0);
		}
		public Right_parenContext right_paren() {
			return getRuleContext(Right_parenContext.class,0);
		}
		public List<TypeTypeContext> typeType() {
			return getRuleContexts(TypeTypeContext.class);
		}
		public TypeTypeContext typeType(int i) {
			return getRuleContext(TypeTypeContext.class,i);
		}
		public List<MoreContext> more() {
			return getRuleContexts(MoreContext.class);
		}
		public MoreContext more(int i) {
			return getRuleContext(MoreContext.class,i);
		}
		public TypeFunctionParameterClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeFunctionParameterClause; }
	}

	public final TypeFunctionParameterClauseContext typeFunctionParameterClause() throws RecognitionException {
		TypeFunctionParameterClauseContext _localctx = new TypeFunctionParameterClauseContext(_ctx, getState());
		enterRule(_localctx, 266, RULE_typeFunctionParameterClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1779);
			left_paren();
			setState(1781);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LinqFrom) | (1L << LinqBy) | (1L << LinqSelect) | (1L << LinqWhere) | (1L << LinqGroup) | (1L << LinqInto) | (1L << LinqOrderby) | (1L << LinqJoin) | (1L << LinqLet) | (1L << LinqIn) | (1L << LinqOn) | (1L << LinqEquals) | (1L << LinqAscending) | (1L << LinqDescending) | (1L << Left_Paren) | (1L << Left_Brack) | (1L << Question) | (1L << Bang) | (1L << TypeI8) | (1L << TypeU8) | (1L << TypeI16))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (TypeU16 - 64)) | (1L << (TypeI32 - 64)) | (1L << (TypeU32 - 64)) | (1L << (TypeI64 - 64)) | (1L << (TypeU64 - 64)) | (1L << (TypeF32 - 64)) | (1L << (TypeF64 - 64)) | (1L << (TypeChr - 64)) | (1L << (TypeStr - 64)) | (1L << (TypeBool - 64)) | (1L << (TypeInt - 64)) | (1L << (TypeNum - 64)) | (1L << (TypeByte - 64)) | (1L << (TypeAny - 64)) | (1L << (IDPrivate - 64)) | (1L << (IDPublic - 64)))) != 0)) {
				{
				setState(1780);
				typeType();
				}
			}

			setState(1788);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(1783);
				more();
				setState(1784);
				typeType();
				}
				}
				setState(1790);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1791);
			right_paren();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeBasicContext extends ParserRuleContext {
		public Token t;
		public TerminalNode TypeI8() { return getToken(LiteParser.TypeI8, 0); }
		public TerminalNode TypeU8() { return getToken(LiteParser.TypeU8, 0); }
		public TerminalNode TypeI16() { return getToken(LiteParser.TypeI16, 0); }
		public TerminalNode TypeU16() { return getToken(LiteParser.TypeU16, 0); }
		public TerminalNode TypeI32() { return getToken(LiteParser.TypeI32, 0); }
		public TerminalNode TypeU32() { return getToken(LiteParser.TypeU32, 0); }
		public TerminalNode TypeI64() { return getToken(LiteParser.TypeI64, 0); }
		public TerminalNode TypeU64() { return getToken(LiteParser.TypeU64, 0); }
		public TerminalNode TypeF32() { return getToken(LiteParser.TypeF32, 0); }
		public TerminalNode TypeF64() { return getToken(LiteParser.TypeF64, 0); }
		public TerminalNode TypeChr() { return getToken(LiteParser.TypeChr, 0); }
		public TerminalNode TypeStr() { return getToken(LiteParser.TypeStr, 0); }
		public TerminalNode TypeBool() { return getToken(LiteParser.TypeBool, 0); }
		public TerminalNode TypeInt() { return getToken(LiteParser.TypeInt, 0); }
		public TerminalNode TypeNum() { return getToken(LiteParser.TypeNum, 0); }
		public TerminalNode TypeByte() { return getToken(LiteParser.TypeByte, 0); }
		public TypeBasicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeBasic; }
	}

	public final TypeBasicContext typeBasic() throws RecognitionException {
		TypeBasicContext _localctx = new TypeBasicContext(_ctx, getState());
		enterRule(_localctx, 268, RULE_typeBasic);
		try {
			setState(1809);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TypeI8:
				enterOuterAlt(_localctx, 1);
				{
				setState(1793);
				((TypeBasicContext)_localctx).t = match(TypeI8);
				}
				break;
			case TypeU8:
				enterOuterAlt(_localctx, 2);
				{
				setState(1794);
				((TypeBasicContext)_localctx).t = match(TypeU8);
				}
				break;
			case TypeI16:
				enterOuterAlt(_localctx, 3);
				{
				setState(1795);
				((TypeBasicContext)_localctx).t = match(TypeI16);
				}
				break;
			case TypeU16:
				enterOuterAlt(_localctx, 4);
				{
				setState(1796);
				((TypeBasicContext)_localctx).t = match(TypeU16);
				}
				break;
			case TypeI32:
				enterOuterAlt(_localctx, 5);
				{
				setState(1797);
				((TypeBasicContext)_localctx).t = match(TypeI32);
				}
				break;
			case TypeU32:
				enterOuterAlt(_localctx, 6);
				{
				setState(1798);
				((TypeBasicContext)_localctx).t = match(TypeU32);
				}
				break;
			case TypeI64:
				enterOuterAlt(_localctx, 7);
				{
				setState(1799);
				((TypeBasicContext)_localctx).t = match(TypeI64);
				}
				break;
			case TypeU64:
				enterOuterAlt(_localctx, 8);
				{
				setState(1800);
				((TypeBasicContext)_localctx).t = match(TypeU64);
				}
				break;
			case TypeF32:
				enterOuterAlt(_localctx, 9);
				{
				setState(1801);
				((TypeBasicContext)_localctx).t = match(TypeF32);
				}
				break;
			case TypeF64:
				enterOuterAlt(_localctx, 10);
				{
				setState(1802);
				((TypeBasicContext)_localctx).t = match(TypeF64);
				}
				break;
			case TypeChr:
				enterOuterAlt(_localctx, 11);
				{
				setState(1803);
				((TypeBasicContext)_localctx).t = match(TypeChr);
				}
				break;
			case TypeStr:
				enterOuterAlt(_localctx, 12);
				{
				setState(1804);
				((TypeBasicContext)_localctx).t = match(TypeStr);
				}
				break;
			case TypeBool:
				enterOuterAlt(_localctx, 13);
				{
				setState(1805);
				((TypeBasicContext)_localctx).t = match(TypeBool);
				}
				break;
			case TypeInt:
				enterOuterAlt(_localctx, 14);
				{
				setState(1806);
				((TypeBasicContext)_localctx).t = match(TypeInt);
				}
				break;
			case TypeNum:
				enterOuterAlt(_localctx, 15);
				{
				setState(1807);
				((TypeBasicContext)_localctx).t = match(TypeNum);
				}
				break;
			case TypeByte:
				enterOuterAlt(_localctx, 16);
				{
				setState(1808);
				((TypeBasicContext)_localctx).t = match(TypeByte);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NilExprContext extends ParserRuleContext {
		public TerminalNode NilLiteral() { return getToken(LiteParser.NilLiteral, 0); }
		public NilExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nilExpr; }
	}

	public final NilExprContext nilExpr() throws RecognitionException {
		NilExprContext _localctx = new NilExprContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_nilExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1811);
			match(NilLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoolExprContext extends ParserRuleContext {
		public Token t;
		public TerminalNode TrueLiteral() { return getToken(LiteParser.TrueLiteral, 0); }
		public TerminalNode FalseLiteral() { return getToken(LiteParser.FalseLiteral, 0); }
		public BoolExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolExpr; }
	}

	public final BoolExprContext boolExpr() throws RecognitionException {
		BoolExprContext _localctx = new BoolExprContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_boolExpr);
		try {
			setState(1815);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TrueLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(1813);
				((BoolExprContext)_localctx).t = match(TrueLiteral);
				}
				break;
			case FalseLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(1814);
				((BoolExprContext)_localctx).t = match(FalseLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JudgeTypeContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Colon() { return getToken(LiteParser.Colon, 0); }
		public TerminalNode Equal_Equal() { return getToken(LiteParser.Equal_Equal, 0); }
		public TerminalNode Not_Equal() { return getToken(LiteParser.Not_Equal, 0); }
		public JudgeTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_judgeType; }
	}

	public final JudgeTypeContext judgeType() throws RecognitionException {
		JudgeTypeContext _localctx = new JudgeTypeContext(_ctx, getState());
		enterRule(_localctx, 274, RULE_judgeType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1817);
			((JudgeTypeContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Equal_Equal || _la==Not_Equal) ) {
				((JudgeTypeContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1818);
			match(Colon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JudgeContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Or() { return getToken(LiteParser.Or, 0); }
		public TerminalNode And() { return getToken(LiteParser.And, 0); }
		public TerminalNode Equal_Equal() { return getToken(LiteParser.Equal_Equal, 0); }
		public TerminalNode Not_Equal() { return getToken(LiteParser.Not_Equal, 0); }
		public TerminalNode Less_Equal() { return getToken(LiteParser.Less_Equal, 0); }
		public TerminalNode Greater_Equal() { return getToken(LiteParser.Greater_Equal, 0); }
		public TerminalNode Less() { return getToken(LiteParser.Less, 0); }
		public TerminalNode Greater() { return getToken(LiteParser.Greater, 0); }
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public JudgeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_judge; }
	}

	public final JudgeContext judge() throws RecognitionException {
		JudgeContext _localctx = new JudgeContext(_ctx, getState());
		enterRule(_localctx, 276, RULE_judge);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1820);
			((JudgeContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Equal_Equal) | (1L << Less_Equal) | (1L << Greater_Equal) | (1L << Not_Equal) | (1L << Less) | (1L << Greater) | (1L << And) | (1L << Or))) != 0)) ) {
				((JudgeContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1822);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1821);
				match(New_Line);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Equal() { return getToken(LiteParser.Equal, 0); }
		public TerminalNode Add_Equal() { return getToken(LiteParser.Add_Equal, 0); }
		public TerminalNode Sub_Equal() { return getToken(LiteParser.Sub_Equal, 0); }
		public TerminalNode Mul_Equal() { return getToken(LiteParser.Mul_Equal, 0); }
		public TerminalNode Div_Equal() { return getToken(LiteParser.Div_Equal, 0); }
		public TerminalNode Mod_Equal() { return getToken(LiteParser.Mod_Equal, 0); }
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public AssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign; }
	}

	public final AssignContext assign() throws RecognitionException {
		AssignContext _localctx = new AssignContext(_ctx, getState());
		enterRule(_localctx, 278, RULE_assign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1824);
			((AssignContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Add_Equal) | (1L << Sub_Equal) | (1L << Mul_Equal) | (1L << Div_Equal) | (1L << Mod_Equal) | (1L << Equal))) != 0)) ) {
				((AssignContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1826);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1825);
				match(New_Line);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Add() { return getToken(LiteParser.Add, 0); }
		public TerminalNode Sub() { return getToken(LiteParser.Sub, 0); }
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public AddContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_add; }
	}

	public final AddContext add() throws RecognitionException {
		AddContext _localctx = new AddContext(_ctx, getState());
		enterRule(_localctx, 280, RULE_add);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1828);
			((AddContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Add || _la==Sub) ) {
				((AddContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1830);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1829);
				match(New_Line);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MulContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Mul() { return getToken(LiteParser.Mul, 0); }
		public TerminalNode Div() { return getToken(LiteParser.Div, 0); }
		public TerminalNode Mod() { return getToken(LiteParser.Mod, 0); }
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public MulContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mul; }
	}

	public final MulContext mul() throws RecognitionException {
		MulContext _localctx = new MulContext(_ctx, getState());
		enterRule(_localctx, 282, RULE_mul);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1832);
			((MulContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Mul) | (1L << Div) | (1L << Mod))) != 0)) ) {
				((MulContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1834);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1833);
				match(New_Line);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PowContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Pow() { return getToken(LiteParser.Pow, 0); }
		public TerminalNode Root() { return getToken(LiteParser.Root, 0); }
		public TerminalNode Log() { return getToken(LiteParser.Log, 0); }
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public PowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pow; }
	}

	public final PowContext pow() throws RecognitionException {
		PowContext _localctx = new PowContext(_ctx, getState());
		enterRule(_localctx, 284, RULE_pow);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1836);
			((PowContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Pow) | (1L << Root) | (1L << Log))) != 0)) ) {
				((PowContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1838);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==New_Line) {
				{
				setState(1837);
				match(New_Line);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Dot() { return getToken(LiteParser.Dot, 0); }
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public CallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_call; }
	}

	public final CallContext call() throws RecognitionException {
		CallContext _localctx = new CallContext(_ctx, getState());
		enterRule(_localctx, 286, RULE_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1840);
			((CallContext)_localctx).op = match(Dot);
			setState(1842);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,189,_ctx) ) {
			case 1:
				{
				setState(1841);
				match(New_Line);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WaveContext extends ParserRuleContext {
		public Token op;
		public TerminalNode Wave() { return getToken(LiteParser.Wave, 0); }
		public WaveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wave; }
	}

	public final WaveContext wave() throws RecognitionException {
		WaveContext _localctx = new WaveContext(_ctx, getState());
		enterRule(_localctx, 288, RULE_wave);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1844);
			((WaveContext)_localctx).op = match(Wave);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdContext extends ParserRuleContext {
		public IdItemContext idItem() {
			return getRuleContext(IdItemContext.class,0);
		}
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 290, RULE_id);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1846);
			idItem();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdItemContext extends ParserRuleContext {
		public Token op;
		public TerminalNode IDPublic() { return getToken(LiteParser.IDPublic, 0); }
		public TerminalNode IDPrivate() { return getToken(LiteParser.IDPrivate, 0); }
		public TypeBasicContext typeBasic() {
			return getRuleContext(TypeBasicContext.class,0);
		}
		public TypeAnyContext typeAny() {
			return getRuleContext(TypeAnyContext.class,0);
		}
		public LinqKeywordContext linqKeyword() {
			return getRuleContext(LinqKeywordContext.class,0);
		}
		public IdItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idItem; }
	}

	public final IdItemContext idItem() throws RecognitionException {
		IdItemContext _localctx = new IdItemContext(_ctx, getState());
		enterRule(_localctx, 292, RULE_idItem);
		int _la;
		try {
			setState(1852);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDPrivate:
			case IDPublic:
				enterOuterAlt(_localctx, 1);
				{
				setState(1848);
				((IdItemContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==IDPrivate || _la==IDPublic) ) {
					((IdItemContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case TypeI8:
			case TypeU8:
			case TypeI16:
			case TypeU16:
			case TypeI32:
			case TypeU32:
			case TypeI64:
			case TypeU64:
			case TypeF32:
			case TypeF64:
			case TypeChr:
			case TypeStr:
			case TypeBool:
			case TypeInt:
			case TypeNum:
			case TypeByte:
				enterOuterAlt(_localctx, 2);
				{
				setState(1849);
				typeBasic();
				}
				break;
			case TypeAny:
				enterOuterAlt(_localctx, 3);
				{
				setState(1850);
				typeAny();
				}
				break;
			case LinqFrom:
			case LinqBy:
			case LinqSelect:
			case LinqWhere:
			case LinqGroup:
			case LinqInto:
			case LinqOrderby:
			case LinqJoin:
			case LinqLet:
			case LinqIn:
			case LinqOn:
			case LinqEquals:
			case LinqAscending:
			case LinqDescending:
				enterOuterAlt(_localctx, 4);
				{
				setState(1851);
				linqKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EndContext extends ParserRuleContext {
		public TerminalNode Semi() { return getToken(LiteParser.Semi, 0); }
		public TerminalNode New_Line() { return getToken(LiteParser.New_Line, 0); }
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 294, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1854);
			_la = _input.LA(1);
			if ( !(_la==Semi || _la==New_Line) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MoreContext extends ParserRuleContext {
		public TerminalNode Comma() { return getToken(LiteParser.Comma, 0); }
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public MoreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_more; }
	}

	public final MoreContext more() throws RecognitionException {
		MoreContext _localctx = new MoreContext(_ctx, getState());
		enterRule(_localctx, 296, RULE_more);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1856);
			match(Comma);
			setState(1860);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(1857);
				match(New_Line);
				}
				}
				setState(1862);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Left_braceContext extends ParserRuleContext {
		public TerminalNode Left_Brace() { return getToken(LiteParser.Left_Brace, 0); }
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public Left_braceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_left_brace; }
	}

	public final Left_braceContext left_brace() throws RecognitionException {
		Left_braceContext _localctx = new Left_braceContext(_ctx, getState());
		enterRule(_localctx, 298, RULE_left_brace);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1863);
			match(Left_Brace);
			setState(1867);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,192,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1864);
					match(New_Line);
					}
					} 
				}
				setState(1869);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,192,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Right_braceContext extends ParserRuleContext {
		public TerminalNode Right_Brace() { return getToken(LiteParser.Right_Brace, 0); }
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public Right_braceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_right_brace; }
	}

	public final Right_braceContext right_brace() throws RecognitionException {
		Right_braceContext _localctx = new Right_braceContext(_ctx, getState());
		enterRule(_localctx, 300, RULE_right_brace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1873);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(1870);
				match(New_Line);
				}
				}
				setState(1875);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1876);
			match(Right_Brace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Left_parenContext extends ParserRuleContext {
		public TerminalNode Left_Paren() { return getToken(LiteParser.Left_Paren, 0); }
		public Left_parenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_left_paren; }
	}

	public final Left_parenContext left_paren() throws RecognitionException {
		Left_parenContext _localctx = new Left_parenContext(_ctx, getState());
		enterRule(_localctx, 302, RULE_left_paren);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1878);
			match(Left_Paren);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Right_parenContext extends ParserRuleContext {
		public TerminalNode Right_Paren() { return getToken(LiteParser.Right_Paren, 0); }
		public Right_parenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_right_paren; }
	}

	public final Right_parenContext right_paren() throws RecognitionException {
		Right_parenContext _localctx = new Right_parenContext(_ctx, getState());
		enterRule(_localctx, 304, RULE_right_paren);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1880);
			match(Right_Paren);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Left_brackContext extends ParserRuleContext {
		public TerminalNode Left_Brack() { return getToken(LiteParser.Left_Brack, 0); }
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public Left_brackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_left_brack; }
	}

	public final Left_brackContext left_brack() throws RecognitionException {
		Left_brackContext _localctx = new Left_brackContext(_ctx, getState());
		enterRule(_localctx, 306, RULE_left_brack);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1882);
			match(Left_Brack);
			setState(1886);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,194,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1883);
					match(New_Line);
					}
					} 
				}
				setState(1888);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,194,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Right_brackContext extends ParserRuleContext {
		public TerminalNode Right_Brack() { return getToken(LiteParser.Right_Brack, 0); }
		public List<TerminalNode> New_Line() { return getTokens(LiteParser.New_Line); }
		public TerminalNode New_Line(int i) {
			return getToken(LiteParser.New_Line, i);
		}
		public Right_brackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_right_brack; }
	}

	public final Right_brackContext right_brack() throws RecognitionException {
		Right_brackContext _localctx = new Right_brackContext(_ctx, getState());
		enterRule(_localctx, 308, RULE_right_brack);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1892);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==New_Line) {
				{
				{
				setState(1889);
				match(New_Line);
				}
				}
				setState(1894);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1895);
			match(Right_Brack);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 66:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		case 67:
			return callExpression_sempred((CallExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 3);
		case 3:
			return precpred(_ctx, 2);
		case 4:
			return precpred(_ctx, 11);
		case 5:
			return precpred(_ctx, 10);
		case 6:
			return precpred(_ctx, 9);
		case 7:
			return precpred(_ctx, 8);
		case 8:
			return precpred(_ctx, 7);
		case 9:
			return precpred(_ctx, 6);
		}
		return true;
	}
	private boolean callExpression_sempred(CallExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 10:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3^\u076c\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\4v\tv\4"+
		"w\tw\4x\tx\4y\ty\4z\tz\4{\t{\4|\t|\4}\t}\4~\t~\4\177\t\177\4\u0080\t\u0080"+
		"\4\u0081\t\u0081\4\u0082\t\u0082\4\u0083\t\u0083\4\u0084\t\u0084\4\u0085"+
		"\t\u0085\4\u0086\t\u0086\4\u0087\t\u0087\4\u0088\t\u0088\4\u0089\t\u0089"+
		"\4\u008a\t\u008a\4\u008b\t\u008b\4\u008c\t\u008c\4\u008d\t\u008d\4\u008e"+
		"\t\u008e\4\u008f\t\u008f\4\u0090\t\u0090\4\u0091\t\u0091\4\u0092\t\u0092"+
		"\4\u0093\t\u0093\4\u0094\t\u0094\4\u0095\t\u0095\4\u0096\t\u0096\4\u0097"+
		"\t\u0097\4\u0098\t\u0098\4\u0099\t\u0099\4\u009a\t\u009a\4\u009b\t\u009b"+
		"\4\u009c\t\u009c\3\2\6\2\u013a\n\2\r\2\16\2\u013b\3\3\7\3\u013f\n\3\f"+
		"\3\16\3\u0142\13\3\3\3\5\3\u0145\n\3\3\3\3\3\7\3\u0149\n\3\f\3\16\3\u014c"+
		"\13\3\3\3\7\3\u014f\n\3\f\3\16\3\u0152\13\3\3\4\3\4\3\4\3\4\7\4\u0158"+
		"\n\4\f\4\16\4\u015b\13\4\3\4\3\4\3\4\3\5\5\5\u0161\n\5\3\5\3\5\3\5\5\5"+
		"\u0166\n\5\5\5\u0168\n\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\5\6\u0179\n\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3"+
		"\t\5\t\u0186\n\t\3\t\3\t\3\t\7\t\u018b\n\t\f\t\16\t\u018e\13\t\3\t\3\t"+
		"\3\t\7\t\u0193\n\t\f\t\16\t\u0196\13\t\3\t\3\t\3\t\3\n\3\n\3\n\5\n\u019e"+
		"\n\n\3\n\5\n\u01a1\n\n\3\n\3\n\3\13\5\13\u01a6\n\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\5\13\u01af\n\13\5\13\u01b1\n\13\3\13\3\13\3\f\5\f\u01b6"+
		"\n\f\3\f\3\f\3\f\3\f\3\f\5\f\u01bd\n\f\3\f\3\f\6\f\u01c1\n\f\r\f\16\f"+
		"\u01c2\3\f\3\f\3\r\5\r\u01c8\n\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u01d0\n\r"+
		"\3\r\3\r\3\r\3\16\5\16\u01d6\n\16\3\16\3\16\5\16\u01da\n\16\3\16\3\16"+
		"\3\16\7\16\u01df\n\16\f\16\16\16\u01e2\13\16\3\16\3\16\3\16\7\16\u01e7"+
		"\n\16\f\16\16\16\u01ea\13\16\3\16\3\16\3\16\3\17\5\17\u01f0\n\17\3\17"+
		"\3\17\5\17\u01f4\n\17\3\17\3\17\3\17\7\17\u01f9\n\17\f\17\16\17\u01fc"+
		"\13\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\5\20\u0205\n\20\3\21\3\21\3"+
		"\21\3\21\3\22\5\22\u020c\n\22\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u0214"+
		"\n\22\3\22\3\22\5\22\u0218\n\22\3\22\3\22\7\22\u021c\n\22\f\22\16\22\u021f"+
		"\13\22\3\22\3\22\3\23\5\23\u0224\n\23\3\23\3\23\3\23\3\23\3\23\3\23\3"+
		"\23\5\23\u022d\n\23\5\23\u022f\n\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24"+
		"\5\24\u0238\n\24\3\24\3\24\6\24\u023c\n\24\r\24\16\24\u023d\3\24\3\24"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\5\26\u024d\n\26"+
		"\3\26\7\26\u0250\n\26\f\26\16\26\u0253\13\26\3\26\3\26\7\26\u0257\n\26"+
		"\f\26\16\26\u025a\13\26\3\26\3\26\3\26\3\27\3\27\3\27\5\27\u0262\n\27"+
		"\3\30\5\30\u0265\n\30\3\30\5\30\u0268\n\30\3\30\3\30\5\30\u026c\n\30\3"+
		"\30\3\30\3\30\7\30\u0271\n\30\f\30\16\30\u0274\13\30\3\30\3\30\3\30\7"+
		"\30\u0279\n\30\f\30\16\30\u027c\13\30\3\30\3\30\3\30\3\31\5\31\u0282\n"+
		"\31\3\31\5\31\u0285\n\31\3\31\3\31\3\31\3\31\3\31\6\31\u028c\n\31\r\31"+
		"\16\31\u028d\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\7\32\u0298\n\32\f"+
		"\32\16\32\u029b\13\32\3\32\3\32\7\32\u029f\n\32\f\32\16\32\u02a2\13\32"+
		"\3\32\3\32\3\32\3\33\3\33\3\33\5\33\u02aa\n\33\3\34\5\34\u02ad\n\34\3"+
		"\34\5\34\u02b0\n\34\3\34\3\34\5\34\u02b4\n\34\3\34\3\34\3\34\7\34\u02b9"+
		"\n\34\f\34\16\34\u02bc\13\34\3\34\3\34\3\34\7\34\u02c1\n\34\f\34\16\34"+
		"\u02c4\13\34\3\34\3\34\3\34\3\35\5\35\u02ca\n\35\3\35\5\35\u02cd\n\35"+
		"\3\35\3\35\3\35\3\35\3\35\6\35\u02d4\n\35\r\35\16\35\u02d5\3\35\3\35\3"+
		"\36\5\36\u02db\n\36\3\36\3\36\5\36\u02df\n\36\3\36\3\36\3\36\7\36\u02e4"+
		"\n\36\f\36\16\36\u02e7\13\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\5\37\u02f0"+
		"\n\37\3 \5 \u02f3\n \3 \3 \3 \3 \3 \3 \3 \7 \u02fc\n \f \16 \u02ff\13"+
		" \3 \3 \3!\3!\3\"\5\"\u0306\n\"\3\"\3\"\5\"\u030a\n\"\3\"\3\"\3\"\7\""+
		"\u030f\n\"\f\"\16\"\u0312\13\"\3\"\3\"\3\"\3#\3#\5#\u0319\n#\3#\3#\3#"+
		"\7#\u031e\n#\f#\16#\u0321\13#\3#\3#\3#\7#\u0326\n#\f#\16#\u0329\13#\3"+
		"#\3#\3#\3$\3$\3$\3$\3%\3%\5%\u0334\n%\3%\3%\3%\7%\u0339\n%\f%\16%\u033c"+
		"\13%\3%\3%\3&\3&\5&\u0342\n&\3&\3&\3&\7&\u0347\n&\f&\16&\u034a\13&\3&"+
		"\3&\3\'\3\'\3\'\3\'\3\'\3\'\3(\5(\u0355\n(\3(\3(\3(\3(\3(\5(\u035c\n("+
		"\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\5)\u0371\n)"+
		"\3*\3*\3*\6*\u0376\n*\r*\16*\u0377\3*\3*\3+\3+\3+\7+\u037f\n+\f+\16+\u0382"+
		"\13+\3+\3+\3,\3,\5,\u0388\n,\3,\3,\5,\u038c\n,\3,\3,\7,\u0390\n,\f,\16"+
		",\u0393\13,\3,\3,\3-\3-\5-\u0399\n-\3.\3.\7.\u039d\n.\f.\16.\u03a0\13"+
		".\3.\3.\3.\3.\3.\7.\u03a7\n.\f.\16.\u03aa\13.\3.\3.\5.\u03ae\n.\3/\3/"+
		"\3/\7/\u03b3\n/\f/\16/\u03b6\13/\3/\3/\3\60\3\60\3\60\3\60\7\60\u03be"+
		"\n\60\f\60\16\60\u03c1\13\60\3\60\3\60\3\61\3\61\3\61\7\61\u03c8\n\61"+
		"\f\61\16\61\u03cb\13\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\7\62\u03d4"+
		"\n\62\f\62\16\62\u03d7\13\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3"+
		"\63\5\63\u03e2\n\63\3\63\3\63\3\63\7\63\u03e7\n\63\f\63\16\63\u03ea\13"+
		"\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\7\64\u03f3\n\64\f\64\16\64\u03f6"+
		"\13\64\3\64\3\64\3\64\3\65\3\65\3\65\7\65\u03fe\n\65\f\65\16\65\u0401"+
		"\13\65\3\65\3\65\3\65\3\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67\38\38\3"+
		"8\78\u0411\n8\f8\168\u0414\138\38\38\78\u0418\n8\f8\168\u041b\138\38\3"+
		"8\38\38\38\38\78\u0423\n8\f8\168\u0426\138\38\38\68\u042a\n8\r8\168\u042b"+
		"\38\38\58\u0430\n8\39\39\39\39\39\59\u0437\n9\39\39\3:\3:\3:\3:\3:\5:"+
		"\u0440\n:\3:\3:\7:\u0444\n:\f:\16:\u0447\13:\3:\3:\3;\3;\3;\7;\u044e\n"+
		";\f;\16;\u0451\13;\3;\3;\3<\3<\3<\5<\u0458\n<\3<\3<\3<\3=\3=\3=\3=\3="+
		"\3=\3=\3=\3=\3=\3=\3=\3=\3=\5=\u046b\n=\3>\3>\3>\3>\3>\3>\5>\u0473\n>"+
		"\3>\3>\3>\3?\3?\3?\3?\3?\3@\3@\3@\3@\3@\3@\3@\3@\3A\3A\3A\3A\3A\3B\3B"+
		"\3B\3C\3C\5C\u048f\nC\3C\3C\3C\3C\3C\3C\5C\u0497\nC\3D\3D\3D\3D\3D\3D"+
		"\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\5D\u04ad\nD\3D\3D\3D\3D\3D"+
		"\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D"+
		"\3D\3D\3D\3D\7D\u04cf\nD\fD\16D\u04d2\13D\3E\3E\3E\3E\3E\5E\u04d9\nE\3"+
		"E\3E\3E\5E\u04de\nE\3E\3E\7E\u04e2\nE\fE\16E\u04e5\13E\3F\3F\3F\3F\3F"+
		"\7F\u04ec\nF\fF\16F\u04ef\13F\5F\u04f1\nF\3F\3F\3G\3G\3G\3G\7G\u04f9\n"+
		"G\fG\16G\u04fc\13G\3H\3H\5H\u0500\nH\3I\3I\3I\3I\5I\u0506\nI\3I\3I\3I"+
		"\3J\3J\3J\3J\7J\u050f\nJ\fJ\16J\u0512\13J\3K\3K\3K\3K\3K\3K\7K\u051a\n"+
		"K\fK\16K\u051d\13K\3K\3K\5K\u0521\nK\3L\3L\3L\5L\u0526\nL\3L\3L\3M\3M"+
		"\5M\u052c\nM\3M\3M\5M\u0530\nM\3N\3N\5N\u0534\nN\3N\3N\3N\3N\3O\3O\5O"+
		"\u053c\nO\3O\3O\3O\5O\u0541\nO\3O\3O\3P\3P\3P\3P\3P\3P\5P\u054b\nP\3P"+
		"\3P\3Q\3Q\3Q\3Q\3Q\5Q\u0554\nQ\3Q\5Q\u0557\nQ\3Q\5Q\u055a\nQ\3Q\3Q\3R"+
		"\3R\3R\3R\3R\5R\u0563\nR\3R\3R\3S\3S\3S\3S\3S\3T\3T\3T\3T\7T\u0570\nT"+
		"\fT\16T\u0573\13T\3U\3U\3U\3U\3V\3V\3V\3V\7V\u057d\nV\fV\16V\u0580\13"+
		"V\3W\3W\3W\3W\3W\3W\3W\3W\7W\u058a\nW\fW\16W\u058d\13W\3X\3X\3X\3X\7X"+
		"\u0593\nX\fX\16X\u0596\13X\3Y\3Y\3Y\3Z\3Z\3Z\3Z\3Z\7Z\u05a0\nZ\fZ\16Z"+
		"\u05a3\13Z\3Z\3Z\3[\3[\3[\3[\3[\3[\3[\3[\3[\7[\u05b0\n[\f[\16[\u05b3\13"+
		"[\3[\3[\3\\\3\\\3\\\3\\\3\\\7\\\u05bc\n\\\f\\\16\\\u05bf\13\\\3\\\3\\"+
		"\3]\3]\3]\3]\3]\3^\3^\3^\5^\u05cb\n^\3_\3_\3_\3_\3`\3`\3`\3a\3a\3a\3b"+
		"\3b\3b\5b\u05da\nb\7b\u05dc\nb\fb\16b\u05df\13b\3b\3b\3c\3c\3c\5c\u05e6"+
		"\nc\3c\3c\7c\u05ea\nc\fc\16c\u05ed\13c\3d\3d\3d\3d\3d\7d\u05f4\nd\fd\16"+
		"d\u05f7\13d\3d\3d\3e\3e\3e\5e\u05fe\ne\3f\3f\3f\3f\3f\7f\u0605\nf\ff\16"+
		"f\u0608\13f\3f\3f\3g\3g\5g\u060e\ng\3g\3g\7g\u0612\ng\fg\16g\u0615\13"+
		"g\3g\3g\3g\3g\3g\5g\u061c\ng\3g\3g\7g\u0620\ng\fg\16g\u0623\13g\3g\7g"+
		"\u0626\ng\fg\16g\u0629\13g\3g\3g\5g\u062d\ng\3h\3h\3h\3h\7h\u0633\nh\f"+
		"h\16h\u0636\13h\3i\3i\3j\3j\3j\3j\3j\7j\u063f\nj\fj\16j\u0642\13j\3j\3"+
		"j\3k\3k\3k\3k\3l\3l\3l\7l\u064d\nl\fl\16l\u0650\13l\3l\3l\3l\7l\u0655"+
		"\nl\fl\16l\u0658\13l\3l\3l\3m\3m\3m\3m\3m\7m\u0661\nm\fm\16m\u0664\13"+
		"m\3m\3m\3n\3n\3n\3o\3o\3o\3p\3p\5p\u0670\np\3p\3p\3p\5p\u0675\np\3p\6"+
		"p\u0678\np\rp\16p\u0679\3p\3p\5p\u067e\np\3p\3p\3q\3q\5q\u0684\nq\3q\3"+
		"q\5q\u0688\nq\3r\3r\5r\u068c\nr\3s\3s\3t\3t\3u\3u\6u\u0694\nu\ru\16u\u0695"+
		"\3v\3v\3v\3w\3w\3w\3w\3w\3w\3w\3w\5w\u06a3\nw\3x\3x\3x\3x\3y\3y\3z\3z"+
		"\3z\3z\3z\3z\3z\3z\3z\3z\5z\u06b5\nz\3{\3{\3{\5{\u06ba\n{\3|\3|\3|\3}"+
		"\3}\3}\5}\u06c2\n}\3~\3~\3~\3~\3~\6~\u06c9\n~\r~\16~\u06ca\3~\3~\3\177"+
		"\3\177\3\177\3\177\3\177\3\u0080\3\u0080\3\u0080\3\u0080\3\u0081\3\u0081"+
		"\3\u0081\3\u0081\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082\3\u0083\3\u0083"+
		"\3\u0083\3\u0083\3\u0083\3\u0084\3\u0084\5\u0084\u06e8\n\u0084\3\u0085"+
		"\3\u0085\3\u0085\7\u0085\u06ed\n\u0085\f\u0085\16\u0085\u06f0\13\u0085"+
		"\3\u0085\3\u0085\3\u0086\3\u0086\3\u0087\3\u0087\5\u0087\u06f8\n\u0087"+
		"\3\u0087\3\u0087\3\u0087\7\u0087\u06fd\n\u0087\f\u0087\16\u0087\u0700"+
		"\13\u0087\3\u0087\3\u0087\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088\3\u0088"+
		"\3\u0088\5\u0088\u0714\n\u0088\3\u0089\3\u0089\3\u008a\3\u008a\5\u008a"+
		"\u071a\n\u008a\3\u008b\3\u008b\3\u008b\3\u008c\3\u008c\5\u008c\u0721\n"+
		"\u008c\3\u008d\3\u008d\5\u008d\u0725\n\u008d\3\u008e\3\u008e\5\u008e\u0729"+
		"\n\u008e\3\u008f\3\u008f\5\u008f\u072d\n\u008f\3\u0090\3\u0090\5\u0090"+
		"\u0731\n\u0090\3\u0091\3\u0091\5\u0091\u0735\n\u0091\3\u0092\3\u0092\3"+
		"\u0093\3\u0093\3\u0094\3\u0094\3\u0094\3\u0094\5\u0094\u073f\n\u0094\3"+
		"\u0095\3\u0095\3\u0096\3\u0096\7\u0096\u0745\n\u0096\f\u0096\16\u0096"+
		"\u0748\13\u0096\3\u0097\3\u0097\7\u0097\u074c\n\u0097\f\u0097\16\u0097"+
		"\u074f\13\u0097\3\u0098\7\u0098\u0752\n\u0098\f\u0098\16\u0098\u0755\13"+
		"\u0098\3\u0098\3\u0098\3\u0099\3\u0099\3\u009a\3\u009a\3\u009b\3\u009b"+
		"\7\u009b\u075f\n\u009b\f\u009b\16\u009b\u0762\13\u009b\3\u009c\7\u009c"+
		"\u0765\n\u009c\f\u009c\16\u009c\u0768\13\u009c\3\u009c\3\u009c\3\u009c"+
		"\2\4\u0086\u0088\u009d\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,"+
		".\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086"+
		"\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e"+
		"\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6"+
		"\u00b8\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce"+
		"\u00d0\u00d2\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4\u00e6"+
		"\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2\u00f4\u00f6\u00f8\u00fa\u00fc\u00fe"+
		"\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116"+
		"\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e"+
		"\u0130\u0132\u0134\u0136\2\16\4\2##%%\4\2\33\34()\3\2\4\5\3\2\4\20\4\2"+
		"\32\32\35\35\5\2\32\35()=>\4\2\24\30\'\'\3\2\678\3\29;\3\2\21\23\3\2W"+
		"X\4\2**]]\2\u07f6\2\u0139\3\2\2\2\4\u0140\3\2\2\2\6\u0153\3\2\2\2\b\u0160"+
		"\3\2\2\2\n\u0178\3\2\2\2\f\u017a\3\2\2\2\16\u017f\3\2\2\2\20\u0185\3\2"+
		"\2\2\22\u019a\3\2\2\2\24\u01a5\3\2\2\2\26\u01b5\3\2\2\2\30\u01c7\3\2\2"+
		"\2\32\u01d5\3\2\2\2\34\u01ef\3\2\2\2\36\u0204\3\2\2\2 \u0206\3\2\2\2\""+
		"\u020b\3\2\2\2$\u0223\3\2\2\2&\u0232\3\2\2\2(\u0241\3\2\2\2*\u0249\3\2"+
		"\2\2,\u0261\3\2\2\2.\u0264\3\2\2\2\60\u0281\3\2\2\2\62\u0291\3\2\2\2\64"+
		"\u02a9\3\2\2\2\66\u02ac\3\2\2\28\u02c9\3\2\2\2:\u02da\3\2\2\2<\u02ef\3"+
		"\2\2\2>\u02f2\3\2\2\2@\u0302\3\2\2\2B\u0305\3\2\2\2D\u0316\3\2\2\2F\u032d"+
		"\3\2\2\2H\u0331\3\2\2\2J\u033f\3\2\2\2L\u034d\3\2\2\2N\u0354\3\2\2\2P"+
		"\u0370\3\2\2\2R\u0372\3\2\2\2T\u037b\3\2\2\2V\u038b\3\2\2\2X\u0398\3\2"+
		"\2\2Z\u03ad\3\2\2\2\\\u03af\3\2\2\2^\u03b9\3\2\2\2`\u03c4\3\2\2\2b\u03ce"+
		"\3\2\2\2d\u03db\3\2\2\2f\u03ee\3\2\2\2h\u03fa\3\2\2\2j\u0405\3\2\2\2l"+
		"\u0409\3\2\2\2n\u042f\3\2\2\2p\u0431\3\2\2\2r\u043f\3\2\2\2t\u044a\3\2"+
		"\2\2v\u0454\3\2\2\2x\u046a\3\2\2\2z\u046c\3\2\2\2|\u0477\3\2\2\2~\u047c"+
		"\3\2\2\2\u0080\u0484\3\2\2\2\u0082\u0489\3\2\2\2\u0084\u0496\3\2\2\2\u0086"+
		"\u04ac\3\2\2\2\u0088\u04d8\3\2\2\2\u008a\u04e6\3\2\2\2\u008c\u04f4\3\2"+
		"\2\2\u008e\u04fd\3\2\2\2\u0090\u0501\3\2\2\2\u0092\u050a\3\2\2\2\u0094"+
		"\u0513\3\2\2\2\u0096\u0525\3\2\2\2\u0098\u0529\3\2\2\2\u009a\u0531\3\2"+
		"\2\2\u009c\u0539\3\2\2\2\u009e\u0544\3\2\2\2\u00a0\u054e\3\2\2\2\u00a2"+
		"\u055d\3\2\2\2\u00a4\u0566\3\2\2\2\u00a6\u056b\3\2\2\2\u00a8\u0574\3\2"+
		"\2\2\u00aa\u0578\3\2\2\2\u00ac\u0581\3\2\2\2\u00ae\u058e\3\2\2\2\u00b0"+
		"\u0597\3\2\2\2\u00b2\u059a\3\2\2\2\u00b4\u05a6\3\2\2\2\u00b6\u05b6\3\2"+
		"\2\2\u00b8\u05c2\3\2\2\2\u00ba\u05ca\3\2\2\2\u00bc\u05cc\3\2\2\2\u00be"+
		"\u05d0\3\2\2\2\u00c0\u05d3\3\2\2\2\u00c2\u05dd\3\2\2\2\u00c4\u05e2\3\2"+
		"\2\2\u00c6\u05ee\3\2\2\2\u00c8\u05fa\3\2\2\2\u00ca\u05ff\3\2\2\2\u00cc"+
		"\u062c\3\2\2\2\u00ce\u062e\3\2\2\2\u00d0\u0637\3\2\2\2\u00d2\u0639\3\2"+
		"\2\2\u00d4\u0645\3\2\2\2\u00d6\u0649\3\2\2\2\u00d8\u065b\3\2\2\2\u00da"+
		"\u0667\3\2\2\2\u00dc\u066a\3\2\2\2\u00de\u066d\3\2\2\2\u00e0\u0681\3\2"+
		"\2\2\u00e2\u068b\3\2\2\2\u00e4\u068d\3\2\2\2\u00e6\u068f\3\2\2\2\u00e8"+
		"\u0691\3\2\2\2\u00ea\u0697\3\2\2\2\u00ec\u06a2\3\2\2\2\u00ee\u06a4\3\2"+
		"\2\2\u00f0\u06a8\3\2\2\2\u00f2\u06b4\3\2\2\2\u00f4\u06b6\3\2\2\2\u00f6"+
		"\u06bb\3\2\2\2\u00f8\u06c1\3\2\2\2\u00fa\u06c3\3\2\2\2\u00fc\u06ce\3\2"+
		"\2\2\u00fe\u06d3\3\2\2\2\u0100\u06d7\3\2\2\2\u0102\u06db\3\2\2\2\u0104"+
		"\u06e0\3\2\2\2\u0106\u06e5\3\2\2\2\u0108\u06e9\3\2\2\2\u010a\u06f3\3\2"+
		"\2\2\u010c\u06f5\3\2\2\2\u010e\u0713\3\2\2\2\u0110\u0715\3\2\2\2\u0112"+
		"\u0719\3\2\2\2\u0114\u071b\3\2\2\2\u0116\u071e\3\2\2\2\u0118\u0722\3\2"+
		"\2\2\u011a\u0726\3\2\2\2\u011c\u072a\3\2\2\2\u011e\u072e\3\2\2\2\u0120"+
		"\u0732\3\2\2\2\u0122\u0736\3\2\2\2\u0124\u0738\3\2\2\2\u0126\u073e\3\2"+
		"\2\2\u0128\u0740\3\2\2\2\u012a\u0742\3\2\2\2\u012c\u0749\3\2\2\2\u012e"+
		"\u0753\3\2\2\2\u0130\u0758\3\2\2\2\u0132\u075a\3\2\2\2\u0134\u075c\3\2"+
		"\2\2\u0136\u0766\3\2\2\2\u0138\u013a\5\4\3\2\u0139\u0138\3\2\2\2\u013a"+
		"\u013b\3\2\2\2\u013b\u0139\3\2\2\2\u013b\u013c\3\2\2\2\u013c\3\3\2\2\2"+
		"\u013d\u013f\7]\2\2\u013e\u013d\3\2\2\2\u013f\u0142\3\2\2\2\u0140\u013e"+
		"\3\2\2\2\u0140\u0141\3\2\2\2\u0141\u0144\3\2\2\2\u0142\u0140\3\2\2\2\u0143"+
		"\u0145\5\u008eH\2\u0144\u0143\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u0146"+
		"\3\2\2\2\u0146\u014a\5\6\4\2\u0147\u0149\7]\2\2\u0148\u0147\3\2\2\2\u0149"+
		"\u014c\3\2\2\2\u014a\u0148\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u0150\3\2"+
		"\2\2\u014c\u014a\3\2\2\2\u014d\u014f\5\n\6\2\u014e\u014d\3\2\2\2\u014f"+
		"\u0152\3\2\2\2\u0150\u014e\3\2\2\2\u0150\u0151\3\2\2\2\u0151\5\3\2\2\2"+
		"\u0152\u0150\3\2\2\2\u0153\u0154\7U\2\2\u0154\u0159\5\u012c\u0097\2\u0155"+
		"\u0158\5\b\5\2\u0156\u0158\7]\2\2\u0157\u0155\3\2\2\2\u0157\u0156\3\2"+
		"\2\2\u0158\u015b\3\2\2\2\u0159\u0157\3\2\2\2\u0159\u015a\3\2\2\2\u015a"+
		"\u015c\3\2\2\2\u015b\u0159\3\2\2\2\u015c\u015d\5\u012e\u0098\2\u015d\u015e"+
		"\5\u0128\u0095\2\u015e\7\3\2\2\2\u015f\u0161\5\u008eH\2\u0160\u015f\3"+
		"\2\2\2\u0160\u0161\3\2\2\2\u0161\u0162\3\2\2\2\u0162\u0167\7U\2\2\u0163"+
		"\u0165\5\u0124\u0093\2\u0164\u0166\5\u0120\u0091\2\u0165\u0164\3\2\2\2"+
		"\u0165\u0166\3\2\2\2\u0166\u0168\3\2\2\2\u0167\u0163\3\2\2\2\u0167\u0168"+
		"\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016a\5\u0128\u0095\2\u016a\t\3\2\2"+
		"\2\u016b\u0179\5\24\13\2\u016c\u0179\5\26\f\2\u016d\u0179\5\32\16\2\u016e"+
		"\u0179\5\30\r\2\u016f\u0179\5\34\17\2\u0170\u0179\5:\36\2\u0171\u0179"+
		"\5*\26\2\u0172\u0179\5\62\32\2\u0173\u0179\5\"\22\2\u0174\u0179\5\20\t"+
		"\2\u0175\u0179\5\f\7\2\u0176\u0179\5\16\b\2\u0177\u0179\7]\2\2\u0178\u016b"+
		"\3\2\2\2\u0178\u016c\3\2\2\2\u0178\u016d\3\2\2\2\u0178\u016e\3\2\2\2\u0178"+
		"\u016f\3\2\2\2\u0178\u0170\3\2\2\2\u0178\u0171\3\2\2\2\u0178\u0172\3\2"+
		"\2\2\u0178\u0173\3\2\2\2\u0178\u0174\3\2\2\2\u0178\u0175\3\2\2\2\u0178"+
		"\u0176\3\2\2\2\u0178\u0177\3\2\2\2\u0179\13\3\2\2\2\u017a\u017b\5\u0124"+
		"\u0093\2\u017b\u017c\7\"\2\2\u017c\u017d\5\u00f8}\2\u017d\u017e\5\u0128"+
		"\u0095\2\u017e\r\3\2\2\2\u017f\u0180\5\u0124\u0093\2\u0180\u0181\7#\2"+
		"\2\u0181\u0182\5\u00f8}\2\u0182\u0183\5\u0128\u0095\2\u0183\17\3\2\2\2"+
		"\u0184\u0186\5\u008eH\2\u0185\u0184\3\2\2\2\u0185\u0186\3\2\2\2\u0186"+
		"\u0187\3\2\2\2\u0187\u0188\5\u0124\u0093\2\u0188\u018c\7#\2\2\u0189\u018b"+
		"\7]\2\2\u018a\u0189\3\2\2\2\u018b\u018e\3\2\2\2\u018c\u018a\3\2\2\2\u018c"+
		"\u018d\3\2\2\2\u018d\u018f\3\2\2\2\u018e\u018c\3\2\2\2\u018f\u0190\5\u00f8"+
		"}\2\u0190\u0194\5\u0134\u009b\2\u0191\u0193\5\22\n\2\u0192\u0191\3\2\2"+
		"\2\u0193\u0196\3\2\2\2\u0194\u0192\3\2\2\2\u0194\u0195\3\2\2\2\u0195\u0197"+
		"\3\2\2\2\u0196\u0194\3\2\2\2\u0197\u0198\5\u0136\u009c\2\u0198\u0199\5"+
		"\u0128\u0095\2\u0199\21\3\2\2\2\u019a\u01a0\5\u0124\u0093\2\u019b\u019d"+
		"\7\'\2\2\u019c\u019e\5\u011a\u008e\2\u019d\u019c\3\2\2\2\u019d\u019e\3"+
		"\2\2\2\u019e\u019f\3\2\2\2\u019f\u01a1\5\u00f0y\2\u01a0\u019b\3\2\2\2"+
		"\u01a0\u01a1\3\2\2\2\u01a1\u01a2\3\2\2\2\u01a2\u01a3\5\u0128\u0095\2\u01a3"+
		"\23\3\2\2\2\u01a4\u01a6\5\u008eH\2\u01a5\u01a4\3\2\2\2\u01a5\u01a6\3\2"+
		"\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01b0\5\u0124\u0093\2\u01a8\u01a9\7\31"+
		"\2\2\u01a9\u01b1\5\u0086D\2\u01aa\u01ab\7\62\2\2\u01ab\u01ae\5\u00f8}"+
		"\2\u01ac\u01ad\7\'\2\2\u01ad\u01af\5\u0086D\2\u01ae\u01ac\3\2\2\2\u01ae"+
		"\u01af\3\2\2\2\u01af\u01b1\3\2\2\2\u01b0\u01a8\3\2\2\2\u01b0\u01aa\3\2"+
		"\2\2\u01b1\u01b2\3\2\2\2\u01b2\u01b3\5\u0128\u0095\2\u01b3\25\3\2\2\2"+
		"\u01b4\u01b6\5\u008eH\2\u01b5\u01b4\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6"+
		"\u01b7\3\2\2\2\u01b7\u01b8\5\u0124\u0093\2\u01b8\u01b9\7\62\2\2\u01b9"+
		"\u01bc\5\u00f8}\2\u01ba\u01bb\7\'\2\2\u01bb\u01bd\5\u0086D\2\u01bc\u01ba"+
		"\3\2\2\2\u01bc\u01bd\3\2\2\2\u01bd\u01be\3\2\2\2\u01be\u01c0\7#\2\2\u01bf"+
		"\u01c1\5&\24\2\u01c0\u01bf\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2\u01c0\3\2"+
		"\2\2\u01c2\u01c3\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c5\5\u0128\u0095"+
		"\2\u01c5\27\3\2\2\2\u01c6\u01c8\5\u008eH\2\u01c7\u01c6\3\2\2\2\u01c7\u01c8"+
		"\3\2\2\2\u01c8\u01c9\3\2\2\2\u01c9\u01cf\5\u0124\u0093\2\u01ca\u01cb\7"+
		"\62\2\2\u01cb\u01cc\5\u00f8}\2\u01cc\u01cd\7\62\2\2\u01cd\u01d0\3\2\2"+
		"\2\u01ce\u01d0\7\61\2\2\u01cf\u01ca\3\2\2\2\u01cf\u01ce\3\2\2\2\u01d0"+
		"\u01d1\3\2\2\2\u01d1\u01d2\5\u0086D\2\u01d2\u01d3\5\u0128\u0095\2\u01d3"+
		"\31\3\2\2\2\u01d4\u01d6\5\u008eH\2\u01d5\u01d4\3\2\2\2\u01d5\u01d6\3\2"+
		"\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01d9\5\u0124\u0093\2\u01d8\u01da\5\u00c6"+
		"d\2\u01d9\u01d8\3\2\2\2\u01d9\u01da\3\2\2\2\u01da\u01db\3\2\2\2\u01db"+
		"\u01dc\5H%\2\u01dc\u01e0\t\2\2\2\u01dd\u01df\7]\2\2\u01de\u01dd\3\2\2"+
		"\2\u01df\u01e2\3\2\2\2\u01e0\u01de\3\2\2\2\u01e0\u01e1\3\2\2\2\u01e1\u01e3"+
		"\3\2\2\2\u01e2\u01e0\3\2\2\2\u01e3\u01e4\5J&\2\u01e4\u01e8\5\u012c\u0097"+
		"\2\u01e5\u01e7\5P)\2\u01e6\u01e5\3\2\2\2\u01e7\u01ea\3\2\2\2\u01e8\u01e6"+
		"\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9\u01eb\3\2\2\2\u01ea\u01e8\3\2\2\2\u01eb"+
		"\u01ec\5\u012e\u0098\2\u01ec\u01ed\5\u0128\u0095\2\u01ed\33\3\2\2\2\u01ee"+
		"\u01f0\5\u008eH\2\u01ef\u01ee\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0\u01f1"+
		"\3\2\2\2\u01f1\u01f3\5\u0124\u0093\2\u01f2\u01f4\5\u00c6d\2\u01f3\u01f2"+
		"\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5\u01f6\7#\2\2\u01f6"+
		"\u01fa\5\u012c\u0097\2\u01f7\u01f9\5\36\20\2\u01f8\u01f7\3\2\2\2\u01f9"+
		"\u01fc\3\2\2\2\u01fa\u01f8\3\2\2\2\u01fa\u01fb\3\2\2\2\u01fb\u01fd\3\2"+
		"\2\2\u01fc\u01fa\3\2\2\2\u01fd\u01fe\5\u012e\u0098\2\u01fe\u01ff\5\u0128"+
		"\u0095\2\u01ff\35\3\2\2\2\u0200\u0205\5 \21\2\u0201\u0205\5$\23\2\u0202"+
		"\u0205\5(\25\2\u0203\u0205\7]\2\2\u0204\u0200\3\2\2\2\u0204\u0201\3\2"+
		"\2\2\u0204\u0202\3\2\2\2\u0204\u0203\3\2\2\2\u0205\37\3\2\2\2\u0206\u0207"+
		"\7\62\2\2\u0207\u0208\5\u00f8}\2\u0208\u0209\5\u0128\u0095\2\u0209!\3"+
		"\2\2\2\u020a\u020c\5\u008eH\2\u020b\u020a\3\2\2\2\u020b\u020c\3\2\2\2"+
		"\u020c\u020d\3\2\2\2\u020d\u020e\5L\'\2\u020e\u020f\7(\2\2\u020f\u0210"+
		"\7)\2\2\u0210\u0217\5H%\2\u0211\u0213\5\u0130\u0099\2\u0212\u0214\5\u008c"+
		"G\2\u0213\u0212\3\2\2\2\u0213\u0214\3\2\2\2\u0214\u0215\3\2\2\2\u0215"+
		"\u0216\5\u0132\u009a\2\u0216\u0218\3\2\2\2\u0217\u0211\3\2\2\2\u0217\u0218"+
		"\3\2\2\2\u0218\u0219\3\2\2\2\u0219\u021d\5\u012c\u0097\2\u021a\u021c\5"+
		"P)\2\u021b\u021a\3\2\2\2\u021c\u021f\3\2\2\2\u021d\u021b\3\2\2\2\u021d"+
		"\u021e\3\2\2\2\u021e\u0220\3\2\2\2\u021f\u021d\3\2\2\2\u0220\u0221\5\u012e"+
		"\u0098\2\u0221#\3\2\2\2\u0222\u0224\5\u008eH\2\u0223\u0222\3\2\2\2\u0223"+
		"\u0224\3\2\2\2\u0224\u0225\3\2\2\2\u0225\u022e\5\u0124\u0093\2\u0226\u0227"+
		"\7\31\2\2\u0227\u022f\5\u0086D\2\u0228\u0229\7\62\2\2\u0229\u022c\5\u00f8"+
		"}\2\u022a\u022b\7\'\2\2\u022b\u022d\5\u0086D\2\u022c\u022a\3\2\2\2\u022c"+
		"\u022d\3\2\2\2\u022d\u022f\3\2\2\2\u022e\u0226\3\2\2\2\u022e\u0228\3\2"+
		"\2\2\u022f\u0230\3\2\2\2\u0230\u0231\5\u0128\u0095\2\u0231%\3\2\2\2\u0232"+
		"\u0237\5\u0124\u0093\2\u0233\u0234\5\u0130\u0099\2\u0234\u0235\5\u0124"+
		"\u0093\2\u0235\u0236\5\u0132\u009a\2\u0236\u0238\3\2\2\2\u0237\u0233\3"+
		"\2\2\2\u0237\u0238\3\2\2\2\u0238\u0239\3\2\2\2\u0239\u023b\5\u012c\u0097"+
		"\2\u023a\u023c\5P)\2\u023b\u023a\3\2\2\2\u023c\u023d\3\2\2\2\u023d\u023b"+
		"\3\2\2\2\u023d\u023e\3\2\2\2\u023e\u023f\3\2\2\2\u023f\u0240\5\u012e\u0098"+
		"\2\u0240\'\3\2\2\2\u0241\u0242\5\u0124\u0093\2\u0242\u0243\7\62\2\2\u0243"+
		"\u0244\5\u0134\u009b\2\u0244\u0245\7\63\2\2\u0245\u0246\5\u0136\u009c"+
		"\2\u0246\u0247\5\u00c2b\2\u0247\u0248\5\u0128\u0095\2\u0248)\3\2\2\2\u0249"+
		"\u024a\5L\'\2\u024a\u024c\7#\2\2\u024b\u024d\5\u00f8}\2\u024c\u024b\3"+
		"\2\2\2\u024c\u024d\3\2\2\2\u024d\u0251\3\2\2\2\u024e\u0250\7]\2\2\u024f"+
		"\u024e\3\2\2\2\u0250\u0253\3\2\2\2\u0251\u024f\3\2\2\2\u0251\u0252\3\2"+
		"\2\2\u0252\u0254\3\2\2\2\u0253\u0251\3\2\2\2\u0254\u0258\5\u012c\u0097"+
		"\2\u0255\u0257\5,\27\2\u0256\u0255\3\2\2\2\u0257\u025a\3\2\2\2\u0258\u0256"+
		"\3\2\2\2\u0258\u0259\3\2\2\2\u0259\u025b\3\2\2\2\u025a\u0258\3\2\2\2\u025b"+
		"\u025c\5\u012e\u0098\2\u025c\u025d\5\u0128\u0095\2\u025d+\3\2\2\2\u025e"+
		"\u0262\5.\30\2\u025f\u0262\5\60\31\2\u0260\u0262\7]\2\2\u0261\u025e\3"+
		"\2\2\2\u0261\u025f\3\2\2\2\u0261\u0260\3\2\2\2\u0262-\3\2\2\2\u0263\u0265"+
		"\5\u008eH\2\u0264\u0263\3\2\2\2\u0264\u0265\3\2\2\2\u0265\u0267\3\2\2"+
		"\2\u0266\u0268\7Y\2\2\u0267\u0266\3\2\2\2\u0267\u0268\3\2\2\2\u0268\u0269"+
		"\3\2\2\2\u0269\u026b\5\u0124\u0093\2\u026a\u026c\5\u00c6d\2\u026b\u026a"+
		"\3\2\2\2\u026b\u026c\3\2\2\2\u026c\u026d\3\2\2\2\u026d\u026e\5H%\2\u026e"+
		"\u0272\t\2\2\2\u026f\u0271\7]\2\2\u0270\u026f\3\2\2\2\u0271\u0274\3\2"+
		"\2\2\u0272\u0270\3\2\2\2\u0272\u0273\3\2\2\2\u0273\u0275\3\2\2\2\u0274"+
		"\u0272\3\2\2\2\u0275\u0276\5J&\2\u0276\u027a\5\u012c\u0097\2\u0277\u0279"+
		"\5P)\2\u0278\u0277\3\2\2\2\u0279\u027c\3\2\2\2\u027a\u0278\3\2\2\2\u027a"+
		"\u027b\3\2\2\2\u027b\u027d\3\2\2\2\u027c\u027a\3\2\2\2\u027d\u027e\5\u012e"+
		"\u0098\2\u027e\u027f\5\u0128\u0095\2\u027f/\3\2\2\2\u0280\u0282\5\u008e"+
		"H\2\u0281\u0280\3\2\2\2\u0281\u0282\3\2\2\2\u0282\u0284\3\2\2\2\u0283"+
		"\u0285\7Y\2\2\u0284\u0283\3\2\2\2\u0284\u0285\3\2\2\2\u0285\u0286\3\2"+
		"\2\2\u0286\u0287\5\u0124\u0093\2\u0287\u0288\7\62\2\2\u0288\u0289\5\u00f8"+
		"}\2\u0289\u028b\7#\2\2\u028a\u028c\5&\24\2\u028b\u028a\3\2\2\2\u028c\u028d"+
		"\3\2\2\2\u028d\u028b\3\2\2\2\u028d\u028e\3\2\2\2\u028e\u028f\3\2\2\2\u028f"+
		"\u0290\5\u0128\u0095\2\u0290\61\3\2\2\2\u0291\u0292\5L\'\2\u0292\u0293"+
		"\5\u0130\u0099\2\u0293\u0294\5\u0124\u0093\2\u0294\u0295\5\u0132\u009a"+
		"\2\u0295\u0299\7#\2\2\u0296\u0298\7]\2\2\u0297\u0296\3\2\2\2\u0298\u029b"+
		"\3\2\2\2\u0299\u0297\3\2\2\2\u0299\u029a\3\2\2\2\u029a\u029c\3\2\2\2\u029b"+
		"\u0299\3\2\2\2\u029c\u02a0\5\u012c\u0097\2\u029d\u029f\5\64\33\2\u029e"+
		"\u029d\3\2\2\2\u029f\u02a2\3\2\2\2\u02a0\u029e\3\2\2\2\u02a0\u02a1\3\2"+
		"\2\2\u02a1\u02a3\3\2\2\2\u02a2\u02a0\3\2\2\2\u02a3\u02a4\5\u012e\u0098"+
		"\2\u02a4\u02a5\5\u0128\u0095\2\u02a5\63\3\2\2\2\u02a6\u02aa\5\66\34\2"+
		"\u02a7\u02aa\58\35\2\u02a8\u02aa\7]\2\2\u02a9\u02a6\3\2\2\2\u02a9\u02a7"+
		"\3\2\2\2\u02a9\u02a8\3\2\2\2\u02aa\65\3\2\2\2\u02ab\u02ad\5\u008eH\2\u02ac"+
		"\u02ab\3\2\2\2\u02ac\u02ad\3\2\2\2\u02ad\u02af\3\2\2\2\u02ae\u02b0\7Y"+
		"\2\2\u02af\u02ae\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0\u02b1\3\2\2\2\u02b1"+
		"\u02b3\5\u0124\u0093\2\u02b2\u02b4\5\u00c6d\2\u02b3\u02b2\3\2\2\2\u02b3"+
		"\u02b4\3\2\2\2\u02b4\u02b5\3\2\2\2\u02b5\u02b6\5H%\2\u02b6\u02ba\t\2\2"+
		"\2\u02b7\u02b9\7]\2\2\u02b8\u02b7\3\2\2\2\u02b9\u02bc\3\2\2\2\u02ba\u02b8"+
		"\3\2\2\2\u02ba\u02bb\3\2\2\2\u02bb\u02bd\3\2\2\2\u02bc\u02ba\3\2\2\2\u02bd"+
		"\u02be\5J&\2\u02be\u02c2\5\u012c\u0097\2\u02bf\u02c1\5P)\2\u02c0\u02bf"+
		"\3\2\2\2\u02c1\u02c4\3\2\2\2\u02c2\u02c0\3\2\2\2\u02c2\u02c3\3\2\2\2\u02c3"+
		"\u02c5\3\2\2\2\u02c4\u02c2\3\2\2\2\u02c5\u02c6\5\u012e\u0098\2\u02c6\u02c7"+
		"\5\u0128\u0095\2\u02c7\67\3\2\2\2\u02c8\u02ca\5\u008eH\2\u02c9\u02c8\3"+
		"\2\2\2\u02c9\u02ca\3\2\2\2\u02ca\u02cc\3\2\2\2\u02cb\u02cd\7Y\2\2\u02cc"+
		"\u02cb\3\2\2\2\u02cc\u02cd\3\2\2\2\u02cd\u02ce\3\2\2\2\u02ce\u02cf\5\u0124"+
		"\u0093\2\u02cf\u02d0\7\62\2\2\u02d0\u02d1\5\u00f8}\2\u02d1\u02d3\7#\2"+
		"\2\u02d2\u02d4\5&\24\2\u02d3\u02d2\3\2\2\2\u02d4\u02d5\3\2\2\2\u02d5\u02d3"+
		"\3\2\2\2\u02d5\u02d6\3\2\2\2\u02d6\u02d7\3\2\2\2\u02d7\u02d8\5\u0128\u0095"+
		"\2\u02d89\3\2\2\2\u02d9\u02db\5\u008eH\2\u02da\u02d9\3\2\2\2\u02da\u02db"+
		"\3\2\2\2\u02db\u02dc\3\2\2\2\u02dc\u02de\5\u0124\u0093\2\u02dd\u02df\5"+
		"\u00c6d\2\u02de\u02dd\3\2\2\2\u02de\u02df\3\2\2\2\u02df\u02e0\3\2\2\2"+
		"\u02e0\u02e1\7$\2\2\u02e1\u02e5\5\u012c\u0097\2\u02e2\u02e4\5<\37\2\u02e3"+
		"\u02e2\3\2\2\2\u02e4\u02e7\3\2\2\2\u02e5\u02e3\3\2\2\2\u02e5\u02e6\3\2"+
		"\2\2\u02e6\u02e8\3\2\2\2\u02e7\u02e5\3\2\2\2\u02e8\u02e9\5\u012e\u0098"+
		"\2\u02e9\u02ea\5\u0128\u0095\2\u02ea;\3\2\2\2\u02eb\u02f0\5 \21\2\u02ec"+
		"\u02f0\5B\"\2\u02ed\u02f0\5> \2\u02ee\u02f0\7]\2\2\u02ef\u02eb\3\2\2\2"+
		"\u02ef\u02ec\3\2\2\2\u02ef\u02ed\3\2\2\2\u02ef\u02ee\3\2\2\2\u02f0=\3"+
		"\2\2\2\u02f1\u02f3\5\u008eH\2\u02f2\u02f1\3\2\2\2\u02f2\u02f3\3\2\2\2"+
		"\u02f3\u02f4\3\2\2\2\u02f4\u02f5\5\u0124\u0093\2\u02f5\u02f6\7\62\2\2"+
		"\u02f6\u02f7\5\u00f8}\2\u02f7\u02f8\7#\2\2\u02f8\u02fd\5@!\2\u02f9\u02fa"+
		"\7!\2\2\u02fa\u02fc\5@!\2\u02fb\u02f9\3\2\2\2\u02fc\u02ff\3\2\2\2\u02fd"+
		"\u02fb\3\2\2\2\u02fd\u02fe\3\2\2\2\u02fe\u0300\3\2\2\2\u02ff\u02fd\3\2"+
		"\2\2\u0300\u0301\5\u0128\u0095\2\u0301?\3\2\2\2\u0302\u0303\5\u0124\u0093"+
		"\2\u0303A\3\2\2\2\u0304\u0306\5\u008eH\2\u0305\u0304\3\2\2\2\u0305\u0306"+
		"\3\2\2\2\u0306\u0307\3\2\2\2\u0307\u0309\5\u0124\u0093\2\u0308\u030a\5"+
		"\u00c6d\2\u0309\u0308\3\2\2\2\u0309\u030a\3\2\2\2\u030a\u030b\3\2\2\2"+
		"\u030b\u030c\5H%\2\u030c\u0310\t\2\2\2\u030d\u030f\7]\2\2\u030e\u030d"+
		"\3\2\2\2\u030f\u0312\3\2\2\2\u0310\u030e\3\2\2\2\u0310\u0311\3\2\2\2\u0311"+
		"\u0313\3\2\2\2\u0312\u0310\3\2\2\2\u0313\u0314\5J&\2\u0314\u0315\5\u0128"+
		"\u0095\2\u0315C\3\2\2\2\u0316\u0318\5\u0124\u0093\2\u0317\u0319\5\u00c6"+
		"d\2\u0318\u0317\3\2\2\2\u0318\u0319\3\2\2\2\u0319\u031a\3\2\2\2\u031a"+
		"\u031b\5H%\2\u031b\u031f\t\2\2\2\u031c\u031e\7]\2\2\u031d\u031c\3\2\2"+
		"\2\u031e\u0321\3\2\2\2\u031f\u031d\3\2\2\2\u031f\u0320\3\2\2\2\u0320\u0322"+
		"\3\2\2\2\u0321\u031f\3\2\2\2\u0322\u0323\5J&\2\u0323\u0327\5\u012c\u0097"+
		"\2\u0324\u0326\5P)\2\u0325\u0324\3\2\2\2\u0326\u0329\3\2\2\2\u0327\u0325"+
		"\3\2\2\2\u0327\u0328\3\2\2\2\u0328\u032a\3\2\2\2\u0329\u0327\3\2\2\2\u032a"+
		"\u032b\5\u012e\u0098\2\u032b\u032c\5\u0128\u0095\2\u032cE\3\2\2\2\u032d"+
		"\u032e\7$\2\2\u032e\u032f\5\u008aF\2\u032f\u0330\5\u0128\u0095\2\u0330"+
		"G\3\2\2\2\u0331\u0333\5\u0130\u0099\2\u0332\u0334\5N(\2\u0333\u0332\3"+
		"\2\2\2\u0333\u0334\3\2\2\2\u0334\u033a\3\2\2\2\u0335\u0336\5\u012a\u0096"+
		"\2\u0336\u0337\5N(\2\u0337\u0339\3\2\2\2\u0338\u0335\3\2\2\2\u0339\u033c"+
		"\3\2\2\2\u033a\u0338\3\2\2\2\u033a\u033b\3\2\2\2\u033b\u033d\3\2\2\2\u033c"+
		"\u033a\3\2\2\2\u033d\u033e\5\u0132\u009a\2\u033eI\3\2\2\2\u033f\u0341"+
		"\5\u0130\u0099\2\u0340\u0342\5N(\2\u0341\u0340\3\2\2\2\u0341\u0342\3\2"+
		"\2\2\u0342\u0348\3\2\2\2\u0343\u0344\5\u012a\u0096\2\u0344\u0345\5N(\2"+
		"\u0345\u0347\3\2\2\2\u0346\u0343\3\2\2\2\u0347\u034a\3\2\2\2\u0348\u0346"+
		"\3\2\2\2\u0348\u0349\3\2\2\2\u0349\u034b\3\2\2\2\u034a\u0348\3\2\2\2\u034b"+
		"\u034c\5\u0132\u009a\2\u034cK\3\2\2\2\u034d\u034e\5\u0130\u0099\2\u034e"+
		"\u034f\5\u0124\u0093\2\u034f\u0350\7\62\2\2\u0350\u0351\5\u00f8}\2\u0351"+
		"\u0352\5\u0132\u009a\2\u0352M\3\2\2\2\u0353\u0355\5\u008eH\2\u0354\u0353"+
		"\3\2\2\2\u0354\u0355\3\2\2\2\u0355\u0356\3\2\2\2\u0356\u0357\5\u0124\u0093"+
		"\2\u0357\u0358\7\62\2\2\u0358\u035b\5\u00f8}\2\u0359\u035a\7\'\2\2\u035a"+
		"\u035c\5\u0086D\2\u035b\u0359\3\2\2\2\u035b\u035c\3\2\2\2\u035cO\3\2\2"+
		"\2\u035d\u0371\5F$\2\u035e\u0371\5R*\2\u035f\u0371\5Z.\2\u0360\u0371\5"+
		"b\62\2\u0361\u0371\5d\63\2\u0362\u0371\5f\64\2\u0363\u0371\5h\65\2\u0364"+
		"\u0371\5j\66\2\u0365\u0371\5l\67\2\u0366\u0371\5p9\2\u0367\u0371\5n8\2"+
		"\u0368\u0371\5v<\2\u0369\u0371\5D#\2\u036a\u0371\5z>\2\u036b\u0371\5|"+
		"?\2\u036c\u0371\5~@\2\u036d\u0371\5\u0080A\2\u036e\u0371\5\u0082B\2\u036f"+
		"\u0371\7]\2\2\u0370\u035d\3\2\2\2\u0370\u035e\3\2\2\2\u0370\u035f\3\2"+
		"\2\2\u0370\u0360\3\2\2\2\u0370\u0361\3\2\2\2\u0370\u0362\3\2\2\2\u0370"+
		"\u0363\3\2\2\2\u0370\u0364\3\2\2\2\u0370\u0365\3\2\2\2\u0370\u0366\3\2"+
		"\2\2\u0370\u0367\3\2\2\2\u0370\u0368\3\2\2\2\u0370\u0369\3\2\2\2\u0370"+
		"\u036a\3\2\2\2\u0370\u036b\3\2\2\2\u0370\u036c\3\2\2\2\u0370\u036d\3\2"+
		"\2\2\u0370\u036e\3\2\2\2\u0370\u036f\3\2\2\2\u0371Q\3\2\2\2\u0372\u0373"+
		"\5\u0086D\2\u0373\u0375\7\63\2\2\u0374\u0376\5X-\2\u0375\u0374\3\2\2\2"+
		"\u0376\u0377\3\2\2\2\u0377\u0375\3\2\2\2\u0377\u0378\3\2\2\2\u0378\u0379"+
		"\3\2\2\2\u0379\u037a\5\u0128\u0095\2\u037aS\3\2\2\2\u037b\u037c\7Y\2\2"+
		"\u037c\u0380\5\u012c\u0097\2\u037d\u037f\5P)\2\u037e\u037d\3\2\2\2\u037f"+
		"\u0382\3\2\2\2\u0380\u037e\3\2\2\2\u0380\u0381\3\2\2\2\u0381\u0383\3\2"+
		"\2\2\u0382\u0380\3\2\2\2\u0383\u0384\5\u012e\u0098\2\u0384U\3\2\2\2\u0385"+
		"\u038c\5\u0086D\2\u0386\u0388\5\u0124\u0093\2\u0387\u0386\3\2\2\2\u0387"+
		"\u0388\3\2\2\2\u0388\u0389\3\2\2\2\u0389\u038a\7\62\2\2\u038a\u038c\5"+
		"\u00f8}\2\u038b\u0385\3\2\2\2\u038b\u0387\3\2\2\2\u038c\u038d\3\2\2\2"+
		"\u038d\u0391\5\u012c\u0097\2\u038e\u0390\5P)\2\u038f\u038e\3\2\2\2\u0390"+
		"\u0393\3\2\2\2\u0391\u038f\3\2\2\2\u0391\u0392\3\2\2\2\u0392\u0394\3\2"+
		"\2\2\u0393\u0391\3\2\2\2\u0394\u0395\5\u012e\u0098\2\u0395W\3\2\2\2\u0396"+
		"\u0399\5T+\2\u0397\u0399\5V,\2\u0398\u0396\3\2\2\2\u0398\u0397\3\2\2\2"+
		"\u0399Y\3\2\2\2\u039a\u039e\5^\60\2\u039b\u039d\5`\61\2\u039c\u039b\3"+
		"\2\2\2\u039d\u03a0\3\2\2\2\u039e\u039c\3\2\2\2\u039e\u039f\3\2\2\2\u039f"+
		"\u03a1\3\2\2\2\u03a0\u039e\3\2\2\2\u03a1\u03a2\5\\/\2\u03a2\u03a3\5\u0128"+
		"\u0095\2\u03a3\u03ae\3\2\2\2\u03a4\u03a8\5^\60\2\u03a5\u03a7\5`\61\2\u03a6"+
		"\u03a5\3\2\2\2\u03a7\u03aa\3\2\2\2\u03a8\u03a6\3\2\2\2\u03a8\u03a9\3\2"+
		"\2\2\u03a9\u03ab\3\2\2\2\u03aa\u03a8\3\2\2\2\u03ab\u03ac\5\u0128\u0095"+
		"\2\u03ac\u03ae\3\2\2\2\u03ad\u039a\3\2\2\2\u03ad\u03a4\3\2\2\2\u03ae["+
		"\3\2\2\2\u03af\u03b0\7Y\2\2\u03b0\u03b4\5\u012c\u0097\2\u03b1\u03b3\5"+
		"P)\2\u03b2\u03b1\3\2\2\2\u03b3\u03b6\3\2\2\2\u03b4\u03b2\3\2\2\2\u03b4"+
		"\u03b5\3\2\2\2\u03b5\u03b7\3\2\2\2\u03b6\u03b4\3\2\2\2\u03b7\u03b8\5\u012e"+
		"\u0098\2\u03b8]\3\2\2\2\u03b9\u03ba\7\63\2\2\u03ba\u03bb\5\u0086D\2\u03bb"+
		"\u03bf\5\u012c\u0097\2\u03bc\u03be\5P)\2\u03bd\u03bc\3\2\2\2\u03be\u03c1"+
		"\3\2\2\2\u03bf\u03bd\3\2\2\2\u03bf\u03c0\3\2\2\2\u03c0\u03c2\3\2\2\2\u03c1"+
		"\u03bf\3\2\2\2\u03c2\u03c3\5\u012e\u0098\2\u03c3_\3\2\2\2\u03c4\u03c5"+
		"\5\u0086D\2\u03c5\u03c9\5\u012c\u0097\2\u03c6\u03c8\5P)\2\u03c7\u03c6"+
		"\3\2\2\2\u03c8\u03cb\3\2\2\2\u03c9\u03c7\3\2\2\2\u03c9\u03ca\3\2\2\2\u03ca"+
		"\u03cc\3\2\2\2\u03cb\u03c9\3\2\2\2\u03cc\u03cd\5\u012e\u0098\2\u03cda"+
		"\3\2\2\2\u03ce\u03cf\5x=\2\u03cf\u03d0\7\64\2\2\u03d0\u03d1\5\u0124\u0093"+
		"\2\u03d1\u03d5\5\u012c\u0097\2\u03d2\u03d4\5P)\2\u03d3\u03d2\3\2\2\2\u03d4"+
		"\u03d7\3\2\2\2\u03d5\u03d3\3\2\2\2\u03d5\u03d6\3\2\2\2\u03d6\u03d8\3\2"+
		"\2\2\u03d7\u03d5\3\2\2\2\u03d8\u03d9\5\u012e\u0098\2\u03d9\u03da\5\u0128"+
		"\u0095\2\u03dac\3\2\2\2\u03db\u03dc\5\u0086D\2\u03dc\u03e1\7\64\2\2\u03dd"+
		"\u03de\7/\2\2\u03de\u03df\5\u0124\u0093\2\u03df\u03e0\7\60\2\2\u03e0\u03e2"+
		"\3\2\2\2\u03e1\u03dd\3\2\2\2\u03e1\u03e2\3\2\2\2\u03e2\u03e3\3\2\2\2\u03e3"+
		"\u03e4\5\u0124\u0093\2\u03e4\u03e8\5\u012c\u0097\2\u03e5\u03e7\5P)\2\u03e6"+
		"\u03e5\3\2\2\2\u03e7\u03ea\3\2\2\2\u03e8\u03e6\3\2\2\2\u03e8\u03e9\3\2"+
		"\2\2\u03e9\u03eb\3\2\2\2\u03ea\u03e8\3\2\2\2\u03eb\u03ec\5\u012e\u0098"+
		"\2\u03ec\u03ed\5\u0128\u0095\2\u03ede\3\2\2\2\u03ee\u03ef\7\64\2\2\u03ef"+
		"\u03f0\5\u0086D\2\u03f0\u03f4\5\u012c\u0097\2\u03f1\u03f3\5P)\2\u03f2"+
		"\u03f1\3\2\2\2\u03f3\u03f6\3\2\2\2\u03f4\u03f2\3\2\2\2\u03f4\u03f5\3\2"+
		"\2\2\u03f5\u03f7\3\2\2\2\u03f6\u03f4\3\2\2\2\u03f7\u03f8\5\u012e\u0098"+
		"\2\u03f8\u03f9\5\u0128\u0095\2\u03f9g\3\2\2\2\u03fa\u03fb\7\64\2\2\u03fb"+
		"\u03ff\5\u012c\u0097\2\u03fc\u03fe\5P)\2\u03fd\u03fc\3\2\2\2\u03fe\u0401"+
		"\3\2\2\2\u03ff\u03fd\3\2\2\2\u03ff\u0400\3\2\2\2\u0400\u0402\3\2\2\2\u0401"+
		"\u03ff\3\2\2\2\u0402\u0403\5\u012e\u0098\2\u0403\u0404\5\u0128\u0095\2"+
		"\u0404i\3\2\2\2\u0405\u0406\7$\2\2\u0406\u0407\7\64\2\2\u0407\u0408\5"+
		"\u0128\u0095\2\u0408k\3\2\2\2\u0409\u040a\7#\2\2\u040a\u040b\7\64\2\2"+
		"\u040b\u040c\5\u0128\u0095\2\u040cm\3\2\2\2\u040d\u040e\7\65\2\2\u040e"+
		"\u0412\5\u012c\u0097\2\u040f\u0411\5P)\2\u0410\u040f\3\2\2\2\u0411\u0414"+
		"\3\2\2\2\u0412\u0410\3\2\2\2\u0412\u0413\3\2\2\2\u0413\u0415\3\2\2\2\u0414"+
		"\u0412\3\2\2\2\u0415\u0419\5\u012e\u0098\2\u0416\u0418\5r:\2\u0417\u0416"+
		"\3\2\2\2\u0418\u041b\3\2\2\2\u0419\u0417\3\2\2\2\u0419\u041a\3\2\2\2\u041a"+
		"\u041c\3\2\2\2\u041b\u0419\3\2\2\2\u041c\u041d\5t;\2\u041d\u041e\5\u0128"+
		"\u0095\2\u041e\u0430\3\2\2\2\u041f\u0420\7\65\2\2\u0420\u0424\5\u012c"+
		"\u0097\2\u0421\u0423\5P)\2\u0422\u0421\3\2\2\2\u0423\u0426\3\2\2\2\u0424"+
		"\u0422\3\2\2\2\u0424\u0425\3\2\2\2\u0425\u0427\3\2\2\2\u0426\u0424\3\2"+
		"\2\2\u0427\u0429\5\u012e\u0098\2\u0428\u042a\5r:\2\u0429\u0428\3\2\2\2"+
		"\u042a\u042b\3\2\2\2\u042b\u0429\3\2\2\2\u042b\u042c\3\2\2\2\u042c\u042d"+
		"\3\2\2\2\u042d\u042e\5\u0128\u0095\2\u042e\u0430\3\2\2\2\u042f\u040d\3"+
		"\2\2\2\u042f\u041f\3\2\2\2\u0430o\3\2\2\2\u0431\u0432\5\u0086D\2\u0432"+
		"\u0433\7\65\2\2\u0433\u0436\5\u0086D\2\u0434\u0435\7\62\2\2\u0435\u0437"+
		"\5\u00f8}\2\u0436\u0434\3\2\2\2\u0436\u0437\3\2\2\2\u0437\u0438\3\2\2"+
		"\2\u0438\u0439\5\u0128\u0095\2\u0439q\3\2\2\2\u043a\u0440\5\u0124\u0093"+
		"\2\u043b\u043c\5\u0124\u0093\2\u043c\u043d\7\62\2\2\u043d\u043e\5\u00f8"+
		"}\2\u043e\u0440\3\2\2\2\u043f\u043a\3\2\2\2\u043f\u043b\3\2\2\2\u0440"+
		"\u0441\3\2\2\2\u0441\u0445\5\u012c\u0097\2\u0442\u0444\5P)\2\u0443\u0442"+
		"\3\2\2\2\u0444\u0447\3\2\2\2\u0445\u0443\3\2\2\2\u0445\u0446\3\2\2\2\u0446"+
		"\u0448\3\2\2\2\u0447\u0445\3\2\2\2\u0448\u0449\5\u012e\u0098\2\u0449s"+
		"\3\2\2\2\u044a\u044b\7Y\2\2\u044b\u044f\5\u012c\u0097\2\u044c\u044e\5"+
		"P)\2\u044d\u044c\3\2\2\2\u044e\u0451\3\2\2\2\u044f\u044d\3\2\2\2\u044f"+
		"\u0450\3\2\2\2\u0450\u0452\3\2\2\2\u0451\u044f\3\2\2\2\u0452\u0453\5\u012e"+
		"\u0098\2\u0453u\3\2\2\2\u0454\u0455\7\65\2\2\u0455\u0457\5\u0130\u0099"+
		"\2\u0456\u0458\5\u0086D\2\u0457\u0456\3\2\2\2\u0457\u0458\3\2\2\2\u0458"+
		"\u0459\3\2\2\2\u0459\u045a\5\u0132\u009a\2\u045a\u045b\5\u0128\u0095\2"+
		"\u045bw\3\2\2\2\u045c\u045d\7/\2\2\u045d\u045e\5\u0086D\2\u045e\u045f"+
		"\t\3\2\2\u045f\u0460\5\u0086D\2\u0460\u0461\5\u012a\u0096\2\u0461\u0462"+
		"\5\u0086D\2\u0462\u0463\7\60\2\2\u0463\u046b\3\2\2\2\u0464\u0465\7/\2"+
		"\2\u0465\u0466\5\u0086D\2\u0466\u0467\t\3\2\2\u0467\u0468\5\u0086D\2\u0468"+
		"\u0469\7\60\2\2\u0469\u046b\3\2\2\2\u046a\u045c\3\2\2\2\u046a\u0464\3"+
		"\2\2\2\u046by\3\2\2\2\u046c\u0472\5\u0086D\2\u046d\u0473\7\31\2\2\u046e"+
		"\u046f\7\62\2\2\u046f\u0470\5\u00f8}\2\u0470\u0471\7\'\2\2\u0471\u0473"+
		"\3\2\2\2\u0472\u046d\3\2\2\2\u0472\u046e\3\2\2\2\u0473\u0474\3\2\2\2\u0474"+
		"\u0475\5\u0086D\2\u0475\u0476\5\u0128\u0095\2\u0476{\3\2\2\2\u0477\u0478"+
		"\5\u0086D\2\u0478\u0479\7\62\2\2\u0479\u047a\5\u00f8}\2\u047a\u047b\5"+
		"\u0128\u0095\2\u047b}\3\2\2\2\u047c\u047d\5\u0086D\2\u047d\u047e\7/\2"+
		"\2\u047e\u047f\7$\2\2\u047f\u0480\7\60\2\2\u0480\u0481\5\u0118\u008d\2"+
		"\u0481\u0482\5\u0086D\2\u0482\u0483\5\u0128\u0095\2\u0483\177\3\2\2\2"+
		"\u0484\u0485\5\u0086D\2\u0485\u0486\5\u0118\u008d\2\u0486\u0487\5\u0086"+
		"D\2\u0487\u0488\5\u0128\u0095\2\u0488\u0081\3\2\2\2\u0489\u048a\5\u0086"+
		"D\2\u048a\u048b\5\u0128\u0095\2\u048b\u0083\3\2\2\2\u048c\u048e\5\u0124"+
		"\u0093\2\u048d\u048f\5\u00caf\2\u048e\u048d\3\2\2\2\u048e\u048f\3\2\2"+
		"\2\u048f\u0497\3\2\2\2\u0490\u0497\7Y\2\2\u0491\u0492\5\u0130\u0099\2"+
		"\u0492\u0493\5\u0086D\2\u0493\u0494\5\u0132\u009a\2\u0494\u0497\3\2\2"+
		"\2\u0495\u0497\5\u00ecw\2\u0496\u048c\3\2\2\2\u0496\u0490\3\2\2\2\u0496"+
		"\u0491\3\2\2\2\u0496\u0495\3\2\2\2\u0497\u0085\3\2\2\2\u0498\u0499\bD"+
		"\1\2\u0499\u04ad\5\u00dep\2\u049a\u04ad\5\u0098M\2\u049b\u04ad\5\u0084"+
		"C\2\u049c\u04ad\5\u009aN\2\u049d\u04ad\5\u009cO\2\u049e\u04ad\5\u00a0"+
		"Q\2\u049f\u04ad\5\u009eP\2\u04a0\u04ad\5\u00a2R\2\u04a1\u04ad\5\u00b0"+
		"Y\2\u04a2\u04ad\5\u00b2Z\2\u04a3\u04ad\5\u00b4[\2\u04a4\u04ad\5\u00b6"+
		"\\\2\u04a5\u04ad\5\u00ccg\2\u04a6\u04ad\5\u00d6l\2\u04a7\u04ad\5\u00d0"+
		"i\2\u04a8\u04ad\5\u00d8m\2\u04a9\u04ad\5\u00dan\2\u04aa\u04ad\5\u00dc"+
		"o\2\u04ab\u04ad\5\u00e8u\2\u04ac\u0498\3\2\2\2\u04ac\u049a\3\2\2\2\u04ac"+
		"\u049b\3\2\2\2\u04ac\u049c\3\2\2\2\u04ac\u049d\3\2\2\2\u04ac\u049e\3\2"+
		"\2\2\u04ac\u049f\3\2\2\2\u04ac\u04a0\3\2\2\2\u04ac\u04a1\3\2\2\2\u04ac"+
		"\u04a2\3\2\2\2\u04ac\u04a3\3\2\2\2\u04ac\u04a4\3\2\2\2\u04ac\u04a5\3\2"+
		"\2\2\u04ac\u04a6\3\2\2\2\u04ac\u04a7\3\2\2\2\u04ac\u04a8\3\2\2\2\u04ac"+
		"\u04a9\3\2\2\2\u04ac\u04aa\3\2\2\2\u04ac\u04ab\3\2\2\2\u04ad\u04d0\3\2"+
		"\2\2\u04ae\u04af\f\7\2\2\u04af\u04b0\5\u0116\u008c\2\u04b0\u04b1\5\u0086"+
		"D\b\u04b1\u04cf\3\2\2\2\u04b2\u04b3\f\6\2\2\u04b3\u04b4\5\u011a\u008e"+
		"\2\u04b4\u04b5\5\u0086D\7\u04b5\u04cf\3\2\2\2\u04b6\u04b7\f\5\2\2\u04b7"+
		"\u04b8\5\u011c\u008f\2\u04b8\u04b9\5\u0086D\6\u04b9\u04cf\3\2\2\2\u04ba"+
		"\u04bb\f\4\2\2\u04bb\u04bc\5\u011e\u0090\2\u04bc\u04bd\5\u0086D\5\u04bd"+
		"\u04cf\3\2\2\2\u04be\u04bf\f\r\2\2\u04bf\u04cf\7\65\2\2\u04c0\u04c1\f"+
		"\f\2\2\u04c1\u04cf\7\63\2\2\u04c2\u04c3\f\13\2\2\u04c3\u04cf\7&\2\2\u04c4"+
		"\u04c5\f\n\2\2\u04c5\u04cf\5\u00a4S\2\u04c6\u04c7\f\t\2\2\u04c7\u04c8"+
		"\5\u0120\u0091\2\u04c8\u04c9\5\u0088E\2\u04c9\u04cf\3\2\2\2\u04ca\u04cb"+
		"\f\b\2\2\u04cb\u04cc\5\u0114\u008b\2\u04cc\u04cd\5\u00f8}\2\u04cd\u04cf"+
		"\3\2\2\2\u04ce\u04ae\3\2\2\2\u04ce\u04b2\3\2\2\2\u04ce\u04b6\3\2\2\2\u04ce"+
		"\u04ba\3\2\2\2\u04ce\u04be\3\2\2\2\u04ce\u04c0\3\2\2\2\u04ce\u04c2\3\2"+
		"\2\2\u04ce\u04c4\3\2\2\2\u04ce\u04c6\3\2\2\2\u04ce\u04ca\3\2\2\2\u04cf"+
		"\u04d2\3\2\2\2\u04d0\u04ce\3\2\2\2\u04d0\u04d1\3\2\2\2\u04d1\u0087\3\2"+
		"\2\2\u04d2\u04d0\3\2\2\2\u04d3\u04d4\bE\1\2\u04d4\u04d9\5\u009cO\2\u04d5"+
		"\u04d9\5\u0098M\2\u04d6\u04d9\5\u009eP\2\u04d7\u04d9\5\u0124\u0093\2\u04d8"+
		"\u04d3\3\2\2\2\u04d8\u04d5\3\2\2\2\u04d8\u04d6\3\2\2\2\u04d8\u04d7\3\2"+
		"\2\2\u04d9\u04e3\3\2\2\2\u04da\u04db\f\3\2\2\u04db\u04dd\5\u0120\u0091"+
		"\2\u04dc\u04de\7]\2\2\u04dd\u04dc\3\2\2\2\u04dd\u04de\3\2\2\2\u04de\u04df"+
		"\3\2\2\2\u04df\u04e0\5\u0088E\4\u04e0\u04e2\3\2\2\2\u04e1\u04da\3\2\2"+
		"\2\u04e2\u04e5\3\2\2\2\u04e3\u04e1\3\2\2\2\u04e3\u04e4\3\2\2\2\u04e4\u0089"+
		"\3\2\2\2\u04e5\u04e3\3\2\2\2\u04e6\u04f0\5\u0130\u0099\2\u04e7\u04ed\5"+
		"\u0086D\2\u04e8\u04e9\5\u012a\u0096\2\u04e9\u04ea\5\u0086D\2\u04ea\u04ec"+
		"\3\2\2\2\u04eb\u04e8\3\2\2\2\u04ec\u04ef\3\2\2\2\u04ed\u04eb\3\2\2\2\u04ed"+
		"\u04ee\3\2\2\2\u04ee\u04f1\3\2\2\2\u04ef\u04ed\3\2\2\2\u04f0\u04e7\3\2"+
		"\2\2\u04f0\u04f1\3\2\2\2\u04f1\u04f2\3\2\2\2\u04f2\u04f3\5\u0132\u009a"+
		"\2\u04f3\u008b\3\2\2\2\u04f4\u04fa\5\u0086D\2\u04f5\u04f6\5\u012a\u0096"+
		"\2\u04f6\u04f7\5\u0086D\2\u04f7\u04f9\3\2\2\2\u04f8\u04f5\3\2\2\2\u04f9"+
		"\u04fc\3\2\2\2\u04fa\u04f8\3\2\2\2\u04fa\u04fb\3\2\2\2\u04fb\u008d\3\2"+
		"\2\2\u04fc\u04fa\3\2\2\2\u04fd\u04ff\5\u0090I\2\u04fe\u0500\7]\2\2\u04ff"+
		"\u04fe\3\2\2\2\u04ff\u0500\3\2\2\2\u0500\u008f\3\2\2\2\u0501\u0505\7/"+
		"\2\2\u0502\u0503\5\u0124\u0093\2\u0503\u0504\7#\2\2\u0504\u0506\3\2\2"+
		"\2\u0505\u0502\3\2\2\2\u0505\u0506\3\2\2\2\u0506\u0507\3\2\2\2\u0507\u0508"+
		"\5\u0092J\2\u0508\u0509\7\60\2\2\u0509\u0091\3\2\2\2\u050a\u0510\5\u0094"+
		"K\2\u050b\u050c\5\u012a\u0096\2\u050c\u050d\5\u0094K\2\u050d\u050f\3\2"+
		"\2\2\u050e\u050b\3\2\2\2\u050f\u0512\3\2\2\2\u0510\u050e\3\2\2\2\u0510"+
		"\u0511\3\2\2\2\u0511\u0093\3\2\2\2\u0512\u0510\3\2\2\2\u0513\u0520\5\u0124"+
		"\u0093\2\u0514\u0515\5\u0130\u0099\2\u0515\u051b\5\u0096L\2\u0516\u0517"+
		"\5\u012a\u0096\2\u0517\u0518\5\u0096L\2\u0518\u051a\3\2\2\2\u0519\u0516"+
		"\3\2\2\2\u051a\u051d\3\2\2\2\u051b\u0519\3\2\2\2\u051b\u051c\3\2\2\2\u051c"+
		"\u051e\3\2\2\2\u051d\u051b\3\2\2\2\u051e\u051f\5\u0132\u009a\2\u051f\u0521"+
		"\3\2\2\2\u0520\u0514\3\2\2\2\u0520\u0521\3\2\2\2\u0521\u0095\3\2\2\2\u0522"+
		"\u0523\5\u0124\u0093\2\u0523\u0524\7\'\2\2\u0524\u0526\3\2\2\2\u0525\u0522"+
		"\3\2\2\2\u0525\u0526\3\2\2\2\u0526\u0527\3\2\2\2\u0527\u0528\5\u0086D"+
		"\2\u0528\u0097\3\2\2\2\u0529\u052b\5\u0124\u0093\2\u052a\u052c\5\u00ca"+
		"f\2\u052b\u052a\3\2\2\2\u052b\u052c\3\2\2\2\u052c\u052f\3\2\2\2\u052d"+
		"\u0530\5\u008aF\2\u052e\u0530\5\u00ccg\2\u052f\u052d\3\2\2\2\u052f\u052e"+
		"\3\2\2\2\u0530\u0099\3\2\2\2\u0531\u0533\5\u0124\u0093\2\u0532\u0534\7"+
		"\63\2\2\u0533\u0532\3\2\2\2\u0533\u0534\3\2\2\2\u0534\u0535\3\2\2\2\u0535"+
		"\u0536\7/\2\2\u0536\u0537\7$\2\2\u0537\u0538\7\60\2\2\u0538\u009b\3\2"+
		"\2\2\u0539\u053b\5\u0124\u0093\2\u053a\u053c\7\63\2\2\u053b\u053a\3\2"+
		"\2\2\u053b\u053c\3\2\2\2\u053c\u053d\3\2\2\2\u053d\u0540\7/\2\2\u053e"+
		"\u0541\5\u00ba^\2\u053f\u0541\5\u0086D\2\u0540\u053e\3\2\2\2\u0540\u053f"+
		"\3\2\2\2\u0541\u0542\3\2\2\2\u0542\u0543\7\60\2\2\u0543\u009d\3\2\2\2"+
		"\u0544\u0545\5\u00f8}\2\u0545\u054a\5\u012c\u0097\2\u0546\u054b\5\u00a6"+
		"T\2\u0547\u054b\5\u00aaV\2\u0548\u054b\5\u00acW\2\u0549\u054b\5\u00ae"+
		"X\2\u054a\u0546\3\2\2\2\u054a\u0547\3\2\2\2\u054a\u0548\3\2\2\2\u054a"+
		"\u0549\3\2\2\2\u054a\u054b\3\2\2\2\u054b\u054c\3\2\2\2\u054c\u054d\5\u012e"+
		"\u0098\2\u054d\u009f\3\2\2\2\u054e\u054f\7(\2\2\u054f\u0550\5\u00f8}\2"+
		"\u0550\u0551\7)\2\2\u0551\u0553\5\u0130\u0099\2\u0552\u0554\7]\2\2\u0553"+
		"\u0552\3\2\2\2\u0553\u0554\3\2\2\2\u0554\u0556\3\2\2\2\u0555\u0557\5\u008c"+
		"G\2\u0556\u0555\3\2\2\2\u0556\u0557\3\2\2\2\u0557\u0559\3\2\2\2\u0558"+
		"\u055a\7]\2\2\u0559\u0558\3\2\2\2\u0559\u055a\3\2\2\2\u055a\u055b\3\2"+
		"\2\2\u055b\u055c\5\u0132\u009a\2\u055c\u00a1\3\2\2\2\u055d\u055e\7\63"+
		"\2\2\u055e\u0562\5\u0130\u0099\2\u055f\u0563\5\u0086D\2\u0560\u0561\7"+
		"\62\2\2\u0561\u0563\5\u00f8}\2\u0562\u055f\3\2\2\2\u0562\u0560\3\2\2\2"+
		"\u0563\u0564\3\2\2\2\u0564\u0565\5\u0132\u009a\2\u0565\u00a3\3\2\2\2\u0566"+
		"\u0567\7\62\2\2\u0567\u0568\5\u0130\u0099\2\u0568\u0569\5\u00f8}\2\u0569"+
		"\u056a\5\u0132\u009a\2\u056a\u00a5\3\2\2\2\u056b\u0571\5\u00a8U\2\u056c"+
		"\u056d\5\u012a\u0096\2\u056d\u056e\5\u00a8U\2\u056e\u0570\3\2\2\2\u056f"+
		"\u056c\3\2\2\2\u0570\u0573\3\2\2\2\u0571\u056f\3\2\2\2\u0571\u0572\3\2"+
		"\2\2\u0572\u00a7\3\2\2\2\u0573\u0571\3\2\2\2\u0574\u0575\5\u00c4c\2\u0575"+
		"\u0576\7\'\2\2\u0576\u0577\5\u0086D\2\u0577\u00a9\3\2\2\2\u0578\u057e"+
		"\5\u0086D\2\u0579\u057a\5\u012a\u0096\2\u057a\u057b\5\u0086D\2\u057b\u057d"+
		"\3\2\2\2\u057c\u0579\3\2\2\2\u057d\u0580\3\2\2\2\u057e\u057c\3\2\2\2\u057e"+
		"\u057f\3\2\2\2\u057f\u00ab\3\2\2\2\u0580\u057e\3\2\2\2\u0581\u0582\7/"+
		"\2\2\u0582\u0583\5\u0086D\2\u0583\u058b\7\60\2\2\u0584\u0585\5\u012a\u0096"+
		"\2\u0585\u0586\7/\2\2\u0586\u0587\5\u0086D\2\u0587\u0588\7\60\2\2\u0588"+
		"\u058a\3\2\2\2\u0589\u0584\3\2\2\2\u058a\u058d\3\2\2\2\u058b\u0589\3\2"+
		"\2\2\u058b\u058c\3\2\2\2\u058c\u00ad\3\2\2\2\u058d\u058b\3\2\2\2\u058e"+
		"\u0594\5\u00b8]\2\u058f\u0590\5\u012a\u0096\2\u0590\u0591\5\u00b8]\2\u0591"+
		"\u0593\3\2\2\2\u0592\u058f\3\2\2\2\u0593\u0596\3\2\2\2\u0594\u0592\3\2"+
		"\2\2\u0594\u0595\3\2\2\2\u0595\u00af\3\2\2\2\u0596\u0594\3\2\2\2\u0597"+
		"\u0598\7&\2\2\u0598\u0599\5\u0086D\2\u0599\u00b1\3\2\2\2\u059a\u059b\5"+
		"\u012c\u0097\2\u059b\u05a1\5\u0086D\2\u059c\u059d\5\u012a\u0096\2\u059d"+
		"\u059e\5\u0086D\2\u059e\u05a0\3\2\2\2\u059f\u059c\3\2\2\2\u05a0\u05a3"+
		"\3\2\2\2\u05a1\u059f\3\2\2\2\u05a1\u05a2\3\2\2\2\u05a2\u05a4\3\2\2\2\u05a3"+
		"\u05a1\3\2\2\2\u05a4\u05a5\5\u012e\u0098\2\u05a5\u00b3\3\2\2\2\u05a6\u05a7"+
		"\5\u012c\u0097\2\u05a7\u05a8\7/\2\2\u05a8\u05a9\5\u0086D\2\u05a9\u05b1"+
		"\7\60\2\2\u05aa\u05ab\5\u012a\u0096\2\u05ab\u05ac\7/\2\2\u05ac\u05ad\5"+
		"\u0086D\2\u05ad\u05ae\7\60\2\2\u05ae\u05b0\3\2\2\2\u05af\u05aa\3\2\2\2"+
		"\u05b0\u05b3\3\2\2\2\u05b1\u05af\3\2\2\2\u05b1\u05b2\3\2\2\2\u05b2\u05b4"+
		"\3\2\2\2\u05b3\u05b1\3\2\2\2\u05b4\u05b5\5\u012e\u0098\2\u05b5\u00b5\3"+
		"\2\2\2\u05b6\u05b7\5\u012c\u0097\2\u05b7\u05bd\5\u00b8]\2\u05b8\u05b9"+
		"\5\u012a\u0096\2\u05b9\u05ba\5\u00b8]\2\u05ba\u05bc\3\2\2\2\u05bb\u05b8"+
		"\3\2\2\2\u05bc\u05bf\3\2\2\2\u05bd\u05bb\3\2\2\2\u05bd\u05be\3\2\2\2\u05be"+
		"\u05c0\3\2\2\2\u05bf\u05bd\3\2\2\2\u05c0\u05c1\5\u012e\u0098\2\u05c1\u00b7"+
		"\3\2\2\2\u05c2\u05c3\7/\2\2\u05c3\u05c4\5\u0086D\2\u05c4\u05c5\7\60\2"+
		"\2\u05c5\u05c6\5\u0086D\2\u05c6\u00b9\3\2\2\2\u05c7\u05cb\5\u00bc_\2\u05c8"+
		"\u05cb\5\u00be`\2\u05c9\u05cb\5\u00c0a\2\u05ca\u05c7\3\2\2\2\u05ca\u05c8"+
		"\3\2\2\2\u05ca\u05c9\3\2\2\2\u05cb\u00bb\3\2\2\2\u05cc\u05cd\5\u0086D"+
		"\2\u05cd\u05ce\t\3\2\2\u05ce\u05cf\5\u0086D\2\u05cf\u00bd\3\2\2\2\u05d0"+
		"\u05d1\5\u0086D\2\u05d1\u05d2\t\3\2\2\u05d2\u00bf\3\2\2\2\u05d3\u05d4"+
		"\t\3\2\2\u05d4\u05d5\5\u0086D\2\u05d5\u00c1\3\2\2\2\u05d6\u05d7\5\u0124"+
		"\u0093\2\u05d7\u05d9\5\u0120\u0091\2\u05d8\u05da\7]\2\2\u05d9\u05d8\3"+
		"\2\2\2\u05d9\u05da\3\2\2\2\u05da\u05dc\3\2\2\2\u05db\u05d6\3\2\2\2\u05dc"+
		"\u05df\3\2\2\2\u05dd\u05db\3\2\2\2\u05dd\u05de\3\2\2\2\u05de\u05e0\3\2"+
		"\2\2\u05df\u05dd\3\2\2\2\u05e0\u05e1\5\u0124\u0093\2\u05e1\u00c3\3\2\2"+
		"\2\u05e2\u05eb\5\u0124\u0093\2\u05e3\u05e5\5\u0120\u0091\2\u05e4\u05e6"+
		"\7]\2\2\u05e5\u05e4\3\2\2\2\u05e5\u05e6\3\2\2\2\u05e6\u05e7\3\2\2\2\u05e7"+
		"\u05e8\5\u0124\u0093\2\u05e8\u05ea\3\2\2\2\u05e9\u05e3\3\2\2\2\u05ea\u05ed"+
		"\3\2\2\2\u05eb\u05e9\3\2\2\2\u05eb\u05ec\3\2\2\2\u05ec\u00c5\3\2\2\2\u05ed"+
		"\u05eb\3\2\2\2\u05ee\u05ef\7(\2\2\u05ef\u05f5\5\u00c8e\2\u05f0\u05f1\5"+
		"\u012a\u0096\2\u05f1\u05f2\5\u00c8e\2\u05f2\u05f4\3\2\2\2\u05f3\u05f0"+
		"\3\2\2\2\u05f4\u05f7\3\2\2\2\u05f5\u05f3\3\2\2\2\u05f5\u05f6\3\2\2\2\u05f6"+
		"\u05f8\3\2\2\2\u05f7\u05f5\3\2\2\2\u05f8\u05f9\7)\2\2\u05f9\u00c7\3\2"+
		"\2\2\u05fa\u05fd\5\u0124\u0093\2\u05fb\u05fc\7\62\2\2\u05fc\u05fe\5\u0124"+
		"\u0093\2\u05fd\u05fb\3\2\2\2\u05fd\u05fe\3\2\2\2\u05fe\u00c9\3\2\2\2\u05ff"+
		"\u0600\7(\2\2\u0600\u0606\5\u00f8}\2\u0601\u0602\5\u012a\u0096\2\u0602"+
		"\u0603\5\u00f8}\2\u0603\u0605\3\2\2\2\u0604\u0601\3\2\2\2\u0605\u0608"+
		"\3\2\2\2\u0606\u0604\3\2\2\2\u0606\u0607\3\2\2\2\u0607\u0609\3\2\2\2\u0608"+
		"\u0606\3\2\2\2\u0609\u060a\7)\2\2\u060a\u00cb\3\2\2\2\u060b\u060d\5\u012c"+
		"\u0097\2\u060c\u060e\5\u00ceh\2\u060d\u060c\3\2\2\2\u060d\u060e\3\2\2"+
		"\2\u060e\u060f\3\2\2\2\u060f\u0613\t\2\2\2\u0610\u0612\7]\2\2\u0611\u0610"+
		"\3\2\2\2\u0612\u0615\3\2\2\2\u0613\u0611\3\2\2\2\u0613\u0614\3\2\2\2\u0614"+
		"\u0616\3\2\2\2\u0615\u0613\3\2\2\2\u0616\u0617\5\u008cG\2\u0617\u0618"+
		"\5\u012e\u0098\2\u0618\u062d\3\2\2\2\u0619\u061b\5\u012c\u0097\2\u061a"+
		"\u061c\5\u00ceh\2\u061b\u061a\3\2\2\2\u061b\u061c\3\2\2\2\u061c\u061d"+
		"\3\2\2\2\u061d\u0621\t\2\2\2\u061e\u0620\7]\2\2\u061f\u061e\3\2\2\2\u0620"+
		"\u0623\3\2\2\2\u0621\u061f\3\2\2\2\u0621\u0622\3\2\2\2\u0622\u0627\3\2"+
		"\2\2\u0623\u0621\3\2\2\2\u0624\u0626\5P)\2\u0625\u0624\3\2\2\2\u0626\u0629"+
		"\3\2\2\2\u0627\u0625\3\2\2\2\u0627\u0628\3\2\2\2\u0628\u062a\3\2\2\2\u0629"+
		"\u0627\3\2\2\2\u062a\u062b\5\u012e\u0098\2\u062b\u062d\3\2\2\2\u062c\u060b"+
		"\3\2\2\2\u062c\u0619\3\2\2\2\u062d\u00cd\3\2\2\2\u062e\u0634\5\u0124\u0093"+
		"\2\u062f\u0630\5\u012a\u0096\2\u0630\u0631\5\u0124\u0093\2\u0631\u0633"+
		"\3\2\2\2\u0632\u062f\3\2\2\2\u0633\u0636\3\2\2\2\u0634\u0632\3\2\2\2\u0634"+
		"\u0635\3\2\2\2\u0635\u00cf\3\2\2\2\u0636\u0634\3\2\2\2\u0637\u0638\5\u00d2"+
		"j\2\u0638\u00d1\3\2\2\2\u0639\u063a\5\u012c\u0097\2\u063a\u0640\5\u00d4"+
		"k\2\u063b\u063c\5\u012a\u0096\2\u063c\u063d\5\u00d4k\2\u063d\u063f\3\2"+
		"\2\2\u063e\u063b\3\2\2\2\u063f\u0642\3\2\2\2\u0640\u063e\3\2\2\2\u0640"+
		"\u0641\3\2\2\2\u0641\u0643\3\2\2\2\u0642\u0640\3\2\2\2\u0643\u0644\5\u012e"+
		"\u0098\2\u0644\u00d3\3\2\2\2\u0645\u0646\5\u00c4c\2\u0646\u0647\7\'\2"+
		"\2\u0647\u0648\5\u0086D\2\u0648\u00d5\3\2\2\2\u0649\u064a\5H%\2\u064a"+
		"\u064e\t\2\2\2\u064b\u064d\7]\2\2\u064c\u064b\3\2\2\2\u064d\u0650\3\2"+
		"\2\2\u064e\u064c\3\2\2\2\u064e\u064f\3\2\2\2\u064f\u0651\3\2\2\2\u0650"+
		"\u064e\3\2\2\2\u0651\u0652\5J&\2\u0652\u0656\5\u012c\u0097\2\u0653\u0655"+
		"\5P)\2\u0654\u0653\3\2\2\2\u0655\u0658\3\2\2\2\u0656\u0654\3\2\2\2\u0656"+
		"\u0657\3\2\2\2\u0657\u0659\3\2\2\2\u0658\u0656\3\2\2\2\u0659\u065a\5\u012e"+
		"\u0098\2\u065a\u00d7\3\2\2\2\u065b\u065c\5\u0130\u0099\2\u065c\u0662\5"+
		"\u0086D\2\u065d\u065e\5\u012a\u0096\2\u065e\u065f\5\u0086D\2\u065f\u0661"+
		"\3\2\2\2\u0660\u065d\3\2\2\2\u0661\u0664\3\2\2\2\u0662\u0660\3\2\2\2\u0662"+
		"\u0663\3\2\2\2\u0663\u0665\3\2\2\2\u0664\u0662\3\2\2\2\u0665\u0666\5\u0132"+
		"\u009a\2\u0666\u00d9\3\2\2\2\u0667\u0668\5\u011a\u008e\2\u0668\u0669\5"+
		"\u0086D\2\u0669\u00db\3\2\2\2\u066a\u066b\5\u0122\u0092\2\u066b\u066c"+
		"\5\u0086D\2\u066c\u00dd\3\2\2\2\u066d\u066f\5\u00e4s\2\u066e\u0670\7]"+
		"\2\2\u066f\u066e\3\2\2\2\u066f\u0670\3\2\2\2\u0670\u0671\3\2\2\2\u0671"+
		"\u0672\5\u0086D\2\u0672\u0674\7#\2\2\u0673\u0675\7]\2\2\u0674\u0673\3"+
		"\2\2\2\u0674\u0675\3\2\2\2\u0675\u0677\3\2\2\2\u0676\u0678\5\u00e0q\2"+
		"\u0677\u0676\3\2\2\2\u0678\u0679\3\2\2\2\u0679\u0677\3\2\2\2\u0679\u067a"+
		"\3\2\2\2\u067a\u067b\3\2\2\2\u067b\u067d\t\4\2\2\u067c\u067e\7]\2\2\u067d"+
		"\u067c\3\2\2\2\u067d\u067e\3\2\2\2\u067e\u067f\3\2\2\2\u067f\u0680\5\u0086"+
		"D\2\u0680\u00df\3\2\2\2\u0681\u0683\5\u00e2r\2\u0682\u0684\5\u0086D\2"+
		"\u0683\u0682\3\2\2\2\u0683\u0684\3\2\2\2\u0684\u0685\3\2\2\2\u0685\u0687"+
		"\7#\2\2\u0686\u0688\7]\2\2\u0687\u0686\3\2\2\2\u0687\u0688\3\2\2\2\u0688"+
		"\u00e1\3\2\2\2\u0689\u068c\5\u00e4s\2\u068a\u068c\5\u00e6t\2\u068b\u0689"+
		"\3\2\2\2\u068b\u068a\3\2\2\2\u068c\u00e3\3\2\2\2\u068d\u068e\7\3\2\2\u068e"+
		"\u00e5\3\2\2\2\u068f\u0690\t\5\2\2\u0690\u00e7\3\2\2\2\u0691\u0693\7U"+
		"\2\2\u0692\u0694\5\u00eav\2\u0693\u0692\3\2\2\2\u0694\u0695\3\2\2\2\u0695"+
		"\u0693\3\2\2\2\u0695\u0696\3\2\2\2\u0696\u00e9\3\2\2\2\u0697\u0698\5\u0086"+
		"D\2\u0698\u0699\7U\2\2\u0699\u00eb\3\2\2\2\u069a\u06a3\5\u00eex\2\u069b"+
		"\u06a3\5\u00f0y\2\u069c\u06a3\7U\2\2\u069d\u06a3\7V\2\2\u069e\u06a3\7"+
		"Q\2\2\u069f\u06a3\7R\2\2\u06a0\u06a3\5\u0110\u0089\2\u06a1\u06a3\7S\2"+
		"\2\u06a2\u069a\3\2\2\2\u06a2\u069b\3\2\2\2\u06a2\u069c\3\2\2\2\u06a2\u069d"+
		"\3\2\2\2\u06a2\u069e\3\2\2\2\u06a2\u069f\3\2\2\2\u06a2\u06a0\3\2\2\2\u06a2"+
		"\u06a1\3\2\2\2\u06a3\u00ed\3\2\2\2\u06a4\u06a5\5\u00f0y\2\u06a5\u06a6"+
		"\5\u0120\u0091\2\u06a6\u06a7\5\u00f0y\2\u06a7\u00ef\3\2\2\2\u06a8\u06a9"+
		"\7T\2\2\u06a9\u00f1\3\2\2\2\u06aa\u06b5\5\u010a\u0086\2\u06ab\u06b5\5"+
		"\u00fa~\2\u06ac\u06b5\5\u00fc\177\2\u06ad\u06b5\5\u00fe\u0080\2\u06ae"+
		"\u06b5\5\u0100\u0081\2\u06af\u06b5\5\u0102\u0082\2\u06b0\u06b5\5\u0104"+
		"\u0083\2\u06b1\u06b5\5\u010e\u0088\2\u06b2\u06b5\5\u0106\u0084\2\u06b3"+
		"\u06b5\5\u0108\u0085\2\u06b4\u06aa\3\2\2\2\u06b4\u06ab\3\2\2\2\u06b4\u06ac"+
		"\3\2\2\2\u06b4\u06ad\3\2\2\2\u06b4\u06ae\3\2\2\2\u06b4\u06af\3\2\2\2\u06b4"+
		"\u06b0\3\2\2\2\u06b4\u06b1\3\2\2\2\u06b4\u06b2\3\2\2\2\u06b4\u06b3\3\2"+
		"\2\2\u06b5\u00f3\3\2\2\2\u06b6\u06b9\7\65\2\2\u06b7\u06ba\5\u00f2z\2\u06b8"+
		"\u06ba\5\u00f6|\2\u06b9\u06b7\3\2\2\2\u06b9\u06b8\3\2\2\2\u06ba\u00f5"+
		"\3\2\2\2\u06bb\u06bc\7\63\2\2\u06bc\u06bd\5\u00f2z\2\u06bd\u00f7\3\2\2"+
		"\2\u06be\u06c2\5\u00f2z\2\u06bf\u06c2\5\u00f6|\2\u06c0\u06c2\5\u00f4{"+
		"\2\u06c1\u06be\3\2\2\2\u06c1\u06bf\3\2\2\2\u06c1\u06c0\3\2\2\2\u06c2\u00f9"+
		"\3\2\2\2\u06c3\u06c4\5\u0130\u0099\2\u06c4\u06c8\5\u00f8}\2\u06c5\u06c6"+
		"\5\u012a\u0096\2\u06c6\u06c7\5\u00f8}\2\u06c7\u06c9\3\2\2\2\u06c8\u06c5"+
		"\3\2\2\2\u06c9\u06ca\3\2\2\2\u06ca\u06c8\3\2\2\2\u06ca\u06cb\3\2\2\2\u06cb"+
		"\u06cc\3\2\2\2\u06cc\u06cd\5\u0132\u009a\2\u06cd\u00fb\3\2\2\2\u06ce\u06cf"+
		"\7/\2\2\u06cf\u06d0\7\62\2\2\u06d0\u06d1\7\60\2\2\u06d1\u06d2\5\u00f8"+
		"}\2\u06d2\u00fd\3\2\2\2\u06d3\u06d4\7/\2\2\u06d4\u06d5\7\60\2\2\u06d5"+
		"\u06d6\5\u00f8}\2\u06d6\u00ff\3\2\2\2\u06d7\u06d8\7/\2\2\u06d8\u06d9\5"+
		"\u00f8}\2\u06d9\u06da\7\60\2\2\u06da\u0101\3\2\2\2\u06db\u06dc\7/\2\2"+
		"\u06dc\u06dd\5\u00f8}\2\u06dd\u06de\7\60\2\2\u06de\u06df\5\u00f8}\2\u06df"+
		"\u0103\3\2\2\2\u06e0\u06e1\7/\2\2\u06e1\u06e2\7#\2\2\u06e2\u06e3\7\60"+
		"\2\2\u06e3\u06e4\5\u00f8}\2\u06e4\u0105\3\2\2\2\u06e5\u06e7\5\u00c2b\2"+
		"\u06e6\u06e8\5\u00caf\2\u06e7\u06e6\3\2\2\2\u06e7\u06e8\3\2\2\2\u06e8"+
		"\u0107\3\2\2\2\u06e9\u06ea\5\u010c\u0087\2\u06ea\u06ee\t\2\2\2\u06eb\u06ed"+
		"\7]\2\2\u06ec\u06eb\3\2\2\2\u06ed\u06f0\3\2\2\2\u06ee\u06ec\3\2\2\2\u06ee"+
		"\u06ef\3\2\2\2\u06ef\u06f1\3\2\2\2\u06f0\u06ee\3\2\2\2\u06f1\u06f2\5\u010c"+
		"\u0087\2\u06f2\u0109\3\2\2\2\u06f3\u06f4\7O\2\2\u06f4\u010b\3\2\2\2\u06f5"+
		"\u06f7\5\u0130\u0099\2\u06f6\u06f8\5\u00f8}\2\u06f7\u06f6\3\2\2\2\u06f7"+
		"\u06f8\3\2\2\2\u06f8\u06fe\3\2\2\2\u06f9\u06fa\5\u012a\u0096\2\u06fa\u06fb"+
		"\5\u00f8}\2\u06fb\u06fd\3\2\2\2\u06fc\u06f9\3\2\2\2\u06fd\u0700\3\2\2"+
		"\2\u06fe\u06fc\3\2\2\2\u06fe\u06ff\3\2\2\2\u06ff\u0701\3\2\2\2\u0700\u06fe"+
		"\3\2\2\2\u0701\u0702\5\u0132\u009a\2\u0702\u010d\3\2\2\2\u0703\u0714\7"+
		"?\2\2\u0704\u0714\7@\2\2\u0705\u0714\7A\2\2\u0706\u0714\7B\2\2\u0707\u0714"+
		"\7C\2\2\u0708\u0714\7D\2\2\u0709\u0714\7E\2\2\u070a\u0714\7F\2\2\u070b"+
		"\u0714\7G\2\2\u070c\u0714\7H\2\2\u070d\u0714\7I\2\2\u070e\u0714\7J\2\2"+
		"\u070f\u0714\7K\2\2\u0710\u0714\7L\2\2\u0711\u0714\7M\2\2\u0712\u0714"+
		"\7N\2\2\u0713\u0703\3\2\2\2\u0713\u0704\3\2\2\2\u0713\u0705\3\2\2\2\u0713"+
		"\u0706\3\2\2\2\u0713\u0707\3\2\2\2\u0713\u0708\3\2\2\2\u0713\u0709\3\2"+
		"\2\2\u0713\u070a\3\2\2\2\u0713\u070b\3\2\2\2\u0713\u070c\3\2\2\2\u0713"+
		"\u070d\3\2\2\2\u0713\u070e\3\2\2\2\u0713\u070f\3\2\2\2\u0713\u0710\3\2"+
		"\2\2\u0713\u0711\3\2\2\2\u0713\u0712\3\2\2\2\u0714\u010f\3\2\2\2\u0715"+
		"\u0716\7P\2\2\u0716\u0111\3\2\2\2\u0717\u071a\7Q\2\2\u0718\u071a\7R\2"+
		"\2\u0719\u0717\3\2\2\2\u0719\u0718\3\2\2\2\u071a\u0113\3\2\2\2\u071b\u071c"+
		"\t\6\2\2\u071c\u071d\7\62\2\2\u071d\u0115\3\2\2\2\u071e\u0720\t\7\2\2"+
		"\u071f\u0721\7]\2\2\u0720\u071f\3\2\2\2\u0720\u0721\3\2\2\2\u0721\u0117"+
		"\3\2\2\2\u0722\u0724\t\b\2\2\u0723\u0725\7]\2\2\u0724\u0723\3\2\2\2\u0724"+
		"\u0725\3\2\2\2\u0725\u0119\3\2\2\2\u0726\u0728\t\t\2\2\u0727\u0729\7]"+
		"\2\2\u0728\u0727\3\2\2\2\u0728\u0729\3\2\2\2\u0729\u011b\3\2\2\2\u072a"+
		"\u072c\t\n\2\2\u072b\u072d\7]\2\2\u072c\u072b\3\2\2\2\u072c\u072d\3\2"+
		"\2\2\u072d\u011d\3\2\2\2\u072e\u0730\t\13\2\2\u072f\u0731\7]\2\2\u0730"+
		"\u072f\3\2\2\2\u0730\u0731\3\2\2\2\u0731\u011f\3\2\2\2\u0732\u0734\7 "+
		"\2\2\u0733\u0735\7]\2\2\u0734\u0733\3\2\2\2\u0734\u0735\3\2\2\2\u0735"+
		"\u0121\3\2\2\2\u0736\u0737\7\66\2\2\u0737\u0123\3\2\2\2\u0738\u0739\5"+
		"\u0126\u0094\2\u0739\u0125\3\2\2\2\u073a\u073f\t\f\2\2\u073b\u073f\5\u010e"+
		"\u0088\2\u073c\u073f\5\u010a\u0086\2\u073d\u073f\5\u00e2r\2\u073e\u073a"+
		"\3\2\2\2\u073e\u073b\3\2\2\2\u073e\u073c\3\2\2\2\u073e\u073d\3\2\2\2\u073f"+
		"\u0127\3\2\2\2\u0740\u0741\t\r\2\2\u0741\u0129\3\2\2\2\u0742\u0746\7!"+
		"\2\2\u0743\u0745\7]\2\2\u0744\u0743\3\2\2\2\u0745\u0748\3\2\2\2\u0746"+
		"\u0744\3\2\2\2\u0746\u0747\3\2\2\2\u0747\u012b\3\2\2\2\u0748\u0746\3\2"+
		"\2\2\u0749\u074d\7-\2\2\u074a\u074c\7]\2\2\u074b\u074a\3\2\2\2\u074c\u074f"+
		"\3\2\2\2\u074d\u074b\3\2\2\2\u074d\u074e\3\2\2\2\u074e\u012d\3\2\2\2\u074f"+
		"\u074d\3\2\2\2\u0750\u0752\7]\2\2\u0751\u0750\3\2\2\2\u0752\u0755\3\2"+
		"\2\2\u0753\u0751\3\2\2\2\u0753\u0754\3\2\2\2\u0754\u0756\3\2\2\2\u0755"+
		"\u0753\3\2\2\2\u0756\u0757\7.\2\2\u0757\u012f\3\2\2\2\u0758\u0759\7+\2"+
		"\2\u0759\u0131\3\2\2\2\u075a\u075b\7,\2\2\u075b\u0133\3\2\2\2\u075c\u0760"+
		"\7/\2\2\u075d\u075f\7]\2\2\u075e\u075d\3\2\2\2\u075f\u0762\3\2\2\2\u0760"+
		"\u075e\3\2\2\2\u0760\u0761\3\2\2\2\u0761\u0135\3\2\2\2\u0762\u0760\3\2"+
		"\2\2\u0763\u0765\7]\2\2\u0764\u0763\3\2\2\2\u0765\u0768\3\2\2\2\u0766"+
		"\u0764\3\2\2\2\u0766\u0767\3\2\2\2\u0767\u0769\3\2\2\2\u0768\u0766\3\2"+
		"\2\2\u0769\u076a\7\60\2\2\u076a\u0137\3\2\2\2\u00c6\u013b\u0140\u0144"+
		"\u014a\u0150\u0157\u0159\u0160\u0165\u0167\u0178\u0185\u018c\u0194\u019d"+
		"\u01a0\u01a5\u01ae\u01b0\u01b5\u01bc\u01c2\u01c7\u01cf\u01d5\u01d9\u01e0"+
		"\u01e8\u01ef\u01f3\u01fa\u0204\u020b\u0213\u0217\u021d\u0223\u022c\u022e"+
		"\u0237\u023d\u024c\u0251\u0258\u0261\u0264\u0267\u026b\u0272\u027a\u0281"+
		"\u0284\u028d\u0299\u02a0\u02a9\u02ac\u02af\u02b3\u02ba\u02c2\u02c9\u02cc"+
		"\u02d5\u02da\u02de\u02e5\u02ef\u02f2\u02fd\u0305\u0309\u0310\u0318\u031f"+
		"\u0327\u0333\u033a\u0341\u0348\u0354\u035b\u0370\u0377\u0380\u0387\u038b"+
		"\u0391\u0398\u039e\u03a8\u03ad\u03b4\u03bf\u03c9\u03d5\u03e1\u03e8\u03f4"+
		"\u03ff\u0412\u0419\u0424\u042b\u042f\u0436\u043f\u0445\u044f\u0457\u046a"+
		"\u0472\u048e\u0496\u04ac\u04ce\u04d0\u04d8\u04dd\u04e3\u04ed\u04f0\u04fa"+
		"\u04ff\u0505\u0510\u051b\u0520\u0525\u052b\u052f\u0533\u053b\u0540\u054a"+
		"\u0553\u0556\u0559\u0562\u0571\u057e\u058b\u0594\u05a1\u05b1\u05bd\u05ca"+
		"\u05d9\u05dd\u05e5\u05eb\u05f5\u05fd\u0606\u060d\u0613\u061b\u0621\u0627"+
		"\u062c\u0634\u0640\u064e\u0656\u0662\u066f\u0674\u0679\u067d\u0683\u0687"+
		"\u068b\u0695\u06a2\u06b4\u06b9\u06c1\u06ca\u06e7\u06ee\u06f7\u06fe\u0713"+
		"\u0719\u0720\u0724\u0728\u072c\u0730\u0734\u073e\u0746\u074d\u0753\u0760"+
		"\u0766";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}