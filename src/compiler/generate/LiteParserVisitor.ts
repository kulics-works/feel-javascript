// Generated from src/compiler/LiteParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LiteParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LiteParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LiteParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.exportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStatement?: (ctx: ExportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.namespaceSupportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceSupportStatement?: (ctx: NamespaceSupportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeAliasStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAliasStatement?: (ctx: TypeAliasStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeRedefineStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRedefineStatement?: (ctx: TypeRedefineStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.enumStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumStatement?: (ctx: EnumStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.enumSupportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumSupportStatement?: (ctx: EnumSupportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.namespaceVariableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceVariableStatement?: (ctx: NamespaceVariableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.namespaceControlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceControlStatement?: (ctx: NamespaceControlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.namespaceConstantStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceConstantStatement?: (ctx: NamespaceConstantStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.namespaceFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceFunctionStatement?: (ctx: NamespaceFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.packageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageStatement?: (ctx: PackageStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.packageSupportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageSupportStatement?: (ctx: PackageSupportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.includeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeStatement?: (ctx: IncludeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.packageNewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageNewStatement?: (ctx: PackageNewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.packageVariableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageVariableStatement?: (ctx: PackageVariableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.packageControlSubStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageControlSubStatement?: (ctx: PackageControlSubStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.packageEventStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageEventStatement?: (ctx: PackageEventStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.implementStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementStatement?: (ctx: ImplementStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.implementSupportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementSupportStatement?: (ctx: ImplementSupportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.implementFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementFunctionStatement?: (ctx: ImplementFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.implementControlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementControlStatement?: (ctx: ImplementControlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.overrideStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverrideStatement?: (ctx: OverrideStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.overrideSupportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverrideSupportStatement?: (ctx: OverrideSupportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.overrideFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverrideFunctionStatement?: (ctx: OverrideFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.overrideControlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverrideControlStatement?: (ctx: OverrideControlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.protocolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolStatement?: (ctx: ProtocolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.protocolSupportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolSupportStatement?: (ctx: ProtocolSupportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.protocolControlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolControlStatement?: (ctx: ProtocolControlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.protocolControlSubStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolControlSubStatement?: (ctx: ProtocolControlSubStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.protocolFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolFunctionStatement?: (ctx: ProtocolFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.functionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionStatement?: (ctx: FunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.parameterClauseIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterClauseIn?: (ctx: ParameterClauseInContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.parameterClauseOut`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterClauseOut?: (ctx: ParameterClauseOutContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.parameterClauseSelf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterClauseSelf?: (ctx: ParameterClauseSelfContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.functionSupportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSupportStatement?: (ctx: FunctionSupportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.judgeCaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJudgeCaseStatement?: (ctx: JudgeCaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.caseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseStatement?: (ctx: CaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.caseExprStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseExprStatement?: (ctx: CaseExprStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.judgeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJudgeStatement?: (ctx: JudgeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.judgeElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJudgeElseStatement?: (ctx: JudgeElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.judgeIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJudgeIfStatement?: (ctx: JudgeIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.judgeElseIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJudgeElseIfStatement?: (ctx: JudgeElseIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.loopEachStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopEachStatement?: (ctx: LoopEachStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.loopCaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopCaseStatement?: (ctx: LoopCaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.loopInfiniteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopInfiniteStatement?: (ctx: LoopInfiniteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.loopJumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopJumpStatement?: (ctx: LoopJumpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.loopContinueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopContinueStatement?: (ctx: LoopContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.checkStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckStatement?: (ctx: CheckStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.usingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingStatement?: (ctx: UsingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.checkErrorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckErrorStatement?: (ctx: CheckErrorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.checkFinallyStatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckFinallyStatment?: (ctx: CheckFinallyStatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.reportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReportStatement?: (ctx: ReportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.iteratorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIteratorStatement?: (ctx: IteratorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.variableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStatement?: (ctx: VariableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.variableDeclaredStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaredStatement?: (ctx: VariableDeclaredStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.channelAssignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChannelAssignStatement?: (ctx: ChannelAssignStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.assignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStatement?: (ctx: AssignStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.callExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpression?: (ctx: CallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.tuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple?: (ctx: TupleContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.annotationSupport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationSupport?: (ctx: AnnotationSupportContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.annotationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationList?: (ctx: AnnotationListContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.annotationItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationItem?: (ctx: AnnotationItemContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.annotationAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationAssign?: (ctx: AnnotationAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.callFunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallFunc?: (ctx: CallFuncContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.callChannel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallChannel?: (ctx: CallChannelContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.callElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallElement?: (ctx: CallElementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.callPkg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallPkg?: (ctx: CallPkgContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.callNew`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallNew?: (ctx: CallNewContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.getType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetType?: (ctx: GetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeConversion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConversion?: (ctx: TypeConversionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.pkgAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPkgAssign?: (ctx: PkgAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.pkgAssignElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPkgAssignElement?: (ctx: PkgAssignElementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.listAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListAssign?: (ctx: ListAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.setAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAssign?: (ctx: SetAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.dictionaryAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryAssign?: (ctx: DictionaryAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.callAwait`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallAwait?: (ctx: CallAwaitContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet?: (ctx: SetContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.dictionary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionary?: (ctx: DictionaryContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.dictionaryElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryElement?: (ctx: DictionaryElementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.slice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSlice?: (ctx: SliceContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.sliceFull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceFull?: (ctx: SliceFullContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.sliceStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceStart?: (ctx: SliceStartContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.sliceEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceEnd?: (ctx: SliceEndContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.nameSpaceItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameSpaceItem?: (ctx: NameSpaceItemContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.templateDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateDefine?: (ctx: TemplateDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.templateDefineItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateDefineItem?: (ctx: TemplateDefineItemContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.templateCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplateCall?: (ctx: TemplateCallContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.lambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.lambdaIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaIn?: (ctx: LambdaInContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.pkgAnonymous`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPkgAnonymous?: (ctx: PkgAnonymousContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.pkgAnonymousAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPkgAnonymousAssign?: (ctx: PkgAnonymousAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.pkgAnonymousAssignElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPkgAnonymousAssignElement?: (ctx: PkgAnonymousAssignElementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.functionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.tupleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpression?: (ctx: TupleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.plusMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlusMinus?: (ctx: PlusMinusContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.negate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegate?: (ctx: NegateContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.bitwiseNotExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseNotExpression?: (ctx: BitwiseNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.linq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinq?: (ctx: LinqContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.linqItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinqItem?: (ctx: LinqItemContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.linqKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinqKeyword?: (ctx: LinqKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.linqHeadKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinqHeadKeyword?: (ctx: LinqHeadKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.linqBodyKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinqBodyKeyword?: (ctx: LinqBodyKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.stringExpressionElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpressionElement?: (ctx: StringExpressionElementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.dataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStatement?: (ctx: DataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.floatExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatExpr?: (ctx: FloatExprContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.integerExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerExpr?: (ctx: IntegerExprContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeNotNull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNotNull?: (ctx: TypeNotNullContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeReference?: (ctx: TypeReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeNullable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNullable?: (ctx: TypeNullableContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeType?: (ctx: TypeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTuple?: (ctx: TypeTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArray?: (ctx: TypeArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSet?: (ctx: TypeSetContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeDictionary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDictionary?: (ctx: TypeDictionaryContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeChannel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeChannel?: (ctx: TypeChannelContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typePackage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePackage?: (ctx: TypePackageContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFunction?: (ctx: TypeFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeAny`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAny?: (ctx: TypeAnyContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeFunctionParameterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFunctionParameterClause?: (ctx: TypeFunctionParameterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.typeBasic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBasic?: (ctx: TypeBasicContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.nilExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNilExpr?: (ctx: NilExprContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.boolExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpr?: (ctx: BoolExprContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.judgeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJudgeType?: (ctx: JudgeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.bitwise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise?: (ctx: BitwiseContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.bitwiseAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAnd?: (ctx: BitwiseAndContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.bitwiseOr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOr?: (ctx: BitwiseOrContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.bitwiseNot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseNot?: (ctx: BitwiseNotContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.bitwiseXor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseXor?: (ctx: BitwiseXorContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.bitwiseLeftShift`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseLeftShift?: (ctx: BitwiseLeftShiftContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.bitwiseRightShift`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseRightShift?: (ctx: BitwiseRightShiftContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.judge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJudge?: (ctx: JudgeContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.mul`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul?: (ctx: MulContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.pow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPow?: (ctx: PowContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.wave`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWave?: (ctx: WaveContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.idItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdItem?: (ctx: IdItemContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd?: (ctx: EndContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.more`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMore?: (ctx: MoreContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.left_brace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeft_brace?: (ctx: Left_braceContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.right_brace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRight_brace?: (ctx: Right_braceContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.left_paren`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeft_paren?: (ctx: Left_parenContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.right_paren`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRight_paren?: (ctx: Right_parenContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.left_brack`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeft_brack?: (ctx: Left_brackContext) => Result;

	/**
	 * Visit a parse tree produced by `LiteParser.right_brack`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRight_brack?: (ctx: Right_brackContext) => Result;
}

