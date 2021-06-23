FROM node:14.17.1

# cd랑 비슷한 느낌, 해당 경로에서 명령어를 실행한다.
WORKDIR /app

# Dockerfiler의 위치를 기준으로 package*.json의 파일을 /app/에 복사한다
COPY package*.json /app/

# 이미지 생성 과정에서 실행할 명령어
RUN npm install

# 현재 위치의 모든 파일을 /app에 복사한다.
COPY . /app

# 외부포트 5000과 연결할 준비가 됬다는 내용
EXPOSE 5000

CMD ["npm","start"]