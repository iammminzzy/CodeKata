# 30. object (3)

## 30-1. 객체의 키를 변수로 접근하기

Object 두번째 강의에서, 객체의 키를 사용하는 여러 방법을 배웠습니다. 이 방법을 사용하면 객체의 특정 키의 값을 가져오는것도 가능하지만, 반대로 객체에 특정 키를 만들고 값을 할당하는것도 가능합니다! information 이라는 객체 하나를 만들었습니다.

```js
const information = {
  name: '김개발'
}
```

여기에 키 하나를 생성하고, 그 키에 값을 할당해주려고 합니다. 그런데 키와 값을 변수를 통해 받아온다면 어떻게 해야할까요?

```js
const verb = 'developes'
const project = 'facebook'
```

`verb`의 값을 키로 사용해야 하고, `project`의 값을 그 키의 값으로 사용한다고 했을때

```js
information[verb] = project // [A]
information.developes = 'facebook' // [B]
```

A와 같이 할당이 가능합니다. B의 방식으로도 할당이 가능할 수도 있겠지만, 이 경우 키와 값은 항상 정해져 있게 됩니다. 하지만 A와 같은 방법은 변수 `verb`와 `project`가 가지는 값에 따라 다른 키와 다른 값을 가지는게 가능해집니다.

---

## 30-2. 객체 순회하기

앞선 강의에서 객체는 순서가 없고 키를 통해서만 접근해야 한다고 배웠습니다. 하지만 여러가지 이유로 객체에 있는 모든 키에 한번씩 접근해야하는 코드를 써야한다면 어떻게 해야할까요? 다행히도 객체도 배열처럼 순회가 가능합니다!

다만 배열과 다르게 명확하게 정해진 순서가 없기 때문에, 어떤 순서에 따라 객체의 키에 접근하게 될지 알 순 없습니다. 때문에 객체의 순회는 "순서가 보장되지 않은 순회" 라고 부릅니다. 배열을 순회할때 다음과 같은 `for` 문을 사용했었죠?

```js
const arr = ['coconut', 'banana', 'pepper', 'coriander']
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```

이런 반복문은 배열이 `length` 라는 키를 가지고 있고, 인덱스를 통해 각 배열요소에 접근할수 있었기 때문인데요. 객체는 `length` 키가 따로 주어져있지 않고, 인덱스도 없기 때문에 이런식의 반복문은 불가능합니다. 대신 크게 두가지의 방법으로 객체의 반복문 작성이 가능합니다!

---

## 30-3. Object.keys()

`Object.keys` 메소드는 어떤 객체가 가지고 있는 키들의 목록을 배열로 리턴하는 메소드입니다. 객체의 내장 메소드가 아니라 객체 생성자인 `Object` 가 직접 가지고 있는 메소드입니다. 사용법은 다음과 같습니다.

```js
const obj = {
  name: 'melon',
  weight: 4350,
  price: 16500,
  isFresh: true
}

Object.keys(obj) // ['name', 'weight', 'price', 'isFresh']
```

`Object.keys` 메소드가 리턴하는 값은 배열이기 때문에 이걸로 우리가 반복문을 사용할 수 있습니다!

```js
const keys = Object.keys(obj) // ['name', 'weight', 'price', 'isFresh']

for (let i = 0; i < keys.length; i++) {
  const key = keys[i] // 각각의 키
  const value = obj[key] // 각각의 키에 해당하는 각각의 값
  console.log(value)
}
```

새로운 ES6 문법에서는 `Object.keys` 외에도 마찬가지로 `Object`생성자의 메소드인 `Object.values`, `Object.entries` 와 같은 자매품들이 추가되었습니다. Object.values 는 객체의 키가 아닌 값으로 이루어진 배열을 리턴합니다. Object.entries 는 객체의 키와 값의 쌍으로 이루어진 길이 2짜리 배열로 이루어진, 배열을 리턴합니다. 각 배열에서 인덱스 [0]의 값은 각각의 키를, 인덱스 [1]의 값은 해당 키에 해당하는 값을 가지게 됩니다.

```js
const values = Object.values(obj)
// values === ['melon', 4350, 16500, true]

const entries = Object.entries(obj)

/*
entries === [
  ['name', 'melon'],
  ['weight', 4350],
  ['price', 16500],
  ['isFresh', true]
]
*/
```

