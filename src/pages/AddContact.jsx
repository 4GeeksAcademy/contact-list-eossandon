import useGlobalReducer from "../hooks/useGlobalReducer";



export const AddContact = () => {
    return (
        <div className="container mt-5">
            <form className="form">
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Full Name:</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>

                <div class="mb-3">
                    <label for="basic-url" class="form-label">Address:</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>

                <div class="mb-3">
                    <label for="basic-url" class="form-label">Phone:</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>

                <div class="mb-3">
                    <label for="basic-url" class="form-label">Email:</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}