'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('cursos', {
      type: 'foreign key',
      fields: ['areaId'],
      name: 'curso_area_fk',
      references: {
        table: 'areas',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('cursos', 'curso_area_fk')
  }
};
