//optimizando a atribuição de variaveis com ForEach:
//na linha 3 atribui o formulario inteiro como fields, e consigo navegar por ele quando quizer usar algum atributo
var fields = document.querySelectorAll("#form-user-create [name]");
                                        //pegue o que tem name
var user = {}; //json, para guardar as info do usuario

/**
 * add a linha na lista de Usuarios
 * criando a tabela:
 */
function addLine(dataUser){//armazenando a datauser no addline
 
    //criei um id para o corpo da tabela no html, o tbody
    //tamplate string / .innerHTML (pegando a estrutura que vai ser interpretada como codigo devido ao innerHTML atraves das crazes ``)
    //na linha abaixo estou dizendo que: no corpo da tabela(id table-user)coloque esse codigo html (.innerHTML)=
    document.getElementById('table-users').innerHTML =`
                <tr>
                    <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                    <td>${dataUser.name}</td>
                    <td>${dataUser.email}</td>
                    <td>${dataUser.admin}</td>
                    <td>${dataUser.birth}</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                    </td>
                  </tr>
                  `                   
}

//este comando so espera que coloque id dentro()
document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault();//utilizado para nao fazer o padrao, que no caso so button submit é colocar no http    

    fields.forEach(function(field, index){//(nome do que vai conter,argumentos, field=campo index=posição)
        //monstrando como pegar corretamente atributos tipo radio: (Seção 3, aula 32, 5min)
        if (field.name == 'gender'){//se (field.name for igual a gender faça:)
    
            if (field.checked === true){//e se estiver checked faça:
                user[field.name] = field.value;//field.value(guardar o valor) do [.name] na var que criei 'user
            }
    
        } else {
            
            user[field.name] = field.value;
            
        }
    });
    //criei uma variavel e atribui a classe que criei la na pasta models/User.js
    
    var objectUser = new User(
        user.name,
        user.gender,
        user.birth,
        user.country,
        user.email,
        user.password,
        user.photo,
        user.admin
    );
    // addLine(user);//estou chamando a função para executar depois que clicar no botao de submit
                //onde a funcao com nome addLine que faz com que eu pegue os dados dos usuarios e guarde na json, criando a tabela  
    addLine(objectUser);//antes de criar a classe, acima, eu estava usando o json, mas com a classe utilizada a cima, tudo esta armazenado nela            
});

