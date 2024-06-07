<script lang="ts">
    import Matter from "matter-js";
    import type { MouseConstraint } from "matter-js";
    import { onMount } from "svelte";
    let mainBody: HTMLElement;
    onMount(() => {
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
            engine.gravity.y = engine.gravity.y === 1 ? -0.5 : 1;
        }, 5000);
        // engine.gravity.y = 0;
        let mainElement = mainBody;
        let render = Render.create({
            element: mainElement,
            engine: engine,
            options: {
                width: mainElement.offsetWidth,
                height: mainElement.offsetHeight,
                pixelRatio: 2,
                wireframes: false,
            },
        });
        let ground = Bodies.rectangle(
            mainElement.offsetWidth / 2 + 160,
            mainElement.offsetHeight + 80,
            mainElement.offsetWidth + 320,
            160,
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
        let roof = Bodies.rectangle(
            mainElement.offsetWidth / 2 + 160,
            -80,

            mainElement.offsetWidth + 320,
            160,
            { isStatic: true },
        );
        let radius = 20;
        let art = Bodies.rectangle(35, 460, 112, 80, {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "https://i.imgur.com/NwQqeng.png",
                    xScale: 1,
                    yScale: 1,
                },
            },
        });
        let threeD = Bodies.rectangle(90, 460, 104, 80, {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "https://i.imgur.com/ptUWXgO.png",
                    xScale: 1,
                    yScale: 1,
                },
            },
        });
        let graphic = Bodies.rectangle(60, 420, 210, 80, {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "https://i.imgur.com/TyOmVtt.png",
                    xScale: 1,
                    yScale: 1,
                },
            },
        });
        let photo = Bodies.rectangle(50, 380, 172, 80, {
            chamfer: { radius: radius },
            render: {
                sprite: {
                    texture: "https://i.imgur.com/tc3MsJP.png",
                    xScale: 1,
                    yScale: 1,
                },
            },
        });

        World.add(engine.world, [
            ground,
            wallLeft,
            wallRight,
            roof,
            art,
            threeD,
            graphic,
            photo,
        ]);
        world.bodies.forEach((body) => {
            body.restitution = 0.6; // Adjust the restitution value as needed
        });
        let mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false,
                    },
                },
            });

        World.add(world, mouseConstraint);
        render.mouse = mouse;
        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
        let click = false;

        document.addEventListener("mousedown", () => (click = true));
        document.addEventListener("mousemove", () => (click = false));
        document.addEventListener("mouseup", () =>
            console.log(click ? "click" : "drag"),
        );

        Events.on(
            mouseConstraint,
            "mouseup",
            function (event: MouseConstraint) {
                let mouseConstraint = event.source;
                let bodies = engine.world.bodies;
                if (!mouseConstraint.bodyB) {
                    for (let i = 0; i < bodies.length; i++) {
                        let body = bodies[i];
                        if (click === true) {
                            if (
                                Matter.Bounds.contains(
                                    body.bounds,
                                    mouseConstraint.mouse.position,
                                )
                            ) {
                                let bodyUrl = body.url;
                                console.log("Body.Url >> " + bodyUrl);
                                // Hyperlinking feature
                                if (bodyUrl != undefined) {
                                    //window.location.href = bodyUrl;
                                    window.open(bodyUrl, "_blank");
                                    console.log("Hyperlink was opened");
                                }
                                break;
                            }
                        }
                    }
                }
            },
        );
        Matter.Runner.run(engine);
        Render.run(render);
    });
</script>

<div
    id="main-body"
    bind:this={mainBody}
    class="main-box w-96 h-full relative rounded-3xl"
></div>
