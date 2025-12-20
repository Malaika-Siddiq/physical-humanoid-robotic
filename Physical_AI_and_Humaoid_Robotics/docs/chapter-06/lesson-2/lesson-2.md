---
sidebar_position: 2
---

# Lesson 2: Locomotion & Manipulation

## Learning Objectives
- Understand the principles of bipedal locomotion in humanoid robots
- Analyze manipulation strategies and dexterous control techniques
- Evaluate the integration of locomotion and manipulation in complex tasks
- Design control systems for coordinated locomotion and manipulation

## Introduction to Humanoid Locomotion

Humanoid locomotion represents one of the most challenging aspects of humanoid robotics, requiring the coordination of multiple degrees of freedom to achieve stable and efficient movement. Bipedal walking involves complex dynamics that must balance the robot's center of mass while maintaining contact with the ground through alternating support phases.

The fundamental challenge in humanoid locomotion lies in the underactuated nature of bipedal systems, where the robot has fewer actuators than degrees of freedom during the flight phase of walking. This underactuation requires sophisticated control strategies to maintain stability.

Dynamic walking approaches exploit the natural dynamics of the robot's mechanical system to achieve energy-efficient locomotion. These approaches contrast with static walking, which maintains stability at all times but is generally slower and less energy efficient.

The Zero Moment Point (ZMP) criterion provides a stability criterion for humanoid walking by ensuring that the ground reaction forces create no moment about a point on the ground. ZMP-based controllers are widely used for stable humanoid locomotion.

The design of locomotion controllers must account for the robot's kinematic and dynamic properties, actuator limitations, and environmental constraints such as uneven terrain and obstacles.

## Bipedal Walking Control

ZMP-based walking control represents a classical approach to humanoid locomotion that ensures stability by keeping the ZMP within the support polygon defined by the feet. This approach provides mathematically guaranteed stability but can result in conservative walking patterns.

The Linear Inverted Pendulum Model (LIPM) simplifies the humanoid dynamics to a point mass supported by a massless leg, enabling analytical solutions for walking pattern generation. This model forms the basis for many walking controllers.

Trajectory planning for bipedal walking involves generating center of mass (CoM) trajectories, foot placement positions, and timing that satisfy stability constraints while achieving desired walking speeds and directions.

The Capture Point concept extends ZMP-based control by identifying the location where the robot must step to come to a complete stop. This concept enables more dynamic and responsive walking behaviors.

Walking pattern generators create periodic or aperiodic walking motions that can be modulated in real-time based on sensory feedback and environmental conditions. These generators provide the foundation for adaptive locomotion.

## Dynamic Locomotion and Balance

Dynamic locomotion in humanoid robots involves controlled falling and recovery, exploiting momentum and dynamic effects to achieve efficient and natural movement. This approach can achieve higher speeds and better energy efficiency than statically stable walking.

Balance control systems maintain the robot's stability during locomotion and in response to external disturbances. These systems typically operate at high frequencies and use sensory feedback from IMUs, force sensors, and other sources.

The concept of the Divergent Component of Motion (DCM) provides a measure of the robot's state relative to its stable manifold, enabling predictive balance control that anticipates and prevents falls.

Whole-body balance control coordinates the motion of all body segments to maintain stability, using the arms, torso, and legs to adjust the center of mass position and angular momentum.

Reactive balance strategies respond to disturbances and unexpected events by adjusting the walking pattern or taking recovery steps. These strategies must operate quickly to prevent falls while maintaining the overall task objective.

## Manipulation Fundamentals

Humanoid manipulation involves the use of the robot's arms and hands to interact with objects in the environment. The redundancy in humanoid arms provides multiple solutions for reaching and manipulating tasks while accommodating balance and other constraints.

Grasp planning in humanoid robots involves determining stable grasp configurations that enable the robot to securely hold and manipulate objects. This planning must consider object properties, robot hand kinematics, and task requirements.

Dexterous manipulation requires precise control of finger movements and contact forces to perform complex tasks such as tool use, assembly, or delicate object handling. This control often involves tactile feedback and force control.

The kinematic redundancy in humanoid arms enables multiple solutions for reaching tasks, allowing the system to optimize for secondary objectives such as obstacle avoidance, joint limit avoidance, or energy efficiency.

Manipulation planning must consider the dynamic interaction between the robot and manipulated objects, including the effects of object mass, friction, and environmental constraints.

## Dexterous Control Strategies

Impedance control in manipulation enables the robot to adapt its mechanical impedance to the task requirements, providing compliant behavior for safe interaction or stiff behavior for precise positioning.

Force control strategies regulate the contact forces between the robot and objects, enabling tasks such as assembly, surface following, or delicate object handling. These strategies often work in conjunction with position control.

Hybrid position/force control combines position and force control in different coordinate directions, allowing the robot to maintain position in unconstrained directions while controlling force in constrained directions.

Adaptive control strategies adjust control parameters based on changing environmental conditions or object properties, improving the robustness of manipulation tasks.

Learning-based manipulation approaches use machine learning techniques to improve manipulation performance through experience, enabling the robot to adapt to new objects or environments.

## Locomotion-Manipulation Integration

The integration of locomotion and manipulation in humanoid robots creates complex coordination challenges, as both systems compete for the robot's computational and actuation resources. This integration is essential for tasks that require simultaneous mobility and manipulation.

Dual-task performance involves managing the allocation of resources between locomotion and manipulation, ensuring that both tasks can be performed effectively while maintaining stability.

Whole-body control frameworks coordinate locomotion and manipulation by formulating control problems that consider the entire robot system simultaneously. These frameworks can optimize for multiple objectives including balance, manipulation accuracy, and energy efficiency.

Task prioritization schemes determine how conflicts between locomotion and manipulation objectives are resolved, ensuring that critical tasks such as maintaining balance take precedence over less critical manipulation tasks.

The design of control hierarchies enables the coordination of locomotion and manipulation at different time scales, with high-frequency balance control operating alongside slower manipulation planning.

## Advanced Locomotion and Manipulation

Dynamic manipulation involves the use of robot motion to enhance manipulation capabilities, such as throwing, catching, or using momentum to move heavy objects. This approach exploits the full dynamic capabilities of the humanoid system.

Locomotion during manipulation tasks requires the robot to maintain balance while performing manipulation, often using the arms and legs to counteract manipulation forces and moments.

Terrain-adaptive locomotion enables humanoid robots to navigate challenging terrains while performing manipulation tasks, requiring the integration of perception, planning, and control systems.

The evaluation of locomotion and manipulation systems involves metrics for stability, efficiency, task success, and human-like performance that capture the complex requirements of humanoid robotics applications.
