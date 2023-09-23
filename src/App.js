import TopNav from "./components/TopNav";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Experience from "./Experiences"

function App() {
  console.log(Experience)
  const ExperienceList = Experience.map(item =>{
    return <Card key={item.id} details={item}/>
  })
  return (
    <div className="App">
     <TopNav/>
     <Banner/>
     <div className="experiences">
      { ExperienceList}
     </div>
    </div>
  );
}

export default App;
