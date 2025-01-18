<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos Fundamentales de la RSE'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La Responsabilidad Social Empresarial (RSE) es un enfoque estratégico que invita a las empresas a integrar, de manera voluntaria, consideraciones sociales, ambientales y económicas en sus operaciones diarias, así como en sus relaciones con las partes interesadas. Su desarrollo se remonta a mediados del siglo XX, cuando comenzó a cuestionarse el rol exclusivo de las empresas como generadoras de beneficios económicos, planteándose nuevas responsabilidades relacionadas con su impacto en la sociedad y el medio ambiente (Lozano, 2019).

  //
    .bg-full-width-2.bg-fondo-3.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            h5 Principios Clave de la RSE:
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Transparencia en las acciones empresariales.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Prácticas basadas en la ética y responsabilidad.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Respeto y promoción de los derechos humanos.
  

          .col-lg-6(data-aos="zoom-in").order-1
            figure
              img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in").mb-4.mb-lg-0

    p.mb-5 La RSE, además de promover valores éticos, busca crear un desarrollo sostenible que equilibre el crecimiento económico, la protección ambiental y el bienestar social. Implementar prácticas de RSE, como las sugeridas en la norma ISO 26000, permite a las organizaciones fortalecer su reputación, optimizar relaciones con sus stakeholders y generar un impacto positivo en las comunidades donde operan.


    h2.mb-3(data-aos="fade-right") Beneficios de la RSE
    p.mb-5 La Responsabilidad Social Empresarial (RSE) genera beneficios significativos tanto para las organizaciones como para la sociedad.


    .bg-full-width.bg-fondo-4.mb-5
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/2.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Reputación
              p.mb-0.text-center Mejora la imagen corporativa y la percepción pública.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/3.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Internos
              p.mb-0.text-center Incrementa la lealtad y satisfacción de los empleados.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/4.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Competitividad
              p.mb-0.text-center Aumenta la confianza de inversores y consumidores.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/5.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Sostenibilidad
              p.mb-0.text-center Contribuye a un desarrollo económico respetuoso con el medio ambiente y las comunidades.
        
        p.mb-5 En el ámbito de la seguridad y salud laboral, la RSE obliga a las empresas a diseñar ambientes laborales seguros, proteger a sus colaboradores y asegurar el cumplimiento de normativas vigentes, mostrando así su compromiso ético y estratégico con el bienestar integral de su equipo.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición y Evolución Histórica de la RSE

    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/6.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La RSE se entiende como el compromiso de las empresas por incorporar preocupaciones sociales y ambientales en sus operaciones, buscando el equilibrio entre rentabilidad y bienestar colectivo. Este enfoque ha pasado de ser una práctica meramente filantrópica a una estrategia integral que considera los impactos en todas las dimensiones: económica, social y ambiental (Iglesias Prada & Tejedo Sanz, 2021).

    h2.mb-3(data-aos="fade-right") Evolución histórica
    p.mb-5 La RSE ha evolucionado significativamente a lo largo del tiempo, reflejando los cambios en las expectativas sociales y económicas hacia las empresas.

    .bg-full-width.bg-fondo-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5(data-aos="zoom-in")
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Filantropía Empresarial
                p.text-center Se centraba en donaciones benéficas, con una visión paternalista de la responsabilidad (Siglo XIX - principios del siglo XX).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cumplimiento Legal
                p.text-center Se limitaba al cumplimiento de normativas, con el objetivo de evitar sanciones y multas (Mediados del siglo XX).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Integración Estratégica
                p.text-center Se comenzó a integrar como herramienta estratégica para mejorar la eficiencia operativa, imagen corporativa y reducción de costos (Décadas de 1970 y 1980).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ciudadanía Corporativa
                p.text-center Reconocimiento de las empresas como actores sociales clave, responsables de contribuir al desarrollo de las comunidades donde operan (Década de 1990).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Enfoque de Sostenibilidad
                p.text-center Centrado en la creación de valor compartido y en minimizar impactos negativos en el medio ambiente, la sociedad y la gobernanza empresarial (Siglo XXI).
              
          .col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema1/7.png', alt='')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Dimensiones de la RSE

    p.mb-5 La RSE aborda tres dimensiones interrelacionadas que buscan fomentar el equilibrio entre los objetivos empresariales y el impacto positivo en la sociedad y el medio ambiente.

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Económica" :icon="require('@/assets/bullets/1.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Económica
            p Asegura la viabilidad financiera y la creación de valor para accionistas y partes interesadas, mientras promueve una gestión responsable y eficiente de los recursos.
            p <b>Ejemplo</b>. Inversión en tecnologías sostenibles para optimizar procesos productivos, reduciendo costos e incrementando la calidad.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/13.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Social" :icon="require('@/assets/bullets/2.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Social
            p Fomenta el bienestar y la equidad entre empleados, comunidades y sociedad en general, promoviendo derechos humanos y responsabilidad social.
            p <b>Ejemplo</b>. Implementar programas de bienestar laboral y colaborar en proyectos educativos para mejorar la calidad de vida local.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/14.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ambiental" :icon="require('@/assets/bullets/3.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ambiental
            p Mitiga el impacto ecológico de las operaciones empresariales mediante la adopción de prácticas sostenibles. 
            p <b>Ejemplo</b>. Uso de energía renovable en las operaciones y promoción del reciclaje en todas las áreas de la empresa.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/15.png', alt='', style="width: 100%;")

    h2.mb-3(data-aos="fade-right") Acciones clave en cada dimensión
    p.mb-5 Las acciones clave en la RSE se estructuran en tres dimensiones fundamentales: económica, social y ambiental.


    .bg-full-width.bg-fondo-6.mb-5
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/16.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Económica
              p.mb-0.text-center Gestión eficiente de recursos.
              p.mb-0.text-center Cumplimiento fiscal responsable.
              p.mb-0.text-center Innovación tecnológica para la productividad.

          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/17.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Social
              p.mb-0.text-center Implementación de programas de diversidad e inclusión.
              p.mb-0.text-center Fomento de la capacitación continua en los empleados.
              p.mb-0.text-center Colaboración en iniciativas comunitarias.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/18.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Ambiental
              p.mb-0.text-center Desarrollo de estrategias de economía circular.
              p.mb-0.text-center Reducción de la huella de carbono a través de energías limpias.
              p.mb-0.text-center Gestión adecuada de residuos para minimizar impacto ecológico.

        p.mb-5 La RSE es una herramienta estratégica que no solo beneficia a las organizaciones al aumentar su competitividad y sostenibilidad, sino que también mejora las condiciones sociales y ambientales. Las empresas responsables se posicionan como líderes del cambio, demostrando que el éxito corporativo y la responsabilidad social no son mutuamente excluyentes, sino componentes esenciales para un desarrollo equilibrado y equitativo.
    
    h2.mb-5(data-aos="fade-right") Integración de las dimensiones de la RSE
    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 La integración de las dimensiones económica, social y ambiental es esencial para maximizar el impacto positivo de la Responsabilidad Social Empresarial (RSE). Este enfoque integral fortalece la reputación organizacional y genera confianza entre los grupos de interés.
        
        p(data-aos="fade-left") Por ejemplo, una organización que evalúa sus beneficios económicos con transparencia, aplica prácticas laborales justas y disminuye su impacto en el medio ambiente puede destacarse como un modelo de negocio sostenible.
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in").mb-4.mb-lg-0
    

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Sinergia entre dimensiones
              p.mb-0 La estrategia debe asegurar que las acciones económicas, sociales y ambientales se complementen mutuamente.

      .col-lg-6
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Impacto positivo
              p.mb-0 El enfoque integral contribuye tanto al logro empresarial como al bienestar social y la preservación ambiental.
    
    p.mb-5 La implementación de una RSE integral asegura el desempeño responsable de la empresa en un entorno competitivo y contribuye al bienestar de la sociedad y el medio ambiente.

 
    .titulo-figura.mb-4
      h5 Figura 1. 
      span Evolución histórica RSE.
    .row.mb-5.justify-content-center.bg-color-4.py-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/22.svg", data-aos="zoom-in")
    

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Principios éticos y morales en la RSE

    p.mb-5 La Responsabilidad Social Empresarial se basa en principios éticos que orientan las decisiones empresariales más allá del cumplimiento legal, promoviendo la confianza y el compromiso con los grupos de interés. Estos principios incluyen transparencia, equidad, integridad y respeto por los derechos humanos.

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/23.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1
        AcordionA(tipo="b")
          .div(titulo="Transparencia")
            p Actuar de manera abierta y honesta, proporcionando información clara y accesible a todas las partes interesadas, fortaleciendo la confianza y la comunicación.

          .div(titulo="Equidad")
            p Garantizar un trato justo y sin discriminación, promoviendo decisiones empresariales que beneficien a todos y fomenten un ambiente inclusivo y respetuoso.

          .div(titulo="Integridad")
            p Mantener altos estándares morales en todas las acciones, cumpliendo los valores y principios éticos de la organización.

          .div(titulo="Respeto por los Derechos Humanos")
            p Asegurar que las operaciones empresariales no vulneren derechos fundamentales, promoviendo la dignidad y los derechos de todas las personas involucradas.
    

    p.mb-5 Las aplicaciones prácticas de los principios éticos en la RSE son:


    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una compañía que fomenta la <em>equidad</em> mediante políticas de igualdad de oportunidades y diversidad mejora su entorno laboral y productividad.

      .col-lg-6
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una empresa que respeta los <em>derechos humanos</em> en su cadena de suministro, asegurando condiciones laborales justas, demuestra su compromiso ético y social.
    
    p.mb-5 La implementación de estos principios no solo fortalece la reputación de las empresas, sino que también contribuye al desarrollo sostenible y a la lealtad de clientes y empleados, incrementando la competitividad en el mercado. Estos principios éticos esenciales guían las decisiones hacia prácticas responsables y sostenibles que benefician tanto a la empresa como a la sociedad.


      

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://basadoenhechosreales.com.ar/responsabilidad-social-hechos-historicos/" target="_blank" rel="noopener noreferrer") Basado en Hechos Reales. (n.d.). Responsabilidad social: Hechos históricos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://apambu.com/apambublog/5-dimensiones-responsabilidad-social-corporativa/" target="_blank" rel="noopener noreferrer") Apambu. (s.f.). 5 dimensiones de la responsabilidad social corporativa.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://fastercapital.com/es/contenido/Principios-y-valores-eticos--Responsabilidad-Social-Corporativa--Integrando-la-etica-en-los-modelos-de-negocio.html" target="_blank" rel="noopener noreferrer") FasterCapital. (2023, junio). Principios y valores éticos: Responsabilidad Social Corporativa. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.eluniversal.com.co/especial/responsabilidad-social/2022/03/10/10-principios-eticos-de-las-empresas-socialmente-responsables/" target="_blank" rel="noopener noreferrer") El Universal. (2022, 10 de marzo). 10 principios éticos de las empresas socialmente responsables. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer") ChatGPT
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer") Copilot


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
