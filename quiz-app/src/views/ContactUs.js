export default function ContactUs(){
    return (
        <>
        <div className="m-5">
            <h3>Contact Us</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label" for="name" > Name</label>
                    <input className="form-control" type="text" id="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="name" > E-mail</label>
                    <input className="form-control" type="text" id="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="name" > Your message</label>
                    <textarea className="form-control" type="text" id="name" />
                </div>
                <div>
                    <button className="btn btn-primary"> Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}