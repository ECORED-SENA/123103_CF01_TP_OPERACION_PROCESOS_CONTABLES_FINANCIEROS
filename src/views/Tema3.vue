<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Métodos de liquidación y herramientas de cálculo
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-intro.ajuste-caja-intro-1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 	Este capítulo explica el proceso técnico para elaborar las declaraciones tributarias, enfocándose en el cálculo del impuesto: depuración de la base gravable, determinación del impuesto y aplicación de retenciones y anticipos hasta obtener el saldo final. Este procedimiento sigue la secuencia establecida en el Estatuto Tributario y su reglamentación. Además, considera las normas vigentes, como el Decreto 1625 de 2016, el Decreto 2229 de 2023, el calendario tributario DIAN 2026 y los cambios introducidos por la Ley 2277 de 2022.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img1.svg", alt="").m-auto
    p.mb-5 Mediante la siguiente tabla se relaciona la normatividad de referencia a consultar para realizar la liquidación y cálculo de los impuestos:
    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 9.
          span Normatividad de referencia para métodos de liquidación y cálculo
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Tema del capítulo
                th.ajuste-border-tabla.texto-left Norma o fuente orientadora
                th.texto-left Qué regula en el cálculo
            tbody
              tr
                td.ajuste-border-tabla.texto-left Plazos y calendario
                td.ajuste-border-tabla.texto-left Decreto 2229 de 2023 y Calendario DIAN 2026
                td.texto-left Cómo se determinan vencimientos; fechas aplicables 2026 para AG 2025
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Residencia fiscal
                td.ajuste-border-tabla.texto-left Art. 10 E.T. (criterio 183 días/365 y reglas asociadas)
                td.texto-left Define alcance de ingresos/patrimonio y ruta del formulario
              tr
                td.ajuste-border-tabla.texto-left Sujeción al impuesto
                td.ajuste-border-tabla.texto-left Arts. 7 y 9 E.T.
                td.texto-left Personas naturales y sucesiones ilíquidas sometidas al impuesto; alcances residentes/no residentes
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Depuración base (renta líquida)
                td.ajuste-border-tabla.texto-left Art. 26 E.T.
                td.texto-left Secuencia: ingresos → ingresos netos → renta bruta → renta líquida → renta gravable
              tr
                td.ajuste-border-tabla.texto-left Determinación cedular y pérdidas por cédula
                td.ajuste-border-tabla.texto-left Art. 330 E.T. (y reglas de compensación dentro de la cédula)
                td.texto-left Depuración por cédulas y compensación de pérdidas dentro de la misma cédula
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Rentas exentas y límites cédula general
                td.ajuste-border-tabla.texto-left Ley 2277 de 2022 (modificaciones en cédulas y límites)
                td.texto-left Límites y reglas de depuración aplicables al AG 2025
              tr
                td.ajuste-border-tabla.texto-left Retención en la fuente
                td.ajuste-border-tabla.texto-left Arts. 365 y 367 E.T. (finalidad y naturaleza de anticipo)
                td.texto-left Retención como mecanismo de recaudo anticipado
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left IVA (hecho generador)
                td.ajuste-border-tabla.texto-left Art. 420 E.T.
                td.texto-left Hechos sobre los que recae el IVA
              tr
                td.ajuste-border-tabla.texto-left Obligación de llevar contabilidad
                td.ajuste-border-tabla.texto-left DIAN (responsabilidad 42, art. 19 C. de Co., art. 772 E.T.)
                td.texto-left Diferencias metodológicas para papeles de trabajo y soportes
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Formularios e instructivos
                td.ajuste-border-tabla.texto-left Repositorio DIAN y guías de diligenciamiento 210/110
                td.texto-left Orientación de diligenciamiento y recursos oficiales
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1	Depuración y determinación del impuesto: ingresos, costos, deducciones, beneficios, pérdidas, retenciones y anticipo
    p.mb-5 La depuración del impuesto sobre la renta parte de los ingresos y conduce a la renta líquida gravable, siguiendo la secuencia establecida en el artículo 26 del Estatuto Tributario y considerando las excepciones según el tipo de contribuyente. Para llevar a cabo este proceso, se debe tener en cuenta:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Determinación de ingresos (criterio de inclusión en el año gravable)
                p.mb-0 Para liquidar correctamente, el aprendiz debe identificar cuándo se incluye un ingreso en el año gravable. El Estatuto Tributario diferencia el tratamiento según se esté o no obligado a llevar contabilidad, con reglas de realización de ingresos que impactan el periodo fiscal en el que se declaran.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img2.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Costos y deducciones: criterios de procedencia y depuración
                p.mb-0 En esta etapa se enseña a diferenciar el rol de los costos (para obtener renta bruta) y de las deducciones (para obtener renta líquida), siguiendo el orden de depuración. Para deducciones por expensas necesarias, el artículo 107 del Estatuto Tributario establece los criterios de causalidad, necesidad y proporcionalidad, aplicados con criterio comercial y con límites legales. Adicionalmente, la procedencia fiscal depende del soporte idóneo cuando sea exigible (factura/documento equivalente y reglas de soporte), por lo cual debe mantenerse coherencia con lo trabajado en el capítulo 2.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Beneficios: rentas exentas e ingresos no constitutivos
                p.mb-0 Este subtema desarrolla el tratamiento de beneficios fiscales y su ubicación correcta en la depuración (según el régimen aplicable). En personas naturales residentes bajo el sistema cedular, la depuración de la cédula general y el límite de rentas exentas y deducciones imputables se regulan en el artículo 336 del Estatuto Tributario (con modificaciones introducidas por reformas, según el año gravable).
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pérdidas fiscales y compensación de ejercicios anteriores
                p.mb-0 El tratamiento de pérdidas depende del tipo de contribuyente y del sistema aplicable. Para sociedades, el artículo 147 del Estatuto Tributario regula la compensación de pérdidas fiscales con rentas líquidas ordinarias en periodos siguientes, bajo condiciones.  Para personas naturales, la compensación se aborda según la estructura del sistema aplicable (por ejemplo, lógica cedular), asegurando trazabilidad del saldo y su imputación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img5.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Retenciones en la fuente e imputación en la liquidación
                p.mb-0 La retención en la fuente se explica como mecanismo de recaudo anticipado. El Estatuto Tributario establece su finalidad y habilitación general, lo que se traduce en la práctica en dos tareas: verificar el valor retenido y aplicarlo correctamente para determinar el saldo final (pagar o a favor).
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img6.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Anticipo del impuesto sobre la renta
                p.mb-0 Se enseña el anticipo como un pago anticipado calculado en la declaración, conforme a las reglas del artículo 807 del Estatuto Tributario (porcentajes progresivos y reglas de cálculo).
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img7.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Resultado final
                p.mb-0 Impuesto neto y saldo (pagar o a favor). Se integra la base gravable con la tarifa aplicable para obtener el impuesto, y luego se imputan retenciones y anticipo para llegar al saldo final. Este resultado es el que posteriormente se diligencia en el formulario correspondiente.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema3/img8.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Para conocer la secuencia a realizar en una depuración para calcular el impuesto sobre la renta, se invita a explorar la siguiente figura:
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 6.
          span Secuencia general de depuración de renta (artículo 26 E.T.)
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img9.png', alt='').m-auto
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2	Herramientas de cálculo
    .caja-tema3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 Este numeral desarrolla el uso de herramientas informáticas para transformar la depuración del numeral 3.1 en una liquidación verificable, minimizando errores. Aquí el aprendiz aprende a construir modelos de cálculo, parametrizar normas (UVT, tarifas, topes), aplicar validaciones, generar alertas y dejar evidencia de revisión. La lógica de depuración se apoya en el artículo 26 del Estatuto Tributario, que estructura el cálculo desde ingresos hasta renta líquida gravable.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema3/img10.jpg', alt='').m-auto
    p.mb-5 En el ambiente real, el cálculo tributario se apoya en tres niveles de herramientas:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/img11.svg', alt="" style="max-width: 140px").m-auto
            h4.text-center Hojas de cálculo (#[i Excel] u hoja equivalente)
            p.mb-0.text-center Sirven para consolidar rubros, aplicar fórmulas, controlar consistencia, parametrizar y simular escenarios.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/img12.svg', alt="" style="max-width: 140px").m-auto
            h4.text-center Herramientas oficiales DIAN (cuando apliquen)
            p.mb-0 Ejemplo: Programa Ayuda Renta como apoyo para el diligenciamiento del Formulario 210 en personas naturales residentes no obligadas a llevar contabilidad. La DIAN lo describe como una herramienta gratuita en Excel para facilitar el diligenciamiento.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img13.svg', alt="" style="max-width: 140px").m-auto
            h4.text-center Prevalidadores DIAN (cuando existan anexos técnicos)
            p.mb-0.text-center Se usan para generar archivos técnicos (por ejemplo: XML) cuando la obligación lo exige (conciliación fiscal u otros anexos).
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Diseño del módulo de cálculo: estructura de una planilla 
    p.mb-5 El diseño del modelo de cálculo en #[i excel] organiza la información tributaria mediante hojas estructuradas que permiten registrar datos, aplicar fórmulas y validar resultados para determinar el impuesto con claridad y control. Los pasos son:
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Paso 1").ajuste-cajaAcordion
            p.mb-3 Crear el libro y las pestañas.
            .ajuste-tabla-1.mb-3
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 7.
                span Libro excel y pestañas.
              figure.ajuste-tabla-2
                img(src='@/assets/curso/tema3/img47.svg', alt='La imagen muestra la barra de pestañas de un libro de Excel organizado para el cálculo del impuesto sobre la renta. Cada hoja corresponde a una etapa del proceso: parámetros, ingresos, costos y deducciones, beneficios, retenciones, anticipo, resultado y control.')
          .row(titulo="Paso 2").ajuste-cajaAcordion
            p.mb-3 Pestaña parámetros: registra variables que no deben digitarse repetidamente.
            .ajuste-tabla-1.mb-3
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 8.
                span Pestaña parámetros
              figure.ajuste-tabla-2
                img(src='@/assets/curso/tema3/img14.svg', alt='La imagen presenta los parámetros base de una plantilla de cálculo tributario, donde se registran variables del año gravable como la UVT en pesos, topes y porcentajes aplicables, los porcentajes del anticipo según el artículo 807 del Estatuto Tributario y, si aplica, las tablas o parámetros necesarios para calcular retenciones. ' style="max-width: 620px")
          .row(titulo="Paso 3").ajuste-cajaAcordion
            p.mb-3 Pestañas de rubros (entradas con control): En “Ingresos”, “Costos y deducciones”, “Beneficios” y “Retenciones”, se trabaja con tablas (Insertar > Tabla) y se definen columnas estándar.
            .ajuste-tabla-1.mb-3
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 9.
                span Pestaña parámetros
              figure.ajuste-tabla-2
                img(src='@/assets/curso/tema3/img15.svg', alt='El diagrama muestra el encabezado de una columna en una hoja de cálculo identificado como “Fecha / Periodo”. Este campo permite registrar el momento en que ocurre una operación o transacción, facilitando la organización cronológica, el control del año gravable y la trazabilidad de los registros contables.' style="max-width: 320px")
          .row(titulo="Paso 4").ajuste-cajaAcordion
            p.mb-0 Pestaña “resultado”. Es la depuración que se realiza con base en el art. 26 del Estatuto Tributario. Ejemplo: Revisar nuevamente la figura 10. Secuencia general de depuración de renta.
            .col-xl-7.mb-4
              p.mb-0 Pestaña “resultado”. Es la depuración que se realiza con base en el art. 26 del Estatuto Tributario. Ejemplo: Revisar nuevamente la figura 10. Secuencia general de depuración de renta. 
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/tema3/img16.png', alt='').m-auto 
          .row(titulo="Paso 5").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Pestaña “Control”. Este tablero responde: “¿el cálculo es consistente?” sin volver a revisar todo a mano.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/tema3/img17.png', alt='').m-auto 
    p.mb-5 Para realizar las validaciones, lo invitamos a conocer el siguiente ejemplo:
    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 10.
          span Tablero de validación en #[i Excel]
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Validación
                th.ajuste-border-tabla.texto-left Descripción
                th.ajuste-border-tabla.texto-left Estado
                th.texto-left Pestaña
            tbody
              tr
                td.ajuste-border-tabla.texto-left Periodo del año gravable
                td.ajuste-border-tabla.texto-left Verificar que todas las filas usen el año gravable indicado (2025).
                td.ajuste-border-tabla.texto-left OK
                td.texto-left Verificar en Ingresos, Costos, Beneficios y Retenciones.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Duplicidad de ingresos
                td.ajuste-border-tabla.texto-left Revisar si se repite el mismo ingreso (pagador y valor) más de una vez.
                td.ajuste-border-tabla.texto-left Revisar
                td.texto-left Revisar en Ingresos
              tr
                td.ajuste-border-tabla.texto-left Conciliación de totales
                td.ajuste-border-tabla.texto-left Validar que la suma final coincida con el resumen del Resultado.
                td.ajuste-border-tabla.texto-left OK
                td.texto-left Verificar en Resultado
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Revisión de límites
                td.ajuste-border-tabla.texto-left Confirmar que los beneficios no excedan el tope permitido.
                td.ajuste-border-tabla.texto-left Revisar
                td.texto-left Verificar en Beneficios
              tr
                td.ajuste-border-tabla.texto-left Conciliación de retenciones
                td.ajuste-border-tabla.texto-left Validar retenciones calculadas contra certificados en soportes.
                td.ajuste-border-tabla.texto-left OK
                td.texto-left Verificar en Retenciones
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Anticipo por historial
                td.ajuste-border-tabla.texto-left Revisar si el porcentaje del anticipo es el correcto (tercer año: 75 %).
                td.ajuste-border-tabla.texto-left Revisar
                td.texto-left Revisar en Anticipo
        .caja-intro(data-aos="zoom-in")
          p.mb-0 En este capítulo se estudió la depuración del impuesto, se usaron hojas de cálculo para parametrizar variables, consolidar información y aplicar controles. Los valores pueden trasladarse al formulario, dando paso al siguiente subtema que es el diligenciamiento y presentación de la declaración.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3	Paso a paso general para elaborar declaraciones de renta
    .caja-tema3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 El cumplimiento tributario se concreta cuando la declaración se presenta ante la DIAN y, si corresponde, se realiza el pago dentro del plazo. Este capítulo integra el cálculo del impuesto con el proceso operativo de presentación y pago digital, permitiendo un cumplimiento oportuno, verificable y aplicable a distintos tipos de contribuyentes.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/tema3/img18.jpg', alt='').m-auto
    p.mb-5 La ruta general para la elaboración de una declaración de renta se explica en el siguiente secuencialmente en el siguiente esquema:
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 10.
          span Ruta para la elaboración de una declaración de renta
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img19.png', alt='La imagen presenta un esquema del proceso de declaración de renta organizado en tres fases: planeación y diagnóstico, preparación y liquidación, y formalización y cierre. Incluye actividades como identificar al declarante, depurar ingresos, calcular retenciones y presentar la declaración ante la DIAN.').m-auto
    p.mb-5 Antes de elaborar la declaración de renta, se debe identificar el año gravable, verificar la residencia fiscal, determinar la obligación de declarar y el formulario correspondiente, y preparar los papeles de trabajo para asegurar un proceso ordenado, conforme a la normativa de la DIAN. Los pasos se detallan en el siguiente apartado.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 1: definir año gravable y ubicar vencimientos
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-intro(data-aos="zoom-in")
          p.mb-0 Antes de calcular el impuesto, se debe identificar el año gravable y la fecha de vencimiento. Para el AG 2025, los plazos de declaración en 2026 van del 12 de agosto al 26 de octubre, según los dos últimos dígitos del NIT.
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 11.
          span Calendario tributario DIAN 2026
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img20.png', alt='La imagen muestra el calendario tributario para la declaración de renta de personas naturales. Organiza las fechas de presentación y pago según los dos últimos dígitos del NIT, distribuidas entre agosto, septiembre y octubre, facilitando la identificación del plazo correspondiente.').m-auto
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 2: determinar la condición de residencia fiscal del declarante en Colombia
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-intro(data-aos="zoom-in").mb-5
          p.mb-0 La residencia fiscal determina qué ingresos y patrimonio deben declararse y el formulario a utilizar. Según el artículo 10 del Estatuto Tributario, se considera residente quien permanezca en Colombia más de 183 días en un período de 365 días. Los residentes declaran rentas y patrimonio nacional y extranjero; los no residentes solo los de fuente nacional.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 12.
          span Residencia fiscal y alcance de lo declarado (residente vs no residente)
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img21.svg', alt='La imagen presenta un esquema que clasifica a las personas naturales y sucesiones ilíquidas según su nacionalidad y residencia fiscal. También muestra el alcance de la declaración de renta, diferenciando entre ingresos y patrimonio de fuente nacional y extranjera').m-auto
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 3: revisar si la persona natural o entidad califica como contribuyente del impuesto sobre la renta y definir el formulario
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-intro(data-aos="zoom-in").mb-5
          p.mb-0 Las personas naturales y sucesiones ilíquidas están sujetas al impuesto sobre la renta. Para su liquidación, se debe identificar el tipo de declarante, su régimen y si está obligado a llevar contabilidad, debido a que, esto afecta el método de cálculo, los formularios y los soportes requeridos. Esto se presenta en la siguiente figura:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 13.
          span Decisión de formulario de renta y conciliación fiscal en personas naturales
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img22.svg', alt='La imagen presenta un esquema de decisión para personas naturales según su condición de residencia fiscal y obligación de llevar contabilidad. A partir de estos criterios se determina el formulario de renta correspondiente y, cuando aplica, la conciliación fiscal.').m-auto
    p.mb-5 La obligación de declarar renta se define según la residencia fiscal y el tipo de contribuyente, asignando el Formulario 110 a personas jurídicas y naturales no residentes, y el Formulario 210 a personas naturales residentes. Las personas naturales y sucesiones ilíquidas deben presentar esta declaración si cumplan con:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img23.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img24.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Calidad frente al IVA
                p.mb-0.text-center En el 2025 haya actuado como responsable de IVA.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img25.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Patrimonio bruto al 31 de diciembre de 2025
                p.mb-0.text-center Superior a $224.096.000 (4.500 UVT).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img26.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ingresos brutos en 2025
                p.mb-0.text-center Iguales o superiores a $69.719.000 (1.400 UVT).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img27.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Consumos mediante tarjeta de crédito en 2025
                p.mb-0.text-center Superiores a $69.719.000 (1.400 UVT).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img28.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Compras y consumos totales en 2025
                p.mb-0.text-center Superiores a $69.719.000 (1.400 UVT).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img29.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Consignaciones bancarias recibidas, depósitos e inversiones financieras en 2025
                p.mb-0.text-center Superiores a $69.719.000 (1.400 UVT).
        .row.justify-content-center
          .col-xl-10
            .caja-intro.ajuste-caja-intro-2(data-aos="zoom-in").mb-5
              p.mb-0 La residencia fiscal y la obligación de llevar o no contabilidad son dos factores determinantes para elegir en cuál formulario debe presentarse la declaración de renta. En esta sección se conocerá el formulario 210 para la declaración de renta de personas naturales y el formulario 110 para la declaración de renta de personas jurídicas.
    .caja-tema3-2.mb-5(data-aos="fade-right")   
      h4.mb-0 Formulario 210 para la declaración de renta de personas naturales
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-intro.ajuste-caja-intro-3.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 El 14 de marzo de 2024, mediante la Resolución 000044, la DIAN estableció el nuevo Formulario 210 para presentar virtualmente la declaración de renta de personas naturales y sucesiones ilíquidas residentes desde el año gravable 2023 en adelante, incorporando ajustes para aplicar los cambios introducidos por la Ley 2277 de 2022 y reglamentados posteriormente por los decretos 1103 y 2231 de 2023.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img30.svg", alt="").m-auto
    p.mb-5 Para diligenciar el formulario 210 se deben tener en cuentas estos aspectos:
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 14.
          span Detalles a tener en cuenta en formulario 210
        figure(data-aos="zoom-in").mb-2
          img(src='@/assets/curso/tema3/img31.svg', alt='La imagen presenta el Formulario 210 y destaca varias casillas clave utilizadas en la declaración de renta de personas naturales. Estas casillas permiten reportar aportes voluntarios, gastos personales, dependientes económicos, deducciones especiales, control de dividendos y verificación de límites de costos y gastos.').m-auto
        figcaption(data-aos="zoom-in") #[b Nota.] (Actualicese.com, 2025).
    p.mb-5 El 31 de julio de 2024, la DIAN ajustó el instructivo del Formulario 210 (Resolución 000120), precisando ingresos de la cédula general para calcular el límite del 40% con tope de 1.340 UVT. Seguidamente, se comparte figura del formulario:
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 15.
          span Formulario 210
        figure(data-aos="zoom-in").mb-2
          img(src='@/assets/curso/tema3/img32.png', alt='').m-auto
        figcaption(data-aos="zoom-in") #[b Nota.] Actualicese.com, 2025.
    .caja-tema3-2.mb-5(data-aos="fade-right")   
      h4.mb-0 Formulario 110 para la declaración de renta de personas jurídicas
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-intro.ajuste-caja-intro-3.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 El Formulario 110 es la declaración del impuesto sobre la renta utilizada principalmente por personas jurídicas y asimiladas, así como por personas naturales no residentes, sucesiones ilíquidas de no residentes y entidades que declaran ingresos y patrimonio. Debe presentarse virtualmente ante la DIAN mediante usuario registrado y firma electrónica autorizada; de lo contrario, se considera no presentada.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/img33.svg", alt="").m-auto
    p.mb-5 A continuación, se presenta una figura del formulario 110 con el objetivo de ubicar los campos principales de identificación en el encabezado:
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 16.
          span Formulario 110
        figure(data-aos="zoom-in").mb-2
          img(src='@/assets/curso/tema3/img34.png', alt='La imagen presenta la estructura del Formulario 110 de la DIAN, utilizado para declarar el impuesto sobre la renta de personas jurídicas y otros contribuyentes. Incluye secciones de identificación, ingresos, costos, deducciones, patrimonio, cálculo del impuesto y determinación del saldo a pagar.').m-auto
        figcaption(data-aos="zoom-in") #[b Nota.] Actualicese.com, 2025.
    p.mb-5 Existen formularios tributarios para obligaciones específicas como IVA, retención en la fuente, impuesto al consumo, activos en el exterior, régimen SIMPLE o patrimonio. Antes de diligenciarlos, es necesario verificar en el RUT la clasificación del contribuyente. Estos son:
    .row.justify-content-center.mb-5
      .col-xl-6.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-2.ajuste-caja-tema1.h-100
          ul.fa-ul.estilo___ul.mb-0
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 110 (declaración de renta)]. Se utiliza para declarar renta de personas jurídicas y asimiladas.
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formato 2516 (reporte de conciliación fiscal)]. Se presenta como anexo cuando el declarante debe elaborar conciliación fiscal y está asociado a declaraciones que se presentan con Formulario 11.
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 210 (declaración de renta)]. Se utiliza para declarar renta de personas naturales y asimiladas residentes, especialmente no obligadas a llevar contabilidad.
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formato 2517 (reporte de conciliación fiscal)]. Se presenta como anexo al Formulario 210 cuando la persona natural residente está obligada a llevar contabilidad y debe reportar conciliación fiscal.
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 160 (declaración anual de activos en el exterior)]. Se presenta cuando el contribuyente (persona natural o jurídica) está obligado a declarar activos poseídos en el exterior, según los criterios aplicables.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 220 y formato 2276 (certificado de ingresos y retenciones)]. Documento usado por empleadores/pagadores para certificar ingresos y retenciones por rentas de trabajo (salarios y pensiones); se usa como soporte para elaborar la declaración (no es una declaración del contribuyente).
      .col-xl-6(data-aos="fade-left")
        .caja-tema1-2.ajuste-caja-tema1.h-100
          ul.fa-ul.estilo___ul.mb-0
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 2593 (recibo de pago del anticipo bimestral del SIMPLE)]. Se utiliza para pagar el anticipo del Régimen Simple de Tributación en los periodos bimestrales.
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 260 (declaración anual consolidada del SIMPLE)]. Lo presentan contribuyentes inscritos en el Régimen Simple (personas naturales o jurídicas).
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 260 (declaración anual consolidada del SIMPLE)]. Lo presentan contribuyentes inscritos en el Régimen Simple (personas naturales o jurídicas).
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 310 (declaración del impuesto nacional al consumo)]. Se usa por responsables del INC (según actividad) para declarar este impuesto en el periodo aplicable.
            li.mb-2
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 350 (declaración de retención en la fuente)]. Se usa por agentes de retención para declarar y pagar retenciones practicadas (renta, IVA, timbre, entre otras) en el periodo correspondiente.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Formulario 420 (declaración del impuesto al patrimonio)]. Se utiliza por contribuyentes obligados a declarar este impuesto cuando se encuentre vigente y aplique a su condición y patrimonio.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 4: construir papeles de trabajo para la liquidación. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-intro(data-aos="zoom-in")
          p.mb-0 El aprendiz prepara hojas de cálculo para consolidar valores por rubro y dejar trazabilidad: ingresos por fuente, devoluciones y descuentos, costos imputables, deducciones, rentas exentas y beneficios aplicables, retenciones, anticipos y saldos. Este paso es donde se “traduce” el expediente a números auditables antes de llevarlos al formulario.
    p.mb-5 Para continuar con el proceso es de vital importancia realizar la verificación del cumplimiento de los requisitos previos de declaración de renta. Estos son:
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema3-3(data-aos="zoom-in")
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span A
              | Inscripción en el RUT
          p.mb-4.ajuste-texto-ol Todas las personas naturales que deban declarar renta deben realizar inscripción en el RUT, haciendo figurar en este la responsabilidad 05 - “Régimen ordinario”, a más tardar el día del vencimiento del plazo para declarar. No hacerlo acarrea sanción.
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span B
              | Usuario en el MUISCA
          p.mb-4.ajuste-texto-ol Se debe realizar registro en MUISCA y habilitar la cuenta accediendo al portal transaccional. Los pasos para crear una cuenta son:
          .row.justify-content-center.mb-5
            .col-xl-10
              LineaTiempoD.color-secundario
                p(numero="Paso 1" titulo="Paso 1") Para crear una cuenta de usuario es necesario que el contribuyente se encuentre inscrito en el RUT.
                p(numero="Paso 2" titulo="Paso 2") Posteriormente, es necesario ingresar al portal de la Dian, escoger la pestaña superior “Transaccional” y, dentro de esa, la opción “Usuario nuevo”.
                p(numero="Paso 3" titulo="Paso 3") Luego, deberá digitar su número de cédula y fecha de expedición.
                p(numero="Paso 4" titulo="Paso 4") Después de dar clic en “Habilitar mi cuenta”, el sistema le permitirá crear una contraseña de usuario.
                p(numero="Paso 5" titulo="Paso 5") La próxima vez que ingrese al portal deberá acceder a la pestaña “Transaccional”, y luego escoger la opción “Usuario registrado”.
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span C
              | Firma electrónica
          p.mb-4.ajuste-texto-ol El trámite de firma electrónica puede realizarse en línea por contribuyentes inscritos en el RUT. Permite autenticar documentos y trámites ante la DIAN, tiene vigencia de tres años y puede renovarse siguiendo el procedimiento establecido. Los pasos para habilitar y generar la firma son:
          .row.justify-content-center.mb-0
            .col-xl-10
              LineaTiempoD.color-secundario
                p(numero="Paso 1" titulo="Paso 1") Ingresar como “Usuario registrado a nombre propio” en el portal Muisca de la Dian.
                p(numero="Paso 2" titulo="Paso 2") En el menú principal seleccionar la opción “Gestionar mi firma electrónica” y dar clic en “Generar firma electrónica”.
                p(numero="Paso 3" titulo="Paso 3") Verificar los datos del usuario que realizará la gestión de la firma electrónica, los cuales han sido registrados en su RUT, y dar clic en “Continuar”.
                p(numero="Paso 4" titulo="Paso 4") Digitar la clave dinámica generada por el sistema, la cual será enviada al correo electrónico de contribuyentes con copia a la DIAN.
                p(numero="Paso 5" titulo="Paso 5") Posteriormente, leer y aceptar el acuerdo de firma electrónica, para luego crear la clave que se asignará al instrumento de firma electrónica.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 5: aplicar el método de depuración y determinar la base gravable
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.mb-0 El método general de depuración, establecido en el artículo 26 del Estatuto Tributario, determina la renta líquida gravable partiendo de los ingresos del período. A estos se restan devoluciones, costos y deducciones, obteniendo así la renta líquida sobre la cual se aplican las tarifas del impuesto.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema3/img35.jpg', alt='').m-auto
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 6: calcular retenciones, IVA y anticipos (según corresponda al declarante)
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-intro(data-aos="zoom-in")
          p.mb-0 En renta, la retención en la fuente opera como un mecanismo de recaudo anticipado; el Estatuto Tributario permite establecer retenciones para facilitar el recaudo y define su finalidad de recaudo gradual dentro del mismo ejercicio. En este paso se describirán los aspectos más relevantes:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/img36.svg', alt="" style="max-width: 80px").m-auto
            h4.text-center Retención en la fuente
            p.mb-0.text-center La retención en la fuente funciona como un mecanismo de recaudo anticipado del impuesto.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/img37.svg', alt="" style="max-width: 80px").m-auto
            h4.text-center IVA
            p.mb-0.text-center El IVA se genera por hechos como venta de bienes, prestación de servicios e importaciones.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img38.svg', alt="" style="max-width: 80px").m-auto
            h4.text-center Anticipo de renta
            p.mb-0.text-center El anticipo de renta se calcula sobre el impuesto neto del año declarado.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img39.svg', alt="" style="max-width: 80px").m-auto
            h4.text-center Porcentajes del anticipo
            p.mb-0.text-center Porcentajes del anticipo: 25 % primer año, 50 % segundo y 75 % desde el tercero.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 7: diligenciar, validar y presentar con herramientas tecnológicas
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.mb-0 Para personas naturales residentes, la DIAN ofrece guías, borradores en el portal y herramientas como Ayuda Renta para apoyar el diligenciamiento del Formulario 210. Este programa orienta el cálculo del impuesto, pero no reemplaza el análisis del contribuyente ni el cumplimiento de las normas vigentes.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema3/img40.jpg', alt='').m-auto
    p.mb-5 Para iniciar el diligenciamiento del Formulario 210 en la plataforma MUISCA de la DIAN, una vez tenga lista la información y los soportes, siga estos pasos:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/img41.svg', alt="" style="max-width: 80px").m-auto
            h4.text-center Ingrese al sitio oficial de la DIAN
            p.mb-0.text-center Página web de la DIAN: muisca.dian.gov.co 
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/img42.svg', alt="" style="max-width: 80px").m-auto
            h4.text-center Ubique la parte transaccional
            p.mb-0 Ubique la opción o pestaña “Transaccional” y seleccione “Usuario Registrado”.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img43.svg', alt="" style="max-width: 80px").m-auto
            h4.text-center Ingrese al usuario MUISCA
            p.mb-0 Elija el ingreso “A nombre propio” (cuando el trámite lo realiza el mismo contribuyente).
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema3/img44.svg', alt="" style="max-width: 80px").m-auto
            h4.text-center Realice autenticación de datos
            p.mb-0 Realice la autenticación diligenciando los datos solicitados:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Tipo de documento.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Número de documento.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Contraseña de acceso.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 8: firmar, presentar y pagar la declaración
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-intro(data-aos="zoom-in")
          p.mb-0 Este paso se realiza una vez finalizado el diligenciamiento y la revisión de la declaración, siempre dentro del plazo establecido en el calendario tributario definido por el Decreto 2229 de 2023. El procedimiento para seguir es:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema3/img45.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Alistamiento previo").ajuste-cajaAcordion
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Verificar que el contribuyente tenga acceso al portal transaccional de la DIAN como usuario registrado.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Confirmar que la firma electrónica esté activa y vigente (vigencia de tres años).
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Si hay saldo a pagar, definir previamente el medio de pago correspondiente.
          .row(titulo="Firmar (en servicios digitales DIAN)").ajuste-cajaAcordion
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Ingresar al portal de la DIAN en la opción Transaccional, seleccionar Usuario registrado y autenticarse a nombre propio.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Ubicar la declaración preparada y firmarla con firma electrónica.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Guardar el PDF de la declaración firmada como soporte del trámite.
          .row(titulo="Presentar (radicar la declaración)").ajuste-cajaAcordion
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Tras firmar la declaración, seleccione presentar para que el sistema la registre oficialmente.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Descargue y archive la constancia de presentación.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Para no residentes y sucesiones de no residentes, la DIAN exige presentación digital con firma electrónica; de lo contrario, se considera no presentada.
          .row(titulo="Pagar (si hay saldo a pagar)").ajuste-cajaAcordion
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Si la declaración genera saldo a pagar, se debe generar el Formulario 490 para realizar el pago en línea o en un banco autorizado.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Si no hay saldo a pagar, no se diligencia recibo.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Guardar el soporte de pago junto con la declaración y la constancia de presentación.
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 Paso 9: archivar expediente final.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1
              p.mb-0 Cierre del expediente del periodo: consiste en actualizar la carpeta tributaria con la declaración presentada (PDF), la constancia de presentación, Formulario 490 (si aplica) y el soporte de pago (si aplica); dejando control de versiones (borrador vs presentado).
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema3/img46.jpg', alt='').m-auto
    p.mb-0 Este capítulo cierra la fase operativa del cumplimiento tributario, destacando que la obligación se acredita con evidencias: declaración presentada, constancia y soporte de pago. Además, el aprendiz adquiere competencias para interpretar normas, organizar información, liquidar correctamente y presentar declaraciones con respaldo documental.
</template>

<script>
export default {
  name: 'Tema3',
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
