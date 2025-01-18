<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Desarrollo sustentable y desarrollo humano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 El desarrollo sustentable y la Responsabilidad Social Empresarial (RSE) convergen en el objetivo de equilibrar el progreso económico, la justicia social y la preservación ambiental. Mientras el desarrollo sustentable busca satisfacer las necesidades presentes sin comprometer las futuras, la RSE integra voluntariamente aspectos sociales y ambientales en las operaciones empresariales, fomentando prácticas responsables que benefician tanto a la sociedad como al entorno.

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/1.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Desarrollo sustentable")
            p Este enfoque se centra en armonizar el crecimiento económico con la equidad social y la protección ambiental. Incluye: 
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Uso responsable y eficiente de recursos naturales.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Implementación de tecnologías que minimicen el impacto ambiental.
          .div(titulo="Desarrollo humano")
            p Este concepto prioriza el bienestar de las personas, asegurando acceso a salud, educación y condiciones de vida dignas. Promueve:
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Equidad de género.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Participación ciudadana.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Respeto a los derechos humanos.
          
    
    h2.mb-3(data-aos="fade-right") Relación entre desarrollo sustentable y desarrollo humano
    p.mb-5 Ambos conceptos son interdependientes: el desarrollo humano solo puede ser sostenible si se preserva el medio ambiente, mientras que el desarrollo sustentable requiere considerar el bienestar de las personas. Integrar ambos enfoques es crucial para construir sociedades equitativas y en armonía con la naturaleza.

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            h5 Ejemplos prácticos:
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Energías renovables:</b> implementación de fuentes de energía limpia, como solar y eólica, para reducir emisiones de gases de efecto invernadero.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Educación inclusiva:</b> garantizar acceso equitativo a educación de calidad, promoviendo la igualdad de oportunidades.
              

          .col-lg-6(data-aos="zoom-in").order-1
            figure
              img(src="@/assets/curso/tema4/2.svg", data-aos="zoom-in").mb-4.mb-lg-0
    
    h2.mb-3(data-aos="fade-right") Relación entre RSE y desarrollo sustentable
    p La RSE y el desarrollo sostenible son conceptos complementarios que alinean la actividad empresarial con objetivos sociales y ambientales.
    p.mb-5 Los puntos clave de la relación:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La RSE impulsa la adopción de prácticas que respetan los derechos humanos, protegen el medio ambiente y fomentan el desarrollo social y económico.

      .col-lg-6
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El desarrollo sostenible, por su parte, se enfoca en satisfacer necesidades actuales sin comprometer las futuras, guiando estrategias empresariales hacia objetivos globales, como los ODS de la ONU.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            h5 Ejemplos prácticos:
            ul.lista-ul
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Eficiencia energética y reducción de emisiones:</b> invertir en tecnologías limpias y optimizar procesos productivos disminuye el impacto ambiental, genera ahorros económicos y fortalece la reputación corporativa.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Diversidad e igualdad de género:</b> promover la equidad en el ámbito laboral fomenta la innovación y mejora la competitividad empresarial.
              

          .col-lg-6(data-aos="zoom-in").order-1
            figure
              img(src="@/assets/curso/tema4/5.svg", data-aos="zoom-in").mb-4.mb-lg-0

    h2.mb-3(data-aos="fade-right") Gestión responsable en cadenas de suministro

    .row.mb-5.align-items-center
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p(data-aos="fade-left") Exigir estándares sociales y ambientales a los proveedores refuerza la sostenibilidad global y la confianza de los consumidores en los productos elaborados éticamente.

        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Contexto colombiano
              p.mb-0 En Colombia, la RSE aborda desafíos como la desigualdad social y la degradación ambiental. Las empresas que integran sostenibilidad fortalecen su competitividad en mercados internacionales y contribuyen al desarrollo del país.
    
    p.mb-5 La RSE y el desarrollo sostenible están estrechamente interrelacionados. Las empresas que adoptan medidas responsables no solo cumplen con sus obligaciones éticas y legales, sino que también contribuyen a la construcción de una sociedad más justa y a la preservación del medio ambiente para futuras generaciones. Esta integración fortalece la reputación corporativa y asegura la sostenibilidad a largo plazo.

    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Grupos de interés en la responsabilidad social empresarial
            p.mb-4(data-aos="fade-right") En el documento se explora cómo la responsabilidad social empresarial (RSE) interactúa con distintos grupos de interés clave, como empleados, consumidores, comunidades y el medio ambiente.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Grupos de interés en la responsabilidad social empresarial.

          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/8.png', alt='')



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
              a(href="https://desarrollo-sustentable.org/desarrollo-sustentable-y-desarrollo-humano/" target="_blank" rel="noopener noreferrer") Planeta Reverdece. (2024). Desarrollo sustentable y desarrollo humano. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.un.org/sustainabledevelopment/es/2023/08/what-is-sustainable-development/" target="_blank" rel="noopener noreferrer") ONU. (2023). ¿En qué consiste el desarrollo sostenible?.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.focustribes.com/es/rse-desarrollo-sostenible" target="_blank" rel="noopener noreferrer") FocusTribes. (2024, agosto 29). RSE y desarrollo sostenible: diferencias y vínculos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.blog-qhse.com/es/los-objetivos-de-desarrollo-sostenible-al-servicio-de-la-estrategia-rse" target="_blank" rel="noopener noreferrer") Blog QHSE. (2023, agosto 23). Los objetivos de desarrollo sostenible al servicio de la estrategia RSE. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://foretica.org/wp-content/uploads/publicaciones/cuadernos-foretica/cuaderno_foretica_14_dialogo_grupos_interes.pdf" target="_blank" rel="noopener noreferrer") Forética. (2022). Diálogo con grupos de interés. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer") ChatGPT
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer") Copilot

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-JTveXxHrB4" target="_blank" rel="noopener noreferrer") Rincón, V. (2020, 15 de mayo). Relación entre la responsabilidad social empresarial y el desarrollo sostenible.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz.',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
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
