import "./App.css";
import Menu from "./Menu";
import Content from "./Content";
import { ReactComponent as AnimationSvg } from "./df.svg";

function App() {
  return (
    <div className="App h-full flex flex-col">
      <Menu />
      <Content />
      <div id="animation" className="flex bg-black">
        <AnimationSvg />
      </div>
      <div className="w-full bg-gray-200">
        <p className="w-40">
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit
          amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default App;
