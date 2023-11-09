// fill in javascript code here

let myforms=document.querySelector('form')
let input1=document.getElementById('name')
let input2=document.getElementById('docID')
let input3=document.getElementById('dept')
let input4=document.getElementById('exp')
let input5=document.getElementById('email')
let input6=document.getElementById('mbl')
let tbody=document.querySelector('tbody')

let alldata=[]
myforms.addEventListener('submit',function(e){
    e.preventDefault()
   
    let obj={}
    obj.doctorName=input1.value
    obj.doctorId=input2.value
    obj.specialization=input3.value
    obj.experience=input4.value
    obj.email=input5.value
    obj.mobileNum=input6.value
    obj.employeRole=input4.value
   
    alldata.push(obj)
  
    
    tbody.innerHTML=null
    
    alldata.map((ele)=>{
        let row=document.createElement('tr')
        let td1=document.createElement('td')
        let td2=document.createElement('td')
        let td3=document.createElement('td')
        let td4=document.createElement('td')
        let td5=document.createElement('td')
        let td6=document.createElement('td')
        let td7=document.createElement('td')

        td1.innerText=ele.doctorName
        td2.innerText=ele.doctorId
        td3.innerText=ele.specialization
        td4.innerText=ele.experience
        td5.innerText=ele.email
        td6.innerText=ele.mobileNum
        td7.innerText=ele.experience

        if(td7.innerText > 5){
            td7.innerText="Senior"
        }else if(td7.innerText>=2 && td7.innerText<=5){
            td7.innerText="Junior"
        }else if(td7.innerText<=1 || td7.innerText==1){
            td7.innerText="Trainee"
        }

        row.append(td1,td2,td3,td4,td5,td6,td7)
        tbody.append(row)
       
    })


})
    