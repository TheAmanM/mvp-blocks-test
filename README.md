Simple run:


NPM RUN DEV backend.

for frontend extension:

rm -rf extension/webview-static

mkdir -p extension/webview-static


cd extension

npm run compile


cd ..

npm run build

cp -r out/* extension/webview-static/

then simply press F5 

now both backend server, and frontend extension running!