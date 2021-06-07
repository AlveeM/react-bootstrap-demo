import './App.css';
import RowExample from './components/RowExample';
import ColExample from './components/ColExample';
import Card from './components/Card';

import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

function App() {
  const title = "Provident";
  const text = "Similique tenetur harum molestiae qui molestiae. Quia quam nihil aliquid aut officiis molestias et illo libero. At optio ducimus facere et. Assumenda aut quis molestiae quisquam asperiores voluptas autem quia voluptatibus. Incidunt vitae et saepe consequatur non rerum eligendi."
  const url = "https://www.google.com";

  return (
    <div className="container">
      <h1 className="text-center">Row Example</h1>
      <RowExample />

      <h1 className="text-center my-4">Column Example</h1>
      {/* <div className="row">
        <div className="col-lg-8">1</div>
        <div className="col-lg-4">2</div>
      </div> */}
      <ColExample />

      <h1 className="text-center my-4">Card Example</h1>
      <div className="row justify-content-center">
        <div className="col-md-4 m-0 p-0">
          <Card title={title} text={text} url={url} />
        </div>
      </div>

      <h1 className="text-center my-4">Icon Examples</h1>
      <ArrowRight size={100} />
      <ArrowLeft size={100} />
    </div>
  );
}

export default App;
