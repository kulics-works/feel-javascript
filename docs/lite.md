## Lite 语法

```

1
id type
id = value

let id:type
id = value

2
id type = value

let id:type = value

3
id = value

let id = value
```

# basic types

```
i8 sbyte
i16 short
i32 int
i64 long
u8 byte
u16 ushort
u32 uint
u64 ulong
f32 float
f64 double
chr char

int number
num number
str string
bool bool
any object
nil null
undef undefined
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
immutArray [:]num = [:]num{1, 2, 3}

array []num = []num{1,2,3}
array = {1,2,3}
array.(0) = 2

map []str:num = []str:num{"1":1, "2":2, "3":3}
map = {"1":1, "2":2, "3":3}

set []:num = []:num{:1, :2, :3}
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
typeof[value]()
typeof value
```

# loop

```
id @ collection {

}

for (let id in collection) {

}


id @ start ..<= end : step {

}

for (let id = start; id <= end; id += step) {

}

@ value {
    @..
}

while (value) {
    break
}

@ {
    ..@
}

while (true) {
    continue
}
```

# type convert

```
a Cat = Cat{}
b Dog = a.[Dog]


let a: Cat = new Cat()
let b: Dog = a as Dog
```

# function

```
id(a num, b num -> c num, d num) {
    <- a, b
}
a, b = id(1, 2)

function id(a:number, b:number):[number,number]{
    return [a, b]
}

id(fn (num->num) ->) {
    fn(1)
}
id{ a -> 1 }

function id(fn:(a:number)=>number){
    fn(1)
}
id(a => 1)

id(~>) {
    <~ fn2(<~ fn())
}
```

# struct
```
item[T] -> {
    id num
    name str
}

me item[T] -> {
    get[T](->v item) {
        <- me
    }
    set[T](v item->) {
        ...
    }

    ID(id) num

    ID2() num {
        get {
            <- me.id
        }
        set(v) {
            me.id = v
        }
    }
}

class item<T> {
    id: number
    name: string

    get<T>():item {
        return this
    }

    set<T>(v:item) {
        ...
    }
    get Id():number{
        return this.id
    }
    set Id(Id:number){
        this.id = Id
    }
}
```
