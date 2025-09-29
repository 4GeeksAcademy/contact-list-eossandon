import Image from "../assets/img/rigo-baby.jpg";
import '../index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const Contact = () => {
    return (
        <div className="container">
                <div className="row  border border-danger">
                    <div className="col-lg-2 col-md-4 col-sm-4 d-flex text-align-center justify-content-center border border-danger">
                        <img className="img-contact border border-danger" src={Image} alt="" />
                    </div>

                    <div className="col-lg-7 col-md-6 col-sm-4 info-contact border border-danger">
                        <h3>Esteban Ossandon</h3>
                        <h6><i class="bi bi-geo-alt-fill">a</i></h6>
                        <h6><i class="bi bi-telephone-fill">b</i></h6>
                        <h6><i class="bi bi-envelope-open-fill">c</i></h6>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-4 d-flex text-align-end justify-content-end border border-danger">
                        <i class="bi bi-pencil-fill btn"></i><i class="bi bi-trash-fill btn"></i>
                    </div>
                </div>
        </div>
    )
}

