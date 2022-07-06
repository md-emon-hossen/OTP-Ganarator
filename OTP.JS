// function lengthotp(otplength){
//     var otp='';
//     var number=['0','1','2','3','4','5','6','7','8','9'];
//     var length=number.length;
//     for(var i=0; i<otplength; i++){
//         var randoomNumber=Math.floor(Math.random()*length);
//         otp+=number[randoomNumber];
//     }
//     return otp;
// }

// console.log(lengthotp(100));




function alphaotp(otplength){
    var otp='';
    var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','u','r','s','t','u','v','w','y','z'];
    var length=alpha.length;
    for(var i=0; i<otplength; i++){
        var randoomNumber=Math.floor(Math.random()*length);
        otp+=alpha[randoomNumber];
    }
    return otp;
}

var dbotp=[]; 
dbotp.push(alphaotp(20));
var otherarray=[];
otherarray.push(... dbotp);
console.log(otherarray);