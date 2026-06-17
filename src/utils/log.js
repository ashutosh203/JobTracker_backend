// /** @format */

// import colors from 'colors';

// // const originalLog = console.log;

// console.log = (...args) => {
//     const stack = new Error().stack;
//     const caller = stack.split('\n')[2];

//     const match = caller.match(/\((.*):(\d+):(\d+)\)/);

//     if (match) {
//         const fullPath = decodeURIComponent(match[1]);

//         const projectName = 'Job_portal_Backend';
//         const startIndex = fullPath.indexOf(projectName);

//         const shortPath =
//             startIndex !== -1 ? fullPath.substring(startIndex) : fullPath;

//         originalLog(colors.cyan(`Path: ${shortPath}`));
//         originalLog(
//             colors.green(` Line ${match[2]}:`),
//             colors.yellow(...args),
//         );
//     }
// };
