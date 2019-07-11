type Temp = {
  name: string;
};
declare class xsjsLexer {
  // 声明构造方法
  constructor(
    inputStream: any,
    sourceName: any,
    type: any,
    line: any,
    column: any,
    text: string
  );
  // 声明只读
  readonly text: string;
  // 声明变量
  source: any;
  channelNames: any;

  // 声明函数
  atn(): any;

  // 声明常量
  static readonly EOF: any;
}
