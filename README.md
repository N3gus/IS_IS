# IS-IS Routing Protocol Simulator

A Python-based interactive simulator for the Intermediate System to Intermediate System (IS-IS) routing protocol. This tool allows network engineers and students to understand and experiment with IS-IS routing concepts through a user-friendly interface.

## Project Description

The IS-IS Routing Protocol Simulator is an educational tool designed to demonstrate the fundamental concepts of IS-IS routing. It provides a simplified implementation of IS-IS routing mechanisms, allowing users to create network topologies, establish router relationships, and visualize routing decisions in real-time.

## Features

- 🌐 Interactive network topology creation
- 🔄 Support for Level 1 and Level 2 routers
- 📊 Dynamic routing table calculation using Dijkstra's algorithm
- 🔗 Custom link cost configuration
- 📈 Real-time network visualization
- 💻 User-friendly command-line interface
- 🗺️ Routing table display and management

## Technologies Used

- Python 3.x
- NetworkX (for graph operations and visualization)
- Matplotlib (for network topology visualization)
- Type hints (for better code documentation)

## Installation

1. Clone the repository.
2. Create a virtual environment (optional but recommended).
3. Install required dependencies, i.e matplotlib.


## Usage

1. Start the simulator.
2. Use the interactive menu to:
   - Add routers to the network
   - Create links between routers
   - Calculate routes
   - View routing tables
   - Visualize the network topology

### Example Program Flow:
1. Add routers using option 1
2. Create links between routers using option 2
3. Calculate routes using option 3
4. View the routing tables using option 4
5. Visualize the network using option 5

## Programmatic Usage

### Create a new network
network = ISISNetwork()

### Add routers
network.add_router("R1", level=2)
network.add_router("R2", level=2)
network.add_router("R3", level=2)

### Add links
network.add_link("R1", "R2", cost=1)
network.add_link("R2", "R3", cost=1)

### Calculate routes
network.calculate_shortest_paths()

### Visualize the network
network.visualize_network()


## Project Structure
isis-routing-simulator/
├── isis_simulator.py # Core simulator implementation
├── isis_simulator_cli.py # Command-line interface
└── README.md # Project documentation

- `isis_simulator.py`: Contains the core classes (`ISISRouter` and `ISISNetwork`)
- `isis_simulator_cli.py`: Provides the interactive command-line interface

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change.

## Roadmap

- [ ] Area support and level-specific routing
- [ ] LSP generation and flooding
- [ ] Dynamic neighbor discovery
- [ ] Authentication mechanisms
- [ ] Multiple metrics support
- [ ] Route summarization
- [ ] GUI interface

## License

This project is licensed under the MIT License - see the [LICENSE](https://rem.mit-license.org) file for details.

## Contact

Mweetwa Nketani - [@mnketani](https://www.linkedin.com/in/mweetwa-nketani-a62825212)

Project Link: [https://github.com/N3gus/IS_IS](https://github.com/N3gus/IS_IS)

---

⭐️ If you find this project useful, please consider giving it a star!