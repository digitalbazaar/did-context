'use strict';

const context = require('./context');
const constants = require('./constants');
const {CONTEXT_URL, DID_CONTEXT_URL} = constants;

const contexts = new Map();
contexts.set(CONTEXT_URL, context);

module.exports = {
  constants,
  contexts,
  DID_CONTEXT_URL,
  CONTEXT_URL,
  CONTEXT_URL_V1: CONTEXT_URL,
  CONTEXT: context
};
