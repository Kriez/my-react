function Add() {

    return (
        <>
            <div className="container">
                <h1>Add</h1>
                <form>
                    <hr />
                    <h2>Latsdrag</h2>
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-primary"><i className="fa fa-plus"></i>Uppvärmning</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td><strong>0</strong> kg</td>
                                        <td><strong>10</strong> reps</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td><strong>20</strong> kg</td>
                                        <td><strong>8</strong> reps</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td><strong>20</strong> kg</td>
                                        <td><strong>8</strong> reps</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td><strong>25</strong> kg</td>
                                        <td><strong>6</strong> reps</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td><strong>25</strong> kg</td>
                                        <td><strong>5</strong> reps</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-primary"><i className="fa fa-plus"></i>Set</button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa fa-plus"></i>Kommentar
                            </button>                            
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-3">
                            <button type="button" className="btn btn-primary"><i className="fa fa-plus"></i>Övning</button>
                        </div>
                    </div>
                </form>


            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Kommentar för Latsdrag</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Det kändes....." aria-label="comment" aria-describedby="basic-addon1" />
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <script>

            </script>
        </>
    )
}

export default Add;
