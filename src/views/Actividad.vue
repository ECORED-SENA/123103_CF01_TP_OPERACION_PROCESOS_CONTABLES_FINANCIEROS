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
        '<b> Objetivo:</b> Evaluar el nivel de comprensión de los aprendices sobre los fundamentos de la contabilidad, la clasificación de soportes y el ciclo contable, así como su capacidad para registrar transacciones mediante el uso de la cuenta T y la aplicación de la partida doble, fortaleciendo la generación de información financiera confiable para la toma de decisiones organizacionales fundamentada en datos.',
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
              texto: 'Código Civil - Decreto 410 de 1971',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estatuto Tributario – Decreto 624 de 1989',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Decreto 1625 de 2016 – Materia Tributaria',
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
            { id: 'a', texto: 'Ministerio de Comercio', esCorrecta: false },
            { id: 'b', texto: 'Banco de la República', esCorrecta: false },
            {
              id: 'c',
              texto: 'Superintendencia de Sociedades',
              esCorrecta: false,
            },
            { id: 'd', texto: 'DIAN', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se denomina al vínculo jurídico que obliga a un contribuyente a pagar un tributo al Estado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Obligación civil', esCorrecta: false },
            { id: 'b', texto: 'Obligación mercantil', esCorrecta: false },
            { id: 'c', texto: 'Obligación tributaria', esCorrecta: true },
            { id: 'd', texto: 'Contrato estatal', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 4,
          texto: '¿Cuáles son los cinco elementos esenciales del tributo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activo, pasivo, patrimonio, ingresos y gastos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sujeto activo, sujeto pasivo, hecho generador, base gravable y tarifa',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Factura, recibo, cheque, comprobante y pagaré',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'DIAN, contribuyente, banco, municipio y nación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 5,
          texto: '¿Quién es el "Sujeto Activo" en la relación tributaria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El contribuyente que paga el impuesto',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La entidad estatal que tiene la facultad de exigir el pago del tributo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El contador que firma la declaración',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La empresa que vende los productos',
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
            { id: 'a', texto: 'Impuesto directo', esCorrecta: false },
            { id: 'b', texto: 'Impuesto indirecto', esCorrecta: true },
            { id: 'c', texto: 'Contribución especial', esCorrecta: false },
            { id: 'd', texto: 'Tasa municipal', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 7,
          texto: '¿Cuál es un ejemplo de impuesto directo en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impuesto sobre la renta', esCorrecta: true },
            { id: 'b', texto: 'IVA', esCorrecta: false },
            { id: 'c', texto: 'Impuesto al consumo', esCorrecta: false },
            { id: 'd', texto: 'GMF (4x1000)', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 8,
          texto: '¿Qué diferencia a una "Tasa" de un "Impuesto"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El impuesto es voluntario', esCorrecta: false },
            {
              id: 'b',
              texto:
                'La tasa implica una contraprestación directa por un servicio estatal',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los impuestos solo los pagan las empresas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No existe ninguna diferencia',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 9,
          texto:
            'El aporte que realizan las empresas al SENA e ICBF se considera una:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tasa', esCorrecta: false },
            { id: 'b', texto: 'Impuesto directo', esCorrecta: false },
            { id: 'c', texto: 'Contribución parafiscal', esCorrecta: true },
            { id: 'd', texto: 'Donación', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 10,
          texto:
            '¿A qué régimen pertenecen las personas que no cumplen los topes para ser responsables de IVA?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'No responsables de IVA', esCorrecta: true },
            { id: 'b', texto: 'Grandes contribuyentes', esCorrecta: false },
            { id: 'c', texto: 'Régimen contributivo', esCorrecta: false },
            { id: 'd', texto: 'Responsables de IVA', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el objetivo principal del Régimen Simple de Tributación (RST)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar las multas tributarias',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir cargas administrativas y simplificar el cumplimiento tributario',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Eliminar el pago de renta', esCorrecta: false },
            {
              id: 'd',
              texto: 'Evitar que las empresas tengan contabilidad',
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
            { id: 'b', texto: '5 años', esCorrecta: true },
            { id: 'c', texto: '10 años', esCorrecta: false },
            { id: 'd', texto: '2 años', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 13,
          texto:
            '¿Qué documento debe emitir un responsable de IVA por sus ventas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Remisión interna', esCorrecta: false },
            {
              id: 'b',
              texto: 'Factura electrónica de venta',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Orden de pedido', esCorrecta: false },
            { id: 'd', texto: 'Recibo de caja manual', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 14,
          texto:
            'El proceso de verificar que la información contable sea real y cumpla la norma se denomina:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Control de calidad de la información',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Archivo cronológico', esCorrecta: false },
            { id: 'c', texto: 'Cierre de cuentas', esCorrecta: false },
            { id: 'd', texto: 'Liquidación de tributos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 15,
          texto: '¿Cuál de los siguientes es un elemento del hecho generador?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aspecto material, espacial y temporal',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Número de empleados', esCorrecta: false },
            {
              id: 'c',
              texto: 'Nombre del representante legal',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ubicación de la bodega', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 16,
          texto:
            'El sistema tributario colombiano se fundamenta en principios como equidad, eficiencia y progresividad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 17,
          texto: 'El sujeto pasivo es la entidad que recauda los impuestos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 18,
          texto:
            'El IVA grava principalmente el consumo de bienes y servicios.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 19,
          texto:
            'Las tasas se pagan únicamente cuando el ciudadano utiliza un servicio estatal.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },

        {
          id: 20,
          texto:
            'El régimen simple permite descontar todos los costos y gastos de los ingresos brutos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
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
