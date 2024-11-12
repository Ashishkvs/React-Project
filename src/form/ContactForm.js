export function ContactForm(){
    function search(formData) {
        console.log(formData);
        
    }
    return<>
    <h2>Contact Form</h2>
    <form action={search}>

        <input name="query"/>
        <button type="submit">Submit </button>
    </form>
    </>
}