<script lang="ts">
    import Matter from "matter-js";
    import type { MouseConstraint } from "matter-js";
    import { onMount } from "svelte";
    let mainBody: HTMLElement;
    onMount(() => {
        if (window.innerWidth > 768) {
            let Engine = Matter.Engine,
                Render = Matter.Render,
                Events = Matter.Events,
                MouseConstraint = Matter.MouseConstraint,
                Mouse = Matter.Mouse,
                World = Matter.World,
                Bodies = Matter.Bodies;
            let engine = Engine.create(),
                world = engine.world;
            setInterval(() => {
                engine.gravity.y = engine.gravity.y === 1 ? -0.05 : 1;
            }, 5000);
            let mainElement = mainBody;
            let render = Render.create({
                element: mainElement,
                engine: engine,
                options: {
                    width: mainElement.offsetWidth,
                    height: mainElement.offsetHeight,
                    pixelRatio: 1,
                    wireframes: false,
                },
            });
            let ground = Bodies.rectangle(
                mainElement.offsetWidth / 2,
                mainElement.offsetHeight + 10,
                mainElement.offsetWidth,
                20,
                { isStatic: true },
            );
            let roof = Bodies.rectangle(
                mainElement.offsetWidth / 2,
                -10,

                mainElement.offsetWidth + 320,
                20,
                { isStatic: true },
            );
            let wallLeft = Bodies.rectangle(
                -80,

                mainElement.offsetHeight / 2,
                160,

                mainElement.offsetHeight,
                { isStatic: true },
            );
            let wallRight = Bodies.rectangle(
                mainElement.offsetWidth + 80,

                mainElement.offsetHeight / 2,
                160,
                1200,
                { isStatic: true },
            );
            let radius = 20;
            const imgArray = [
                "https://i.imgur.com/ptUWXgO.png",
                "https://i.imgur.com/nCP6iNV.png",
                "https://i.imgur.com/C1Mya1e.png",
                "https://i.imgur.com/Tlsvm2k.png",
                "https://i.imgur.com/Gc7utkV.png",
                "https://i.imgur.com/gxX7FZE.png",
                "https://i.imgur.com/kgP4sfr.png",
                "https://i.imgur.com/b2j4jZ1.png",
                "https://i.imgur.com/r0ehhn7.png",
                "https://i.imgur.com/rqNLpcd.png",
                "https://i.imgur.com/H7Ao1hQ.png",
                "https://i.imgur.com/Z86mXx2.png",
            ];
            imgArray.forEach((imgUrl) => {
                const img = new Image();
                img.src = imgUrl;

                img.onload = () => {
                    const imgWidth = img.naturalWidth;
                    const imgHeight = img.naturalHeight;
                    const ratio: number = 1.5;
                    let x = Math.random() * mainElement.offsetWidth;
                    let y = Math.random() * mainElement.offsetHeight;
                    let item = Bodies.rectangle(
                        x,
                        y,
                        imgWidth / ratio,
                        imgHeight / ratio,
                        {
                            chamfer: { radius: radius },
                            render: {
                                fillStyle: "#ff0000",
                                sprite: {
                                    texture: imgUrl,
                                    xScale: 1 / ratio,
                                    yScale: 1 / ratio,
                                },
                            },
                        },
                    );
                    World.add(engine.world, item);
                };
            });

            World.add(engine.world, [ground, wallLeft, wallRight, roof]);
            world.bodies.forEach((body) => {
                body.restitution = 1;
            });
            let mouse: any = Mouse.create(render.canvas),
                mouseConstraint = MouseConstraint.create(engine, {
                    mouse: mouse,
                    constraint: {
                        // stiffness: 1,
                        render: {
                            visible: false,
                        },
                    },
                });

            World.add(world, mouseConstraint);
            render.mouse = mouse;
            mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
            mouse.element.removeEventListener(
                "DOMMouseScroll",
                mouse.mousewheel,
            );
            let click = false;

            document.addEventListener("mousedown", () => (click = true));
            document.addEventListener("mousemove", () => (click = false));

            Events.on(mouseConstraint, "mouseup", function (event: any) {
                let mouseConstraint = event.source;
                let bodies = engine.world.bodies;
                if (!mouseConstraint.bodyB) {
                    for (let i = 0; i < bodies.length; i++) {
                        let body: any = bodies[i];
                        if (click === true) {
                            if (
                                Matter.Bounds.contains(
                                    body.bounds,
                                    mouseConstraint.mouse.position,
                                )
                            ) {
                                let bodyUrl: any = body.url;
                                // Hyperlinking feature
                                if (bodyUrl != undefined) {
                                    //window.location.href = bodyUrl;
                                    window.open(bodyUrl, "_blank");
                                }
                                break;
                            }
                        }
                    }
                }
            });
            Matter.Runner.run(engine);
            Render.run(render);
        }
    });
</script>

<div
    id="main-body"
    bind:this={mainBody}
    class="main-box w-full h-full relative rounded-3xl hidden lg:block"
></div>

<style>
    .main-box {
        background-image: linear-gradient(
                rgba(36, 36, 36, 0.7) 0.1em,
                transparent 0.1em
            ),
            linear-gradient(
                90deg,
                rgba(36, 36, 36, 0.7) 0.1em,
                transparent 0.1em
            );
        background-size: 2rem 2rem;
    }
</style>
