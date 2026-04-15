import React from "react";
import { motion, useInView } from "framer-motion";
import "./HowWeWork.scss";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const HowWeWork = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.32,
        delayChildren: 0.25,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const tagArrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const roadVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.3,
        ease: "easeInOut",
      },
    },
  };

  const dashVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.75,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.15 + custom * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 160,
        damping: 14,
      },
    }),
  };

  const connectorVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 1.45 + custom * 0.18,
        duration: 0.85,
        ease: "easeInOut",
      },
    }),
  };

  const labelVariants = {
    hidden: (custom) => ({
      opacity: 0,
      y: custom === 1 || custom === 3 ? -18 : 18,
      x: custom === 0 || custom === 2 ? -12 : 12,
    }),
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 1.75 + custom * 0.18,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const labels = [
    { title: "Understand Your", subtitle: "Needs", pos: "label-1", custom: 0 },
    { title: "Plan the Right", subtitle: "Solution", pos: "label-2", custom: 1 },
    { title: "Execute with", subtitle: "Accuracy", pos: "label-3", custom: 2 },
    { title: "Provide Ongoing", subtitle: "Support", pos: "label-4", custom: 3 },
  ];

  return (
    <motion.section
      className="how-we-work"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="how-we-work__header">
        <motion.p className="how-we-work__tag" variants={headerVariants}>
          <motion.span
            variants={tagArrowVariants}
            initial="hidden"
            animate={isInView ? ["visible", "animate"] : "hidden"}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <MdKeyboardDoubleArrowUp className="tag-arrow" />
          </motion.span>
          HOW WE WORK
        </motion.p>

        <motion.h2 variants={headerVariants}>
          We follow a clear process to ensure smooth
          <br />
          execution and consistent support at every step.
        </motion.h2>
      </div>

      <div className="how-we-work__road-wrapper">
        <svg
          className="how-we-work__road"
          viewBox="0 0 1440 620"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M-40 318
               C 70 420, 180 390, 310 292
               C 410 216, 500 172, 560 198
               C 625 226, 640 292, 610 372
               C 585 440, 598 486, 655 498
               C 735 515, 760 386, 835 392
               C 895 397, 891 516, 965 514
               C 1042 512, 1040 286, 1148 274
               C 1237 264, 1242 378, 1320 414
               C 1370 438, 1420 438, 1480 388"
            className="road-shadow"
            variants={roadVariants}
          />

          <motion.path
            d="M-40 300
               C 70 402, 180 372, 310 274
               C 410 198, 500 154, 560 180
               C 625 208, 640 274, 610 354
               C 585 422, 598 468, 655 480
               C 735 497, 760 368, 835 374
               C 895 379, 891 498, 965 496
               C 1042 494, 1040 268, 1148 256
               C 1237 246, 1242 360, 1320 396
               C 1370 420, 1420 420, 1480 370"
            className="road-main"
            variants={roadVariants}
          />

          <motion.path
            d="M-40 300
               C 70 402, 180 372, 310 274
               C 410 198, 500 154, 560 180
               C 625 208, 640 274, 610 354
               C 585 422, 598 468, 655 480
               C 735 497, 760 368, 835 374
               C 895 379, 891 498, 965 496
               C 1042 494, 1040 268, 1148 256
               C 1237 246, 1242 360, 1320 396
               C 1370 420, 1420 420, 1480 370"
            className="road-inner-border"
            variants={roadVariants}
          />

          <motion.path
            d="M-40 300
               C 70 402, 180 372, 310 274
               C 410 198, 500 154, 560 180
               C 625 208, 640 274, 610 354
               C 585 422, 598 468, 655 480
               C 735 497, 760 368, 835 374
               C 895 379, 891 498, 965 496
               C 1042 494, 1040 268, 1148 256
               C 1237 246, 1242 360, 1320 396
               C 1370 420, 1420 420, 1480 370"
            className="road-dash"
            variants={dashVariants}
          />

          <motion.circle
            cx="138"
            cy="358"
            r="8"
            className="road-dot"
            variants={dotVariants}
            custom={0}
          />
          <motion.circle
            cx="625"
            cy="312"
            r="8"
            className="road-dot"
            variants={dotVariants}
            custom={1}
          />
          <motion.circle
            cx="890"
            cy="438"
            r="8"
            className="road-dot"
            variants={dotVariants}
            custom={2}
          />
          <motion.circle
            cx="1284"
            cy="381"
            r="8"
            className="road-dot"
            variants={dotVariants}
            custom={3}
          />

          <motion.path
              d="M138 360 L138 434 Q138 476 182 476 L182 500" 
            className="connector"
            variants={connectorVariants}
            custom={0}
          />
          <motion.path
            d="M626 311 L626 264 Q626 230 670 230 L670 186" className="connector"
            variants={connectorVariants}
            custom={1}
          />
          <motion.path
            d="M890 438 L890 508 Q890 548 956 548 L956 572"
            className="connector"
            variants={connectorVariants}
            custom={2}
          />
          <motion.path
            d="M1285 381 L1328 381 Q1368 381 1368 340 L1368 286"
            className="connector"
            variants={connectorVariants}
            custom={3}
          />
        </svg>

        {labels.map((label) => (
          <motion.div
            key={label.pos}
            className={`label ${label.pos}`}
            variants={labelVariants}
            custom={label.custom}
          >
            <h3>
              {label.title}
              <br />
              {label.subtitle}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowWeWork;