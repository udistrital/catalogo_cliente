// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  categorias: [
    {
      nombre: 'Gestión Administrativa',
      color: '#8E2825',
      aplicaciones: [
        {
          nombre: 'AGORA',
          url: 'https://www.google.com',
          estilo: 'agora-info'
        },
        {
          nombre: 'ARGO',
          url: 'www.google.com',
          estilo: 'argo-info'
        },
        {
          nombre: 'ARKA',
          url: 'www.google.com',
          estilo: 'arka-info'
        },
        {
          nombre: 'CUMPLIDOS',
          url: 'www.google.com',
          estilo: 'cumplidos-info'
        },
        {
          nombre: 'RESOLUCIONES',
          url: 'www.google.com',
          estilo: 'resoluciones-info'
        },
        {
          nombre: 'OIKOS',
          url: 'www.google.com',
          estilo: 'oikos-info'
        },
        {
          nombre: 'SISIFO',
          url: 'www.google.com',
          estilo: 'sisifo-info'
        },
        {
          nombre: 'TEMIS',
          url: 'www.google.com',
          estilo: 'temis-info'
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
          estilo: 'jano-info'
        },
        {
          nombre: 'KYRON',
          url: 'www.google.com',
          estilo: 'kyron-info'
        },
        {
          nombre: 'POLUX',
          url: 'www.google.com',
          estilo: 'polux-info'
        },
        {
          nombre: 'SGA',
          url: 'www.google.com',
          estilo: 'sga-info'
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
          estilo: 'kronos-info'
        },
        {
          nombre: 'TITAN',
          url: 'www.google.com',
          estilo: 'titan-info'
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
          estilo: 'perseo-info'
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
