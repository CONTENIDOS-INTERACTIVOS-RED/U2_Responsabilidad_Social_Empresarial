export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Conceptos fundamentales de la Responsabilidad Social Empresarial (RSE)',
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
        titulo: 'Conceptos Fundamentales de la RSE',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y Evolución Histórica de la RSE',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Dimensiones de la RSE',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Principios éticos y morales en la RSE',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evolución de la RSE',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Impacto de la globalización en la RSE',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tendencias actuales y futuras de la RSE',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Instrumentos de Gestión de la RSE',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Herramientas y metodologías para implementar la RSE',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Evaluación y medición del impacto de la RSE',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desarrollo sustentable y desarrollo humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
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
        'Iglesias Prada, M. Á., & Tejedo Sanz, J. (2021). Recursos humanos y responsabilidad social corporativa (1ª ed.). Macmillan Iberia, S.A',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267712',
    },
    {
      referencia:
        'Lozano, M. C., & Parra, J. M. (2019). Enfoques de la responsabilidad social empresarial. Universidad Santo Tomás. ',
      link: 'https://repository.usta.edu.co/handle/11634/17603',
    },
    {
      referencia:
        'United Nations. (2015). Transforming our world: The 2030 Agenda for Sustainable Development. ONU. ',
      link: 'https://sdgs.un.org/2030agenda ',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar social',
      significado:
        'condición en la que las necesidades básicas de las personas están cubiertas y tienen acceso a oportunidades para mejorar su calidad de vida.',
    },
    {
      termino: 'Consumo responsable',
      significado:
        'uso consciente y eficiente de recursos y productos, minimizando el impacto ambiental y fomentando prácticas sostenibles.',
    },
    {
      termino: 'Desarrollo humano',
      significado:
        'proceso que amplía las oportunidades y capacidades de las personas, permitiéndoles vivir una vida digna, saludable y con acceso a educación y recursos.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'enfoque que busca satisfacer las necesidades actuales sin comprometer las posibilidades de las generaciones futuras, integrando desarrollo económico, equidad social y protección ambiental.',
    },
    {
      termino: 'Dimensiones de la RSE',
      significado:
        'áreas principales de enfoque en la RSE: económica, social y ambiental, que permiten a las empresas contribuir al desarrollo sostenible.',
    },
    {
      termino: 'Economía circular',
      significado:
        'modelo económico que promueve la reutilización, el reciclaje y la reducción de residuos para maximizar el uso de recursos.',
    },
    {
      termino: 'Equidad social',
      significado:
        'principio que garantiza la distribución justa de recursos y oportunidades, buscando reducir desigualdades y promover la inclusión.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'conjunto de prácticas y políticas dirigidas a minimizar el impacto ambiental de las actividades humanas.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'alteración en el entorno natural causada por actividades humanas, que puede ser mitigada mediante prácticas responsables y sostenibles.',
    },
    {
      termino: 'Innovación sostenible',
      significado:
        'desarrollo de productos, servicios o procesos que generan valor económico y social, respetando los límites ambientales.',
    },
    {
      termino: 'Objetivos de Desarrollo Sostenible (ODS)',
      significado:
        'conjunto de 17 metas globales adoptadas por la ONU para erradicar la pobreza, proteger el planeta y garantizar el bienestar para todos.',
    },
    {
      termino: 'Prácticas empresariales responsables',
      significado:
        'acciones que integran principios éticos, sostenibles y de respeto hacia los grupos de interés y el medio ambiente.',
    },
    {
      termino: 'Preservación ambiental',
      significado:
        'conservación y protección de los recursos naturales y la biodiversidad para mantener el equilibrio ecológico.',
    },
    {
      termino: 'Producción limpia',
      significado:
        'estrategias que minimizan los residuos y el impacto ambiental en la fabricación de bienes y servicios.',
    },
    {
      termino: 'Recursos naturales',
      significado:
        'bienes y servicios proporcionados por la naturaleza, esenciales para la vida humana y el desarrollo económico.',
    },
    {
      termino: 'Relación entre RSE y Desarrollo Sostenible',
      significado:
        'conexión entre prácticas empresariales responsables y el objetivo de equilibrar el progreso económico, social y ambiental.',
    },
    {
      termino: 'Responsabilidad Social Empresarial',
      significado:
        'estrategia corporativa que integra voluntariamente preocupaciones sociales, ambientales y económicas en las operaciones de una empresa y en su interacción con los grupos de interés.',
    },
    {
      termino: 'Sostenibilidad económica',
      significado:
        'capacidad de una organización para generar ingresos y crecimiento económico a largo plazo, respetando límites ambientales y sociales.',
    },
    {
      termino: '<em>Stakeholders:</em>',
      significado:
        'personas o entidades que afectan o son afectadas por las actividades de una organización, como empleados, consumidores, comunidades y el medio ambiente.',
    },
  ],
}
