# Graph BPMN
A BPMN 2.0 engine leveraging graph database technology

[![Paypal](https://img.shields.io/badge/Paypal-Donate-ff69b4.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=chris%40cns%2eme%2euk&lc=GB&item_name=Chris%20Nesbitt%2dSmith&item_number=github%2ecom%2fchrisns%2fgraph%2dbpmn&no_note=0&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest) [![Build Status](https://travis-ci.org/chrisns/graph-bpmn.svg?branch=master)](https://travis-ci.org/chrisns/graph-bpmn) [![Gitter](https://badges.gitter.im/chrisns/graph-bpmn.svg)](https://gitter.im/chrisns/graph-bpmn?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)


**This project is very much a work in progress, and I wouldn't recommend using it in production (YET).**

## What is BPMN?
Short story: https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
Long story: http://www.omg.org/spec/BPMN/2.0/PDF

## Yet another BPMN engine?
There's a bunch of tools you can use as a BPMN executor written in every mainstream language (though mostly java)
The thing that is different about this one is the persistence method, they all appear to use a traditional RDBMS such as mysql, postgres, etc. In some cases you might find one using a noSQL such as MongoDB.
That database technology will always be an unavoidable bottle neck, both in the execution but also the analysis of the process.

## So what does this one do thats so special?
The point of this project is to leverage the performance gain that can be achieved with a graph based database.
The very nature of a graph database lends itself well to handling a workflow super efficiently.
Which is the reason to why I couldn't 'just' write an adapter for activiti, camunda or one of the common very mature engines.

## Compatible databases
I hate tightly coupling, and I have a healthy deep fear of commitment when it comes to software and technology.
That said I feel sometimes you have to acknowledge that its the only viable way especially in this situation where theres only one technology thats viable to couple with.
So for now, the only viable database to couple with is [orientdb] (http://orientdb.com/)

My goal with this project is to be able to do as much processing as possible in the database layer itself which will allow scaling in line with the great scalability story that orientdb already has.

My current definition of success will be when the workflow engine can handle over 100,000 requests a second on a large scale with some interesting self analytics within the process, which could offer some interesting realtime stats, e.g. "based on executions like this, how many steps left, how long a given task take to complete". Or perhaps even more interestingly break the strict process model if you could make a strong enough guess to what the conclusion will be.

## Goals / Roadmap / Todo:

- [x] Write todo list
- [x] Decide on a licence
- [x] Decide on a way to receive donations
- [x] Add a CONTRIBUTING file
- [x] Initial setup of NPM, travis, gitter, etc
- [ ] Skeleton of testing framework etc
- [ ] Move this todo list into gherkin `given/when/then` tests
- [ ] Define Vertex classes for `start`, `task` and `end` steps
- [ ] Persist a simple workflow
- [ ] Execute a persisted simple flow
- [ ] Define Vertex class for `Exclusive Gateways`
- [ ] Execute a flow with an exclusive gateway
- [ ] Render a `.dot` representation of the graph
- [ ] Parse a bpmn file in
- [ ] Persist executions
- [ ] Some sort of story for updates to the execution and migrating existing executions
- [ ] Pause/Resume executions
- [ ] Publish on npm
- [ ] 1.0.0
- [ ] RESTful API
- [ ] Setup docker image
- [ ] Publish docker image
- [ ] Setup docker compose


### BPMN 2.0 Feature support:

- [ ] Start
- [ ] End
- [ ] Flows
  - [ ] Sequence Flow
  - [ ] Default Flow
  - [ ] Conditional Flow
- [ ] Subprocesses
  - [ ] Subprocess
  - [ ] Call Activity
  - [ ] Event Subprocess
  - [ ] Transaction
- [ ] Tasks
  - [ ] Service Task
  - [ ] User Task
  - [ ] Script Task
  - [ ] Business Rule Task
  - [ ] Manual Task
  - [ ] Receive Task
  - [ ] Undefined Task
  - [ ] Send Task
  - [ ] Receive Task (instantiated)
  - [ ] Undefined Task
- [ ] Gateways
  - [ ] Exclusive Gateway
  - [ ] Inclusive Gateway
  - [ ] Parallel Gateway
  - [ ] Event Gateway
  - [ ] Complex Gateway
- [ ] Choreographies
- [ ] Pools
- [ ] Participants / Swim lanes

## Contributions
It'd be great if anyone else has time/energy/interest in this issues, pull requests, and conversations and donations are all very welcome.

## Donations
Should you be generous enough to support this project financially then your money will be spent exclusively on sustaining development time on the project.