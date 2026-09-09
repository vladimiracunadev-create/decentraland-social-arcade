import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const required = [
  'scene.json',
  'package.json',
  'src/index.ts',
  'design/gdd.md',
  'README.md',
  'LICENSE',
  '.dclignore'
]

const missing = required.filter((file) => !existsSync(resolve(root, file)))
if (missing.length > 0) {
  console.error(`Faltan archivos obligatorios: ${missing.join(', ')}`)
  process.exit(1)
}

const scene = JSON.parse(readFileSync(resolve(root, 'scene.json'), 'utf8'))
const problems = []
if (scene.ecs7 !== true) problems.push('scene.json debe declarar ecs7: true')
if (scene.runtimeVersion !== '7') problems.push('runtimeVersion debe ser 7')
if (!Array.isArray(scene.scene?.parcels) || scene.scene.parcels.length === 0) {
  problems.push('Debe existir al menos una parcela')
}
if (!Array.isArray(scene.spawnPoints) || scene.spawnPoints.length === 0) {
  problems.push('Debe existir al menos un punto de aparición')
}

if (problems.length > 0) {
  console.error(problems.join('\n'))
  process.exit(1)
}

console.log('Estructura del repositorio y scene.json: OK')
