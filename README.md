# 굉장한 스터디

## 커밋 컨벤션

### 메시지 구조

```
type: subject

body

footer
```

#### 1. type

- Create : 파일 생성
- Feat : 새로운 기능을 추가
- Fix : 버그 수정
- Design : CSS 등 사용자 UI 디자인 변경
- !BREAKING CHANGE : 커다란 API 변경
- !HOTFIX : 치명적인 버그 급한 수정
- Style : 코드 수정 없이 코드 포맷 변경, 세미 콜론 누락
- Refactor : 프로덕션 코드 리팩토링
- Comment : 필요한 주석 추가 및 변경
- Docs : 문서 수정
- Test : 테스트 추가, 테스트 리팩토링(비지니스 코드 변경 X)
- Chore : 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(비지니스 코드 변경 X)
- Rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- Remove : 파일을 삭제하는 작업만 수행한 경우

#### 2. footer
```
유형: #이슈 번호, #이슈 번호
```
- Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
- Resolves: 이슈를 해결했을 때 사용
- Ref: 참고할 이슈가 있을 때 사용
- Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)