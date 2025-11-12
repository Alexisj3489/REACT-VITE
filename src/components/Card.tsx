function Card() {
  function CardHeader() {
    return (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h2z5FWVFGZFYnWldhNrEngvNMNdKHOGinA&s"
        className="card-img-top"
        alt="Imagen de ejemplo"
      />
    );
  }

  function CardBody() {
    return (
      <div className="card-body">
        <h5 className="card-title text-info fw-bold">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-success">
            Go somewhere
          </a>
          <button className="btn btn-outline-danger">
            Details
          </button>
        </div>
      </div>
    );
  }

  function CardFooter() {
    return (
      <div className="card-footer text-muted text-center">
        Updated 2 days ago
      </div>
    );
  }

  return (
    <div className="card shadow-lg border-0" style={{ width: "18rem" }}>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default CardContainer;