import './Overview.scss';
import { NavLink } from 'react-router-dom';

const Overview = () => {
    return (
        <article className='overview'>
            <p>
                The effect that a classroom teacher has on a student is second only to a parent.
                Nationwide, teachers salaries and work conditions should better reflect the value they provide to our lives. This application is designed to assist teachers in their search for school districts that might better meet their needs.
            </p>
            <p>
                Login with an email and then provide an address to search for the nearest school district. Your report Card will provide you with *insert info*. You can save this district to your Favorites for later review. If you don't want to save any info or enter an email, you can continue as a guest. Thank you for using our application and for helping create a better future for our children. Welcome to Report Card!
            </p>
            <NavLink to='/login'>
                <div className='nav-container'>
                    <label>Continue To Report Card</label>
                </div>
            </NavLink>
        </article>
    );
};

export default Overview;