# AddressBook
Angular 1.x based basic address book application
The data source is supplied in an XML file (download the file http://www.bindows.net/documentation/download/ab.xml)
Application specification is not provided
You decide on the functionality and features that you can deliver within the time limit
The application should present the available contacts in two different views (as a minimum):
1. Table view
2. Business card view, that presents several business cards on screen

The result should be delivered as a zip file sent by email or as GitHub repository

## Download
```bash
git clone https://github.com/EugenIvanou/AddressBook.git
```
## 1. Setup front-end env
```bash
npm install
```
- install all npm and bower dependencies
## 2. Setup nodejs server env
```bash
cd server
npm install
```
- install all npm dependencies for expressJS server

## 3. Build dev version
```bash
cd ..
gulp build
gulp server
```
- return back
- build 'dist' folder 
- run server