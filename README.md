how to configure typescript

mkdir directory_name
cd directory_name
#initalize node js create package.json
npm init
#install globally
npm install -g typescript
#Install ts-node: To run TypeScript code directly without compiling to JavaScript, you can use the ts-node package. Install ts-node locally in your project by running the
npm install ts-node --save-dev
#create git ignore file
.gitignore
#have to add the node_modules to .gitignore because it contain libray files don't want to tracking git
add git ignore node_modules directory
#create typescript configuration file
npx tsc --init

# tsconfig.json defualt disable by commentd, have to uncommand below option

{
"compilerOptions": {
"target": "es6",
"module": "commonjs",
"outDir": "dist",
"strict": true,
"esModuleInterop": true
},
"include": ["src/**/*"]
}
#make scripts in package json for running typescript
"scripts": {
"build": "tsc",
"start": "node dist/index.js",
"dev": "ts-node src/index.ts"
}

#flow of typescript running

1. once completed your code test with npm run dev check output
2. after get ocrrect result npm run build this command compile your typescript code to javascript create dist/index.js file
3. npm start this is check your same way running on javascript after compiled

#whenever running npm run build typescript make dist folder have to add git ignore
add git ignore dist directory
