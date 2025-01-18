<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Evolución de la RSE'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La Responsabilidad Social Empresarial  ha experimentado un avance significativo, pasando por etapas como <em>la filantropía, la legalidad, la productividad, la ciudadanía corporativa y la sostenibilidad</em>, adaptándose a los cambios en las expectativas sociales y en la manera en que las empresas interactúan con su entorno. La globalización ha sido un factor determinante en esta evolución, lo que ha incrementado las expectativas hacia las compañías para que desempeñen un papel más activo en temas sociales y ambientales. 
  //
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Etapas históricas de la Responsabilidad Social Empresarial
            p.mb-4(data-aos="fade-right") En el documento se abordan las etapas históricas de la Responsabilidad Social Empresarial (RSE): filantropía, enfocada en donaciones sin estrategias; legalidad, centrada en cumplir normativas; productividad, integrando prácticas sostenibles y eficientes; ciudadanía corporativa, promoviendo derechos humanos y desarrollo comunitario; y sostenibilidad, adoptando un enfoque equilibrado entre crecimiento económico, equidad social y cuidado ambiental.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Etapas históricas de la Responsabilidad Social Empresarial.

          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/1.png', alt='')

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Impacto de la globalización en la RSE
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/2.png', alt='')
        .col-lg.order-1
          .p-4
            p.mb-0(data-aos="fade-up") La globalización ha transformado el entorno empresarial, exigiendo a las organizaciones desempeñar un rol más activo en temas sociales y ambientales. Este fenómeno ha incrementado la influencia de las empresas, obligándolas a adoptar prácticas de RSE que cumplan con estándares internacionales y respondan a las demandas de una audiencia global.
    
    h2.mb-3(data-aos="fade-right") Impactos principales de la globalización en la RSE

    p.mb-5 La globalización ha influido significativamente en la práctica de la RSE, ampliando sus alcances e impactos.

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Adaptación a estándares internacionales")
            p Las empresas deben cumplir regulaciones globales y atender demandas éticas de los consumidores. 
            p <b>Ejemplo</b>: PepsiCo implementó iniciativas de igualdad de género y sostenibilidad en América Latina, reflejando su compromiso global.

          .div(titulo="Acceso a nuevos mercados")
            p Las organizaciones deben gestionar el impacto social y ambiental de sus operaciones en contextos culturales y regulatorios diversos.

          .div(titulo="Mayor visibilidad y escrutinio público")
            p Los consumidores valoran la transparencia y responsabilidad, por lo que la falta de compromiso con la RSE puede ocasionar consecuencias reputacionales críticas.

          .div(titulo="Criterios internacionales en seguridad y salud laboral")
            p Adoptar estándares globales protege a los trabajadores y contribuye al desarrollo sostenible en las comunidades donde operan.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La globalización exige estrategias de RSE integrales, alineadas con estándares internacionales. Estas prácticas no solo fortalecen la reputación empresarial, sino que también fomentan la sostenibilidad y aseguran entornos laborales más seguros.
            

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tendencias actuales y futuras de la RSE
    
    .row.mb-5
      .col-lg-8       
        p(data-aos="fade-left") La RSE ha evolucionado significativamente, respondiendo a las crecientes demandas sociales y ambientales. Las empresas actuales integran estrategias sostenibles, fomentan la transparencia y promueven la innovación social.
        h2.mb-3(data-aos="fade-right") Tendencias actuales de la RSE
        p Las tendencias actuales de la RSE reflejan un enfoque integral hacia la sostenibilidad, la transparencia y la innovación social.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in").mb-4.mb-lg-0

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sostenibilidad" :icon="require('@/assets/bullets/4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Sostenibilidad
            p Reducción de emisiones de carbono, eficiencia en la gestión de recursos y alineación con los ODS para equilibrar crecimiento económico y cuidado ambiental.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Transparencia" :icon="require('@/assets/bullets/5.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Transparencia
            p Difusión de prácticas responsables, optimización de la cadena de suministro y cumplimiento de normativas como la Directiva de Diligencia Debida Corporativa en Europa.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Innovación social" :icon="require('@/assets/bullets/6.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Innovación social
            p Desarrollo de soluciones para problemas sociales y ambientales, como programas de inclusión laboral y metodologías de innovación abierta.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='', style="width: 100%;")

    h2.mb-3(data-aos="fade-right") Tendencias futuras de la RSE
    p.mb-5 Las tendencias futuras de la RSE reflejan un enfoque cada vez más integrado y estratégico.

    .bg-full-width.bg-fondo-6
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Valor compartido	
                p.mb-0 Enfoque en estrategias que beneficien tanto a la empresa como a las comunidades, abordando problemas globales mediante la colaboración.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Integración estratégica
                p.mb-0 Incorporación de la sostenibilidad como un eje central del modelo de negocio, alineando operaciones con los ODS.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Inversión de impacto
                p.mb-0 Combinar rentabilidad económica con beneficios sociales y ambientales, impulsando proyectos sostenibles e inclusivos.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La RSE está transitando hacia un modelo estratégico y sostenible donde la innovación, transparencia y sostenibilidad serán los pilares esenciales. Las empresas que adopten estas tendencias estarán mejor posicionadas para generar impacto positivo, cumplir con las expectativas globales y prosperar en un entorno competitivo.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://cards.algoreducation.com/es/content/e7YXnByE/impacto-globalizacion-etica-responsabilidad" target="_blank" rel="noopener noreferrer") Algor Education. (s.f.). La globalización y su impacto en la ética y la responsabilidad social corporativa.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elpais.com/mexico/branded/2024-10-23/pepsico-una-vision-con-adn-femenino.html" target="_blank" rel="noopener noreferrer") El País. (2024, 23 de octubre). PepsiCo: una visión con ADN femenino. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer") ChatGPT 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer") Copilot

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=E_8FcFHsotQ" target="_blank" rel="noopener noreferrer") Investigación en RSE. (2020, septiembre 12). La evolución de la investigación en responsabilidad social empresarial. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
