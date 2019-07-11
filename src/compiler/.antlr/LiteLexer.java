// Generated from /Users/huahua/Documents/lian/react/xsjs/src/compiler/LiteLexer.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LiteLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"LinqFrom", "LinqBy", "LinqSelect", "LinqWhere", "LinqGroup", "LinqInto", 
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
		"TrueLiteral", "FalseLiteral", "UndefinedLiteral", "NumberLiteral", "DIGIT", 
		"TextLiteral", "CharLiteral", "IDPrivate", "IDPublic", "Discard", "Big_Big_Comment", 
		"Big_Comment", "Comment", "New_Line", "WS"
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


	public LiteLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LiteLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2^\u023f\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\3\2\3\2"+
		"\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3"+
		"\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\20\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24"+
		"\3\24\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\30\3\30\3\30\3\31"+
		"\3\31\3\31\3\32\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\35"+
		"\3\35\3\36\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3!\3\"\3\"\3\"\3#\3#\3#\3$"+
		"\3$\3$\3%\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3"+
		".\3/\3/\3\60\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63\3\64\3\64\3\65\3"+
		"\65\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3<\3<\3=\3=\3>\3>\3>\3"+
		"?\3?\3?\3@\3@\3@\3@\3A\3A\3A\3A\3B\3B\3B\3B\3C\3C\3C\3C\3D\3D\3D\3D\3"+
		"E\3E\3E\3E\3F\3F\3F\3F\3G\3G\3G\3G\3H\3H\3H\3H\3I\3I\3I\3I\3J\3J\3J\3"+
		"J\3J\3K\3K\3K\3K\3L\3L\3L\3L\3M\3M\3M\3M\3M\3N\3N\3N\3N\3O\3O\3O\3O\3"+
		"P\3P\3P\3P\3P\3Q\3Q\3Q\3Q\3Q\3Q\3R\3R\3R\3R\3R\3R\3R\3R\3R\3R\3S\6S\u01e1"+
		"\nS\rS\16S\u01e2\3T\3T\3U\3U\3U\3U\7U\u01eb\nU\fU\16U\u01ee\13U\3U\3U"+
		"\3V\3V\3V\3V\3V\3V\7V\u01f8\nV\fV\16V\u01fb\13V\3V\3V\3W\3W\6W\u0201\n"+
		"W\rW\16W\u0202\3X\3X\7X\u0207\nX\fX\16X\u020a\13X\3Y\3Y\3Z\3Z\3Z\3Z\3"+
		"Z\7Z\u0213\nZ\fZ\16Z\u0216\13Z\3Z\3Z\3Z\3Z\3Z\3Z\3[\3[\3[\3[\7[\u0222"+
		"\n[\f[\16[\u0225\13[\3[\3[\3[\3[\3[\3\\\3\\\7\\\u022e\n\\\f\\\16\\\u0231"+
		"\13\\\3\\\3\\\3\\\3\\\3]\3]\3^\6^\u023a\n^\r^\16^\u023b\3^\3^\7\u01ec"+
		"\u01f9\u0214\u0223\u022f\2_\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25"+
		"\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32"+
		"\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a"+
		"\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087"+
		"E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009b"+
		"O\u009dP\u009fQ\u00a1R\u00a3S\u00a5T\u00a7\2\u00a9U\u00abV\u00adW\u00af"+
		"X\u00b1Y\u00b3Z\u00b5[\u00b7\\\u00b9]\u00bb^\3\2\b\3\2\62;\t\2$$^^ddh"+
		"hppttvv\b\2^^ddhhppttvv\6\2\62;C\\aac|\4\2C\\c|\4\2\13\13\"\"\2\u0249"+
		"\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2"+
		"\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2"+
		"\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2"+
		"\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2"+
		"\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3"+
		"\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2"+
		"\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2"+
		"U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3"+
		"\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2"+
		"\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2"+
		"{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085"+
		"\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2"+
		"\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097"+
		"\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2\2\2\u009f\3\2\2"+
		"\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a9\3\2\2\2\2\u00ab"+
		"\3\2\2\2\2\u00ad\3\2\2\2\2\u00af\3\2\2\2\2\u00b1\3\2\2\2\2\u00b3\3\2\2"+
		"\2\2\u00b5\3\2\2\2\2\u00b7\3\2\2\2\2\u00b9\3\2\2\2\2\u00bb\3\2\2\2\3\u00bd"+
		"\3\2\2\2\5\u00c2\3\2\2\2\7\u00c5\3\2\2\2\t\u00cc\3\2\2\2\13\u00d2\3\2"+
		"\2\2\r\u00d8\3\2\2\2\17\u00dd\3\2\2\2\21\u00e5\3\2\2\2\23\u00ea\3\2\2"+
		"\2\25\u00ee\3\2\2\2\27\u00f1\3\2\2\2\31\u00f4\3\2\2\2\33\u00fb\3\2\2\2"+
		"\35\u0105\3\2\2\2\37\u0110\3\2\2\2!\u0113\3\2\2\2#\u0116\3\2\2\2%\u0119"+
		"\3\2\2\2\'\u011c\3\2\2\2)\u011f\3\2\2\2+\u0122\3\2\2\2-\u0125\3\2\2\2"+
		"/\u0128\3\2\2\2\61\u012b\3\2\2\2\63\u012e\3\2\2\2\65\u0131\3\2\2\2\67"+
		"\u0134\3\2\2\29\u0137\3\2\2\2;\u013b\3\2\2\2=\u013e\3\2\2\2?\u0140\3\2"+
		"\2\2A\u0142\3\2\2\2C\u0145\3\2\2\2E\u0148\3\2\2\2G\u014b\3\2\2\2I\u014e"+
		"\3\2\2\2K\u0151\3\2\2\2M\u0153\3\2\2\2O\u0155\3\2\2\2Q\u0157\3\2\2\2S"+
		"\u0159\3\2\2\2U\u015b\3\2\2\2W\u015d\3\2\2\2Y\u015f\3\2\2\2[\u0161\3\2"+
		"\2\2]\u0163\3\2\2\2_\u0165\3\2\2\2a\u0168\3\2\2\2c\u016a\3\2\2\2e\u016c"+
		"\3\2\2\2g\u016e\3\2\2\2i\u0170\3\2\2\2k\u0172\3\2\2\2m\u0174\3\2\2\2o"+
		"\u0176\3\2\2\2q\u0178\3\2\2\2s\u017a\3\2\2\2u\u017c\3\2\2\2w\u017e\3\2"+
		"\2\2y\u0180\3\2\2\2{\u0182\3\2\2\2}\u0185\3\2\2\2\177\u0188\3\2\2\2\u0081"+
		"\u018c\3\2\2\2\u0083\u0190\3\2\2\2\u0085\u0194\3\2\2\2\u0087\u0198\3\2"+
		"\2\2\u0089\u019c\3\2\2\2\u008b\u01a0\3\2\2\2\u008d\u01a4\3\2\2\2\u008f"+
		"\u01a8\3\2\2\2\u0091\u01ac\3\2\2\2\u0093\u01b0\3\2\2\2\u0095\u01b5\3\2"+
		"\2\2\u0097\u01b9\3\2\2\2\u0099\u01bd\3\2\2\2\u009b\u01c2\3\2\2\2\u009d"+
		"\u01c6\3\2\2\2\u009f\u01ca\3\2\2\2\u00a1\u01cf\3\2\2\2\u00a3\u01d5\3\2"+
		"\2\2\u00a5\u01e0\3\2\2\2\u00a7\u01e4\3\2\2\2\u00a9\u01e6\3\2\2\2\u00ab"+
		"\u01f1\3\2\2\2\u00ad\u01fe\3\2\2\2\u00af\u0204\3\2\2\2\u00b1\u020b\3\2"+
		"\2\2\u00b3\u020d\3\2\2\2\u00b5\u021d\3\2\2\2\u00b7\u022b\3\2\2\2\u00b9"+
		"\u0236\3\2\2\2\u00bb\u0239\3\2\2\2\u00bd\u00be\7h\2\2\u00be\u00bf\7t\2"+
		"\2\u00bf\u00c0\7q\2\2\u00c0\u00c1\7o\2\2\u00c1\4\3\2\2\2\u00c2\u00c3\7"+
		"d\2\2\u00c3\u00c4\7{\2\2\u00c4\6\3\2\2\2\u00c5\u00c6\7u\2\2\u00c6\u00c7"+
		"\7g\2\2\u00c7\u00c8\7n\2\2\u00c8\u00c9\7g\2\2\u00c9\u00ca\7e\2\2\u00ca"+
		"\u00cb\7v\2\2\u00cb\b\3\2\2\2\u00cc\u00cd\7y\2\2\u00cd\u00ce\7j\2\2\u00ce"+
		"\u00cf\7g\2\2\u00cf\u00d0\7t\2\2\u00d0\u00d1\7g\2\2\u00d1\n\3\2\2\2\u00d2"+
		"\u00d3\7i\2\2\u00d3\u00d4\7t\2\2\u00d4\u00d5\7q\2\2\u00d5\u00d6\7w\2\2"+
		"\u00d6\u00d7\7r\2\2\u00d7\f\3\2\2\2\u00d8\u00d9\7k\2\2\u00d9\u00da\7p"+
		"\2\2\u00da\u00db\7v\2\2\u00db\u00dc\7q\2\2\u00dc\16\3\2\2\2\u00dd\u00de"+
		"\7q\2\2\u00de\u00df\7t\2\2\u00df\u00e0\7f\2\2\u00e0\u00e1\7g\2\2\u00e1"+
		"\u00e2\7t\2\2\u00e2\u00e3\7d\2\2\u00e3\u00e4\7{\2\2\u00e4\20\3\2\2\2\u00e5"+
		"\u00e6\7l\2\2\u00e6\u00e7\7q\2\2\u00e7\u00e8\7k\2\2\u00e8\u00e9\7p\2\2"+
		"\u00e9\22\3\2\2\2\u00ea\u00eb\7n\2\2\u00eb\u00ec\7g\2\2\u00ec\u00ed\7"+
		"v\2\2\u00ed\24\3\2\2\2\u00ee\u00ef\7k\2\2\u00ef\u00f0\7p\2\2\u00f0\26"+
		"\3\2\2\2\u00f1\u00f2\7q\2\2\u00f2\u00f3\7p\2\2\u00f3\30\3\2\2\2\u00f4"+
		"\u00f5\7g\2\2\u00f5\u00f6\7s\2\2\u00f6\u00f7\7w\2\2\u00f7\u00f8\7c\2\2"+
		"\u00f8\u00f9\7n\2\2\u00f9\u00fa\7u\2\2\u00fa\32\3\2\2\2\u00fb\u00fc\7"+
		"c\2\2\u00fc\u00fd\7u\2\2\u00fd\u00fe\7e\2\2\u00fe\u00ff\7g\2\2\u00ff\u0100"+
		"\7p\2\2\u0100\u0101\7f\2\2\u0101\u0102\7k\2\2\u0102\u0103\7p\2\2\u0103"+
		"\u0104\7i\2\2\u0104\34\3\2\2\2\u0105\u0106\7f\2\2\u0106\u0107\7g\2\2\u0107"+
		"\u0108\7u\2\2\u0108\u0109\7e\2\2\u0109\u010a\7g\2\2\u010a\u010b\7p\2\2"+
		"\u010b\u010c\7f\2\2\u010c\u010d\7k\2\2\u010d\u010e\7p\2\2\u010e\u010f"+
		"\7i\2\2\u010f\36\3\2\2\2\u0110\u0111\7,\2\2\u0111\u0112\7,\2\2\u0112 "+
		"\3\2\2\2\u0113\u0114\7\61\2\2\u0114\u0115\7\61\2\2\u0115\"\3\2\2\2\u0116"+
		"\u0117\7\'\2\2\u0117\u0118\7\'\2\2\u0118$\3\2\2\2\u0119\u011a\7-\2\2\u011a"+
		"\u011b\7?\2\2\u011b&\3\2\2\2\u011c\u011d\7/\2\2\u011d\u011e\7?\2\2\u011e"+
		"(\3\2\2\2\u011f\u0120\7,\2\2\u0120\u0121\7?\2\2\u0121*\3\2\2\2\u0122\u0123"+
		"\7\61\2\2\u0123\u0124\7?\2\2\u0124,\3\2\2\2\u0125\u0126\7\'\2\2\u0126"+
		"\u0127\7?\2\2\u0127.\3\2\2\2\u0128\u0129\7<\2\2\u0129\u012a\7?\2\2\u012a"+
		"\60\3\2\2\2\u012b\u012c\7?\2\2\u012c\u012d\7?\2\2\u012d\62\3\2\2\2\u012e"+
		"\u012f\7>\2\2\u012f\u0130\7?\2\2\u0130\64\3\2\2\2\u0131\u0132\7@\2\2\u0132"+
		"\u0133\7?\2\2\u0133\66\3\2\2\2\u0134\u0135\7@\2\2\u0135\u0136\7>\2\2\u0136"+
		"8\3\2\2\2\u0137\u0138\7\60\2\2\u0138\u0139\7\60\2\2\u0139\u013a\7\60\2"+
		"\2\u013a:\3\2\2\2\u013b\u013c\7\60\2\2\u013c\u013d\7\60\2\2\u013d<\3\2"+
		"\2\2\u013e\u013f\7\60\2\2\u013f>\3\2\2\2\u0140\u0141\7.\2\2\u0141@\3\2"+
		"\2\2\u0142\u0143\7?\2\2\u0143\u0144\7@\2\2\u0144B\3\2\2\2\u0145\u0146"+
		"\7/\2\2\u0146\u0147\7@\2\2\u0147D\3\2\2\2\u0148\u0149\7>\2\2\u0149\u014a"+
		"\7/\2\2\u014aF\3\2\2\2\u014b\u014c\7\u0080\2\2\u014c\u014d\7@\2\2\u014d"+
		"H\3\2\2\2\u014e\u014f\7>\2\2\u014f\u0150\7\u0080\2\2\u0150J\3\2\2\2\u0151"+
		"\u0152\7?\2\2\u0152L\3\2\2\2\u0153\u0154\7>\2\2\u0154N\3\2\2\2\u0155\u0156"+
		"\7@\2\2\u0156P\3\2\2\2\u0157\u0158\7=\2\2\u0158R\3\2\2\2\u0159\u015a\7"+
		"*\2\2\u015aT\3\2\2\2\u015b\u015c\7+\2\2\u015cV\3\2\2\2\u015d\u015e\7}"+
		"\2\2\u015eX\3\2\2\2\u015f\u0160\7\177\2\2\u0160Z\3\2\2\2\u0161\u0162\7"+
		"]\2\2\u0162\\\3\2\2\2\u0163\u0164\7_\2\2\u0164^\3\2\2\2\u0165\u0166\7"+
		"<\2\2\u0166\u0167\7<\2\2\u0167`\3\2\2\2\u0168\u0169\7<\2\2\u0169b\3\2"+
		"\2\2\u016a\u016b\7A\2\2\u016bd\3\2\2\2\u016c\u016d\7B\2\2\u016df\3\2\2"+
		"\2\u016e\u016f\7#\2\2\u016fh\3\2\2\2\u0170\u0171\7\u0080\2\2\u0171j\3"+
		"\2\2\2\u0172\u0173\7-\2\2\u0173l\3\2\2\2\u0174\u0175\7/\2\2\u0175n\3\2"+
		"\2\2\u0176\u0177\7,\2\2\u0177p\3\2\2\2\u0178\u0179\7\61\2\2\u0179r\3\2"+
		"\2\2\u017a\u017b\7\'\2\2\u017bt\3\2\2\2\u017c\u017d\7^\2\2\u017dv\3\2"+
		"\2\2\u017e\u017f\7(\2\2\u017fx\3\2\2\2\u0180\u0181\7~\2\2\u0181z\3\2\2"+
		"\2\u0182\u0183\7K\2\2\u0183\u0184\7:\2\2\u0184|\3\2\2\2\u0185\u0186\7"+
		"W\2\2\u0186\u0187\7:\2\2\u0187~\3\2\2\2\u0188\u0189\7K\2\2\u0189\u018a"+
		"\7\63\2\2\u018a\u018b\78\2\2\u018b\u0080\3\2\2\2\u018c\u018d\7W\2\2\u018d"+
		"\u018e\7\63\2\2\u018e\u018f\78\2\2\u018f\u0082\3\2\2\2\u0190\u0191\7K"+
		"\2\2\u0191\u0192\7\65\2\2\u0192\u0193\7\64\2\2\u0193\u0084\3\2\2\2\u0194"+
		"\u0195\7W\2\2\u0195\u0196\7\65\2\2\u0196\u0197\7\64\2\2\u0197\u0086\3"+
		"\2\2\2\u0198\u0199\7K\2\2\u0199\u019a\78\2\2\u019a\u019b\7\66\2\2\u019b"+
		"\u0088\3\2\2\2\u019c\u019d\7W\2\2\u019d\u019e\78\2\2\u019e\u019f\7\66"+
		"\2\2\u019f\u008a\3\2\2\2\u01a0\u01a1\7H\2\2\u01a1\u01a2\7\65\2\2\u01a2"+
		"\u01a3\7\64\2\2\u01a3\u008c\3\2\2\2\u01a4\u01a5\7H\2\2\u01a5\u01a6\78"+
		"\2\2\u01a6\u01a7\7\66\2\2\u01a7\u008e\3\2\2\2\u01a8\u01a9\7E\2\2\u01a9"+
		"\u01aa\7j\2\2\u01aa\u01ab\7t\2\2\u01ab\u0090\3\2\2\2\u01ac\u01ad\7U\2"+
		"\2\u01ad\u01ae\7v\2\2\u01ae\u01af\7t\2\2\u01af\u0092\3\2\2\2\u01b0\u01b1"+
		"\7D\2\2\u01b1\u01b2\7q\2\2\u01b2\u01b3\7q\2\2\u01b3\u01b4\7n\2\2\u01b4"+
		"\u0094\3\2\2\2\u01b5\u01b6\7K\2\2\u01b6\u01b7\7p\2\2\u01b7\u01b8\7v\2"+
		"\2\u01b8\u0096\3\2\2\2\u01b9\u01ba\7P\2\2\u01ba\u01bb\7w\2\2\u01bb\u01bc"+
		"\7o\2\2\u01bc\u0098\3\2\2\2\u01bd\u01be\7D\2\2\u01be\u01bf\7{\2\2\u01bf"+
		"\u01c0\7v\2\2\u01c0\u01c1\7g\2\2\u01c1\u009a\3\2\2\2\u01c2\u01c3\7C\2"+
		"\2\u01c3\u01c4\7p\2\2\u01c4\u01c5\7{\2\2\u01c5\u009c\3\2\2\2\u01c6\u01c7"+
		"\7P\2\2\u01c7\u01c8\7k\2\2\u01c8\u01c9\7n\2\2\u01c9\u009e\3\2\2\2\u01ca"+
		"\u01cb\7V\2\2\u01cb\u01cc\7t\2\2\u01cc\u01cd\7w\2\2\u01cd\u01ce\7g\2\2"+
		"\u01ce\u00a0\3\2\2\2\u01cf\u01d0\7H\2\2\u01d0\u01d1\7c\2\2\u01d1\u01d2"+
		"\7n\2\2\u01d2\u01d3\7u\2\2\u01d3\u01d4\7g\2\2\u01d4\u00a2\3\2\2\2\u01d5"+
		"\u01d6\7W\2\2\u01d6\u01d7\7p\2\2\u01d7\u01d8\7f\2\2\u01d8\u01d9\7g\2\2"+
		"\u01d9\u01da\7h\2\2\u01da\u01db\7k\2\2\u01db\u01dc\7p\2\2\u01dc\u01dd"+
		"\7g\2\2\u01dd\u01de\7f\2\2\u01de\u00a4\3\2\2\2\u01df\u01e1\5\u00a7T\2"+
		"\u01e0\u01df\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2\u01e0\3\2\2\2\u01e2\u01e3"+
		"\3\2\2\2\u01e3\u00a6\3\2\2\2\u01e4\u01e5\t\2\2\2\u01e5\u00a8\3\2\2\2\u01e6"+
		"\u01ec\7$\2\2\u01e7\u01e8\7^\2\2\u01e8\u01eb\t\3\2\2\u01e9\u01eb\13\2"+
		"\2\2\u01ea\u01e7\3\2\2\2\u01ea\u01e9\3\2\2\2\u01eb\u01ee\3\2\2\2\u01ec"+
		"\u01ed\3\2\2\2\u01ec\u01ea\3\2\2\2\u01ed\u01ef\3\2\2\2\u01ee\u01ec\3\2"+
		"\2\2\u01ef\u01f0\7$\2\2\u01f0\u00aa\3\2\2\2\u01f1\u01f9\7)\2\2\u01f2\u01f3"+
		"\7^\2\2\u01f3\u01f8\7)\2\2\u01f4\u01f5\7^\2\2\u01f5\u01f8\t\4\2\2\u01f6"+
		"\u01f8\13\2\2\2\u01f7\u01f2\3\2\2\2\u01f7\u01f4\3\2\2\2\u01f7\u01f6\3"+
		"\2\2\2\u01f8\u01fb\3\2\2\2\u01f9\u01fa\3\2\2\2\u01f9\u01f7\3\2\2\2\u01fa"+
		"\u01fc\3\2\2\2\u01fb\u01f9\3\2\2\2\u01fc\u01fd\7)\2\2\u01fd\u00ac\3\2"+
		"\2\2\u01fe\u0200\7a\2\2\u01ff\u0201\t\5\2\2\u0200\u01ff\3\2\2\2\u0201"+
		"\u0202\3\2\2\2\u0202\u0200\3\2\2\2\u0202\u0203\3\2\2\2\u0203\u00ae\3\2"+
		"\2\2\u0204\u0208\t\6\2\2\u0205\u0207\t\5\2\2\u0206\u0205\3\2\2\2\u0207"+
		"\u020a\3\2\2\2\u0208\u0206\3\2\2\2\u0208\u0209\3\2\2\2\u0209\u00b0\3\2"+
		"\2\2\u020a\u0208\3\2\2\2\u020b\u020c\7a\2\2\u020c\u00b2\3\2\2\2\u020d"+
		"\u020e\7%\2\2\u020e\u020f\7%\2\2\u020f\u0210\7%\2\2\u0210\u0214\3\2\2"+
		"\2\u0211\u0213\13\2\2\2\u0212\u0211\3\2\2\2\u0213\u0216\3\2\2\2\u0214"+
		"\u0215\3\2\2\2\u0214\u0212\3\2\2\2\u0215\u0217\3\2\2\2\u0216\u0214\3\2"+
		"\2\2\u0217\u0218\7%\2\2\u0218\u0219\7%\2\2\u0219\u021a\7%\2\2\u021a\u021b"+
		"\3\2\2\2\u021b\u021c\bZ\2\2\u021c\u00b4\3\2\2\2\u021d\u021e\7%\2\2\u021e"+
		"\u021f\7%\2\2\u021f\u0223\3\2\2\2\u0220\u0222\13\2\2\2\u0221\u0220\3\2"+
		"\2\2\u0222\u0225\3\2\2\2\u0223\u0224\3\2\2\2\u0223\u0221\3\2\2\2\u0224"+
		"\u0226\3\2\2\2\u0225\u0223\3\2\2\2\u0226\u0227\7%\2\2\u0227\u0228\7%\2"+
		"\2\u0228\u0229\3\2\2\2\u0229\u022a\b[\2\2\u022a\u00b6\3\2\2\2\u022b\u022f"+
		"\7%\2\2\u022c\u022e\13\2\2\2\u022d\u022c\3\2\2\2\u022e\u0231\3\2\2\2\u022f"+
		"\u0230\3\2\2\2\u022f\u022d\3\2\2\2\u0230\u0232\3\2\2\2\u0231\u022f\3\2"+
		"\2\2\u0232\u0233\7%\2\2\u0233\u0234\3\2\2\2\u0234\u0235\b\\\2\2\u0235"+
		"\u00b8\3\2\2\2\u0236\u0237\7\f\2\2\u0237\u00ba\3\2\2\2\u0238\u023a\t\7"+
		"\2\2\u0239\u0238\3\2\2\2\u023a\u023b\3\2\2\2\u023b\u0239\3\2\2\2\u023b"+
		"\u023c\3\2\2\2\u023c\u023d\3\2\2\2\u023d\u023e\b^\2\2\u023e\u00bc\3\2"+
		"\2\2\16\2\u01e2\u01ea\u01ec\u01f7\u01f9\u0202\u0208\u0214\u0223\u022f"+
		"\u023b\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}