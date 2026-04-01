<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-intro.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La elaboración de declaraciones tributarias conforme a la normativa fiscal es una competencia clave que permite convertir los hechos económicos en cumplimiento formal ante la DIAN. Este proceso requiere comprender la normativa vigente, identificar el régimen del contribuyente y gestionar adecuadamente la información y los soportes documentales que respaldan cada dato declarado.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img1.svg", alt="").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Asimismo, implica aplicar métodos de liquidación y herramientas de cálculo para depurar la base gravable, integrar retenciones y validar los resultados. De esta manera, se garantiza el diligenciamiento, presentación y pago oportuno de la declaración con criterio técnico y soporte adecuado.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
