
const div=document.querySelector("div")
const buttonpop=document.getElementById("population")
const buttonlang=document.getElementById("languages")
const h3=document.getElementById("h3")

const p1=document.getElementById("p1")
const p2=document.getElementById("p2")
const p3=document.getElementById("p3")
const p4=document.getElementById("p4")
const p5=document.getElementById("p5")
const p6=document.getElementById("p6")
const p7=document.getElementById("p7")
const p8=document.getElementById("p8")
const p9=document.getElementById("p9")
const p10=document.getElementById("p10")

const pn1=document.getElementById("pn1")
const pn2=document.getElementById("pn2")
const pn3=document.getElementById("pn3")
const pn4=document.getElementById("pn4")
const pn5=document.getElementById("pn5")
const pn6=document.getElementById("pn6")
const pn7=document.getElementById("pn7")
const pn8=document.getElementById("pn8")
const pn9=document.getElementById("pn9")
const pn10=document.getElementById("pn10")

const mpg1=document.getElementById("mpg1")
const mpg2=document.getElementById("mpg2")
const mpg3=document.getElementById("mpg3")
const mpg4=document.getElementById("mpg4")
const mpg5=document.getElementById("mpg5")
const mpg6=document.getElementById("mpg6")
const mpg7=document.getElementById("mpg7")
const mpg8=document.getElementById("mpg8")
const mpg9=document.getElementById("mpg9")
const mpg10=document.getElementById("mpg10")
let pop=[];
let earth=0;
let lang=[];
for(let x of countries_data){
    for(let y of x.languages) {
        lang.push(y)
    } 
}
const langSet= new Set(lang)
let counts=[]
const count ={}

for (const l of langSet) {
    const filteredLang = lang.filter((lng) => lng === l)
    counts.push({ lang: l, count: filteredLang.length })
  }
counts=counts.sort(function (a,b){return b.count-a.count} )

for(a of countries_data){
        pop.push({name:a.name,count:a.population})
}
pop=pop.sort(function (a,b){return b.count-a.count} )
console.log(pop[0].count)
for(let x of pop){
    earth+=x.count
}
buttonlang.addEventListener('click',() =>{
h3.innerHTML="10 most spoken languages in the world"
p1.innerHTML=counts[0].lang
p2.innerHTML=counts[1].lang
p3.innerHTML=counts[2].lang
p4.innerHTML=counts[3].lang
p5.innerHTML=counts[4].lang
p6.innerHTML=counts[5].lang
p7.innerHTML=counts[6].lang
p8.innerHTML=counts[7].lang
p9.innerHTML=counts[8].lang
p10.innerHTML=counts[9].lang

mpg1.style.width=`${counts[0].count}%`
mpg2.style.width=`${counts[1].count}%`
mpg3.style.width=`${counts[2].count}%`
mpg4.style.width=`${counts[3].count}%`
mpg5.style.width=`${counts[4].count}%`
mpg6.style.width=`${counts[5].count}%`
mpg7.style.width=`${counts[6].count}%`
mpg8.style.width=`${counts[7].count}%`
mpg9.style.width=`${counts[8].count}%`
mpg10.style.width=`${counts[9].count}%`


pn1.innerHTML=counts[0].count
pn2.innerHTML=counts[1].count
pn3.innerHTML=counts[2].count
pn4.innerHTML=counts[3].count
pn5.innerHTML=counts[4].count
pn6.innerHTML=counts[5].count
pn7.innerHTML=counts[6].count
pn8.innerHTML=counts[7].count
pn9.innerHTML=counts[8].count
pn10.innerHTML=counts[9].count
})

buttonpop.addEventListener('click',() =>{
h3.innerHTML="10 Most populated countries in the world"
p1.innerHTML="Earth"
p2.innerHTML=pop[0].name
p3.innerHTML=pop[1].name
p4.innerHTML=pop[2].name
p5.innerHTML=pop[3].name
p6.innerHTML=pop[4].name
p7.innerHTML=pop[5].name
p8.innerHTML=pop[6].name
p9.innerHTML=pop[7].name
p10.innerHTML=pop[8].name

mpg1.style.width=`${Math.ceil((earth/earth)*100)}%`
mpg2.style.width=`${Math.ceil((pop[0].count/earth)*100)}%`
mpg3.style.width=`${Math.ceil((pop[1].count/earth)*100)}%`
mpg4.style.width=`${Math.ceil((pop[2].count/earth)*100)}%`
mpg5.style.width=`${Math.ceil((pop[3].count/earth)*100)}%`
mpg6.style.width=`${Math.ceil((pop[4].count/earth)*100)}%`
mpg7.style.width=`${Math.ceil((pop[5].count/earth)*100)}%`
mpg8.style.width=`${Math.ceil((pop[6].count/earth)*100)}%`
mpg9.style.width=`${Math.ceil((pop[7].count/earth)*100)}%`
mpg10.style.width=`${Math.ceil((pop[8].count/earth)*100)}%`


pn1.innerHTML=earth
pn2.innerHTML=pop[0].count
pn3.innerHTML=pop[1].count
pn4.innerHTML=pop[2].count
pn5.innerHTML=pop[3].count
pn6.innerHTML=pop[4].count
pn7.innerHTML=pop[5].count
pn8.innerHTML=pop[6].count
pn9.innerHTML=pop[7].count
pn10.innerHTML=pop[8].count


})