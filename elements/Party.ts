import { Person } from './Person';

/**
 * 정당법에서 정의하는 기준과 별개로, 민주주의 사회에서 '정당'이 가지는 기본 요소만을 정의합니다.
 */
export interface Party {
  /** 당명 */
  name: string
  /** 당원 */
  member: Person[]
  /** 행동강령  */
  codeOfConduct: string | string[]
}