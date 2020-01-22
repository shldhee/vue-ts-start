# TypeScript

## typescript 설치

- npm install -g typescript
- tsc helloword.ts

### js 컴파일하지 않고 바로 실행

- npm install -g ts-node
- ts-node helloworld.ts


### 온라인에서 확인

- http://typescriptlang.org/play

## 기본타입

### 논리(Boolean)

``` typescript
let isRun: boolean = false;
```

### 숫자(Number)

- 2진수, 8진수, 10진수, 16진수 모두 지원

``` typescript
let decimal: number = 5;
let hex: number = 0xff;
```

### 문자열(String)

``` typescript
let firstName: string = "김";
let lastName:string = "철수";
```

### 배열(Array)

``` typescript
let list: number[] = [1,2,3]; // 타입 정하고 []
let list: Array<number> = [1,2,3]; // 제네릭 배열형
```

### 튜플(Tuple)

``` typescript
let point: [string, number];
point = ["x",10];
point = [10,"x"]; // Error
```

### 열걸(Enum)

``` typescript
enum Color { Red = 1, Green, Blue };
let color: Color = Color.Green
console.log(color)
```

### 임의(Any)

``` typescript
let sure: any = 1
sure = "이건 문자열"
sure = true
```

### 보이드(Void)

``` typescript
function log(msg): void {
  console.log("LOG : " + msg)
}
```

### 널과 미선언 (null, undefined)

``` typescript
let a: number = null;
```

- 추천하지 않음

### 네버 (Never)

- 절대 발생하지 않을 값의 유형(즉 리턴값이 없는 값)

``` typescript
function error(message: string): never {
  throw new Error(message)
}

function forever(): never {
  while(true) {

  }
}
```

### 객체(Object)

- 객체는 타입으로 정의되지 않는 형이다.

``` typescript
let user: { name: string; age: number; } = { name: '김철수', age: 12};
console.log(user)
```

## 타입 별칭(type alias)

- 타입스크립트에서는 이미 존재하는 타입에 다른 이름을 붙여 복잡한 타입을 간단하게 쓸수 있게 하는 기능(변수 선언 할당이랑 비슷한듯)

``` typescript
type UNIQID = string | null
function getUserID(id: UNIQID) {
  console.log(id)
}

getUserID('asdfjasdoif')
getUserID(null)
getUserID(12)

type USER_TYPE = "TESTER" | "ADMIN";
let userType: USER_TYPE = "TESTER";
```

## 함수(Function)

``` typescript
let point = (x: number, y: number): number {
    return x + y
}

function point1(x: number, y: number): number {
    return x + y
}

console.log(point(1, 5))
console.log(point1(2, 5))

function point2(x: number, y: number = 20): number {
    return x + y
}

console.log(point2(10))

function point3(x: number, y?: number): number {
    if (y) {
        return x + y;
    }
    return x;
}

console.log(point3(3))
console.log(point3(3,10))
```

## 인터페이스(Interface)

- 인터페이스를 통해 타입의 이름을 지정하고 코드 타입을 정의하는 방법


``` typescript
interface Size {
    width: number;
    height: number;
}

interface Label {
    title: string;
    size: Size;
}

function labelPrint(label: Label): void {
    console.log(label)
}

let myLabel = <Label>{
    title: '타입스크립트 도서', size: { width: 20, height: 30}
}

labelPrint(myLabel);


///

interface Config {
    name: string;
    path: string;
    version?: string;
}

interface App {
    fullPath: string;
    version?: string;
}

function applicationInit(config: Config): App {
    let app = { fullPath: config.path + config.name } as App
    if (config.version) {
        app.version = config.version
    }
    return app
}

console.log(applicationInit(<Config>{ path: '/home/', name: 'user' }))
console.log(applicationInit({ path: '/home/', name: 'user', version: '0.0.1'} as Config))
```

- `<Config>` 또는 `as Config`는 타입어설션(Type assertions) 표현식으로 같은 의미이다.

## 클래스(Class)

``` typescript
class Animal {
    name: string;
    legs: number;

    constructor(name: string, legs: number = 4) {
        this.name = name;
        this.legs = legs;
    }

    info(): string {
        return `${this.name} has ${this.legs} legs`;
    }
}

let dog: Animal = new Animal("Happy")
console.log(dog.info());
``` 

### 상속

``` typescript
class Animal {
    name: string;
    legs: number;

    constructor(name: string, legs: number = 4) {
        this.name = name;
        this.legs = legs;
    }

    info(): string {
        return `${this.name} has ${this.legs} legs`;
    }
}

class Dog extends Animal {
    constructor(name: string, legs: number = 4) {
        super(name)   // 
        super() // legs 는 사용가능
    }

    bark(sound: string) {
        return sound + " " + sound
    }
}

let dog: Dog = new Dog('빈희', 4);
console.log(dog.info())
console.log(dog.bark('멍!'))
```