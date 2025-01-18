from isis_simulator import ISISNetwork

def main():
    network = ISISNetwork()
    
    while True:
        print("\nIS-IS Network Simulator")
        print("1. Add Router")
        print("2. Add Link")
        print("3. Calculate Routes")
        print("4. Display Routing Tables")
        print("5. Visualize Network")
        print("6. Exit")
        
        choice = input("Enter your choice (1-6): ")
        
        if choice == "1":
            router_id = input("Enter router ID: ")
            level = int(input("Enter router level (1 or 2): "))
            network.add_router(router_id, level)
            print(f"Router {router_id} added successfully!")
            
        elif choice == "2":
            router1 = input("Enter first router ID: ")
            router2 = input("Enter second router ID: ")
            cost = float(input("Enter link cost: "))
            network.add_link(router1, router2, cost)
            print(f"Link between {router1} and {router2} added successfully!")
            
        elif choice == "3":
            network.calculate_shortest_paths()
            print("Routes calculated successfully!")
            
        elif choice == "4":
            for router_id, router in network.routers.items():
                print(f"\nRouting table for Router {router_id}:")
                print("Destination\tNext Hop\tCost")
                print("-" * 40)
                for dest, route in router.routing_table.items():
                    print(f"{dest}\t\t{route['next_hop']}\t\t{route['cost']}")
                    
        elif choice == "5":
            network.visualize_network()
            
        elif choice == "6":
            print("Goodbye!")
            break
            
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main() 