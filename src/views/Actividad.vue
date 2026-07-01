<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de contabilidad y registro de transacciones.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar el nivel de comprensión de los aprendices sobre los fundamentos de la contabilidad, la clasificación de soportes y el ciclo contable, así como su capacidad para registrar transacciones mediante el uso de la cuenta T y la aplicación de la partida doble, fortaleciendo la generación de información financiera confiable para la toma de decisiones organizacionales fundamentada en datos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la norma principal que compila los impuestos nacionales en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Código Civil -  Decreto 410 de 1971',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estatuto Tributario – Decreto 624 de 1989',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Decreto 1625 de 2016 – Mateira Tributaria',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 1581 de 2012 – Protección de la información',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad es responsable de administrar y recaudar la mayoría de los impuestos nacionales en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DIAN.', esCorrecta: true },
            { id: 'b', texto: 'Ministerio de Comercio', esCorrecta: false },
            { id: 'c', texto: 'Banco de la República', esCorrecta: false },
            {
              id: 'd',
              texto: 'Superintendencia de Sociedades',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes es un elemento esencial de la obligación tributaria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plan contable', esCorrecta: false },
            { id: 'b', texto: 'Balance general', esCorrecta: false },
            { id: 'c', texto: 'Sujeto activo', esCorrecta: true },
            { id: 'd', texto: 'Estado de resultados', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 4,
          texto: 'El hecho generador de un impuesto se define como:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El valor que paga el contribuyente a ala DIAN',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La entidad que recauda el impuesto, como la DIAN',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La situación que origina la obligación tributaria',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El periodo contable del contribuyente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 5,
          texto: '¿Qué representa la base gravable en un impuesto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El porcentaje del tributo, que depende de las tarifas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nombre del contribuyente dependiente del impuesto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El valor sobre el cual se calcula el impuesto',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El formulario de declaración, el cual, se registra en línea',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 6,
          texto: 'El impuesto al valor agregado (IVA) se clasifica como:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impuesto directo.', esCorrecta: false },
            { id: 'b', texto: 'Impuesto indirecto.', esCorrecta: true },
            { id: 'c', texto: 'Contribución especial.', esCorrecta: false },
            { id: 'd', texto: 'Tasa municipal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 7,
          texto: '¿Cuál de los siguientes es un ejemplo de impuesto directo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'IVA', esCorrecta: false },
            { id: 'b', texto: 'Impuesto al consumo', esCorrecta: false },
            { id: 'c', texto: 'Peajes', esCorrecta: false },
            { id: 'd', texto: 'Impuesto de renta', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el régimen tributario diseñado para pequeños empresarios que unifica varios impuestos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Régimen ordinario', esCorrecta: false },
            { id: 'b', texto: 'Régimen especial', esCorrecta: false },
            {
              id: 'c',
              texto: 'Régimen simple de tributación',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Régimen transitorio', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 9,
          texto: 'Las entidades sin ánimo de lucro pertenecen generalmente al:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Régimen ordinario', esCorrecta: false },
            { id: 'b', texto: 'Régimen especial', esCorrecta: true },
            { id: 'c', texto: 'Régimen simple', esCorrecta: false },
            { id: 'd', texto: 'Régimen territorial', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 10,
          texto:
            '¿Qué documento fija cada año los plazos para declarar y pagar impuestos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estatuto Tributario', esCorrecta: false },
            { id: 'b', texto: 'Código de Comercio', esCorrecta: false },
            { id: 'c', texto: 'Calendario tributario', esCorrecta: true },
            {
              id: 'd',
              texto: 'Plan Nacional de Desarrollo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el objetivo principal de la gestión de la información tributaria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar y respaldar los datos que se declaran ante la DIAN',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Evitar registrar ingresos y duplicidad de información financiera',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir impuestos ilegalmente y de esta manera no desfinanciar los ingresos del estado',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar documentos contables, de acuerdo con las tablas de retención documental',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 12,
          texto:
            'Según la normativa tributaria, los documentos soporte deben conservarse mínimo:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '1 año', esCorrecta: false },
            { id: 'b', texto: '3 años', esCorrecta: false },
            { id: 'c', texto: '5 años', esCorrecta: true },
            { id: 'd', texto: '10 años', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 13,
          texto: '¿Cuál de los siguientes es un ejemplo de tasa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impuesto de renta', esCorrecta: false },
            { id: 'b', texto: 'IVA', esCorrecta: false },
            { id: 'c', texto: 'Peaje por uso de carretera', esCorrecta: true },
            { id: 'd', texto: 'Impuesto al patrimonio', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 14,
          texto:
            'Cuando una empresa paga aportes al SENA por su nómina, estos corresponden a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impuesto indirecto', esCorrecta: false },
            { id: 'b', texto: 'Contribución parafiscal', esCorrecta: true },
            { id: 'c', texto: 'Tasa municipal oficial', esCorrecta: false },
            { id: 'd', texto: 'Impuesto directo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito del control de calidad en los soportes documentales tributarios?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificar que la información sea correcta y utilizable',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar documentos antiguos para evitar la generación de informes desactualizados',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir el número de facturas, en el marco de la política de cero papel',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar los impuestos para incrementar los ingresos del estado',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la finalidad de los tratados internacionales en materia tributaria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la carga fiscal sobre contribuyentes con ingresos en el exterior',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar la obligación de declarar impuestos sobre ingresos obtenidos internacionalmente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar la doble tributación en operaciones realizadas entre diferentes países',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Establecer sanciones automáticas para contribuyentes con operaciones internacionales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la función principal de la Unidad de Valor Tributario (UVT)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar directamente el impuesto sobre la renta de todos los contribuyentes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer valores de referencia para sanciones y obligaciones tributarias anuales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Definir la clasificación de los contribuyentes según su actividad económica',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcular los ingresos brutos de las empresas en cada periodo fiscal',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 18,
          texto:
            '¿Qué caracteriza a los impuestos indirectos dentro del sistema tributario colombiano?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Gravan directamente los ingresos y patrimonio del contribuyente obligado al pago',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se aplican únicamente a empresas con actividades económicas internacionales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se calculan sobre la utilidad neta después de costos y deducciones fiscales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se trasladan al consumidor final y gravan el consumo de bienes y servicios',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el propósito de la carpeta tributaria dentro del proceso fiscal?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar y ubicar rápidamente los soportes que respaldan cada cifra declarada',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reducir el número de documentos exigidos por la administración tributaria nacional',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir el uso de sistemas contables en la elaboración de declaraciones fiscales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar la revisión de la información por parte de la autoridad tributaria',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 20,
          texto:
            '¿Qué se debe realizar durante el control de calidad de los soportes tributarios?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar documentos antiguos sin revisar su relación con la declaración presentada',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar información sin validación previa para agilizar el proceso tributario',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar periodo titularidad integridad consistencia y validez de cada documento',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Modificar datos de los soportes para que coincidan con la declaración final',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
