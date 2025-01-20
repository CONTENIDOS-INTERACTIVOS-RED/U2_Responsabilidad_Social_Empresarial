<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Lo social como estrategia de marketing y logística en RSE '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La integración de estrategias sociales en el marketing y la logística bajo el enfoque de la Responsabilidad Social Empresarial (RSE) ha ganado relevancia como una herramienta clave para fomentar el desarrollo sostenible y fortalecer la relación entre empresas, consumidores y comunidades.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1
        AcordionA(tipo="b")
          .div(titulo="Marketing  Social en la RSE")
            p Diseña campañas que abordan problemáticas sociales y generan cambios positivos en el comportamiento de las personas. Al integrar valores de RSE, las empresas construyen conexiones emocionales con los consumidores, incrementan la lealtad y mejoran la percepción de la marca. Estas iniciativas refuerzan la imagen corporativa y potencian la competitividad en el mercado.

          .div(titulo="Logística Responsable como Pilar de la RSE")
            p La logística responsable implica la gestión sostenible de la cadena de suministro, optimización de recursos y reducción de impactos ambientales. Este enfoque mejora la eficiencia operativa, contribuye al bienestar social y fomenta la sostenibilidad ambiental, además de reducir costos operativos.

          .div(titulo="Sinergia entre Marketing  Social y Logística Responsable")
            p Combinar marketing social y logística responsable permite alinear los objetivos empresariales con el desarrollo sostenible. La comunicación efectiva de acciones responsables genera confianza, consolida la reputación y fomenta la lealtad de los consumidores. Además, la optimización de recursos y procesos en la logística respalda estas iniciativas con impactos positivos concretos

    h2.mb-3(data-aos="fade-right") Caso práctico: Alquería en Colombia
    p.mb-5 Un ejemplo sobresaliente de esta integración es Alquería, una empresa láctea colombiana que ha implementado con éxito estrategias sociales tanto en su marketing como en su logística. Entre sus iniciativas se destacan:

    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Fundación Ábaco:</b> combate el hambre en comunidades vulnerables.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Fundación Alquería Cavelier:</b> promueve la educación en sectores desfavorecidos.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Programa “Vaca Madrina”:</b> apoya a pequeños ganaderos a través de asistencia técnica y acceso a crédito, promoviendo la autosuficiencia y la sostenibilidad.
  

          .col-lg-6(data-aos="zoom-in").order-1
            figure
              img(src="@/assets/curso/tema3/3.svg", data-aos="zoom-in").mb-4.mb-lg-0
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Estas acciones han fortalecido la posición de Alquería como una empresa comprometida con la responsabilidad social, mejorando su reputación y consolidando su liderazgo en el mercado.

    p.mb-4 La integración de estrategias sociales en el marketing  y la logística en el marco de la RSE permite a las empresas generar valor compartido, beneficiando tanto a la organización como a las comunidades y al medio ambiente. Esta sinergia no solo contribuye al desarrollo sostenible, sino que también refuerza la confianza y lealtad de los consumidores, posicionando a las empresas como líderes responsables en sus respectivos sectores.

    .row.mb-5.align-items-center
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8.order-1
        h2.mb-3(data-aos="fade-right") Impacto social como herramienta de marketing
        p El impacto social se ha consolidado como una estrategia clave en el marketing contemporáneo, permitiendo a las empresas alinear sus objetivos comerciales con causas sociales significativas. Este enfoque no solo refuerza la reputación corporativa, sino que también impulsa cambios positivos en la sociedad.
        .bg-color-7.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El marketing social se centra en promover ideas, valores y causas sociales para influir en el comportamiento de las personas, fomentando prácticas que beneficien al bienestar colectivo. A diferencia del marketing tradicional, su propósito trasciende la venta de productos o servicios, orientándose hacia la concienciación y transformación social.
    
    h2.mb-3(data-aos="fade-right") Beneficios del marketing con impacto social
    p.mb-5 El marketing con impacto social se ha consolidado como una estrategia clave para conectar con los consumidores mientras se promueven valores positivos.

    .bg-full-width-2.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Mejora de la imagen corporativa
              p Incorporar temas sociales en las estrategias de marketing  posiciona a las empresas como responsables y comprometidas, incrementando la confianza del consumidor.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5  Fidelización de clientes
              p Los consumidores valoran las marcas que demuestran un compromiso genuino con causas sociales, lo que genera una mayor lealtad hacia la marca.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h5 Diferenciación en el mercado
              p En sectores saturados, el compromiso social actúa como un diferenciador clave que atrae a consumidores interesados en la responsabilidad social empresarial.
    
    h2.mb-3(data-aos="fade-right") Estrategias para implementar el marketing social
    p.mb-5 El éxito del marketing con impacto social radica en estrategias bien definidas que aseguren autenticidad y efectividad.
    .bg-full-width.bg-fondo-6
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Identificación de causas relevantes	
                p.mb-0 Seleccionar causas sociales alineadas con los valores corporativos y las expectativas del público objetivo.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Colaboración con Organizaciones Sociales
                p.mb-0 Asociarse con ONGs u otras entidades para garantizar un impacto social auténtico y efectivo.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Comunicación transparente
                p.mb-0 Compartir de manera honesta y clara las iniciativas sociales para evitar percepciones de oportunismo.
    
    p.mb-4 Ejemplos de marketing con impacto social:

    .bg-full-width-2.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7
              h5 Alejandro Crocker
              p Diseñador venezolano en Colombia que utiliza desperdicios textiles para crear piezas únicas, empoderando comunidades vulnerables mediante formación en diseño y manufactura.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7
              h5  KFC España 
              p La cadena ha utilizado estrategias innovadoras en redes sociales para posicionarse como una marca líder, destacándose por su comunicación creativa y estratégica.
    
    h2.mb-3(data-aos="fade-right") Consideraciones éticas
    p.mb-5 Es esencial evitar el "<em>social washing</em>", que consiste en aparentar un compromiso social sin acciones concretas que lo respalden. La autenticidad y la coherencia entre los valores corporativos y las acciones son fundamentales para mantener la credibilidad de la marca.

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/14.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El impacto social como herramienta de marketing permite a las empresas contribuir al bienestar colectivo mientras fortalecen su reputación y fidelizan a sus clientes. Al implementar estrategias de marketing  social con autenticidad y alineación con los valores corporativos, las empresas logran equilibrar sus objetivos comerciales con su responsabilidad social, generando valor compartido para todos los involucrados.
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Logística sostenible e innovación social: pilares de la sostenibilidad empresarial
            p.mb-4(data-aos="fade-right") En el documento se destaca cómo la logística sostenible y la innovación social se han convertido en componentes clave para las estrategias de Responsabilidad Social Empresarial (RSE).

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Logística sostenible e innovación social: pilares de la sostenibilidad empresarial.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')

  

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/261604" target="_blank" rel="noopener noreferrer") Plaza Casado, A. (Coord.). (2024). Marketing socialmente responsable: (1 ed.). Dykinson.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://cincodias.elpais.com/companias/2024-12-10/la-simbiosis-de-grandes-empresas-y-pymes-tira-de-la-economia.html" target="_blank" rel="noopener noreferrer") Cinco Días. (2024, 10 de diciembre). La simbiosis de grandes empresas y pymes tira de la economía.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://cincodias.elpais.com/legal/2024-10-17/la-fundacion-internacional-para-la-valoracion-de-impactos-ifvi-publica-un-modelo-para-cuantificar-la-huella-ambiental-de-las-empresas.html" target="_blank" rel="noopener noreferrer") Cinco Días. (2024, 17 de octubre). La Fundación Internacional para la Valoración de Impactos (IFVI) publica un modelo para cuantificar la huella ambiental de las empresas.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mediummultimedia.com/marketing/como-se-relaciona-el-marketing-y-responsabilidad-social/" target="_blank" rel="noopener noreferrer") La Intersección entre el Marketing y la Responsabilidad Social: Una Perspectiva Actual. (s.f.).   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://reimagineit.es/la-rsc-y-su-impacto-en-el-marketing-una-perspectiva-clave/" target="_blank" rel="noopener noreferrer") El Impacto de la Responsabilidad Social Corporativa en el Marketing. (s.f.).   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.softwarelogisticaydistribucion.eu/logistica-con-rse/" target="_blank" rel="noopener noreferrer") Software Logística y Distribución. (2022). ¡Mejorando la Logística con Responsabilidad Social Empresarial!.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ndmarketingdigital.com/como-influye-el-marketing-social/" target="_blank" rel="noopener noreferrer") ND Marketing Digital. (s.f.). El impacto del marketing social en la sociedad: una visión detallada y actual.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://stockabee.com/logistica-sostenible-y-su-importancia//" target="_blank" rel="noopener noreferrer") Stockabee. (2023). Logística sostenible y su importancia.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://los40.com/2024/12/10/asi-se-gestiona-un-tecnobosque/" target="_blank" rel="noopener noreferrer") Los40. (2024, 10 de diciembre). Así se gestiona un "tecnobosque".  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elpais.com/america-colombia/branded/los-lideres-de-colombia/2024-12-05/fabio-gonzalez-el-visionario-de-la-palmicultura.html" target="_blank" rel="noopener noreferrer") El País. (2024, 5 de diciembre). Fabio González: el visionario de la palmicultura.   
            



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer") ChatGPT
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer") Copilot


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=yTygKl4ygcE" target="_blank" rel="noopener noreferrer") López y López, M. (2019, 4 de diciembre). Responsabilidad Social Empresarial como parte de la estrategia de negocios. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'RESPONSABILIDAD SOCIAL EMPRESARIAL',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué significa RSE?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Recursos Sostenibles Empresariales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Responsabilidad Social Empresarial ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reglamento Social Empresarial',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Resultados Sustentables Empresariales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué busca la RSE estratégica?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Maximizar ganancias a corto plazo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Integrar preocupaciones sociales y ambientales en la estrategia empresarial ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducir únicamente costos operativos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Promover competencias internas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué principio promueve la equidad en el gobierno corporativo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Transparencia',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Rendición de cuentas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Equidad ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Eficiencia',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué beneficio obtiene una empresa al implementar prácticas de RSE?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mejorar únicamente los ingresos económicos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Incrementar la reputación corporativa ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducir personal en áreas sociales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Minimizar el uso de recursos humanos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Completa la frase: La logística sostenible busca reducir ______ y fomentar la eficiencia.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Costos económicos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Emisiones de CO2',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Requisitos legales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Tiempo de producción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
