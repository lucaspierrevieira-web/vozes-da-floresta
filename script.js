/* =====================================================
   ARQUIVO 1964
   Investigação e decisões
===================================================== */


/* =====================================================
   ESTADO DO JOGO
===================================================== */

let currentStage = 0;

let stats = {
    territory: 50,
    protection: 50,
    documentation: 50,
    autonomy: 50
};

let investigated = false;

let discoveredClues = [];

let history = [];


/* =====================================================
   DOCUMENTOS
===================================================== */

const stages = [

    {
        number: "DOCUMENTO #001",
        date: "1964",
        context: "Início de um novo período",

        title: "Uma mudança chega ao território",

        description:
            "Os primeiros registros encontrados mostram que o país entrou em um novo período político. Para uma comunidade indígena, porém, as mudanças que aparecem nos documentos parecem distantes da vida cotidiana. O que importa é entender como as decisões tomadas fora da comunidade podem afetar seu território e sua forma de viver.",

        investigation:
            "Entre os papéis há referências a novas decisões políticas e administrativas. O documento não explica diretamente o que acontecerá com a comunidade, mas deixa claro que decisões externas poderão interferir em seu território.",

        clue:
            "As decisões tomadas por autoridades podem produzir consequências concretas para comunidades que não participaram dessas decisões.",

        choices: [

            {
                text: "Registrar cuidadosamente o que está acontecendo.",
                detail:
                    "A informação pode ser importante para compreender os próximos acontecimentos.",

                effects: {
                    documentation: 10
                },

                message:
                    "Você decidiu preservar o registro. Agora existe uma memória documentada do que estava acontecendo."
            },

            {
                text: "Tentar proteger imediatamente o território.",
                detail:
                    "A prioridade passa a ser evitar que mudanças externas afetem o espaço da comunidade.",

                effects: {
                    territory: 8,
                    protection: 5
                },

                message:
                    "A comunidade passa a concentrar esforços na proteção de seu território."
            }

        ]
    },


    {
        number: "DOCUMENTO #002",
        date: "1967",
        context: "O território entra em disputa",

        title: "Uma área que não parece mais segura",

        description:
            "Um relatório menciona que uma área tradicionalmente utilizada pela comunidade passou a receber atenção de autoridades e outros interesses externos. As pessoas da comunidade percebem que aquilo que sempre fizeram naquele espaço pode começar a ser questionado.",

        investigation:
            "Ao comparar os documentos, você percebe que o problema não é apenas uma mudança no mapa. A utilização do território está ligada à sobrevivência, à cultura e à organização da comunidade.",

        clue:
            "Território não representa apenas espaço físico: ele está relacionado à vida social e cultural da comunidade.",

        choices: [

            {
                text: "Reunir documentos que comprovem a relação da comunidade com o território.",
                detail:
                    "Registrar essa relação pode fortalecer a memória e a documentação.",

                effects: {
                    documentation: 8,
                    territory: 6
                },

                message:
                    "Você começa a reunir evidências sobre a relação histórica da comunidade com aquele território."
            },

            {
                text: "Aceitar a mudança para evitar um conflito.",
                detail:
                    "A decisão evita uma confrontação imediata, mas pode deixar o território mais vulnerável.",

                effects: {
                    territory: -12,
                    autonomy: -5
                },

                message:
                    "A mudança acontece. A comunidade evita um conflito imediato, mas perde parte do controle sobre seu espaço."
            }

        ]
    },


    {
        number: "DOCUMENTO #003",
        date: "1969",
        context: "Uma informação escondida",

        title: "O relatório que ficou de lado",

        description:
            "Entre vários documentos administrativos existe um relatório que quase passou despercebido. Ele contém informações sobre problemas enfrentados por indígenas, mas não parece ter recebido a mesma atenção que outros documentos.",

        investigation:
            "O relatório mostra que havia informações circulando sobre situações enfrentadas pelos povos indígenas. Encontrar o documento muda a compreensão do que estava acontecendo.",

        clue:
            "Documentar acontecimentos pode ser fundamental para que situações esquecidas sejam conhecidas posteriormente.",

        choices: [

            {
                text: "Guardar uma cópia do relatório no arquivo da investigação.",
                detail:
                    "A prioridade é garantir que a informação não desapareça.",

                effects: {
                    documentation: 15
                },

                message:
                    "O relatório agora faz parte do arquivo. Uma informação que poderia ser esquecida foi preservada."
            },

            {
                text: "Usar o relatório para pressionar por medidas de proteção.",
                detail:
                    "A informação deixa de ser apenas um registro e passa a orientar uma ação.",

                effects: {
                    protection: 12,
                    documentation: 5
                },

                message:
                    "As informações reunidas começam a ser utilizadas para tentar aumentar a proteção da comunidade."
            }

        ]
    },


    {
        number: "DOCUMENTO #004",
        date: "1970",
        context: "Uma escolha importante",

        title: "Quem deve decidir?",

        description:
            "Você encontra registros sobre decisões tomadas a respeito da comunidade. Em nenhum momento aparece claramente a participação das próprias pessoas afetadas.",

        investigation:
            "Uma anotação chama sua atenção: as decisões parecem estar sendo tomadas por pessoas de fora da comunidade.",

        clue:
            "Investigar também significa perguntar quem está sendo ouvido antes de uma decisão ser tomada.",

        choices: [

            {
                text: "Defender a participação da própria comunidade.",
                detail:
                    "As pessoas diretamente afetadas devem ter espaço para expressar suas necessidades.",

                effects: {
                    autonomy: 15,
                    protection: 5
                },

                message:
                    "A comunidade ganha mais espaço para participar das decisões que afetam sua própria vida."
            },

            {
                text: "Deixar as autoridades decidirem o que fazer.",
                detail:
                    "A decisão pode parecer mais rápida, mas reduz a participação da comunidade.",

                effects: {
                    autonomy: -12
                },

                message:
                    "As decisões continuam sendo tomadas principalmente por pessoas de fora da comunidade."
            }

        ]
    },


    {
        number: "DOCUMENTO #005",
        date: "1972",
        context: "Uma nova pista",

        title: "O documento que conecta tudo",

        description:
            "Você percebe que vários acontecimentos que pareciam separados podem estar relacionados. Um documento menciona território, outro fala sobre proteção e outro registra informações sobre a comunidade.",

        investigation:
            "Ao comparar os documentos anteriores, você consegue enxergar uma relação entre eles. A investigação deixou de ser apenas uma coleção de papéis: agora existe uma história sendo reconstruída.",

        clue:
            "Relacionar documentos diferentes pode revelar uma situação que não aparece em nenhum documento isoladamente.",

        choices: [

            {
                text: "Comparar todos os documentos antes de decidir.",
                detail:
                    "Você tenta entender o contexto completo antes de tomar uma decisão.",

                effects: {
                    documentation: 8,
                    autonomy: 5,
                    protection: 5
                },

                message:
                    "Você decide não agir com pressa. Os documentos são comparados antes de uma nova decisão."
            },

            {
                text: "Agir imediatamente com as informações disponíveis.",
                detail:
                    "A ação é mais rápida, mas algumas informações ainda não foram analisadas.",

                effects: {
                    protection: 8,
                    documentation: -5
                },

                message:
                    "Uma ação rápida é tomada. Ela pode ajudar, mas algumas informações ainda ficaram sem análise."
            }

        ]
    },


    {
        number: "DOCUMENTO #006",
        date: "1975",
        context: "A memória da comunidade",

        title: "Uma história contada por quem viveu",

        description:
            "Você encontra relatos que mostram a importância da memória das próprias pessoas da comunidade. Os documentos oficiais contam apenas uma parte da história.",

        investigation:
            "A nova informação mostra que documentos administrativos não são suficientes para reconstruir toda uma história. As experiências das próprias comunidades também são importantes.",

        clue:
            "A memória de quem viveu os acontecimentos ajuda a complementar os registros oficiais.",

        choices: [

            {
                text: "Registrar os relatos da comunidade.",
                detail:
                    "A investigação passa a considerar também a memória das pessoas afetadas.",

                effects: {
                    documentation: 10,
                    autonomy: 10
                },

                message:
                    "Os relatos da comunidade passam a fazer parte da memória preservada."
            },

            {
                text: "Usar somente os documentos oficiais.",
                detail:
                    "Isso mantém o arquivo mais limitado ao que foi registrado pelas autoridades.",

                effects: {
                    documentation: 4,
                    autonomy: -8
                },

                message:
                    "A investigação continua, mas parte das experiências da própria comunidade fica fora do arquivo."
            }

        ]
    },


    {
        number: "DOCUMENTO #007",
        date: "1978",
        context: "Uma oportunidade",

        title: "Agora você conhece a história",

        description:
            "Depois de investigar vários documentos, você já consegue compreender muito melhor a situação. Mas ainda existe uma escolha: usar o conhecimento reunido para tentar melhorar a situação ou simplesmente encerrar o arquivo.",

        investigation:
            "Você percebe que as decisões anteriores construíram o caminho até aqui. O resultado não depende de uma única escolha.",

        clue:
            "As consequências de uma situação histórica podem ser resultado de várias decisões acumuladas.",

        choices: [

            {
                text: "Usar tudo o que foi descoberto para fortalecer a comunidade.",
                detail:
                    "A investigação é transformada em uma tentativa de melhorar a situação.",

                effects: {
                    territory: 7,
                    protection: 10,
                    autonomy: 8
                },

                message:
                    "Tudo o que você descobriu começa a ser utilizado para fortalecer a comunidade."
            },

            {
                text: "Encerrar a investigação e apenas guardar os documentos.",
                detail:
                    "A memória é preservada, mas poucas ações são tomadas.",

                effects: {
                    documentation: 12
                },

                message:
                    "Os documentos são preservados. A história continuará registrada, mas poucas mudanças acontecem."
            }

        ]
    },


    {
        number: "DOCUMENTO #008",
        date: "1985",
        context: "O fim de um período",

        title: "O arquivo chega ao fim",

        description:
            "O período da ditadura militar chega ao fim. Você olha para todos os documentos reunidos e percebe que a história não pode ser resumida em uma única decisão.",

        investigation:
            "Ao reunir tudo, você percebe que cada escolha feita durante a investigação alterou o cenário da simulação. Agora resta descobrir qual situação foi construída ao longo do caminho.",

        clue:
            "A memória histórica é construída a partir de diferentes documentos, experiências e perspectivas.",

        choices: [

            {
                text: "Preservar o arquivo e deixar a história disponível para o futuro.",
                detail:
                    "O objetivo final é garantir que as informações descobertas continuem acessíveis.",

                effects: {
                    documentation: 10,
                    autonomy: 5
                },

                message:
                    "O arquivo é preservado para que outras pessoas possam conhecer essa história."
            },

            {
                text: "Priorizar a situação atual da comunidade.",
                detail:
                    "A investigação termina concentrando-se nas condições construídas ao longo da história.",

                effects: {
                    territory: 5,
                    protection: 5,
                    autonomy: 5
                },

                message:
                    "A investigação termina com atenção às condições que a comunidade conseguiu preservar."
            }

        ]
    }

];


