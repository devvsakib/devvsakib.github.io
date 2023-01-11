window.onload = function () {
  Particles.init({
    selector: ".dfsdffeffc"
  });
};
const particles = Particles.init({
  selector: ".dfsdffeffc",
  color: ["#0aff02", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

const faceDet = document.getElementById('faceDet')

function startVid() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}
startVid()