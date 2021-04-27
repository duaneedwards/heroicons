const fs = require('fs').promises
const camelcase = require('camelcase')
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))

let transform = {
  blazor: async (svg, componentName, format) => {
    return `@inherits HeroIcons.Blazor.HeroIconBase\r\n\r\n${svg}`.replace('="currentColor">', '="currentColor" @attributes="AllOtherAttributes">')
  },
}

async function getIcons(style) {
  let files = await fs.readdir(`./optimized/${style}`)
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./optimized/${style}/${file}`, 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}Icon`,
    }))
  )
}

async function buildIcons(package, style, format) {
  let outDir = `./${package}/${style}`

  await fs.mkdir(outDir, { recursive: true })

  let icons = await getIcons(style)

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transform[package](svg, componentName, format)

      return [
        fs.writeFile(`${outDir}/${componentName}.razor`, content, 'utf8'),
      ]
    })
  )
}

function main(package) {
  console.log(`Building ${package} package...`)

  Promise.all([rimraf(`./${package}/outline/*`), rimraf(`./${package}/solid/*`)])
    .then(() =>
      Promise.all([
        buildIcons(package, 'solid', 'razor'),
        buildIcons(package, 'outline', 'razor'),
      ])
    )
    .then(() => console.log(`Finished building ${package} package.`))
}

let [package] = process.argv.slice(2)

if (!package) {
  throw Error('Please specify a package')
}

main(package)
