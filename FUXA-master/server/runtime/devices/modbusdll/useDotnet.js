// //import { useEffect, useRef, useState } from 'react';
// const React = require('react');

// export const useDotNet = (url) => {
//   const dotnetUrl = React.useRef('');
//   const [dotnet, setDotNet] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);

//   const load = async (currentUrl) => {
//     const module = await import(/* @vite-ignore */ currentUrl);

//     const { getAssemblyExports, getConfig } = await module
//       .dotnet
//       .withDiagnosticTracing(false)
//       .create();

//     const config = getConfig();
//     const exports = await getAssemblyExports(config.mainAssemblyName);
//     return exports;
//   }

//   useEffect(() => {
//     if (dotnetUrl.current !== url) { // safeguard to prevent double-loading
//       setLoading(true);
//       dotnetUrl.current = url;
//       load(url)
//         .then(exports => setDotNet(exports))
//         .finally(() => setLoading(false))
//     }
//   }, [url]);

//   useEffect(() => {
//     if (dotnet) {
//       // Expose the init function here
//       dotnet.init = async (ip, port, timeout) => {
//         try {
//           return await dotnet.FileProcessor.Init(ip, port, timeout);
//         } catch (error) {
//           console.error("Error in init function:", error);
//           throw error;
//         }
//       };
//     }
//   }, [dotnet]);

//   return { dotnet, loading };
// }


// module.exports = useDotNet;



// const React = require('react');


// function useDotNet(url) {
//   const dotnetUrl = React.useRef('');
//   const [dotnet, setDotNet] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);

//   const load = async (currentUrl) => {
//     const module = await import(/* @vite-ignore */ currentUrl);

//     const { getAssemblyExports, getConfig } = await module
//       .dotnet
//       .withDiagnosticTracing(false)
//       .create();

//     const config = getConfig();
//     const exports = await getAssemblyExports(config.mainAssemblyName);
//     return exports;
//   }

//   React.useEffect(() => {
//     if (dotnetUrl.current !== url) { // safeguard to prevent double-loading
//       setLoading(true);
//       dotnetUrl.current = url;
//       load(url)
//         .then(exports => setDotNet(exports))
//         .finally(() => setLoading(false))
//     }
//   }, [url]);

//   React.useEffect(() => {
//     if (dotnet) {
//       // Expose the init function here
//       dotnet.init = async (ip, port, timeout) => {
//         try {
//           return await dotnet.FileProcessor.Init(ip, port, timeout);
//         } catch (error) {
//           console.error("Error in init function:", error);
//           throw error;
//         }
//       };
//     }
//   }, [dotnet]);

//   return { dotnet, loading };
// }

// module.exports = useDotNet;


// import { useEffect, useRef, useState } from 'react';

// export const useDotNet = (url) => {

//   debugger;
//   const dotnetUrl = useRef('');
//   const [dotnet, setDotNet] = useState<any>(null);
//   const [loading,   setLoading] = useState(true);

//   const load = async (currentUrl): Promise<any> => {

//     const module = await import(/* @vite-ignore */ currentUrl);
// debugger;
//     const { getAssemblyExports, getConfig } = await module
//       .dotnet
//       .withDiagnosticTracing(false)
//       .create();

//     const config = getConfig();
//     const exports = await getAssemblyExports(config.mainAssemblyName);
//     return exports;
//   }

//   useEffect(() => {
//     if (dotnetUrl.current !== url) { // safeguard to prevent double-loading
//       setLoading(true);
//       dotnetUrl.current = url;
//       load(url)
//         .then(exports => setDotNet(exports))
//         .finally(() => setLoading(false))
//     }
//   }, [url]);
//   return { dotnet, loading };
// }