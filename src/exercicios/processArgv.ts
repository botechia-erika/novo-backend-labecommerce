
const  queryName = process.argv[2]
const  queryIdade = process.argv[3]

    if(!queryIdade)
    {
    console.log('argumento não fornecido')
    }else if(queryName&&queryIdade
        ){
   console.log( `Olá, ${queryName}! Você tem ${queryIdade} anos`)}
   else{
        console.log('nao te compreendo')
    }  