/* =====================================================
   INÍCIO
===================================================== */

function startGame() {

    document.getElementById("menu").classList.remove("active");
    document.getElementById("game").classList.add("active");

    resetGame();

    renderStage();
}


function resetGame() {

    currentStage = 0;

    stats = {
        territory: 50,
        protection: 50,
        documentation: 50,
        autonomy: 50
    };

    investigated = false;

    discoveredClues = [];

    history = [];

    updateIndicators();
    updateSidebars();
}


/* =====================================================
   RENDER DOCUMENTO
===================================================== */

function renderStage() {

    const stage = stages[currentStage];

    investigated = false;

    document.getElementById("documentNumber").textContent =
        stage.number;

    document.getElementById("documentDate").textContent =
        stage.date;

    document.getElementById("documentContext").textContent =
        stage.context;

    document.getElementById("documentTitle").textContent =
        stage.title;

    document.getElementById("documentDescription").textContent =
        stage.description;

    document.getElementById("investigationText").textContent =
        stage.investigation;

    document.getElementById("clueText").textContent =
        stage.clue;

    document.getElementById("investigationBox")
        .classList.add("hidden");

    document.getElementById("choicesArea")
        .classList.add("hidden");

    document.getElementById("investigateButton")
        .classList.remove("hidden");

    const choicesContainer =
        document.getElementById("choices");

    choicesContainer.innerHTML = "";

    stage.choices.forEach((choice, index) => {

        const button = document.createElement("button");

        button.className = "choice";

        button.innerHTML = `
            <strong>${choice.text}</strong>
            <small>${choice.detail}</small>
        `;

        button.onclick = () => makeDecision(index);

        choicesContainer.appendChild(button);
    });


    const progress =
        ((currentStage) / stages.length) * 100;

    document.getElementById("progressBar")
        .style.width = `${progress}%`;

    document.getElementById("progressText")
        .textContent =
        `${currentStage + 1} / ${stages.length}`;


    updateIndicators();
    updateSidebars();
}


