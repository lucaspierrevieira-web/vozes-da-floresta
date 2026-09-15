// ==========================================
// CONFIGURAÇÕES
// ==========================================

let pontos = 0;

let perguntaAtual = 0;

let respondeu = false;


// ==========================================
// PERGUNTAS DO JOGO
// ==========================================

let perguntas = [

    {
        pergunta:
            "Qual foi o período da Ditadura Militar brasileira?",

        alternativas: [
            "1945–1964",
            "1964–1985",
            "1985–2000"
        ],

        resposta: 1,

        explicacao:
            "A Ditadura Militar brasileira começou em 1964 e terminou em 1985."
    },


    {
        pergunta:
            "Qual dessas situações foi registrada como uma violação sofrida por povos indígenas?",

        alternativas: [
            "Prisões arbitrárias e trabalho forçado",
            "Aumento da participação política indígena",
            "Criação de universidades indígenas"
        ],

        resposta: 0,

        explicacao:
            "Documentos reunidos posteriormente registraram prisões arbitrárias, trabalho forçado e outras violações contra povos indígenas."
    },


    {
        pergunta:
            "Durante o período, projetos de ocupação e desenvolvimento afetaram:",

        alternativas: [
            "Somente grandes cidades",
            "Territórios e comunidades indígenas",
            "Apenas países estrangeiros"
        ],

        resposta: 1,

        explicacao:
            "Projetos de ocupação e desenvolvimento afetaram territórios e modos de vida de diferentes povos indígenas."
    },


    {
        pergunta:
            "Qual documento produzido em 1967 reuniu denúncias de graves violações contra indígenas?",

        alternativas: [
            "Relatório Figueiredo",
            "Constituição de 1988",
            "AI-5"
        ],

        resposta: 0,

        explicacao:
            "O Relatório Figueiredo foi elaborado em 1967 e reuniu denúncias sobre graves abusos cometidos contra indígenas."
    },


    {
        pergunta:
            "Qual era uma das instituições envolvidas na política indigenista durante o período?",

        alternativas: [
            "Serviço de Proteção aos Índios (SPI)",
            "Organização das Nações Unidas",
            "Banco Central Europeu"
        ],

        resposta: 0,

        explicacao:
            "O Serviço de Proteção aos Índios (SPI) era o órgão indigenista existente antes da criação da Funai, em 1967."
    },


    {
        pergunta:
            "Em que ano foi criada a Comissão Nacional da Verdade?",

        alternativas: [
            "1964",
            "1985",
            "2011"
        ],

        resposta: 2,

        explicacao:
            "A Comissão Nacional da Verdade foi criada pela Lei 12.528, de 2011, e instituída em 2012."
    },


    {
        pergunta:
            "Qual foi uma das funções da Comissão Nacional da Verdade?",

        alternativas: [
            "Investigar graves violações de direitos humanos",
            "Criar a Ditadura Militar",
            "Criar o Serviço de Proteção aos Índios"
        ],

        resposta: 0,

        explicacao:
            "A CNV investigou graves violações de direitos humanos ocorridas no Brasil entre 1946 e 1988, com foco especial na ditadura."
    },


    {
        pergunta:
            "O que os documentos históricos permitem compreender sobre a questão indígena durante a ditadura?",

        alternativas: [
            "Que não houve conflitos ou violações",
            "Que diferentes povos foram afetados por violações de direitos",
            "Que a questão indígena não foi investigada posteriormente"
        ],

        resposta: 1,

        explicacao:
            "Documentos e pesquisas posteriores registraram violações contra diferentes povos indígenas e ajudaram a ampliar o conhecimento sobre esse período."
    }

];


// ==========================================
// TELA DE CONTEXTO HISTÓRICO
// ==========================================

