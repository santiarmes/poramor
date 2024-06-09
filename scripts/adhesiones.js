const artistas = ["ANTONIO GASALLA (Actor)",
"PERES CELIZ (Artista Plastico)",
"CELESTE CARBALLO (Musico)",
"RICARDO DARIN (Actor)",
"CHARLY GARCIA (Musico)",
"JULIO BOCCA (Bailarin)",
"PARALAMAS do SUCESSO (Musicos) - BRASIL",
"INES ESTEVEZ (Actriz)",
"HILDA LIZARAZU (Musico)",
"FABIAN VENA (Actor)",
"GUSTAVO CERATI (Musico)",
"KUITCA (Artista Plastico)",
"ANY VENTURA (Periodista)",
"RUBEN ALBARRAN (Cante de CAFE TACUBA) - MEXICO",
"IVONNE GUZMAN (cantante BANDANA)",
"FERNANDO PEÑA (actor)",
"ZETA BOSSIO (Musico)",
"GABY HERBSTEIN (Fotografa)",
"ZUKER (DJ)",
"CHARLY ALBERTI (Musico)",
"NORA LEZANO (Fotografa)",
"GASTON PAULS (Actor)",
"MAITENA (Dibujante)",
"JULIETA NOVARRO (Actriz)",
"MARIANA ARIAS (Modelo)",
"ADICTA (Grupo de Musica)",
"MATIAS MARTIN (Conductor de TV)",
"HORACIO CABAK (Modelo)",
"CECILIA AMENABAR (Dj)",
"MIMI MAURA (Musico)",
"NOEMI FRENKEL (Actriz)",
"A.N.I.M.A.L (Grupo de Rock)",
"MARIA SOCAS (Actriz)",
"DANTE SPINETTA (Musico) MARTINA LURI (Periodista)",
"ANTONIO BIRABENT (Musico)",
"MARTIN JAITE (Deportista)",
"CATARINA SPINETTA (Conductora TV)",
"LEO GARCIA (Musico)",
"JAZMIN DE GRAZIA (Modelo)",
"PURA (Grupo de Musica)",
"GINETTE REYNAL (Modelo)",
"ALTOCAMET (Grupo de Musica)",
"LEANDRO FRESCO (Dj)",
"SEBASTIAN CORREA (Maquillador)",
"CECILIA Caramelito CARRIZO (Conductora TV)",
"MILTON AMADEO (Musico)",
"FERNANDO TROCCA (Chef)",
"DANIEL OJEDA (Artista Plasitco)",
"FLAVIO ETCHETO (Musico)",
"DIONISIO HEIDERSCHEID (Modelo)",
"PABLO FISHERMAN (Director de Cine)",
"ALEJO PERNIGOTTI (muralista)",
"DR TRINCADO (Dj)",
"FAVIO POSCA (ACTOR)",
"NARDA LEPES (CHEF)",
"ARBOL (Grupo de Musica)",
"EMANUEL HORVILLEUR (Musico)",
"MIRANDA (Grupo de Musica)",
"IGNACIO VIALE (h) (Conductor de TV)",
"LOS LATIGOS (Grupo de Rock)",
"AUGUSTO CONSTHANZO (Dibujante)",
"LAURA NOVOA (Actriz)",
];

const column1Count = 21;
const column2Count = 21;
const column3Count = artistas.length - column1Count - column2Count;

const ulartistas1 = document.getElementById('ul-artistas-1');
const ulartistas2 = document.getElementById('ul-artistas-2');
const ulartistas3 = document.getElementById('ul-artistas-3');


for (let i = 0; i < column1Count; i++) {   
   const li = document.createElement('li');
   li.textContent = artistas[i];
   li.classList.add('list-item');
   ulartistas1.appendChild(li);     
}


for (let i = column1Count; i < column1Count + column2Count; i++) {   
    const li = document.createElement('li');
    li.textContent = artistas[i];
    li.classList.add('list-item');
    ulartistas2.appendChild(li);     
 }

 