/* =====================================================
   INVESTIGAR
===================================================== */

function investigate() {

    if (investigated) return;

    investigated = true;

    const stage = stages[currentStage];

    document.getElementById("investigationBox")
        .classList.remove("hidden");

    document.getElementById("choicesArea")
        .classList.remove("hidden");

    document.getElementById("investigateButton")
        .classList.add("hidden");

    discoveredClues.push({
        number: stage.number,
        clue: stage.clue
    });

    addLog(
        `Você investigou ${stage.number} e encontrou uma nova informação.`
    );

    updateSidebars();
}


/* =====================================================
   DECISÃO
===================================================== */

function makeDecision(choiceIndex) {

    if (!investigated) return;

    const choice =
        stages[currentStage].choices[choiceIndex];

    applyEffects(choice.effects);

    addLog(choice.message);

    showMessage(choice.message);

    setTimeout(() => {

        if (currentStage < stages.length - 1) {

            currentStage++;

            renderStage();

        } else {

            showFinal();

        }

    }, 1000);
}


/* =====================================================
   APLICAR CONSEQUÊNCIAS
===================================================== */

function applyEffects(effects) {

    for (const key in effects) {

        stats[key] += effects[key];

        stats[key] =
            Math.max(0, Math.min(100, stats[key]));
    }

    updateIndicators();
}