function mostrarContexto() {

    document.getElementById("jogo").innerHTML = `

        <h2>📖 Antes de começar</h2>

        <p>
            A Ditadura Militar brasileira ocorreu entre
            1964 e 1985.
        </p>

        <p>
            Durante esse período, diferentes povos indígenas
            foram afetados por políticas de ocupação,
            desenvolvimento e atuação de órgãos estatais.
        </p>

        <p>
            Documentos posteriormente investigados e reunidos
            por pesquisadores e pela Comissão Nacional da
            Verdade registraram diversas violações de direitos
            humanos contra povos indígenas.
        </p>

        <p>
            Agora você vai responder perguntas sobre esse
            período histórico.
        </p>

        <button
            class="botao-controle"
            onclick="iniciarJogo()">

            COMEÇAR O QUIZ

        </button>

    `;
}


// ==========================================
// INICIAR O JOGO
// ==========================================

function iniciarJogo() {

    pontos = 0;

    perguntaAtual = 0;

    respondeu = false;

    mostrarPergunta();
}


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function mostrarPergunta() {

    let pergunta = perguntas[perguntaAtual];


    let progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;


    document.getElementById("jogo").innerHTML = `

        <h2>
            Pergunta ${perguntaAtual + 1}
            de ${perguntas.length}
        </h2>


        <div class="barra-fundo">

            <div
                class="barra-progresso"
                style="width: ${progresso}%">

            </div>

        </div>


        <p class="pontos">

            ⭐ Pontos: ${pontos}

        </p>


        <p>

            ${pergunta.pergunta}

        </p>


        <div>

            <button
                class="alternativa"
                onclick="responder(0)">

                A) ${pergunta.alternativas[0]}

            </button>


            <button
                class="alternativa"
                onclick="responder(1)">

                B) ${pergunta.alternativas[1]}

            </button>


            <button
                class="alternativa"
                onclick="responder(2)">

                C) ${pergunta.alternativas[2]}

            </button>

        </div>


        <div id="resultado"></div>

    `;
}


// ==========================================
// RESPONDER
// ==========================================

function responder(resposta) {

    if (respondeu) {

        return;

    }


    respondeu = true;


    let pergunta = perguntas[perguntaAtual];


    let botoes =
        document.querySelectorAll(".alternativa");


    // --------------------------------------
    // ACERTO
    // --------------------------------------

    if (resposta == pergunta.resposta) {

        pontos += 10;


        botoes[resposta].style.backgroundColor =
            "#287a38";


        botoes[resposta].style.borderColor =
            "#6ee77b";


        document.getElementById("resultado").innerHTML = `

            <p class="correto">

                ✅ CORRETO! +10 pontos

            </p>

            <p>

                ${pergunta.explicacao}

            </p>

        `;

    }


    // --------------------------------------
    // ERRO
    // --------------------------------------

    else {

        botoes[resposta].style.backgroundColor =
            "#7a2828";


        botoes[resposta].style.borderColor =
            "#ff7777";


        botoes[pergunta.resposta].style.backgroundColor =
            "#287a38";


        botoes[pergunta.resposta].style.borderColor =
            "#6ee77b";


        document.getElementById("resultado").innerHTML = `

            <p class="incorreto">

                ❌ INCORRETO

            </p>

            <p>

                A resposta correta era:
                <strong>
                    ${pergunta.alternativas[pergunta.resposta]}
                </strong>

            </p>

            <p>

                ${pergunta.explicacao}

            </p>

        `;

    }


    // --------------------------------------
    // BOTÃO DE CONTINUAR
    // --------------------------------------

    if (perguntaAtual < perguntas.length - 1) {

        document.getElementById("resultado").innerHTML += `

            <button
                class="botao-controle"
                onclick="proximaPergunta()">

                PRÓXIMA PERGUNTA →

            </button>

        `;

    }


    else {

        document.getElementById("resultado").innerHTML += `

            <button
                class="botao-controle"
                onclick="finalizarJogo()">

                VER RESULTADO 🏆

            </button>

        `;

    }

}


// ==========================================
// PRÓXIMA PERGUNTA
// ==========================================

function proximaPergunta() {

    perguntaAtual++;

    respondeu = false;

    mostrarPergunta();
}


