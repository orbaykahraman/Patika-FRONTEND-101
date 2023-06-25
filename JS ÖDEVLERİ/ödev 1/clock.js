
let ad=prompt("Lütfen isminizi giriniz:");
let myName=document.querySelector("#myName");
myName.innerHTML = ` ${ad}`;

function time(){
    
    const tarih=new Date;

    let hour = tarih.getHours();
    let minute = tarih.getMinutes();
    let second = tarih.getSeconds();
    
    
    let days =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let dayName = days[tarih.getDay()]
    
 // Burada id myClock olarak foksiyona çağırıyoruz. ve saati yazdırıyoruz.   
    let clock=document.querySelector("#myClock");
    clock.innerHTML = `${hour}: ${minute}: ${second}: ${dayName}`;
}

setInterval(time,1000);