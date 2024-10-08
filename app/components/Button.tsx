import "../css/Button.css";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import Shapes from "./Shape";
import useMeasure from "react-use-measure";

const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2
};


export default function Button() {
    const [ref, bounds] = useMeasure({ scroll: false });
    const [isHover, setIsHover] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const resetMousePosition = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <MotionConfig transition={transition}>
            <a href="https://docs.google.com/forms/d/1azQmLTEt04oDg3TwJyTmQ-wbzgxiPLibbaQdSiTHtVU/viewform?edit_requested=true"
            >

                <motion.button
                    ref={ref}
                    initial={false}
                    animate={isHover ? "hover" : "rest"}
                    whileTap="press"
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.5 },
                        press: { scale: 1.4 }
                    }}
                    onHoverStart={() => {
                        resetMousePosition();
                        setIsHover(true);
                    }}
                    onHoverEnd={() => {
                        resetMousePosition();
                        setIsHover(false);
                    }}
                    onTapStart={() => setIsPress(true)}
                    onTap={() => setIsPress(false)}
                    onTapCancel={() => setIsPress(false)}
                    onPointerMove={(e) => {
                        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                    }}
                    className="hero-button"
                >
                    <motion.div
                        className="shapes"
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1 }
                        }}
                    >
                        <div className="pink blush" />
                        <div className="blue blush" />
                        <div className="container">
                            <Suspense fallback={null}>
                                <Shapes
                                    isHover={isHover}
                                    isPress={isPress}
                                    mouseX={mouseX}
                                    mouseY={mouseY}
                                />
                            </Suspense>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                        className="label"
                    >
                        Join Now
                    </motion.div>
                </motion.button>
            </a>
        </MotionConfig>
    );
}
