// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
    NOTIFICACION_SERVICE: 'wss://pruebasapi.portaloas.udistrital.edu.co:8116/ws',
    TOKEN: {
        AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
      CLIENTE_ID: 'yvXIb7DEJXCCvTvpkBTyQJthBj8a',
      RESPONSE_TYPE: 'id_token token',
      SCOPE: 'openid email role documento',
      REDIRECT_URL: 'https://pruebascatalogo.portaloas.udistrital.edu.co',
      SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
      SIGN_OUT_REDIRECT_URL: 'https://pruebascatalogo.portaloas.udistrital.edu.co',
    },
    APLICACIONES_SERVICE:
    'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/aplicacion_rol/aplicacion_rol',
    categorias: [
      {
        nombre: 'Gestión Administrativa',
        color: '#8E2825',
        aplicaciones: [
          {
            nombre: 'AGORA',
            url: 'https://www.google.com',
            estilo: 'agora-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'ARGO',
            url: 'www.google.com',
            estilo: 'argo-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'ARKA',
            url: 'www.google.com',
            estilo: 'arka-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'CUMPLIDOS',
            url: 'www.google.com',
            estilo: 'cumplidos-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'RESOLUCIONES',
            url: 'www.google.com',
            estilo: 'resoluciones-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'OIKOS',
            url: 'www.google.com',
            estilo: 'oikos-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'SISIFO',
            url: 'www.google.com',
            estilo: 'sisifo-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'TEMIS',
            url: 'www.google.com',
            estilo: 'temis-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
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
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'KYRON',
            url: 'www.google.com',
            estilo: 'kyron-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'POLUX',
            url: 'www.google.com',
            estilo: 'polux-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'SGA',
            url: 'www.google.com',
            estilo: 'sga-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
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
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          },
          {
            nombre: 'TITAN',
            url: 'www.google.com',
            estilo: 'titan-info',
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
          }
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
            descripcion: 'Aplicación creada para cumplir algun objetivo en especifico'
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
