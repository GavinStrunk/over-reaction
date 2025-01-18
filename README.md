# Over-Reaction
This repo contains personal projects and notes for learning Typescript with React. 

## Typescript
Typescript is a superset of Javascript that adds static typing to help prevent coding mistakes. 

## Getting Setup
Start by installing Node.js and npm. The Node Package Manager (npm) is bundled with Node.js and can be installed from the official website.
Next, I installed typescript with:
```shell
wget -q -O- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
source ~/.bashrc
nvm --version
nvm install node
npm install -g npm@11.0.0
npm install -g typescript
```
I install version v22.13.0 of Node and 11.0.0 of npm.

## Create New Project
```shell
npm create vite@latest
cd <project-name>
npm install
npm run dev
```

## Deploy an App
I'm testing out Vercel for front-end deployment and Render for backend deployment.

## References
[1] https://medium.com/@bthncm/getting-started-with-typescript-a-comprehensive-guide-for-beginners-7a4969b6679c
[2] https://www.youtube.com/watch?v=61v23Ce5SXA&ab_channel=DaveGray
[3] https://www.typescriptlang.org/docs/
