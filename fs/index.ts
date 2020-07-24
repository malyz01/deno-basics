// deno run --allow-read index.ts sample.txt
// args are after the index.ts

// ==== get the path ====
// const path = Deno.args[0]
// console.log(path)

// const content = await Deno.readTextFile(path)
// console.log(content)

// ==== directory ====
// const dir = Deno.args[0]
// console.log(dir)

// const path = `${Deno.cwd()}/${dir}`

// for await (const directory of Deno.readDir(path)) {
//   console.log(directory.name)
// }

// ==== function to check if file exists ====
// deno run --allow-read index.ts
// async function exists(path: string) {
//   try {
//     const state = await Deno.lstat(path)
//     return true
//   } catch (e) {
//     if (e instanceof Deno.errors.NotFound) {
//       return false
//     } else {
//       throw e
//     }
//   }
// }

// let isFileExists = await exists('test.txt')
// console.log(isFileExists)

// isFileExists = await exists('sample.txt')
// console.log(isFileExists)

// ==== Create Directory ==== (deno run --allow-write index.ts)
// await Deno.mkdir('tesing')

// rename folder - deno run --allow-write --allow-read index.ts
// await Deno.rename('tesing', '_test')

// remove folder - deno run --allow-write --allow-read index.ts
// await Deno.remove('_test')
