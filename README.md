# Book_report
- 읽은 책들의 목록을 보여줌
- 읽은 책에서 기억하고 싶은 구절을 기록해둠
- 책에 나오는 단어 중, 모르는 단어도 기록
- 책 API를 이용해서 내가 읽은 책의 상세페이지를 누르면 정보를 보여줄 수 있음.

#### 1. 2019-06-04
- 기본환경 설정 및 MongoDB 서버 준비

#### 2.2019-06-08 
- 백엔드 프로그래밍 Node.js의 Koa 프레임워크 사용
| 종류 | 기능 |
|---|:---:|
| POST/posts | 포스트 작성 | 
| GET/posts | 포스트 목록 조회 |  
| GET/posts/:id | 특정 포스트 조회 |  
| DELETE/posts/:id | 특정 포스트 삭제 |  
| PATCH/posts/:id | 특정 포스트 업데이트 ( 구현 방식에 따라 put으로도 가능) |
| POST/posts/:id/comments | 특정 포스트에 덧글 등록 |
| GET/posts/:id/cooments|특정 포스트의 덧글 목록 조회|
|DELETE/posts/:id/comments/:commentId|특정 포스트의 특정 덧글 삭제|
