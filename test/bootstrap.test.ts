"use strict";

import * as chai from "chai";
import * as OrientDB from "orientjs";
import * as uuid from "uuid";

chai.use(require("chai-as-promised"))
  .should();

const server = OrientDB({
  host: process.ENV['TRAVIS'] ? '127.0.0.1' : '192.168.99.100',
  port: 2424,
  username: 'root',
  password: 'root'
});

const dbSettings = {
  name: 'testDb',
  type: 'graph',
  storage: 'plocal'
};

before(() =>
  server.create(dbSettings)
    .catch(error => server.use(dbSettings.name))
    .tap(db => {
      global['db'] = db
    })
    .then(db => new OrientDB.Migration.Manager({
        db: db,
        dir: __dirname + '/../migrations'
      })
    )
    .then(manager => manager.up(1))
);

after(() =>
  server.drop(dbSettings)
    .then(() => server.close())
);