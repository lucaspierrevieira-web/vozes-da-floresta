* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Georgia, "Times New Roman", serif;
    background: #171512;
    color: #2d2924;
    min-height: 100vh;
}

button {
    font-family: inherit;
    cursor: pointer;
}

.screen {
    display: none;
    min-height: 100vh;
}

.screen.active {
    display: block;
}


/* =========================
   MENU
========================= */

#menu {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background:
        radial-gradient(circle at center, #3a332a, #171512 70%);
}

#menu.active {
    display: flex;
}

.menu-box {
    width: min(700px, 100%);
    background: #eee5d2;
    padding: 50px;
    border: 1px solid #9a896c;
    box-shadow: 0 15px 50px rgba(0,0,0,.5);
    text-align: center;
}

.stamp {
    display: inline-block;
    border: 2px solid #7a332b;
    color: #7a332b;
    padding: 6px 12px;
    font-size: 13px;
    letter-spacing: 2px;
    transform: rotate(-2deg);
    margin-bottom: 20px;
}

.menu-box h1 {
    font-size: 48px;
    margin-bottom: 12px;
}

.subtitle {
    font-size: 21px;
    margin-bottom: 25px;
}

.intro {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    color: #554d43;
    margin-bottom: 15px;
}

.warning {
    margin-top: 30px;
    padding: 14px;
    background: #ded4c0;
    font-family: Arial, sans-serif;
    font-size: 13px;
    line-height: 1.5;
}


/* =========================
   BOTÕES
========================= */

.main-button,
.secondary-button,
.investigate-button {
    border: none;
    padding: 14px 22px;
    font-size: 17px;
    margin: 8px;
    transition: .2s;
}

.main-button {
    background: #6f3f2d;
    color: white;
}

.main-button:hover {
    background: #522d21;
    transform: translateY(-2px);
}

.secondary-button {
    background: #cfc1a7;
    color: #302a23;
}

.secondary-button:hover {
    background: #b9a98c;
}

.investigate-button {
    background: #303f35;
    color: white;
    width: 100%;
    margin: 25px 0 0;
}

.investigate-button:hover {
    background: #1f2b24;
}


/* =========================
   HEADER
========================= */

header {
    background: #211e1a;
    color: #eee5d2;
    padding: 20px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.small-title {
    font-family: Arial, sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    opacity: .7;
}

header h2 {
    margin-top: 5px;
}

.progress-container {
    width: 230px;
}

.progress-container span {
    font-family: Arial, sans-serif;
    font-size: 13px;
}

.progress {
    height: 7px;
    background: #4b443b;
    margin-top: 7px;
}

#progressBar {
    height: 100%;
    width: 0%;
    background: #b89056;
    transition: .4s;
}


/* =========================
   LAYOUT
========================= */

.game-layout {
    width: min(1300px, 94%);
    margin: 35px auto;
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 25px;
}


/* =========================
   DOCUMENTO
========================= */

.document-area {
    display: flex;
    justify-content: center;
}

.document {
    width: 100%;
    background: #eee5d2;
    padding: 45px;
    min-height: 600px;
    border: 1px solid #a9987a;
    box-shadow: 0 10px 30px rgba(0,0,0,.3);
}

.document-top {
    display: flex;
    justify-content: space-between;
    font-family: Arial, sans-serif;
    font-size: 12px;
    color: #766b5b;
    border-bottom: 1px solid #b9a98d;
    padding-bottom: 10px;
    margin-bottom: 35px;
}

.document h1 {
    font-size: 34px;
    margin-bottom: 20px;
}

.document > p {
    font-size: 18px;
    line-height: 1.8;
    max-width: 850px;
}


/* =========================
   INVESTIGAÇÃO
========================= */

.investigation {
    background: #ddd1b9;
    border-left: 5px solid #765a36;
    padding: 20px;
    margin-top: 30px;
}

.investigation-title {
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 10px;
}

.investigation p {
    line-height: 1.7;
    margin-bottom: 15px;
}

.clue {
    background: #eee5d2;
    padding: 13px;
    line-height: 1.5;
}


/* =========================
   ESCOLHAS
========================= */

.choices {
    margin-top: 30px;
}

.choices h3 {
    font-size: 24px;
    margin-bottom: 5px;
}

.choice-help {
    color: #6c6255;
    margin-bottom: 18px;
}

