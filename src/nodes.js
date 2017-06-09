const NODE_WIDTH = 150
const VERTICAL_SPACING = 70

const rangeNode = (position = { x: 0, y: 0 }) => {
  const id = `Range-${Math.random()}`
  const {x, y} = position

  return ([
    {
      group: 'nodes',
      data: {
        id: id,
        name: `Range (${id})`
      }
    },
    {data: { name: 'START', id: `START>${id}`, parent: id }, position: { x: x-NODE_WIDTH, y: y }},
    {data: { name: 'END', id: `END>${id}`, parent: id }, position: { x: x-NODE_WIDTH, y: y+VERTICAL_SPACING }},
    {data: { name: 'STEP', id: `STEP>${id}`, parent: id }, position: { x: x-NODE_WIDTH, y: y+VERTICAL_SPACING*2 }},

    {data: { name: 'SEQ', id: `${id}>SEQ`, parent: id }, position: { x: x+NODE_WIDTH, y: y+VERTICAL_SPACING }},
  ])
}

module.exports = rangeNode
