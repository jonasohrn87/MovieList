'use strict';

/**
 * movie-night service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-night.movie-night');
