//variaveis globais para validar nome e rede social
validacaoSocial = 0; 
validacaoName = 0;   

//Função que exibe ou oculta as redes sociais de acorda com a resposta do usuário
function functionSocial() {
	var selchbox = [];	
	var inputfields = document.getElementsByName("tOpt");
	var ar_inputflds = inputfields.length;

	for (var i = 0; i < ar_inputflds; i++) {
		if (inputfields[i].type == 'radio' && inputfields[i].checked == true)
			selchbox.push(inputfields[i].value);
	}
	if (selchbox == "sim"){
		document.getElementById("textRedesSociais").innerHTML = "\
				<fieldset  id='redSociais' onclick='formatList()'>	\
				<legend>Quais:</legend></p>\
					<input type='checkbox' name='Facebook' value='Facebook'>Facebook\
					<input type='checkbox' name='LinkedIn' value='LinkedIn'>LinkedIn\
					<input type='checkbox' name='Instagram' value='Instagram'>Instagram\
				</fieldset>";
		validacaoSocial = 1;
	}else{
		document.getElementById("textRedesSociais").innerHTML = "";
		validacaoSocial = 0;
	}
}

//Função para formata em array os dados de redes sociais
function formatList(){
	var minhaDiv = document.getElementById("redSociais");
	var listaMarcados = minhaDiv.getElementsByTagName("INPUT");
	var list = [];
	for (loop = 0; loop < listaMarcados.length; loop++) {
     var item = listaMarcados[loop];
     if (item.checked) {
		list.push(item.value);
     }
	}
	document.getElementById("dadosFormatado").value = list;	
}	

//Função para validar se existe pelo menos uma sobrenome
function validaSobreNome(){
	var inputName = document.getElementById("cNome").value;
	var novo = "";
	var separado = 0;
	if(inputName.charAt(0) == ' '){
		novo = inputName.replace(inputName.substring(0, 1), '');
		separado = novo.split(" ");	
	}else{
		separado = inputName.split(" ");						
	}
	if(separado.length == 1){
		document.getElementById("nome").innerHTML = "*Digite ao menos um sobrenome!!!";
		validacaoName = 0;		
	}else{		
		document.getElementById("nome").innerHTML = "";
		validacaoName = 1;		
	}
}

//Função que libera o botão de enviar de acordo com a ação do usuário. Se Redes Sociais estiver Sim ou Não
function validarEnvio(){
	var x = document.getElementById("botao");
	if(validacaoName == 1 && validacaoSocial == 1){
		x.style.visibility  = "visible";
	}else if(validacaoName == 0 || validacaoSocial == 0){
		x.style.visibility  = "hidden";
	}else{
		x.style.visibility  = "hidden";
	}	
}



    

