<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Gobierno Corporativo, Recursos Humanos y RSE'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-7
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          p.mb-0 El gobierno corporativo, los recursos humanos y la Responsabilidad Social Empresarial (RSE) forman una tríada clave para fomentar la sostenibilidad y el desarrollo ético en las organizaciones. Mientras el gobierno corporativo establece estructuras y procesos que aseguran transparencia, responsabilidad y equidad, la RSE integra de manera voluntaria preocupaciones sociales, laborales y ambientales en la estrategia empresarial. Recursos Humanos, por su parte, opera como un agente principal en la implementación de políticas de RSE dentro de la organización, alineando la cultura laboral con estos principios.
      .col-lg-5.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in").mb-4.mb-lg-0

    h2.mb-4(data-aos="flip-up") Principios de gobierno corporativo y su vínculo con la RSE
    p.mb-4(data-aos="fade-right") El gobierno corporativo se fundamenta en principios como equidad, rendición de cuentas, responsabilidad y transparencia. Estos pilares buscan garantizar una gestión empresarial ética y responsable, permitiendo la alineación de los intereses de la empresa con los de sus grupos de interés. 

    .titulo-figura.mb-4
      h5 Figura 2. 
      span Principios de gobierno corporativo y su vínculo con la RSE. 
    .row.mb-5.justify-content-center.bg-color-4.py-5
      .col-lg-12
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
    
    p.mb-4 De acuerdo con la OCDE y el G20, un buen gobierno corporativo establece un marco que fomenta el cumplimiento de estándares éticos, regulaciones y la mejora continua en beneficio tanto de la organización como de la sociedad.

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Equidad")
            p Asegura que todos los accionistas y partes interesadas reciban un trato justo y tengan acceso a decisiones significativas de la organización.

          .div(titulo="Rendición de cuentas")
            p Obliga a los líderes empresariales a responder por sus acciones y decisiones ante los accionistas y la comunidad.

          .div(titulo="Responsabilidad")
            p Implica actuar en beneficio no solo de la empresa, sino también de la comunidad y el entorno.

          .div(titulo="Transparencia")
            p Requiere la comunicación clara, oportuna y completa de información relevante para facilitar decisiones informadas.
    
    p.mb-4 La RSE complementa estos principios al promover acciones empresariales que trascienden el cumplimiento legal, integrando compromisos sociales, ambientales y éticos. Esta sinergia permite que el gobierno corporativo se enfoque en un modelo de gestión que considere el impacto social y ambiental de sus operaciones.

    h2.mb-4(data-aos="flip-up") Recursos humanos: motor para la implementación de la RSE
    p.mb-4(data-aos="fade-right") El departamento de Recursos Humanos juega un rol fundamental en asegurar que los valores de Responsabilidad Social Empresarial (RSE) se integren plenamente en la cultura organizacional. Esto incluye:

    .bg-full-width.bg-fondo-6.mb-5
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/4.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Fomentar entornos de trabajo inclusivos y equitativos
              p.mb-0.text-center Recursos Humanos se encarga de implementar políticas que respeten los derechos laborales y promuevan la diversidad.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/5.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Capacitación y sensibilización
              p.mb-0.text-center Diseña programas formativos en ética, sostenibilidad y derechos humanos para empleados de todos los niveles.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/6.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Gestión estratégica
              p.mb-0.text-center Integra la RSE en actividades clave como la comunicación interna, la gestión ambiental y la calidad laboral.
        h2.mb-4(data-aos="flip-up") Conexión entre el gobierno corporativo y la RSE
        p.mb-4(data-aos="fade-right") El gobierno corporativo y la RSE están intrínsecamente vinculados. Mientras el primero proporciona las bases éticas y estratégicas, la segunda amplía el alcance hacia preocupaciones sociales y ambientales. Esta relación permite:
  
    TabsC.color-acento-contenido
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Implementar políticas sostenibles" :icon="require('@/assets/bullets/3.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Implementar políticas sostenibles
            p Las decisiones empresariales tienen en cuenta su impacto en la comunidad y el medio ambiente.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fortalecer la participación de las partes interesadas" :icon="require('@/assets/bullets/3.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Fortalecer la participación de las partes interesadas
            p Se fomenta el diálogo entre accionistas, empleados y la sociedad, promoviendo una estrategia empresarial inclusiva.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')
    .bg-color-3.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Por ejemplo, en el ámbito de la seguridad y salud en el trabajo, un gobierno corporativo comprometido con la RSE garantiza entornos laborales seguros y respetuosos, aumentando la calidad de vida de los empleados y, a su vez, la productividad y sostenibilidad de la organización.
    
    .row.mb-5.align-items-center
      .col-lg-8
        p(data-aos="fade-left").mb-0 El gobierno corporativo, los recursos humanos y la RSE son pilares fundamentales que, al integrarse, promueven una gestión empresarial ética y responsable. Este enfoque no solo beneficia a la organización, al mejorar su reputación y sostenibilidad, sino que también impacta positivamente en el desarrollo económico, social y ambiental de la sociedad. Al aplicar estos principios, las empresas no solo alcanzan el éxito económico, sino que también se posicionan como actores responsables y comprometidos con el bienestar colectivo.
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in").mb-4.mb-lg-0

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Políticas de recursos humanos basadas en RSE

    p.mb-4 Las políticas de recursos humanos basadas en la Responsabilidad Social Empresarial (RSE) buscan equilibrar las metas empresariales con el bienestar de los empleados, fomentando prácticas éticas, inclusivas y sostenibles. A continuación, se destacan las principales áreas en las que estas políticas impactan positivamente:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Integración de la RSE en la gestión de recursos humanos")
            p Fomentar prácticas éticas, sostenibles y justas mediante políticas de inclusión y diversidad que aseguren igualdad de oportunidades y combatan la discriminación.

          .div(titulo="Reclutamiento y selección responsables")
            p Incluir criterios de sostenibilidad, competencias en RSE y evaluaciones éticas para incorporar talento alineado con los valores organizacionales.

          .div(titulo="Formación y desarrollo sostenible")
            p Capacitar a los empleados en RSE mediante programas de formación continua y planificación de carrera para fortalecer su capacidad de contribuir a los objetivos de sostenibilidad.

          .div(titulo="Evaluación del desempeño y compensación alineadas con la RSE")
            p Incorporar metas éticas y sostenibles en las evaluaciones de desempeño y recompensar comportamientos responsables para promover una cultura coherente con la RSE.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1
        AcordionA(tipo="b")
          .div(titulo="Promoción de la diversidad y la inclusión")
            p Implementar políticas que fomenten un ambiente inclusivo y equitativo, mejorando la creatividad, la innovación y reflejando el compromiso con la justicia social.

          .div(titulo="Bienestar y equilibrio laboral")
            p Priorizar la calidad de vida de los empleados mediante programas de salud, bienestar y flexibilidad laboral para impulsar satisfacción y productividad.

          .div(titulo="Participación y compromiso de los empleados")
            p Involucrar al personal en iniciativas de RSE, como voluntariados corporativos y proyectos comunitarios, para fortalecer su sentido de pertenencia y compromiso.

          .div(titulo="Comunicación y transparencia")
            p Informar abiertamente sobre las políticas y progresos de RSE para fomentar confianza y colaboración entre los empleados.
          .div(titulo="Evaluación y mejora continua")
            p Implementar mecanismos de evaluación regular para identificar áreas de mejora y adaptarse a un entorno empresarial cambiante, demostrando compromiso con la sostenibilidad.
    
    
    h2.mb-5(data-aos="fade-right") Ejemplo práctico: Grupo Éxito

    .bg-full-width-2.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            p Grupo Éxito es un ejemplo destacado en Colombia de la integración de RSE en sus políticas de recursos humanos. La empresa trabaja directamente con campesinos locales, logrando que el 92 % de sus frutas y verduras sean de origen local. Esto no solo apoya la economía regional y reduce la huella de carbono, sino que también fortalece la sostenibilidad y reputación de la compañía.
            p.mb-0 Las políticas de recursos humanos fundamentadas en la RSE son clave para construir organizaciones responsables y sostenibles. Al implementar estas estrategias, las empresas no solo mejoran su desempeño y reputación, sino que también contribuyen al bienestar de los empleados y la sociedad. Este enfoque integral y estratégico permite alinear los objetivos organizacionales con las demandas sociales y ambientales, generando un impacto positivo duradero.

          .col-lg-6(data-aos="zoom-in").order-1
            figure
              img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Inclusión, equidad y diversidad en las organizaciones
            p.mb-4(data-aos="fade-right") En el documento se describen ejemplos destacados de implementación de la Responsabilidad Social Empresarial (RSE), resaltando cómo diversas empresas han integrado estrategias sostenibles y socialmente responsables en sus operaciones

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Inclusión, equidad y diversidad en las organizaciones.

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')
     
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
