// const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;


// // To run this code you need to install the following 
// // dependencies:
// // // npm install @google/genai mime
// // // npm install -D @types/node

// // import {
// //   GoogleGenAI,
// // } from '@google/genai';

// // async function main(prompt) {
// //   const ai = new GoogleGenAI({
// //     apiKey: "AIzaSyAnYLLJsjjCjKTcsOGQQADtFNspfQGPps4",
// //   });
// //   const tools = [
// //     {
// //       googleSearch: {
// //       }
// //     },
// //   ];
// //   const config = {
// //     thinkingConfig: {
// //       thinkingBudget: -1,
// //     },
// //     tools,
// //   };
// //   const model = 'gemini-2.5-pro';
// //   const contents = [
// //     {
// //       role: 'user',
// //       parts: [
// //         {
// //           text: (prompt),
// //         },
// //       ],
// //     },
// //   ];

// //   const response = await ai.models.generateContentStream({
// //     model,
// //     config,
// //     contents,
// //   });
// //   let fileIndex = 0;
// //   for await (const chunk of response) {
// //     console.log(chunk.text);
// //   }
// // }

// // export default main;
// import { GoogleGenAI } from '@google/genai';

// const ai = new GoogleGenAI({}); // Assumes GEMINI_API_KEY is set

// async function run(prompt) {
//   const response = await ai.models.generateContent({
//     model: 'gemini-2.5-flash',
//     contents: 'why is the sky blue?',
//   });

//   console.log(response.text); // output is often markdown
// }

// run();