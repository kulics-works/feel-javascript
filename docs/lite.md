## Lite 语法

```

1
id: type
id = value

let id:type
id = value

2
id: type = value

let id:type = value

3
id := value

let id = value
```

# basic types

```
I8 sbyte
I16 short
I32 int
I64 long
U8 byte
U16 ushort
U32 uint
U64 ulong
F32 float
F64 double
Chr char

Num number
Str string
Bool bool
Any object
Nil null
Undefined undefined
```

# string template

```
"this is string" value "end string"
`this is string${value}end string`
```

# operator

```
2 = 1 + 1
0 = 1 - 1
4 = 2 * 2
2 = 4 / 2
1 = 3 % 2
27 = 3 ** 3
3 = 9 // 2
2 = 4 %% 2 // 4log2

a && b a & b
a || b a | b
a ^^ b a ^ b
~~a ~a
a << 1 a << 1
a >> 1 b >> 1

a | b a || b
a & b a && b
~a !a
```

# collection

```
immutArray: [:]I32 = [:]I32{1, 2, 3}

array: []I32 = []I32{1,2,3}
array := {1,2,3}

map: [Str]I32 = [Str]I32{["1"]1, ["2"]2, ["3"]3}
map := {["1"]1, ["2"]2, ["3"]3}
```

# judgement

```
? value {

} value {

} _ {

}

if (value) {

} else if (value) {

} else {

}
```

```
value ? v0 {

} v1, v2, v3 {

} _ {

}

switch (value) {
	case v0:
	break
	case v1:
	case v2:
	case v3:
	break
	default:
	break
}

```

# get type

```
?(value)
typeof value

?(:type)


```

# loop

```
collection @ id {

}

for (let id in collection) {

}


[start <= end, step] @ id {

}

for (let id = start; id <= end; id += step) {

}

@ value {
 	<- @
}

while (value) {
 	break
}

@ {
 	-> @
}

while (true) {
 	continue
}
```

# function

```
id(a: Num, b: Num -> c: Num, d: Num) {
	<- a, b
}
(a, b) := id(1, 2)


function id(a:Num, b:Numb):[Num,Num]{
  	return [a, b]
}

id(fn: (Num->Num) ->) {
	fn(1)
}
id{ a -> 1 }

function id(fn:(a:Num)=>Num){
  	fn(1)
}
id(a => 1)

id(~>) {
  	<~ fn2(<~ fn())
}
```

Result = {
name:string,
type:string,
content:string,
feature:any
}
