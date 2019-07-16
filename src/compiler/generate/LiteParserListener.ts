// Generated from src/compiler/LiteParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./LiteParser";
import { StatementContext } from "./LiteParser";
import { ExportStatementContext } from "./LiteParser";
import { ImportStatementContext } from "./LiteParser";
import { NamespaceSupportStatementContext } from "./LiteParser";
import { TypeAliasStatementContext } from "./LiteParser";
import { TypeRedefineStatementContext } from "./LiteParser";
import { EnumStatementContext } from "./LiteParser";
import { EnumSupportStatementContext } from "./LiteParser";
import { NamespaceVariableStatementContext } from "./LiteParser";
import { NamespaceControlStatementContext } from "./LiteParser";
import { NamespaceConstantStatementContext } from "./LiteParser";
import { NamespaceFunctionStatementContext } from "./LiteParser";
import { PackageStatementContext } from "./LiteParser";
import { PackageSupportStatementContext } from "./LiteParser";
import { IncludeStatementContext } from "./LiteParser";
import { PackageNewStatementContext } from "./LiteParser";
import { PackageVariableStatementContext } from "./LiteParser";
import { PackageControlSubStatementContext } from "./LiteParser";
import { PackageEventStatementContext } from "./LiteParser";
import { ImplementStatementContext } from "./LiteParser";
import { ImplementSupportStatementContext } from "./LiteParser";
import { ImplementFunctionStatementContext } from "./LiteParser";
import { ImplementControlStatementContext } from "./LiteParser";
import { OverrideStatementContext } from "./LiteParser";
import { OverrideSupportStatementContext } from "./LiteParser";
import { OverrideFunctionStatementContext } from "./LiteParser";
import { OverrideControlStatementContext } from "./LiteParser";
import { ProtocolStatementContext } from "./LiteParser";
import { ProtocolSupportStatementContext } from "./LiteParser";
import { ProtocolControlStatementContext } from "./LiteParser";
import { ProtocolControlSubStatementContext } from "./LiteParser";
import { ProtocolFunctionStatementContext } from "./LiteParser";
import { FunctionStatementContext } from "./LiteParser";
import { ReturnStatementContext } from "./LiteParser";
import { ParameterClauseInContext } from "./LiteParser";
import { ParameterClauseOutContext } from "./LiteParser";
import { ParameterClauseSelfContext } from "./LiteParser";
import { ParameterContext } from "./LiteParser";
import { FunctionSupportStatementContext } from "./LiteParser";
import { JudgeCaseStatementContext } from "./LiteParser";
import { CaseStatementContext } from "./LiteParser";
import { CaseExprStatementContext } from "./LiteParser";
import { JudgeStatementContext } from "./LiteParser";
import { JudgeElseStatementContext } from "./LiteParser";
import { JudgeIfStatementContext } from "./LiteParser";
import { JudgeElseIfStatementContext } from "./LiteParser";
import { LoopStatementContext } from "./LiteParser";
import { LoopEachStatementContext } from "./LiteParser";
import { LoopCaseStatementContext } from "./LiteParser";
import { LoopInfiniteStatementContext } from "./LiteParser";
import { LoopJumpStatementContext } from "./LiteParser";
import { LoopContinueStatementContext } from "./LiteParser";
import { CheckStatementContext } from "./LiteParser";
import { UsingStatementContext } from "./LiteParser";
import { CheckErrorStatementContext } from "./LiteParser";
import { CheckFinallyStatmentContext } from "./LiteParser";
import { ReportStatementContext } from "./LiteParser";
import { IteratorStatementContext } from "./LiteParser";
import { VariableStatementContext } from "./LiteParser";
import { VariableDeclaredStatementContext } from "./LiteParser";
import { ChannelAssignStatementContext } from "./LiteParser";
import { AssignStatementContext } from "./LiteParser";
import { ExpressionStatementContext } from "./LiteParser";
import { PrimaryExpressionContext } from "./LiteParser";
import { ExpressionContext } from "./LiteParser";
import { CallExpressionContext } from "./LiteParser";
import { TupleContext } from "./LiteParser";
import { ExpressionListContext } from "./LiteParser";
import { AnnotationSupportContext } from "./LiteParser";
import { AnnotationContext } from "./LiteParser";
import { AnnotationListContext } from "./LiteParser";
import { AnnotationItemContext } from "./LiteParser";
import { AnnotationAssignContext } from "./LiteParser";
import { CallFuncContext } from "./LiteParser";
import { CallChannelContext } from "./LiteParser";
import { CallElementContext } from "./LiteParser";
import { CallPkgContext } from "./LiteParser";
import { CallNewContext } from "./LiteParser";
import { GetTypeContext } from "./LiteParser";
import { TypeConversionContext } from "./LiteParser";
import { PkgAssignContext } from "./LiteParser";
import { PkgAssignElementContext } from "./LiteParser";
import { ListAssignContext } from "./LiteParser";
import { SetAssignContext } from "./LiteParser";
import { DictionaryAssignContext } from "./LiteParser";
import { CallAwaitContext } from "./LiteParser";
import { ListContext } from "./LiteParser";
import { SetContext } from "./LiteParser";
import { DictionaryContext } from "./LiteParser";
import { DictionaryElementContext } from "./LiteParser";
import { SliceContext } from "./LiteParser";
import { SliceFullContext } from "./LiteParser";
import { SliceStartContext } from "./LiteParser";
import { SliceEndContext } from "./LiteParser";
import { NameSpaceItemContext } from "./LiteParser";
import { NameContext } from "./LiteParser";
import { TemplateDefineContext } from "./LiteParser";
import { TemplateDefineItemContext } from "./LiteParser";
import { TemplateCallContext } from "./LiteParser";
import { LambdaContext } from "./LiteParser";
import { LambdaInContext } from "./LiteParser";
import { PkgAnonymousContext } from "./LiteParser";
import { PkgAnonymousAssignContext } from "./LiteParser";
import { PkgAnonymousAssignElementContext } from "./LiteParser";
import { FunctionExpressionContext } from "./LiteParser";
import { TupleExpressionContext } from "./LiteParser";
import { PlusMinusContext } from "./LiteParser";
import { NegateContext } from "./LiteParser";
import { BitwiseNotExpressionContext } from "./LiteParser";
import { LinqContext } from "./LiteParser";
import { LinqItemContext } from "./LiteParser";
import { LinqKeywordContext } from "./LiteParser";
import { LinqHeadKeywordContext } from "./LiteParser";
import { LinqBodyKeywordContext } from "./LiteParser";
import { StringExpressionContext } from "./LiteParser";
import { StringExpressionElementContext } from "./LiteParser";
import { DataStatementContext } from "./LiteParser";
import { FloatExprContext } from "./LiteParser";
import { IntegerExprContext } from "./LiteParser";
import { TypeNotNullContext } from "./LiteParser";
import { TypeReferenceContext } from "./LiteParser";
import { TypeNullableContext } from "./LiteParser";
import { TypeTypeContext } from "./LiteParser";
import { TypeTupleContext } from "./LiteParser";
import { TypeArrayContext } from "./LiteParser";
import { TypeListContext } from "./LiteParser";
import { TypeSetContext } from "./LiteParser";
import { TypeDictionaryContext } from "./LiteParser";
import { TypeChannelContext } from "./LiteParser";
import { TypePackageContext } from "./LiteParser";
import { TypeFunctionContext } from "./LiteParser";
import { TypeAnyContext } from "./LiteParser";
import { TypeFunctionParameterClauseContext } from "./LiteParser";
import { TypeBasicContext } from "./LiteParser";
import { NilExprContext } from "./LiteParser";
import { BoolExprContext } from "./LiteParser";
import { JudgeTypeContext } from "./LiteParser";
import { BitwiseContext } from "./LiteParser";
import { BitwiseAndContext } from "./LiteParser";
import { BitwiseOrContext } from "./LiteParser";
import { BitwiseNotContext } from "./LiteParser";
import { BitwiseXorContext } from "./LiteParser";
import { BitwiseLeftShiftContext } from "./LiteParser";
import { BitwiseRightShiftContext } from "./LiteParser";
import { JudgeContext } from "./LiteParser";
import { AssignContext } from "./LiteParser";
import { AddContext } from "./LiteParser";
import { MulContext } from "./LiteParser";
import { PowContext } from "./LiteParser";
import { CallContext } from "./LiteParser";
import { WaveContext } from "./LiteParser";
import { IdContext } from "./LiteParser";
import { IdItemContext } from "./LiteParser";
import { EndContext } from "./LiteParser";
import { MoreContext } from "./LiteParser";
import { Left_braceContext } from "./LiteParser";
import { Right_braceContext } from "./LiteParser";
import { Left_parenContext } from "./LiteParser";
import { Right_parenContext } from "./LiteParser";
import { Left_brackContext } from "./LiteParser";
import { Right_brackContext } from "./LiteParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LiteParser`.
 */
