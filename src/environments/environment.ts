// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Local Host URL
  apiEndPoint: 'http://localhost:8090/',
  baseURL: 'http://localhost:8090',


  bellNotificationInterval: 2000 * 60,
  autoLogout: 7200000, // 2 hours
  autoLogoutimmediate: 43200000, // 12 hours
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
