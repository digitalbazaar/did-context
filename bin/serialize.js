#!/usr/bin/env node
/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const context = require('../js/context');
const constants = require('../js/constants');

// Serialize the context as JSON-LD
fs.writeFileSync(
  path.join(__dirname, '..', 'contexts', constants.CONTEXT_FILENAME),
  JSON.stringify(context, null, 2) + '\n'
);