.choice {
    display: block;
    width: 100%;
    text-align: left;
    background: #e1d6c0;
    border: 1px solid #a89778;
    padding: 17px;
    margin: 12px 0;
    color: #302b25;
    transition: .2s;
}

.choice:hover {
    background: #cfc0a4;
    transform: translateX(4px);
}

.choice strong {
    display: block;
    font-size: 17px;
    margin-bottom: 5px;
}

.choice small {
    font-family: Arial, sans-serif;
    color: #665c50;
    line-height: 1.5;
}


/* =========================
   SIDEBAR
========================= */

aside {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.panel {
    background: #eee5d2;
    padding: 20px;
    border: 1px solid #a9987a;
}

.panel h3 {
    margin-bottom: 18px;
}

.stat {
    margin-bottom: 18px;
    font-family: Arial, sans-serif;
}

.stat > div:first-child {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-bottom: 6px;
}

.bar {
    height: 8px;
    background: #c6bba6;
}

.bar div {
    height: 100%;
    width: 50%;
    transition: .5s;
}

#territoryBar {
    background: #68775e;
}

#protectionBar {
    background: #765d54;
}

#documentationBar {
    background: #65717a;
}

#autonomyBar {
    background: #85714e;
}

.panel p {
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 8px;
}

.clues {
    font-family: Arial, sans-serif;
    font-size: 13px;
    line-height: 1.6;
}

.clue-item {
    padding: 8px;
    background: #ddd1b9;
    margin-top: 7px;
}

.log {
    font-family: Arial, sans-serif;
    font-size: 12px;
    line-height: 1.6;
    max-height: 180px;
    overflow-y: auto;
}

.log-entry {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #c5b89f;
}


/* =========================
   FINAL
========================= */

#final {
    padding: 50px 20px;
    background:
        radial-gradient(circle at center, #393229, #171512 70%);
}

.final-box {
    max-width: 850px;
    margin: auto;
    background: #eee5d2;
    padding: 50px;
    text-align: center;
    border: 1px solid #a9987a;
    box-shadow: 0 15px 50px rgba(0,0,0,.5);
}

.final-icon {
    font-size: 70px;
    margin: 15px;
}

.final-box h1 {
    font-size: 38px;
    margin-bottom: 10px;
}

#finalText {
    font-size: 19px;
    line-height: 1.8;
    margin: 20px auto;
    max-width: 700px;
}

.final-reflection {
    background: #ddd1b9;
    padding: 25px;
    text-align: left;
    margin: 30px 0;
}

.final-reflection h3 {
    margin-bottom: 10px;
}

.final-reflection p {
    line-height: 1.7;
}

.final-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 25px 0;
}

.final-stats div {
    background: #ddd1b9;
    padding: 15px;
}

.final-stats span {
    display: block;
    font-family: Arial, sans-serif;
    font-size: 12px;
}

.final-stats strong {
    display: block;
    font-size: 25px;
    margin-top: 5px;
}

.historical-note {
    text-align: left;
    background: #d8ccb5;
    padding: 25px;
    line-height: 1.7;
}

.historical-note h3 {
    margin-bottom: 10px;
}

.historical-note p {
    margin-bottom: 12px;
}


/* =========================
   MODAL
========================= */

.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.75);
    z-index: 10;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal.active {
    display: flex;
}

.modal-content {
    position: relative;
    max-width: 650px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    background: #eee5d2;
    padding: 40px;
}

.modal-content h2 {
    margin-bottom: 20px;
}

.modal-content p,
.modal-content li {
    font-family: Arial, sans-serif;
    line-height: 1.7;
    margin-bottom: 12px;
}

.modal-content ul {
    padding-left: 20px;
}

.close {
    position: absolute;
    right: 15px;
    top: 10px;
    background: none;
    border: none;
    font-size: 30px;
}


/* =========================
   UTILIDADES
========================= */

.hidden {
    display: none !important;
}


/* =========================
   RESPONSIVO
========================= */

@media (max-width: 900px) {

    .game-layout {
        grid-template-columns: 1fr;
    }

    aside {
        order: 2;
    }

    .final-stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {

    .menu-box,
    .document,
    .final-box {
        padding: 25px;
    }

    .menu-box h1 {
        font-size: 36px;
    }

    .document h1 {
        font-size: 27px;
    }

    header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .progress-container {
        width: 100%;
    }

    .final-stats {
        grid-template-columns: 1fr;
    }
}
