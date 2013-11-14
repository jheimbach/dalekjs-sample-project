Sample Site for [DalekJS](http://dalekjs.com) Testing
======================

Sample Project of Dalekjstests for my Presentation at the PHPUG Düsseldorf

#Installation
`npm install`

#Run Preview Servers

Start HTTP-Server for Preview the Sample Page
`grunt preview`

Start HTTP-Server for Preview of the HTML Reports the Sample Page
`grunt reports`

#Run Tests

Run all Tests (.js Files) in PhantomJS
`grunt dalek`

Run all Tests (.coffee Files) in PhantomJS
`grunt dalek_coffee`

Run all Tests (.js Files) in Chrome
`grunt dalek_chrome`

Run all Tests (.js Files) in PhantomJS and create a HTML-Report
`grunt dalek_htmlreport`

Run all Tests (.js Files) in PhantomJS & Chrome and create a HTML-Report
`grunt dalek_multiple`

Run advanced Tests (.js Files - waiting Stuff) in PhantomJS
`grunt dalek_advanced`


#Folder

##Reports
All Reports going in `reports`

##Screenshots
All Reports going in `screenshots`