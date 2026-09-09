import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const ignored = new Set(['.git', 'node_modules', 'bin', 'coverage'])

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (ignored.has(entry.name)) return []
    const absolute = resolve(directory, entry.name)
    if (entry.isDirectory()) return markdownFiles(absolute)
    return entry.name.endsWith('.md') ? [relative(root, absolute)] : []
  })
}

const files = markdownFiles(root)
const broken = []
const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g

for (const relativeFile of files) {
  const body = readFileSync(resolve(root, relativeFile), 'utf8')
  for (const match of body.matchAll(linkPattern)) {
    const destination = match[1].trim().replace(/^<|>$/g, '')
    if (/^(https?:|mailto:|#)/i.test(destination)) continue
    const decoded = decodeURIComponent(destination.split('#')[0])
    if (!decoded) continue
    const target = resolve(dirname(resolve(root, relativeFile)), decoded)
    if (!existsSync(target)) broken.push(`${relativeFile} → ${destination}`)
  }
}

if (broken.length > 0) {
  console.error(`Enlaces internos rotos:\n${broken.join('\n')}`)
  process.exit(1)
}

console.log(`${files.length} documentos Markdown: enlaces internos OK`)
