<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Marco normativo y planeación tributaria
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-intro.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La jerarquía normativa tributaria en Colombia se basa en la Constitución Política, el Estatuto Tributario (Decreto 624 de 1989) y el Decreto 1625 de 2016, complementados por resoluciones y conceptos de la autoridad fiscal. Conocer este marco permite aplicar correctamente la normativa y evitar errores en la gestión tributaria.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img1.svg", alt="").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La clasificación de los contribuyentes en regímenes tributarios define sus responsabilidades fiscales y la forma de declarar impuestos. Por ello, es fundamental identificar correctamente el tipo de contribuyente y el régimen aplicable para evitar errores en la gestión tributaria.
    p.mb-0 El calendario tributario guía los plazos para declarar y pagar impuestos. Su correcta gestión permite planear la información contable, evitar sanciones e intereses y asegurar cumplimiento fiscal oportuno.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Fundamentación jurídica y normativa fiscal vigente
    p.mb-5 El sistema tributario en Colombia se fundamenta en el principio de legalidad y los siguientes pilares constitucionales:
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Principios constitucionales del sistema tributario colombiano
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img3.svg', alt='El sistema tributario colombiano se fundamenta en el principio de legalidad establecido en la Constitución Política, el cual dispone que solo las autoridades legislativas pueden crear tributos. Este sistema se orienta además por los principios de equidad, eficiencia y progresividad, que buscan una distribución justa de la carga tributaria.').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-intro(data-aos="zoom-in")
          p.mb-0 Comprender estos pilares constitucionales permite al técnico asegurar que las obligaciones exigidas no vulneren los derechos fundamentales del contribuyente. (Constitución Política de Colombia [Const], 1191). Además de la Constitución Política, en el marco normativo está el Estatuto Tributario Nacional, el Decreto Único Reglamentario 1625 de 2016, actos administrativos emitidos por la Dirección de Impuestos y Aduanas Nacionales, que los detallaremos seguidamente:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Constitución Política de 1991 – Numeral 9 del Artículo 95
                p.mb-0 Representa la norma de normas y establece los principios de equidad, eficiencia y progresividad del sistema tributario. Define la potestad del Estado para imponer contribuciones y protege los derechos fundamentales de los contribuyentes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img5.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estatuto Tributario (Decreto 624 de 1989)
                p.mb-0 Es el cuerpo normativo central que compila los impuestos nacionales como renta, IVA, patrimonio y el régimen de retenciones. Es la herramienta principal para identificar sujetos, hechos generadores y bases gravables.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img6.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Decreto Único Reglamentario 1625 de 2016
                p.mb-0 Unifica todas las disposiciones reglamentarias en materia tributaria para facilitar su consulta. Detalla los procedimientos operativos, plazos de presentación y condiciones para acceder a beneficios fiscales vigentes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img7.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Leyes de Reforma Tributaria
                p.mb-0 Son disposiciones emitidas por el Congreso que modifican o adicionan el Estatuto Tributario. Introducen cambios vigentes en tarifas, nuevos impuestos o eliminan exenciones, obligando a una actualización permanente del técnico.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img8.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Resoluciones y Circulares de la DIAN
                p.mb-0 Actos administrativos que definen la operatividad técnica, como la estructura de formularios y la presentación digital. Establecen las validaciones requeridas y los anexos necesarios para el reporte oficial de información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img9.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Jurisprudencia y Conceptos Unificados
                p.mb-0 Providencias del Consejo de Estado y doctrinas de la DIAN que aclaran la interpretación de la norma en casos complejos. Son fundamentales para la verificación de declaraciones y la resolución de conflictos técnicos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img10.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 La aplicación de las normas tributarias debe realizarse respetando el orden jerárquico legal para garantizar que los procedimientos de liquidación y pago sean válidos ante la autoridad fiscal.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Doctrina y jurisprudencia: circulares, tratados internacionales y actualizaciones tributarias
    p.mb-5 La doctrina y la jurisprudencia actúan como herramientas de interpretación técnica que brindan seguridad jurídica ante vacíos en la ley fiscal colombiana. El aprendiz encontrará estas:
    .bg-1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-1.h-100
              .p-5
                h4.mb-4.text-center Conceptos y circulares de la DIAN
                p.mb-0.text-center Unifican criterios operativos para el reporte de información y el cumplimiento de obligaciones.
          .col-xl-4.col-md-9(data-aos="zoom-in")
            .caja-tema1-1.h-100
              .p-5
                h4.mb-4.text-center Jurisprudencia del Consejo de Estado 
                p.mb-0.text-center Define el alcance legal de los tributos en casos de controversia entre el Estado y los contribuyentes.
        .row.justify-content-center.mb-5
          .col-xl-10
            .caja-tema1-2(data-aos="zoom-in")
              p.mb-3 Ahora se abordan los tratados internacionales, en especial los convenios para evitar la doble imposición, que regulan la tributación de operaciones realizadas entre distintos países, y los aspectos relevantes son:
              .row.align-items-center.justify-content-center
                .col-xl.mb-4.mb-lg-0
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-2
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Definen reglas de imposición para rentas obtenidas en el exterior, evitando que sea gravado por dos estados distintos.
                    li.mb-2
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Dominar estos tratados es esencial al gestionar actividades de comercio exterior o pagos por servicios técnicos internacionales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | La correcta aplicación de estos convenios permite optimizar la carga fiscal mediante el uso de beneficios y descuentos tributarios.
                .col-xl-auto.col-md-9(data-aos="fade-left")
                  figure
                    img(src="@/assets/curso/tema1/img13.png", alt="").m-auto
        p.mb-5 En cuanto a los cambios vigentes, la última gran actualización estructural en materia tributaria se tiene esta ley de república y actualizaciones anuales:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img14.svg', alt='' style="max-width: 100px")
        h2 Ley 2277 de 2022
        p.mb-0 Reforma que ajustó las tarifas de renta, dividendos y el impuesto al patrimonio.
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img15.svg', alt='' style="max-width: 100px")
        h2 Actualización anual de la Unidad de Valor Tributario (UVT)
        p.mb-0 Para el año 2026 define los nuevos topes y cuantías para las sanciones y obligaciones.
    p.mb-0 El aprendiz debe actualizarse constantemente en las reformas tributarias para asegurar que la planeación, los cálculos y el diligenciamiento de formularios cumplan con la normativa vigente. 
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Conceptos fundamentales y tipología de los tributos
    p.mb-5 En esta sección, el aprendiz identificará los elementos de la obligación tributaria y los tipos de tributos vigentes, fortaleciendo su capacidad para interpretar y clasificar responsabilidades fiscales.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema1/img16.jpg', alt='').m-auto
            .col-xl
              p.mb-0 El sistema tributario colombiano se basa en la soberanía del Estado para recaudar recursos destinados al sostenimiento de las funciones públicas y la inversión social. Esta relación jurídica entre el Estado y los contribuyentes establece obligaciones fiscales reguladas por la ley. Comprender los tipos de tributos —impuestos, contribuciones y tasas— y distinguir entre gravámenes directos e indirectos permite interpretar adecuadamente el hecho generador, la base gravable y las responsabilidades fiscales de cada sujeto pasivo, facilitando así la correcta planeación y elaboración de declaraciones tributarias.
    p.mb-5 Los principios de equidad, eficiencia, progresividad y no retroactividad orientan el sistema tributario, garantizando una distribución justa de la carga fiscal y seguridad jurídica.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Elementos esenciales de la obligación tributaria
    p.mb-5 La obligación tributaria sustancial nace cuando se realiza el presupuesto establecido en la ley como generador del impuesto. Para que una obligación tributaria sea legal, la normativa debe definir estos elementos esenciales:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sujeto activo
                p.mb-0 Es el acreedor de la prestación tributaria, representado generalmente por el Estado a través de la Dian o las secretarías de hacienda territoriales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img17.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sujeto pasivo
                p.mb-0 Es la persona natural o jurídica sobre quien recae la obligación de pagar el tributo y cumplir con los deberes formales asociados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img18.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Hecho generador
                p.mb-0 Es el acto, circunstancia o situación de hecho que la ley define como el detonante para que surja la deuda con el fisco, como puede ser la obtención de una renta o la venta de un producto.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img19.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Base gravable
                p.mb-0 Es el valor monetario o magnitud sobre la cual se aplica el impuesto tras realizar las depuraciones permitidas por la norma.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img20.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tarifa
                p.mb-0 Es el porcentaje o monto fijo que se aplica a dicha base para obtener el valor del impuesto a pagar.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img21.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Periodo gravable
                p.mb-0 Es el tiempo (mensual, bimestral o anual) en el que se causa el impuesto.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img22.png', alt='' style="max-width: 500px").m-auto
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Clasificación técnica: impuestos, contribuciones y tasas
    p.mb-5 La legislación clasifica los tributos en impuestos, contribuciones y tasas según su naturaleza y beneficio. Además, los impuestos pueden ser directos o indirectos, según quién asuma la carga económica.
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-primario.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img23.svg', alt='' style="max-width: 100px")
        h2 Impuestos directos
        p.mb-0 Impuestos como renta y patrimonio gravan directamente la riqueza o ingresos del contribuyente, quien asume el pago. Este tipo de tributo aplica el principio de progresividad fiscal.
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img24.svg', alt='' style="max-width: 100px")
        h2 Impuestos indirectos
        p.mb-0 Impuestos como el IVA y el impuesto nacional al consumo gravan el gasto y se trasladan al consumidor final. Su correcta gestión exige control de facturas y claridad entre responsable jurídico y sujeto económico.
    p.mb-5 Los tributos también se clasifican según su ámbito de aplicación en nacionales y territoriales. Esta organización permite identificar la autoridad responsable del recaudo y facilita la planeación y el cumplimiento fiscal. En la siguiente tabla se presenta la integración técnica y geográfica de los tributos en Colombia:
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 1.
      span Integración técnica y geográfica de los tributos en Colombia
    .tabla-a(data-aos="zoom-in").mb-5
      table
        thead
          tr
            th.ajuste-border-tabla.texto-left Tributo
            th.ajuste-border-tabla.texto-left Clase de tributo
            th.ajuste-border-tabla.texto-left Clasificación técnica
            th.ajuste-border-tabla.texto-left Ámbito geográfico
            th.texto-left Hecho generador
        tbody
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Impuesto de renta
            td.ajuste-border-tabla.texto-left Impuesto
            td.ajuste-border-tabla.texto-left Directo
            td.ajuste-border-tabla.texto-left Nacional
            td.texto-left Obtener ingresos que incrementen el patrimonio.
          tr
            td.ajuste-border-tabla.texto-left Impuesto al valor agregado
            td.ajuste-border-tabla.texto-left Impuesto
            td.ajuste-border-tabla.texto-left Indirecto
            td.ajuste-border-tabla.texto-left Nacional
            td.texto-left Venta de bienes o prestación de servicios.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Industria y comercio (ICA)
            td.ajuste-border-tabla.texto-left Impuesto
            td.ajuste-border-tabla.texto-left Directo
            td.ajuste-border-tabla.texto-left Municipal
            td.texto-left Ejercicio de actividades industriales o comerciales.
          tr
            td.ajuste-border-tabla.texto-left Peajes o tasas portuarias
            td.ajuste-border-tabla.texto-left Tasa
            td.ajuste-border-tabla.texto-left Indirecto
            td.ajuste-border-tabla.texto-left Nacional / Local
            td.texto-left Uso de una infraestructura o servicio estatal.
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left Impuesto al patrimonio
            td.ajuste-border-tabla.texto-left Impuesto
            td.ajuste-border-tabla.texto-left Directo
            td.ajuste-border-tabla.texto-left Nacional
            td.texto-left Posesión de riqueza líquida superior al tope.
    p.mb-5 Para entender esta dinámica, de manera práctica se desarrollará el siguiente ejercicio para afianzar los conocimientos:
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Ejercicio práctico de afianzamiento.
    .row.justify-content-center
      .col-xl-10
        .caja-tema1-4.mb-5(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img25.svg', alt='' style="max-width: 85px").m-auto
            .col-xl.mb-4.mb-lg-0
              h4 Elementos de la obligación tributaria 
              p.mb-0 Para complementar la lectura y el ejercicio anterior, se sugiere acceder al siguiente video educativo que explica de forma didáctica los componentes de la obligación y la clasificación de los impuestos:
            .col-xl-3
              a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=K-mzHposRk8')" target="_blank" type="website")
                span Ver video
                i.fas.fa-video
    p.mb-5 Tras analizar los impuestos y su clasificación, es importante distinguir las contribuciones y tasas, que surgen de beneficios o servicios específicos del Estado y determinan el origen de la obligación tributaria.
    .bg-2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Clasificación de las contribuciones
            figure(data-aos="zoom-in").mb-5
              img(src='@/assets/curso/tema1/img26.svg', alt='La imagen presenta la clasificación de las contribuciones en dos tipos: contribuciones especiales (valorización) y contribuciones parafiscales. Las primeras se generan por beneficios derivados de obras públicas que aumentan el valor de los inmuebles, mientras que las segundas financian entidades sociales como el SENA, el ICBF y las Cajas de Compensación Familiar.').m-auto
            .caja-intro(data-aos="zoom-in")
              p.mb-0 Las contribuciones son tributos cuya obligación nace de la obtención de beneficios particulares derivados de la inversión estatal o de la pertenencia a un sector socioeconómico específico. A diferencia de los impuestos, su obligatoriedad es de nivel medio, ya que el pago está condicionado a la existencia de una mejora o beneficio real para el sujeto pasivo.
        p.mb-5 Por su parte, las tasas representan la compensación económica que los ciudadanos pagan al Estado por la prestación de un servicio público individualizado o por el uso de un bien de dominio público.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 3.
              span Tasas
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img28.svg', alt='La imagen explica el concepto de tasas, pagos que los ciudadanos realizan al Estado por el uso de un servicio público específico. Su obligatoriedad depende de la utilización del servicio, como ocurre con peajes, tasas aeroportuarias, licencias o derechos administrativos.').m-auto
        p.mb-5 Para comprender las diferencias operativas entre estos dos tributos y facilitar su identificación en el ejercicio profesional, se expone la siguiente tabla:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Comparativa técnica entre contribuciones y tasas
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Elemento
                    th.ajuste-border-tabla.texto-left Contribuciones
                    th.texto-left Tasas
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Hecho generador]
                    td.ajuste-border-tabla.texto-left Obtención de beneficios por inversión estatal.
                    td.texto-left Prestación de un servicio estatal directo.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Obligatoriedad]
                    td.ajuste-border-tabla.texto-left Media (vinculada al beneficio).
                    td.texto-left Baja (vinculada al uso del servicio).
                  tr
                    td.ajuste-border-tabla.texto-left #[b Contraprestación]
                    td.ajuste-border-tabla.texto-left Beneficio recibido (mejora de activos).
                    td.texto-left Servicio prestado (uso de infraestructura).
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Ejemplos]
                    td.ajuste-border-tabla.texto-left Valorización, aportes SENA/ICBF.
                    td.texto-left Peajes, tasas por documentos, peajes.
    p.mb-5 En el siguiente video se desarrollará un ejercicio práctico sobre contribuciones y tasas, desde su clasificación, con base en los hechos económicos generados.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Ejercicio práctico de tasas y contribuciones.
    .row.justify-content-center
      .col-xl-10
        .caja-tema1-4.mb-0(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img25.svg', alt='' style="max-width: 85px").m-auto
            .col-xl.mb-4.mb-lg-0
              h4 Diferencias o similitudes entre impuesto, tasa y contribución
              p.mb-0 Para profundizar en estas diferencias con ejemplos aplicados a la realidad contable del país, se sugiere acceder al video.
            .col-xl-3
              a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=7AERryJYeFw')" target="_blank" type="website")
                span Ver video
                i.fas.fa-video
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Clasificación de contribuyentes y regímenes
    p.mb-5 Las tasas son tributos asociados al uso de servicios públicos o bienes del Estado. Su pago depende de la decisión del ciudadano de utilizar el servicio.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema1/img29.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Las tasas corresponden a pagos que los ciudadanos realizan al Estado cuando utilizan un servicio público específico o acceden a un bien de uso público. A diferencia de los impuestos, su obligatoriedad surge únicamente cuando el usuario decide emplear dicho servicio.
    p.mb-5 Ejemplos de tasas incluyen peajes, tasas aeroportuarias, derechos administrativos y pagos por licencias o certificaciones, que compensan al Estado por servicios prestados directamente al usuario.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Regímenes tributarios: ordinario, especial y simplificado (simple)
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema1/img30.jpg', alt='').m-auto
            .col-xl
              p.mb-0 El sistema tributario colombiano establece diferentes regímenes fiscales que determinan la forma en que los contribuyentes deben cumplir sus obligaciones tributarias. Entre los principales se encuentran el régimen ordinario, el régimen especial y el régimen simple de tributación, cada uno con características, requisitos y beneficios específicos según el tipo de contribuyente y su actividad económica. 
    p.mb-5 Estos regímenes permiten organizar el cumplimiento fiscal de manera acorde con la naturaleza jurídica y la capacidad económica de las personas naturales y jurídicas y se explican en la siguiente sección:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img31.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Régimen ordinario").ajuste-cajaAcordion
            p.mb-3 Es el sistema general aplicable a la mayoría de sociedades y personas naturales. En este modelo, el impuesto de renta se calcula sobre la utilidad neta, restando costos y gastos de los ingresos. Requiere contabilidad detallada y soportes adecuados para validar las deducciones ante la administración fiscal.
          .row(titulo="Régimen especial").ajuste-cajaAcordion
            p.mb-3 El régimen especial aplica a entidades sin ánimo de lucro como fundaciones o corporaciones. Sus excedentes pueden estar exentos de renta si se reinvierten en su objeto social, bajo control y actualización permanente ante la DIAN.
          .row(titulo="Régimen simplificado").ajuste-cajaAcordion
            p.mb-3 El Régimen Simple de Tributación (RST) es un sistema opcional para pequeños y medianos empresarios que unifica impuestos como renta, IVA e ICA en un solo pago, simplificando el cumplimiento tributario.
    p.mb-5 Con el objetivo de afincar estos conceptos, mediante la posterior tabla se resumen las diferencias operativas y sustanciales entre los regímenes:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Comparativa técnica de los regímenes fiscales vigentes
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Categoría
                th.ajuste-border-tabla.texto-left Régimen ordinario
                th.ajuste-border-tabla.texto-left Régimen simple (RST)
                th.texto-left Régimen especial (RTE)
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[b Base gravable]
                td.ajuste-border-tabla.texto-left Utilidad fiscal (Ingresos - Costos - Gastos).
                td.ajuste-border-tabla.texto-left Ingresos brutos sin deducciones.
                td.texto-left Excedente neto reinvertido.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Tarifa de renta]
                td.ajuste-border-tabla.texto-left 35 % general (Jurídicas).
                td.ajuste-border-tabla.texto-left Tarifas reducidas por actividad.
                td.texto-left 20 % o exenta si cumple fines sociales.
              tr
                td.ajuste-border-tabla.texto-left #[b Periodicidad IVA]
                td.ajuste-border-tabla.texto-left Bimestral o cuatrimestral.
                td.ajuste-border-tabla.texto-left Anual con pagos bimestrales.
                td.texto-left Según actividad económica.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Obligación formal]
                td.ajuste-border-tabla.texto-left Contabilidad completa y retenciones.
                td.ajuste-border-tabla.texto-left Simplificada, sin retenciones propias.
                td.texto-left Memoria económica y registro #[i web].
    p.mb-5 La elección del régimen debe basarse en un análisis financiero previo que considere el margen de utilidad y la estructura de costos de la entidad.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Categorización: personas naturales, pequeños comerciantes y otras figuras
    p.mb-5 En este podcast se explicarán las principales obligaciones tributarias de personas naturales y jurídicas en Colombia, así como los impuestos y responsabilidades fiscales que deben cumplir según su actividad económica.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema1-5(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img32.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Tipos de contribuyentes en Colombia"
              :audio="require('@/assets/curso/podcast/Tipos de contribuyentes en Colombia.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img33.png" ).m-auto
    p.mb-5 Luego del anterior pódcast, mediante tabla se expone resumidamente los impuestos más representativos que cada tipo de persona debe considerar en su planeación fiscal para el año 2026.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Comparativa de tributos según el tipo de sujeto pasivo
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Tributo
                th.ajuste-border-tabla.texto-left Persona natural
                th.ajuste-border-tabla.texto-left Persona jurídica
                th.texto-left Observación técnica
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Renta]
                td.ajuste-border-tabla.texto-left Sistema cedular (Tarifa progresiva).
                td.ajuste-border-tabla.texto-left Tarifa fija (35 % general).
                td.texto-left Grava la utilidad o incremento patrimonial.
              tr
                td.ajuste-border-tabla.texto-left #[b IVA]
                td.ajuste-border-tabla.texto-left Solo si supera topes de ingresos.
                td.ajuste-border-tabla.texto-left Generalmente obligatoria.
                td.texto-left Impuesto indirecto al consumo.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b ICA]
                td.ajuste-border-tabla.texto-left Si ejerce actividad comercial.
                td.ajuste-border-tabla.texto-left Obligatorio por presencia local.
                td.texto-left Impuesto municipal o distrital.
              tr
                td.ajuste-border-tabla.texto-left #[b Retención]
                td.ajuste-border-tabla.texto-left Solo bajo topes de ley.
                td.ajuste-border-tabla.texto-left Agente retenedor obligatorio.
                td.texto-left Es un anticipo del impuesto de renta.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Patrimonio]
                td.ajuste-border-tabla.texto-left Si supera montos de riqueza neta.
                td.ajuste-border-tabla.texto-left Solo en casos específicos de reforma.
                td.texto-left Grava la posesión de activos.
    p.mb-5 La clasificación correcta del sujeto pasivo asegura que los formularios electrónicos y la información exógena coincidan con la realidad económica reportada. A continuación, se presenta un ejercicio práctico que permite aplicar los conceptos estudiados sobre clasificación de contribuyentes y obligaciones tributarias según la naturaleza jurídica y actividad económica.
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Ejercicio práctico de clasificación de contribuyentes y obligaciones tributarias.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Cronograma y cumplimiento legal
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-intro.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La gestión tributaria en Colombia requiere una coordinación precisa entre los procesos contables y los plazos establecidos por la ley. El calendario tributario no es solo un listado de fechas, sino una herramienta estratégica que permite prever salidas de efectivo y asegurar la presentación oportuna de los reportes. Su cumplimiento protege la reputación de la organización ante la administración fiscal y evitar sanciones que afecten los recursos destinados a la inversión. Por ello, es fundamental integrar este cronograma al ciclo de cierres contables y organizar la información con anticipación. En este apartado se revisan los plazos tributarios para 2026 y las implicaciones legales de incumplirlos (Jaramillo, 2021).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img34.png", alt="").m-auto
    p.mb-5 En esta parte se revisará conceptualmente qué es el calendario tributario, plazos por impuestos y otros aspectos para tener en cuenta.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Calendario tributario y plazos por impuesto
    p.mb-5 En este apartado se analizará de manera conceptual qué es el calendario tributario, los plazos por impuestos y otros aspectos fundamentales.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img35.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="¿Qué es el calendario tributario?").ajuste-cajaAcordion
            p.mb-3 Es el decreto que el Gobierno Nacional expide cada año para establecer las fechas límite de declaración y pago de los impuestos administrados por la autoridad fiscal. Esto permite organizar los vencimientos. Planificar las obligaciones fiscales y evita sanciones e intereses de mora.
          .row(titulo="Norma que regula los plazos (Decreto 2229 de 2023)").ajuste-cajaAcordion
            p.mb-3 Modifica el Decreto Único Reglamentario 1625 de 2016, el cual establece fechas de vencimiento, organización por últimos dígitos del NIT y diferenciación de tipos de contribuyentes.
          .row(titulo="Principales impuestos incluidos").ajuste-cajaAcordion
            p.mb-3 El calendario tributario fija plazos para el impuesto sobre la renta, el impuesto sobre las ventas (IVA), el reporte de la información exógena, los activos en el exterior y el régimen simple de tributación.
          .row(titulo="Clasificación de contribuyentes").ajuste-cajaAcordion
            p.mb-3 El calendario tributario establece plazos diferenciados según el tipo de contribuyente. Para las personas naturales, las fechas de declaración se determinan de acuerdo con su nivel de ingresos y patrimonio. En el caso de las personas jurídicas, como empresas y sociedades, se fijan vencimientos específicos. Por su parte, los grandes contribuyentes cuentan con plazos particulares que incluyen pagos anticipados y fechas especiales de cumplimiento.
          .row(titulo="Organización de los vencimientos").ajuste-cajaAcordion
            p.mb-3 Los plazos se determinan según los últimos dígitos del NIT.
            .ajuste-tabla-1.mb-3
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Ejemplo de organización de los vencimientos tributarios
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Últimos dígitos
                      th.texto-left Fecha de vencimiento
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left 01 – 02
                      td.texto-left Fecha 1
                    tr
                      td.ajuste-border-tabla.texto-left 03 – 04
                      td.texto-left Fecha 2
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left 05 – 06
                      td.texto-left Fecha 3
          .row(titulo="Impuestos territoriales").ajuste-cajaAcordion
            p.mb-3 Además de los impuestos nacionales, los municipios establecen sus propios plazos para: el impuesto predial, el impuesto de industria y comercio (ICA).
    p.mb-5 Para realizar una excelente planificación financiera de los tributos y evitar sanciones, es necesario integrar calendarios nacionales y locales.
    .row
      .col-xl-6(data-aos="zoom-in")
        a.anexo.mb-4.mb-lg-0(href="https://www.dian.gov.co/Paginas/CalendarioTributario.aspx " target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p El calendario tributario 2026 de la DIAN, se encuentra disponible para consulta en este enlace: 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