for (let i = column1Count + column2Count; i < artistas.length; i++) {   
    const li = document.createElement('li');
    li.textContent = artistas[i];
    li.classList.add('list-item');
    ulartistas3.appendChild(li);     
 }


 //ENTIDADES DE BIEN PUBLICO, AGRUPACIONES

 const entidades = [
    "CRUZ ROJA ARGENTINA",
    "MUNICIPIOS SALUDABLES DE LA CIUDAD DE LA BANDA - Santiago del Estero - Argentina",
    "PROYECTO CONCIENCIA (Iniciativa Civil para la Prevencion del Sida en Usuahia) - Usuahia - Argentina",    
    "I.S.P.E (Instituto de servicios y politicas estudiantiles) - La Rioja - Argentina",  
    "BANCO DE HORAS (Voluntariado de profesionales de Salud Mental) - BRASIL",   
    "S.A.S. (filial Cuyo) - San Juan - Argentina", 
    "GRUPO DE MUJERES DE ARGENTINA, FORO DE VIH MUJERES Y FLIA. VIH-SIDA/GLTTB/ SITUACION DE ENCIERRO - Arg", 
    "RED BAHIENSE PVVS - Bahia Blanca - Argentina",  
    "SERVICIO DE INFECTOLOGÍA Y ASISTENCIA SOCIAL DEL HOSPITAL ANGEL C. PADILLA - Tucumán - Argentina",  
    "FUNDARVIDA Cartagena - COLOMBIA",  
    "CENTRO ÚNICO DE REFERENCIA - Catamarca - Argentina",  
    "ORG. PH15 - Ciudad Oculta, Buenos Aires - Argentina",  
    "ASOCIACIÓN CIS (CONVIVIR POR LA IGUALDAD EN SOCIEDAD) - Tucumán - Argentina", 
    "PROGRAMA NACIONAL DE LUCHA CONTRA LOS RH, SIDA Y ETS - Argentina",  
    "FUNDACION VENCER (Organización civil de PVVS) Asunción - PARAGUAY",  
    "ORGANIZACION INTERPARES - Parana, Entre Rios - Argentina", 
    "UTE-CETERA - Capital - Sec. Cultura - Argentina",  
    "TIERRA DEL FUEGO POR LA VIDA - T. Del Fuego - Argentina", 
    "BANCO DE AÇOES CULTURAIS (Voluntarios para iniciativas de prevencion) - BRASIL", 
    "ASOC. CIVIL CONVIVIR - Resistencia, Chaco - Argentina", 
    "ACCION EN SIDA - Lima - PERU",  
    "FUNDAMIND - Bs As - Argentina",
    "J.E.V.I.H.S. Red de voluntarios - (Jujeños Enfrentando al VIH/SIDA) Jujuy - Argentina",
    "REDJUJUY+ y Delegaciones Departamentales de: Palpalá, Humahuaca, Perico, Capital, Lib. Gral. San Martin - Arg.",
    "FUNDACION POR LAS DUDAS - Buenos Aires - Argentina",
    "ACeS (Adolescentes Contra el Sida) Jesús María, Córdoba - Argentina",
    "PROGRAMA VIH/SIDA - La Pampa - Argentina",
    "ASOCIACION AGUA BUENA - COSTA RICA",
    "GRUPO UTOPIA - Mar del Plata - Prov. de Bs. As. - Argentina",
    "SERVICIO UNIVERSITARIO MUNDIAL ( S.U.M.) Barracas - Capital Federal - Argentina",
    "SOCIEDAD ARGENTINA de SIDA - Argentina",
    "RED PREVENTIVA MIXTA - Tucumán - Argentina",
    "FUNDACION HELIOS - Buenos Aires - Argentina",
    "UNIDAD COORDINADORA VIH/SIDA Y ETS ASOCIACIÓN CAUSAY (VIDA) - Tucumán - Argentina",
    "FRENTE UNIVERSITARIO DE CIENCIAS ECONOMICAS de la Universidad. Nac. de Salta - Arg.",
    "FUNDACION HUESPED - Bs As - Argentina",
    "FACULTAD DE PSICOLOGÍA DE LA UNT (CÁTEDRA ESTRATEGIAS DE PREVENCIÓN) - Tucumán - Argentina",
    "O.F.E.S. (Organización Familiares Enfrentando al SIDA) Rosario - Santa Fe - Argentina",
    "ACAAD - Argentina",
    "FEDERACION UNIVERSITARIA DEL NORDESTE - Chaco y Corrientes - Argentina",
    "FUNDEQ (FUNDACIÓN DESARROLLO Y EQUIDAD) - Tucumán - Argentina",
    "FUND-HIV-SIDA - Entre Ríos - Argentina",
    "VIViHS - Catamarca - Argentina",
    "U.CON.SI. - Córdoba - Argentina",
    "ASISTENCIA PÚBLICA DE TAFÍ VIEJO (PROYECTO 'MAMITA SANA') - Tucumán - Argentina",
    "ASOCIACIÓN ARIADNA (PROYECTO 'SUYAY') - Tucumán - Argentina",
    "RECABAPVVS (Red de la ciudad autónoma) - Buenos Aires - Argentina",
    "CRUZ ROJA FILIAL TUCUMÁN - Tucumán - Argentina",
    "INSTITUTO DE LA MUJER - La Paz, Entre Rios - Argentina",
    "FUNDACION Dar.Lo.Cab - Vij - Jujuy, Argentina",
    "FUNDACIÓN MIGUEL ABUELO - Buenos Aires - Argentina",
    "PROYECTO FAUNA - Mar del Plata, Pcia de Buenos Aires",
    "PROGRAMA DE VOLUNTARIADO SER SOLIDARIO (Sec.de Desarrollo Social, GCBA) - Argentina",
    "INSTITUCION RUNA WASI - Argentina",
    "SI MUJER  (Servicios Integrales para la Mujer) - NICARAGUA",
    "COMITE DE VIH/SIDA, HOSP. ZONAL DE CALETA OLIVIA, Santa Cruz.- Argentina",
    "FUNDACION CONVIVIR , Chaco - Argentina",
    "CRUZ ROJA FILIAL RESISTENCIA , Chaco  - Argentina",
    "PROGRAMAN PROVINCIAL DE SIDA DE T.DEL FUEGO  -  Argentina",
    "ONG XTI - XMI (Por ti - Por mi)  Chaco  - Argentina",
    "PROGRAMA DE RESPONSABILIDAD SOCIAL (Coordinación y Seguimiento, Jefat.Gab, GCBA) - Argentina",
    "AREA JUVENTUD,SECRETARIA DE DESARROLLO SOCIAL, de la Prov. del Chaco  - Argentina",
    "FUNDACION CASA GRANDE, Chaco  - Argentina",
    "CENTRO DE SALUD MENTAL #3 DR. ARTURO AMEGHINO, Buenos Aires - Argentina",
    "DIREC. DERECHOS HUMANOS/MUNICIP. DEL PARTIDO DE LA COSTA (Sec. de Promoción Social y Humano) Bs As - Arg.",
    "FUNDACION DESCIDA - Buenos Aires, Argentina",
    "ENS 34  PEDRO HENRIQUEZ UREÑA  Chaco  - Argentina",    
    "RED DE HIV-SIDA, DIREC.DE SALUD MENTAL (Sec. de Salud, GCBA) - Buenos Aires -  Arg",
    "ORGANIZACION HEPATITIS C 2000 -  Buenos Aires - Arg",
 ]

