<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Instrumentos de Gestión de la RSE'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8       
        p(data-aos="fade-left") La Responsabilidad Social Empresarial  es un enfoque en el cual las empresas integran prácticas sostenibles y socialmente responsables en sus operaciones y estrategias, yendo más allá del cumplimiento legal para contribuir de manera positiva al bienestar social y ambiental. La puesta en marcha de RSE requiere el uso de herramientas y metodologías como la norma ISO 26000, así como la evaluación y medición de su impacto mediante indicadores clave de rendimiento. La adopción de RSE no solo mejora la reputación de la empresa, sino que también refuerza las relaciones con los empleados, inversores, clientes y comunidades, promoviendo un desarrollo sostenible y beneficios a largo plazo tanto para la sociedad como para la empresa misma.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Políticas y prácticas de Responsabilidad Social Empresarial
            p.mb-4(data-aos="fade-right") En el documento se destacan las políticas y prácticas de Responsabilidad Social Empresarial (RSE), subrayando su integración con los valores corporativos para promover equidad de género, combatir la pobreza y gestionar responsablemente los recursos naturales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Políticas y prácticas de Responsabilidad Social Empresarial.

          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/2.png', alt='')

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Herramientas y metodologías para implementar la RSE
    
    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema3/3.png', alt='')
        .col-lg.order-1
          .p-4
            p.mb-0(data-aos="fade-up") La implementación de la Responsabilidad Social Empresarial (RSE) requiere herramientas y metodologías que guíen a las organizaciones hacia prácticas sostenibles y responsables. Entre estas herramientas, la norma ISO 26000 destaca como una de las principales directrices para la sostenibilidad empresarial.
    
    h2.mb-3(data-aos="fade-right") ISO 26000: Directrices sobre Responsabilidad Social

    p.mb-5 La norma ISO 26000, publicada en 2010 por la Organización Internacional de Normalización (ISO), proporciona recomendaciones para que las empresas y organizaciones operen de manera socialmente responsable. Aunque no es certificable, constituye una referencia valiosa para integrar la responsabilidad social en los procesos organizacionales. La norma abarca siete materias fundamentales:


    .titulo-figura.mb-4
      h5 Figura 2. 
      span Norma ISO 26000.
    .row.mb-5.justify-content-center.py-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/4.svg", data-aos="zoom-in")

    h2.mb-3(data-aos="fade-right") Metodología RESILIO: Implementación Estratégica de la RSE
    p.mb-5 La metodología <b>RESILIO</b>, desarrollada por la agencia ResponSable, establece un marco práctico para integrar la Responsabilidad Social Empresarial (RSE) en la estrategia organizacional. Consta de siete pasos clave que garantizan una implementación coherente y efectiva:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/5.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="3%" y="94.5%" numero="+")
                  h5 Reflexionar
                  p Definir los objetivos estratégicos de la inversión en RSE, como mejorar las relaciones con los grupos de interés o mitigar riesgos empresariales.

                .bg-color-white.box-shadow.p-3(x="18%" y="7%" numero="+")
                  h5 Estudiar
                  p Realizar un diagnóstico de la situación actual de la empresa en sostenibilidad, identificando riesgos y oportunidades específicas.

                .bg-color-white.box-shadow.p-3(x="32%" y="95%" numero="+")
                  h5 Solicitar
                  p Involucrar a los grupos de interés mediante encuestas y entrevistas para conocer sus percepciones y expectativas respecto a la empresa.

                .bg-color-white.box-shadow.p-3(x="42%" y="6%" numero="+")
                  h5 Institucionalizar
                  p Diseñar una estrategia de RSE acompañada de un plan de acción con asignación de responsabilidades y recursos.

                .bg-color-white.box-shadow.p-3(x="53.5%" y="95%" numero="+")
                  h5 Lograr Implementar
                  p Ejecutar la estrategia en las operaciones y la cadena de valor, asegurando que las acciones reflejen los objetivos corporativos.
                .bg-color-white.box-shadow.p-3(x="73%" y="6%" numero="+")
                  h5 Informar
                  p Comunicar los avances y resultados obtenidos a las partes interesadas, fomentando la transparencia y confianza.
                .bg-color-white.box-shadow.p-3(x="85%" y="95%" numero="+")
                  h5 Optimizar
                  p Evaluar el desempeño en la gestión de la RSE, identificando oportunidades de mejora y ajustando las estrategias según sea necesario.


    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Esta metodología estructurada asegura que las acciones de RSE sean coherentes con los objetivos corporativos y alineadas con las expectativas de los grupos de interés.


    h2.mb-3(data-aos="fade-right") Otras herramientas y modelos para implementar la RSE
    p.mb-5 Además de la metodología RESILIO, las empresas pueden emplear otras herramientas y modelos para fortalecer su estrategia de RSE:


    .bg-full-width.bg-fondo-6.mb-5
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/7.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Indicadores Ethos de RSE
              p.mb-0.text-center Permiten evaluar y monitorear la gestión de la responsabilidad social empresarial, ayudando en la planificación estratégica y la implementación de políticas responsables.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/8.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Guía de relación y compromiso con los grupos de interés
              p.mb-0.text-center Ayuda a las empresas a identificar y priorizar sus grupos de interés, diseñando estrategias que fortalezcan la comunicación y el compromiso mutuo.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema3/9.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Distintivo Empresa Socialmente Responsable (ESR)
              p.mb-0.text-center Reconocimiento público que acredita a las empresas por sus buenas prácticas en RSE, destacando su compromiso con colaboradores, inversionistas, clientes y la sociedad.

        h2.mb-3(data-aos="fade-right") Importancia para la Seguridad y Salud en el Trabajo (SST)
        p.mb-5 Para los estudiantes de Seguridad y Salud en el Trabajo, comprender la RSE es crucial, ya que su implementación fomenta la creación de entornos laborales seguros y saludables. Algunas ventajas incluyen:


    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            h5 Reducción de riesgos
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Adopción de políticas laborales justas y seguras, disminuyendo accidentes y enfermedades profesionales.
            h5 Satisfacción de los empleados
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Mejora del bienestar y la motivación de los trabajadores, lo que incrementa la productividad y reduce el ausentismo.
            h5 Fortalecimiento de la reputación
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Las prácticas responsables proyectan una imagen positiva, fortaleciendo la relación con los grupos de interés.
  
              

          .col-lg-6(data-aos="zoom-in").order-1
            figure
              img(src="@/assets/curso/tema3/10.svg", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/19.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Aplicar estas herramientas permite a los futuros profesionales en SST no solo gestionar riesgos, sino también promover la sostenibilidad y el bienestar en las organizaciones, contribuyendo de manera integral al desarrollo corporativo y social.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Herramientas y metodologías para implementar la RSE

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/11.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La evaluación y medición del impacto de la Responsabilidad Social Empresarial (RSE) es esencial para identificar las contribuciones empresariales en los ámbitos social, ambiental y económico. A través del uso de indicadores específicos y metodologías de análisis, las empresas pueden ajustar sus estrategias y demostrar de manera transparente su compromiso con el desarrollo sostenible.

    h2.mb-3(data-aos="fade-right") Importancia de la evaluación en la RSE
    p.mb-5 Evaluar los efectos de las actividades empresariales permite:

    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Identificar áreas de mejora y maximizar el impacto positivo.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Alinear las metas organizacionales con los Objetivos de Desarrollo Sostenible (ODS).
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Responder a las expectativas de consumidores, reguladores y otros grupos de interés.
    
    h2.mb-3(data-aos="fade-right") Herramientas y metodologías para la medición
    p.mb-5 Para evaluar el rendimiento en RSE, las empresas pueden emplear diversas herramientas, entre las cuales destacan:

    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/15.png")
            .col-lg-7
              h5 Indicadores Clave de Desempeño (KPI)
              p Métricas específicas para monitorear aspectos como emisiones de carbono, satisfacción laboral y participación comunitaria.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/16.png")
            .col-lg-7
              h5 Estándares internacionales
              p Marcos como GRI (Global Reporting Initiative) guían la elaboración de informes estructurados y comparables.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7
              h5 Análisis de impacto social
              p Evalúa los efectos directos e indirectos de las actividades empresariales en las comunidades mediante datos cualitativos y cuantitativos.

    h2.mb-3(data-aos="fade-right") Desafíos en la evaluación de la RSE
    p.mb-5 La evaluación de la RSE enfrenta diversos desafíos que complican su implementación y análisis.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Complejidad de los efectos: los impactos sociales y ambientales suelen ser difíciles de cuantificar debido a su naturaleza intangible y múltiples factores implicados.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Falta de estandarización: la ausencia de criterios universales dificulta la comparación entre empresas y sectores.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Recopilación de datos: obtener información precisa y relevante puede ser complicado, especialmente en cadenas de suministro amplias o contextos con poca transparencia.

          .col-lg-6(data-aos="zoom-in").order-1
            figure
              img(src="@/assets/curso/tema3/18.svg", data-aos="zoom-in").mb-4.mb-lg-0
    
    .titulo-figura.mb-4
      h5 Tabla 1. 
      span Propuestas para mejorar la evaluación de la RSE
    .tabla-a.mb-5
      table
        thead
          tr
            th.bg-color-3(width='35%') Acción
            th.bg-color-3 Detalle
          

        tbody
          tr
            td Desarrollar indicadores estandarizados
            td Crear métricas comunes facilita la evaluación y comparación del rendimiento en RSE entre sectores.
            
          tr
            td Capacitación en metodologías
            td Formar a profesionales en herramientas y técnicas de medición fortalece la gestión de impactos.
          tr
            td Fomentar transparencia
            td Promover divulgaciones detalladas y responsables mejora la comprensión de los esfuerzos empresariales.
            
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La evaluación del impacto de la RSE es clave para coordinar estrategias empresariales con el desarrollo sostenible y las expectativas sociales. Establecer indicadores adecuados y utilizar metodologías robustas no solo fortalece la transparencia y rendición de cuentas, sino que también refuerza el compromiso empresarial con la responsabilidad social. Esto permite a las empresas maximizar su impacto positivo y consolidar su reputación en el mercado.





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://fastercapital.com/es/contenido/Impacto-de-la-RSE--como-evaluar-y-comunicar-el-impacto-y-los-resultados-de-la-RSE.html" target="_blank" rel="noopener noreferrer") Impacto de la RSE: cómo evaluar y comunicar el impacto y los resultados de la RSE. (2023). FasterCapital. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://estrategiadigital.org/responsabilidad-social-corporativa/como-medir-el-impacto-de-las-iniciativas-de-responsabilidad-social-corporativa/" target="_blank" rel="noopener noreferrer") Cómo medir el impacto de las iniciativas de responsabilidad social corporativa. (2022). Estrategia Digital. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://madrid.impacthub.net/wp-content/uploads/2017/11/Guia-medicion-de-impacto-esp-1.pdf" target="_blank" rel="noopener noreferrer") Manual de medición de impacto social. (2017). Impact Hub Madrid. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer") ChatGPT
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer") Copilot

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=CEy_5Xmf03c" target="_blank" rel="noopener noreferrer") Canal de YouTube de la Universidad de los Andes. (2020, 15 de marzo). Gestión Estratégica de la Responsabilidad Social Empresarial.

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
