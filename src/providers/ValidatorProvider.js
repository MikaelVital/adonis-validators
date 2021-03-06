/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
const { ServiceProvider } = require('@adonisjs/fold');

class ValidatorProvider extends ServiceProvider {
  register() {
    // Making sure those dependencies are booted
    const iocDependencies = ['Validator', 'Database'];

    iocDependencies.forEach(dep => this.app.use(dep));
  }

  boot() {
    const Validator = use('Validator');
    const Database = use('Database');

    const cpf = require('../validators/cpf');
    const isBetween = require('../validators/isBetween');
    const only = require('../validators/only');
    const duration = require('../validators/duration');
    const cnpj = require('../validators/cnpj');
    const greaterEqualsThan = require('../validators/greaterEqualsThan');
    const greaterThan = require('../validators/greaterThan');
    const lessEqualsThan = require('../validators/lessEqualsThan');
    const lessThan = require('../validators/lessThan');

    // Dependency injection
    const uniqueWhere = require('../validators/uniqueWhere')(Database);
    const exists = require('../validators/exists')(Database);

    Validator.extend('cpf', cpf.bind(cpf));
    Validator.extend('isBetween', isBetween.bind(isBetween));
    Validator.extend('uniqueWhere', uniqueWhere.bind(uniqueWhere));
    Validator.extend('exists', exists.bind(exists));
    Validator.extend('only', only.bind(only));
    Validator.extend('duration', duration.bind(duration));
    Validator.extend('cnpj', cnpj.bind(cnpj));
    Validator.extend('greaterEqualsThan', greaterEqualsThan.bind(greaterEqualsThan));
    Validator.extend('greaterThan', greaterThan.bind(greaterThan));
    Validator.extend('lessEqualsThan', lessEqualsThan.bind(lessEqualsThan));
    Validator.extend('lessThan', lessThan.bind(lessThan));
  }
}

module.exports = ValidatorProvider;
