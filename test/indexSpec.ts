/* global featureFile, scenarios, steps */
"use strict";

declare const featureFile:any;
declare const scenarios:any;
declare const steps:any;

let Yadda = require("yadda");
Yadda.plugins.mocha.StepLevelPlugin.init();

new Yadda.FeatureFileSearch("test/features").each(function (file:any) {
  featureFile(file, function (feature:any) {

    const library = require("./features/step_definitions/my_steps");
    let yadda = Yadda.createInstance(library);

    scenarios(feature.scenarios, (scenario:any) =>
      steps(scenario.steps, (step:any, done:any) =>
        yadda.run(step, done)
      )
    );
  });
});
