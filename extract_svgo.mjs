import fs from 'fs';

const indexPath = 'src/pages/index.astro';
let indexStr = fs.readFileSync(indexPath, 'utf8');

// 1. Extract CSS
const styleStart = indexStr.indexOf('<style>');
const styleEnd = indexStr.indexOf('</style>');

if (styleStart > -1 && styleEnd > -1) {
    const css = indexStr.substring(styleStart + 7, styleEnd);
    if (!fs.existsSync('src/styles')) fs.mkdirSync('src/styles', { recursive: true });
    fs.writeFileSync('src/styles/home.css', css.trim());

    // Replace <style> block with import
    indexStr = indexStr.substring(0, styleStart) + indexStr.substring(styleEnd + 8);

    // Inject import into frontmatter
    const fmEnd = indexStr.indexOf('---', 3);
    indexStr = indexStr.substring(0, fmEnd) + "import '../styles/home.css';\n" + indexStr.substring(fmEnd);
}

// 2. Extract Folder Data SVG
const folderDataRegex = /<svg class="folder-svg".*?fill="#4ADE80"\/>\s*<path d="M3 18C3 15.24 5.24 13 8 13H28L36 21H3V18Z" fill="#22C55E"\/>\s*<!-- bar chart -->.*?<\/svg>/s;
const folderDataMatch = indexStr.match(folderDataRegex);
if (folderDataMatch) {
    if (!fs.existsSync('src/components/icons')) fs.mkdirSync('src/components/icons', { recursive: true });
    fs.writeFileSync('src/components/icons/FolderData.astro', folderDataMatch[0].replace('class="folder-svg"', 'class={Astro.props.class}'));
    indexStr = indexStr.replace(folderDataMatch[0], '<FolderData class="folder-svg" />');
}

// 3. Extract Folder Web SVG
const folderWebRegex = /<svg class="folder-svg".*?fill="#60A5FA"\/>\s*<path d="M3 18C3 15.24 5.24 13 8 13H28L36 21H3V18Z" fill="#3B82F6"\/>\s*<!-- globe -->.*?<\/svg>/s;
const folderWebMatch = indexStr.match(folderWebRegex);
if (folderWebMatch) {
    fs.writeFileSync('src/components/icons/FolderWeb.astro', folderWebMatch[0].replace('class="folder-svg"', 'class={Astro.props.class}'));
    indexStr = indexStr.replace(folderWebMatch[0], '<FolderWeb class="folder-svg" />');
}

// Inject components imports
const fmEndNew = indexStr.indexOf('---', 3);
indexStr = indexStr.substring(0, fmEndNew) +
    "import FolderData from '../components/icons/FolderData.astro';\n" +
    "import FolderWeb from '../components/icons/FolderWeb.astro';\n" +
    indexStr.substring(fmEndNew);

fs.writeFileSync(indexPath, indexStr);
console.log('Extraction complete.');
