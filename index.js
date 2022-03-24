// express -->  backend framework for node js
// cheerio --> gets HTML element from a webpage //parses markup and provides an API for traversing/manipulating the resulting data structure. 
// axios --> Axios is a promise-based HTTP Client for node.js and the browser.

const express=require('express')
const cheerio=require('cheerio')
const axios=require('axios')

const app=express()
const url="https://kongu.ac.in/";
axios(url)
    .then(res=>{
        const html=res.data
        //console.log(html)
        const arr=[]
        const p=cheerio.load(html)
        p('.row',html).each( function()
        {
           const row= p(this).text()
           const url= p(this).find('a').attr('href')
           arr.push({
               row,url
           })
        })
        console.log(arr)
    })
    .catch(err => {
        console.log("error")
    })

app.listen(5000,()=>
{
    console.log("server running ...");
});