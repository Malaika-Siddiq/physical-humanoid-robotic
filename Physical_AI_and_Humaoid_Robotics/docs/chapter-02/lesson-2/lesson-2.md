---
sidebar_position: 2
---

# Lesson 2: Building ROS 2 Systems

## Learning Objectives
- Design and implement ROS 2 packages and nodes using modern development practices
- Configure and manage ROS 2 launch files for complex system deployment
- Implement parameter management and configuration systems
- Apply testing and debugging techniques for ROS 2 applications

## Package Structure and Development

ROS 2 packages represent the fundamental unit of software organization and distribution in the ROS 2 ecosystem. Each package contains source code, configuration files, launch files, and documentation organized according to established conventions that facilitate code reuse and collaboration. The package structure follows the ament build system, which provides a modern, extensible framework for building and installing ROS 2 software.

The modern CMake-based build system in ROS 2 provides enhanced dependency management and cross-platform compatibility compared to the catkin system used in ROS 1. Packages declare their dependencies in package.xml files, which specify required packages, executables, and other resources. The build system automatically resolves dependencies and ensures proper compilation order.

Source code organization within ROS 2 packages follows established patterns that promote maintainability and readability. C++ packages typically include header files in include directories, source files in src directories, and test files in test directories. Python packages follow standard Python module organization with proper package initialization files.

The ament_cmake framework provides comprehensive support for building, testing, and installing ROS 2 packages. It includes tools for code generation, interface definition processing, and automatic generation of build files based on package specifications. This automation reduces the overhead of package maintenance and ensures consistency across different packages.

Modern development practices in ROS 2 emphasize the use of interfaces (messages, services, and actions) as contracts between different components of a system. These interfaces are defined in .msg, .srv, and .action files that are automatically compiled into language-specific implementations for C++, Python, and other supported languages.

## Node Development and Implementation

Node development in ROS 2 involves creating executable programs that perform specific robot-related tasks while participating in the distributed communication system. The rclcpp and rclpy client libraries provide consistent interfaces for creating nodes in C++ and Python respectively, with identical functionality and similar APIs that enable code portability between languages.

Node initialization in ROS 2 requires careful consideration of parameter configuration, callback groups, and executor setup. The node constructor accepts parameters that define the node name, namespace, and other configuration options. Nodes must be registered with an executor to process callbacks and maintain communication with other nodes in the system.

Publisher and subscriber implementation in ROS 2 nodes involves creating communication endpoints with appropriate Quality of Service settings. Publishers are created with topic names and QoS profiles that specify reliability, durability, and other communication characteristics. Subscribers are created with topic names, callback functions, and compatible QoS profiles that match the publisher configuration.

Service and action implementation provides synchronous and asynchronous communication patterns for request-response and goal-oriented interactions respectively. Services enable nodes to provide specific functionality to other nodes, while actions provide more complex interactions with feedback and goal management capabilities for long-running operations.

The parameter system in ROS 2 nodes enables runtime configuration and dynamic reconfiguration of node behavior. Parameters can be declared with default values, type constraints, and validation callbacks. The parameter system supports both static parameters that are set at startup and dynamic parameters that can be modified during runtime.

## Launch System and System Deployment

The launch system in ROS 2 provides a comprehensive framework for starting and managing complex robotic systems composed of multiple nodes with specific configurations. The launch files use Python syntax to define node compositions, parameter configurations, and system dependencies in a flexible and powerful manner.

Launch files can specify multiple nodes with different configurations, parameter files, and remapping rules that connect topics and services between nodes. The launch system supports conditional launching based on command-line arguments, environment variables, or other runtime conditions, enabling flexible deployment configurations.

The launch system provides built-in support for monitoring node health and restarting failed nodes automatically. This capability is crucial for production robotic systems that must maintain operation over extended periods. The system can also implement graceful shutdown procedures that ensure proper cleanup of resources.

Composable nodes represent an advanced launch concept that allows multiple nodes to be combined into a single process for improved performance and reduced resource consumption. The composition framework enables the creation of optimized system configurations where communication overhead is minimized through shared memory and direct function calls.

Launch configurations can include parameter files, configuration overlays, and environment variable settings that customize system behavior for different deployment scenarios. The launch system supports inheritance and composition of launch configurations, enabling the creation of reusable system configurations.

## Parameter Management and Configuration

Parameter management in ROS 2 systems provides a centralized mechanism for configuring node behavior and system-wide settings. Parameters can be set through command-line arguments, parameter files, or dynamic reconfiguration during runtime. The parameter system supports various data types including integers, floats, strings, booleans, and arrays.

Parameter files in YAML format provide a convenient way to store system configurations that can be loaded at startup. These files can specify parameters for individual nodes or system-wide settings that affect multiple nodes. The parameter file format supports namespaces and complex data structures for organizing configuration information.

The parameter service in ROS 2 enables nodes to query and modify parameters of other nodes dynamically. This capability enables system-level management and reconfiguration without requiring node restarts. Parameter callbacks allow nodes to react to parameter changes and adjust their behavior accordingly.

Parameter validation and constraints ensure that parameter values remain within acceptable ranges and meet specific requirements. Nodes can register callback functions that validate parameter changes before they are applied, preventing invalid configurations that could cause system failures.

The parameter system supports parameter declaration with default values, type information, and description strings that enable automatic documentation and validation. This approach promotes good software engineering practices and reduces configuration errors.

## Testing and Debugging Strategies

Testing in ROS 2 systems requires specialized approaches that account for the distributed and asynchronous nature of robotic applications. Unit testing focuses on individual components and algorithms, while integration testing verifies the interaction between different nodes and communication patterns.

The ROS 2 testing framework provides tools for creating test fixtures that simulate communication with other nodes, enabling isolated testing of individual components. Mock objects and test doubles can be used to simulate dependencies and test specific scenarios without requiring full system deployment.

Integration testing in ROS 2 involves testing the interaction between multiple nodes and verifying that communication patterns work correctly. The testing framework supports launching test nodes alongside the system under test and verifying expected behavior through message monitoring and service calls.

Debugging ROS 2 systems requires tools for monitoring communication, analyzing performance, and identifying bottlenecks in distributed applications. The rqt ecosystem provides graphical tools for monitoring topics, services, and node status, while command-line tools enable automated monitoring and analysis.

Performance analysis tools in ROS 2 enable the identification of communication bottlenecks, timing issues, and resource constraints that affect system performance. These tools provide insights into message rates, latency, and system resource usage that guide optimization efforts.

Logging and diagnostic systems in ROS 2 provide comprehensive information about system behavior and enable post-hoc analysis of system operation. The logging system supports different severity levels and can be configured to provide detailed information for debugging while maintaining performance during normal operation.