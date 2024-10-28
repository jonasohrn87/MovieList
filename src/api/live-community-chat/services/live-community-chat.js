'use strict';

/**
 * live-community-chat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-community-chat.live-community-chat');