Object.entries가 조금 복잡해보이긴 하지만, Object.keys, Object.values, Object.entries 세가지 중에서 제일 유용하게 쓰입니다. 꼭 알아두세요.

---

## 30-4. for-in

객체를 순회하는 두번째 방법은 `for-in` 문입니다. 반복문인 `for`문과 같은 종류의 문법이지만, 객체와 배열을 위해 특별히 존재하는, ES6 에서 추가된 문법입니다. 이건 객체 순회 외에도, 일반적인 배열을 순회할때도 아주 유용할 수 있는데요.

```js
const arr = ['coconut', 'banana', 'pepper', 'coriander']

for (let i = 0; i < arr.length; i ++) {
  console.log(i)
  console.log(arr[i])
}
```

앞서 예시로 등장했었던 배열의 반복문입니다. `for`문을 그동안 많이 써본 분들이라면, 배열에 대한 `for`문 선언시 쓰는 `for(let i = 0; i < arr.length; i ++)` 이런 문법이 아주 자주 사용되는 문법이라는걸 알고계실텐데요. 이걸 간단하게 축약한 문법이 바로 다음과 같습니다.

```js
for (let i in arr) {
  console.log(i)
  console.log(arr[i])
}
```

`i`를 0으로 초기화하고, 배열의 길이와 비교하고, `i`를 1씩 증가시키는 등의 코드를 생략할수 있게 만든 ES6 문법입니다. 이 `for-in` 문은 인덱스의 값으로 무엇을 할당하고, 반복문이 몇번 돌아야 할 지를 자바스크립트 엔진 내부에서 자동으로 결정하게 됩니다.

`for-in` 문은 배열뿐 아니라 객체에서도 작동하도록 만들어졌는데요.

```js
const obj = {
  name: 'melon',
  weight: 4350,
  price: 16500,
  isFresh: true
}

for (let key in obj) {
  const value = obj[key]

  console.log(key)
  console.log(value)
}
```

이렇게 객체를 가지고 `for-in` 문을 사용하면, `for-in` 문의 인덱스에 해당하는 변수가, 숫자가 아닌 객체의 각각의 키에 해당하는 문자열을 할당받게 됩니다.

&nbsp
&nbsp

# Assignment

### 아래 설명을 읽고 `getExamResult` 함수를 구현하세요.

인자 `scores` 는 다음과 같은 객체입니다. 객체의 요소의 갯수 및 키의 이름들은 달라질 수 있습니다. 객체의 값은 다음 9가지 문자열 중에서 하나를 가지고 있습니다.

- 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'

```js
{
  '생활속의회계': 'C',
  '논리적글쓰기': 'B',
  '독일문화의이해': 'B+',
  '기초수학': 'D+',
  '영어회화': 'C+',
  '인지발달심리학': 'A+',
}
```

인자 `requiredClasses` 는 다음과 같이 문자열로 된 배열입니다.

```js
['영어회화', '기초수학', '공학수학', '컴퓨터과학개론']
```

다음 조건을 만족하는 객체를 리턴하도록 함수를 구현해주세요.

1. `scores` 객체가 가지고 있는 키들은 새로운 객체에 포함되어야 합니다. 단, 그 값들은 다음 원리에 따라 숫자로 바뀌어 할당되어야 합니다.
    - A+ => 4.5
    - A => 4
    - B+ => 3.5
    - B => 3
    - C+ => 2.5
    - C => 2
    - D+ => 1.5
    - D => 1
    - F => 0
2. `requiredClasses` 배열의 요소로는 존재하지만, `scores`의 키로는 존재하지 않는 항목이 있다면, 해당 요소는 새로운 객체의 키가 되고, 값으로 0을 가져야 합니다. 위에서 예시로 묘사된 객체와 배열이 인자로 들어왔다면, 다음과 같은 객체과 리턴됩니다. 요소간 순서는 다를수 있지만, 채점에 무관합니다.

    ```js
    {
      '생활속의회계': 2,
      '논리적글쓰기': 3,
      '독일문화의이해': 3.5,
      '기초수학': 1.5,
      '영어회화': 2.5,
      '인지발달심리학': 4.5,
      '공학수학': 0,
      '컴퓨터과학개론': 0,
    }
    ```