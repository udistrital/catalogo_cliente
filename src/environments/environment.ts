// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  categorias: [
    {
      nombre: 'Gestion Administrativa',
      color: '#8E2825',
      aplicaciones: [
        {
          nombre: 'AGORA',
          url: 'https://www.google.com',
          estilo: 'agora'
        },
        {
          nombre: 'ARGO',
          url: 'www.google.com',
          estilo: 'argo'
        },
        {
          nombre: 'ARKA',
          url: 'www.google.com',
          estilo: 'arka'
        },
        {
          nombre: 'CUMPLIDOS',
          url: 'www.google.com',
          estilo: 'cumplidos'
        },
        {
          nombre: 'RESOLUCIONES',
          url: 'www.google.com',
          estilo: 'resoluciones'
        },
        {
          nombre: 'OIKOS',
          url: 'www.google.com',
          estilo: 'oikos'
        },
        {
          nombre: 'SISIFO',
          url: 'www.google.com',
          estilo: 'sisifo'
        },
        {
          nombre: 'TEMIS',
          url: 'www.google.com',
          estilo: 'temis'
        }
      ]
    },
    {
      nombre: 'Gestion Academica',
      color: '#839EB1',
      aplicaciones: [
        {
          nombre: 'JANO',
          url: 'www.google.com',
          estilo: 'jano'
        },
        {
          nombre: 'KYRON',
          url: 'www.google.com',
          estilo: 'kyron'
        },
        {
          nombre: 'POLUX',
          url: 'www.google.com',
          estilo: 'polux'
        },
        {
          nombre: 'SGA',
          url: 'www.google.com',
          estilo: 'sga'
        }
      ]
    },
    {
      nombre: 'Gestion Financiera',
      color: '#E8E1C5',
      aplicaciones: [
        {
          nombre: 'KRONOS',
          url: 'www.google.com',
          estilo: 'kronos'
        },
        {
          nombre: 'TITAN',
          url: 'www.google.com',
          estilo: 'titan'
        }
      ]
    },
    {
      nombre: 'Voto Electrónico',
      color: '#A0AE91',
      aplicaciones: [
        {
          nombre: 'PERSEO',
          url: 'www.google.com',
          estilo: 'perseo'
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
