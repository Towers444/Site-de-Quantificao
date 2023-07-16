// QuerySelect valores de entrada.

let nPavimentosEEl = document.querySelector('#nPavimentos');
let nParesFOAndarEEl = document.querySelector('#nParesFOAndar');
let nParesFOCampusEEl = document.querySelector('#nParesFOCampus');
let medidaBackboneEEl = document.querySelector('#medidaBackbone');
let especificacaoFOEEl = document.querySelector('#especificacaoFO');
let característicaFOEEl = document.querySelector('#característicaFO');
let quantBackbonesAndarEEl = document.querySelector('#quantBackbonesAndar');
let backbonePrimSecEEl = document.querySelector('#backbonePrimSec');

// QuerySelect valores de modificação tabela SEQ.

let quantMetrosFOQEl = document.querySelector('#quantMetrosFO');
let quantDioQEl = document.querySelector('#quantDio');
let quantAcopladorMMQEl = document.querySelector('#quantAcopladorMM');
let quantAcopladorSMQEl = document.querySelector('#quantAcopladorSM');
let quantEmendaTBQEl = document.querySelector('#quantEmenda');
let quantPigTailMMQEl = document.querySelector('#quantPigTailMM');
let quantPigTailSMQEl = document.querySelector('#quantPigTailSM');
let quantCordaoOpticoMMQEl = document.querySelector('#quantCordaoOpticoMM');
let quantCordaoOpticoSMQEl = document.querySelector('#quantCordaoOpticoSM');
let tipoFOQEl = document.querySelector('#tipoFO');
let tipoAcopladorInternoQEl = document.querySelector('#tipoAcopladorInterno');
let tipoCordaoOpticoInternoQEl = document.querySelector('#tipoCordaoOpticoInterno');
let tipoPigTailInternoQEl = document.querySelector('#tipoPigTailInterno');


// QuerySelect valores de modificação tabela SET.

let quantTerminadorSEl = document.querySelector('#quantTerminador');
let quantPigTailMMSEl = document.querySelector('#quantPigTailMMSet');
let tipoPigTailInternoSEl = document.querySelector('#tipoPigTailInternoSet');

// QuerySelect valores de modificação tabela Miscelânea.

let quantEtiquetasDioMEl = document.querySelector('#quantEtiquetasDio');
let quantEtiquetasCordaoPigTailMEl = document.querySelector('#quantEtiquetasCordaoPigTail');

// Botão Quantificar.
let botamQuantificarEl = document.querySelector('#botao-quantificar');
botamQuantificarEl.addEventListener('click', Quantificar);

// Botão Limpar. 
let botamLimparEl = document.querySelector('#botao-limpar');
botamLimparEl.addEventListener('click', limparCampos);

