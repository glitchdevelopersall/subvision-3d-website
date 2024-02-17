import gsap from "gsap";

export const ScrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position, {
        x: 2.47,
        y: 0.93,
        z: 6.84,
        scrollTrigger: {
            trigger: ".sound-section",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
            trigger: ".sound-section",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
    .to(position, {
        x: -11.47,
        y: 2.224,
        z: -0.448,
        scrollTrigger: {
            trigger: ".display-section",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
            trigger: ".display-section",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
    })
}