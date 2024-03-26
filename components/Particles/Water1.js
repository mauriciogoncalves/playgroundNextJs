'use client';
import {useEffect} from 'react';

export default function Water1() {


    useEffect(() => {
        if (document.readyState !== 'complete') {
            const handler = () => {
                console.log('load');
            };
            window.addEventListener('load', handler);

            return () => {
                window.removeEventListener('load', handler);
            };
        } else {
            const timeout = window.setTimeout(() => {
                console.log('timeout');
                doTheMagic(window, "c");
            }, 0);
            return () => window.clearTimeout(timeout);
        }
    }, []);
    const doTheMagic = function (w, canvasId) {
        w.requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame;
        let canvas, ctx;
        let mouse = {x: 0, y: 0, px: 0, py: 0, down: false};


        var canvas_width = 500; //Needs to be a multiple of the resolution value below.
        var canvas_height = 500; //This too.


        canvas = document.getElementById(canvasId);
        resizeCanvasToDisplaySize(canvas);
        canvas_width = canvas.width * 0.8;
        canvas_height = canvas.height * 0.8;


        var resolution = 10; //Width and height of each cell in the grid.
        var pen_size = 100; //Radius around the mouse cursor coordinates to reach when stirring
        var num_cols = canvas_width / resolution; //This value is the number of columns in the grid.
        var num_rows = canvas_height / resolution; //This is number of rows.
        var speck_count = 4000; //This determines how many particles will be made.
        let vec_cells = [];
        let particles = [];

        function init() {
            canvas = document.getElementById(canvasId);
            canvas.style.background = "rgb(0,0,0,0)";
            resizeCanvasToDisplaySize(canvas);


            ctx = canvas.getContext("2d");
            canvas.width = canvas_width;
            canvas.height = canvas_height;
            for (let i = 0; i < speck_count; i++) {
                particles.push(new Particle(Math.random() * canvas_width, Math.random() * canvas_height));
            }
            for (let col = 0; col < num_cols; col++) {
                vec_cells[col] = [];
                for (let row = 0; row < num_rows; row++) {
                    vec_cells[col][row] = new Cell(col * resolution, row * resolution, resolution);
                    vec_cells[col][row].col = col;
                    vec_cells[col][row].row = row;
                }
            }
            for (let col = 0; col < num_cols; col++) {
                for (let row = 0; row < num_rows; row++) {
                    let cell_data = vec_cells[col][row];
                    let row_up = (row - 1 >= 0) ? row - 1 : num_rows - 1;
                    let col_left = (col - 1 >= 0) ? col - 1 : num_cols - 1;
                    let col_right = (col + 1 < num_cols) ? col + 1 : 0;
                    let up = vec_cells[col][row_up];
                    let left = vec_cells[col_left][row];
                    let up_left = vec_cells[col_left][row_up];
                    let up_right = vec_cells[col_right][row_up];
                    cell_data.up = up;
                    cell_data.left = left;
                    cell_data.up_left = up_left;
                    cell_data.up_right = up_right;
                    up.down = vec_cells[col][row];
                    left.right = vec_cells[col][row];
                    up_left.down_right = vec_cells[col][row];
                    up_right.down_left = vec_cells[col][row];
                }
            }
            w.addEventListener("mousedown", mouse_down_handler);
            w.addEventListener("touchstart", touch_start_handler);
            w.addEventListener("mouseup", mouse_up_handler);
            w.addEventListener("touchend", touch_end_handler);
            canvas.addEventListener("mousemove", mouse_move_handler, {passive: false});
            canvas.addEventListener("touchmove", touch_move_handler, {passive: false});
            draw();
        }

        function update_particle() {
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                if (p.x >= 0 && p.x < canvas_width && p.y >= 0 && p.y < canvas_height) {
                    let col = parseInt(p.x / resolution);
                    let row = parseInt(p.y / resolution);
                    let cell_data = vec_cells[col][row];
                    let ax = (p.x % resolution) / resolution;
                    let ay = (p.y % resolution) / resolution;
                    p.xv += (1 - ax) * cell_data.xv * 0.05;
                    p.yv += (1 - ay) * cell_data.yv * 0.05;
                    p.xv += ax * cell_data.right.xv * 0.05;
                    p.yv += ax * cell_data.right.yv * 0.05;
                    p.xv += ay * cell_data.down.xv * 0.05;
                    p.yv += ay * cell_data.down.yv * 0.05;
                    p.x += p.xv;
                    p.y += p.yv;
                    let dx = p.px - p.x;
                    let dy = p.py - p.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);
                    let limit = Math.random() * 0.5;
                    if (dist > limit) {
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p.px, p.py);
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p.x + limit, p.y + limit);
                        ctx.stroke();
                    }
                    p.px = p.x;
                    p.py = p.y;
                } else {
                    p.x = p.px = Math.random() * canvas_width;
                    p.y = p.py = Math.random() * canvas_height;
                    p.xv = 0;
                    p.yv = 0;
                }
                p.xv *= 0.5;
                p.yv *= 0.5;
            }
        }

        function draw() {
            let mouse_xv = mouse.x - mouse.px;
            let mouse_yv = mouse.y - mouse.py;
            for (let i = 0; i < vec_cells.length; i++) {
                let cell_datas = vec_cells[i];
                for (let j = 0; j < cell_datas.length; j++) {
                    let cell_data = cell_datas[j];
                    if (mouse.down) {
                        change_cell_velocity(cell_data, mouse_xv, mouse_yv, pen_size);
                    }
                    update_pressure(cell_data);
                }
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //console.log("asdas", globalVariable)
            if (false){
                ctx.strokeStyle = "rgb(107,114,128)";
            } else {
                ctx.strokeStyle = "#1976d2";
            }
            update_particle();
            for (let i = 0; i < vec_cells.length; i++) {
                let cell_datas = vec_cells[i];

                for (let j = 0; j < cell_datas.length; j++) {
                    let cell_data = cell_datas[j];

                    update_velocity(cell_data);

                }
            }
            mouse.px = mouse.x;
            mouse.py = mouse.y;
            requestAnimationFrame(draw);

        }


        function change_cell_velocity(cell_data, mvelX, mvelY, pen_size) {
            let dx = cell_data.x - mouse.x;
            let dy = cell_data.y - mouse.y;
            let dist = Math.sqrt(dy * dy + dx * dx);
            if (dist < pen_size) {
                if (dist < 4) {
                    dist = pen_size;
                }
                let power = pen_size / dist;
                cell_data.xv += mvelX * power;
                cell_data.yv += mvelY * power;
            }
        }

        function update_pressure(cell_data) {
            let pressure_x = (
                cell_data.up_left.xv * 0.5 //Divided in half because it's diagonal
                + cell_data.left.xv
                + cell_data.down_left.xv * 0.5 //Same
                - cell_data.up_right.xv * 0.5 //Same
                - cell_data.right.xv
                - cell_data.down_right.xv * 0.5 //Same
            );

            let pressure_y = (
                cell_data.up_left.yv * 0.5
                + cell_data.up.yv
                + cell_data.up_right.yv * 0.5
                - cell_data.down_left.yv * 0.5
                - cell_data.down.yv
                - cell_data.down_right.yv * 0.5
            );

            cell_data.pressure = (pressure_x + pressure_y) * 0.25;
        }

        function update_velocity(cell_data) {
            cell_data.xv += (
                cell_data.up_left.pressure * 0.5
                + cell_data.left.pressure
                + cell_data.down_left.pressure * 0.5
                - cell_data.up_right.pressure * 0.5
                - cell_data.right.pressure
                - cell_data.down_right.pressure * 0.5
            ) * 0.25;
            cell_data.yv += (
                cell_data.up_left.pressure * 0.5
                + cell_data.up.pressure
                + cell_data.up_right.pressure * 0.5
                - cell_data.down_left.pressure * 0.5
                - cell_data.down.pressure
                - cell_data.down_right.pressure * 0.5
            ) * 0.25;
            cell_data.xv *= 0.99;
            cell_data.yv *= 0.99;
        }

        function Cell(x, y, res) {
            this.x = x;
            this.y = y;
            this.r = res;
            this.col = 0;
            this.row = 0;
            this.xv = 0;
            this.yv = 0;
            this.pressure = 0;

        }

        function Particle(x, y) {
            this.x = this.px = x;
            this.y = this.py = y;
            this.xv = this.yv = 0;
        }

        function mouse_down_handler(e) {
            ////e.preventDefault(); //Prevents the default action from happening (e.g. navigation)
            mouse.down = true; //Sets the mouse object's "down" value to true
        }

        function mouse_up_handler() {
            mouse.down = false;
        }

        function touch_start_handler(e) {
            //e.preventDefault(); //Prevents the default action from happening (e.g. navigation)
            let rect = canvas.getBoundingClientRect();
            mouse.x = mouse.px = e.touches[0].pageX - rect.left; //Set both previous and current coordinates
            mouse.y = mouse.py = e.touches[0].pageY - rect.top;
            mouse.down = true; //Sets the mouse object's "down" value to true
        }

        function touch_end_handler(e) {
            if (!e.touches) mouse.down = false; //If there are no more touches on the screen, sets "down" to false.
        }

        function mouse_move_handler(e) {
            //e.preventDefault(); //Prevents the default action from happening
            mouse.px = mouse.x;
            mouse.py = mouse.y;
            let realPosition = getMousePos(canvas, e)
            mouse.x = realPosition.x || e.layerX;
            mouse.y = realPosition.y || e.layerY;
        }

        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
                y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
            };
        }

        function touch_move_handler(e) {
            //e.preventDefault(); //Prevents the default action from happening
            mouse.px = mouse.x;
            mouse.py = mouse.y;
            let rect = canvas.getBoundingClientRect();
            mouse.x = e.touches[0].pageX - rect.left;
            mouse.y = e.touches[0].pageY - rect.top;
        }


        function resizeCanvasToDisplaySize(canvas) {
            // look up the size the canvas is being displayed
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            // If it's resolution does not match change it
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = 1000;
                canvas.height = 1000;
                return true;
            }

            return false;
        }

        w.Fluid = {
            initialize: init
        }
        w.Fluid.initialize();
    };


    return (
        <>
            <canvas style={{width: "100%", height: "100%", zIndex: "-1"}} id="c"></canvas>
        </>
    )
}
