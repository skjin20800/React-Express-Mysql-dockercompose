# alpine 이미지 받기
FROM alpine:3.10

# node js 받기
RUN apk add --update nodejs

#워크 디렉토리 설정
WORKDIR /app

# Dockerfiler의 위치를 기준으로 package*.json의 파일을 /app/에 복사한다
COPY package*.json /app

# npm 다운로드
RUN apk add --update npm

# 현재 디렉토리의 모든 파일을 /app에 저장
COPY . /app

# 컨테이너 실행시 실행할 명령어
CMD ["npm","start"]
