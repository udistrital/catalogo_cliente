// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  entorno: 'test',
  notificaciones: true,
  menuApps: true,
  CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
  NOTIFICACION_SERVICE: 'wss://pruebasapi.portaloas.udistrital.edu.co:8116/ws',
  TOKEN: {
    AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
    CLIENTE_ID: 'e36v1MPQk2jbz9KM4SmKhk8Cyw0a',
    RESPONSE_TYPE: 'id_token token',
    SCOPE: 'openid email role documento',
    REDIRECT_URL: 'http://localhost:4200/',
    SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
    SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
  },
  APLICACIONES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/aplicacion_rol/aplicacion_rol',
  categorias: [
    {
      nombre: 'Gestión Administrativa',
      color: '#8E2825',
      aplicaciones: [
        {
          nombre: 'AGORA',
          url: 'https://www.google.com',
          estilo: 'agora-info',
          descripcion: 'Banco de proveedores que apoya procesos de cotización y contratación'
        },
        {
          nombre: 'ARGO',
          url: 'www.google.com',
          estilo: 'argo-info',
          descripcion: 'Apoyo en la gestión de procesos precontractuales, contractuales y de compras'
        },
        {
          nombre: 'ARKA',
          url: 'www.google.com',
          estilo: 'arka-info',
          descripcion: 'Gestión de los movimientos de almacén e inventarios apoyando los procesos relacionados a bienes'
        },
        {
          nombre: 'CUMPLIDOS',
          url: 'www.google.com',
          estilo: 'cumplidos-info',
          descripcion: 'Apoyo de procesos postcontractuales tanto para docentes de vinculacion especial como CPS'
        },
        {
          nombre: 'RESOLUCIONES',
          url: 'www.google.com',
          estilo: 'resoluciones-info',
          descripcion: 'Gestión del vinculo contractual de los docentes de vinculación especial apoyando procesos de RRHH'
        },
        {
          nombre: 'OIKOS',
          url: 'www.google.com',
          estilo: 'oikos-info',
          descripcion: 'Registro y definición de las dependencias y espacios físicos de la universidad distrital'
        },
        {
          nombre: 'SISIFO',
          url: 'www.google.com',
          estilo: 'sisifo-info',
          descripcion: 'Sistema de gestion de planes de mejoramiento para los procesos académico administrativos'
        },
        {
          nombre: 'TEMIS',
          url: 'www.google.com',
          estilo: 'temis-info',
          descripcion: 'Apoyo en la definición y cálculo de las cuotas partes pensionales con entidades externas'
        }
      ]
    },
    {
      nombre: 'Gestión Académica',
      color: '#15485E',
      aplicaciones: [
        {
          nombre: 'JANO',
          url: 'www.google.com',
          estilo: 'jano-info',
          descripcion: 'Apoyo en el desarrollo de concursos de mérito para ocupar plazas de planta docente'
        },
        {
          nombre: 'KYRON',
          url: 'www.google.com',
          estilo: 'kyron-info',
          descripcion: 'Registro y consolidación de información de producción académica de docentes de planta'
        },
        {
          nombre: 'POLUX',
          url: 'www.google.com',
          estilo: 'polux-info',
          descripcion: 'Apoya la gestion de trabajos de grado'
        },
        {
          nombre: 'SGA',
          url: 'www.google.com',
          estilo: 'sga-info',
          descripcion: 'Apoya el desarrollo de la misión de la universidad, así como diversos procesos administrativos'
        }
      ]
    },
    {
      nombre: 'Gestión Financiera',
      color: '#DE9E0F',
      aplicaciones: [
        {
          nombre: 'KRONOS',
          url: 'www.google.com',
          estilo: 'kronos-info',
          descripcion: 'Apoyar el libre desarrollo de los procesos financieros y reporte de información a entes de control'
        },
        {
          nombre: 'TITAN',
          url: 'www.google.com',
          estilo: 'titan-info',
          descripcion: 'Construir las diferentes nóminas y pago de honorarios de los compromisos contractuales'       }
      ]
    },
    {
      nombre: 'Voto Electrónico',
      color: '#397A18',
      aplicaciones: [
        {
          nombre: 'PERSEO',
          url: 'www.google.com',
          estilo: 'perseo-info',
          descripcion: 'Permitir el desarrollo de procesos electorales dentro de la universidad de forma digital'
        }
      ]
    }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
