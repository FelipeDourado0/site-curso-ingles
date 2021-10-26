function validar() {
    
    var first_name = document.getElementById( "first_name"); 
    var last_name = document.getElementById( "last_name");
    var email_cadastro = document.getElementById( "email_cadastro");
    var city_cadastro = document.getElementById( "city_cadastro"  );
    var password_cadastro = document.getElementById( "password_cadastro"  );
   
    if (  first_name.value == "") {

        alert("Falta preencher campos.");
        
        first_name.focus();   
        
        return;
        
        }
       
        if ( last_name.value == "") {

            alert("Falta preencher campos.");
            
            last_name.focus();   
            
            return;
            
            }    
        
            if (  email_cadastro.value == "") {

                alert("Falta preencher campos.");
                
                email_cadastro.focus();   
                
                return;
                
                }    
                if (  city_cadastro.value == "") {

                    alert("Falta preencher campos.");
                    
                    city_cadastro.focus();   
                    
                    return;
                    
                    } 
                   
                    if (  password_cadastro.value == "") {

                        alert("Falta preencher campos.");
                        
                        password_cadastro.focus();   
                        
                        return;
                        
                        }       
    }