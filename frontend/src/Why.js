import React from "react";
import {
  FaChartLine,
  FaHandshake,
  FaSearchDollar,
  FaUserShield,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Why.css";

const Why = () => {
  const features = [
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Expert Market Knowledge",
      description:
        "Knows the best time to buy or sell with data-driven insights",
    },
    {
      icon: <FaSearchDollar className="feature-icon" />,
      title: "Premium Property Selection",
      description: "Exclusive access to off-market and high-value listings",
    },
    {
      icon: <FaHandshake className="feature-icon" />,
      title: "Trusted Partnerships",
      description: "Strong relationships with developers and property owners",
    },
    {
      icon: <FaUserShield className="feature-icon" />,
      title: "Client Protection",
      description: "Full transparency and compliance with all regulations",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const featureVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="why-section">
      <div className="why-container">
        <motion.h2
          className="why-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Zestate?
        </motion.h2>

        <motion.p
          className="why-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We combine expertise with innovation to deliver exceptional results
        </motion.p>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={featureVariants}
              whileHover="hover"
            >
              <div className="feature-icon-container">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Why;
