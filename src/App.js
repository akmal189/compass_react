import './App.css';
import Header from './components/Header/Header';
import FirstBlock from './components/FirstBlock/FirstBlock';
import ProblemsBlock from './components/ProblemsBlock/ProblemsBlock';
import SolutionsBlock from './components/SolutionsBlock/SolutionsBlock';
import FeaturesBlock from './components/FeaturesBlock/FeaturesBlock';
import BenefitsBlock from './components/BenefitsBlock/BenefitsBlock';
import StepsBlock from './components/StepsBlock/StepsBlock';
import ServicesBlock from './components/ServicesBlock/ServicesBlock';
import StoriesBlock from './components/StoriesBlock/StoriesBlock';
import Footer from './components/Footer/Footer';

function App(props) {
    return (
        <div className="App">
            <div className="site-wrapper">
                <Header state={props.state} />
                <FirstBlock state={props.state} />
                <ProblemsBlock state={props.state} />
                <SolutionsBlock state={props.state} />
                <FeaturesBlock state={props.state} />
                <BenefitsBlock state={props.state} />
                <StepsBlock state={props.state} />
                <ServicesBlock state={props.state} />
                <StoriesBlock state={props.state} />
                <Footer state={props.state} />
            </div>
        </div>
    );
}

export default App;
