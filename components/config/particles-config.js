const particlesConfig = {
  fpsLimit: 60,
  backgroundMode: {
    enable: true,
    zIndex: -2
  },
  particles: {
    number: {
      value: 70,
      density: {
        enable: false,
        area: 1000
      }
    },
    color: {
      value: "#A82428"
    },
    shape: {
      type: "circle",
      options: {
        polygon: {
          sides: 5
        },
        image: {
          
          width: 100,
          height: 100
        }
      }
    },
    stroke: {
      width: 0
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      minimumvalue: 1,
      random: true,
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 1,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 130,
      color: "random",
      blink: false,
      consent: false,
      opacity: 0.5,
      width: 2,
      triangles: {
        enable: true,
        opacity: 0.05
      }
    },
    move: {
      warp: false,
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      outMode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: ""
      },
      onHover: {
        enable: true,
        mode: "",
        parallax: {
          enable: true,
          force: 10,
          smooth: 15
        }
      },
      
    },
    modes: {
      grab: {
        distance: 50,
        links: {
          opacity: 1
        }
      },
      connect: {
        radius: 20
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 50
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },
  detectRetina: true,
  background: {
    color: "#0e151a",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
};


export default particlesConfig;

