const rangeNode = require('./nodes')
const cytoscape = require('cytoscape')

let activeNode = null

const cy = cytoscape({
  minZoom: 0.02,
  maxZoom: 1,
  wheelSensitivity: 0.2,
  container: document.getElementById('cy'),
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(name)'
      }
    },
  ]
})

cy.on('free', 'node', function(evt) {
  if (activeNode) activeNode.grabify()
})

cy.on('tapstart', 'node', function(evt){
  const node = evt.target
  if (node.id().indexOf('>') >= 0) {
    activeNode = this
    this.ungrabify()
  }
})

cy.on('tapend', 'node', function(evt){
  const node = evt.target
  if (node.id().indexOf('>') >= 0 && activeNode) {
    cy.add({
      group: 'edges',
      data: { id: `conn-${Math.random()}`, source: activeNode.id(), target: node.id() }
    })
  }
})

cy.on('taphold', function(event) {
  if (!event.target[0]) {
    cy.add(rangeNode(event.position))
  }
})

document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case ' ':
      cy.fit()
      break
    case 's':
      console.log(cy.json())
      break
  }
})

cy.add(rangeNode())
cy.add(rangeNode({x: 100, y: 300}))
