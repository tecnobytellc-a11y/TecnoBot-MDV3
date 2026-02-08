import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import { en, es, id, ar, pt, de, it } from './lib/idiomas/total-idiomas.js'

// =================================================================
// 👑 CONFIGURACIÓN DE DUEÑOS (TECNOBYTE)
// =================================================================
global.owner = [
  ['56995018586', 'TecnoByte Dueño', true],  // 👑 Tu número personal
  ['573138289460', 'TecnoByte Bot', true]    // 🤖 El número del Bot
]

global.mods = [] 
global.prems = [] 

// Mantenemos el nombre de la variable para no romper el código, pero es interna.
global.gataJadibts = true 
global.isBaileysFail = true

// =================================================================
// 🤖 VINCULACIÓN AUTOMÁTICA
// =================================================================
global.botNumberCode = "+573138289460" 
global.confirmCode = "" 

global.lenguajeGB = es  // Idioma Español

// =================================================================
// 🔑 CLAVES DE API (NO BORRAR - NECESARIAS PARA DESCARGAS)
// NOTA: Algunas claves dicen 'GataDios' porque son las gratuitas. 
// Si las borras, dejará de funcionar Spotify/YouTube. Déjalas así, son invisibles al usuario.
// =================================================================
global.openai_key = 'sk-0'
global.openai_org_id = 'org-3'
global.baileys = '@whiskeysockets/baileys'

global.APIs = { 
  lolhuman: { url: 'https://api.lolhuman.xyz/api/', key: 'GataDiosV3' },
  skizo: { url: 'https://skizo.tech/api/', key: 'GataDios' },
  alyachan: { url: 'https://api.alyachan.dev/api/', key: null }, 
  exonity: { url: 'https://exonity.tech/api/', key: 'GataDios' },
  ryzendesu: { url: 'https://api.ryzendesu.vip/api/', key: null },
  neoxr: { url: 'https://api.neoxr.eu/api/', key: 'GataDios' },
  davidcyriltech: { url: 'https://api.davidcyriltech.my.id/', key: null },
  dorratz: { url: 'https://api.dorratz.com/', key: null },
  siputzx: { url: 'https://api.siputzx.my.id/api/', key: null },
  vreden: { url: 'https://api.vreden.web.id/api/', key: null },
  delirius: { url: 'https://delirius-apiofc.vercel.app/', key: null },
  fgmods: { url: 'https://api.fgmods.xyz/api/', key: 'elrebelde21' },
  popcat: { url: 'https://api.popcat.xyz', key: null }
}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

// =================================================================
// ⚖️ IDENTIDAD LEGAL Y CORPORATIVA (TECNOBYTE LLC)
// =================================================================

// 🏷️ ETIQUETA DE STICKERS
// Esto saldrá cuando alguien convierta una imagen en sticker con tu bot.
global.packname = 'Propiedad de:'
global.author = 'TecnoByte LLC\n® Todos los derechos reservados'

// 📄 MARCAS DE AGUA EN MENSAJES
// Esto sale al pie de los mensajes largos o listas.
global.wm = '© 2026 TecnoByte LLC' 
global.titulowm = '🤖 TECNO-BOT IA'
global.titulowm2 = 'TecnoByte LLC • Rights Reserved'
global.igfg = 'TecnoByte LLC' 

// 🤖 INFORMACIÓN DEL SISTEMA
global.botname = 'TECNO-BOT IA'
global.dev = 'Powered by TecnoByte LLC'
global.textbot = 'TECNO-BOT IA : Sistema Automatizado'

// 📜 TÉRMINOS Y POLÍTICAS
// Redirige a tu web oficial
global.policyGB = 'https://tecnobyte.vercel.app' 

// 👤 CONTACTO OFICIAL
global.official = [
  ['19047400467', 'Soporte Automatizado 🤖', 1]
] 

// 📧 DATOS DE EMPRESA
global.mail = 'soporte@tecnobytellc.zendesk.com' 
global.desc = 'TecnoByte LLC - Soluciones Digitales y Automatización.' 
global.desc2 = 'Este software es propiedad intelectual de TecnoByte LLC.' 
global.country = 'VE' 

// 🆚 VERSIONES (Para parecer software empresarial)
global.vs = '2.5.0-Enterprise'
global.vsJB = '4.0 (Stable Release)'
global.gt = '🤖 𝗧𝗘𝗖𝗡𝗢-𝗕𝗢𝗧 𝗜𝗔'