function Quantificar() {

    let nPavimentosE = parseInt(nPavimentosEEl.value);
    let nParesFOAndarE = parseInt(nParesFOAndarEEl.value);
    let nParesFOCampusE = parseInt(nParesFOCampusEEl.value);
    let quantBackbonesAndarE = parseInt(quantBackbonesAndarEEl.value);
    let medidaBackboneE = parseInt(medidaBackboneEEl.value);
    let especificacaoFOE = especificacaoFOEEl.value;
    let característicaFOE = característicaFOEEl.value;
    let backbonePrimSecE = backbonePrimSecEEl.value;

    let i;
    let totalBackbones = 0;
    let totalFOAndar = 0;
    let totalEmendasAndar = 0;
    let totalAcopladorOptico = 0;
    let totalCordaoOptico = 0;
    let totalDistribuidorOptico = 0;
    let medidaTotalBackbone = 0;
    let abrespecificacaoFOE;
    let medidaPavimentoBackbone

    //Quantificação Enlance.

    for (i = 1; i < nPavimentosE; i++) {
        medidaPavimentoBackbone = medidaBackboneE*2 + (medidaBackboneE * i);
        medidaTotalBackbone = medidaTotalBackbone + medidaPavimentoBackbone * quantBackbonesAndarE; 
    }

    quantMetrosFOQEl.innerHTML = medidaTotalBackbone * 1.2;


    //Acoplador Óptico

    totalBackbones = (nPavimentosE-1)  * quantBackbonesAndarE;
    totalFOAndar = totalBackbones * (nParesFOAndarE * 2);

    quantAcopladorMMQEl.innerHTML =  nParesFOAndarE * totalBackbones;
    quantAcopladorSMQEl.innerHTML =  nParesFOCampusE;

    //PigTails

    quantPigTailMMQEl.innerHTML =  totalFOAndar;
    quantPigTailSMQEl.innerHTML =  nParesFOCampusE * 2;

    //Cordão óptico

    if(backbonePrimSecE == 'Nao') {

        quantCordaoOpticoMMQEl.innerHTML =  (nPavimentosE - 1)  * quantBackbonesAndarE * nParesFOAndarE;
        totalCordaoOptico = (((nPavimentosE - 1)  * quantBackbonesAndarE * nParesFOAndarE) + nParesFOCampusE)

    } else {
        quantCordaoOpticoMMQEl.innerHTML =  nPavimentosE  * quantBackbonesAndarE * nParesFOAndarE;
        totalCordaoOptico = ((nPavimentosE  * quantBackbonesAndarE * nParesFOAndarE) + nParesFOCampusE)
    }

    quantCordaoOpticoSMQEl.innerHTML =  nParesFOCampusE;


    //Bandeja Emenda

    totalEmendasAndar = Math.ceil(totalFOAndar / 12); 

    quantEmendaTBQEl.innerHTML = totalEmendasAndar;

    //Distribuidor Óptico

    totalAcopladorOptico = (nParesFOAndarE * totalBackbones) + nParesFOCampusE;
    totalDistribuidorOptico = Math.ceil(totalAcopladorOptico / 24)

    quantDioQEl.innerHTML = totalDistribuidorOptico;

    //Terminador Óptico

    quantTerminadorSEl.innerHTML = (totalBackbones  *  (Math.ceil(((nParesFOAndarE*2)/8))))

    //Pig Tails's TO
    quantPigTailMMSEl.innerHTML =  totalFOAndar/2;

    //Etiquetas Portas DIO

    quantEtiquetasDioMEl.innerHTML = totalDistribuidorOptico * 24;

    //Etiquetas Cordões Ópticos e Pig Tail's (TO)

    quantEtiquetasCordaoPigTailMEl.innerHTML = totalFOAndar/2 + totalCordaoOptico 

    //Caracterísiticas FO

    if (especificacaoFOE.indexOf("MM") !== -1 || especificacaoFOE.indexOf("mm") !== -1 ) {

        abrespecificacaoFOE = 'MM';
    } else {
        abrespecificacaoFOE = 'SM';
    }

    tipoFOQEl.innerHTML = `Cabo de Fibra Óptica${especificacaoFOE} ${característicaFOE}- com ${nParesFOAndarE * 2} fibras`;
    tipoAcopladorInternoQEl.innerHTML =  `Acoplador óptico Interno  ${característicaFOE} - ${abrespecificacaoFOE} - LC - duplo`;
    tipoCordaoOpticoInternoQEl.innerHTML = `Cordão Óptico Interno  ${característicaFOE} - ${abrespecificacaoFOE} - 3m - duplo - conector LC`;
    tipoPigTailInternoQEl.innerHTML = `Pig tail Interno ${característicaFOE} - ${abrespecificacaoFOE} - 1,5m - simples - conector LC`
    tipoPigTailInternoSEl.innerHTML = `Pig tail ${característicaFOE} - ${abrespecificacaoFOE} - 3,0m - duplo - conector LC`

}

function limparCampos() {

    nPavimentosEEl.value = ' ';
    nParesFOAndarEEl.value = ' ';
    nParesFOCampusEEl.value = ' ';
    quantBackbonesAndarEEl.value = ' ';
    medidaBackboneEEl.value = ' ';
    especificacaoFOEEl.value = ' ';
    característicaFOEEl.value = ' ';
    backbonePrimSecEEl.value = ' ';

}