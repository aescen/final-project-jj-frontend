import { useNavigate } from 'react-router-dom';
import React from 'react'
// import Button from 'react-bootstrap'
const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className="display-3">Dashboard</h2>
            <br />
            <br />
            <div className='row justify-content-center me-5'>
                <div className='col-md-4 pt-2'>
                    <div className="card crop-img ">
                        <img
                            src="https://siuntung.com/wp-content/uploads/2019/04/Desain-Denah-Rumah-Sederhana-dengan-3-Kamar-Tidur.jpg"
                            alt='rumah'
                            className="card-img-top"
                            width="200"
                            height="200"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Collections</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                                odit atque nam animi dolores itaque.
                            </p>
                            <button
                                onClick={() => navigate("/vendor-collections")}
                            >
                                Button
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-2">
                    <div className="card crop-img">
                        <img
                            src="https://siuntung.com/wp-content/uploads/2019/04/Desain-Denah-Rumah-Sederhana-dengan-3-Kamar-Tidur.jpg"
                            alt='rumah'
                            className="card-img-top"
                            width="200"
                            height="200"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Upload Design</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                                odit atque nam animi dolores itaque.
                            </p>
                            <button
                                onClick={() => navigate("/")}
                            >
                                Button
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 pt-2">
                    <div className="card crop-img">
                        <img
                            src="https://siuntung.com/wp-content/uploads/2019/04/Desain-Denah-Rumah-Sederhana-dengan-3-Kamar-Tidur.jpg"
                            alt='rumah'
                            className="card-img-top"
                            width="200"
                            height="200"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Sales Report</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                                odit atque nam animi dolores itaque.
                            </p>
                            <button
                                onClick={() => navigate("/")}
                            >
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Dashboard