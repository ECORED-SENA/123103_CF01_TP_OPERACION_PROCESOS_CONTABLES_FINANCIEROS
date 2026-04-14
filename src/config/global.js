export default {
  global: {
    Name:
      'Fundamentos, cálculo y diligenciamiento de declaraciones tributarias',
    Description:
      'Este componente formativo se enfoca en el desarrollo de competencias técnicas para la gestión integral y el cumplimiento de las obligaciones fiscales, siguiendo un orden lógico que permite al aprendiz planear de manera estratégica la elaboración de declaraciones según el tipo de contribuyente. A través del análisis normativo y el manejo de información financiera rigurosa, el participante adquiere las habilidades necesarias para elaborar reportes precisos, fundamentados en soportes contables válidos y verificados frente a la normativa vigente para garantizar la exactitud ante las autoridades. Finalmente, el programa capacita para proponer ajustes preventivos o correctivos alineados con las políticas organizacionales y los sistemas de control interno, asegurando una mejora continua que abarca desde la recolección de la materia prima contable hasta la auditoría tributaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo y planeación tributaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamentación jurídica y normativa fiscal vigente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos fundamentales y tipología de los tributos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de contribuyentes y regímenes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Cronograma y cumplimiento legal',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de la información y soportes documentales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Fuentes de información tributaria ¿de dónde salen los datos que luego se declaran?',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métodos de liquidación y herramientas de cálculo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Depuración y determinación del impuesto: ingresos, costos, deducciones, beneficios, pérdidas, retenciones y anticipo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas de cálculo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Paso a paso general para elaborar declaraciones de renta',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123103_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Año gravable',
      significado:
        'Periodo fiscal (generalmente anual) al que corresponden los ingresos, costos, deducciones y demás hechos económicos que se reportan en la declaración.',
    },
    {
      termino: 'Anticipo del impuesto sobre la renta',
      significado:
        'Pago anticipado del impuesto de renta del año siguiente, calculado en la declaración del período actual conforme a lo establecido en el artículo 807 del Estatuto Tributario. Su objetivo es facilitar el recaudo gradual del impuesto.',
    },
    {
      termino: 'Base gravable',
      significado:
        'Valor económico sobre el cual se aplica la tarifa del tributo, obtenido después de realizar las depuraciones permitidas por la norma, como costos, deducciones y beneficios tributarios.',
    },
    {
      termino: 'Calendario tributario',
      significado:
        'Instrumento normativo expedido anualmente por el Gobierno Nacional que establece los plazos oficiales para declarar y pagar los impuestos administrados por la DIAN, organizados generalmente según los últimos dígitos del NIT.',
    },
    {
      termino: 'Conciliación fiscal',
      significado:
        'Proceso de control que explica y justifica las diferencias entre la información contable y fiscal, obligatorio para ciertos contribuyentes mediante los formatos 2516 o 2517, según corresponda.',
    },
    {
      termino: 'Contribuyente',
      significado:
        'Persona natural, jurídica o entidad que, por la realización de un hecho generador previsto en la ley, adquiere la obligación de cumplir deberes formales y sustanciales frente a la administración tributaria.',
    },
    {
      termino: 'Costos',
      significado:
        'Erogaciones directamente relacionadas con la obtención de ingresos, necesarias para determinar la renta bruta y cuya procedencia fiscal depende del cumplimiento de requisitos legales y de soporte.',
    },
    {
      termino: 'Declaración tributaria',
      significado:
        'Documento formal mediante el cual el contribuyente informa a la DIAN los hechos económicos ocurridos durante un período gravable, con base en los cuales se determina el impuesto a cargo, el saldo a pagar o el saldo a favor.',
    },
    {
      termino: 'Deducciones',
      significado:
        'Gastos necesarios, proporcionales y causales relacionadas con la actividad productora de renta, que la ley autoriza restar de la renta bruta para determinar la renta líquida.',
    },
    {
      termino: 'Depuración del impuesto',
      significado:
        'Proceso secuencial definido en el artículo 26 del Estatuto Tributario mediante el cual se determina la renta líquida gravable, partiendo de los ingresos y restando costos, deducciones y beneficios permitidos.',
    },
    {
      termino: 'Documento soporte',
      significado:
        'Soporte fiscal que respalda costos, deducciones o impuestos descontables en operaciones realizadas con sujetos no obligados a expedir factura, elaborado conforme a los lineamientos técnicos de la DIAN.',
    },
    {
      termino: 'Expediente tributario',
      significado:
        'Conjunto organizado de documentos físicos o digitales que respaldan una declaración tributaria, incluyendo soportes, papeles de trabajo, conciliaciones, declaraciones presentadas y comprobantes de pago.',
    },
    {
      termino: 'Formulario tributario',
      significado:
        'Formato oficial establecido por la DIAN para la declaración de impuestos, como el Formulario 210 para personas naturales residentes o el Formulario 110 para personas jurídicas y otros contribuyentes.',
    },
    {
      termino: 'Hecho generador',
      significado:
        'Situación, acto o evento definido por la ley cuya realización da origen a la obligación tributaria, como la obtención de ingresos, la venta de bienes o la prestación de servicios.',
    },
    {
      termino: 'Impuesto',
      significado:
        'Tributo obligatorio exigido por el Estado sin una contraprestación directa, destinado a financiar el gasto público, como el impuesto sobre la renta o el IVA.',
    },
    {
      termino: 'Ingreso',
      significado:
        'Incremento económico susceptible de producir aumento patrimonial para el contribuyente, que debe ser reconocido y declarado conforme a las reglas de realización establecidas por la normativa tributaria.',
    },
    {
      termino: 'Residencia fiscal',
      significado:
        'Condición jurídica que determina el alcance de los ingresos y el patrimonio a declarar, definida principalmente por la permanencia en Colombia por más de 183 días dentro de un período de 365 días, según el artículo 10 del Estatuto Tributario.',
    },
    {
      termino: 'Retención en la fuente',
      significado:
        'Mecanismo de recaudo anticipado del impuesto, mediante el cual un agente retenedor descuenta un porcentaje del pago realizado al contribuyente y lo consigna a favor de la DIAN.',
    },
    {
      termino: 'Régimen tributario',
      significado:
        'Sistema que determina la forma de cumplimiento de las obligaciones fiscales de un contribuyente, como el régimen ordinario, el régimen especial o el régimen simple de tributación.',
    },
    {
      termino: 'Renta líquida gravable',
      significado:
        'Resultado final de la depuración del impuesto sobre la renta, luego de restar costos, deducciones y beneficios permitidos, base sobre la cual se aplica la tarifa para calcular el impuesto a cargo.',
    },
    {
      termino: 'Soportes documentales',
      significado:
        'Evidencias que demuestran la ocurrencia de los hechos económicos y la procedencia de los valores declarados, tales como facturas, certificaciones, extractos bancarios, contratos y comprobantes de pago.',
    },
  ],
  referencias: [
    {
      referencia:
        'Actualicese.com. (2025). Declaración de renta de personas naturales paso a paso.',
      link:
        'https://actualicese.com/declaracion-de-renta-personas-naturales/?srsltid=AfmBOorFSe40k8ix7Kp_rWFhLDbtxUqA2BS78kj4jJTKlPEv7UtCMrlc',
    },
    {
      referencia:
        'Angulo, R. (2023). El impuesto de renta y complementarios: Análisis integral. Bogotá, Colombia: Nueva Legislación.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). LEY ESTATUTARIA 1581 "Por la cual se dictan disposiciones generales para la protección de datos personales.".',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2022). Ley 2277 de 2022: Por medio de la cual se adopta una reforma tributaria para la igualdad y la justicia social. Diario Oficial No. 52.247.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1989). Decreto 624 "Por el cual se expide el Estatuto Tributario de los Impuestos Administrados por la Dirección General de Impuestos Nacionales". Diario Oficial No. 38.756.',
      link: '',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const]. (1191). Constitución Política de Colombia [Const]. Legis Editores.',
      link: '',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const] Artículos 338 y 363. (1991). Bogotá: Legis Editores.',
      link: '',
    },
    {
      referencia:
        'DIAN. (2020). Compilación Jurídica DIAN. OFICIO 232 DE 2020.',
      link:
        'https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_0232_2020.htm?utm',
    },
    {
      referencia: 'DIAN. (s.f.). Calendario Tributario.',
      link:
        'https://www.dian.gov.co/Calendarios/Calendario_Tributario_2026.pdf?utm',
    },
    {
      referencia: 'DIAN. (s.f.). Dirección de Impuestos y Aduanas Nacionales.',
      link:
        'https://www.dian.gov.co/impuestos/personas/Renta-Personas-Naturales-AG-2020/Paginas/Eres-residente-en-Colombia-para-efectos-tributarios.aspx?utm',
    },
    {
      referencia: 'DIAN. (s.f.). Documento Soporte.',
      link:
        'https://www.dian.gov.co/impuestos/Paginas/Sistema-de-Factura-Electronica/Documento-Soporte-Adquisiciones-No-Obligados.aspx?utm',
    },
    {
      referencia: 'DIAN. (s.f.). Documento Soporte de Pago Nómina Electrónica.',
      link:
        'https://www.dian.gov.co/impuestos/Paginas/Sistema-de-Factura-Electronica/Documento-Soporte-de-Pago-de-Nomina-Electronica.aspx?utm_source',
    },
    {
      referencia: 'DIAN. (s.f.). Registro Único Tributario.',
      link:
        'https://www.dian.gov.co/impuestos/RUT/Paginas/Inscripcion-y-actualizacion-RUT.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales [DIAN]. (2024). Doctrina y conceptos unificados sobre procedimiento tributario. Bogotá, Colombia: Imprenta Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2024). Conceptos unificados sobre procedimiento y régimen sancionatorio. Bogotá: Imprenta Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Insignares, S. (2020). Teoría general del tributo: Un análisis desde la perspectiva colombiana. Barranquilla, Colombia: Editorial Universidad del Norte.',
      link: '',
    },
    {
      referencia:
        'Jaramillo, S. (2021). Planeación tributaria: Estrategias para el cumplimiento fiscal en Colombia. Bogotá: Legis.',
      link: '',
    },
    {
      referencia:
        'Micrositio DIAN. (s.f.). ¿Cómo presentar la declaración de manera virtual?',
      link:
        'https://micrositios.dian.gov.co/renta-personas-naturales-ag-2022/como-presentar-la-declaracion-de-manera-virtual/',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2023). Guía técnica sobre convenios para evitar la doble imposición en Colombia. Bogotá, Colombia: Publicaciones Mincomercio.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (2016). Decreto 1625 "Por medio del cual se expide el Decreto Único Reglamentario en materia tributaria". Diario Oficial No. 50.023.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (2019). Decreto 1468 de 2019 Reglamentación del Régimen Simple. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2023). Decreto 2229 "Por el cual se fijan los lugares y plazos para la presentación de las declaraciones tributarias y el pago de los impuestos". Diario Oficial No. 52.617.',
      link: '',
    },
    {
      referencia:
        'Presidente de la República de Colombia. (2023). Decreto 2229 de 2023: Por el cual se fijan los plazos para declarar y pagar los impuestos administrados por la DIAN para el año 2026. Bogotá, Colombia: Diario Oficial No. 51.234.',
      link: '',
    },
    {
      referencia:
        'Siemprealdia.co. (17 de Febrero de 2026). Topes para declarar renta 2026: Personas naturales obligadas a declarar renta por el año gravable 2025.',
      link:
        'https://siemprealdia.co/colombia/impuestos/personas-naturales-obligadas-a-declarar-renta/',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (2016). Decreto 1625 "Por medio del cual se expide el Decreto Único Reglamentario en materia tributaria". Diario Oficial No. 50.023.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (2019). Decreto 1468 de 2019 Reglamentación del Régimen Simple. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2023). Decreto 2229 "Por el cual se fijan los lugares y plazos para la presentación de las declaraciones tributarias y el pago de los impuestos". Diario Oficial No. 52.617.',
      link: '',
    },
    {
      referencia:
        'Presidente de la República de Colombia. (2023). Decreto 2229 de 2023: Por el cual se fijan los plazos para declarar y pagar los impuestos administrados por la DIAN para el año 2026. Bogotá, Colombia: Diario Oficial No. 51.234.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dania Aurelia Rueda Guanaro',
          cargo: 'Experta temática',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>fullstack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Fabio Armando Ortiz Reyes',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
