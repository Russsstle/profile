import React, { Component } from 'react'
import Particles from 'react-tsparticles';

class particleComponent extends Component{


    render() {
        return (
          <div>
            <Particles
                id="tsparticles"
                options={{
                  background: {
                    color: {
                      value: "#111",
                    },
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                          enable:false,
                          force:2,
                          smooth:10
                        }
                      },
                      onclick: {
                        enable: true,
                        mode: "push",
                       
                      },
                      resize: true
                    },
                     
                  },
                  particles: {
                    polygon: {
                      nb_sides: 5
                    },
                    color: {
                      value: "#ffffff",
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      enable: true,
                      speed: 0.2,
                      direction: "none",
                      random: true,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 789.1476416322727,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.48927153781200905,
                      random: false,
                      anim: {
                        enable: true,
                        speed: 0.2,
                        opacity_min: 0,
                        sync: false
                      }
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                      anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0,
                        sync: false
                      }
                    },
                  },
                  detectRetina: true,
                  height: 1000
                }}
              />
              </div>
             
            
        );
    };

}

export default particleComponent