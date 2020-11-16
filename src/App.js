import './App.css';
import NavBar from './components/NavBar';
import ProductTable from './components/ProductTable';
import ProductCategory from './components/ProductCategory';
import DataFetching from './components/DataFetching';
import TestChart from './components/dashboard/TestChart';
import TestChart2 from './components/dashboard/TestChart2';


function App() {
  return (
    <div>
    <NavBar />
    <ProductTable />
    <ProductCategory />
  {/* <DataFetching /> */}
    <TestChart />
    <TestChart2 />

  </div>

  );
}

export default App;

