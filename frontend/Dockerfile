# docker 빌드 이미지로 nginx 넣기

# FROM alpine:3.10
# # root 에 app 폴더를 생성
# RUN mkdir /app
# # work dir 고정
# WORKDIR /app
# # work dir 에 build 폴더 생성 /app/build
# RUN mkdir /app/build

# # host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
# ADD ./build ./build






#--------- # # alpine 이미지 받기
FROM alpine:3.10

# # node js 받기
RUN apk add --update nodejs

# #워크 디렉토리 설정
WORKDIR /app

# # Dockerfiler의 위치를 기준으로 package*.json의 파일을 /app/에 복사한다
COPY package*.json /app/

# # npm 다운로드
RUN apk add --update npm

# # 현재 디렉토리의 모든 파일을 /app에 저장
COPY . /app/

EXPOSE 3000

# # 컨테이너 실행시 실행할 명령어
CMD ["npm","start"]

