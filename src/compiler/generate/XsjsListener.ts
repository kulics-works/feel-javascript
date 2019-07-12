// Generated from src/compiler/Xsjs.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `XsjsParser`.
 */
export interface XsjsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `printExpr`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 */
	enterPrintExpr?: (ctx: PrintExprContext) => void;
	/**
	 * Exit a parse tree produced by the `printExpr`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 */
	exitPrintExpr?: (ctx: PrintExprContext) => void;

	/**
	 * Enter a parse tree produced by the `assign`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by the `assign`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by the `blank`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 */
	enterBlank?: (ctx: BlankContext) => void;
	/**
	 * Exit a parse tree produced by the `blank`
	 * labeled alternative in `XsjsParser.stat`.
	 * @param ctx the parse tree
	 */
	exitBlank?: (ctx: BlankContext) => void;

	/**
	 * Enter a parse tree produced by the `MulDiv`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulDiv?: (ctx: MulDivContext) => void;
	/**
	 * Exit a parse tree produced by the `MulDiv`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulDiv?: (ctx: MulDivContext) => void;

	/**
	 * Enter a parse tree produced by the `AddSub`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSub`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddSub?: (ctx: AddSubContext) => void;

	/**
	 * Enter a parse tree produced by the `int`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `int`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `id`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `id`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by the `parens`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParens?: (ctx: ParensContext) => void;
	/**
	 * Exit a parse tree produced by the `parens`
	 * labeled alternative in `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParens?: (ctx: ParensContext) => void;

	/**
	 * Enter a parse tree produced by `XsjsParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `XsjsParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `XsjsParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `XsjsParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `XsjsParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

