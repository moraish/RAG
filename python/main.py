import subprocess
import json
import requests
from bs4 import BeautifulSoup
from typing import Dict, List, Optional, Any

class ReActAgent:
    def __init__(self):
        self.thought_history: List[Dict[str, Any]] = []
    
    def think(self, observation: Optional[str] = None) -> str:
        """Reason about the current state and decide what to do next."""
        if observation is None:
            thought = "I need to scrape company names from the Y Combinator companies page. I'll fetch the page content first."
        elif "html content" in observation:
            thought = "I have the HTML content. Now I need to parse it and extract company names."
        elif "Error" in observation:
            thought = "There was an error. I need to determine what went wrong and try another approach."
        elif observation.startswith("Extracted"):
            thought = "I've successfully extracted the company names. I should save them to a file."
        else:
            thought = f"I observed: {observation[:100]}... I need to analyze this further."
        
        self.thought_history.append({"type": "thought", "content": thought})
        return thought
    
    def act(self) -> str:
        """Decide on and return an action to take."""
        last_thought = self.thought_history[-1]["content"]
        
        if "fetch the page content" in last_thought:
            action = "fetch_webpage:https://www.ycombinator.com/companies"
        elif "parse it and extract" in last_thought:
            action = "parse_companies"
        elif "save them to a file" in last_thought:
            action = "save_companies"
        else:
            action = "analyze_observation"
        
        self.thought_history.append({"type": "action", "content": action})
        return action
    
    def observe(self, action: str) -> str:
        """Execute the action and observe the result."""
        if action.startswith("fetch_webpage:"):
            url = action.split(":", 1)[1]
            try:
                headers = {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
                }
                response = requests.get(url, headers=headers)
                response.raise_for_status()
                self.html_content = response.text
                
                # Save the HTML content to a file
                with open("yc_companies_page.html", "w", encoding="utf-8") as f:
                    f.write(self.html_content)
                
                observation = "Successfully retrieved html content and saved to yc_companies_page.html"
            except Exception as e:
                observation = f"Error fetching webpage: {str(e)}"
        
        elif action == "parse_companies":
            try:
                soup = BeautifulSoup(self.html_content, "html.parser")
                
                # The YC company page might use JavaScript to load content, 
                # so we'll try multiple selector approaches
                
                # Attempt 1: Using common patterns for company listings
                company_elements = soup.select(".company-card .company-name")
                
                if not company_elements:
                    # Attempt 2: Try different selectors
                    company_elements = soup.select(".company .name")
                
                if not company_elements:
                    # Attempt 3: More generic approach
                    company_elements = soup.select("div[class*='company'] span[class*='name']")
                
                if not company_elements:
                    # Attempt 4: Find h4 elements that might contain company names
                    company_elements = soup.find_all("h4")
                
                if not company_elements:
                    # Last attempt: Just look for any element with 'company' in its class
                    company_elements = soup.find_all(class_=lambda c: c and "company" in c.lower())
                
                companies = [element.text.strip() for element in company_elements if element.text.strip()]
                
                # If still no companies found, we'll extract all text nodes that might be company names
                if not companies:
                    # This is a very generic fallback that might include non-company text
                    companies = [element.text.strip() for element in soup.find_all(['h3', 'h4', 'strong', 'b']) 
                                if element.text.strip() and len(element.text.strip()) < 50]
                
                self.companies = companies
                
                # Show first few companies and count
                sample = companies[:5] if companies else []
                observation = f"Extracted {len(companies)} companies. First few: {sample}"
                
            except Exception as e:
                observation = f"Error parsing companies: {str(e)}"
                
        elif action == "save_companies":
            try:
                with open("yc_companies.json", "w", encoding="utf-8") as f:
                    json.dump(self.companies, f, indent=2)
                observation = f"Saved {len(self.companies)} companies to yc_companies.json"
            except Exception as e:
                observation = f"Error saving companies: {str(e)}"
        
        else:
            observation = "Unknown action"
        
        self.thought_history.append({"type": "observation", "content": observation})
        return observation
    
    def react_loop(self, max_iterations: int = 3):
        """Run the ReAct loop for a specified number of iterations."""
        print("Starting ReAct Loop...")
        for i in range(max_iterations):
            print(f"\nIteration {i+1}:")
            
            # Think
            thought = self.think(None if i == 0 else self.thought_history[-1]["content"])
            print(f"🤔 Thought: {thought}")
            
            # Act
            action = self.act()
            print(f"🎬 Action: {action}")
            
            # Observe
            observation = self.observe(action)
            print(f"👁️ Observation: {observation}")
        
        print("\nReAct Loop completed.")
        return self.thought_history


if __name__ == "__main__":
    agent = ReActAgent()
    history = agent.react_loop()
    
    # Save the reasoning chain to a file
    with open("react_history.json", "w") as f:
        json.dump(history, f, indent=2)
    
    print("Reasoning history saved to react_history.json")