// ⏳ MENSAJES DE ESPERA (Profesionales)
global.waitt = '*⌛ TecnoByte LLC está procesando su solicitud...*'
global.waittt = '*⌛ Verificando base de datos...*'
global.waitttt = '*⌛ Accediendo a servidores de TecnoByte...*'

global.nomorown = '56995018586'

// Decoración de Mensajes (Iconos neutros)
global.htki = '*⭑•̩̩͙⊱•••• 🤖*'
global.htka = '*🤖 ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.correct = '✅'
global.fault = '💔'
global.alert = '⚠️'
global.sending = '📋'
global.sent = '❇️'
global.notsent = '❗'
global.waitemot = '⌛'
global.waitemot2 = '⏳'

// =================================================================
// 🔗 REDES SOCIALES (TODAS REDIRIGEN A TECNOBYTE)
// =================================================================
const tecnoUrl = 'https://tecnobyte.vercel.app'

global.tk = tecnoUrl
global.ths = tecnoUrl
global.yt = tecnoUrl
global.yt2 = tecnoUrl
global.ig = tecnoUrl
global.md = tecnoUrl // Repositorio
global.fb = tecnoUrl
global.paypal = tecnoUrl
global.asistencia = 'https://wa.me/19047400467' // Tu WhatsApp directo
global.tg = tecnoUrl

// Canales (Los puse vacíos o a tu web para que no salga publicidad ajena)
global.canal1 = tecnoUrl
global.canal2 = tecnoUrl
global.canal3 = tecnoUrl
global.canal4 = tecnoUrl
global.canal5 = tecnoUrl

// Grupos (Reemplazados por tu web para evitar spam de GataBot)
global.nna = tecnoUrl
global.nn2 = tecnoUrl
global.nna2 = tecnoUrl
global.nn = tecnoUrl
global.nnn = tecnoUrl
global.nnnt = tecnoUrl
global.nnntt = tecnoUrl
global.nnnttt = tecnoUrl
global.nnnttt1 = tecnoUrl
global.nnnttt2 = tecnoUrl
global.nnnttt3 = tecnoUrl
global.nnnttt4 = tecnoUrl
global.nnnttt5 = tecnoUrl

// =================================================================
// 🖼️ IMÁGENES
// IMPORTANTE: Asegúrate de tener una imagen llamada 'Menu2.jpg'
// en la carpeta media/menus/ o el bot podría fallar al cargar la imagen.
// He puesto todas las variables apuntando a la misma imagen local para evitar errores.
// =================================================================
global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen3 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen4 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen5 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen6 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen7 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen8 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen9 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen10 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen11 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen12 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen13 = fs.readFileSync('./media/menus/Menu3.jpg')

// Imágenes de URL (He puesto una genérica de tecnología para borrar las de anime)
// Puedes cambiar este link por el logo de TecnoByte subido a imgur.
const tecnoLogo = 'https://i.imgur.com/3zSvnGY.jpeg' // Cambia esto por TU logo

global.img = tecnoLogo
global.img2 = tecnoLogo
global.img3 = tecnoLogo
global.img5 = tecnoLogo
global.img6 = tecnoLogo
global.img7 = tecnoLogo
global.img8 = tecnoLogo
global.img9 = tecnoLogo
global.img10 = tecnoLogo
global.img11 = tecnoLogo
global.img12 = tecnoLogo
global.img13 = tecnoLogo
global.img14 = tecnoLogo
global.img15 = tecnoLogo
global.img17 = tecnoLogo
global.img18 = tecnoLogo
global.img19 = tecnoLogo
global.img20 = tecnoLogo
global.img21 = tecnoLogo

// Arrays de Menús (Mantener nombres de variables, cambiar contenido)
global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tg]
global.redesMenu = [nna, nn2, nn, nnn, nnnt, nnntt, nnnttt, md, ig, paypal, yt, asistencia, fb, tg]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]
global.accountsgb = [canal1, canal2, canal3, canal4, canal5, tk, ig, yt, paypal, fb, ths, md, asistencia, tg]

global.multiplier = 60 

// IDs de canales (Puedes dejarlos o borrarlos si no los usas, no afectan visualmente)
global.ch = {
ch1: '120363336642332098@newsletter',
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright('⚠️ Configuración de TECNO-BOT IA actualizada.'))
import(`${file}?update=${Date.now()}`)
})
