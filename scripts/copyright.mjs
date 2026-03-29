/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const TS_FOLDER_NAME = 'app';
const PY_FOLDER_NAME = 'backend';

const COPYRIGHT_TS = `/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */\n`;

const COPYRIGHT_PY = `# Copyright 2026 Eduardo Turcios. All rights reserved.
# Unauthorized use, reproduction, or distribution of this file is strictly prohibited.\n`;

function walk(dir, excludeDirs = []) {
  if (!existsSync(dir)) return [];
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (excludeDirs.includes(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full, excludeDirs));
    } else {
      files.push(full);
    }
  }
  return files;
}

const tsFiles = walk(TS_FOLDER_NAME)
  .filter((f) => /\.(ts|tsx)$/.test(f))
  .filter((f) => !basename(f).includes('config'));

const pyFiles = walk(PY_FOLDER_NAME, ['__pycache__', 'versions']).filter((f) => f.endsWith('.py'));

let added = 0;
let skipped = 0;

for (const file of tsFiles) {
  const content = readFileSync(file, 'utf-8');
  if (content.includes('@copyright')) {
    skipped++;
    console.log(`Skipped (already has copyright): ${file}`);
  } else {
    writeFileSync(file, COPYRIGHT_TS + content);
    added++;
    console.log(`Added copyright: ${file}`);
  }
}

for (const file of pyFiles) {
  const content = readFileSync(file, 'utf-8');
  if (content.includes('Copyright 2026 Eduardo Turcios')) {
    skipped++;
    console.log(`Skipped (already has copyright): ${file}`);
  } else {
    writeFileSync(file, COPYRIGHT_PY + content);
    added++;
    console.log(`Added copyright: ${file}`);
  }
}

console.log(`\nDone. Added: ${added}, Skipped: ${skipped}`);