const entidadesColumn1Count = 23;
const entidadesColumn2Count = 23;
const entidadesColumn3Count = entidades.length - entidadesColumn1Count - entidadesColumn2Count;

const ulentidades1 = document.getElementById('ul-entidades-1');
const ulentidades2 = document.getElementById('ul-entidades-2');
const ulentidades3 = document.getElementById('ul-entidades-3');

for (let i = 0; i < entidadesColumn1Count; i++) {   
    const li = document.createElement('li');
    li.textContent = entidades[i];
    li.classList.add('list-item');
    ulentidades1.appendChild(li);     
 }
 
 
 for (let i = entidadesColumn1Count; i < entidadesColumn1Count + entidadesColumn2Count; i++) {   
     const li = document.createElement('li');
     li.textContent = entidades[i];
     li.classList.add('list-item');
     ulentidades2.appendChild(li);     
  }
 
  
 for (let i = entidadesColumn1Count + entidadesColumn2Count; i < entidades.length; i++) {   
     const li = document.createElement('li');
     li.textContent = entidades[i];
     li.classList.add('list-item');
     ulentidades3.appendChild(li);     
  }
 

  //SALUD

  const salud = [
        "DR. ENRIQUE ANDINO (Homeopata) San Martin de los Andes, Neuquen - Argentina",
        "DR. PEDRO CAHN (Presidente electo de la Sociedad Internacional de Sida - IAS)",
        "DRA. PAULA RIVAS SZUST (Médicos del Mundo) - desde MOZAMBIQUE",
        "DR. IGNACIO AGUIRRE (Bioquimico) - Cordoba - Argentina",
        "DRA. CARMEN LENT (Psicologa) - BRASIL",
        "DRA. FLORENCIA SCHRAGER - (Homeopata) Buenos Aires - Argentina",
        "DRA. LILIANA LOPEZ (Psicoanalista) Buenos Aires - Argentina",
        "DR. REYNALDO AGUILAR (Epidemiólogo, Salud Infantil) - NICARAGUA",
        "DRA. CARINA DE LUCIA (Clinica) Bs As - Argentina",
        "DRA. CRISTINA FONTNA (Psicoanalista) Madrid - ESPAÑA;",
        "DRA. GABRIELA HAMILTON (Bioquímica) Buenos Aires - Argentina",
        "DR. ROBERTO A. COLLA (Bioquimico) Río Tercero, Córdoba - Argentina",
        "DRA. PAULA MOYANO (Ginecologa/Obstetra) Portland, Oregon - EEUU",
        "DR. GUSTAVO GRET (Infectologo) Bs As - Argentina",
        "DR. DANIEL FORSTER (Psiquiatra) Cap.Fed - Argentina",
        "DRA. GABRIELA SICA (Medica infectologa) Bs As - Argentina",
        "DR. JORGE LOBOV (Psicoanalista) Buenos Aires - Argentina",
        "DR. MARCELO LAURIDO (Médico Infectólogo) - Buenos Aires - Argentina",
        "DRA. ALMA FABIOLA MORALES (Salud Materna y Adolescencia) - NICARAGUA",
        "LIC. ISABEL DEL CARMEN MARTINEZ (Lic Trabajo Social) Buenos Aires - Argentina",
        "DRA. ELENA LUBIAN (Psicoanalista) Buenos Aires - Argentina",
        "DR. EDGARDO BOTTARO (Médico Infectólogo) Buenos Aires - Argentina",
        "DRA. GABRIELA PIOVANO (Medica) Buenos Aires - Argentina",
        "DRA. ISABEL CASSETTI (Médica Infectóloga) Buenos Aires - Argentina",
        "DR. LUIS DAJUD (Odontólogo) Buenos Aires - Argentina",
        "DRA.GABRIELA BUGARIN (Médica Infectóloga) Buenos Aires - Argentina",
        "DRA GRACIELA CORATELLA (Psicóloga Social) Buenos Aires - Argentina",
        "DR. JAVIER BUSTOS (Psiquiatra) Buenos Aires - Argentina",
        "LIC. DOLORES FENOY (Psicologa) Buenos Aires - Argentina",
        "DRA. ANA URQUIZA (Médica Infectóloga) Buenos Aires - Argentina",
        "DRA. PATRICIA TRINIDAD (Médica Infecto-Pediatra) Buenos Aires - Argentina",
        "DR. PEDRO PIECZANSKI (Psiquiatra) Buenos Aires - Argentina",
        "LIC. ANDY ALVAREZ GAMARRA (Comunicadora Social) Resistencia, Chaco - Argentina",
        "LIC. LAURA VULCANO (Psic&#56178;&#57319;a) Buenos Aires - Argentina",
        "DR. OMAR SUED (médico infectólogo) - Argentina",
        "DRA. MARIANA CECILIA CUPITO (Psicologa) Buenos Aires - Argentina",
        "DRA. SUSANA HERMOSID (Hosp. Durand) Bs.As - Argentina",
        "LIC. ALEJANDRO M. FRIDMAN (Docente) Buenos Aires - Argentina",
        "DRA. DANIELA GARONE (Medica infectologa) Buenos Aires - Argentina",
        "LIC. MARIA MERCEDES AIRA (Psicoanalista) Buenos Aires - Argentina",
        "DR. FERNANDO VESPERONI (Infecto-pediatra) Buenos Aires - Argentina",
        "LIC. SACHA DOMENECH (Psicoanalista) Buenos Aires - Argentina",
        "Dr. RAUL SARNO (Medico) Buenos Aires - Argentina",
        "LIC. MONICA GRANOVSKY (Psicologa) Buenos Aires - Argentina",
        "DRA MARIA C. HISI (psic&#56178;&#57319;a) Capital - Argentina",
        "LIC. MARCELA P PELLEGRINO (psicóloga) Buenos Aires - Argentina",
        "LIC. MARIA CECILIA JUSTO (psicoanalista) Capital - Argentina",
        "DRA. MARTHA CHAVES DE DUTTO (Tocoginecologa, prevención y salud reproductiva) Río Tercero, Cordoba - Arg",
        "DR ENRIQUE GOMEZ(Especialista en VIH/SIDA) Mexicali - MEXICO",
        "DRA. TERESITA BENITEZ (Resp. del programa Provincial de Prevención del VIH SIDA) Chaco - Argentina",
        "LIC. RUBEN NESTOR SCARPA (Psicologo) Chaco - Argentina",
        "DR. ESPARZA (Especialista en VIH/SIDA) Mexicali - MEXICO",
        "LIC. LEONOR SUAREZ (Docente, Investig. en HIV/SIDA)  Bs As. - Argentina",
        "DRA.MARIA ALEJANDRA BORDATO (Psiquiatra infanto juvenil) Bs As - Argentina",
  ];

const saludColumn1Count = 18;
const saludColumn2Count = 18;
const saludColumn3Count = salud.length - saludColumn1Count - saludColumn2Count;

const ulsalud1 = document.getElementById('ul-salud-1');
const ulsalud2 = document.getElementById('ul-salud-2');
const ulsalud3 = document.getElementById('ul-salud-3');

for (let i = 0; i < saludColumn1Count; i++) {   
    const li = document.createElement('li');
    li.textContent = salud[i];
    li.classList.add('list-item');
    ulsalud1.appendChild(li);     
 }
 
 
 for (let i = saludColumn1Count; i < saludColumn1Count + saludColumn2Count; i++) {   
     const li = document.createElement('li');
     li.textContent = salud[i];
     li.classList.add('list-item');
     ulsalud2.appendChild(li);     
  }
 
  
 for (let i = saludColumn1Count + saludColumn2Count; i < salud.length; i++) {   
     const li = document.createElement('li');
     li.textContent = salud[i];
     li.classList.add('list-item');
     ulsalud3.appendChild(li);     
  }