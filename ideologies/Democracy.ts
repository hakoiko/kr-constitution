import { Party } from '../elements/Party'
import { Person } from '../elements/Person'

export interface Democracy {
  /** 민주주의 사회의 소유권은 시민 모두에게 있습니다.
   * Democracy.owner가 owner의 역할을 하게 만드는것은 Democracy의 function들입니다.
   **/
  owner: Person[] | { [key: string]: Person },
  /** 사회의 대표자. 있는 경우도, 없는 경우도 있습니다 */
  representor?: Person,
  /** 정당. 정당이 없이 직접참여하는 민주주의 제도도 있을 수 있으므로 Optional로 합니다 */
  perties?: { [key: string]: Party }
}
