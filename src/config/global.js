export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Organización corporativa y Responsabilidad Social Empresarial (RSE)',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Responsabilidad Social Empresarial (RSE) estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Integración en la visión y misión corporativa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Beneficios para la empresa y la comunidad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gobierno Corporativo, Recursos Humanos y RSE',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Políticas de recursos humanos basadas en RSE',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Lo social como estrategia de marketing y logística en RSE ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Deloitte. (2016, 12 de julio). Responsabilidad Social y Gobierno Corporativo. ',
      link:
        'https://www.deloitte.com/es/es/services/risk-advisory/perspectives/responsabilidad-social-y-gobierno-corporativo.html',
    },
    {
      referencia:
        'El Colombiano. (2021). Empresas con mayor responsabilidad social. ',
      link:
        'https://www.elcolombiano.com/negocios/estas-son-las-empresas-con-mayor-responsabilidad-social-MH14759566',
    },
    {
      referencia:
        'Factor Humà. (2014). Responsabilidad Social Estratégica (RSE).',
      link:
        'https://factorhuma.org/es/contenidos/unidades/11271-responsabilidad-social-estrategica-rse',
    },
    {
      referencia:
        'Guzmán Vásquez, A., Trujillo Dávila, M. A., & Guzmán Vásquez, D. (2019). Gestión de grupos de interés estratégicos: gobierno corporativo y empleados (1.ª ed.). Colegio de Estudios Superiores de Administración - CESA. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222483',
    },
    {
      referencia:
        'Ministerio de Trabajo y Economía Social. (2014). Estrategia Española de Responsabilidad Social de las Empresas',
      link: 'https://www.mites.gob.es/es/rse/eerse/index.htm',
    },
    {
      referencia:
        'Moreno Izquierdo, J. Á., & Estrada López, B. (Coords.). (2022). ¿Una empresa de todos? La participación del trabajo en el gobierno corporativo (1.ª ed.). Los Libros de la Catarata. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/247741',
    },
    {
      referencia:
        'Plaza Casado, A. (Coord.). (2024). Marketing socialmente responsable (1.ª ed.). Dykinson.',
      link: ' https://elibro.net/es/lc/tecnologicadeloriente/titulos/261604',
    },
    {
      referencia:
        'Responsabilidad y Sostenibilidad. (2021). Estrategias de Responsabilidad Social Corporativa (RSC). ',
      link:
        'https://responsabilidadysostenibilidad.com/estrategias-de-responsabilidad-social-corporativa/',
    },
  ],
  glosario: [
    {
      termino: 'Acción social',
      significado:
        'conjunto de actividades realizadas por una organización para beneficiar a la sociedad.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'red de procesos y actores involucrados en la producción y entrega de un producto o servicio.',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'análisis completo de los impactos ambientales de un producto desde su creación hasta su eliminación.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'modelo de desarrollo que satisface las necesidades presentes sin comprometer las generaciones futuras.',
    },
    {
      termino: 'Diversidad',
      significado:
        'convivencia y aceptación de diferencias individuales en una organización o sociedad.',
    },
    {
      termino: 'Economía circular',
      significado:
        'modelo económico basado en el uso eficiente de recursos mediante la reutilización y reciclaje.',
    },
    {
      termino: 'Equidad',
      significado:
        'condición de igualdad en el acceso a recursos y oportunidades independientemente de las diferencias.',
    },
    {
      termino: 'Gobierno corporativo',
      significado:
        'conjunto de reglas, prácticas y procesos por los cuales una empresa es dirigida y controlada.',
    },
    {
      termino: 'Inclusión',
      significado:
        'creación de entornos donde todas las personas son valoradas y tienen acceso igualitario a oportunidades.',
    },
    {
      termino: 'Innovación social',
      significado:
        'desarrollo de soluciones innovadoras que atienden problemas sociales específicos.',
    },
    {
      termino: 'Logística sostenible',
      significado:
        'gestión de la cadena de suministro con prácticas que minimicen el impacto ambiental y social.',
    },
    {
      termino: 'Marketing  social',
      significado:
        'estrategias de mercadeo diseñadas para promover causas sociales y generar cambios positivos.',
    },
    {
      termino: 'Normativa ambiental',
      significado:
        'conjunto de regulaciones que buscan la protección y sostenibilidad del medio ambiente.',
    },
    {
      termino: 'Objetivos de Desarrollo Sostenible (ODS)',
      significado:
        'conjunto de metas globales para erradicar la pobreza, proteger el planeta y asegurar la prosperidad.',
    },
    {
      termino: 'Reciclaje',
      significado:
        'proceso de transformación de desechos en nuevos productos o materias primas útiles.',
    },
    {
      termino: 'Responsabilidad Social Empresarial (RSE)',
      significado:
        'compromiso de una empresa con el bienestar social, ambiental y económico de las comunidades.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de satisfacer las necesidades presentes sin comprometer los recursos futuros.',
    },
    {
      termino: 'Transparencia',
      significado:
        'principio que promueve la honestidad y claridad en las operaciones y comunicaciones empresariales.',
    },
    {
      termino: 'Triple resultado',
      significado:
        'enfoque que mide el éxito empresarial en términos económicos, sociales y ambientales.',
    },
  ],
}