// ==========================================
// RESULTADO FINAL
// ==========================================

function finalizarJogo() {

    let mensagem;


    if (pontos == 80) {

        mensagem =
            "🏆 Você acertou todas as perguntas!";

    }

    else if (pontos >= 60) {

        mensagem =
            "👏 Muito bom! Você demonstrou um bom domínio do conteúdo.";

    }

    else if (pontos >= 40) {

        mensagem =
            "📚 Bom trabalho! Algumas partes do conteúdo ainda podem ser revisadas.";

    }

    else if (pontos >= 20) {

        mensagem =
            "🔎 Você já identificou alguns pontos importantes. Vale revisar o conteúdo.";

    }

    else {

        mensagem =
            "📖 Uma nova tentativa pode ajudar a reforçar o conteúdo histórico.";

    }


    document.getElementById("jogo").innerHTML = `

        <h2>🏁 Fim do jogo!</h2>


        <p class="pontuacao-final">

            ${pontos} / 80

        </p>


        <p class="mensagem-final">

            ${mensagem}

        </p>


        <button
            class="botao-controle"
            onclick="iniciarJogo()">

            🔄 JOGAR NOVAMENTE

        </button>


        <button
            class="botao-controle"
            onclick="mostrarFontes()">

            📚 VER FONTES

        </button>

    `;
}


// ==========================================
// FONTES HISTÓRICAS
// ==========================================

function mostrarFontes() {

    document.getElementById("jogo").innerHTML = `

        <h2>📚 Fontes históricas</h2>


        <p>
            Para elaborar o conteúdo deste jogo,
            foram consultados materiais oficiais
            relacionados à memória e à documentação
            da Ditadura Militar e da questão indígena.
        </p>


        <div class="fonte">

            <strong>
                Comissão Nacional da Verdade
            </strong>

            <p>
                Relatório Final da Comissão Nacional
                da Verdade — Volume II.
            </p>

        </div>


        <div class="fonte">

            <strong>
                Arquivo Nacional — Memórias Reveladas
            </strong>

            <p>
                Materiais sobre a Ditadura Militar
                e os povos indígenas.
            </p>

        </div>


        <div class="fonte">

            <strong>
                Relatório Figueiredo
            </strong>

            <p>
                Documento produzido em 1967 que reuniu
                denúncias e informações sobre violações
                contra povos indígenas.
            </p>

        </div>


        <div class="fonte">

            <strong>
                Comissão Nacional da Verdade — CNV
            </strong>

            <p>
                Investigação e documentação de graves
                violações de direitos humanos.
            </p>

        </div>


        <button
            class="botao-controle"
            onclick="mostrarSobre()">

            ℹ️ SOBRE O JOGO

        </button>


        <button
            class="botao-controle"
            onclick="iniciarJogo()">

            🔄 JOGAR NOVAMENTE

        </button>

    `;
}


// ==========================================
// SOBRE O JOGO
// ==========================================

function mostrarSobre() {

    document.getElementById("jogo").innerHTML = `

        <h2>🌿 Sobre o jogo</h2>

        <p>
            <strong>Criador do código:</strong> Lucas
        </p>

        <p>
            <strong>Tema do trabalho:</strong><br>
            Questões indígenas durante a Ditadura
        </p>

        <p>
            <strong>Vozes da Floresta</strong> é um jogo
            educativo desenvolvido para apresentar,
            de forma interativa, aspectos das questões
            indígenas durante a Ditadura Militar brasileira.
        </p>

        <p>
            O jogador responde perguntas, recebe
            explicações históricas e acompanha sua
            pontuação durante a atividade.
        </p>

        <p>
            <strong>Tecnologias utilizadas:</strong>
        </p>

        <p>
            HTML → estrutura da página<br>
            CSS → aparência e animações<br>
            JavaScript → funcionamento do jogo
        </p>

        <button
            class="botao-controle"
            onclick="mostrarContexto()">

            🎮 JOGAR

        </button>

    `;
}