/* =====================================================
   INDICADORES
===================================================== */

function updateIndicators() {

    setValue("territory");
    setValue("protection");
    setValue("documentation");
    setValue("autonomy");
}


function setValue(name) {

    const value = stats[name];

    document.getElementById(name + "Value")
        .textContent = value;

    document.getElementById(name + "Bar")
        .style.width = value + "%";
}


/* =====================================================
   SIDEBAR
===================================================== */

function updateSidebars() {

    document.getElementById("archiveCount")
        .textContent = discoveredClues.length;

    let level = "Inicial";

    if (discoveredClues.length >= 6) {
        level = "Avançado";
    } else if (discoveredClues.length >= 3) {
        level = "Intermediário";
    }

    document.getElementById("investigationLevel")
        .textContent = level;


    const cluesContainer =
        document.getElementById("discoveredClues");

    if (discoveredClues.length === 0) {

        cluesContainer.innerHTML =
            "Nenhuma informação descoberta ainda.";

        return;
    }

    cluesContainer.innerHTML =
        discoveredClues.map(item => `
            <div class="clue-item">
                <strong>${item.number}</strong><br>
                ${item.clue}
            </div>
        `).join("");
}


/* =====================================================
   REGISTRO
===================================================== */

function addLog(message) {

    history.push(message);

    const log =
        document.getElementById("log");

    log.innerHTML =
        history.map((item, index) => `
            <div class="log-entry">
                <strong>${index + 1}.</strong>
                ${item}
            </div>
        `).join("");

    log.scrollTop = log.scrollHeight;
}


/* =====================================================
   MENSAGEM
===================================================== */

function showMessage(message) {

    const oldMessage =
        document.querySelector(".temporary-message");

    if (oldMessage) {
        oldMessage.remove();
    }

    const div =
        document.createElement("div");

    div.className = "temporary-message";

    div.textContent = message;

    div.style.position = "fixed";
    div.style.bottom = "25px";
    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";
    div.style.background = "#eee5d2";
    div.style.padding = "15px 25px";
    div.style.border = "1px solid #8c795d";
    div.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    div.style.zIndex = "20";

    document.body.appendChild(div);

    setTimeout(() => {

        div.remove();

    }, 950);
}


/* =====================================================
   FINAIS
===================================================== */

function showFinal() {

    document.getElementById("game")
        .classList.remove("active");

    document.getElementById("final")
        .classList.add("active");

    const final = calculateFinal();

    document.getElementById("finalIcon")
        .textContent = final.icon;

    document.getElementById("finalTitle")
        .textContent = final.title;

    document.getElementById("finalText")
        .textContent = final.text;

    document.getElementById("reflectionText")
        .textContent = final.reflection;

    document.getElementById("finalTerritory")
        .textContent = stats.territory;

    document.getElementById("finalProtection")
        .textContent = stats.protection;

    document.getElementById("finalDocumentation")
        .textContent = stats.documentation;

    document.getElementById("finalAutonomy")
        .textContent = stats.autonomy;
}


/* =====================================================
   DEFINIÇÃO DOS 8 FINAIS
===================================================== */

