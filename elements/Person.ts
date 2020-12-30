/**
 * 헌법, 주민등록법등 여러 법률과 유엔인권선언을 비롯한 인권 보호 조치와 전혀 무관한,
 * 어느 이데올로기/문화권에서도 '인간'이 가지고 있는 기본적인 타입들만을 정의합니다.
 * 재한, 신분, 직업, 인종등은 개별 문화권과 국가의 법령등에 따라 아얘 없을수도 있습니다.
 * 
 * 신원을 구분하기 위해서라면 개발적으로는 유전자 정보가 들어가야 하지만,
 * 이 repository는 '법률'적으로 개별적 인물 구분하는것이 목적이므로
 * 일반적으로 각국에서 사용되는, 이름 + 성별 + 생년월일의 신원 정보를 자연인의 기본으로 합니다.
 **/

export interface Person {
  /** 이 Person 객체를 지칭하는 이름입니다 */
  name: string
  /** 특정 날짜, 혹은 날짜 불명인 경우도 있습니다. */
  readonly birth: Date | { min: Date, max: Date } | unknown
  /** 신 */
  gender: 'FEMALE' | 'MALE' | unknown
  /** 주어진 날짜를 기준으로 한 ms단위 시간을 리턴합니다.*/
  getAge: (date: Date) => number
}