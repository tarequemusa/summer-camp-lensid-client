import {Link} from 'react-router-dom';
import footerLogo from '../../../assets/lensid-main-logo.png'
import Swal from 'sweetalert2';


const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email);
    Swal.fire({
        title: 'Your Subscription Successful',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    form.reset();
}

const Footer = () => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col justify-between items-center p-10 bg-opacity-75 bg-gray-600'>
                <div>
                    <div className='text-xl my-4 font-bold uppercase'>
                        Subscribe to our Newsletter
                    </div>
                    <p className='my-5'>To Get Exclusive Discount, Free Tips and News.</p>
                </div>
                <form onSubmit={handleLogin} className="form-control w-80">
                    <div className="relative form-control">
                        <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered w-full pr-16" required />
                        <button type="submit" className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </form>
            </div>
            <footer className="footer p-10 bg-sky-400 bg-opacity-70 text-base-content">
                <div>
                    <div>
                        <Link to='/'><img className='p-2 w-2/4 outline rounded-2xl bg-white bg-opacity-40' src={footerLogo} alt="" /></Link>
                    </div>
                    <h3 className="text-lg"><Link to="/"><span className='font-bold'>LensID</span></Link><br />An Institute of Photography since 2020</h3>
                </div>
                <div>
                    <span className="text-xl footer-title">Mailing Address</span>
                    <p className='text-lg'>
                        Lens ID Institute of Photography<br />
                        41 East 11th Street, 11th Floor, Suite 66<br />
                        New York, New York 10003
                    </p>
                    <p className='text-lg'>Email: info@lensid.com</p>
                </div>
                <div>
                    <span className="text-xl footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="text-xl footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-sky-500 text-base-content border-base-300">
                <div className="items-center justify-start grid-flow-col">
                    <div>Copyright &copy; {new Date().getFullYear()} - All right reserved by Lens ID.
                    </div>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.twitter.com" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                        <Link to="https://www.youtube.com" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link to="https://www.facebook.com" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;