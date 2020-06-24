var container = document.querySelector('.section_card_mentor')
var professores = [
    professor1 = {
        foto: '../imagens/professores/prof1.png',
        nome: 'RAPHA AVELLAR',
        matéria: 'MARKETING',
    },
    professor2 = {
        foto: '../imagens/professores/prof2.png',
        nome: 'EVANDRO GUEDES',
        matéria: 'EMPREENDEDORISMO',
    },
    professor3 = {
        foto: '../imagens/professores/prof3.png',
        nome: 'ERICO ROCHA',
        matéria: 'MARKETING DIGITAL',
    },
    professor4 = {
        foto: '../imagens/professores/prof4.png',
        nome: 'RAIM SANTOS',
        matéria: 'NÔMANDE DIGITAL',
    },
    professor5 = {
        foto: '../imagens/professores/prof5.png',
        nome: 'THIAGO NIGRO',
        matéria: 'FINANÇAS',
    },
    professor6 = {
        foto: '../imagens/professores/prof6.png',
        nome: 'FLÁVIO AUGUSTO',
        matéria: 'EMPREENDEDORISMO',
    },
    professor7 = {
        foto: '../imagens/professores/prof7.png',
        nome: 'PEDRO SOBRAL',
        matéria: 'TRÁFEGO PAGO',
    },
    professor8 = {
        foto: '../imagens/professores/prof8.png',
        nome: 'PEDRO SUPERTI',
        matéria: 'MARKETING DE DIFERENCIAÇÃO',
    },
    professor9 = {
        foto: '../imagens/professores/prof9.jpg',
        nome: 'JOÃO PEDRO',
        matéria: 'GROWTH HACKER',
    },
    professor10 = {
        foto: '../imagens/professores/prof10.jpg',
        nome: 'RODRIGO LOPES',
        matéria: 'EMPREENDEDORISMO',
    },
    professor11 = {
        foto: '../imagens/professores/prof11.png',
        nome: 'ROBSON LEITE',
        matéria: 'DESENVOLVIMENTO WEB PHP',
    },
    professor12 = {
        foto: '../imagens/professores/prof12.jpg',
        nome: 'ERIK MARÇAL',
        matéria: 'NETWORKIG',
    }
];

function renderProf(){
    for(professor of professores){

        //cria o card dos prof
        var card = document.createElement('div');
        card.setAttribute('class', 'card_format');

        //cria a div img
        var fotoProf = document.createElement('div');
        fotoProf.setAttribute('class', 'img_mentor');
        fotoProf.style.background= `url(${professor.foto}) no-repeat center center / cover, #f5f4f6`;

        //cria blinha de divisão 
        var linhaDivisao = document.createElement('div');
        linhaDivisao.setAttribute('class','Linha_divisao');

        //cria div de titulos
        var containerTitulos = document.createElement('div');
        containerTitulos.setAttribute('class', 'barra-de-titulos');
        //cria titulos
        var teacherName = document.createElement('h4');
        var nametxt = document.createTextNode(professor.nome);
        var materia = document.createElement('h6');
        var materiatxt = document.createTextNode(professor.matéria);
        //atribuição de valoreas aos containers 
        teacherName.appendChild(nametxt);
        materia.appendChild(materiatxt);
        containerTitulos.appendChild(teacherName);
        containerTitulos.appendChild(materia);

        //renderizando tudo
        card.appendChild(fotoProf);
        card.appendChild(linhaDivisao)
        card.appendChild(containerTitulos);
        container.appendChild(card)

        
    }//fim do for
}//fim da function renderProf

document.onload = renderProf();