function calculateFinal() {

    const t = stats.territory;
    const p = stats.protection;
    const d = stats.documentation;
    const a = stats.autonomy;


    /*
       FINAL 1
       Território + proteção + autonomia altos
    */

    if (t >= 65 && p >= 65 && a >= 60) {

        return {

            icon: "🌿",

            title: "A comunidade conseguiu se proteger",

            text:
                "Ao longo da investigação, suas decisões ajudaram a construir uma situação em que a comunidade conseguiu preservar parte importante de seu território, fortalecer sua proteção e manter espaço para participar das decisões que afetavam sua vida.",

            reflection:
                "Você percebeu que proteger uma comunidade não depende de uma única decisão. O resultado foi construído pouco a pouco, conforme você investigava os documentos e escolhia como agir."
        };
    }


    /*
       FINAL 2
       Documentação muito alta
    */

    if (d >= 80 && d >= t + 15 && d >= p + 10) {

        return {

            icon: "📚",

            title: "A história não foi apagada",

            text:
                "Você reuniu uma grande quantidade de informações e conseguiu preservar documentos e relatos importantes. Mesmo sem resolver todos os problemas da comunidade, a história permaneceu registrada.",

            reflection:
                "Sua investigação mostrou que preservar a memória também é importante. Um acontecimento pode ser esquecido quando seus registros desaparecem."
        };
    }


    /*
       FINAL 3
       Território baixo
    */

    if (t < 35) {

        return {

            icon: "🏞️",

            title: "O território ficou ameaçado",

            text:
                "As decisões tomadas durante a investigação deixaram o território da comunidade mais vulnerável. A comunidade precisou lidar com mudanças em seu espaço e com uma redução de sua capacidade de controlar aquilo que acontecia ao seu redor.",

            reflection:
                "O resultado mostra como decisões relacionadas ao território podem afetar muito mais do que um pedaço de terra: elas podem atingir a vida e a organização de uma comunidade."
        };
    }


    /*
       FINAL 4
       Proteção baixa
    */

    if (p < 35) {

        return {

            icon: "🛡️",

            title: "Os documentos chegaram tarde demais",

            text:
                "Você encontrou informações importantes, mas as decisões tomadas ao longo do caminho não conseguiram aumentar suficientemente a proteção da comunidade.",

            reflection:
                "A investigação mostrou uma diferença importante: descobrir um problema é diferente de conseguir agir sobre ele."
        };
    }


    /*
       FINAL 5
       Autonomia alta
    */

    if (a >= 75 && t >= 55) {

        return {

            icon: "🤝",

            title: "A comunidade conseguiu manter sua voz",

            text:
                "As decisões tomadas durante a investigação deram mais espaço para que a própria comunidade participasse das escolhas que afetavam seu território e sua vida.",

            reflection:
                "Proteger uma comunidade não significa simplesmente decidir por ela. Escutar as pessoas diretamente afetadas também faz parte da proteção."
        };
    }


    /*
       FINAL 6
       Documentação alta, outros indicadores baixos
    */

    if (d >= 70 && p < 55 && t < 55) {

        return {

            icon: "📄",

            title: "Você descobriu muito, mas conseguiu mudar pouco",

            text:
                "Seu arquivo ficou cheio de informações importantes. Porém, a situação da comunidade continuou difícil porque poucas decisões foram capazes de transformar aquilo que você descobriu em proteção concreta.",

            reflection:
                "A investigação mostrou que conhecimento e ação estão relacionados, mas não são a mesma coisa."
        };
    }


    /*
       FINAL 7
       Equilíbrio
    */

    const average =
        (t + p + d + a) / 4;

    const difference =
        Math.max(t, p, d, a) -
        Math.min(t, p, d, a);

    if (average >= 55 && difference <= 25) {

        return {

            icon: "🌱",

            title: "Um caminho de resistência",

            text:
                "Nenhum dos problemas desapareceu completamente, mas suas decisões ajudaram a preservar diferentes aspectos da vida da comunidade. O território, a proteção, a memória e a autonomia terminaram relativamente equilibrados.",

            reflection:
                "A investigação mostrou que situações históricas são complexas. Uma decisão pode ajudar em um aspecto e, ao mesmo tempo, não resolver outro."
        };
    }


    /*
       FINAL 8
       Final restante
    */

    return {

        icon: "📖",

        title: "O arquivo ainda não está completo",

        text:
            "Você chegou ao fim dos documentos disponíveis, mas algumas perguntas continuam sem resposta. Parte da história foi preservada, enquanto outras situações permaneceram difíceis para a comunidade.",

        reflection:
            "Talvez essa seja uma das principais descobertas da investigação: a história não cabe em uma única resposta. É preciso continuar procurando documentos, ouvir diferentes pessoas e comparar diferentes versões."
    };
}


/* =====================================================
   REINICIAR
===================================================== */

function restartGame() {

    document.getElementById("final")
        .classList.remove("active");

    document.getElementById("game")
        .classList.add("active");

    resetGame();

    renderStage();
}


/* =====================================================
   MODAIS
===================================================== */

function showHowToPlay() {

    document.getElementById("howToPlay")
        .classList.add("active");
}


function showSources() {

    document.getElementById("sources")
        .classList.add("active");
}


function closeModal(id) {

    document.getElementById(id)
        .classList.remove("active");
}
