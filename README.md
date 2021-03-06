# 📖 대한민국 헌법 in TypeScript

법을 Code로 쓸 수 있다면, 법의 애매한 부분을 조금 더 명확하게 정의할 수 있지 않을까 하는 생각이 듭니다.

> AI 판사는 도대체 언제 나오냐?

이런 말이 심심치않게 들립니다. AI 판사가 언제 도입될지. AI 판사를 개발하기 위해 학습시킬 데이터는 과연 올바른 소스일지. 학습 방법은 어떻게 될것인지. AI 판사의 판결을 모두가 납득할 수 있을 것인지. 미래는 어떻게 될지 알수는 없지만, 일단 지금 할 수 있는 것은 그 법을 '코드'로 한번 써보는 작업을 통해서 AI판사의 도래를 촉진할 수 있지 않을까 합니다.

## 법령정보
[국가법령정보센터](https://www.law.go.kr/lsEfInfoP.do?lsiSeq=61603#)의 헌법 전문을 기본 소스로 합니다.

## 대한민국은 민주공화국이다.
```ts
const 대한민국 = 민주공화국 // 민주공화국이 뭔데?
```
대한민국이 만주공화국임을 정의하기 위해서는 먼저 **민주공화국** 이 무엇인지 정의되어야 합니다. 민주공화국이란 단어는, `"민주주의"+ "공화국"` 이므로, 이런 사전 조건들이 미리 정의되어야 합니다. 따라서 이 repository의 대부분의 코드는 **헌법**을 기술하는것이 아닌, 헌법 본문에 사용되는 **단어**들의 의미를 코드를 이용해 정의하는 내용이 대부분이 될 듯 합니다.

## Class vs Object.
```ts
// not bad
class Korea implements Democracy, Republic {
  constructor() {}
}

// great
const Korea: Drmocracy & Republic = {}
```
보다 유연한 형태를 가지는것이 이후 내용을 추가할 떄 뒤탈이 없을듯 하므로 Strict한 타입을 가지는 Object가 되는것이 좋다고 생각됩니다.

## Contribution Guide
아직 코드 제대로 쓰지도 않아서잘 모르겠으나, 모든 종류의 Contribution은 환영합니다.