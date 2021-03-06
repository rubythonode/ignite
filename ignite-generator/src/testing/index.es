#! /usr/bin/env node
'use strict'

import Generators from 'yeoman-generator'
import * as Utilities from '../utilities'
import Shell from 'shelljs'

class TestGenerator extends Generators.Base {

  constructor (args, options) {
    super(args, options)
    this.argument('name', { type: String, required: true })

    this.option('latest', {
      desc: 'Use cutting edge React Native Master',
      type: Boolean,
      defaults: false
    })
  }

  initializing () {
  }

  generateApp () {
    this.spawnCommand('ls', ['.'])
      .on('close', (x) => {
        console.log('X', x)
      })



    // this.log('here are your options for latest')
    // this.log(this.options.latest)
    // Utilities.replaceInFile(`MyTest/package.json`, '"react-native":', '"react-native": "github:facebook/react-native"')
  }

  install () {
  }

  end () {
    console.log('Time to get cooking! 🍽 ')
  }
}

module.exports = TestGenerator
