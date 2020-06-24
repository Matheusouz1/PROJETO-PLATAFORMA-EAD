var perguntas = [
	Pergunta = {
		titulo: 'pergunta 1',
        descrição:'Se você, assim como a maioria dos profissionais de hoje em dia,' + 
        'está dentro da crescente estatística de pessoas que trabalham com comunicação e se sentem incompetentes, sem perspectiva de crescimento, sem segurança em uma entrevista de emprego e sente que a faculdade não te preparou para o mercado, você merece estar com a CRIA.O curso de Formação em Estratégia Digital foi elaborado pensando nos estudantes em fase final de graduação, recém graduados em marketing e publicidade ou aqueles que querem se atualizar no tema.',
		categoria: 'curso'
	},
	Pergunta = {
		titulo: 'pergunta2',
		descrição:'esta é a descrição 2 sdjhfajhjfhdsajhfjkdshjfkhsdakjfasdfsdafbsdafjkbdsjfbdjkasbf',
		categoria: 'curso'
	},
	Pergunta = {
		titulo: 'pergunta3',
		descrição:'esta é a descrição 3',
		categoria: 'pagamento'
	},
	Pergunta = {
		titulo: 'pergunta4',
		descrição:'esta é a descrição 4fasdfjdhasjfhjasdhfkjhdakjsfhkjdsahjkhdfkjhadskjh',
		categoria: 'pagamento'
	},
	Pergunta = {
		titulo: 'Qual o valor do curso de Formação em Estratégia Digital?',
		descrição:'esta é a descrição 4',
		categoria: 'plataforma'
	}

];

function renderPerguntas(){
    for (pergunta of perguntas) {

        if (pergunta.categoria==='curso') {      //essa condição joga a pergunta para a categoria ''curso''
            var corpo = document.querySelector('#FAQC1');
        };//fim da condição da categoria 1 "curso"
        
        if (pergunta.categoria==='pagamento') {   //condição para se a categoria for pagamento
            var corpo = document.querySelector('#FAQC2');
        };	// fim da condição da categoria 2 "pagamento"

        if (pergunta.categoria==='plataforma') {   //condição para se a categoria for PLATAFORMA
            var corpo = document.querySelector('#FAQC3');
        };	// fim da condição da categoria 3 "plataforma"

        var perguntaTitulo = document.createElement('h4'); // cria a pergunta
        perguntaTitulo.setAttribute('class', 'perguntaFAQ');
        perguntaTitulo.setAttribute('id', 'pergunta'+pos)
        perguntaTitulo.setAttribute('onclick', 'criarResposta(' + pos + ')')
        var Perguntatxt = document.createTextNode(pergunta.titulo);
        
        var caixaPergunta = document.createElement('div'); //cria a caixa que coloca a pergunta e resposta
        caixaPergunta.setAttribute('class', 'containerPergunta');

        var addIcon = document.createElement('span'); // cria o icone
        addIcon.setAttribute('class', 'material-icons');
        var addIcontxt = document.createTextNode('add');
        addIcon.appendChild(addIcontxt);
        var pos = perguntas.indexOf(pergunta)
        

        //RENDERIZA ELEMENTOS

        perguntaTitulo.appendChild(Perguntatxt); //renderiza a pergunta no h4
        perguntaTitulo.appendChild(addIcon); // renderiza o icone no h4
        caixaPergunta.appendChild(perguntaTitulo); //renderiza o h4 no container
        corpo.appendChild(caixaPergunta); // renderiza a caixa de pergunta no container FAQ

        function criarResposta(){
            var resposta = document.createElement('p');   // cria a resposta
            resposta.setAttribute('class', 'respostasFAQ');
            resposta.setAttribute('id', 'resposta'+pos)
            var respostatxt = document.createTextNode(pergunta.descrição);
            resposta.appendChild(respostatxt);
            caixaPergunta.appendChild(resposta);
           }
    } //fim do for 

} //fim da função render perguntas

document.onload = renderPerguntas();

