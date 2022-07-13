import kebabCase from 'just-kebab-case'

import {
  cleanupIconKeyword,
  cleanupSVG,
  importDirectory,
  isEmptyColor,
  parseColors,
  runSVGO,
} from '@iconify/tools'
import { weights, writeFile } from './utils'

async function bootstrap() {
  const iconlyIconset = await importDirectory('./src/icons/iconly', {
    prefix: 'iconly',
    keyword: (file, defaultKeyword) => {
      const subdirParts = file.subdir.split('/')
      subdirParts.pop()

      const dir = cleanupIconKeyword(subdirParts.pop()!)

      // Add theme as prefix `baseline` + `-` + `10k`
      return `${kebabCase(dir)}-${kebabCase(defaultKeyword)}`
    },
  })

  weights.pop()

  weights.forEach((weight) => {
    iconlyIconset.rename(`${weight}-profile`, `${weight}-user`)
    iconlyIconset.rename(`${weight}-2user`, `${weight}-users`)
    iconlyIconset.rename(`${weight}-3user`, `${weight}-people`)
    iconlyIconset.rename(`${weight}-adduser`, `${weight}-user-plus`)
    iconlyIconset.rename(`${weight}-bag2`, `${weight}-bag-2`)
    iconlyIconset.rename(`${weight}-callmissed`, `${weight}-call-missed`)
    iconlyIconset.rename(`${weight}-callsilent`, `${weight}-call-silent`)
    iconlyIconset.rename(`${weight}-closesquare`, `${weight}-close-square`)
    iconlyIconset.rename(`${weight}-dangercircle`, `${weight}-danger-circle`)
    iconlyIconset.rename(`${weight}-dangersquare`, `${weight}-danger-square`)
    iconlyIconset.rename(`${weight}-dangertriangle`, `${weight}-danger-triangle`)
    iconlyIconset.rename(`${weight}-arrow-down2`, `${weight}-chevron-down`)
    iconlyIconset.rename(`${weight}-arrow-down3`, `${weight}-arrow-down-solid`)
    iconlyIconset.rename(`${weight}-arrow-downcircle`, `${weight}-chevron-down-circle`)
    iconlyIconset.rename(`${weight}-arrow-downsquare`, `${weight}-arrow-down-square`)
    iconlyIconset.rename(`${weight}-editsquare`, `${weight}-edit-square`)
    iconlyIconset.rename(`${weight}-infocircle`, `${weight}-info-circle`)
    iconlyIconset.rename(`${weight}-infosquare`, `${weight}-info-square`)
    iconlyIconset.rename(`${weight}-arrow-left2`, `${weight}-chevron-left`)
    iconlyIconset.rename(`${weight}-arrow-left3`, `${weight}-arrow-left-solid`)
    iconlyIconset.rename(`${weight}-arrow-leftcircle`, `${weight}-chevron-left-circle`)
    iconlyIconset.rename(`${weight}-arrow-leftsquare`, `${weight}-arrow-left-square`)
    iconlyIconset.rename(`${weight}-morecircle`, `${weight}-more-circle`)
    iconlyIconset.rename(`${weight}-moresquare`, `${weight}-more-square`)
    iconlyIconset.rename(`${weight}-paperdownload`, `${weight}-paper-download`)
    iconlyIconset.rename(`${weight}-paperfail`, `${weight}-paper-fail`)
    iconlyIconset.rename(`${weight}-papernegative`, `${weight}-paper-negative`)
    iconlyIconset.rename(`${weight}-paperplus`, `${weight}-paper-plus`)
    iconlyIconset.rename(`${weight}-paperupload`, `${weight}-paper-upload`)
    iconlyIconset.rename(`${weight}-arrow-right2`, `${weight}-chevron-right`)
    iconlyIconset.rename(`${weight}-arrow-right3`, `${weight}-arrow-right-solid`)
    iconlyIconset.rename(`${weight}-arrow-rightcircle`, `${weight}-arrow-right-circle`)
    iconlyIconset.rename(`${weight}-arrow-rightsquare`, `${weight}-arrow-right-square`)
    iconlyIconset.rename(`${weight}-shielddone`, `${weight}-shield-done`)
    iconlyIconset.rename(`${weight}-shieldfail`, `${weight}-shield-fail`)
    iconlyIconset.rename(`${weight}-ticketstar`, `${weight}-ticket-star`)
    iconlyIconset.rename(`${weight}-ticketsquare`, `${weight}-ticket-square`)
    iconlyIconset.rename(`${weight}-timecircle`, `${weight}-time-circle`)
    iconlyIconset.rename(`${weight}-timesquare`, `${weight}-time-square`)
    iconlyIconset.rename(`${weight}-volumedown`, `${weight}-volume-down`)
    iconlyIconset.rename(`${weight}-volumeoff`, `${weight}-volume-off`)
    iconlyIconset.rename(`${weight}-volumeup`, `${weight}-volume-up`)
    iconlyIconset.rename(`${weight}-arrow-up2`, `${weight}-chevron-up`)
    iconlyIconset.rename(`${weight}-arrow-up3`, `${weight}-arrow-up-solid`)
    iconlyIconset.rename(`${weight}-arrow-upcircle`, `${weight}-chevron-up-circle`)
    iconlyIconset.rename(`${weight}-arrow-upsquare`, `${weight}-arrow-up-square`)
    iconlyIconset.rename(`${weight}-ticksquare`, `${weight}-tick-square`)
  })

  await iconlyIconset.forEach(async (name, type) => {
    if (type !== 'icon')
      return false

    const svg = iconlyIconset.toSVG(name)
    if (!svg) {
      iconlyIconset.remove(name)
      return false
    }

    try {
      await cleanupSVG(svg)

      await runSVGO(svg, {
        plugins: [
          'removeXMLNS',
          'removeXMLProcInst',
          'cleanupIDs',
          'convertTransform',
          'collapseGroups',
          'removeUselessDefs',
          'removeUselessStrokeAndFill',
          'removeUnusedNS',
          'sortAttrs',
          'removeUnknownsAndDefaults',
        ],
      })

      await parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (attr, colorStr, color) => {
          return !color || isEmptyColor(color) ? colorStr : 'currentColor'
        },
      })
    }
    catch (err) {
      console.error(`Error parsing ${name}:`, err)
      iconlyIconset.remove(name)
      return false
    }

    iconlyIconset.fromSVG(name, svg)
  })

  await iconlyIconset.forEach(async (name) => {
    let subdirName
    let fileName
    if (name.startsWith('two-tone')) {
      subdirName = 'two-tone'
      fileName = name.slice(9)
    }

    else if (name.startsWith('bold')) {
      subdirName = 'bold'
      fileName = name.slice(5)
    }

    else if (name.startsWith('broken')) {
      subdirName = 'broken'
      fileName = name.slice(7)
    }

    else if (name.startsWith('bulk')) {
      subdirName = 'bulk'
      fileName = name.slice(5)
    }

    else if (name.startsWith('curved')) {
      subdirName = 'curved'
      fileName = name.slice(7)
    }

    else if (name.startsWith('light-outline')) {
      subdirName = 'light-outline'
      fileName = name.slice(14)
    }

    else if (name.startsWith('light')) {
      subdirName = 'light'
      fileName = name.slice(5)
    }

    const svg = iconlyIconset.toString(name)
    if (!svg)
      return false

    // Save to file
    await writeFile(`./src/icons/iconly-refactor/${subdirName}/${fileName}.svg`, svg)
  })
}

bootstrap()
