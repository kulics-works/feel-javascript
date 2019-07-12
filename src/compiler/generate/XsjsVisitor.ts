// Generated from src/compiler/Xsjs.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PrintExprContext } from "./XsjsParser";
import { AssignContext } from "./XsjsParser";
import { BlankContext } from "./XsjsParser";
import { MulDivContext } from "./XsjsParser";
import { AddSubContext } from "./XsjsParser";
import { IntContext } from "./XsjsParser";
import { IdContext } from "./XsjsParser";
import { ParensContext } from "./XsjsParser";
import { ProgContext } from "./XsjsParser";
import { StatContext } from "./XsjsParser";
import { ExprContext } from "./XsjsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XsjsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface XsjsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `printExpr`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpr?: (ctx: PrintExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `assign`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `blank`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlank?: (ctx: BlankContext) => Result;

	/**
	 * Visit a parse tree produced by the `MulDiv`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDiv?: (ctx: MulDivContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSub`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSub?: (ctx: AddSubContext) => Result;

	/**
	 * Visit a parse tree produced by the `int`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by the `id`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by the `parens`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;

	/**
	 * Visit a parse tree produced by `XsjsParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `XsjsParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `XsjsParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
}

