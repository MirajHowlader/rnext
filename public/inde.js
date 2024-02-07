
var printName=function(v1,v2,v3){
    console.log(`${this.name} is ${v1} ${v2} & ${v3}`)
}

var sakib = {
    name:'Sakib',
    age:34,
    
}
var v1 = 'handsome';
var v2 = 'Alll-roudner';
var v3 = 'best player';
printName.call(sakib, v1,v2,v3)