export interface LiteParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LiteParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	enterExportStatement?: (ctx: ExportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	exitExportStatement?: (ctx: ExportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.namespaceSupportStatement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceSupportStatement?: (ctx: NamespaceSupportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.namespaceSupportStatement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceSupportStatement?: (ctx: NamespaceSupportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeAliasStatement`.
	 * @param ctx the parse tree
	 */
	enterTypeAliasStatement?: (ctx: TypeAliasStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeAliasStatement`.
	 * @param ctx the parse tree
	 */
	exitTypeAliasStatement?: (ctx: TypeAliasStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeRedefineStatement`.
	 * @param ctx the parse tree
	 */
	enterTypeRedefineStatement?: (ctx: TypeRedefineStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeRedefineStatement`.
	 * @param ctx the parse tree
	 */
	exitTypeRedefineStatement?: (ctx: TypeRedefineStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.enumStatement`.
	 * @param ctx the parse tree
	 */
	enterEnumStatement?: (ctx: EnumStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.enumStatement`.
	 * @param ctx the parse tree
	 */
	exitEnumStatement?: (ctx: EnumStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.enumSupportStatement`.
	 * @param ctx the parse tree
	 */
	enterEnumSupportStatement?: (ctx: EnumSupportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.enumSupportStatement`.
	 * @param ctx the parse tree
	 */
	exitEnumSupportStatement?: (ctx: EnumSupportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.namespaceVariableStatement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceVariableStatement?: (ctx: NamespaceVariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.namespaceVariableStatement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceVariableStatement?: (ctx: NamespaceVariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.namespaceControlStatement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceControlStatement?: (ctx: NamespaceControlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.namespaceControlStatement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceControlStatement?: (ctx: NamespaceControlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.namespaceConstantStatement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceConstantStatement?: (ctx: NamespaceConstantStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.namespaceConstantStatement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceConstantStatement?: (ctx: NamespaceConstantStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.namespaceFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceFunctionStatement?: (ctx: NamespaceFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.namespaceFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceFunctionStatement?: (ctx: NamespaceFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.packageStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageStatement?: (ctx: PackageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.packageStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageStatement?: (ctx: PackageStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.packageSupportStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageSupportStatement?: (ctx: PackageSupportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.packageSupportStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageSupportStatement?: (ctx: PackageSupportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.includeStatement`.
	 * @param ctx the parse tree
	 */
	enterIncludeStatement?: (ctx: IncludeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.includeStatement`.
	 * @param ctx the parse tree
	 */
	exitIncludeStatement?: (ctx: IncludeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.packageNewStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageNewStatement?: (ctx: PackageNewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.packageNewStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageNewStatement?: (ctx: PackageNewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.packageVariableStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageVariableStatement?: (ctx: PackageVariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.packageVariableStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageVariableStatement?: (ctx: PackageVariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.packageControlSubStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageControlSubStatement?: (ctx: PackageControlSubStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.packageControlSubStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageControlSubStatement?: (ctx: PackageControlSubStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.packageEventStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageEventStatement?: (ctx: PackageEventStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.packageEventStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageEventStatement?: (ctx: PackageEventStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.implementStatement`.
	 * @param ctx the parse tree
	 */
	enterImplementStatement?: (ctx: ImplementStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.implementStatement`.
	 * @param ctx the parse tree
	 */
	exitImplementStatement?: (ctx: ImplementStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.implementSupportStatement`.
	 * @param ctx the parse tree
	 */
	enterImplementSupportStatement?: (ctx: ImplementSupportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.implementSupportStatement`.
	 * @param ctx the parse tree
	 */
	exitImplementSupportStatement?: (ctx: ImplementSupportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.implementFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterImplementFunctionStatement?: (ctx: ImplementFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.implementFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitImplementFunctionStatement?: (ctx: ImplementFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.implementControlStatement`.
	 * @param ctx the parse tree
	 */
	enterImplementControlStatement?: (ctx: ImplementControlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.implementControlStatement`.
	 * @param ctx the parse tree
	 */
	exitImplementControlStatement?: (ctx: ImplementControlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.overrideStatement`.
	 * @param ctx the parse tree
	 */
	enterOverrideStatement?: (ctx: OverrideStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.overrideStatement`.
	 * @param ctx the parse tree
	 */
	exitOverrideStatement?: (ctx: OverrideStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.overrideSupportStatement`.
	 * @param ctx the parse tree
	 */
	enterOverrideSupportStatement?: (ctx: OverrideSupportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.overrideSupportStatement`.
	 * @param ctx the parse tree
	 */
	exitOverrideSupportStatement?: (ctx: OverrideSupportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.overrideFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterOverrideFunctionStatement?: (ctx: OverrideFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.overrideFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitOverrideFunctionStatement?: (ctx: OverrideFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.overrideControlStatement`.
	 * @param ctx the parse tree
	 */
	enterOverrideControlStatement?: (ctx: OverrideControlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.overrideControlStatement`.
	 * @param ctx the parse tree
	 */
	exitOverrideControlStatement?: (ctx: OverrideControlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.protocolStatement`.
	 * @param ctx the parse tree
	 */
	enterProtocolStatement?: (ctx: ProtocolStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.protocolStatement`.
	 * @param ctx the parse tree
	 */
	exitProtocolStatement?: (ctx: ProtocolStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.protocolSupportStatement`.
	 * @param ctx the parse tree
	 */
	enterProtocolSupportStatement?: (ctx: ProtocolSupportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.protocolSupportStatement`.
	 * @param ctx the parse tree
	 */
	exitProtocolSupportStatement?: (ctx: ProtocolSupportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.protocolControlStatement`.
	 * @param ctx the parse tree
	 */
	enterProtocolControlStatement?: (ctx: ProtocolControlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.protocolControlStatement`.
	 * @param ctx the parse tree
	 */
	exitProtocolControlStatement?: (ctx: ProtocolControlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.protocolControlSubStatement`.
	 * @param ctx the parse tree
	 */
	enterProtocolControlSubStatement?: (ctx: ProtocolControlSubStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.protocolControlSubStatement`.
	 * @param ctx the parse tree
	 */
	exitProtocolControlSubStatement?: (ctx: ProtocolControlSubStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.protocolFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterProtocolFunctionStatement?: (ctx: ProtocolFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.protocolFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitProtocolFunctionStatement?: (ctx: ProtocolFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.functionStatement`.
	 * @param ctx the parse tree
	 */
	enterFunctionStatement?: (ctx: FunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.functionStatement`.
	 * @param ctx the parse tree
	 */
	exitFunctionStatement?: (ctx: FunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.parameterClauseIn`.
	 * @param ctx the parse tree
	 */
	enterParameterClauseIn?: (ctx: ParameterClauseInContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.parameterClauseIn`.
	 * @param ctx the parse tree
	 */
	exitParameterClauseIn?: (ctx: ParameterClauseInContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.parameterClauseOut`.
	 * @param ctx the parse tree
	 */
	enterParameterClauseOut?: (ctx: ParameterClauseOutContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.parameterClauseOut`.
	 * @param ctx the parse tree
	 */
	exitParameterClauseOut?: (ctx: ParameterClauseOutContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.parameterClauseSelf`.
	 * @param ctx the parse tree
	 */
	enterParameterClauseSelf?: (ctx: ParameterClauseSelfContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.parameterClauseSelf`.
	 * @param ctx the parse tree
	 */
	exitParameterClauseSelf?: (ctx: ParameterClauseSelfContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.functionSupportStatement`.
	 * @param ctx the parse tree
	 */
	enterFunctionSupportStatement?: (ctx: FunctionSupportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.functionSupportStatement`.
	 * @param ctx the parse tree
	 */
	exitFunctionSupportStatement?: (ctx: FunctionSupportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.judgeCaseStatement`.
	 * @param ctx the parse tree
	 */
	enterJudgeCaseStatement?: (ctx: JudgeCaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.judgeCaseStatement`.
	 * @param ctx the parse tree
	 */
	exitJudgeCaseStatement?: (ctx: JudgeCaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	enterCaseStatement?: (ctx: CaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.caseStatement`.
	 * @param ctx the parse tree
	 */
	exitCaseStatement?: (ctx: CaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.caseExprStatement`.
	 * @param ctx the parse tree
	 */
	enterCaseExprStatement?: (ctx: CaseExprStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.caseExprStatement`.
	 * @param ctx the parse tree
	 */
	exitCaseExprStatement?: (ctx: CaseExprStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.judgeStatement`.
	 * @param ctx the parse tree
	 */
	enterJudgeStatement?: (ctx: JudgeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.judgeStatement`.
	 * @param ctx the parse tree
	 */
	exitJudgeStatement?: (ctx: JudgeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.judgeElseStatement`.
	 * @param ctx the parse tree
	 */
	enterJudgeElseStatement?: (ctx: JudgeElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.judgeElseStatement`.
	 * @param ctx the parse tree
	 */
	exitJudgeElseStatement?: (ctx: JudgeElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.judgeIfStatement`.
	 * @param ctx the parse tree
	 */
	enterJudgeIfStatement?: (ctx: JudgeIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.judgeIfStatement`.
	 * @param ctx the parse tree
	 */
	exitJudgeIfStatement?: (ctx: JudgeIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.judgeElseIfStatement`.
	 * @param ctx the parse tree
	 */
	enterJudgeElseIfStatement?: (ctx: JudgeElseIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.judgeElseIfStatement`.
	 * @param ctx the parse tree
	 */
	exitJudgeElseIfStatement?: (ctx: JudgeElseIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.loopEachStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopEachStatement?: (ctx: LoopEachStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.loopEachStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopEachStatement?: (ctx: LoopEachStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.loopCaseStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopCaseStatement?: (ctx: LoopCaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.loopCaseStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopCaseStatement?: (ctx: LoopCaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.loopInfiniteStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopInfiniteStatement?: (ctx: LoopInfiniteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.loopInfiniteStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopInfiniteStatement?: (ctx: LoopInfiniteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.loopJumpStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopJumpStatement?: (ctx: LoopJumpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.loopJumpStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopJumpStatement?: (ctx: LoopJumpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.loopContinueStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopContinueStatement?: (ctx: LoopContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.loopContinueStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopContinueStatement?: (ctx: LoopContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.checkStatement`.
	 * @param ctx the parse tree
	 */
	enterCheckStatement?: (ctx: CheckStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.checkStatement`.
	 * @param ctx the parse tree
	 */
	exitCheckStatement?: (ctx: CheckStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.usingStatement`.
	 * @param ctx the parse tree
	 */
	enterUsingStatement?: (ctx: UsingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.usingStatement`.
	 * @param ctx the parse tree
	 */
	exitUsingStatement?: (ctx: UsingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.checkErrorStatement`.
	 * @param ctx the parse tree
	 */
	enterCheckErrorStatement?: (ctx: CheckErrorStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.checkErrorStatement`.
	 * @param ctx the parse tree
	 */
	exitCheckErrorStatement?: (ctx: CheckErrorStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.checkFinallyStatment`.
	 * @param ctx the parse tree
	 */
	enterCheckFinallyStatment?: (ctx: CheckFinallyStatmentContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.checkFinallyStatment`.
	 * @param ctx the parse tree
	 */
	exitCheckFinallyStatment?: (ctx: CheckFinallyStatmentContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.reportStatement`.
	 * @param ctx the parse tree
	 */
	enterReportStatement?: (ctx: ReportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.reportStatement`.
	 * @param ctx the parse tree
	 */
	exitReportStatement?: (ctx: ReportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.iteratorStatement`.
	 * @param ctx the parse tree
	 */
	enterIteratorStatement?: (ctx: IteratorStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.iteratorStatement`.
	 * @param ctx the parse tree
	 */
	exitIteratorStatement?: (ctx: IteratorStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableStatement?: (ctx: VariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableStatement?: (ctx: VariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.variableDeclaredStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaredStatement?: (ctx: VariableDeclaredStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.variableDeclaredStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaredStatement?: (ctx: VariableDeclaredStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.channelAssignStatement`.
	 * @param ctx the parse tree
	 */
	enterChannelAssignStatement?: (ctx: ChannelAssignStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.channelAssignStatement`.
	 * @param ctx the parse tree
	 */
	exitChannelAssignStatement?: (ctx: ChannelAssignStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.assignStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignStatement?: (ctx: AssignStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.assignStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignStatement?: (ctx: AssignStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.callExpression`.
	 * @param ctx the parse tree
	 */
	enterCallExpression?: (ctx: CallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.callExpression`.
	 * @param ctx the parse tree
	 */
	exitCallExpression?: (ctx: CallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.tuple`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.tuple`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.annotationSupport`.
	 * @param ctx the parse tree
	 */
	enterAnnotationSupport?: (ctx: AnnotationSupportContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.annotationSupport`.
	 * @param ctx the parse tree
	 */
	exitAnnotationSupport?: (ctx: AnnotationSupportContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.annotationList`.
	 * @param ctx the parse tree
	 */
	enterAnnotationList?: (ctx: AnnotationListContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.annotationList`.
	 * @param ctx the parse tree
	 */
	exitAnnotationList?: (ctx: AnnotationListContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.annotationItem`.
	 * @param ctx the parse tree
	 */
	enterAnnotationItem?: (ctx: AnnotationItemContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.annotationItem`.
	 * @param ctx the parse tree
	 */
	exitAnnotationItem?: (ctx: AnnotationItemContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.annotationAssign`.
	 * @param ctx the parse tree
	 */
	enterAnnotationAssign?: (ctx: AnnotationAssignContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.annotationAssign`.
	 * @param ctx the parse tree
	 */
	exitAnnotationAssign?: (ctx: AnnotationAssignContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.callFunc`.
	 * @param ctx the parse tree
	 */
	enterCallFunc?: (ctx: CallFuncContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.callFunc`.
	 * @param ctx the parse tree
	 */
	exitCallFunc?: (ctx: CallFuncContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.callChannel`.
	 * @param ctx the parse tree
	 */
	enterCallChannel?: (ctx: CallChannelContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.callChannel`.
	 * @param ctx the parse tree
	 */
	exitCallChannel?: (ctx: CallChannelContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.callElement`.
	 * @param ctx the parse tree
	 */
	enterCallElement?: (ctx: CallElementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.callElement`.
	 * @param ctx the parse tree
	 */
	exitCallElement?: (ctx: CallElementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.callPkg`.
	 * @param ctx the parse tree
	 */
	enterCallPkg?: (ctx: CallPkgContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.callPkg`.
	 * @param ctx the parse tree
	 */
	exitCallPkg?: (ctx: CallPkgContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.callNew`.
	 * @param ctx the parse tree
	 */
	enterCallNew?: (ctx: CallNewContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.callNew`.
	 * @param ctx the parse tree
	 */
	exitCallNew?: (ctx: CallNewContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.getType`.
	 * @param ctx the parse tree
	 */
	enterGetType?: (ctx: GetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.getType`.
	 * @param ctx the parse tree
	 */
	exitGetType?: (ctx: GetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeConversion`.
	 * @param ctx the parse tree
	 */
	enterTypeConversion?: (ctx: TypeConversionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeConversion`.
	 * @param ctx the parse tree
	 */
	exitTypeConversion?: (ctx: TypeConversionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.pkgAssign`.
	 * @param ctx the parse tree
	 */
	enterPkgAssign?: (ctx: PkgAssignContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.pkgAssign`.
	 * @param ctx the parse tree
	 */
	exitPkgAssign?: (ctx: PkgAssignContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.pkgAssignElement`.
	 * @param ctx the parse tree
	 */
	enterPkgAssignElement?: (ctx: PkgAssignElementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.pkgAssignElement`.
	 * @param ctx the parse tree
	 */
	exitPkgAssignElement?: (ctx: PkgAssignElementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.listAssign`.
	 * @param ctx the parse tree
	 */
	enterListAssign?: (ctx: ListAssignContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.listAssign`.
	 * @param ctx the parse tree
	 */
	exitListAssign?: (ctx: ListAssignContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.setAssign`.
	 * @param ctx the parse tree
	 */
	enterSetAssign?: (ctx: SetAssignContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.setAssign`.
	 * @param ctx the parse tree
	 */
	exitSetAssign?: (ctx: SetAssignContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.dictionaryAssign`.
	 * @param ctx the parse tree
	 */
	enterDictionaryAssign?: (ctx: DictionaryAssignContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.dictionaryAssign`.
	 * @param ctx the parse tree
	 */
	exitDictionaryAssign?: (ctx: DictionaryAssignContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.callAwait`.
	 * @param ctx the parse tree
	 */
	enterCallAwait?: (ctx: CallAwaitContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.callAwait`.
	 * @param ctx the parse tree
	 */
	exitCallAwait?: (ctx: CallAwaitContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.dictionary`.
	 * @param ctx the parse tree
	 */
	enterDictionary?: (ctx: DictionaryContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.dictionary`.
	 * @param ctx the parse tree
	 */
	exitDictionary?: (ctx: DictionaryContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.dictionaryElement`.
	 * @param ctx the parse tree
	 */
	enterDictionaryElement?: (ctx: DictionaryElementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.dictionaryElement`.
	 * @param ctx the parse tree
	 */
	exitDictionaryElement?: (ctx: DictionaryElementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.slice`.
	 * @param ctx the parse tree
	 */
	enterSlice?: (ctx: SliceContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.slice`.
	 * @param ctx the parse tree
	 */
	exitSlice?: (ctx: SliceContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.sliceFull`.
	 * @param ctx the parse tree
	 */
	enterSliceFull?: (ctx: SliceFullContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.sliceFull`.
	 * @param ctx the parse tree
	 */
	exitSliceFull?: (ctx: SliceFullContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.sliceStart`.
	 * @param ctx the parse tree
	 */
	enterSliceStart?: (ctx: SliceStartContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.sliceStart`.
	 * @param ctx the parse tree
	 */
	exitSliceStart?: (ctx: SliceStartContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.sliceEnd`.
	 * @param ctx the parse tree
	 */
	enterSliceEnd?: (ctx: SliceEndContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.sliceEnd`.
	 * @param ctx the parse tree
	 */
	exitSliceEnd?: (ctx: SliceEndContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.nameSpaceItem`.
	 * @param ctx the parse tree
	 */
	enterNameSpaceItem?: (ctx: NameSpaceItemContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.nameSpaceItem`.
	 * @param ctx the parse tree
	 */
	exitNameSpaceItem?: (ctx: NameSpaceItemContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.templateDefine`.
	 * @param ctx the parse tree
	 */
	enterTemplateDefine?: (ctx: TemplateDefineContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.templateDefine`.
	 * @param ctx the parse tree
	 */
	exitTemplateDefine?: (ctx: TemplateDefineContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.templateDefineItem`.
	 * @param ctx the parse tree
	 */
	enterTemplateDefineItem?: (ctx: TemplateDefineItemContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.templateDefineItem`.
	 * @param ctx the parse tree
	 */
	exitTemplateDefineItem?: (ctx: TemplateDefineItemContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.templateCall`.
	 * @param ctx the parse tree
	 */
	enterTemplateCall?: (ctx: TemplateCallContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.templateCall`.
	 * @param ctx the parse tree
	 */
	exitTemplateCall?: (ctx: TemplateCallContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.lambdaIn`.
	 * @param ctx the parse tree
	 */
	enterLambdaIn?: (ctx: LambdaInContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.lambdaIn`.
	 * @param ctx the parse tree
	 */
	exitLambdaIn?: (ctx: LambdaInContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.pkgAnonymous`.
	 * @param ctx the parse tree
	 */
	enterPkgAnonymous?: (ctx: PkgAnonymousContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.pkgAnonymous`.
	 * @param ctx the parse tree
	 */
	exitPkgAnonymous?: (ctx: PkgAnonymousContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.pkgAnonymousAssign`.
	 * @param ctx the parse tree
	 */
	enterPkgAnonymousAssign?: (ctx: PkgAnonymousAssignContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.pkgAnonymousAssign`.
	 * @param ctx the parse tree
	 */
	exitPkgAnonymousAssign?: (ctx: PkgAnonymousAssignContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.pkgAnonymousAssignElement`.
	 * @param ctx the parse tree
	 */
	enterPkgAnonymousAssignElement?: (ctx: PkgAnonymousAssignElementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.pkgAnonymousAssignElement`.
	 * @param ctx the parse tree
	 */
	exitPkgAnonymousAssignElement?: (ctx: PkgAnonymousAssignElementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.functionExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.functionExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.tupleExpression`.
	 * @param ctx the parse tree
	 */
	enterTupleExpression?: (ctx: TupleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.tupleExpression`.
	 * @param ctx the parse tree
	 */
	exitTupleExpression?: (ctx: TupleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.plusMinus`.
	 * @param ctx the parse tree
	 */
	enterPlusMinus?: (ctx: PlusMinusContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.plusMinus`.
	 * @param ctx the parse tree
	 */
	exitPlusMinus?: (ctx: PlusMinusContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.negate`.
	 * @param ctx the parse tree
	 */
	enterNegate?: (ctx: NegateContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.negate`.
	 * @param ctx the parse tree
	 */
	exitNegate?: (ctx: NegateContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.bitwiseNotExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseNotExpression?: (ctx: BitwiseNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.bitwiseNotExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseNotExpression?: (ctx: BitwiseNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.linq`.
	 * @param ctx the parse tree
	 */
	enterLinq?: (ctx: LinqContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.linq`.
	 * @param ctx the parse tree
	 */
	exitLinq?: (ctx: LinqContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.linqItem`.
	 * @param ctx the parse tree
	 */
	enterLinqItem?: (ctx: LinqItemContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.linqItem`.
	 * @param ctx the parse tree
	 */
	exitLinqItem?: (ctx: LinqItemContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.linqKeyword`.
	 * @param ctx the parse tree
	 */
	enterLinqKeyword?: (ctx: LinqKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.linqKeyword`.
	 * @param ctx the parse tree
	 */
	exitLinqKeyword?: (ctx: LinqKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.linqHeadKeyword`.
	 * @param ctx the parse tree
	 */
	enterLinqHeadKeyword?: (ctx: LinqHeadKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.linqHeadKeyword`.
	 * @param ctx the parse tree
	 */
	exitLinqHeadKeyword?: (ctx: LinqHeadKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.linqBodyKeyword`.
	 * @param ctx the parse tree
	 */
	enterLinqBodyKeyword?: (ctx: LinqBodyKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.linqBodyKeyword`.
	 * @param ctx the parse tree
	 */
	exitLinqBodyKeyword?: (ctx: LinqBodyKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.stringExpressionElement`.
	 * @param ctx the parse tree
	 */
	enterStringExpressionElement?: (ctx: StringExpressionElementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.stringExpressionElement`.
	 * @param ctx the parse tree
	 */
	exitStringExpressionElement?: (ctx: StringExpressionElementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.dataStatement`.
	 * @param ctx the parse tree
	 */
	enterDataStatement?: (ctx: DataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.dataStatement`.
	 * @param ctx the parse tree
	 */
	exitDataStatement?: (ctx: DataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.floatExpr`.
	 * @param ctx the parse tree
	 */
	enterFloatExpr?: (ctx: FloatExprContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.floatExpr`.
	 * @param ctx the parse tree
	 */
	exitFloatExpr?: (ctx: FloatExprContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.integerExpr`.
	 * @param ctx the parse tree
	 */
	enterIntegerExpr?: (ctx: IntegerExprContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.integerExpr`.
	 * @param ctx the parse tree
	 */
	exitIntegerExpr?: (ctx: IntegerExprContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeNotNull`.
	 * @param ctx the parse tree
	 */
	enterTypeNotNull?: (ctx: TypeNotNullContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeNotNull`.
	 * @param ctx the parse tree
	 */
	exitTypeNotNull?: (ctx: TypeNotNullContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeReference`.
	 * @param ctx the parse tree
	 */
	enterTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeReference`.
	 * @param ctx the parse tree
	 */
	exitTypeReference?: (ctx: TypeReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeNullable`.
	 * @param ctx the parse tree
	 */
	enterTypeNullable?: (ctx: TypeNullableContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeNullable`.
	 * @param ctx the parse tree
	 */
	exitTypeNullable?: (ctx: TypeNullableContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeType`.
	 * @param ctx the parse tree
	 */
	enterTypeType?: (ctx: TypeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeType`.
	 * @param ctx the parse tree
	 */
	exitTypeType?: (ctx: TypeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeTuple`.
	 * @param ctx the parse tree
	 */
	enterTypeTuple?: (ctx: TypeTupleContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeTuple`.
	 * @param ctx the parse tree
	 */
	exitTypeTuple?: (ctx: TypeTupleContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeArray`.
	 * @param ctx the parse tree
	 */
	enterTypeArray?: (ctx: TypeArrayContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeArray`.
	 * @param ctx the parse tree
	 */
	exitTypeArray?: (ctx: TypeArrayContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeSet`.
	 * @param ctx the parse tree
	 */
	enterTypeSet?: (ctx: TypeSetContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeSet`.
	 * @param ctx the parse tree
	 */
	exitTypeSet?: (ctx: TypeSetContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeDictionary`.
	 * @param ctx the parse tree
	 */
	enterTypeDictionary?: (ctx: TypeDictionaryContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeDictionary`.
	 * @param ctx the parse tree
	 */
	exitTypeDictionary?: (ctx: TypeDictionaryContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeChannel`.
	 * @param ctx the parse tree
	 */
	enterTypeChannel?: (ctx: TypeChannelContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeChannel`.
	 * @param ctx the parse tree
	 */
	exitTypeChannel?: (ctx: TypeChannelContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typePackage`.
	 * @param ctx the parse tree
	 */
	enterTypePackage?: (ctx: TypePackageContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typePackage`.
	 * @param ctx the parse tree
	 */
	exitTypePackage?: (ctx: TypePackageContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeFunction`.
	 * @param ctx the parse tree
	 */
	enterTypeFunction?: (ctx: TypeFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeFunction`.
	 * @param ctx the parse tree
	 */
	exitTypeFunction?: (ctx: TypeFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeAny`.
	 * @param ctx the parse tree
	 */
	enterTypeAny?: (ctx: TypeAnyContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeAny`.
	 * @param ctx the parse tree
	 */
	exitTypeAny?: (ctx: TypeAnyContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeFunctionParameterClause`.
	 * @param ctx the parse tree
	 */
	enterTypeFunctionParameterClause?: (ctx: TypeFunctionParameterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeFunctionParameterClause`.
	 * @param ctx the parse tree
	 */
	exitTypeFunctionParameterClause?: (ctx: TypeFunctionParameterClauseContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.typeBasic`.
	 * @param ctx the parse tree
	 */
	enterTypeBasic?: (ctx: TypeBasicContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.typeBasic`.
	 * @param ctx the parse tree
	 */
	exitTypeBasic?: (ctx: TypeBasicContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.nilExpr`.
	 * @param ctx the parse tree
	 */
	enterNilExpr?: (ctx: NilExprContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.nilExpr`.
	 * @param ctx the parse tree
	 */
	exitNilExpr?: (ctx: NilExprContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.boolExpr`.
	 * @param ctx the parse tree
	 */
	enterBoolExpr?: (ctx: BoolExprContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.boolExpr`.
	 * @param ctx the parse tree
	 */
	exitBoolExpr?: (ctx: BoolExprContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.judgeType`.
	 * @param ctx the parse tree
	 */
	enterJudgeType?: (ctx: JudgeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.judgeType`.
	 * @param ctx the parse tree
	 */
	exitJudgeType?: (ctx: JudgeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.bitwise`.
	 * @param ctx the parse tree
	 */
	enterBitwise?: (ctx: BitwiseContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.bitwise`.
	 * @param ctx the parse tree
	 */
	exitBitwise?: (ctx: BitwiseContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.bitwiseAnd`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAnd?: (ctx: BitwiseAndContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.bitwiseAnd`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAnd?: (ctx: BitwiseAndContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.bitwiseOr`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOr?: (ctx: BitwiseOrContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.bitwiseOr`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOr?: (ctx: BitwiseOrContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.bitwiseNot`.
	 * @param ctx the parse tree
	 */
	enterBitwiseNot?: (ctx: BitwiseNotContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.bitwiseNot`.
	 * @param ctx the parse tree
	 */
	exitBitwiseNot?: (ctx: BitwiseNotContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.bitwiseXor`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXor?: (ctx: BitwiseXorContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.bitwiseXor`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXor?: (ctx: BitwiseXorContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.bitwiseLeftShift`.
	 * @param ctx the parse tree
	 */
	enterBitwiseLeftShift?: (ctx: BitwiseLeftShiftContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.bitwiseLeftShift`.
	 * @param ctx the parse tree
	 */
	exitBitwiseLeftShift?: (ctx: BitwiseLeftShiftContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.bitwiseRightShift`.
	 * @param ctx the parse tree
	 */
	enterBitwiseRightShift?: (ctx: BitwiseRightShiftContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.bitwiseRightShift`.
	 * @param ctx the parse tree
	 */
	exitBitwiseRightShift?: (ctx: BitwiseRightShiftContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.judge`.
	 * @param ctx the parse tree
	 */
	enterJudge?: (ctx: JudgeContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.judge`.
	 * @param ctx the parse tree
	 */
	exitJudge?: (ctx: JudgeContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.add`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.add`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.mul`.
	 * @param ctx the parse tree
	 */
	enterMul?: (ctx: MulContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.mul`.
	 * @param ctx the parse tree
	 */
	exitMul?: (ctx: MulContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.pow`.
	 * @param ctx the parse tree
	 */
	enterPow?: (ctx: PowContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.pow`.
	 * @param ctx the parse tree
	 */
	exitPow?: (ctx: PowContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.wave`.
	 * @param ctx the parse tree
	 */
	enterWave?: (ctx: WaveContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.wave`.
	 * @param ctx the parse tree
	 */
	exitWave?: (ctx: WaveContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.idItem`.
	 * @param ctx the parse tree
	 */
	enterIdItem?: (ctx: IdItemContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.idItem`.
	 * @param ctx the parse tree
	 */
	exitIdItem?: (ctx: IdItemContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.more`.
	 * @param ctx the parse tree
	 */
	enterMore?: (ctx: MoreContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.more`.
	 * @param ctx the parse tree
	 */
	exitMore?: (ctx: MoreContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.left_brace`.
	 * @param ctx the parse tree
	 */
	enterLeft_brace?: (ctx: Left_braceContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.left_brace`.
	 * @param ctx the parse tree
	 */
	exitLeft_brace?: (ctx: Left_braceContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.right_brace`.
	 * @param ctx the parse tree
	 */
	enterRight_brace?: (ctx: Right_braceContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.right_brace`.
	 * @param ctx the parse tree
	 */
	exitRight_brace?: (ctx: Right_braceContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.left_paren`.
	 * @param ctx the parse tree
	 */
	enterLeft_paren?: (ctx: Left_parenContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.left_paren`.
	 * @param ctx the parse tree
	 */
	exitLeft_paren?: (ctx: Left_parenContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.right_paren`.
	 * @param ctx the parse tree
	 */
	enterRight_paren?: (ctx: Right_parenContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.right_paren`.
	 * @param ctx the parse tree
	 */
	exitRight_paren?: (ctx: Right_parenContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.left_brack`.
	 * @param ctx the parse tree
	 */
	enterLeft_brack?: (ctx: Left_brackContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.left_brack`.
	 * @param ctx the parse tree
	 */
	exitLeft_brack?: (ctx: Left_brackContext) => void;

	/**
	 * Enter a parse tree produced by `LiteParser.right_brack`.
	 * @param ctx the parse tree
	 */
	enterRight_brack?: (ctx: Right_brackContext) => void;
	/**
	 * Exit a parse tree produced by `LiteParser.right_brack`.
	 * @param ctx the parse tree
	 */
	exitRight_brack?: (ctx: Right_brackContext) => void;
}

