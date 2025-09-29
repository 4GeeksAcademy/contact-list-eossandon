import Image from "../assets/img/rigo-baby.jpg";
import '../index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const Contact = () => {
    return (
        <div className="container">
            <ul>
                <li className="row align-items-center text ce border border-danger">
                    <img className="col-lg-2 col-md-2 img-contact border border-danger" src={Image} alt="" />
                    <div className="col-lg-10 col-md-8 info-contact border border-danger">
                        <h3>Esteban Ossandon<i class="bi bi-pencil-fill btn"></i><i class="bi bi-trash-fill btn"></i></h3>
                        <h6><i class="bi bi-geo-alt-fill">a</i></h6>
                        <h6><i class="bi bi-telephone-fill">b</i></h6>
                        <h6><i class="bi bi-envelope-open-fill">c</i></h6>
                    </div>
                </li>
            </ul>
        </div>
    )
}

