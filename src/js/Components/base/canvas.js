
import React, {Component} from 'react';
import '../../css/Canvas'


export default class Canvas extends Component {

    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      var w = window.innerWidth,
      h = window.innerHeight, 
      rate = 60,
       arc = 100,
        time,
        count,
        size = 7,
        speed = 20,
        lights = new Array,
        colors = ['#d59254','#ffffff','#1f2839','#cf7693'];

          init();
bubble(); 
    };

  init() {
      time = 0;
      count = 0;
      
      for(var i = 0; i < arc; i++) {
        lights[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 + 1,
          toY: Math.random() * 5 + 1,
          c: colors[Math.floor(Math.random()*colors.length)],
          size: Math.random() * size
        }
      }
      };
       bubble() {
        ctx.clearRect(0,0,w,h);
        
        for(var i = 0; i < arc; i++) {
          var li = lights[i];
          
          ctx.beginPath();
          ctx.arc(li.x,li.y,li.size,0,Math.PI*2,false);
          ctx.fillStyle = li.c;
          ctx.fill();
          
          li.x = li.x + li.toX * (time * 0.05);
          li.y = li.y + li.toY * (time * 0.05);
          
          if(li.x > w) { li.x = 0; }
          if(li.y > h) { li.y = 0; }
          if(li.x < 0) { li.x = w; }
          if(li.y < 0) { li.y = h; }
        }
        if(time < speed) {
          time++;
        }
        timerID = setTimeout(bubble,1000/rate);
        };
  
    render() {
      return(
        <div>
          <canvas id="bubble" width={window.innerWidth}  height={window.innerHeight} />
          </div>
      )
    }
  }
