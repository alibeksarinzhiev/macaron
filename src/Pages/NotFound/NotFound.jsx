import React, { useRef, useEffect, useState } from 'react';
import './NotFound.scss'

const NotFound = () => {

    const canvasRef = useRef(null);
  const [spiders, setSpiders] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { sin, cos, PI, hypot, min, max } = Math;
    
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const rnd = (x = 1, dx = 0) => Math.random() * x + dx;

    const many = (n, f) => Array.from({ length: n }, (_, i) => f(i));

    const pt = (x, y) => ({ x, y });

    const drawCircle = (x, y, r) => {
      ctx.beginPath();
      ctx.ellipse(x, y, r, r, 0, 0, PI * 2);
      ctx.fill();
    };

    const drawLine = (x0, y0, x1, y1) => {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      many(100, (i) => {
        i = (i + 1) / 100;
        const x = lerp(x0, x1, i);
        const y = lerp(y0, y1, i);
        const k = noise(x / 5 + x0, y / 5 + y0) * 2;
        ctx.lineTo(x + k, y + k);
      });
      ctx.stroke();
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const noise = (x, y, t = 101) => {
      const w0 = sin(0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0));
      const w1 = sin(0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5));
      return w0 + w1;
    };

    const spawn = () => {
      const pts = many(333, () => ({
        x: rnd(w),
        y: rnd(h),
        len: 0,
        r: 0,
      }));

      const pts2 = many(9, (i) => ({
        x: cos((i / 9) * PI * 2),
        y: sin((i / 9) * PI * 2),
      }));

      let seed = rnd(100);
      let tx = rnd(w);
      let ty = rnd(h);
      let x = rnd(w);
      let y = rnd(h);
      let kx = rnd(0.8, 0.8);
      let ky = rnd(0.8, 0.8);
      const walkRadius = pt(rnd(50, 50), rnd(50, 50));
      const r = w / rnd(100, 150);

      const paintPt = (pt) => {
        pts2.forEach((pt2) => {
          if (!pt.len) return;
          drawLine(
            lerp(x + pt2.x * r, pt.x, pt.len * pt.len),
            lerp(y + pt2.y * r, pt.y, pt.len * pt.len),
            x + pt2.x * r,
            y + pt2.y * r
          );
        });
        drawCircle(pt.x, pt.y, pt.r);
      };

      return {
        follow(newX, newY) {
          tx = newX;
          ty = newY;
        },
        tick(t) {
          const selfMoveX = cos(t * kx + seed) * walkRadius.x;
          const selfMoveY = sin(t * ky + seed) * walkRadius.y;
          const fx = tx + selfMoveX;
          const fy = ty + selfMoveY;

          x += min(w / 100, (fx - x) / 10);
          y += min(w / 100, (fy - y) / 10);

          let i = 0;
          pts.forEach((pt) => {
            const dx = pt.x - x;
            const dy = pt.y - y;
            const len = hypot(dx, dy);
            let r = min(2, w / len / 5);
            pt.t = 0;
            const increasing = len < w / 10 && i++ < 8;
            const dir = increasing ? 0.1 : -0.1;
            if (increasing) r *= 1.5;
            pt.r = r;
            pt.len = max(0, min(pt.len + dir, 1));
            paintPt(pt);
          });
        },
      };
    };

    const newSpiders = many(2, spawn);
    setSpiders(newSpiders);

    const onPointerMove = (e) => {
      newSpiders.forEach((spider) => spider.follow(e.clientX, e.clientY));
    };

    const anim = (t) => {
      if (w !== window.innerWidth) {
        w = canvas.width = window.innerWidth;
      }
      if (h !== window.innerHeight) {
        h = canvas.height = window.innerHeight;
      }

      ctx.fillStyle = '#FADF00';
      drawCircle(0, 0, w * 10);
      ctx.fillStyle = ctx.strokeStyle = 'green';

      t /= 1000;
      newSpiders.forEach((spider) => spider.tick(t));
      requestAnimationFrame(anim);
    };

    window.addEventListener('pointermove', onPointerMove);
    requestAnimationFrame(anim);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

    return (
        <section className='spider'>
            <canvas ref={canvasRef}/>
        </section>
    );
};

export default NotFound;