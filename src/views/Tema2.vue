<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de la información y soportes documentales
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-intro.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 Este capítulo explica de manera aplicada la gestión de la información tributaria y la construcción del expediente documental que respalda las obligaciones fiscales. Destaca que esta gestión conecta los hechos económicos reales con lo declarado ante la autoridad fiscal y garantiza la trazabilidad de la información mediante documentos verificables. Asimismo, resalta la importancia de recolectar, organizar, validar, proteger y conservar los soportes por un mínimo de cinco años, asegurando que estén disponibles para la administración tributaria cuando sean requeridos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img1.svg", alt="").m-auto
    p.mb-5 La gestión de la información y la conservación de los soportes documentales son fundamentales no solo para garantizar la trazabilidad y verificación de los datos, sino también por las siguientes cuatro razones:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Exactitud y coherencia
                p.mb-0 Una declaración se alimenta de múltiples fuentes (empleadores, bancos, pagadores, clientes, plataformas, proveedores, entidades públicas). Sin un método, son frecuentes los errores de duplicar, omitir o clasificar mal información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img2.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Soportabilidad y trazabilidad
                p.mb-0 Toda cifra declarada debe poder explicarse con evidencia. Esto se traduce en una regla práctica: no se registra un valor en declaración sin saber de qué documento sale y dónde se archiva.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cumplimiento normativo
                p.mb-0 Existe deber de conservación de documentos, informaciones y pruebas por un mínimo de cinco años (con el conteo señalado).
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Seguridad y protección de datos
                p.mb-0 La información tributaria contiene datos personales y financieros. Por eso, el manejo del expediente debe alinearse con el régimen de protección de datos personales (principios de finalidad, seguridad, acceso restringido, entre otros). (Congreso de la República de Colombia, 2012).
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img5.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Con el objetivo de conocer el recorrido completo de la información tributaria desde su identificación hasta su conservación, lo invitamos a revisar la siguiente figura:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img7.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Identificar obligación y periodo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img8.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Definir fuentes de datos y soportes.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img9.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Recolectar (dirigido, no indiscriminado).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img10.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Clasificar y nombrar (carpeta tributaria).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img11.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Verificar y conciliar (control de calidad).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img12.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Trazar soporte + dato declarado (matriz).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img13.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Presentar / reportar (cuando corresponda).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img14.svg' style="max-width: 90px").m-auto
            p.mb-0.text-center Conservar y proteger (archivo + seguridad).
        Separador
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Fuentes de información tributaria ¿de dónde salen los datos que luego se declaran?
        p.mb-5 Una declaración o reporte se alimenta de dos grandes fuentes:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .p-5
            h4.mb-4.text-center Información propia del contribuyente.
            p.mb-0 Soportes generados o recibidos por el contribuyente (contratos, extractos, certificaciones, facturas/documentos equivalentes, certificaciones de saldos, soportes de pago, inventarios, actas, etc.).
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .p-5
            h4.mb-4.text-center Información de terceros y del ecosistema electrónico.
            p.mb-0 Información reportada por agentes externos (empleadores, entidades financieras, pagadores, proveedores) y por el sistema de facturación electrónica y documentos asociados (cuando aplique). 
      .col-xl-6.col-md-9(data-aos="fade-left")
        .caja-tema1-2.h-100
          figure.mb-4
            img(src='@/assets/curso/tema2/img15.svg', alt='' style="max-width: 100px")
          p Respecto a la información de terceros, en algunos casos la DIAN presenta herramientas como declaración sugerida, que orienta el diligenciamiento con datos disponibles para el contribuyente.
          p.mb-0 #[b Principio operativo]: la información “precargada” o “sugerida” es un insumo de revisión; la responsabilidad del contenido final recae en el contribuyente y debe sustentarse con su expediente.
    p.mb-5 Para identificar claramente cada fuente de información, cuáles son los soportes y qué control básico debe aplicarse antes de usarlos en un formulario o reporte, lo invitamos a explorar la siguiente tabla:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 6.
          span Fuentes de información tributaria y soportes asociados
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Fuente de información
                th.ajuste-border-tabla.texto-left Ejemplos de soportes habituales
                th.ajuste-border-tabla.texto-left Riesgo frecuente
                th.texto-left Control básico recomendado
            tbody
              tr
                td.ajuste-border-tabla.texto-left Empleadores / pagadores
                td.ajuste-border-tabla.texto-left Certificados, comprobantes de pago, certificaciones
                td.ajuste-border-tabla.texto-left Periodo equivocado, datos incompletos
                td.texto-left Validar año/periodo y titularidad
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Entidades financieras
                td.ajuste-border-tabla.texto-left Extractos, certificaciones de saldos, certificados de rendimientos
                td.ajuste-border-tabla.texto-left Duplicidad por múltiples cuentas
                td.texto-left Consolidar y deduplicar por periodo
              tr
                td.ajuste-border-tabla.texto-left Proveedores
                td.ajuste-border-tabla.texto-left Factura/documento equivalente, soportes de pago
                td.ajuste-border-tabla.texto-left Soporte no idóneo para costo/deducción
                td.texto-left Verificar tipo y requisitos del soporte
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Operaciones con no obligados a facturar
                td.ajuste-border-tabla.texto-left Documento soporte elaborado por el adquirente
                td.ajuste-border-tabla.texto-left Falta de numeración/estructura
                td.texto-left Confirmar lineamientos DIAN para documento soporte
              tr
                td.ajuste-border-tabla.texto-left Nómina (cuando aplique)
                td.ajuste-border-tabla.texto-left Documento soporte de nómina electrónica (obligados)
                td.ajuste-border-tabla.texto-left No transmisión/validación
                td.texto-left Confirmar validación y archivo de soporte
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left DIAN / portal transaccional
                td.ajuste-border-tabla.texto-left Declaración sugerida, constancias, borradores
                td.ajuste-border-tabla.texto-left Confiar sin conciliar
                td.texto-left Conciliar contra expediente propio
    .caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
      .col
        h3 ¿Qué son soportes documentales en materia fiscal?
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema1-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema2/img16.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Los soportes documentales son evidencias que prueban hechos económicos y su tratamiento tributario. En términos simples: son la prueba de que algo ocurrió (por ejemplo, un ingreso o una compra) y de que el valor registrado es correcto (por ejemplo, el saldo de una deuda al 31 de diciembre).
    p.mb-5 Para formar al aprendiz con una visión aplicable a distintos perfiles, conviene agrupar soportes por lo que prueban:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identificación y perfil tributario
                p.mb-0 Incluye RUT, responsabilidades, actividad económica, datos de contacto. La DIAN publica guías y recursos de inscripción y actualización del RUT, que se recomienda usar como material de apoyo en el capítulo. (DIAN, s.f.).
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img17.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ingresos
                p.mb-0 Certificados, contratos, extractos, comprobantes de pago, reportes de plataformas, facturas o documentos equivalentes según aplique.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img18.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Retenciones, autorretenciones y anticipos
                p.mb-0 Certificados y constancias de retención practicada, soportes de pagos anticipados, recibos de pago.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img19.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Costos, deducciones e impuestos descontables (cuando aplique)
                p.mb-0 La procedencia de costos, deducciones e impuestos descontables depende del tipo de soporte documental. Según el artículo 771-2 del Estatuto Tributario, estos deben respaldarse con facturas, documentos equivalentes o soportes válidos, incluyendo documentos soporte para operaciones con no obligados a facturar y registros del sistema de facturación electrónica.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img25.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Patrimonio y pasivos (cierre a 31 de diciembre)
                p.mb-0 Soportes de bienes (inmuebles, vehículos, inversiones, cuentas) y deudas (certificados de saldo, extractos, obligaciones). La enseñanza aquí se centra en el “corte anual”: todo soporte debe mostrar fecha y saldo a 31 de diciembre.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img20.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Evidencias de cumplimiento.
                p.mb-0 Borradores, versión presentada, constancia de presentación, soportes de pago.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img21.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 La siguiente tabla presenta, de manera organizada, los diferentes soportes documentales según el rubro que respaldan, como ingresos, retenciones, costos o deducciones, patrimonio y pasivos. Se invita al aprendiz a revisarla por filas: primero identificar el rubro, luego reconocer los soportes principales y complementarios, y finalmente analizar las observaciones que orientan la verificación del periodo, la titularidad y el cumplimiento de los requisitos.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 7.
          span Mapa transversal de soportes documentales por rubro tributario
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Rubro en declaración / reporte
                th.ajuste-border-tabla.texto-left Qué debe probar
                th.ajuste-border-tabla.texto-left Soporte principal típico
                th.ajuste-border-tabla.texto-left Soporte complementario
                th.texto-left Observación didáctica
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Ingresos
                td.ajuste-border-tabla.texto-left Origen y valor
                td.ajuste-border-tabla.texto-left Certificados / facturas / documentos equivalentes
                td.ajuste-border-tabla.texto-left Extractos, comprobantes, contratos
                td.texto-left Confirmar periodo y pagador
              tr
                td.ajuste-border-tabla.texto-left Retenciones
                td.ajuste-border-tabla.texto-left Valor retenido y agente retenedor
                td.ajuste-border-tabla.texto-left Certificado o constancia
                td.ajuste-border-tabla.texto-left Extractos, comprobantes
                td.texto-left Evita perder saldos a favor
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Costos / deducciones
                td.ajuste-border-tabla.texto-left Procedencia y requisitos
                td.ajuste-border-tabla.texto-left Factura / documento equivalente / documento soporte no obligados
                td.ajuste-border-tabla.texto-left Comprobantes de pago, contrato
                td.texto-left Revisar requisitos del 771-2 y marco DIAN
              tr
                td.ajuste-border-tabla.texto-left Nómina (cuando aplique)
                td.ajuste-border-tabla.texto-left Devengos / deducciones y soporte fiscal
                td.ajuste-border-tabla.texto-left Documento soporte de nómina electrónica (si aplica al obligado)
                td.ajuste-border-tabla.texto-left Reportes internos, comprobantes
                td.texto-left DIAN lo reconoce como soporte fiscal idóneo tras validación
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Patrimonio
                td.ajuste-border-tabla.texto-left Existencia y valor del bien
                td.ajuste-border-tabla.texto-left Escritura / tarjeta de propiedad / certificados
                td.ajuste-border-tabla.texto-left Avalúos, extractos, certificaciones
                td.texto-left Hacer corte a 31 de diciembre
              tr
                td.ajuste-border-tabla.texto-left Pasivos
                td.ajuste-border-tabla.texto-left Existencia y saldo
                td.ajuste-border-tabla.texto-left Certificación de deuda / extracto
                td.ajuste-border-tabla.texto-left Contrato de crédito, pagaré
                td.texto-left Evitar registrar pasivos sin respaldo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Presentación
                td.ajuste-border-tabla.texto-left Cumplimiento formal
                td.ajuste-border-tabla.texto-left PDF declarado + constancia
                td.ajuste-border-tabla.texto-left Recibo de pago
                td.texto-left Cerrar expediente del periodo
    .bg-2
      .px-5
        .caja-tema1.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
          .col
            h3 Arquitectura del expediente tributario (carpeta tributaria)
        .row.justify-content-center.mb-5
          .col-xl-10
            .caja-tema1-3(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/tema2/img22.jpg', alt='').m-auto
                .col-xl
                  p.mb-0 Una buena práctica formativa es exigir que el aprendiz construya una carpeta tributaria (digital y/o física) por periodo (año gravable o bimestre/mensual según obligación). El objetivo no es acumular archivos; es garantizar que cualquier cifra se encuentre en menos de dos minutos.
        p.mb-5 Para conocer cómo se debe una carpeta tributaria por un periodo grabable, se dará un ejemplo de la estructura sugerida de carpeta para un expediente digital.
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 4.
              span Ejemplo de estructura sugerida de carpeta digital
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img23.svg', alt='La imagen presenta la estructura de organización de una carpeta tributaria por año gravable, donde la información del contribuyente se clasifica en secciones como identificación, ingresos, retenciones, costos y deducciones, patrimonio, conciliación y declaración, facilitando el control, la verificación y el respaldo documental.').m-auto
        p.mb-5 En Colombia, el sistema de facturación electrónica y documentos relacionados incorpora soportes que, cuando cumplen requisitos técnicos y de validación, tienen efectos en la procedencia de costos, deducciones e impuestos descontables (cuando aplique). En particular se tienen:
        .bg-slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Documento soporte en adquisiciones a no obligados a expedir factura
                    p.mb-0 El adquirente lo elabora para soportar costos, deducciones o impuestos descontables, con numeración autorizada por la DIAN.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema2/img24.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Documentos equivalentes electrónicos
                    p.mb-0 Otorgan al adquirente derecho a costos y deducciones en renta (y a impuestos descontables en IVA cuando aplique), siempre que cumplan condiciones técnicas.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema2/img26.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Documento soporte de pago de nómina electrónica
                    p.mb-0 Es soporte fiscal de costos y deducciones derivados de pagos de nómina (y efectos en IVA cuando aplique), conforme a la descripción DIAN, sujeto a generación y validación.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/tema2/img27.png', alt='' style="max-width: 500px").m-auto
    .bg-3
      .px-5
        p.mb-5 Para que se reconozca el soporte de nómina electrónica como documento fiscal y se entienda qué debe conservar, se presenta la siguiente figura:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 5.
              span Ejemplo de soporte electrónico de pago de nómina electrónica
            figure(data-aos="zoom-in").mb-2
              img(src='@/assets/curso/tema2/img28.png', alt='La ilustración presenta la interfaz del sistema de la DIAN para diligenciar el Documento Soporte de Pago de Nómina Electrónica, donde se registran datos del empleador y del trabajador, información laboral y fechas de liquidación, necesarios para reportar correctamente los pagos de nómina.').m-auto
            figcaption(data-aos="zoom-in") #[b Nota.] DIAN, “Documento Soporte de Pago de Nómina Electrónica” y material Abecé de nómina electrónica. (DIAN).
        .caja-tema1.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img11.svg" style="max-width: 60px").m-auto
          .col
            h3 Control de calidad: verificación, conciliación y custodia de información
        p.mb-5 Verificar no es “mirar por encima”; es aplicar un control mínimo a cada soporte para decidir si es utilizable. Este control se enseña como una lista de preguntas:
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-1.h-100
              .p-5
                p.mb-0.text-center ¿Corresponde al periodo (año gravable o periodo) que se va a declarar?
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-1.h-100
              .p-5
                p.mb-0.text-center ¿Corresponde al contribuyente (titularidad correcta)? ¿Está completo y legible?
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-1.h-100
              .p-5
                p.mb-0.text-center ¿Sus valores concilian con otros soportes (por ejemplo, extractos vs certificaciones)?
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema1-1.h-100
              .p-5
                p.mb-0 ¿Para soportar costos, deducciones o IVA, el documento utilizado es el adecuado (factura, documento equivalente o documento soporte) y cumple con los requisitos establecidos?
        .row.justify-content-center.align-items-center.mb-5
          .col-xl
            .caja-intro.ajuste-caja-intro.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 La conciliación consiste en comparar la información del expediente con otras fuentes para identificar y explicar posibles diferencias, registrándolas en un papel de trabajo. Además, es fundamental verificar la calidad y validez de los soportes documentales que integran el expediente, para lo cual se presenta la siguiente lista de control:
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/tema2/img29.png", alt="").m-auto
    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 8.
          span Lista de verificación de calidad de soportes
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.ajuste-border-tabla.texto-left Pregunta de verificación
                th.ajuste-border-tabla.texto-left Respuesta (Sí/No)
                th.texto-left Evidencia / nota
            tbody
              tr
                td.ajuste-border-tabla.texto-left Periodo
                td.ajuste-border-tabla.texto-left ¿El soporte corresponde al año/periodo a declarar?
                td.ajuste-border-tabla -
                td -
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Titularidad
                td.ajuste-border-tabla.texto-left ¿Identifica correctamente al contribuyente?
                td.ajuste-border-tabla -
                td -
              tr
                td.ajuste-border-tabla.texto-left Integridad
                td.ajuste-border-tabla.texto-left ¿Está completo y legible?
                td.ajuste-border-tabla -
                td - 
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Consistencia
                td.ajuste-border-tabla.texto-left ¿Concilia con extractos/otros soportes?
                td.ajuste-border-tabla -
                td -
              tr
                td.ajuste-border-tabla.texto-left Tipo de soporte
                td.ajuste-border-tabla.texto-left ¿Es factura / documento equivalente / documento soporte / nomina electrónica (si aplica)?
                td.ajuste-border-tabla -
                td - 
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Archivo
                td.ajuste-border-tabla.texto-left ¿Quedó en carpeta correcta con nombre estándar?
                td.ajuste-border-tabla -
                td -
        .caja-tema1-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/tema2/img30.jpg', alt='').m-auto
            .col-xl
              p.mb-3 El Estatuto Tributario establece que los documentos del expediente deben conservarse por mínimo cinco años, contados desde el 1 de enero del año siguiente a su elaboración, expedición o recibo, y mantenerse disponibles para cuando la DIAN los requiera en procesos de control. Sobre el particular, se concluye:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | El expediente del año gravable se cierra con #[b todo el archivo documental], que incluye soportes, matriz de control, conciliaciones y evidencias de presentación y pago, no únicamente con el PDF de la declaración presentada.
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | La gestión digital de soportes se sustenta en el marco de mensajes de datos y firmas digitales, útil para comprender por qué un expediente electrónico bien administrado puede conservar integridad y valor probatorio.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | El expediente tributario contiene datos personales y financieros, por lo que debe custodiarse aplicando medidas de seguridad como acceso restringido, contraseñas, respaldo y control en el manejo y eliminación de la información.
</template>

<script>
export default {
  name: 'Tema2',
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
