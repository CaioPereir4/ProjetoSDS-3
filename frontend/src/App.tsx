import Navbar from "./components/navbar";
import Footer from "./components/footer";
import DataTable from "./components/datatable";
import Barchart from "./components/barchar";
import Donutchart from "components/donutchart";

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <h1 className ="text-primary py-10">Dashboard de Vendas</h1>
      <div className="row px-3">
        <div className="cols-sm-6">
            <h5 className="text-center text-secundary">Taxa de Sucesso</h5>
            <Barchart />
            </div>
            <div className="cols-sm-6">
            <h5 className="text-center text-secundary">Taxa de sucesso(%)</h5>
            <Donutchart />
           </div>      
           </div>
           <div className="py-3">
             <h2 className="text-primary">
               Todas Vendas

             </h2>


           </div>

      <DataTable />  
    </div>
    <Footer />
    
    </>
  );
}

export default App;
