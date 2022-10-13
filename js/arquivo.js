
 function comprar() {


    let cod = parseInt(prompt("Digite o código" ));
    let quant = parseInt(prompt("Por quantos dias ? "));
    let preco = 0 ;
    switch(cod){
     case 1 :
        preco = 99.00 * quant;
        break;
     case 2 :
        preco = 139.00 * quant;
        break;
     case 3 :
        preco = 189.00 * quant;
        break;
     
    }
    let taxa = preco * 0.08;
    let total = preco+ taxa ;
    let final = total.toFixed(2);
    
    
   //let res = final.toFixed(2);
   
    alert("O valor sem taxa será de R$" + preco);
    alert("A taxa vai ser de " + taxa);
    alert("O valor final vai ser de R$ " + final);
    

  };

  function dividir() {


    var conta = parseInt(prompt("Digite o valor total" ));
    var pessoa = parseInt(prompt("Dividir por quantas pessoas ? "));
   
    
    if(conta  != null){

    var total =   conta / pessoa
    }
    var Preco = total.toFixed(2);
    
    alert("O total de R$ " + Preco + " por pessoa");
  
  };

  
  function abastece() {

    tanque =  100;//100 litros
    var litros = parseInt(prompt("Digite quantos litros deseja abastecer" ));
    var gas = 6.00;
   
    if(litros  <= 100){
        
    var total =   litros * gas;

    var Preco = total.toFixed(2);
    var resul = tanque - litros;
    alert("O total de R$ " + Preco);
    alert("O total de litros vendidos é " + litros);
    alert("O reservatório possui " + resul)

    }else{
        alert("Você não pode abastecer mais litros do que o reservatório possui");
    
    }
    
  
  };
  const predio = []

  const getInquilinos = () => {
    for (let i = 0; i < 5; i++) {
      const andar = []
      for (let j = 0; j < 8; j++) {
        andar.push(0)
      }
      predio.push(andar)
    }
  
    for (let i = 0; i < 5; i++) {
      let people = prompt(`Insira a quantidade de pessoas por quarto separado por espaço (${i + 1}º andar): `);
      people = people.split(' ')
      people.forEach((value, j) => {
        value = Number(value)
        predio[i][j] = value
      })
    }
  
    let inquilinos = 0
    let vazios = 0
  
    predio.forEach((item, i) => {
      item.forEach((item, j) => {
        if (item === 0) {
          alert(`${i + 1}º Andar, ${j + 1}º Quarto, etá disponivel`)
          vazios++
        } else inquilinos++
      })
    })
  
    alert("O total de inquilinos é " + inquilinos)
    alert("Quartos vazios " + vazios)
  }
  
  
