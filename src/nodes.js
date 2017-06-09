const NODE_WIDTH = 200

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
    {data: { name: 'END', id: `END>${id}`, parent: id }, position: { x: x-NODE_WIDTH, y: y+100 }},
    {data: { name: 'STEP', id: `STEP>${id}`, parent: id }, position: { x: x-NODE_WIDTH, y: y+200 }},
    {data: { name: 'SEQ', id: `${id}>SEQ`, parent: id }, position: { x: x+NODE_WIDTH, y: y+100 }},
  ])
}

module.exports = rangeNode
