var svgPanZoom = require('svg-pan-zoom')

window.onload = function() {
  svgPanZoom('#demo-tiger', {
    zoomEnabled: true,
    zoomScaleSensitivity: 0.5,
    zoomControlsEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true
  })
}
