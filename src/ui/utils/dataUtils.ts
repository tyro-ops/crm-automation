import fs from 'fs';
import path from 'path';

export function readJSON(filePath: string): any {
  const fullPath = path.resolve(__dirname, filePath);
  const data = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(data);
}

export function readTestData(fileName: string) {
  const filePath = path.resolve(__dirname, '../data', fileName);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}