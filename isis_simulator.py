from typing import Dict, List, Set
import networkx as nx
import matplotlib.pyplot as plt

class ISISRouter:
    def __init__(self, router_id: str, level: int = 2):
        self.router_id = router_id
        self.level = level  # 1 for L1, 2 for L2 router
        self.neighbors: Dict[str, float] = {}  # neighbor_id: cost
        self.routing_table: Dict[str, Dict] = {}  # destination: {next_hop, cost}
        self.area_id = "49.0001"  # Default area ID
        
    def add_neighbor(self, neighbor_id: str, cost: float = 1):
        """Add a neighboring router with associated cost"""
        self.neighbors[neighbor_id] = cost
        
    def remove_neighbor(self, neighbor_id: str):
        """Remove a neighboring router"""
        if neighbor_id in self.neighbors:
            del self.neighbors[neighbor_id]

class ISISNetwork:
    def __init__(self):
        self.routers: Dict[str, ISISRouter] = {}
        self.graph = nx.Graph()
        
    def add_router(self, router_id: str, level: int = 2):
        """Add a new router to the network"""
        router = ISISRouter(router_id, level)
        self.routers[router_id] = router
        self.graph.add_node(router_id)
        
    def add_link(self, router1_id: str, router2_id: str, cost: float = 1):
        """Add a bidirectional link between two routers"""
        if router1_id in self.routers and router2_id in self.routers:
            self.routers[router1_id].add_neighbor(router2_id, cost)
            self.routers[router2_id].add_neighbor(router1_id, cost)
            self.graph.add_edge(router1_id, router2_id, weight=cost)
            
    def calculate_shortest_paths(self):
        """Calculate shortest paths using Dijkstra's algorithm"""
        for router in self.routers.values():
            paths = nx.single_source_dijkstra_path(self.graph, router.router_id)
            lengths = nx.single_source_dijkstra_path_length(self.graph, router.router_id)
            
            for dest, path in paths.items():
                if dest != router.router_id:
                    next_hop = path[1] if len(path) > 1 else dest
                    router.routing_table[dest] = {
                        'next_hop': next_hop,
                        'cost': lengths[dest]
                    }
                    
    def visualize_network(self):
        """Visualize the network topology"""
        pos = nx.spring_layout(self.graph)
        plt.figure(figsize=(10, 8))
        nx.draw(self.graph, pos, with_labels=True, node_color='lightblue',
                node_size=500, font_size=10, font_weight='bold')
        plt.title("IS-IS Network Topology")
        plt.show() 