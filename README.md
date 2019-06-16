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
|:----------|:-----------:|
| `POST/posts` | 포스트 작성 | 
| `GET/posts` | 포스트 목록 조회 |  
| `GET/posts/:id` | 특정 포스트 조회 |  
| `DELETE/posts/:id` | 특정 포스트 삭제 |  
| `PATCH/posts/:id` | 특정 포스트 업데이트 ( 구현 방식에 따라 put으로도 가능) |
| `POST/posts/:id/comments` | 특정 포스트에 덧글 등록 |
| `GET/posts/:id/cooments`|특정 포스트의 덧글 목록 조회|
|`DELETE/posts/:id/comments/:commentId`|특정 포스트의 특정 덧글 삭제|


##### 컨트롤러 파일 작성
라우트를 작성할 때, posts.get('/', (ctx) => {...}); 와 같이 선언할 수 있음
라우트 처리 함수만 모아 놓은 파일 = 컨트롤러 (백엔드 기능을 구현)
* koa-bodyparser 미들웨어
POST/PUT/PATCH 같은 메서드의 Request Body에 JSON 형식으로 데이터를 넣어 주면, 이를 파싱하여 서버에서 사용할 수 있게 함.


#### 특이사항
http://localhost:4000/api/posts 에 post가 잘 작동하지않음

##### mongoose를 이용한 Mongodb 연동
- mongoose
  Node.js 환경에서 사용하는 MongoDB기반 ODM(Object Data Modeling) 라이브러리/ 데이터베이스 문서들을 자바스크립트 객체처럼 사용할 수 있게 해줌.
- mongodb 문서 지향적 NoSQL 데이터베이스
- 문서 = RDBMS의 record와 비슷한 개념
- 서버 하나에 데이터베이스를 여러 개 가지고 있을 수 있고 각 데이터베이스에는 컬렉션이 여러개 있으며, 컬렉션 내부에는 문서들이 있음. 
- 스키마와 모델이라는 개념이 있음
- 스키마 : 컬렉션에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체
- 모델 : 스키마를 사용하여 만드는 인스턴스, 디비에서 실제 작업을 처리할 수 있는 함수들을 지니고 있는 객체

#### ListPage / PostPage 작성

1. ListPage
<img src="이미지 URL">
