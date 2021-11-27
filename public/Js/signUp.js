const validar = document.querySelector('#data-btn-cadastrar');
validar.addEventListener('click',(e) =>{

    const first_name = document.getElementById( "first_name" ); 
    const last_name = document.getElementById( "last_name" );
    const email_cadastro = document.getElementById( "email_cadastro" );
    const city_cadastro = document.getElementById( "city_cadastro" );
    const password_cadastro = document.getElementById( "password_cadastro" );
    const sexo_checked = document.querySelector( 'input[name="sexo"]:checked' );
    const aceitar_termos = document.getElementById( "aceitar_termos" );
    const opcao = document.getElementById('level').value;
    const texto_sobre = document.getElementById('textarea-form');


    if (  first_name.value == "") {
        
        first_name.focus(); 
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Digite seu nome!',
            showConfirmButton: true,
        });
        return;   
    }
    
    if ( last_name.value == "") {
        
        last_name.focus(); 
        e.preventDefault();  
        Swal.fire({
            icon: 'info',
            title: 'Digite seu sobrenome!',
        });

        return;      
    }  
    
    
    if (  email_cadastro.value == "" || !email_cadastro.value.includes("@") || !email_cadastro.value.includes(".com")) {

        e.preventDefault();
        email_cadastro.focus();   
        Swal.fire({
            icon: 'info',
            title: 'Digite Seu Email Corretamente!',
        });
        return;
        
    }    
    if (  city_cadastro.value == "") {

        e.preventDefault();
        city_cadastro.focus();   
        Swal.fire({
            icon: 'info',
            title: 'Digite sua Cidade!',
        });
        return;
        
    } 
                
    if (  password_cadastro.value == "") {
        e.preventDefault();
        password_cadastro.focus();   
        Swal.fire({
            icon: 'info',
            title: 'Digite sua senha!',
        });
        return;
        
    }

    if(opcao === 'Select'){
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Selecione seu Level!',
        });
        return;
    }

    if(sexo_checked === null){
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Marque seu sexo!',
        });
        return;
    }

    if(texto_sobre.value == ""){
        e.preventDefault();
        texto_sobre.focus();   
        Swal.fire({
            icon: 'info',
            title: 'Diga para a gente um pouco sobre vc!',
        });
        return;
    }

    if(!aceitar_termos.checked){
        e.preventDefault();
        aceitar_termos.focus();   
        Swal.fire({
            icon: 'info',
            title: 'Aceite os termo de uso!',
        });
        return; 
    }

    alert('Usuario Cadastrado');
  
    
});
