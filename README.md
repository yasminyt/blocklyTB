# visual verilog 分析

## Port Declaration（端口声明） ❌
+ 创建模块，以及声明参数：`module ModuleName(varNames);`
  
+ 声明 input 变量：`input VarName;`

+ 声明 output 变量：`output VarName;`

+ 声明 wire 变量：`wire VarName;`

+ 声明 reg 变量：`reg VarName;`

+ 声明 inout 变量：`inout VarName;`

## Dynamic Variables（动态变量）
+ 创建动态变量，用户只需在弹出框中输入 变量名，
  + 赋值、调用、修改值
  
## Gate level1（门电路）❌

## Behavioral（行为）
+ "Execute at t=0, do..." --- `initial begin ... end`

+ "Execute the following all at t=0, do... " --- `initial fork ... join`

+ "Always at... do..." --- `always @ (...) begin ... end`
  + `always @ (...)` 括号中的内容的形式较多，先不做过多考虑

+ "Always delay ... " --- `always #`

+ "... and ..." --- `0 and 0` 
  + **（Logic Operators 中也有长得一模一样的块，只是解析出来的内容不同，一个是文字一个是符号）** 
  + 👉 只提供 or 操作，并且解析仍为 `or`
  + 👉 参考 if 块中添加 else 的操作，如此来提供 or 块
  
+ "set ... to ..." --- `... <= ...;` 
  + **（非阻塞赋值，但与 Dynamic Variables 中的赋值块相似）**
  + 👉 修改块的文字表达："non-blocking set ... to ..."

## Data Flow（数据流）👉 修改标题：Assignment（赋值）
+ "Assign value（有下拉可选择变量，包括用户自己定义的）..." --- `assign Params = value;`

## Conditions（if条件语句）
+ 提供了多种 `if` 条件句的 block，对应 `if...else...` 条件句
+ 三元表达式："test...if true...if else..." --- `(...) ? X : X;`

## Logic Operations（逻辑操作）
+ "not" --- 取反操作 `!value;`
+ "true/false" ---  真假值：`1/0`
+ 逻辑运算："==/!=/</<=/>/>="
+ 按位 "与/或" 操作：`0 & 0`、`0 | 0`
+ "null": `X` ❌

## Bitwise Operators（位宽操作）（源代码有bug）❌

## Operators（操作）
+ "加减乘除求余""操作
+ "字符串" 👉 移到 Values 项
+ "Select bit ... From variable ..."：从某个变量中选择某一位 `a[2]`
+ **"Rising edge of ..."：上升沿 `posedge ...;`**   👉 修改右连接的内容为变量下拉选择
+ **"Falling edge of ..."：下降沿 `negedge ...;`**  👉 修改右连接的内容为变量下拉选择
+ **"... concatinated with ..." --- `{ , }`**（拼接操作符）

## Values（预设的一些常用值）
+ "0"
+ "1"
+ "Z"
+ "X"

## Numbers（进制转换）
+ "数字块"：直接提供需要转换的数字块（但可以考虑直接给添加对应的块，用户直接输入数字）
+ "十进制转二进制"，如 "Decimal to binary of 4" --- `3'b100`
+ "十进制转十六进制"，如 "Decimal to Hexadecimal of 0" --- `1'h0`
+ "十进制转八进制"，如 "Decimal to Octal of 0" --- `1'o0`
+ 以上三种进制的转换均提供了三种 block 的连接方式：上下连接 和 作为结果的连接

## Loops（循环）
+ "Execute forever do ..." --- `forever begin ... end`
+ "attach number of repetition ... do ..." --- `repeat () begin ... end` 👉 修改块的内容，使用 blockly 原生的 repeat
+ "while ... do ..." --- `while () begin ... end`
// 添加 for 循环 👉 使用 blockly 原生的 for
// verilog 中使用 disable + label 的方式来跳出循环，先不做考虑

## Simulation1（仿真1）
+ 创建用于仿真的模块名：`module ModuleName();`  ❌
+ 声明仿真的输入端口：`reg VarName;`  👉 修改块的内容：register (VarName) with (bits) bits
+ 声明仿真的输出端口：`wire VarName;` 👉 修改块的内容：wire (VarName) with (bits) bits
+ 结束：`endmodule`    （🤔，是系统加好，还是由用户加）

## Simulation2（仿真2——几个系统函数）👉 更改目录：System Functions
+ "Print ..." --- `$display("...");`
+ "Monitor variables ..." --- `$monitor( variables );`
+ "at time = ..." --- `#1` **延时语句**（调整该延时语句所在的目录）
+ "Finish simulation" --- `$finish;`
// 在保留原有的 `$display/$monitor/$finish` 的基础上，再添加其它常用的，并重新考虑参数各函数/任务的参数问题

