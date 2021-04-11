
// textures


const svg = d3
  .select('#example')
  .append("svg");

const texture = textures
  .lines()
  .thicker();

svg.call(texture);

svg
  .append('circle')
  .style('fill', texture.url())
  .attr("cx", 75)
  .attr("cy", 75)
  .attr("r", 60); 