let suma=0
 
for(let i=0; i<5000; i++){
    if(i%2==0){
        suma=(suma+(1/((2*i)+1))*4)
    }else{
        suma=(suma-(1/((2*i)+1))*4)
    }
}
console.log("La suma es: "+suma)
//La suma de for (por si no la habían pasado)
