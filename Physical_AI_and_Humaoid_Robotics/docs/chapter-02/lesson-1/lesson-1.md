---
sidebar_position: 1
---

# Lesson 1: ROS 2 Architecture

## Learning Objectives
- Understand the fundamental architecture of ROS 2 and its design principles
- Analyze the differences between ROS 1 and ROS 2 architectures
- Evaluate the role of middleware in ROS 2 communication
- Design ROS 2 applications using the client library abstraction

## Introduction to ROS 2 Architecture

ROS 2 (Robot Operating System 2) represents a fundamental redesign of the original ROS framework, addressing critical limitations in scalability, security, and real-time performance. The architecture of ROS 2 is built around the Data Distribution Service (DDS) middleware, which provides a standardized, vendor-neutral communication infrastructure that enables robust, real-time, distributed systems.

The core design philosophy of ROS 2 emphasizes quality of service (QoS) policies, security by design, and real-time performance capabilities. Unlike ROS 1, which relied on a centralized master node for name resolution and communication coordination, ROS 2 implements a decentralized architecture where nodes discover each other dynamically through the DDS middleware. This design enables ROS 2 to scale effectively in complex robotic systems and distributed environments.

The ROS 2 architecture provides several key abstractions that simplify robot application development: nodes for process isolation, topics for publish-subscribe communication, services for request-response patterns, and actions for goal-oriented communication with feedback. These abstractions are implemented consistently across multiple programming languages through client library implementations.

## Middleware and DDS Integration

The Data Distribution Service (DDS) serves as the foundational communication layer in ROS 2, providing a standardized interface for data-centric publish-subscribe communication. DDS implementations from various vendors (such as Fast DDS, Cyclone DDS, and RTI Connext) offer different performance characteristics and feature sets, allowing users to select the most appropriate middleware for their specific application requirements.

DDS provides built-in Quality of Service (QoS) policies that enable fine-grained control over communication behavior. These policies include reliability settings (reliable vs. best-effort delivery), durability (transient vs. volatile data), deadline specifications, and liveliness monitoring. The QoS system allows ROS 2 applications to be configured for different performance and reliability requirements without modifying application code.

The middleware abstraction layer in ROS 2, known as rmw (ROS Middleware), provides a consistent interface that allows ROS 2 to work with different DDS implementations. This abstraction enables users to switch between middleware implementations without changing their application code, promoting vendor independence and enabling optimization for specific use cases.

DDS also provides advanced features such as content-filtered topics, which allow subscribers to receive only data that matches specific criteria, and time-based filtering, which enables subscribers to request historical data within specific time windows. These features enhance the flexibility and efficiency of ROS 2 communication patterns.

## Node and Process Management

In ROS 2, a node represents an instance of a computational process that performs specific robot-related tasks. Nodes are organized into namespaces that provide logical grouping and prevent naming conflicts. The node abstraction provides a consistent interface for creating publishers, subscribers, services, and actions, while managing the underlying communication infrastructure.

Node lifecycle management in ROS 2 introduces a formal state machine that allows for controlled initialization, configuration, activation, and deactivation of node functionality. This lifecycle system enables complex systems to be brought up and torn down in a controlled manner, ensuring that dependencies are properly managed and resources are properly allocated and released.

The composition feature in ROS 2 allows multiple nodes to be combined into a single process, reducing inter-process communication overhead and improving performance in resource-constrained environments. This capability is particularly valuable for embedded robotic systems where memory and processing resources are limited.

Node introspection capabilities in ROS 2 provide tools for monitoring and debugging running systems. The rclcpp and rclpy client libraries provide consistent interfaces for accessing node information, parameter management, and logging systems that enable comprehensive system monitoring and analysis.

## Quality of Service and Communication Patterns

Quality of Service (QoS) policies in ROS 2 provide a powerful mechanism for controlling communication behavior without modifying application logic. The QoS system enables ROS 2 applications to be configured for different performance and reliability requirements, from high-frequency sensor data with best-effort delivery to critical control commands with reliable, persistent delivery.

The reliability QoS policy determines whether messages must be delivered reliably or if best-effort delivery is acceptable. Reliable delivery ensures that all messages are delivered but may introduce latency, while best-effort delivery provides lower latency but does not guarantee message delivery. The choice between these policies depends on the specific requirements of the communication pattern.

Durability policies control whether late-joining subscribers receive historical data. Transient/durable durability ensures that new subscribers receive the last known value for topics, while volatile durability provides only new messages. History policies specify how many messages to store for each topic, enabling fine-tuning of memory usage and data availability.

Deadline and lifespan QoS policies provide additional control over communication timing. Deadline policies specify how often data should be published, while lifespan policies determine how long published data remains valid. These policies enable ROS 2 systems to maintain temporal consistency and prevent the use of stale data.

## Security and Real-Time Considerations

ROS 2 incorporates security features directly into its architecture through DDS Security, which provides authentication, access control, and encryption capabilities. The security framework enables secure communication between nodes without requiring external security infrastructure, making it suitable for safety-critical robotic applications.

Real-time performance in ROS 2 is achieved through careful integration with real-time operating systems and middleware implementations that support real-time scheduling. The architecture provides mechanisms for controlling thread priorities, memory allocation, and timing constraints to meet real-time requirements.

The ROS 2 security system uses X.509 certificates for authentication and provides fine-grained access control based on node identities and permissions. Security policies can be configured to control which nodes can publish to or subscribe from specific topics, call specific services, or access specific parameters.

The real-time capabilities of ROS 2 enable it to be used in applications requiring deterministic timing behavior, such as control systems, sensor processing, and safety-critical operations. The architecture supports real-time scheduling policies and provides tools for analyzing timing behavior and identifying potential timing issues.