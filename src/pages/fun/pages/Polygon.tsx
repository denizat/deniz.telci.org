import React, { useEffect, useRef } from "react"
import "tailwindcss/tailwind.css"
import "./canvas.css"



// export default () => (
//     <div>Hello im here</div>
// )


export default () => {

    const canvasRef = useRef(null)
    useEffect(() => {
        const canvasObj = canvasRef.current
        const canvas = canvasObj
        const ctx = canvasObj.getContext('2d')


        ///////////////////////////////////// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

        /**
     * Mostly borrowed from Michael Jackson: https://gist.github.com/mjackson/5311256
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes s and l are contained in the set [0, 1] and
     * h is contained in the set [0,360] and
     * returns #RRGGBB.
     *
     * @param   {number}  h       The hue
     * @param   {number}  s       The saturation
     * @param   {number}  l       The lightness
     * @return  {string}          The RGB representation
     */
        const hslToRgb = (h: number, s: number, l: number): string => {
            h /= 360; // I added this
            var r, g, b;

            if (s == 0) {
                r = g = b = l; // achromatic
            } else {
                const hue2rgb = (p: number, q: number, t: number) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            // I added this too because I wanted the output to be a string in the #RRGGBB format
            const doubleZero = (string: string) => {
                if (string === "0") {
                    return "00";
                }
                return string;
            };

            // I made this return too.
            return (
                "#" +
                doubleZero(Math.round(r * 255).toString(16)) +
                doubleZero(Math.round(g * 255).toString(16)) +
                doubleZero(Math.round(b * 255).toString(16))
            );
        };


        // Used to make sure im passing the right things.
        type Point = {
            x: number;
            y: number;
        };
        type Polygon = Point[];

        // Used to set the center of the polygon
        const center: Point = {
            x: canvas.width / 2,
            y: canvas.height / 2,
        };



        /**
         * Generates a polygon.
         * @param n Number of vertices
         * @param r Circumscribed radius
         * @param x Center x coordinate, assumed 0
         * @param y Center y coordinate, assumed 0
         * @returns Return a polygon
         */
        const polygon = (
            n: number,
            r: number,
            x: number = 0,
            y: number = 0
        ): Polygon => {
            const angleChange = Math.PI - (n - 2) * (Math.PI / n);
            var angle = -Math.PI / 2;
            var out: Polygon = [];
            for (let i = 0; i < n; i++) {
                out[i] = { x: r * Math.cos(angle) + x, y: r * Math.sin(angle) + y };
                angle += angleChange;
            }
            return out;
        };

        /**
         * Selects a random vertex that is not the same as the previously chosen vertex.
         * @param prevRand Previous randomly chosen number
         * @param vertices Total number of vertices to choose from
         * @returns Restricted random number
         */
        const notSame = (prevRand: number, vertices: number) => {
            var rand = Math.floor(Math.random() * vertices);
            while (prevRand === rand) {
                rand = Math.floor(Math.random() * vertices);
            }
            return rand;
        };

        /**
         * Selects a random vertex that is not one place away clockwise.
         * @param prevRand Previous randomly chosen number
         * @param vertices Total number of vertices to choose from
         * @returns Restricted random number
         */
        const notRight = (prevRand: number, vertices: number) => {
            while (true) {
                var rand = Math.floor(Math.random() * vertices);
                if (prevRand == vertices - 1) {
                    if (rand != 0) {
                        return rand;
                    }
                } else {
                    if (rand != prevRand + 1) {
                        return rand;
                    }
                }
            }
        };

        /**
         * Selects a random vertex that is not one place away counterclockwise.
         * @param prevRand Previous randomly chosen number
         * @param vertices Total number of vertices to choose from
         * @returns Restricted random number
         */
        const notLeft = (prevRand: number, vertices: number) => {
            while (true) {
                var rand = Math.floor(Math.random() * vertices);
                if (prevRand == 0) {
                    if (rand != vertices - 1) {
                        return rand;
                    }
                } else {
                    if (rand != prevRand - 1) {
                        return rand;
                    }
                }
            }
        };

        /**
         * Draws a fractal using the chaos game method on the canvas element.
         * @param points The vertices of a polygon.
         * @param iterations Amount of points to be placed per call of this function.
         * @param technique Restriction technique used, assumes random selection.
         * @param r The percentage of distance to be traveled from the current point to the selected point.
         */
        const drawChaosFrac = (
            points: Polygon,
            iterations: number,
            technique: Function = () => {
                return Math.floor(Math.random() * points.length);
            },
            r: number = (points.length + 3) / points.length
        ): void => {
            r = 1 / r;
            let prevPoint: Point = points[0];
            let randomNum = 0;
            for (let i = 0; i < iterations; i++) {
                randomNum = technique(randomNum, points.length);
                prevPoint = {
                    x: prevPoint.x + (points[randomNum].x - prevPoint.x) * r,
                    y: prevPoint.y + (points[randomNum].y - prevPoint.y) * r,
                };
                ctx.fillStyle = hslToRgb((360 / points.length) * randomNum, 1, 0.5);
                ctx.fillRect(prevPoint.x, prevPoint.y, 1, 1);
            }
        };
        ////////////

        drawChaosFrac(polygon(5, center.x, center.x, center.y), 100000)
    })



    return (
        <canvas
            ref={canvasRef}
            width="1000"
            height="1000"
            className="canvas"
        ></canvas>
    )
}