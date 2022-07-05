# 19. String
## 19-1. String 파헤치기!

이제까지 쌍따옴표("") 안에 텍스트가 들어가면 String형 이라고 배웠습니다.

사실은 지금까지 코드에 홑따옴표도 많이 썼습니다.

쌍따옴표든, 홑따옴표든 모두 String형 값에 사용합니다.

둘 중에 어떤 것을 써야 하는지는, 회사 규정에 따라 다릅니다.

저는 이제까지 홑따옴표를 주로 썼고,

이제까지 다닌 회사에서는 모두 그렇게 코딩 컨벤션(코드작성가이드)을 맞췄습니다.

세계에서 가장 보기좋게 코딩컨벤션을 작성한 곳은 airbnb 입니다.

한 번 가서 눈으로 보세요. 👉  [에어비앤비 코딩컨벤션](https://github.com/airbnb/javascript)

```js
let good = '이것도 맞고';
let better = "이것도 맞습니다";
```

---

## 19-2. 대소문자 바꾸기

String형에서 제공하는 기본 함수들이 많은데 대표적으로 알아서 대소문자를 바꿔주는 함수가 있습니다.

- 👉  [String 함수들 참고](https://www.w3schools.com/jsref/jsref_obj_string.asp)

이런 함수는 언제 필요 할까요? 일단 아래의 결과가 어떤지 `console.log` 로 확인해 봅시다.

```js
console.log('js' === 'js'); // true
console.log('Js' === 'js'); // false
```

결과에서 보듯이 String의 대소문자가 구분됩니다.

웹사이트에 검색기능이 있는 경우 `Js` 라고 검색 했을 때, `J` 가 정확히 대문자인 것만 찾아주는 것이 아니라, 대소문자 구분 없이 `js` 라는 단어가 포함된 모든 컨텐츠를 찾고 싶을 수가 있습니다.

아래와 같이 임의의 String을 작성하고 `toUpperCase` 와 `toLowerCase` 메소드를 호출하여 반환되는 값을 확인해 봅시다.

```js
let lastName = 'Yeri Kim';
let upperLastName = lastName.toUpperCase();
let lowerLastName = lastName.toLowerCase();

console.log(lastName); // Yeri Kim
console.log(upperLastName); // YERI KIM
console.log(lowerLastName); // yeri kim
```

`lastName` 이라는 변수에 String형의 값을 할당하면, `lastName` 변수는 String형의 변수가 됩니다.

그러면 `lastName` 은 String형이 제공하는 모든 메소드를 사용할 수 있게 됩니다.

`toUpperCase` 와 `toLowerCase` 함수는 String에서 제공하는 메소드 입니다.

그리고 `console` 에서 확인한 것과 같이, `lastName` 에 `toUpperCase` 함수를 사용한다고 `lastName` 변수

의 값 자체가 바뀌지는 않았습니다.

`lastName` 는 이전 값을 그대로 갖고 있습니다.

(이 문장이 이해 되려면 코드를 직접 작성해보셔야 합니다!)

---

## 19-3. 문자 길이

배열을 배우는 시간에, 배열의 길이는 `length` 라는 속성으로 알 수 있다고 배웠었죠?

문자인 String형도 `length` 라는 속성으로 길이를 알 수 있습니다.

`length` 는 자주 사용하는 속성 중 하나 입니다.

회원가입을 받을 때 이름에 10자가 넘어갔는지 체크하거나, 한국의 핸드폰 번호는 무조건 10자 아니면 11자 이므로, 사용자가 값을 잘못 입력했는지 체크할 때 유용하게 사용합니다.

다음 예제는 핸드폰 번호(phoneNumber)가 10자리도 아니고, 11자리도 아니면 `alert` 를 보여줍니다.

```js
if (phoneNumber.length !== 10 &&  phoneNumber.length !== 11) {
  alert("폰 번호 제대로 입력하셨나요?");
}
```

함께 코딩 해봅시다.

```js
let name = prompt("성함을 입력해주세요");

if (name.length === 2) {
  alert("외자이시군요! 이름이 이쁘네요.");
} else if (name.length === 1) {
  alert("제대로 입력하셨나요?");
} else if (name.length === 3) {
  alert("멋진 이름입니다.");
}
```

### 참고.

핸드폰 번호는 01012349876 으로, 항상 0으로 시작합니다.

아시다시피 0으로 시작하는 숫자 표현식은 없습니다. (아이스크림 023개 주세요! 라고 하지는 않죠.)

그래서 핸드폰 번호는 숫자로 이루어져 있지만,

문자열로 관리해야 컴퓨터가 첫 숫자인 "0"도 갖고 있게 됩니다.

아래의 결과가 어떤가요?

```js
let phoneNumber = 01012349876;

console.log(phoneNumber);
console.log(phoneNumber.length);
```

이와 같이 `phoneNumber` 는 Number형이며, 앞의 0이 없이 뒷 숫자만 할당되었습니다.

또한, Number형에는 `length` 라는 속성이 존재하지 않습니다.

그렇기 때문에, 핸드폰 번호를 온전히 표시하고 `length` 속성을 이용하려면

아래와 같이 String형으로 저장해야합니다.

```js
let phoneNumber = "01012349876";

console.log(phoneNumber);
console.log(phoneNumber.length);
```

---

## 19-4. 문자열 찾기

```js
let info = "JavaScript는 프로그래밍 언어이다.";
```

위의 설명에 "프로그래밍" 이라는 단어가 포함 됐는지 알고 싶습니다.

`indexOf` 메소드는 문자열에 특정 문자열이 들어있는지 확인하고,

만약 있다면 몇번 째 순서에 해당 문자열이 있는지 알려 줍니다.

해당 문자열이 없다면 -1을 반환합니다.

이렇게 특정 문자열을 찾는 함수가 왜 필요 할까요? 예시를 들어보겠습니다.

댓글에 욕설이 포함되면 달지 못하도록 차단할 때 사용할 수 있습니다.

차단할 단어 모음이 존재한다고 하고,

사용자가 댓글을 입력한 뒤 "댓글 달기"를 누를 때,

차단할 단어 모음 중에 하나라도 매치 되면 댓글을 달지 못하도록 막을 수 있습니다.

```js
let info = "JavaScript는 프로래밍 언어이다.";
let firstChar = info.indexOf("프로래밍"); 

console.log(info, firstChar);

if (firstChar !== -1) { 
  info = info.slice(0, firstChar) + "프로그래밍" + info.slice(firstChar+4, info.length); 
}

console.log(info);
```

위는 "프로래밍" 이라는 오타를 "프로그래밍" 이라고 바꾸어 주는 코드입니다.

코드를 한 줄 한 줄 설명하자면

1. `info` 문구에서 "프로래밍"이 시작되는 `index` 는 12입니다.
2. `if (firstChar !== -1)`
    - `firstChar` 이 -1이 아니면
    - 즉, "프로래밍"이라는 문구가 없지 않다면
    - 즉, "프로래밍"이라는 문구가 있다면
    - "프로래밍" 문구는 12번째에서 시작하므로 `firstChar` 는 12 입니다. 따라서 조건문은 `true`.

    "프로래밍"이라는 오타가 포함되어있으면 `if` 문을 실행합니다.

3. `info.slice(0, firstChar)`
    - `slice` 메소드는 이름 그대로, 텍스트를 잘라주는 함수입니다.
    - 그 구조는 다음과 같습니다.

        ```js
        slice(잘릴 시작위치, 잘릴 끝위치)
        ```

    - 잘릴 시작위치는 0입니다. 잘릴 끝위치는 `firstChar` 로 12 입니다.
    - 그래서 `slice` 메소드는  `info` 문구의 0부터 11번째 까지 잘라서 반환합니다.
    - 잘릴 끝위치가 조금 헷갈리는데, 잘릴 끝위치의 문구는 포함하지 않습니다.
    - 따라서, 12번째의 문자는 포함하지 않습니다. 바로 그 직전에서 끊어줍니다.
    - 지금 `slice` 메소드가 조금 어렵겠지만 일단 `slice` 라는 메소드 있다는 것만 기억하고 넘어가도 좋습니다.

        ```js
        console.log(info.slice(0, firstChar));
        ```

4. `info.slice(firstChar+4, info.length);`
    - 잘릴 시작위치는 16 입니다. (`firstChar` + 4 = 12 + 4 = 16)
    - 잘릴 끝 위치는 22 입니다. (`info.length` = 22)
    - `info` 의 16번째 문자인 "언" 부터 22번째 문자 이전까지 자르게 됩니다.
    - 22번째는 문자가 존재하지 않기 때문에, 그 직전에 끊으니 "."까지 포함하는 문자열로 잘리게 됩니다.

        ```js
        console.log(firstChar+4, info.length);
        ```

위의 예제 모두 직접 작성해서,

한 줄 한 줄 이해하신거 맞으시죠?!!!!!!

&nbsp
&nbsp

# Assignment

>String의 `slice()` 는 자주 사용 되는 문자열 메소드 중 하나 입니다. 
먼저 `slice` 에 대한 설명을 가볍게 읽어봅시다 👉 [slice설명](https://www.w3schools.com/jsref/jsref_slice_string.asp)

### 그 후 sliceCityFromAddress 함수를 구현해 주세요.

- `sliceCityFromAddress` 함수는 `address` 를 인자로 받습니다.
- `address` 는 주소를 나타내는 string 입니다.
- 주어진 주소가 어느 도시 인지를 찾아 해당 주소에서 도시 부분만 삭제한 새로운 주소를 리턴해 주세요.
- 도시는 무조건 "시" 로 끝납니다. 예를 들어, "서울시".
- "도" 와 "시" 는 주소에 한번 밖에 포함되어 있지 않습니다.
- 예를 들어, 다음과 같은 주소가 주어졌다면;

    ```js
    "경기도 성남시 분당구 중앙공원로 53"
    ```

    다음과 같은 값이 리턴되어야 합니다:

    ```js
    "경기도 분당구 중앙공원로 53"
    ```